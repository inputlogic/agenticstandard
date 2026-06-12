'use client'

import { useState, useEffect, useRef } from 'react'
import { CornerBrackets } from 'components/corner-brackets'
import s from './agent-ops-terminal.module.scss'

type ScriptLine = {
  agent: string
  text: string
  status: 'done' | 'review'
}

type AgentOpsTerminalProps = {
  script: ScriptLine[]
  title?: string
  maxLines?: number
  typingDelay?: number
  lineGap?: [number, number]
  startDelay?: number
  className?: string
}

function tokenize(text: string): string[] {
  return text.match(/\s*\S+\s*/g) || []
}

function timestamp() {
  const d = new Date()
  return [d.getHours(), d.getMinutes(), d.getSeconds()]
    .map(n => String(n).padStart(2, '0'))
    .join(':')
}

type DisplayLine = ScriptLine & {
  time: string
  shown: number
  state: 'typing' | 'pending' | 'review' | 'done'
  tokens: string[]
}

function StatusBadge({ status }: { status: string }) {
  if (status === 'typing') return null
  if (status === 'pending') return <span className={s.statusPending}>⋯ running</span>
  if (status === 'review') return <span className={s.statusReview}>● review</span>
  return <span className={s.statusDone}>✓ done</span>
}

export function AgentOpsTerminal({
  script,
  title = 'Agent Ops',
  maxLines = 8,
  typingDelay = 55,
  lineGap = [500, 1100],
  startDelay = 1300,
  className = '',
}: AgentOpsTerminalProps) {
  const reduced = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const [lines, setLines] = useState<DisplayLine[]>(() =>
    reduced
      ? script.slice(-maxLines).map(l => ({
          ...l,
          time: timestamp(),
          shown: tokenize(l.text).length,
          state: l.status === 'review' ? 'review' : 'done',
          tokens: tokenize(l.text),
        }))
      : []
  )
  const timers = useRef<ReturnType<typeof setTimeout>[]>([])
  const alive = useRef(true)

  useEffect(() => {
    if (reduced) return
    alive.current = true

    const schedule = (fn: () => void, delay: number) => {
      const id = setTimeout(() => {
        if (alive.current) {
          if (document.hidden) { schedule(fn, 250); return }
          fn()
        }
      }, delay)
      timers.current.push(id)
    }

    const processLine = (idx: number) => {
      const line = script[idx]
      const tokens = tokenize(line.text)

      setLines(prev => [
        ...prev.slice(-(maxLines - 1)),
        { ...line, time: timestamp(), shown: 0, state: 'typing', tokens },
      ])

      const typeToken = (pos: number) => {
        if (pos > tokens.length) {
          schedule(() => {
            setLines(prev =>
              prev.map((l, i) =>
                i === prev.length - 1
                  ? { ...l, state: l.status === 'review' ? 'review' : 'done' }
                  : l
              )
            )
            schedule(
              () => processLine((idx + 1) % script.length),
              lineGap[0] + Math.random() * (lineGap[1] - lineGap[0])
            )
          }, 600 + Math.random() * 300)
          return
        }

        setLines(prev =>
          prev.map((l, i) =>
            i === prev.length - 1
              ? { ...l, shown: pos, state: pos === tokens.length ? 'pending' : 'typing' }
              : l
          )
        )
        schedule(() => typeToken(pos + 1), typingDelay * (0.8 + Math.random() * 0.5))
      }

      typeToken(1)
    }

    schedule(() => processLine(0), startDelay)

    return () => {
      alive.current = false
      timers.current.forEach(clearTimeout)
      timers.current = []
    }
  }, [])

  return (
    <div className={`${s.terminal} ${className}`}>
      <CornerBrackets />
      <div className={s.header}>
        <span className={s.title}>{title}</span>
        <span className={s.live}>
          <span className={s.liveDot} aria-hidden="true" />
          Live
        </span>
      </div>
      <div aria-live="off" className={s.feed}>
        {lines.map((line, i) => {
          const tokens = line.tokens
          const fading = lines.length === maxLines && i === 0
          return (
            <div key={`${line.time}-${line.agent}-${i}`} className={`${s.row} ${fading ? s.fading : ''}`}>
              <span className={s.time}>{line.time}</span>
              <span className={s.content}>
                <span className={s.agentName}>{line.agent}</span>
                {tokens.slice(0, line.shown ?? tokens.length).join('')}
                {line.state === 'typing' && <span className={s.caret} />}
                {' '}
                <StatusBadge status={line.state} />
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

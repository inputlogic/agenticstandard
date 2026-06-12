'use client'

import { ReactNode, useState, useEffect, useRef, useMemo, ElementType, Fragment } from 'react'
import s from './text-stream.module.scss'

type Segment = { text: string, em?: boolean } | { node: ReactNode, label: string } | { br: true }

type Token = { key: string, br?: true, node?: ReactNode, text?: string, em?: boolean }

type TextStreamProps = {
  as?: ElementType
  segments: Segment[]
  play?: boolean
  tokenDelay?: number
  startDelay?: number
  className?: string
  style?: React.CSSProperties
  onDone?: () => void
}

function tokenize(text: string): string[] {
  return text.match(/\s*\S+\s*/g) || []
}

export function TextStream({
  as: Tag = 'h1',
  segments,
  play = true,
  tokenDelay = 70,
  startDelay = 0,
  className = '',
  style,
  onDone,
}: TextStreamProps) {
  const tokens: Token[] = useMemo(() =>
    segments.flatMap((seg, i): Token[] => {
      if ('br' in seg) return [{ key: `b${i}`, br: true as const }]
      if ('node' in seg) return [{ key: `n${i}`, node: seg.node }]
      return tokenize(seg.text).map((t, j) => ({
        key: `t${i}-${j}`,
        text: t,
        em: 'em' in seg ? seg.em : false,
      }))
    }),
    [segments]
  )

  const ariaLabel = useMemo(() =>
    segments.map(seg => {
      if ('br' in seg) return ''
      if ('node' in seg) return seg.label
      return seg.text
    }).join(''),
    [segments]
  )

  const reduced = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const [count, setCount] = useState(() => reduced ? tokens.length : 0)
  const doneRef = useRef(false)
  const onDoneRef = useRef(onDone)
  onDoneRef.current = onDone

  useEffect(() => {
    if (!play || reduced) {
      if (!doneRef.current) {
        doneRef.current = true
        setCount(tokens.length)
        onDoneRef.current?.()
      }
      return
    }
    let cancelled = false
    const jitter = 0.4
    const step = (delay: number) => {
      return setTimeout(() => {
        if (cancelled) return
        if (document.hidden) { step(200); return }
        setCount(prev => {
          const next = Math.min(prev + 1, tokens.length)
          if (next >= tokens.length && !doneRef.current) {
            doneRef.current = true
            queueMicrotask(() => onDoneRef.current?.())
          } else if (next < tokens.length) {
            step(tokenDelay * (1 - jitter / 2 + Math.random() * jitter))
          }
          return next
        })
      }, delay)
    }
    const id = step(startDelay || tokenDelay)
    return () => { cancelled = true; clearTimeout(id) }
  }, [play, tokens.length, tokenDelay, startDelay, reduced])

  const done = count >= tokens.length

  return (
    <Tag className={className} style={style} aria-label={ariaLabel}>
      <span aria-hidden="true">
        {tokens.map((tok, i) => (
          <Fragment key={tok.key}>
            {'br' in tok ? (
              <br />
            ) : (
              <span className={`${s.word} ${i < count ? s.on : ''}`}>
                {'node' in tok
                  ? tok.node
                  : tok.em
                    ? <em>{tok.text}</em>
                    : tok.text
                }
              </span>
            )}
            {!done && i === count - 1 && !('br' in tok) && (
              <span className={s.caret} />
            )}
          </Fragment>
        ))}
      </span>
    </Tag>
  )
}

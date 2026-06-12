'use client'

import { useState, useEffect, useRef } from 'react'
import s from './word-cycle.module.scss'

type WordCycleProps = {
  words: string[]
  interval?: number
  startDelay?: number
  typeSpeed?: number
  deleteSpeed?: number
  className?: string
}

export function WordCycle({
  words,
  interval = 2800,
  startDelay = 1400,
  typeSpeed = 95,
  deleteSpeed = 55,
  className = '',
}: WordCycleProps) {
  const reduced = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const [display, setDisplay] = useState(words[0])
  const [started, setStarted] = useState(false)
  const timers = useRef<ReturnType<typeof setTimeout>[]>([])

  useEffect(() => {
    if (reduced) return
    let active = true

    const schedule = (fn: () => void, delay: number) => {
      const id = setTimeout(() => { if (active) { if (document.hidden) { schedule(fn, 300); return } fn() } }, delay)
      timers.current.push(id)
    }

    const deleteThen = (current: string, next: string) => {
      if (current.length === 0) { schedule(() => typeTo(next, 1), 320); return }
      setDisplay(current.slice(0, -1))
      schedule(() => deleteThen(current.slice(0, -1), next), deleteSpeed * (0.85 + Math.random() * 0.3))
    }

    const typeTo = (word: string, pos: number) => {
      setDisplay(word.slice(0, pos))
      if (pos >= word.length) { schedule(() => cycleFrom(words.indexOf(word)), interval); return }
      schedule(() => typeTo(word, pos + 1), typeSpeed * (0.75 + Math.random() * 0.5))
    }

    const cycleFrom = (idx: number) => {
      const next = words[(idx + 1) % words.length]
      deleteThen(words[idx], next)
    }

    schedule(() => { setStarted(true); schedule(() => cycleFrom(0), interval) }, startDelay)

    return () => { active = false; timers.current.forEach(clearTimeout); timers.current = [] }
  }, [reduced])

  if (reduced) return <span className={className}>{words[0]}</span>

  return (
    <span className={`${s.wrap} ${className}`}>
      {display}
      {started && <span className={s.caret} />}
    </span>
  )
}

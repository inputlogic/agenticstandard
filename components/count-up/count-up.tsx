'use client'

import { useState, useEffect, useRef } from 'react'
import s from './count-up.module.scss'

type CountUpProps = {
  to: number
  prefix?: string
  play?: boolean
  duration?: number
  className?: string
}

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3)
}

export function CountUp({
  to,
  prefix = '',
  play,
  duration = 900,
  className = '',
}: CountUpProps) {
  const elRef = useRef<HTMLSpanElement>(null)
  const [visible, setVisible] = useState(false)
  const reduced = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  useEffect(() => {
    if (reduced) { setVisible(true); return }
    const el = elRef.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); obs.disconnect() }
    }, { threshold: 0.15 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [reduced])

  const shouldPlay = play !== undefined ? play : visible
  const [value, setValue] = useState(() => reduced ? to : 0)
  const started = useRef(false)

  useEffect(() => {
    if (!shouldPlay || started.current) return
    started.current = true
    if (reduced) { setValue(to); return }

    const start = performance.now()
    let raf: number

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      setValue(Math.round(easeOutCubic(progress) * to))
      if (progress < 1) raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    const fallback = setTimeout(() => setValue(to), duration + 200)
    return () => { cancelAnimationFrame(raf); clearTimeout(fallback) }
  }, [shouldPlay, to, duration, reduced])

  const formatted = `${prefix}${value.toLocaleString('en-US')}`
  const fullText = `${prefix}${to.toLocaleString('en-US')}`

  return (
    <span ref={elRef} className={`${s.wrap} ${className}`}>
      <span aria-hidden="true" className={s.sizer}>{fullText}</span>
      <span className={s.value}>{formatted}</span>
    </span>
  )
}

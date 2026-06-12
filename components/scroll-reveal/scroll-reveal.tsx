'use client'

import { ReactNode, useRef, useState, useEffect, ElementType } from 'react'
import s from './scroll-reveal.module.scss'

type ScrollRevealProps = {
  children: ReactNode
  as?: ElementType
  delay?: number
  className?: string
  threshold?: number
}

export function ScrollReveal({
  children,
  as: Tag = 'div',
  delay = 0,
  className = '',
  threshold = 0.15,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setShown(true)
      return
    }
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          obs.disconnect()
        }
      },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])

  return (
    <Tag
      ref={ref}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={`${s.reveal} ${shown ? s.shown : ''} ${className}`}
    >
      {children}
    </Tag>
  )
}

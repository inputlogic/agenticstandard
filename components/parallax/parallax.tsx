'use client'

import { ReactNode, useRef, useEffect } from 'react'

type ParallaxProps = {
  children: ReactNode
  speed?: number
  maxShift?: number
  className?: string
}

export function Parallax({
  children,
  speed = -0.08,
  maxShift = 56,
  className = '',
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const el = ref.current
    if (!el) return

    let raf: number | null = null
    let last = 0

    const update = () => {
      raf = null
      if (window.innerWidth < 881) {
        if (last !== 0) {
          last = 0
          el.style.transform = ''
        }
        return
      }
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight
      const center = rect.top + rect.height / 2 - last
      const offset = (vh / 2 - center) / vh
      const shift = Math.max(-maxShift, Math.min(maxShift, offset * speed * vh))
      if (Math.abs(shift - last) > 0.1) {
        last = shift
        el.style.transform = `translate3d(0, ${shift.toFixed(1)}px, 0)`
      }
    }

    const onScroll = () => {
      if (raf === null) raf = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      if (raf) cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      el.style.transform = ''
    }
  }, [speed, maxShift])

  return (
    <div ref={ref} className={`${className}`} style={{ willChange: 'transform' }}>
      {children}
    </div>
  )
}

'use client'

import { ReactNode, useRef, useEffect } from 'react'

type HeroDriftProps = {
  children: ReactNode
  drift?: number
  fadeTo?: number
  className?: string
}

export function HeroDrift({
  children,
  drift = 0.18,
  fadeTo = 0.35,
  className = '',
}: HeroDriftProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const el = ref.current
    if (!el) return

    let raf: number | null = null

    const update = () => {
      raf = null
      const scrollY = window.scrollY
      const vh = window.innerHeight
      const progress = Math.min(scrollY / (vh * 0.9), 1)
      const shift = Math.min(scrollY, vh) * drift
      el.style.transform = `translate3d(0, ${shift.toFixed(1)}px, 0)`
      el.style.opacity = (1 - progress * (1 - fadeTo)).toFixed(3)
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
      el.style.opacity = ''
    }
  }, [drift, fadeTo])

  return (
    <div ref={ref} className={className} style={{ willChange: 'transform' }}>
      {children}
    </div>
  )
}

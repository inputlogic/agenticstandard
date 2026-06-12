'use client'

import { useRef, useEffect } from 'react'
import { NetworkCanvas } from 'components/network-canvas'
import s from './network-bg.module.scss'

export function NetworkBg() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const el = ref.current
    if (!el) return

    let raf: number | null = null

    const update = () => {
      raf = null
      const max = document.documentElement.scrollHeight - window.innerHeight
      const progress = max > 0 ? Math.min(window.scrollY / max, 1) : 0
      el.style.transform = `translate3d(0, ${(-progress * window.innerHeight * 0.2).toFixed(1)}px, 0)`
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
    }
  }, [])

  return (
    <div className={s.wrap} aria-hidden="true">
      <div ref={ref} className={s.inner}>
        <NetworkCanvas className={s.canvas} opacity={0.4} pulses={4} />
      </div>
    </div>
  )
}

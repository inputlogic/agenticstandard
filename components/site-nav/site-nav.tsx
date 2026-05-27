'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import s from './site-nav.module.scss'

const navLinks = [
  { href: '/standard', label: 'Standard' },
  { href: '/foundation', label: 'Foundation' },
  { href: '/continuum', label: 'Continuum' },
  { href: '/about', label: 'About' },
]

export function SiteNav() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  const close = useCallback(() => setOpen(false), [])

  useEffect(() => {
    if (!open) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [open, close])

  return (
    <nav className={s.nav} aria-label="Main navigation">
      <Link href="/" className={s.wordmark}>
        <svg className={s.mark} viewBox="0 0 120 120" fill="none">
          <g stroke="currentColor" strokeLinecap="square" strokeWidth="9">
            <path d="M 22 58 L 22 22 L 58 22"/>
            <path d="M 98 62 L 98 98 L 62 98"/>
          </g>
          <circle cx="60" cy="60" r="8" fill="#D27A3F"/>
        </svg>
        <span>Agentic<span className={s.dot}>.</span>Standard</span>
      </Link>
      <div className={`${s.links} ${open ? s['links-open'] : ''}`}>
        <Link
          href="/"
          className={`${s.link} ${pathname === '/' ? s['link-active'] : ''}`}
          onClick={close}
        >
          Home
        </Link>
        {navLinks.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`${s.link} ${pathname === href ? s['link-active'] : ''}`}
            onClick={close}
          >
            {label}
          </Link>
        ))}
        <Link
          href="/book"
          className={s.cta}
          onClick={close}
        >
          Book a Call
        </Link>
      </div>
      <button
        className={s.toggle}
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <span className={s['toggle-bar']} />
        <span className={s['toggle-bar']} />
      </button>
    </nav>
  )
}

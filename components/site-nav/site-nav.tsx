'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import s from './site-nav.module.scss'

const CALENDLY_URL =
  'https://calendly.com/jordanmichealeckersley/agenticstandard'

const navLinks = [
  { href: '/standard', label: 'Standard' },
  { href: '/foundation', label: 'Foundation' },
  { href: '/continuum', label: 'Continuum' },
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
        Agentic<span className={s.dot}>.</span>Standard
      </Link>
      <div className={`${s.links} ${open ? s['links-open'] : ''}`}>
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
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={s.cta}
          onClick={close}
        >
          Book a Call
        </a>
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

'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import s from './site-nav.module.scss'

const navLinks = [
  { href: '/foundation', label: 'Foundation' },
  { href: '/map', label: 'Map' },
  { href: '/continuum', label: 'Continuum' },
  { href: '/standard', label: 'Standard' },
]

export function SiteNav() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

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
            onClick={() => setOpen(false)}
          >
            {label}
          </Link>
        ))}
        <Link
          href="/book"
          className={`${s.cta} ${pathname === '/book' ? s['link-active'] : ''}`}
          onClick={() => setOpen(false)}
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

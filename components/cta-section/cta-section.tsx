import Link from 'next/link'
import { ReactNode } from 'react'
import s from './cta-section.module.scss'

const CALENDLY_URL =
  'https://calendly.com/jordanmichealeckersley/agenticstandard'

type CtaSectionProps = {
  label?: string
  heading: ReactNode
  sub: string
  buttonText?: string
  buttonHref?: string
}

export function CtaSection({
  label = 'To Begin',
  heading,
  sub,
  buttonText = 'Book the call',
  buttonHref = CALENDLY_URL,
}: CtaSectionProps) {
  const isExternal = buttonHref.startsWith('http')

  return (
    <section className={s.section}>
      <div className={s.label}>{label}</div>
      <h2 className={s.heading}>{heading}</h2>
      <p className={s.sub}>{sub}</p>
      {isExternal ? (
        <a
          href={buttonHref}
          target="_blank"
          rel="noopener noreferrer"
          className={s.button}
        >
          {buttonText}
        </a>
      ) : (
        <Link href={buttonHref} className={s.button}>
          {buttonText}
        </Link>
      )}
    </section>
  )
}

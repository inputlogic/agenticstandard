import Link from 'next/link'
import { ReactNode } from 'react'
import s from './cta-section.module.scss'

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
  buttonHref = '/book',
}: CtaSectionProps) {
  return (
    <section className={s.section}>
      <div className={s.label}>{label}</div>
      <h2 className={s.heading}>{heading}</h2>
      <p className={s.sub}>{sub}</p>
      <Link href={buttonHref} className={s.button}>
        {buttonText}
      </Link>
    </section>
  )
}

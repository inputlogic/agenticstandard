import Link from 'next/link'
import s from './site-footer.module.scss'

export function SiteFooter() {
  return (
    <footer className={s.footer}>
      <div className={s.inner}>
        <div className={s.grid}>
          <div>
            <Link href="/" className={s['brand-wordmark']}>
              Agentic<span className={s.dot}>.</span>Standard
            </Link>
            <div className={s.tagline}>
              We make agentic AI work inside your organization, not just in a
              demo.
            </div>
          </div>
          <div>
            <div className={s['col-heading']}>The Work</div>
            <Link href="/foundation" className={s['col-link']}>The Foundation</Link>
            <Link href="/map" className={s['col-link']}>The Readiness Map</Link>
            <Link href="/continuum" className={s['col-link']}>The Continuum</Link>
          </div>
          <div>
            <div className={s['col-heading']}>The Firm</div>
            <Link href="/standard" className={s['col-link']}>The Standard</Link>
            <a href="https://calendly.com/jordanmichealeckersley/agenticstandard" target="_blank" rel="noopener noreferrer" className={s['col-link']}>Book a Call</a>
          </div>
          <div>
            <div className={s['col-heading']}>Contact</div>
            <a href="mailto:hello@theagenticstandard.com" className={s['col-link']}>
              hello@theagenticstandard.com
            </a>
            <div className={s['contact-detail']}>
              Canada<br />Remote-capable
            </div>
          </div>
        </div>
        <div className={s.bottom}>
          <div>&copy; 2026 Agentic Standard Inc.</div>
          <div>agenticstandard.ca</div>
        </div>
      </div>
    </footer>
  )
}

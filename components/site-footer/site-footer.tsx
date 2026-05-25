import Link from 'next/link'
import s from './site-footer.module.scss'

export function SiteFooter() {
  return (
    <footer className={s.footer}>
      <div className={s.inner}>
        <div className={s.grid}>
          <div>
            <Link href="/" className={s['brand-wordmark']}>
              <svg className={s.mark} viewBox="0 0 120 120" fill="none">
                <g stroke="currentColor" strokeLinecap="square" strokeWidth="9">
                  <path d="M 22 58 L 22 22 L 58 22"/>
                  <path d="M 98 62 L 98 98 L 62 98"/>
                </g>
                <circle cx="60" cy="60" r="8" fill="#D27A3F"/>
              </svg>
              <span>Agentic<span className={s.dot}>.</span>Standard</span>
            </Link>
            <div className={s.tagline}>
              We make agentic AI work inside your organization, not just in a
              demo.
            </div>
          </div>
          <div>
            <div className={s['col-heading']}>The Work</div>
            <Link href="/foundation" className={s['col-link']}>The Foundation</Link>
            <Link href="/continuum" className={s['col-link']}>The Continuum</Link>
          </div>
          <div>
            <div className={s['col-heading']}>The Firm</div>
            <Link href="/standard" className={s['col-link']}>The Standard</Link>
            <Link href="/book" className={s['col-link']}>Book a Call</Link>
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
          <div>theagenticstandard.com</div>
        </div>
      </div>
    </footer>
  )
}

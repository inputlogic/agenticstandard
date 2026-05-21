import { SectionLabel } from 'components/section-label'
import s from './page.module.scss'

export const metadata = {
  title: 'Book a Call',
  description: 'A forty-five-minute discovery call. No pitch deck. By the end, you will know whether The Agentic Foundation fits.',
}

const expectSteps = [
  {
    num: 1,
    title: 'The first three minutes',
    body: 'We set the frame: no pitch, no deck. The goal is mutual fit. Either outcome is fine.',
  },
  {
    num: 2,
    title: 'The next thirty',
    body: 'You walk us through your work, your team, what\u2019s broken, what you\u2019ve tried. We listen and probe specifics.',
  },
  {
    num: 3,
    title: 'The last ten',
    body: 'We tell you what we\u2019d do, or share that we\u2019re not the right fit. No follow-up calls to qualify further.',
  },
  {
    num: 4,
    title: 'Within forty-eight hours',
    body: 'If The Foundation fits, the SOW arrives in your inbox. If it doesn\u2019t, a kind note explaining why, with a referral if we have one.',
  },
]

const strongFit = [
  'You have an executive sponsor who can approve a $48k commitment',
  'You\u2019ve tried something with AI that didn\u2019t stick; you understand the gap is real',
  'Your pain is framed as capacity ("we can\u2019t take on X without more people") more than as productivity',
  'Your decision window is 30\u201390 days, not 6+ months',
  'You operate in Slack or Teams as your primary collaboration layer',
  'Your stack is modern enough that agents can read and write to your tools',
]

const notFit = [
  'You want a strategy deck without deployment',
  '"Tell us what AI to use" framing; this means you need readiness work first',
  'A failed implementation with vendor blame in flight; we are careful not to litigate other firms\u2019 work',
  'Decision involves 6+ stakeholders we haven\u2019t met',
  'Sub-$40k budget with no flexibility',
  'Heavily regulated environment (HIPAA, PCI primary) requiring compliance work beyond our practice',
]

export default function BookPage() {
  return (
    <div className="container frame" id="main">

      {/* Hero */}
      <section className={s.hero}>
        <SectionLabel accent>To Begin</SectionLabel>
        <h1 className={s.heading}>
          Forty-five minutes. <em>No pitch deck.</em>
        </h1>
        <p className={s.subtitle}>
          The only sales call we run. We ask about your work, where AI has
          stuck and where it hasn't, and whether we're the right fit. By
          the end you'll know.
        </p>
      </section>

      {/* Booking wrap */}
      <section className={s['booking-section']}>
        <div className={s['booking-wrap']}>

          {/* Left: What to expect */}
          <div className={s['booking-side']}>
            <SectionLabel>What to Expect</SectionLabel>
            <h2 className={s['side-heading']}>
              The conversation, <em>told honestly</em>.
            </h2>
            <p className={s['side-body']}>
              If The Agentic Foundation fits, the SOW is in your inbox within
              forty-eight hours. If it doesn't fit, we say so, and where we'd
              send you instead.
            </p>

            <div className={s.expect}>
              {expectSteps.map((step) => (
                <div key={step.num} className={s['expect-item']}>
                  <div className={s.num}>{step.num}</div>
                  <div>
                    <h4 className={s['expect-title']}>{step.title}</h4>
                    <p className={s['expect-body']}>{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Calendar embed */}
          <div className={s['booking-main']}>
            <span className={s['pick-label']}>Pick a Time</span>
            <h3 className={s['booking-heading']}>
              Forty-five minutes <em>on the calendar</em>.
            </h3>
            <p className={s.lead}>
              Times are shown in your local timezone. Bring whoever needs to be
              there for the engagement decision, ideally the sponsor.
            </p>

            {/* Calendly embed placeholder */}
            <div className={s['calendar-embed']} id="calendly-embed">
              <div className={s['calendar-placeholder']}>
                Calendly inline widget goes here.
                <br /><br />
                Replace this placeholder with your scheduling embed
                (Calendly, SavvyCal, Cal.com).
              </div>
            </div>

            {/* Alternate contact */}
            <div className={s['alt-contact']}>
              <h4 className={s['alt-heading']}>Prefer email?</h4>
              <p className={s['alt-body']}>
                Write to{' '}
                <a href="mailto:hello@theagenticstandard.com">
                  hello@theagenticstandard.com
                </a>{' '}
                with three lines: what you do, what's not sticking, and when
                you're free this week.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Disqualifier */}
      <section className={s.disqualifier}>
        <SectionLabel>Honest Fit</SectionLabel>
        <h2 className={s['disq-heading']}>
          Who this is for, and who it <em>isn't</em>.
        </h2>
        <p className={s['disq-intro']}>
          A consulting firm that doesn't disqualify is one that takes work it
          shouldn't. So before you book, here's what we're looking for and
          what we're not.
        </p>

        <div className={s['disqualifier-grid']}>
          <div className={`${s['disq-col']} ${s.good}`}>
            <span className={s['disq-label']}>Strong fit</span>
            <h3 className={s['disq-col-heading']}>
              If you're here for <em>this</em>, we should talk.
            </h3>
            <ul>
              {strongFit.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <div className={`${s['disq-col']} ${s.bad}`}>
            <span className={s['disq-label']}>Not our fit</span>
            <h3 className={s['disq-col-heading']}>
              If you're here for these, we'll send you elsewhere.
            </h3>
            <ul>
              {notFit.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <p className={s['disq-coda']}>
          If you're somewhere in the middle, please book a call. The
          conversation will resolve it faster than reading more pages of
          our site.
        </p>
      </section>
    </div>
  )
}

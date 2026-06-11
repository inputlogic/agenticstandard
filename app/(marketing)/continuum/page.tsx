import { SectionLabel } from 'components/section-label'
import { CtaSection } from 'components/cta-section'
import s from './page.module.scss'

export const metadata = {
  title: 'The Agentic Continuum · Agentic Standard',
  description: 'The ongoing partnership that turns The Agentic Foundation into a year of compounding operating capacity.',
}

const includes = [
  {
    num: '01',
    tag: 'The Build',
    title: <>Roadmap <em>execution</em>.</>,
    body: [
      'Phase 1 candidates from your Map ship on the cadence the roadmap calls for. That\'s typically one to two per quarter, more in heavy phases, fewer when the work is plumbing. Each deployment includes the same workflow shadowing, tuning, and stabilization rigor as your Foundation agents.',
      'The Map itself stays alive. New candidates surface; phasing shifts as reality unfolds; the roadmap you\'re working from at month nine is sharper than the one delivered at week six.',
    ],
  },
  {
    num: '02',
    tag: 'The Fleet',
    title: <>Agent <em>stewardship</em>.</>,
    body: [
      'Every agent ever deployed for you is monitored, tuned, and evolved: the originals from the Foundation and every one that lands afterward. Production-grade Harbour hosting is included, with the failure handling, audit trails, and observability that a serious operator expects.',
      'When something breaks, the fix lands without a bug report on your end. The fleet is the firm\'s responsibility, not yours.',
    ],
  },
  {
    num: '03',
    tag: 'The Counsel',
    title: <>Strategic <em>advisory</em>.</>,
    body: [
      'A named senior practitioner is your partner for the entire relationship. Regular working sessions with your sponsor and operational owner. A direct Slack channel (or equivalent) for the in-between moments when a decision can\'t wait for the next meeting.',
      'This is the relationship that lets your sponsor make AI-related decisions with conviction, because there\'s someone they trust who has seen the room before.',
    ],
  },
  {
    num: '04',
    tag: 'The People',
    title: <>Workforce <em>coaching</em>.</>,
    body: [
      'The habitual work doesn\'t end at week six. Role-specific enablement continues: prompt library development, internal training-of-trainers, prompting evaluation, and coaching for the champions who own AI inside each department.',
      'The end state is a workforce that doesn\'t need the firm anymore; not because the engagement ended, but because the organization has internalized what it means to work with AI as a default rather than an exception.',
    ],
  },
  {
    num: '05',
    tag: 'The Fences',
    title: <>Governance <em>maturation</em>.</>,
    body: [
      'Active work moving you up the governance dimension. Skills like risk-tiered policy authoring, audit infrastructure, scoped-credential design, incident response playbooks, and the periodic agent reviews that make agentic AI defensible to your board, your legal team, and your auditors.',
      'This is where most consulting engagements stop short. Continuum leans into it, because bounded autonomy is the only autonomy that scales.',
    ],
  },
  {
    num: '06',
    tag: 'The Reporting',
    title: <>Quarterly <em>board-ready</em> reporting.</>,
    body: [
      'Your Map scorecard, updated and narrated, with a one-page executive summary your sponsor can place on a board agenda without rewriting. Hours saved, capacity unlocked, agents shipped, dimensions advanced, incidents handled.',
      'Designed to be shown to your board without you having to assemble it yourself. The quarterly report is the artifact that proves the retainer is paying for itself, every quarter, in language your board already speaks.',
    ],
  },
  {
    num: '07',
    tag: 'The Plan',
    title: <>Roadmap <em>evolution</em>.</>,
    body: [
      'The Map is a living document. Every quarter the Map is refreshed: candidates that have shipped move to a track record; new candidates surface from the work; phases may shift as reality (and your priorities) change. Your roadmap at the end of year one is built on a year of grounded observation, not a single week of interviews.',
      'If you ever choose to leave, the roadmap you leave with is sharper than anything a strategy firm could produce, because it\'s been refined by the work itself.',
    ],
  },
]

const cadence = [
  { freq: 'Weekly', title: 'Tactical channel', desc: 'Slack or equivalent. Agent monitoring, day-to-day questions, decisions that can\'t wait. Open async.' },
  { freq: 'Bi-weekly', title: 'Working session', desc: '60\u201390 minutes with the operational owner. Roadmap progress, current candidates, blockers to clear.' },
  { freq: 'Monthly', title: 'Sponsor review', desc: 'Executive-level alignment with the sponsor. What shipped, what\'s next, what they need from the firm.' },
  { freq: 'Quarterly', title: 'Board-ready report', desc: 'Refreshed Map, scorecard, and one-page executive summary. The artifact the sponsor takes to the board.' },
]

const outOfScope = [
  'Net-new platform builds outside the agent fleet. Custom software, internal tools, or systems integration projects are scoped and quoted separately.',
  'Deep industry research, market analysis, or competitive intelligence engagements not directly tied to your active roadmap.',
  'After-hours, weekend, or holiday response. Continuum is a business-hours practice. Genuinely urgent failures are handled at the firm\'s discretion.',
  'Cloud, API, and third-party software costs; these are your accounts, your bill. Recommendations from the firm; authorization from you.',
  'Compliance certifications (SOC2, ISO, HIPAA) that require dedicated audit work outside the standard governance practice.',
]

export default function ContinuumPage() {
  return (
    <>
      <div className="container frame" id="main">

      {/* Hero */}
      <section className={s.hero}>
        <SectionLabel accent>The Ongoing Partnership</SectionLabel>
        <h1 className={s['hero-title']}>The Agentic <em>Continuum</em>.</h1>
        <div className={s['hero-subtitle']}>
          The ongoing partnership that turns The Agentic Foundation into a year of compounding operating capacity.
        </div>
      </section>

      {/* Opening */}
      <section className={s.section}>
        <div className={s.reading}>
          <SectionLabel>What it is</SectionLabel>
          <h2 className={s['reading-heading']}>A partnership that executes the <em>roadmap</em>.</h2>
          <p className={s.lead}>
            The Agentic Foundation gives you operating AI and the Map. The Continuum is the work that turns the Map's roadmap into ongoing reality. This means new agents on the schedule the roadmap calls for, the workforce becoming AI-fluent quarter by quarter, the governance framework maturing into something your board can defend.
          </p>
          <p>
            It is not a maintenance contract or strategy advisor. It is the operating partner that handles the work of becoming AI-native, without you having to build that capability internally before you're ready, and without the lock-in of a transformation engagement that lasts forever.
          </p>
          <p>
            The Continuum compounds. Month three looks meaningfully different from month one. Month twelve looks like a different organization.
          </p>
        </div>
      </section>

      {/* Includes Intro */}
      <section className={s['includes-intro']}>
        <div className={s.reading}>
          <SectionLabel accent>What's included</SectionLabel>
          <h2 className={s['includes-intro-heading']}>Seven things that happen every month.</h2>
          <p className={s['includes-intro-lead']}>
            Not a menu. Not "up to X hours." Seven concrete bodies of work that run continuously, with deliverables you can point to at the end of each quarter.
          </p>
        </div>
      </section>

      {/* 7 Include articles */}
      {includes.map((item) => (
        <article key={item.num} className={s.include}>
          <div className={s['include-grid']}>
            <div>
              <div className={s['include-num']}>{item.num}</div>
              <div className={s['include-tag']}>{item.tag}</div>
            </div>
            <div className={s['include-body']}>
              <h3 className={s['include-title']}>{item.title}</h3>
              {item.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </article>
      ))}

      {/* Operating Cadence */}
      <section className={s.section}>
        <SectionLabel>The Operating Cadence</SectionLabel>
        <h2 className={s['cadence-heading']}>A rhythm your team can rely on.</h2>

        <div className={s.cadence}>
          {cadence.map((c) => (
            <div key={c.freq} className={s['cadence-cell']}>
              <span className={s['cadence-freq']}>{c.freq}</span>
              <h4 className={s['cadence-title']}>{c.title}</h4>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Out of Scope */}
      <section className={s.section}>
        <div className={s.reading}>
          <SectionLabel>What it is not</SectionLabel>
          <h2 className={s['reading-heading']}>What the Continuum <em>does not</em> include.</h2>
          <p className={s.lead}>
            Some things sit outside The Agentic Continuum because they're either out of pattern or genuinely separate work. Said up front, not in an invoice.
          </p>
        </div>

        <div className={s['scope-list']}>
          {outOfScope.map((text, i) => (
            <div key={i} className={s['scope-item']}>
              <div className={s['scope-mark']}>&times;</div>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Exit */}
      <section className={s.section}>
        <div className={s.reading}>
          <SectionLabel accent>The Exit</SectionLabel>
          <h2 className={s['reading-heading']}>You can <em>fire us</em>.</h2>
          <p className={s.lead}>
            Sixty days notice in writing. No penalty or clawback. The agents stay running on your infrastructure or migrate to a Harbour-only retainer at $2,000 per month. The Map is yours. Everything built for you is yours.
          </p>
          <p>
            The freedom to leave is what makes the Continuum real. A retainer that traps you is a retainer that won't compound, because it's been optimized for your imprisonment rather than your progress. The Continuum is the opposite.
          </p>
          <p>
            If the Continuum stops earning its keep, you should end it. If it keeps earning, you'll renew. That's the deal.
          </p>
        </div>
      </section>

      {/* Pricing Band */}
      <div className={s['pricing-band']}>
        <SectionLabel accent>From</SectionLabel>
        <div className={s.price}>
          $20,000<span className={s['price-unit']}>Per month</span>
        </div>
        <div className={s.qualifier}>
          Heavier roadmap phases or larger fleets may scope higher. Quoted at the start of each quarter, fixed for that quarter, reviewed honestly at the next.
        </div>
      </div>

      </div>

      {/* CTA */}
      <CtaSection
        heading={<>The retainer that <em>compounds</em>. The relationship you renew because you want to.</>}
        sub="Every Continuum engagement begins with The Agentic Foundation. A forty-five-minute call to scope the work. The SOW arrives within forty-eight hours if it fits."
      />
    </>
  )
}

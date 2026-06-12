import Link from 'next/link'
import { CtaSection } from 'components/cta-section'
import { SectionLabel } from 'components/section-label'
import { ScrollReveal } from 'components/scroll-reveal'
import { HeroDrift } from 'components/hero-drift'
import { Parallax } from 'components/parallax'
import { TextStream } from 'components/text-stream'
import { WordCycle } from 'components/word-cycle'
import { AgentOpsTerminal } from 'components/agent-ops-terminal'
import s from './page.module.scss'

export const metadata = {
  title: 'Agentic Standard | Agentic AI that works inside your organization',
  description: 'A specialized consulting firm that closes the gap between AI technology and the operating model that has to meet it. Six weeks. Fixed fee. Operating AI, not strategy decks.',
  openGraph: {
    title: 'Agentic Standard | Agentic AI that works inside your organization',
    description: 'A specialized consulting firm that closes the gap between AI technology and the operating model that has to meet it. Six weeks. Fixed fee.',
  },
}

const agentScript = [
  { agent: 'Inbox Sentinel', text: 'Triaged 14 overnight messages. 3 drafts ready for review.', status: 'done' as const },
  { agent: 'Pipeline Watcher', text: 'Two deals moved to contract stage. CRM notes updated.', status: 'done' as const },
  { agent: 'KPI Synthesizer', text: 'Pulling pipeline data from 7 sources for the Monday briefing.', status: 'done' as const },
  { agent: 'Meeting Scribe', text: 'Sponsor call summarized. 4 action items assigned in Slack.', status: 'done' as const },
  { agent: 'Competitive Scan', text: 'Pricing page change detected at competitor 3 of 6.', status: 'done' as const },
  { agent: 'Inbox Sentinel', text: 'Routed 2 contract questions to legal with full context.', status: 'done' as const },
  { agent: 'Data Quality Sentinel', text: 'Duplicate account records merged. 312 rows reconciled.', status: 'done' as const },
  { agent: 'KPI Synthesizer', text: 'Executive summary drafted. Flagged a 12% dip in trial starts.', status: 'done' as const },
  { agent: 'Contract Reviewer', text: 'Renewal terms compared against last year. 2 changes flagged.', status: 'review' as const },
  { agent: 'Competitive Scan', text: 'Analysis posted to #market-intel with the diff attached.', status: 'done' as const },
  { agent: 'Invoice Chaser', text: '3 overdue invoices nudged. Payment link resent to accounts.', status: 'done' as const },
  { agent: 'Inbox Sentinel', text: 'Customer escalation drafted. Held for human approval.', status: 'review' as const },
  { agent: 'Report Generator', text: 'Weekly ops report assembled. 11 pages, 4 charts.', status: 'done' as const },
  { agent: 'Onboarding Guide', text: 'New hire checklist generated. Access requests submitted.', status: 'done' as const },
  { agent: 'KPI Synthesizer', text: 'Monday briefing posted to #leadership. Read by 4 of 6.', status: 'done' as const },
  { agent: 'Pipeline Watcher', text: 'Stale opportunity surfaced. Owner pinged with last context.', status: 'done' as const },
  { agent: 'Governance Monitor', text: 'All agent actions logged. 0 boundary exceptions this week.', status: 'done' as const },
  { agent: 'Meeting Scribe', text: 'Quarterly review deck outline drafted from 6 transcripts.', status: 'done' as const },
  { agent: 'Inbox Sentinel', text: 'Shared inbox at zero. 96 minutes returned to the team today.', status: 'done' as const },
  { agent: 'Data Quality Sentinel', text: 'Schema drift caught in the revenue table. Alert raised.', status: 'review' as const },
  { agent: 'Report Generator', text: 'Board pack refreshed with quarter-to-date numbers.', status: 'done' as const },
  { agent: 'Invoice Chaser', text: 'Collections summary posted. Days outstanding down 9%.', status: 'done' as const },
  { agent: 'Onboarding Guide', text: 'Week-one schedule sent. Champion looped in for day 2.', status: 'done' as const },
  { agent: 'Governance Monitor', text: 'Nightly audit complete. Fleet healthy. Standing by.', status: 'done' as const },
]

const disciplines = [
  { num: '01', title: 'Workforce readiness', body: 'Before any automation runs, the daily AI habit is built role by role: prompting, evaluation, safe use.' },
  { num: '02', title: 'Workflow instrumentation', body: 'AI embedded where work already happens. Intelligence in Slack, email, CRMs, and data platforms, not in a separate tab.' },
  { num: '03', title: 'Agentic deployment', body: 'Async and multi-step agents deployed with bounded authority, audit trails, and champions who own day-2 operations.' },
  { num: '04', title: 'Governance & handoff', body: 'A policy framework, eval suite, and trained internal team left behind, so the dependency ends when you say so.' },
]

const journeySteps = [
  { num: '1', label: 'Weeks 1\u20136', title: 'The Agentic Foundation', body: 'Two to three deployed agents on workflows observed and agreed on, plus The Agentic Readiness Map: a year-long roadmap scored against six dimensions of organizational readiness.', linkText: 'See the Foundation', to: '/foundation' },
  { num: '2', label: 'Week 6', title: 'The Working Session', body: "Your sponsor sees the agents running, the Map presented, the inventory of every automation opportunity surfaced during the engagement. If the work hasn\u2019t landed, you don\u2019t pay. If it has, the path forward is obvious.", linkText: 'See the Foundation', to: '/foundation' },
  { num: '3', label: 'Months 2\u201312+', title: 'The Agentic Continuum', body: 'The ongoing partnership that executes the roadmap. New agents on cadence, governance maturation, workforce coaching, and quarterly board-ready reporting. The retainer you renew because you want to.', linkText: 'See the Continuum', to: '/continuum' },
]

const standardTenets = [
  { num: '01', heading: <>The gap is human, <em>not technological</em>.</>, body: "The model isn\u2019t the bottleneck. The workflow is. The habit is. The governance is. Technology isn\u2019t the product, the bridge between technology and the operating model that has to meet it is." },
  { num: '03', heading: <>Agents are <em>employees</em>, not features.</>, body: 'The mental model that produces good outcomes is "we hired someone," not "we deployed a bot." Agents need scope, accountability, audit trails, and review. The framing decides the outcome before any technology is chosen.' },
  { num: '06', heading: <>You should be able to <em>fire us</em>.</>, body: "Every engagement ends asking: could the client run this themselves now? If the answer is no, the job isn\u2019t done. The freedom to leave is what makes the relationship real." },
]

const docCards = [
  { to: '/standard', tag: 'The Beliefs', heading: <>The Agentic <em>Standard</em></>, body: 'Seven tenets that anchor every engagement. The worldview the firm operates from.', arrow: 'Read the manifesto' },
  { to: '/foundation', tag: 'The Entry Offer', heading: <>The Agentic <em>Foundation</em></>, body: 'The six-week engagement that puts operating AI in your stack. Scope, schedule, deliverables, guarantee.', arrow: 'Read the offer' },
  { to: '/continuum', tag: 'The Partnership', heading: <>The Agentic <em>Continuum</em></>, body: 'Seven things that happen every month. The retainer that compounds the Foundation into a year of operating capacity.', arrow: 'Read the partnership' },
]

export default function HomePage() {
  return (
    <>
      <div className="container frame" id="main">

        {/* Hero */}
        <section className={s.hero}>
          <HeroDrift className={s['hero-grid']}>
            <div>
              <div className="rise" style={{ animationDelay: '0.05s' }}>
                <SectionLabel accent>Agentic Standard · 2026</SectionLabel>
              </div>
              <TextStream
                as="h1"
                className={s['hero-heading']}
                startDelay={250}
                segments={[
                  { text: 'Agentic AI ' },
                  {
                    node: (
                      <span className={s['hero-cycle-wrap']}>
                        that <em><WordCycle words={['works', 'acts', 'ships', 'delivers']} /></em>
                      </span>
                    ),
                    label: 'that works ',
                  },
                  { text: 'inside your organization, not just in a demo.' },
                ]}
              />
              <p className={`${s.lead} ${s['hero-lead']} rise`} style={{ animationDelay: '0.6s' }}>
                Most enterprises have tried AI. Few have made it stick. A specialized firm built to close that gap by preparing your people, instrumenting your workflows, and deploying agents that measurably give time back.
              </p>
              <div className={`${s['hero-actions']} rise`} style={{ animationDelay: '0.8s' }}>
                <Link href="/book" className={s['btn-primary']}>Book a 45-minute call</Link>
                <Link href="/standard" className={s['btn-secondary']}>Read the beliefs <span className={s.arrow}>→</span></Link>
              </div>
            </div>
            <Parallax speed={-0.04} maxShift={28}>
              <div className="rise" style={{ animationDelay: '0.45s' }}>
                <AgentOpsTerminal script={agentScript} />
              </div>
            </Parallax>
          </HeroDrift>
        </section>

        {/* The Pattern */}
        <section className={s.section}>
          <SectionLabel>Why This Exists</SectionLabel>
          <ScrollReveal>
            <h2 className={s['pattern-heading']}>Most enterprise AI fails to <em>stick</em>.</h2>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <p className={`${s.lead} ${s['pattern-lead']}`}>
              We&apos;ve watched big consulting firms burn millions and leave clients with a chatbot nobody uses. We&apos;ve watched data teams ship models that produce reports &amp; dashboards nobody reads. We&apos;ve seen executives on stage describing an AI strategy in unbroken detail though they&apos;ve never run a prompt themselves.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={160}>
            <p className={`${s.lead} ${s['muted-lead']}`}>
              This pattern is uncomfortable, but consistent: the technology arrives, the organization doesn&apos;t.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={240}>
            <p className={s.lead}>
              Agentic Standard exists to do the work nobody else is doing. To close the gap between the technology and the operating model that has to meet it. Agentic Standard delivers operating AI, a workforce that uses it, and a roadmap your team can run on its own.
            </p>
          </ScrollReveal>
        </section>

        {/* What We Do */}
        <section className={s.section}>
          <SectionLabel>The Practice</SectionLabel>
          <ScrollReveal>
            <h2>Four disciplines, run together.</h2>
          </ScrollReveal>
          <div className={s.disciplines}>
            {disciplines.map((d, i) => (
              <ScrollReveal key={d.num} delay={i * 80} className={s.discipline}>
                <span className={s['discipline-num']}>{d.num}</span>
                <h3>{d.title}</h3>
                <p>{d.body}</p>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section className={s.section}>
          <SectionLabel>How It Works</SectionLabel>
          <ScrollReveal>
            <h2>Six weeks to operating AI. Then the <em>choice</em>.</h2>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <p className={`${s.lead} ${s.narrow}`}>
              Every engagement begins with a fixed-fee six-week sprint. By the end you have AI doing real work, a roadmap your board will recognize, and three honest paths forward.
            </p>
          </ScrollReveal>

          <div className={s['journey-grid']}>
            {journeySteps.map((step, i) => (
              <ScrollReveal key={step.num} delay={i * 80} className={`${s['journey-step']} ${i === 0 ? s['journey-first'] : ''}`}>
                <Parallax speed={[-0.07, -0.11, -0.05][i]} maxShift={36}>
                  <div className={s['journey-num']}>{step.num}</div>
                </Parallax>
                <span className={s['journey-label']}>{step.label}</span>
                <h4>{step.title}</h4>
                <p>{step.body}</p>
                <Link href={step.to} className={s['journey-link']}>{step.linkText} <span className={s.arrow}>→</span></Link>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* The Standard */}
        <section className={s.section}>
          <SectionLabel accent>The Standard</SectionLabel>
          <ScrollReveal>
            <h2>The beliefs.</h2>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <p className={`${s.lead} ${s.narrow}`}>
              Three of seven tenets that anchor every engagement under this name. Each one rejects a common failure mode in the consulting industry, and filters who fits as much as how the work runs.
            </p>
          </ScrollReveal>

          <div className={s['standard-grid']}>
            {standardTenets.map((t, i) => (
              <ScrollReveal key={t.num} delay={i * 80} className={s['standard-tenet']}>
                <Parallax speed={[-0.09, -0.05, -0.12][i]} maxShift={40}>
                  <span className={s['tenet-num-large']}>{t.num}</span>
                </Parallax>
                <h4>{t.heading}</h4>
                <p>{t.body}</p>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={240} className={s['standard-link']}>
            <Link href="/standard">Read all seven tenets <span className={s.arrow}>→</span></Link>
          </ScrollReveal>
        </section>

        {/* Read Deeper */}
        <section className={s.section}>
          <SectionLabel accent>Discover the Firm</SectionLabel>
          <ScrollReveal>
            <h2 className={s['docs-heading']}>The work, given <em>away</em>.</h2>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <p className={s.lead}>
              Everything you&apos;d want to read before signing a six-figure contract. The methodology, the principles, the contract terms, the way the engagement runs. If you decide to do this without the firm, you&apos;ll have what you need.
            </p>
          </ScrollReveal>

          <div className={s['docs-grid']}>
            {docCards.map((card, i) => (
              <ScrollReveal key={card.to} delay={i * 80} className={s['doc-card-wrap']}>
                <Link href={card.to} className={s['doc-card']}>
                  <span className={s['doc-tag']}>{card.tag}</span>
                  <h4>{card.heading}</h4>
                  <p>{card.body}</p>
                  <span className={s['doc-arrow']}>{card.arrow} <span className={s.arrow}>→</span></span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </section>

      </div>

      <CtaSection
        heading={<>A forty-five-minute call to scope the <em>work</em>.</>}
        sub="No pitch deck. The call is about the work your team does, where AI has and hasn't stuck, and where the natural first agents would live. If The Foundation fits, the SOW arrives within forty-eight hours."
      />
    </>
  )
}

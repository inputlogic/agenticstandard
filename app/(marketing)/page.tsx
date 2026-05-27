import Link from 'next/link'
import { CtaSection } from 'components/cta-section'
import { SectionLabel } from 'components/section-label'
import s from './page.module.scss'

export const metadata = {
  title: 'Agentic Standard | Agentic AI that works inside your organization',
  description: 'A specialized consulting firm that closes the gap between AI technology and the operating model that has to meet it. Six weeks. Fixed fee. Operating AI, not strategy decks.',
  openGraph: {
    title: 'Agentic Standard | Agentic AI that works inside your organization',
    description: 'A specialized consulting firm that closes the gap between AI technology and the operating model that has to meet it. Six weeks. Fixed fee.',
  },
}

export default function HomePage() {
  return (
    <>
      <div className="container frame" id="main">

        {/* Hero */}
        <section className={s.hero}>
          <div className={s['hero-label']}>
            <SectionLabel accent>Agentic Standard · 2026</SectionLabel>
          </div>
          <h1 className={s['hero-heading']}>
            Agentic AI that <em>works</em> inside your organization, not just in a demo.
          </h1>
          <p className={`${s.lead} ${s['hero-lead']}`}>
            Most enterprises have tried AI. Few have made it stick. A specialized firm built to close that gap by preparing your people, instrumenting your workflows, and deploying agents that measurably give time back.
          </p>
          <div className={s['hero-actions']}>
            <Link href="/book" className={s['btn-primary']}>Book a 45-minute call</Link>
            <Link href="/standard" className={s['btn-secondary']}>Read the beliefs →</Link>
          </div>
        </section>

        {/* The Pattern */}
        <section className={s.section}>
          <SectionLabel>Why This Exists</SectionLabel>
          <h2 className={s['pattern-heading']}>Most enterprise AI fails to <em>stick</em>.</h2>
          <p className={`${s.lead} ${s['pattern-lead']}`}>
            We&apos;ve watched big consulting firms burn millions and leave clients with a chatbot nobody uses. We&apos;ve watched data teams ship models that produce reports &amp; dashboards nobody reads. We&apos;ve seen executives on stage describing an AI strategy in unbroken detail though they&apos;ve never run a prompt themselves.
          </p>
          <p className={`${s.lead} ${s['muted-lead']}`}>
            This pattern is uncomfortable, but consistent: the technology arrives, the organization doesn&apos;t.
          </p>
          <p className={s.lead}>
            Agentic Standard exists to do the work nobody else is doing. To close the gap between the technology and the operating model that has to meet it. Agentic Standard delivers operating AI, a workforce that uses it, and a roadmap your team can run on its own.
          </p>
        </section>

        {/* What We Do */}
        <section className={s.section}>
          <SectionLabel>The Practice</SectionLabel>
          <h2>Four disciplines, run together.</h2>
          <div className={s.disciplines}>
            <div className={s.discipline}>
              <span className={s['discipline-num']}>01</span>
              <h3>Workforce readiness</h3>
              <p>Before any automation runs, the daily AI habit is built role by role: prompting, evaluation, safe use.</p>
            </div>
            <div className={s.discipline}>
              <span className={s['discipline-num']}>02</span>
              <h3>Workflow instrumentation</h3>
              <p>AI embedded where work already happens. Intelligence in Slack, email, CRMs, and data platforms, not in a separate tab.</p>
            </div>
            <div className={s.discipline}>
              <span className={s['discipline-num']}>03</span>
              <h3>Agentic deployment</h3>
              <p>Async and multi-step agents deployed with bounded authority, audit trails, and champions who own day-2 operations.</p>
            </div>
            <div className={s.discipline}>
              <span className={s['discipline-num']}>04</span>
              <h3>Governance &amp; handoff</h3>
              <p>A policy framework, eval suite, and trained internal team left behind, so the dependency ends when you say so.</p>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className={s.section}>
          <SectionLabel>How It Works</SectionLabel>
          <h2>Six weeks to operating AI. Then the <em>choice</em>.</h2>
          <p className={`${s.lead} ${s.narrow}`}>
            Every engagement begins with a fixed-fee six-week sprint. By the end you have AI doing real work, a roadmap your board will recognize, and three honest paths forward.
          </p>

          <div className={s['journey-grid']}>
            <div className={s['journey-step']}>
              <div className={s['journey-num']}>1</div>
              <span className={s['journey-label']}>Weeks 1–6</span>
              <h4>The Agentic Foundation</h4>
              <p>Two to three deployed agents on workflows observed and agreed on, plus The Agentic Readiness Map: a year-long roadmap scored against six dimensions of organizational readiness.</p>
              <Link href="/foundation" className={s['journey-link']}>See the Foundation →</Link>
            </div>
            <div className={s['journey-step']}>
              <div className={s['journey-num']}>2</div>
              <span className={s['journey-label']}>Week 6</span>
              <h4>The Working Session</h4>
              <p>Your sponsor sees the agents running, the Map presented, the inventory of every automation opportunity surfaced during the engagement. If the work hasn&apos;t landed, you don&apos;t pay. If it has, the path forward is obvious.</p>
              <Link href="/foundation" className={s['journey-link']}>See the Foundation →</Link>
            </div>
            <div className={s['journey-step']}>
              <div className={s['journey-num']}>3</div>
              <span className={s['journey-label']}>Months 2–12+</span>
              <h4>The Agentic Continuum</h4>
              <p>The ongoing partnership that executes the roadmap. New agents on cadence, governance maturation, workforce coaching, and quarterly board-ready reporting. The retainer you renew because you want to.</p>
              <Link href="/continuum" className={s['journey-link']}>See the Continuum →</Link>
            </div>
          </div>
        </section>

        {/* The Standard */}
        <section className={s.section}>
          <SectionLabel accent>The Standard</SectionLabel>
          <h2>The beliefs.</h2>
          <p className={`${s.lead} ${s.narrow}`}>
            Three of seven tenets that anchor every engagement under this name. Each one rejects a common failure mode in the consulting industry, and filters who fits as much as how the work runs.
          </p>

          <div className={s['standard-grid']}>
            <div className={s['standard-tenet']}>
              <span className={s['tenet-num']}>01</span>
              <h4>The gap is human, <em>not technological</em>.</h4>
              <p>The model isn&apos;t the bottleneck. The workflow is. The habit is. The governance is. Technology isn&apos;t the product, the bridge between technology and the operating model that has to meet it is.</p>
            </div>
            <div className={s['standard-tenet']}>
              <span className={s['tenet-num']}>03</span>
              <h4>Agents are <em>employees</em>, not features.</h4>
              <p>The mental model that produces good outcomes is &quot;we hired someone,&quot; not &quot;we deployed a bot.&quot; Agents need scope, accountability, audit trails, and review. The framing decides the outcome before any technology is chosen.</p>
            </div>
            <div className={s['standard-tenet']}>
              <span className={s['tenet-num']}>06</span>
              <h4>You should be able to <em>fire us</em>.</h4>
              <p>Every engagement ends asking: could the client run this themselves now? If the answer is no, the job isn&apos;t done. The freedom to leave is what makes the relationship real.</p>
            </div>
          </div>

          <div className={s['standard-link']}>
            <Link href="/standard">Read all seven tenets &nbsp;→</Link>
          </div>
        </section>

        {/* Read Deeper */}
        <section className={s.section}>
          <SectionLabel accent>Discover the Firm</SectionLabel>
          <h2 className={s['docs-heading']}>The work, given <em>away</em>.</h2>
          <p className={s.lead}>
            Everything you&apos;d want to read before signing a six-figure contract. The methodology, the principles, the contract terms, the way the engagement runs. If you decide to do this without the firm, you&apos;ll have what you need.
          </p>

          <div className={s['docs-grid']}>
            <Link href="/standard" className={s['doc-card']}>
              <span className={s['doc-tag']}>The Beliefs</span>
              <h4>The Agentic <em>Standard</em></h4>
              <p>Seven tenets that anchor every engagement. The worldview the firm operates from.</p>
              <span className={s['doc-arrow']}>Read the manifesto →</span>
            </Link>
            <Link href="/foundation" className={s['doc-card']}>
              <span className={s['doc-tag']}>The Entry Offer</span>
              <h4>The Agentic <em>Foundation</em></h4>
              <p>The six-week engagement that puts operating AI in your stack. Scope, schedule, deliverables, guarantee.</p>
              <span className={s['doc-arrow']}>Read the offer →</span>
            </Link>
            <Link href="/continuum" className={s['doc-card']}>
              <span className={s['doc-tag']}>The Partnership</span>
              <h4>The Agentic <em>Continuum</em></h4>
              <p>Seven things that happen every month. The retainer that compounds the Foundation into a year of operating capacity.</p>
              <span className={s['doc-arrow']}>Read the partnership →</span>
            </Link>
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

import Link from 'next/link'
import { CtaSection } from 'components/cta-section'
import { SectionLabel } from 'components/section-label'
import s from './page.module.scss'

export const metadata = {
  title: 'Agentic Standard | We make agentic AI work inside your organization',
  description: 'A specialized consulting firm that closes the gap between AI technology and the operating model that has to meet it. Six weeks. Fixed fee. Operating AI, not strategy decks.',
  openGraph: {
    title: 'Agentic Standard | We make agentic AI work inside your organization',
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
            We make agentic AI <em>work</em> inside your organization, not just in a demo.
          </h1>
          <p className={`${s.lead} ${s['hero-lead']}`}>
            Most enterprises have tried AI. Few have made it stick. We&apos;re a specialized firm that closes that gap by preparing your people, instrumenting your workflows, and deploying agents that measurably give time back.
          </p>
          <div className={s['hero-actions']}>
            <a href="https://calendly.com/jordanmichealeckersley/agenticstandard" target="_blank" rel="noopener noreferrer" className={s['btn-primary']}>Book a 45-minute call</a>
            <Link href="/standard" className={s['btn-secondary']}>Read what we believe →</Link>
          </div>
        </section>

        {/* The Pattern */}
        <section className={s.section}>
          <SectionLabel>Why We Exist</SectionLabel>
          <h2 className={s['pattern-heading']}>Most enterprise AI fails to <em>stick</em>.</h2>
          <p className={`${s.lead} ${s['pattern-lead']}`}>
            We&apos;ve watched big consulting firms burn millions and leave clients with a chatbot nobody uses. We&apos;ve watched data teams ship models that produce reports &amp; dashboards nobody reads. We&apos;ve seen executives on stage describing an AI strategy in unbroken detail though they&apos;ve never run a prompt themselves.
          </p>
          <p className={`${s.lead} ${s['muted-lead']}`}>
            This pattern is uncomfortable, but consistent: the technology arrives, the organization doesn&apos;t.
          </p>
          <p className={s.lead}>
            Agentic Standard exists to do the work nobody else is doing. To close the gap between the technology and the operating model that has to meet it. We deliver operating AI, a workforce that uses it, and a roadmap your team can run on its own.
          </p>
        </section>

        {/* What We Do */}
        <section className={s.section}>
          <SectionLabel>Our Practice</SectionLabel>
          <h2>Four disciplines, run together.</h2>
          <div className={s.disciplines}>
            <div className={s.discipline}>
              <span className={s['discipline-num']}>01</span>
              <h3>Workforce readiness</h3>
              <p>Before any automation runs, we build the daily AI habit role by role: prompting, evaluation, safe use.</p>
            </div>
            <div className={s.discipline}>
              <span className={s['discipline-num']}>02</span>
              <h3>Workflow instrumentation</h3>
              <p>We embed AI where work already happens. Intelligence in Slack, email, CRMs, and data platforms, not in a separate tab.</p>
            </div>
            <div className={s.discipline}>
              <span className={s['discipline-num']}>03</span>
              <h3>Agentic deployment</h3>
              <p>We deploy async and multi-step agents with bounded authority, audit trails, and champions who own day-2 operations.</p>
            </div>
            <div className={s.discipline}>
              <span className={s['discipline-num']}>04</span>
              <h3>Governance &amp; handoff</h3>
              <p>We leave behind a policy framework, eval suite, and trained internal team so you don&apos;t depend on us forever.</p>
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
              <p>Two to three deployed agents on workflows we observe and agree on, plus The Agentic Readiness Map: a year-long roadmap scored against six dimensions of organizational readiness.</p>
              <Link href="/foundation" className={s['journey-link']}>See the Foundation →</Link>
            </div>
            <div className={s['journey-step']}>
              <div className={s['journey-num']}>2</div>
              <span className={s['journey-label']}>Week 6</span>
              <h4>The Working Session</h4>
              <p>Your sponsor sees the agents running, the Map presented, the inventory of every automation opportunity we surfaced. If the work hasn&apos;t landed, you don&apos;t pay. If it has, we keep going together.</p>
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
          <SectionLabel accent>Our Standard</SectionLabel>
          <h2>What we believe.</h2>
          <p className={`${s.lead} ${s.narrow}`}>
            These are a few of our seven tenets. Each one rejects a common failure mode in the consulting industry, and filters who we work with as much as how we work.
          </p>

          <div className={s['standard-grid']}>
            <div className={s['standard-tenet']}>
              <span className={s['tenet-num']}>01</span>
              <h4>The gap is human, <em>not technological</em>.</h4>
              <p>The model isn&apos;t the bottleneck. The workflow is. The habit is. The governance is. We don&apos;t sell technology. We build the bridge between technology and the operating model that has to meet it.</p>
            </div>
            <div className={s['standard-tenet']}>
              <span className={s['tenet-num']}>03</span>
              <h4>Agents are <em>employees</em>, not features.</h4>
              <p>The mental model that produces good outcomes is &quot;we hired someone,&quot; not &quot;we deployed a bot.&quot; Agents need scope, accountability, audit trails, and review. The framing decides the outcome before any technology is chosen.</p>
            </div>
            <div className={s['standard-tenet']}>
              <span className={s['tenet-num']}>06</span>
              <h4>You should be able to <em>fire us</em>.</h4>
              <p>Every engagement ends asking: could the client run this themselves now? If the answer is no, we haven&apos;t done our job. The freedom to leave is what makes the relationship real.</p>
            </div>
          </div>

          <div className={s['standard-link']}>
            <Link href="/standard">Read all seven tenets &nbsp;→</Link>
          </div>
        </section>

        {/* Read Deeper */}
        <section className={s.section}>
          <SectionLabel accent>Discover the Firm</SectionLabel>
          <h2 className={s['docs-heading']}>We give the work <em>away</em>.</h2>
          <p className={s.lead}>
            Everything you&apos;d want to read before signing a six-figure contract. The methodology, the principles, the contract terms, the way we run the engagement. If you decide to do this without us, you&apos;ll have what you need.
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

        {/* The Offer */}
        <section className={s.section}>
          <SectionLabel>The Offer</SectionLabel>
          <h2>Fixed fees. Real outcomes. <em>One commitment</em> to begin.</h2>

          <div className={s['offer-grid']}>
            <div className={`${s['offer-cell']} ${s.featured}`}>
              <span className={s['offer-tier']}>Entry · 6 weeks · Fixed fee</span>
              <h4>The Agentic Foundation</h4>
              <div className={s['offer-price']}>$48,000<span className={s['offer-unit']}>USD</span></div>
              <p>2–3 deployed agents, The Agentic Readiness Map, working-session presentation. One invoice at kickoff.</p>
            </div>
            <div className={s['offer-cell']}>
              <span className={s['offer-tier']}>Ongoing partnership</span>
              <h4>The Agentic Continuum</h4>
              <div className={s['offer-price']}>$20,000<span className={s['offer-unit']}>/month</span></div>
              <p>Roadmap execution, agent stewardship, governance, and quarterly board-ready reporting.</p>
            </div>
            <div className={s['offer-cell']}>
              <span className={s['offer-tier']}>Infrastructure only</span>
              <h4>Harbour, kept running</h4>
              <div className={s['offer-price']}>$2,000<span className={s['offer-unit']}>/month</span></div>
              <p>Hosted infrastructure for the agents we deployed. Changes and repairs at $200/hour.</p>
            </div>
          </div>

          <div className={s['offer-stakes']}>
            <span className={s['offer-stakes-label']}>Our Stakes</span>
            <p>
              If your sponsor isn&apos;t happy with the work, the process, or the result at week six, <strong>we don&apos;t get paid.</strong> If we succeed, <strong>$20,000 of your engagement fee carries forward as your first Continuum month.</strong>
            </p>
          </div>

          <div className={s['offer-link']}>
            <Link href="/foundation">See the full Foundation offer &nbsp;→</Link>
          </div>
        </section>

      </div>

      <CtaSection
        heading={<>A forty-five-minute call to scope the <em>work</em>.</>}
        sub="No pitch deck. We ask about the work your team does, where AI has and hasn't stuck, and where the natural first agents would live. If The Foundation fits, we draft the SOW within forty-eight hours."
      />
    </>
  )
}

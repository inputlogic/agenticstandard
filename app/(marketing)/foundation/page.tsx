import { SectionLabel } from 'components/section-label'
import { CtaSection } from 'components/cta-section'
import s from './page.module.scss'

export const metadata = {
  title: 'The Agentic Foundation',
  description: 'Six weeks. Fixed fee. Two to three deployed agents, The Agentic Readiness Map, and a working-session presentation. Operating AI, not a strategy deck.',
}

export default function FoundationPage() {
  return (
    <>
      <div className="container frame" id="main">

        {/* Hero */}
        <section className={s.hero}>
          <SectionLabel accent>The Entry Engagement</SectionLabel>
          <h1>The Agentic <em>Foundation</em>.</h1>
          <div className={s.subtitle}>
            Six weeks. Fixed fee. Operating AI inside your organization, not a strategy deck about what you could do someday.
          </div>
        </section>

        {/* Opening */}
        <section className={s.section}>
          <div className={s.reading}>
            <SectionLabel>What it is</SectionLabel>
            <h2>The engagement that puts AI <em>to work</em>.</h2>
            <p className={s.lead}>
              The Agentic Foundation is how every client relationship begins. In six weeks, we deploy two to three working agents into your real workflows, produce The Agentic Readiness Map (a scored diagnostic and phased roadmap) and present the whole thing in a working session with your sponsor.
            </p>
            <p>
              By week six your organization has AI doing real work in production, a roadmap your board will recognize, and three honest paths forward. You choose which one fits.
            </p>
            <p>
              This is not a pilot. Pilots are designed to prove a concept; the Foundation is designed to <em>change the operating capacity of your organization</em> and leave behind the roadmap to keep going.
            </p>
          </div>
        </section>

        {/* Deliverables Intro */}
        <section className={s['deliverables-intro']}>
          <div className={s.reading}>
            <SectionLabel accent>Deliverables</SectionLabel>
            <h2>Three things you walk away with.</h2>
            <p className={s['deliverables-lead']}>
              Not slides about what could be done. Artifacts that are already running, already scored, and already defensible to your board.
            </p>
          </div>
        </section>

        {/* Deliverable 01 */}
        <article className={s.deliverable}>
          <div className={s['deliverable-grid']}>
            <div>
              <div className={s['deliverable-num']}>01</div>
              <div className={s['deliverable-tag']}>The Agents</div>
            </div>
            <div className={s['deliverable-body']}>
              <h3>Two to three <em>deployed agents</em>.</h3>
              <p>
                Working agents in production on real workflows we observe and agree on together during the first two weeks. These are not demos or proofs of concept. They run on your data, in your tools, doing work that previously required a person.
              </p>
              <p>
                Each agent ships with workflow shadowing, tuning, stabilization, and a named champion on your team who understands what it does and how to evaluate it. The agents run on <em>Harbour</em>, our hosted infrastructure, with audit trails, failure handling, and observability built in.
              </p>
              <p>
                By the end of week six, you can point to hours returned and capacity unlocked, not a dashboard of what might be possible.
              </p>
            </div>
          </div>
        </article>

        {/* Deliverable 02 */}
        <article className={s.deliverable}>
          <div className={s['deliverable-grid']}>
            <div>
              <div className={s['deliverable-num']}>02</div>
              <div className={s['deliverable-tag']}>The Map</div>
            </div>
            <div className={s['deliverable-body']}>
              <h3>The Agentic Readiness <em>Map</em>.</h3>
              <p>
                A scored diagnostic across six dimensions of organizational readiness: operating habit, workflow legibility, data accessibility, system surface, governance posture, and sponsorship, each scored 1 to 5 on direct observation, not questionnaires.
              </p>
              <p>
                Alongside the scores: a complete opportunity inventory of every automation candidate we surfaced during the six weeks, catalogued in a consistent format with effort, impact, confidence scores, and a phase recommendation. Candidates are grouped into a phased roadmap (90 days, 180 days, 365 days) based on real dependencies, not appetite.
              </p>
              <p>
                The Map is yours. If you walk away from us with the document and never call back, it's good enough to run on. That is part of the value.
              </p>
            </div>
          </div>
        </article>

        {/* Deliverable 03 */}
        <article className={s.deliverable}>
          <div className={s['deliverable-grid']}>
            <div>
              <div className={s['deliverable-num']}>03</div>
              <div className={s['deliverable-tag']}>The Session</div>
            </div>
            <div className={s['deliverable-body']}>
              <h3>The working-session <em>presentation</em>.</h3>
              <p>
                A sixty to ninety minute session with your sponsor where we walk the agents running, present the Map, review every automation opportunity we surfaced, and lay out the three paths forward.
              </p>
              <p>
                This is not a read-out. It's a working session. We watch what gets debated, what surprises the room, and what the sponsor prioritizes. That conversation becomes the foundation for whatever comes next, whether with us or without us.
              </p>
            </div>
          </div>
        </article>

        {/* Timeline */}
        <section className={s.section}>
          <SectionLabel>The Engagement</SectionLabel>
          <h2>How the six weeks run.</h2>
          <p className={s['timeline-lead']}>
            Every week has a job. The agents ship early so the Map is grounded in real operating experience, not interviews about what people think they do.
          </p>

          <div className={s.timeline}>
            <div className={s.week}>
              <div className={s['week-num']}>1</div>
              <span className={s['week-label']}>Kickoff</span>
              <h5 className={s['week-title']}>Sponsor alignment</h5>
              <p>Sponsor interview. System inventory. Workflow shadowing candidates identified. Security and IT introductions made.</p>
            </div>
            <div className={s.week}>
              <div className={s['week-num']}>2</div>
              <span className={s['week-label']}>Discovery</span>
              <h5 className={s['week-title']}>Shadowing &amp; data probe</h5>
              <p>Three to five workflow shadowing sessions. We attempt to pull three specific data sets ourselves. All policies read.</p>
            </div>
            <div className={s.week}>
              <div className={s['week-num']}>3</div>
              <span className={s['week-label']}>Build</span>
              <h5 className={s['week-title']}>First deploys</h5>
              <p>First one or two Harbour agents ship. Observation continues. Dimensions 1 to 4 scoring begins on collected evidence.</p>
            </div>
            <div className={s.week}>
              <div className={s['week-num']}>4</div>
              <span className={s['week-label']}>Build</span>
              <h5 className={s['week-title']}>Stabilize &amp; expand</h5>
              <p>Deployed agents tuned. Candidate list grows and starts being sorted. Phase placements debated internally.</p>
            </div>
            <div className={s.week}>
              <div className={s['week-num']}>5</div>
              <span className={s['week-label']}>Govern</span>
              <h5 className={s['week-title']}>Governance review</h5>
              <p>Remaining agents ship. Security and compliance scoring conversation. Dimensions 5 &amp; 6 scored. Draft inventory complete.</p>
            </div>
            <div className={s.week}>
              <div className={s['week-num']}>6</div>
              <span className={s['week-label']}>Present</span>
              <h5 className={s['week-title']}>Synthesis &amp; handoff</h5>
              <p>Document written. Internal review pass. Working session with the sponsor. The Map and agents are left behind.</p>
            </div>
          </div>
        </section>

        {/* Prerequisites */}
        <section className={s.section}>
          <SectionLabel>What We Need From You</SectionLabel>
          <h2>Four things to make the six weeks <em>work</em>.</h2>
          <p className={s['prereq-lead']}>
            We bring the methodology, the engineering, and the operating rigor. You bring the access and the mandate. Without these four, the engagement stalls.
          </p>

          <div className={s['prereq-grid']}>
            <div className={s.prereq}>
              <span className={s['prereq-num']}>01</span>
              <h4>An executive sponsor</h4>
              <p>Someone who can approve the engagement, clear blockers, and attend the week-six working session. This person owns the outcome.</p>
            </div>
            <div className={s.prereq}>
              <span className={s['prereq-num']}>02</span>
              <h4>An operational owner</h4>
              <p>Someone on your team who meets with us weekly, coordinates access to people and systems, and becomes the internal champion.</p>
            </div>
            <div className={s.prereq}>
              <span className={s['prereq-num']}>03</span>
              <h4>Access to the work</h4>
              <p>Permission to shadow real workflows, talk to real people doing real work, and access the systems where that work happens. We can't score what we can't see.</p>
            </div>
            <div className={s.prereq}>
              <span className={s['prereq-num']}>04</span>
              <h4>IT and security introduction</h4>
              <p>A warm handoff to the people who control system access, credentials, and policy. Agents need to read and write to your tools.</p>
            </div>
          </div>
        </section>

        {/* Guarantee */}
        <section className={s.section}>
          <div className={s.reading}>
            <SectionLabel accent>The Guarantee</SectionLabel>
            <h2>If it doesn't land, you don't <em>pay</em>.</h2>
            <p className={s.lead}>
              The Foundation carries a satisfaction guarantee. If your sponsor isn't happy with the work, the process, or the result at week six, you don't get paid. No negotiation, no partial billing, no awkward conversation about scope.
            </p>
            <p>
              We carry this risk because we believe in the work and because it forces us to choose engagements we can actually win. A consulting firm that guarantees outcomes is a consulting firm that disqualifies honestly.
            </p>
          </div>

          <div className={s['guarantee-block']}>
            <span className={s['guarantee-label']}>The Deal</span>
            <p>
              If your sponsor isn't happy at week six, <strong>we don't get paid.</strong> If we succeed, <strong>$20,000 of your engagement fee carries forward as your first Continuum month</strong>, so the transition to the ongoing partnership is already funded.
            </p>
          </div>
        </section>

        {/* Pricing Band */}
        <div className={s['pricing-band']}>
          <div className={s.price}>
            $48,000<span className={s['price-unit']}>Fixed</span>
          </div>
          <div className={s.qualifier}>
            One invoice at kickoff. Six weeks of work. Two to three deployed agents. The Agentic Readiness Map. The working-session presentation. The guarantee.
          </div>
        </div>

        {/* Three Paths */}
        <section className={s.section}>
          <SectionLabel>After Week Six</SectionLabel>
          <h2>Three honest paths <em>forward</em>.</h2>
          <p className={s['paths-lead']}>
            At the end of the Foundation, you choose. There's no pressure to continue with us, and every path leaves you better off than when you started.
          </p>

          <div className={s.paths}>
            <div className={s.path}>
              <span className={s['path-label']}>Path One</span>
              <h4>The Agentic <em>Continuum</em></h4>
              <p>The ongoing partnership that executes the roadmap. New agents on cadence, governance maturation, workforce coaching, and quarterly board-ready reporting. $20,000 per month, with your first month already funded from the Foundation fee.</p>
            </div>
            <div className={s.path}>
              <span className={s['path-label']}>Path Two</span>
              <h4>Harbour, <em>kept running</em></h4>
              <p>You take the Map and run the roadmap yourself. We keep the agents running on Harbour infrastructure at $2,000 per month. Changes and repairs billed at $200 per hour.</p>
            </div>
            <div className={s.path}>
              <span className={s['path-label']}>Path Three</span>
              <h4>Walk away, <em>fully equipped</em></h4>
              <p>You take the Map, the agents, and the documentation. We help you migrate to your own infrastructure during a two-week transition window included in the engagement. Everything we built is yours.</p>
            </div>
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

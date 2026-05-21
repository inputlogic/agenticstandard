import { SectionLabel } from 'components/section-label'
import { CtaSection } from 'components/cta-section'
import s from './page.module.scss'

export const metadata = {
  title: 'The Agentic Readiness Map',
  description: 'A six-week diagnostic for organizations adopting agentic AI, built around evidence, not survey data.',
}

export default function MapPage() {
  return (
    <>
      <div className="container frame" id="main">

        {/* Hero */}
        <section className={s.hero}>
          <SectionLabel accent>The Methodology</SectionLabel>
          <h1 className={s['hero-heading']}>
            A six-week diagnostic for organizations adopting <em>agentic</em> AI, built around evidence, not survey data.
          </h1>
          <p className={s.lead}>
            The Agentic Readiness Map is the framework we run inside every entry engagement. Six dimensions of organizational readiness, scored on observation. An inventory of every automation opportunity we surfaced during the work. A phased roadmap your team can run on its own, or accelerate with us.
          </p>
        </section>

        {/* What It Is */}
        <section className={s.section}>
          <SectionLabel>What it is</SectionLabel>
          <h2>Two parts, one document.</h2>
          <div className={s['two-col']}>
            <div>
              <h4><span className={s.num}>PART ONE</span>State of the Org</h4>
              <p className={s.small}>
                Six dimensions of agentic readiness, each scored 1 to 5 against concrete behavioral anchors. Every score is grounded in observations made during the engagement with no questionnaires or self-reported maturity.
              </p>
            </div>
            <div>
              <h4><span className={s.num}>PART TWO</span>Opportunity Inventory &amp; Roadmap</h4>
              <p className={s.small}>
                Every automation candidate observed during the six weeks, catalogued in a consistent format and phased into 90, 180, and 365-day buckets based on dependencies. A scorecard the client can run on its own.
              </p>
            </div>
          </div>
        </section>

        {/* Six Dimensions */}
        <section className={s.section}>
          <SectionLabel>Part One</SectionLabel>
          <h2>The Six Dimensions</h2>
          <p className={`${s.lead} ${s['lead-spaced']}`}>
            Each dimension is scored 1 to 5 on observation. Scores come with evidence; evidence comes with a recommended move to the next level. Most organizations begin at 2 or 3 across most dimensions; that is the baseline, not bad news.
          </p>

          <div className={s.dimensions}>

            {/* 01 Operating Habit */}
            <div className={s.dimension}>
              <div className={s['num-block']}>
                <span className={s['dim-num']}>01</span>
                <span className={s.tagline}>The People</span>
              </div>
              <div>
                <h3>Operating Habit</h3>
                <div className={s.question}>How does the workforce actually relate to AI today?</div>

                <div className={s.rubric}>
                  <div className={s['rubric-row']}><div className={s.lvl}>L1</div><div className={s.name}>Absent</div><div className={s.desc}>Fewer than 10% of knowledge workers have ever used a frontier AI tool for work. No prompting culture. AI is talked about, not used.</div></div>
                  <div className={s['rubric-row']}><div className={s.lvl}>L2</div><div className={s.name}>Sporadic</div><div className={s.desc}>Pockets of power users in scattered roles. No shared norms. Most teams have never run a prompt in earnest.</div></div>
                  <div className={s['rubric-row']}><div className={s.lvl}>L3</div><div className={s.name}>Widespread</div><div className={s.desc}>A majority of knowledge workers use AI weekly. Use is shallow: drafting, summarizing and unmeasured.</div></div>
                  <div className={s['rubric-row']}><div className={s.lvl}>L4</div><div className={s.name}>Daily habit</div><div className={s.desc}>AI sits in the daily workflow for most knowledge workers. Teams have role-specific prompting patterns. Shared libraries exist.</div></div>
                  <div className={s['rubric-row']}><div className={s.lvl}>L5</div><div className={s.name}>AI-native</div><div className={s.desc}>AI is the default starting point for most cognitive work. New hires are onboarded into it. Workflows are designed assuming AI is available.</div></div>
                </div>

                <div className={s.evidence}>
                  <span className={s['evidence-label']}>Evidence we collect</span>
                  <p>Observed use during workflow shadowing. Interview answers to "show me how you would use AI for this." Existence and quality of shared prompt libraries. Count of paid AI seats against headcount.</p>
                </div>
              </div>
            </div>

            {/* 02 Workflow Legibility */}
            <div className={s.dimension}>
              <div className={s['num-block']}>
                <span className={s['dim-num']}>02</span>
                <span className={s.tagline}>The Work</span>
              </div>
              <div>
                <h3>Workflow Legibility</h3>
                <div className={s.question}>Can the work be described well enough to delegate to a human or an agent?</div>

                <div className={s.rubric}>
                  <div className={s['rubric-row']}><div className={s.lvl}>L1</div><div className={s.name}>Tribal</div><div className={s.desc}>Workflows live in people&apos;s heads. New hires shadow for months. Nothing is documented.</div></div>
                  <div className={s['rubric-row']}><div className={s.lvl}>L2</div><div className={s.name}>Aspirational</div><div className={s.desc}>Documentation exists but is stale, incomplete, or wishful. It doesn&apos;t match what people actually do.</div></div>
                  <div className={s['rubric-row']}><div className={s.lvl}>L3</div><div className={s.name}>Core documented</div><div className={s.desc}>Core workflows are documented well enough for handoff. Edge cases and exceptions are still tribal knowledge.</div></div>
                  <div className={s['rubric-row']}><div className={s.lvl}>L4</div><div className={s.name}>Well-described</div><div className={s.desc}>Workflows have clear inputs, outputs, decision points, and escalation paths. Variability is bounded and understood.</div></div>
                  <div className={s['rubric-row']}><div className={s.lvl}>L5</div><div className={s.name}>Workflows-as-code</div><div className={s.desc}>Workflows are versioned, measured, and treated like software. Process changes go through review.</div></div>
                </div>

                <div className={s.evidence}>
                  <span className={s['evidence-label']}>Evidence we collect</span>
                  <p>We try to onboard ourselves to one workflow using only their documentation. We ask "if a new hire started Monday, what would they read?" We observe how exceptions actually get handled in practice.</p>
                </div>
              </div>
            </div>

            {/* 03 Data Accessibility */}
            <div className={s.dimension}>
              <div className={s['num-block']}>
                <span className={s['dim-num']}>03</span>
                <span className={s.tagline}>The Data</span>
              </div>
              <div>
                <h3>Data Accessibility</h3>
                <div className={s.question}>Can an agent reach the data it needs to act?</div>

                <div className={s.rubric}>
                  <div className={s['rubric-row']}><div className={s.lvl}>L1</div><div className={s.name}>Locked</div><div className={s.desc}>Data on paper, in personal drives, in legacy systems with no export. Most data is unfindable without a person.</div></div>
                  <div className={s['rubric-row']}><div className={s.lvl}>L2</div><div className={s.name}>Digital but scattered</div><div className={s.desc}>Data is digital but spread across SharePoint chaos, shared inboxes, and shadow spreadsheets. No system of record.</div></div>
                  <div className={s['rubric-row']}><div className={s.lvl}>L3</div><div className={s.name}>Centralized, no API</div><div className={s.desc}>Data is consolidated into known systems like CRM, ERP &amp; warehouse, but accessible only through human-driven interfaces.</div></div>
                  <div className={s['rubric-row']}><div className={s.lvl}>L4</div><div className={s.name}>Queryable</div><div className={s.desc}>Core data is reachable via APIs, warehouses, or structured retrieval. Agents can read what they need to act.</div></div>
                  <div className={s['rubric-row']}><div className={s.lvl}>L5</div><div className={s.name}>Agent-ready</div><div className={s.desc}>Real-time, governed data layer. Documented schemas, scoped credentials available, change events streamable.</div></div>
                </div>

                <div className={s.evidence}>
                  <span className={s['evidence-label']}>Evidence we collect</span>
                  <p>We pick three specific data needs from the opportunity inventory and try to actually pull them. We document what worked, what required a human in the loop, and what proved impossible inside the engagement window.</p>
                </div>
              </div>
            </div>

            {/* 04 System Surface */}
            <div className={s.dimension}>
              <div className={s['num-block']}>
                <span className={s['dim-num']}>04</span>
                <span className={s.tagline}>The Stack</span>
              </div>
              <div>
                <h3>System Surface</h3>
                <div className={s.question}>Where does work happen, and can agents act there?</div>

                <div className={s.rubric}>
                  <div className={s['rubric-row']}><div className={s.lvl}>L1</div><div className={s.name}>Closed</div><div className={s.desc}>Custom legacy systems, no API, no webhook surface. Work happens in tools agents simply cannot reach.</div></div>
                  <div className={s['rubric-row']}><div className={s.lvl}>L2</div><div className={s.name}>Read-only</div><div className={s.desc}>Modern SaaS but agents can only read, not write. Action still requires human hands at the end of the chain.</div></div>
                  <div className={s['rubric-row']}><div className={s.lvl}>L3</div><div className={s.name}>Mixed</div><div className={s.desc}>Some systems support agent action; others don&apos;t. The critical two or three systems are inconsistent.</div></div>
                  <div className={s['rubric-row']}><div className={s.lvl}>L4</div><div className={s.name}>Mostly writable</div><div className={s.desc}>Most workflow tools expose webhook or API surfaces. Slack or Teams is the primary collaboration layer and fully addressable.</div></div>
                  <div className={s['rubric-row']}><div className={s.lvl}>L5</div><div className={s.name}>Composable</div><div className={s.desc}>Everything an agent might need to act on is reachable. Internal tooling has been built with agents in mind.</div></div>
                </div>

                <div className={s.evidence}>
                  <span className={s['evidence-label']}>Evidence we collect</span>
                  <p>We map the stack. For each system, we note read versus write capability for agents and document where work <em>actually</em> happens (the Slack threads, the email chains, the Notion pages) and whether agents can post there.</p>
                </div>
              </div>
            </div>

            {/* 05 Governance Posture */}
            <div className={s.dimension}>
              <div className={s['num-block']}>
                <span className={s['dim-num']}>05</span>
                <span className={s.tagline}>The Risk</span>
              </div>
              <div>
                <h3>Governance Posture</h3>
                <div className={s.question}>Can the organization give agents bounded authority safely?</div>

                <div className={s.rubric}>
                  <div className={s['rubric-row']}><div className={s.lvl}>L1</div><div className={s.name}>Absent</div><div className={s.desc}>No policy. No clear ownership of AI risk. Either denial ("we don&apos;t use AI") or fear-driven blockers with no framework behind them.</div></div>
                  <div className={s['rubric-row']}><div className={s.lvl}>L2</div><div className={s.name}>Aspirational policy</div><div className={s.desc}>An acceptable-use policy exists. No enforcement, no audit, no incident response plan.</div></div>
                  <div className={s['rubric-row']}><div className={s.lvl}>L3</div><div className={s.name}>Baseline controls</div><div className={s.desc}>AUP exists and is enforced. Some review workflows for AI use. Audit trails are partial.</div></div>
                  <div className={s['rubric-row']}><div className={s.lvl}>L4</div><div className={s.name}>Risk-tiered</div><div className={s.desc}>Policies are tiered by risk. Agents have scoped credentials. Audit trails are durable. Incidents have a defined response path.</div></div>
                  <div className={s['rubric-row']}><div className={s.lvl}>L5</div><div className={s.name}>Agents-as-employees</div><div className={s.desc}>Agents are governed like staff: scoped authority, monitoring, incident response, periodic review. Bounded autonomy is a designed system, not a hope.</div></div>
                </div>

                <div className={s.evidence}>
                  <span className={s['evidence-label']}>Evidence we collect</span>
                  <p>We read the AI policy. We talk to security, legal, and compliance. We find out what has been blocked or escalated. We ask the operative question: "what would happen if an agent posted something wrong to a customer?"</p>
                </div>
              </div>
            </div>

            {/* 06 Sponsorship & Ownership */}
            <div className={s.dimension}>
              <div className={s['num-block']}>
                <span className={s['dim-num']}>06</span>
                <span className={s.tagline}>The Mandate</span>
              </div>
              <div>
                <h3>Sponsorship &amp; Ownership</h3>
                <div className={s.question}>Who owns this, and can they fund it?</div>

                <div className={s.rubric}>
                  <div className={s['rubric-row']}><div className={s.lvl}>L1</div><div className={s.name}>Orphan</div><div className={s.desc}>No one owns AI adoption. It&apos;s an IT side-project or a marketing fascination. No budget line.</div></div>
                  <div className={s['rubric-row']}><div className={s.lvl}>L2</div><div className={s.name}>Champion without authority</div><div className={s.desc}>A motivated individual is pushing AI forward but lacks budget, executive cover, or operational power.</div></div>
                  <div className={s['rubric-row']}><div className={s.lvl}>L3</div><div className={s.name}>Sponsor without operator</div><div className={s.desc}>Executive sponsor with budget exists. No one is operationally accountable for outcomes. Progress stalls.</div></div>
                  <div className={s['rubric-row']}><div className={s.lvl}>L4</div><div className={s.name}>Paired ownership</div><div className={s.desc}>Sponsor, operational owner, and budget all in place. Department champions exist. There is a named throat to choke.</div></div>
                  <div className={s['rubric-row']}><div className={s.lvl}>L5</div><div className={s.name}>Strategic priority</div><div className={s.desc}>AI adoption is a tracked business priority with measurable goals, named accountability, and quarterly review at the executive level.</div></div>
                </div>

                <div className={s.evidence}>
                  <span className={s['evidence-label']}>Evidence we collect</span>
                  <p>We identify the sponsor. We identify the operational owner. We verify budget. We verify champions in each affected department. We test what happens when the sponsor is unavailable for two weeks.</p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Opportunity Inventory */}
        <section className={s.section}>
          <SectionLabel>Part Two</SectionLabel>
          <h2>The Opportunity Inventory.</h2>
          <p className={`${s.lead} ${s['lead-spaced']}`}>
            Every automation candidate we observe during the six weeks is catalogued in a consistent format. By week six there are typically eight to twenty candidates. The inventory is the conversion engine; not because it sells the next phase, but because it makes the next phase obvious.
          </p>

          <div className={s['field-grid']}>
            <div className={s.field}>
              <span className={s['field-label']}>Field 01</span>
              <h4>Name &amp; one-line summary</h4>
              <p>Short, action-oriented. "Monday competitive scan" rather than "competitive intelligence augmentation."</p>
            </div>
            <div className={s.field}>
              <span className={s['field-label']}>Field 02</span>
              <h4>Current state</h4>
              <ul className={s['field-list']}>
                <li>Who performs it today</li>
                <li>Frequency: daily, weekly, per-event</li>
                <li>Time per instance and total annual hours</li>
                <li>Frustration level: surprisingly predictive</li>
              </ul>
            </div>
            <div className={s.field}>
              <span className={s['field-label']}>Field 03</span>
              <h4>Proposed agentic state</h4>
              <ul className={s['field-list']}>
                <li>What the agent does</li>
                <li>What the human still does</li>
                <li>What the trigger is</li>
                <li>Where the output lands</li>
              </ul>
            </div>
            <div className={s.field}>
              <span className={s['field-label']}>Field 04</span>
              <h4>Dependencies</h4>
              <ul className={s['field-list']}>
                <li>Data the agent needs and whether it&apos;s reachable</li>
                <li>Systems the agent reads from and writes to</li>
                <li>Approvals or policy required</li>
                <li>Workflow change required on the human side</li>
              </ul>
            </div>
            <div className={s.field}>
              <span className={s['field-label']}>Field 05</span>
              <h4>Scoring</h4>
              <ul className={s['field-list']}>
                <li>Effort: 1 (ships in a week) to 5 (multi-quarter)</li>
                <li>Impact: 1 (marginal) to 5 (transformative)</li>
                <li>Confidence: 1 (untested) to 5 (proven pattern)</li>
              </ul>
            </div>
            <div className={s.field}>
              <span className={s['field-label']}>Field 06</span>
              <h4>Phase recommendation</h4>
              <p>Now, 90 days, 180 days, 365 days, or parking lot. With reasoning attached so the placement is defensible.</p>
            </div>
          </div>
        </section>

        {/* Phased Roadmap */}
        <section className={s.section}>
          <SectionLabel>Part Three</SectionLabel>
          <h2>The Phased Roadmap.</h2>
          <p className={`${s.lead} ${s['lead-spaced']}`}>
            Candidates are grouped into phases by dependency rather than by appetite. The roadmap tells you what is buildable now, what becomes buildable after the right plumbing is laid, and what requires structural change first.
          </p>

          <div className={s.phases}>
            <div className={s.phase}>
              <div className={s['phase-num']}>0</div>
              <div className={s['phase-time']}>Already shipped</div>
              <h4>Foundation</h4>
              <p>The agents deployed during the entry engagement, with measured performance: runs completed, hours saved, observed accuracy.</p>
            </div>
            <div className={s.phase}>
              <div className={s['phase-num']}>1</div>
              <div className={s['phase-time']}>Next 90 days</div>
              <h4>Quick wins</h4>
              <p>Low-dependency candidates that ship without new infrastructure. The next thing to do, with a clear path to ROI.</p>
            </div>
            <div className={s.phase}>
              <div className={s['phase-num']}>2</div>
              <div className={s['phase-time']}>90 to 180 days</div>
              <h4>Plumbing</h4>
              <p>Candidates that require data plumbing, governance work, or workflow change before they can ship at production quality.</p>
            </div>
            <div className={s.phase}>
              <div className={s['phase-num']}>3</div>
              <div className={s['phase-time']}>180 to 365 days</div>
              <h4>Structural</h4>
              <p>New systems, org changes, policy frameworks, or workflow redesigns. The work that compounds the rest.</p>
            </div>
          </div>

          <p className={s['parking-note']}>
            Candidates we considered and explicitly de-prioritized go to a parking lot, then documented with their reason, so they don&apos;t keep surfacing in every steering meeting.
          </p>
        </section>

        {/* Scorecard */}
        <section className={s.section}>
          <SectionLabel>Part Four</SectionLabel>
          <h2>The Scorecard.</h2>
          <p className={`${s.lead} ${s['lead-spaced']}`}>
            A small set of quarterly metrics the client can run on their own, without us in the room. The same scorecard carries into The Agentic Continuum if the engagement continues. Continuity over reinvention.
          </p>

          <div className={s.metrics}>
            <div className={s.metric}>
              <h4>Hours saved per week</h4>
              <p>Measured per agent, summed across the organization. Phase targets attached so progress is visible.</p>
            </div>
            <div className={s.metric}>
              <h4>Tasks fully automated</h4>
              <p>Count of candidates moved from "human does it" to "agent does it without review." The end-state goal.</p>
            </div>
            <div className={s.metric}>
              <h4>Human-in-the-loop tasks</h4>
              <p>Count of candidates where the agent drafts and a human approves. The interim state, and often the right resting place.</p>
            </div>
            <div className={s.metric}>
              <h4>Adoption rate</h4>
              <p>For any AI-assisted workflow, the share of the relevant team actually using it. Predicts whether wins compound or evaporate.</p>
            </div>
            <div className={s.metric}>
              <h4>Incidents</h4>
              <p>Count of agent outputs requiring correction or escalation. Track the trend, not just the absolute number.</p>
            </div>
          </div>
        </section>

        {/* Watch-outs */}
        <section className={s.section}>
          <SectionLabel>Part Five</SectionLabel>
          <h2>Watch-outs.</h2>
          <p className={`${s.lead} ${s['lead-spaced']}`}>
            Specific to what we observe. Never boilerplate. Three to six per engagement is typical. Specific risk reads as credibility, not as hedging.
          </p>

          <div className={s.watchouts}>
            <div className={s.watchout}>
              <span className={s['watchout-tag']}>Example</span>
              <p>"Your governance scored a 2. Phase 1 candidates assume you will move to a 3 within 60 days. If that doesn&apos;t happen, half of Phase 1 stalls."</p>
            </div>
            <div className={s.watchout}>
              <span className={s['watchout-tag']}>Example</span>
              <p>"The champion for marketing automation is leaving next quarter. Ownership transition is the highest-risk item in this roadmap."</p>
            </div>
            <div className={s.watchout}>
              <span className={s['watchout-tag']}>Example</span>
              <p>"Your CRM doesn&apos;t expose a writable API for the records agents would touch. Phase 2 assumes a middleware layer or vendor change."</p>
            </div>
          </div>
        </section>

        {/* Recommended Next Phase */}
        <section className={s.section}>
          <SectionLabel>Part Six</SectionLabel>
          <h2>The Recommended Next Phase.</h2>
          <p className={`${s.lead} ${s['lead-spaced']}`}>
            Presented as an objective recommendation, not a pitch. Three pieces, every time:
          </p>

          <div className={s['field-grid']}>
            <div className={s.field}>
              <span className={s['field-label']}>01</span>
              <h4>What we&apos;d tackle next</h4>
              <p>The Phase 1 candidates from the inventory, with brief reasoning. Specific, evidenced, and limited to what can credibly ship in the next 90 days.</p>
            </div>
            <div className={s.field}>
              <span className={s['field-label']}>02</span>
              <h4>What it would take</h4>
              <p>Resourcing, time, and what the client needs to provide. No price; that&apos;s a follow-up conversation, after the recommendation has been weighed on its merits.</p>
            </div>
            <div className={s.field}>
              <span className={s['field-label']}>03</span>
              <h4>What success looks like in six months</h4>
              <p>Specific scorecard targets. If you decline, you have everything you need to do this yourselves. That is the point.</p>
            </div>
          </div>
        </section>

        {/* How We Gather It */}
        <section className={s.section}>
          <SectionLabel>The Engagement</SectionLabel>
          <h2>How we gather it in six weeks.</h2>
          <p className={`${s.lead} ${s['lead-spaced']}`}>
            The map is produced during the work. Every dimension is scored on observations made while we&apos;re deploying real agents into your real environment. By week six, the document writes itself.
          </p>

          <div className={s.timeline}>
            <div className={s.week}>
              <div className={s['week-num']}>1</div>
              <span className={s['week-label']}>Kickoff</span>
              <h5>Sponsor alignment</h5>
              <p>Sponsor interview. System inventory. Workflow shadowing candidates identified. Security and IT introductions made.</p>
            </div>
            <div className={s.week}>
              <div className={s['week-num']}>2</div>
              <span className={s['week-label']}>Discovery</span>
              <h5>Shadowing &amp; data probe</h5>
              <p>Three to five workflow shadowing sessions. We attempt to pull three specific data sets ourselves. All policies read.</p>
            </div>
            <div className={s.week}>
              <div className={s['week-num']}>3</div>
              <span className={s['week-label']}>Build</span>
              <h5>First deploys</h5>
              <p>First one or two Harbour agents ship. Observation continues. Dimensions 1 to 4 scoring begins on collected evidence.</p>
            </div>
            <div className={s.week}>
              <div className={s['week-num']}>4</div>
              <span className={s['week-label']}>Build</span>
              <h5>Stabilize</h5>
              <p>Deployed agents tuned. Candidate list grows and starts being sorted. Phase placements debated internally.</p>
            </div>
            <div className={s.week}>
              <div className={s['week-num']}>5</div>
              <span className={s['week-label']}>Govern</span>
              <h5>Governance review</h5>
              <p>Remaining agents ship. Security and compliance scoring conversation. Dimensions 5 &amp; 6 scored. Draft inventory complete.</p>
            </div>
            <div className={s.week}>
              <div className={s['week-num']}>6</div>
              <span className={s['week-label']}>Present</span>
              <h5>Synthesis &amp; handoff</h5>
              <p>Document written. Internal review pass. Sixty to ninety minute working session with the sponsor. The map is left behind.</p>
            </div>
          </div>
        </section>

        {/* Principles */}
        <section className={s.section}>
          <SectionLabel>Principles</SectionLabel>
          <h2>How we run the map.</h2>

          <div className={s.metrics}>
            <div className={s.metric}>
              <h4>Observation over questionnaire</h4>
              <p>Self-reported maturity scores are wrong roughly four times out of five. We score what we see rather than what we&apos;re told.</p>
            </div>
            <div className={s.metric}>
              <h4>The inventory matters more than the scores</h4>
              <p>If we had time for only one half of the map, it would be the opportunity inventory. The dimensions frame; the inventory acts.</p>
            </div>
            <div className={s.metric}>
              <h4>Score conservatively</h4>
              <p>A 3 well-defended is worth more than a 4 someone can argue with. Honesty in the baseline is what makes the roadmap credible.</p>
            </div>
            <div className={s.metric}>
              <h4>The presentation is a working session</h4>
              <p>The map is delivered in a room, not by email. We walk the inventory, watch what gets argued, and that argument becomes the next phase.</p>
            </div>
            <div className={s.metric}>
              <h4>We leave the document</h4>
              <p>The full map is yours. If you walk away from us with the document and never call back, the document is good enough to run on. That is part of the value.</p>
            </div>
          </div>
        </section>

      </div>

      {/* CTA */}
      <CtaSection
        heading={<>The Map is the artifact. The roadmap is the value. The agents are the <em>proof</em>.</>}
        sub="Your sponsor leaves the engagement with evidence in production, not a strategy deck. Forty-five-minute call to scope the work. The SOW arrives within forty-eight hours."
      />
    </>
  )
}

import Link from 'next/link'
import s from './page.module.scss'

export const metadata = {
  title: 'The Agentic Foundation',
  description: 'Beyond the chat window. We deploy 2-3 autonomous agents acting inside your stack in six weeks. Fixed fee, sponsor satisfaction guaranteed.',
}

export default function FoundationPage() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className={s.hero}>
        <div className={s['hero-grid']}>

          <div className={s['hero-content']}>
            <div className={s['hero-eyebrow']}>
              Agentic AI · Beyond the Chat Window · 2026
            </div>

            <h1>
              Your team operates agents in six weeks,{' '}
              <em>so they get their week back</em>.
            </h1>

            <p className={s['hero-sub']}>
              <span className={s.pain}>
                <span className={s['pain-item']}>Stop typing prompts into chat windows</span>
                <span className={s['pain-item']}>
                  <span className={s.sep}>·</span>&nbsp;No more copilots gathering dust
                </span>
                <span className={s['pain-item']}>
                  <span className={s.sep}>·</span>&nbsp;End the era of AI that doesn{"'"}t act.
                </span>
              </span>
              We deploy two to three autonomous agents inside your stack, acting on
              workflows we observe, posting in Slack while your team sleeps, completing
              tasks on their own. Score your readiness across six dimensions, hand your
              sponsor a year-long board-ready roadmap, and finish in one six-week,
              fixed-fee sprint.
            </p>

            <div className={s['hero-cta-wrap']}>
              <Link
                href="/book"
                className={s['hero-cta']}
              >
                Book a <span className={s['cta-detail']}>45-Minute </span>Call{' '}
                <span className={s.arrow}>→</span>
              </Link>
              <div className={s['hero-fud']}>
                <span className={s['fud-item']}>
                  <span className={s.check}>✓</span> Free call
                </span>
                <span className={s['fud-item']}>
                  <span className={s.check}>✓</span> No pitch deck
                </span>
                <span className={s['fud-item']}>
                  <span className={s.check}>✓</span> No follow-up pressure
                </span>
              </div>
            </div>
          </div>

          {/* HERO PROOF VISUAL */}
          <div className={s['hero-visual']}>
            <svg className={s['hv-corner-tl']} viewBox="0 0 60 60" fill="none">
              <path d="M 6 50 L 6 6 L 50 6" stroke="currentColor" strokeLinecap="square" strokeWidth="6" />
            </svg>

            <div className={s['hv-status']}>
              <div className={s['hv-status-label']}>Week Six · Delivered</div>
              <div className={s['hv-status-time']}>
                <span className={s['live-dot']} />
                <span>Live</span>
              </div>
            </div>

            {/* Agents Running */}
            <div className={s['hv-section']}>
              <div className={s['hv-section-label']}>Agents Running In Production</div>
              <div className={s['hv-agent']}>
                <div className={s['ag-dot']} />
                <div className={s['ag-text']}>
                  <div className={s['ag-name']}>The Inbox Sentinel</div>
                  <div className={s['ag-desc']}>
                    Triages, routes, and drafts responses to the shared inbox daily.
                  </div>
                </div>
              </div>
              <div className={s['hv-agent']}>
                <div className={s['ag-dot']} />
                <div className={s['ag-text']}>
                  <div className={s['ag-name']}>Weekly KPI Synthesizer</div>
                  <div className={s['ag-desc']}>
                    Auto-drafts the executive Monday briefing from seven data sources.
                  </div>
                </div>
              </div>
              <div className={s['hv-agent']}>
                <div className={s['ag-dot']} />
                <div className={s['ag-text']}>
                  <div className={s['ag-name']}>Competitive Scan Sentinel</div>
                  <div className={s['ag-desc']}>
                    Monitors six competitors, flags meaningful moves in Slack.
                  </div>
                </div>
              </div>
            </div>

            {/* Map Score */}
            <div className={s['hv-section']}>
              <div className={s['hv-section-label']}>The Agentic Readiness Map</div>
              <div className={s['hv-map']}>
                {[
                  { name: 'Workforce readiness', score: 4 },
                  { name: 'Workflow integration', score: 4 },
                  { name: 'Agentic deployment', score: 5 },
                  { name: 'Governance & risk', score: 3 },
                  { name: 'Data & infrastructure', score: 4 },
                  { name: 'Strategic alignment', score: 5 },
                ].map((row) => (
                  <div className={s['hv-map-row']} key={row.name}>
                    <div className={s['hv-map-name']}>{row.name}</div>
                    <div className={s['hv-map-score']}>
                      {[1, 2, 3, 4, 5].map((i) => (
                        <div
                          key={i}
                          className={`${s['hv-map-dot']}${i <= row.score ? ` ${s.on}` : ''}`}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Deliverables */}
            <div className={s['hv-deliverables']}>
              <div className={s['hv-deliv-item']}>
                <span className={s['hv-deliv-check']}>✓</span> Year-long roadmap delivered
              </div>
              <div className={s['hv-deliv-item']}>
                <span className={s['hv-deliv-check']}>✓</span> Sponsor working session (today)
              </div>
              <div className={s['hv-deliv-item']}>
                <span className={s['hv-deliv-check']}>✓</span> Map handoff (complete)
              </div>
            </div>

            <svg className={s['hv-corner-br']} viewBox="0 0 60 60" fill="none">
              <path d="M 54 10 L 54 54 L 10 54" stroke="currentColor" strokeLinecap="square" strokeWidth="6" />
            </svg>
          </div>

        </div>
      </section>

      {/* ============ PATTERN STRIP ============ */}
      <div className={s['pattern-strip']}>
        <div className={s.container}>
          <div className={s['pat-quote']}>
            Most enterprises have AI. <em>Few have agents.</em> We exist to make the
            leap, in six weeks.
          </div>
          <div className={s['pat-attribution']}>
            Agentic Standard<br />The Firm Manifesto · 01 of 07
          </div>
        </div>
      </div>

      {/* ============ WHAT YOU GET ============ */}
      <section className={s.block}>
        <div className={s.container}>
          <div className={s['sect-label']}>What you walk away with</div>
          <h2 className={s['sect-headline']}>
            Three deliverables, <em>one engagement</em>.
          </h2>
          <p className={s['sect-sub']}>
            By the end of week six you have agents acting in your stack, a roadmap
            your board will recognize, and a workforce that knows how to keep them
            running.
          </p>

          <div className={s['deliverables-grid']}>
            <div className={s['deliv-cell']}>
              <div className={s['deliv-num']}>01</div>
              <h3 className={s['deliv-name']}>
                Agents working in your <em>stack</em>.
              </h3>
              <p className={s['deliv-desc']}>
                Two to three autonomous agents deployed on workflows we observe and
                agree on. Acting on their own inside your environment, posting where
                your team already works, executing real tasks by week six.
              </p>
              <ul className={s['deliv-list']}>
                <li>Triaged shared inbox</li>
                <li>Weekly KPI synthesis</li>
                <li>Competitive scan automation</li>
                <li>Customer response drafting</li>
                <li>Internal report generation</li>
              </ul>
            </div>

            <div className={s['deliv-cell']}>
              <div className={s['deliv-num']}>02</div>
              <h3 className={s['deliv-name']}>
                The Agentic <em>Readiness Map</em>.
              </h3>
              <p className={s['deliv-desc']}>
                A diagnostic of your organization across six dimensions of agentic
                readiness, an inventory of every automation opportunity we surface,
                and a phased 90/180/365-day roadmap.
              </p>
              <ul className={s['deliv-list']}>
                <li>Six dimensions scored 1–5</li>
                <li>Opportunity inventory</li>
                <li>Phased roadmap (Q1–Q4)</li>
                <li>Quarterly success scorecard</li>
                <li>Board-ready presentation</li>
              </ul>
            </div>

            <div className={s['deliv-cell']}>
              <div className={s['deliv-num']}>03</div>
              <h3 className={s['deliv-name']}>
                A workforce that <em>can run it</em>.
              </h3>
              <p className={s['deliv-desc']}>
                Coaching for your internal champion and the team around them. By week
                six, someone inside your organization owns day-2 operations. You
                don{"'"}t need us forever.
              </p>
              <ul className={s['deliv-list']}>
                <li>Internal champion training</li>
                <li>Day-2 ops playbook</li>
                <li>Prompting standards manual</li>
                <li>Evaluation framework</li>
                <li>Governance handoff doc</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============ THE SPRINT ============ */}
      <section className={`${s.block} ${s.alt}`}>
        <div className={s.container}>
          <div className={s['sect-label']}>How the six weeks unfold</div>
          <h2 className={s['sect-headline']}>
            Not a year-long transformation. <em>A six-week sprint</em>.
          </h2>
          <p className={s['sect-sub']}>
            Every week has a deliverable. Every week has a checkpoint. By the end,
            you have working agents, not a roadmap to working AI.
          </p>

          <div className={s['sprint-grid']}>
            <div className={s['sprint-cell']}>
              <div className={s['sprint-num']}>1</div>
              <div className={s['sprint-phase']}>Kickoff</div>
              <h4 className={s['sprint-title']}>Sponsor alignment</h4>
              <p className={s['sprint-desc']}>
                Sponsor interview. System inventory. Workflow shadow candidates
                identified. Security and IT introductions.
              </p>
            </div>
            <div className={s['sprint-cell']}>
              <div className={s['sprint-num']}>2</div>
              <div className={s['sprint-phase']}>Discovery</div>
              <h4 className={s['sprint-title']}>Shadowing &amp; data probe</h4>
              <p className={s['sprint-desc']}>
                Three to five workflow shadowing sessions. We attempt to pull three
                specific data sets ourselves. Real friction is named.
              </p>
            </div>
            <div className={s['sprint-cell']}>
              <div className={s['sprint-num']}>3</div>
              <div className={s['sprint-phase']}>Build</div>
              <h4 className={s['sprint-title']}>First deploys</h4>
              <p className={s['sprint-desc']}>
                First one or two agents ship into production. Observation continues.
                Map dimension scoring begins.
              </p>
            </div>
            <div className={s['sprint-cell']}>
              <div className={s['sprint-num']}>4</div>
              <div className={s['sprint-phase']}>Build</div>
              <h4 className={s['sprint-title']}>Stabilize</h4>
              <p className={s['sprint-desc']}>
                Agents tuned against real use. Candidate inventory grows. Each
                automation is sorted into Q1–Q4 phases.
              </p>
            </div>
            <div className={s['sprint-cell']}>
              <div className={s['sprint-num']}>5</div>
              <div className={s['sprint-phase']}>Govern</div>
              <h4 className={s['sprint-title']}>Governance review</h4>
              <p className={s['sprint-desc']}>
                Final agents ship. Security and compliance scored. Champion trained.
                Map draft complete.
              </p>
            </div>
            <div className={s['sprint-cell']}>
              <div className={s['sprint-num']}>6</div>
              <div className={s['sprint-phase']}>Present</div>
              <h4 className={s['sprint-title']}>Synthesis &amp; handoff</h4>
              <p className={s['sprint-desc']}>
                Sixty to ninety minute working session with your sponsor. The Map is
                left behind. Agents are in production.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ WHY THIS WORKS ============ */}
      <section className={s.block}>
        <div className={s.container}>
          <div className={s['sect-label']}>
            Why this works when other engagements don{"'"}t
          </div>
          <h2 className={s['sect-headline']}>
            Three reasons we <em>land</em> when other firms stall.
          </h2>
          <p className={s['sect-sub']}>
            The reasons most enterprise AI engagements fail are not technical.
            They{"'"}re structural. Here{"'"}s what we do differently.
          </p>

          <div className={s['method-grid']}>
            <div className={s['method-tile']}>
              <svg className={s['mt-corner-tl']} viewBox="0 0 60 60" fill="none">
                <path d="M 6 50 L 6 6 L 50 6" stroke="currentColor" strokeLinecap="square" strokeWidth="6" />
              </svg>
              <div className={s['mt-num']}>01</div>
              <h3 className={s['mt-title']}>
                We <em>deploy</em>. Others advise.
              </h3>
              <p className={s['mt-desc']}>
                A strategy deck is not an outcome. Agents acting on your behalf is.
                By week six, autonomous agents are running in your environment;
                observing, posting, executing on their own. The deliverable is
                production, not a presentation.
              </p>
              <svg className={s['mt-corner-br']} viewBox="0 0 60 60" fill="none">
                <path d="M 54 10 L 54 54 L 10 54" stroke="currentColor" strokeLinecap="square" strokeWidth="6" />
              </svg>
            </div>

            <div className={s['method-tile']}>
              <svg className={s['mt-corner-tl']} viewBox="0 0 60 60" fill="none">
                <path d="M 6 50 L 6 6 L 50 6" stroke="currentColor" strokeLinecap="square" strokeWidth="6" />
              </svg>
              <div className={s['mt-num']}>02</div>
              <h3 className={s['mt-title']}>
                We <em>measure</em>. Others guess.
              </h3>
              <p className={s['mt-desc']}>
                The Readiness Map scores your organization across six dimensions on
                observation, not survey. Your roadmap is defensible to your board
                because it{"'"}s grounded in what we actually saw.
              </p>
              <svg className={s['mt-corner-br']} viewBox="0 0 60 60" fill="none">
                <path d="M 54 10 L 54 54 L 10 54" stroke="currentColor" strokeLinecap="square" strokeWidth="6" />
              </svg>
            </div>

            <div className={s['method-tile']}>
              <svg className={s['mt-corner-tl']} viewBox="0 0 60 60" fill="none">
                <path d="M 6 50 L 6 6 L 50 6" stroke="currentColor" strokeLinecap="square" strokeWidth="6" />
              </svg>
              <div className={s['mt-num']}>03</div>
              <h3 className={s['mt-title']}>
                We back ourselves <em>with a guarantee</em>.
              </h3>
              <p className={s['mt-desc']}>
                If your sponsor isn{"'"}t satisfied with the work, the process, or
                the result, you don{"'"}t pay. Full refund. No clawbacks, no clauses.
                This is the only B2B engagement you{"'"}ll find with this guarantee.
              </p>
              <svg className={s['mt-corner-br']} viewBox="0 0 60 60" fill="none">
                <path d="M 54 10 L 54 54 L 10 54" stroke="currentColor" strokeLinecap="square" strokeWidth="6" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ============ THE OFFER ============ */}
      <section className={`${s.block} ${s.alt}`} id="offer">
        <div className={s.container}>
          <div className={`${s['sect-label']} ${s['sect-label-center']}`}>
            The Offer
          </div>
          <h2 className={`${s['sect-headline']} ${s['sect-headline-center']}`}>
            What{"'"}s <em>in the box</em>.
          </h2>
          <p className={`${s['sect-sub']} ${s['sect-sub-center']}`}>
            Every line below is included in the fixed-fee engagement. One invoice.
            One outcome. One accountable team.
          </p>

          <div className={s['offer-card']}>
            <svg className={s['oc-corner-tl']} viewBox="0 0 60 60" fill="none">
              <path d="M 6 50 L 6 6 L 50 6" stroke="currentColor" strokeLinecap="square" strokeWidth="6" />
            </svg>

            <div className={s['offer-header']}>
              <h3 className={s['offer-title']}>
                The Agentic <em>Foundation</em>.
              </h3>
              <p className={s['offer-tagline']}>
                Six weeks. Fixed fee. Agents acting on your behalf, and the roadmap
                for what{"'"}s next.
              </p>
            </div>

            <ul className={s['stack-list']}>
              <li className={s['stack-item']}>
                <div className={s['stack-item-left']}>
                  <div className={s.tag}>Week 1–2</div>
                  <div className={s['item-name']}>
                    Discovery &amp; <em>workflow shadowing</em>
                  </div>
                  <div className={s['item-desc']}>
                    Three to five sessions inside your environment. We watch your
                    team work and identify the agents that produce the highest
                    leverage.
                  </div>
                </div>
                <div className={s['item-value']}>
                  $15,000<span className={s.label}>Value</span>
                </div>
              </li>

              <li className={s['stack-item']}>
                <div className={s['stack-item-left']}>
                  <div className={s.tag}>Week 3–5</div>
                  <div className={s['item-name']}>
                    Agent <em>build &amp; deploy</em>
                  </div>
                  <div className={s['item-desc']}>
                    Two to three autonomous agents shipped into your stack. Acting on
                    workflows, posting in Slack, executing on their own. Tuned
                    against real use.
                  </div>
                </div>
                <div className={s['item-value']}>
                  $35,000<span className={s.label}>Value</span>
                </div>
              </li>

              <li className={s['stack-item']}>
                <div className={s['stack-item-left']}>
                  <div className={s.tag}>Week 5–6</div>
                  <div className={s['item-name']}>
                    The Agentic <em>Readiness Map</em>
                  </div>
                  <div className={s['item-desc']}>
                    Six-dimension diagnostic. Opportunity inventory. Phased
                    90/180/365-day roadmap. The document your sponsor presents to the
                    board.
                  </div>
                </div>
                <div className={s['item-value']}>
                  $20,000<span className={s.label}>Value</span>
                </div>
              </li>

              <li className={s['stack-item']}>
                <div className={s['stack-item-left']}>
                  <div className={s.tag}>Week 6</div>
                  <div className={s['item-name']}>
                    Sponsor <em>working session</em>
                  </div>
                  <div className={s['item-desc']}>
                    Sixty to ninety minutes. The Map is presented. The agents are
                    demonstrated running. The path forward is named.
                  </div>
                </div>
                <div className={s['item-value']}>
                  $5,000<span className={s.label}>Value</span>
                </div>
              </li>

              <li className={s['stack-item']}>
                <div className={s['stack-item-left']}>
                  <div className={s.tag}>Week 6</div>
                  <div className={s['item-name']}>
                    Internal <em>champion coaching</em>
                  </div>
                  <div className={s['item-desc']}>
                    Your designated owner trained to run day-2 operations. Prompting
                    standards, evaluation framework, governance handoff doc.
                  </div>
                </div>
                <div className={s['item-value']}>
                  $10,000<span className={s.label}>Value</span>
                </div>
              </li>

              <li className={s['stack-item']}>
                <div className={s['stack-item-left']}>
                  <div className={s.tag}>Weeks 7–19</div>
                  <div className={s['item-name']}>
                    90-day <em>post-engagement support</em>
                  </div>
                  <div className={s['item-desc']}>
                    Questions answered. Agents tuned. Slack channel direct to our
                    team. We{"'"}re not gone the day the check clears.
                  </div>
                </div>
                <div className={s['item-value']}>
                  $8,000<span className={s.label}>Value</span>
                </div>
              </li>

              <li className={`${s['stack-item']} ${s.bonus}`}>
                <div className={s['stack-item-left']}>
                  <div className={s.tag}>Bonus · If You Continue</div>
                  <div className={s['item-name']}>
                    First Continuum month, <em>included</em>
                  </div>
                  <div className={s['item-desc']}>
                    $20,000 of your engagement fee carries forward as your first
                    month of The Agentic Continuum, the ongoing partnership that
                    compounds the Foundation into a year of operating capacity.
                  </div>
                </div>
                <div className={s['item-value']}>
                  $20,000<span className={s.label}>Value</span>
                </div>
              </li>
            </ul>

            <div className={`${s['total-row']} ${s.strike}`}>
              <div className={s['total-label']}>Total Value</div>
              <div className={s['total-value']}>$113,000</div>
            </div>

            <div className={`${s['total-row']} ${s['your-price']}`}>
              <div className={s['total-label']}>Your Investment</div>
              <div className={s['total-value']}>$48,000</div>
            </div>

            {/* GUARANTEE */}
            <div className={s['guarantee-card']}>
              <div className={s['guarantee-badge']}>Our Stakes</div>
              <h4 className={s['guarantee-title']}>
                Sponsor satisfaction, <em>or we don{"'"}t get paid</em>.
              </h4>
              <p className={s['guarantee-body']}>
                At week six, if your sponsor isn{"'"}t happy with the work, the
                process, or the result, you say the word. If your check is still in
                our hands, <strong>we tear it up in front of you.</strong> If it{"'"}s
                been cashed,{' '}
                <strong>
                  you have a refund within five business days.
                </strong>{' '}
                No clauses. No clawbacks. No {'"'}let us try one more thing.{'"'} Just
                clean. This is what we mean by The Agentic Standard.
              </p>
            </div>

            <svg className={s['oc-corner-br']} viewBox="0 0 60 60" fill="none">
              <path d="M 54 10 L 54 54 L 10 54" stroke="currentColor" strokeLinecap="square" strokeWidth="6" />
            </svg>
          </div>
        </div>
      </section>

      {/* ============ QUALIFIER ============ */}
      <section className={s.block}>
        <div className={s.container}>
          <div className={s['sect-label']}>Honest fit</div>
          <h2 className={s['sect-headline']}>
            Who this is for, and who <em>it isn{"'"}t</em>.
          </h2>
          <p className={s['sect-sub']}>
            A firm that won{"'"}t disqualify is a firm that takes work it shouldn
            {"'"}t. Before you book, here{"'"}s the honest version.
          </p>

          <div className={s['qualifier-grid']}>
            <div className={`${s['qual-col']} ${s.good}`}>
              <span className={s['qual-tag']}>Strong fit</span>
              <h3 className={s['qual-headline']}>
                Book the call if <em>this</em> is you.
              </h3>
              <ul className={s['qual-list']}>
                <li>
                  You have an executive sponsor who can approve a $48k commitment
                </li>
                <li>
                  You{"'"}ve tried AI in a chat window or copilot. Now you want it to
                  act on its own
                </li>
                <li>
                  Your pain is framed as capacity ({'"'}we can{"'"}t take on X
                  without more people{'"'})
                </li>
                <li>
                  Your decision window is 30–90 days, not 6+ months
                </li>
                <li>
                  You operate in Slack or Teams as your primary collaboration layer
                </li>
                <li>
                  Your stack is modern enough that agents can read and write to your
                  tools
                </li>
              </ul>
            </div>
            <div className={`${s['qual-col']} ${s.bad}`}>
              <span className={s['qual-tag']}>Not our fit</span>
              <h3 className={s['qual-headline']}>
                We{"'"}ll send you elsewhere if <em>this</em> is you.
              </h3>
              <ul className={s['qual-list']}>
                <li>You want a strategy deck without deployment</li>
                <li>
                  You frame the ask as {'"'}tell us what AI to use{'"'}; readiness
                  work first, elsewhere
                </li>
                <li>
                  A failed implementation with vendor blame is in flight. We don
                  {"'"}t litigate other firms{"'"} work
                </li>
                <li>Decision involves 6+ stakeholders we haven{"'"}t met</li>
                <li>Sub-$40k budget with no flexibility</li>
                <li>
                  Heavily regulated environment (HIPAA, PCI primary) needs deeper
                  compliance work
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className={`${s.block} ${s.alt}`}>
        <div className={s.container}>
          <div className={`${s['sect-label']} ${s['sect-label-center']}`}>
            Frequently Asked
          </div>
          <h2 className={`${s['sect-headline']} ${s['sect-headline-center']}`}>
            Common questions, <em>answered honestly</em>.
          </h2>
          <p className={`${s['sect-sub']} ${s['sect-sub-center']}`}>
            Six weeks, $48k, and a satisfaction guarantee raises real questions.
            Here{"'"}s what we hear most.
          </p>

          <div className={s['faq-list']}>
            <div className={s['faq-item']}>
              <h4 className={s['faq-q']}>
                What{"'"}s the difference between AI <em>and agents</em>?
              </h4>
              <p className={s['faq-a']}>
                AI is the model: Claude, GPT, the engine that generates language and
                reasoning. Most enterprises {'"'}have AI{'"'} in the form of a chat
                window or a copilot that waits for someone to type a prompt. An{' '}
                <em>agent</em> is what happens when that AI is wired up to act on its
                own, running on a schedule or a trigger, observing your systems,
                posting in Slack, drafting reports, calling tools, completing tasks
                while your team sleeps. We deploy agents. The chat-window era was the
                warm-up.
              </p>
            </div>

            <div className={s['faq-item']}>
              <h4 className={s['faq-q']}>
                What if we{"'"}re <em>not ready for agents</em>?
              </h4>
              <p className={s['faq-a']}>
                If you{"'"}re asking that question, you{"'"}re more ready than you
                think. {'"'}Ready for AI{'"'} usually means {'"'}ready to deploy
                agents on real workflows{'"'}, and that readiness is what the
                engagement builds. By week six, the readiness is no longer an open
                question; you have agents running and a Map showing exactly where the
                next dimension of readiness needs work.
              </p>
            </div>

            <div className={s['faq-item']}>
              <h4 className={s['faq-q']}>
                How do you choose <em>which agents to deploy</em>?
              </h4>
              <p className={s['faq-a']}>
                During weeks one and two, we shadow three to five real workflows
                inside your organization. We don{"'"}t pick agents from a catalog. We
                observe what{"'"}s happening, identify the highest-leverage automation
                candidates, and align with your sponsor before any code is written.
                The agents we build are specific to your workflows, not generic
                templates.
              </p>
            </div>

            <div className={s['faq-item']}>
              <h4 className={s['faq-q']}>
                What happens if our <em>IT department blocks this</em>?
              </h4>
              <p className={s['faq-a']}>
                Week one includes IT and security introductions. We work within your
                existing security posture. The agents are deployed to your
                infrastructure (or ours, your choice), respect your existing data
                boundaries, and pass through any review your team needs. If your
                environment makes deployment impossible by week four, we say so and
                refund the engagement.
              </p>
            </div>

            <div className={s['faq-item']}>
              <h4 className={s['faq-q']}>
                Why <em>six weeks</em>, specifically?
              </h4>
              <p className={s['faq-a']}>
                Long enough to observe real work, build production-ready agents, and
                produce a defensible Map. Short enough that your sponsor has a date on
                the calendar and a result to show. Six-month transformations create
                the conditions for stalling. Six-week sprints create accountability.
              </p>
            </div>

            <div className={s['faq-item']}>
              <h4 className={s['faq-q']}>
                What{"'"}s the <em>guarantee actually cover</em>?
              </h4>
              <p className={s['faq-a']}>
                Sponsor satisfaction, evaluated at the week six working session. If
                your sponsor isn{"'"}t satisfied (with the work, the process, or the
                result) you don{"'"}t pay, or you{"'"}re refunded if you already did.
                No clauses about {'"'}good faith effort{'"'} or {'"'}partial
                completion.{'"'} It{"'"}s binary: sponsor satisfied, or refund.
              </p>
            </div>

            <div className={s['faq-item']}>
              <h4 className={s['faq-q']}>
                What happens <em>after week six</em>?
              </h4>
              <p className={s['faq-a']}>
                Three paths. (1) You continue with The Agentic Continuum, our ongoing
                partnership starting at $20k/month, with the first month included if
                you choose this within thirty days. (2) You take the work in-house and
                we host the infrastructure at $2k/month with break-fix at $200/hour.
                (3) You run it yourselves entirely. Every path leaves you better than
                when we started.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section className={`${s.block} ${s.cream}`} id="book">
        <div className={`${s.container} ${s['final-cta']}`}>
          <div className={s['fc-eyebrow']}>To Begin</div>
          <h2>
            Forty-five minutes. <em>No pitch deck</em>.
          </h2>
          <p className={s['fc-sub']}>
            The only sales call we run. We ask about the work your team does, where
            AI has stuck, where it hasn{"'"}t, and where agents would take you
            further. If The Foundation fits, the SOW is in your inbox within
            forty-eight hours.
          </p>
          <Link
            href="/book"
            className={s['final-cta-btn']}
          >
            Book the Call <span className={s.arrow}>→</span>
          </Link>
          <div className={s['fc-fud']}>
            <span className={s['fud-item']}>
              <span className={s['fc-check']}>✓</span> Free
            </span>
            <span className={s['fud-item']}>
              <span className={s['fc-check']}>✓</span> 45 minutes
            </span>
            <span className={s['fud-item']}>
              <span className={s['fc-check']}>✓</span> Sponsor satisfaction
              guaranteed
            </span>
          </div>
        </div>
      </section>
    </>
  )
}

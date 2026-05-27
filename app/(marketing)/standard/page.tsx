import { SectionLabel } from 'components/section-label'
import { CtaSection } from 'components/cta-section'
import s from './page.module.scss'

export const metadata = {
  title: 'The Agentic Standard — The Beliefs',
  description: 'Seven tenets that anchor every engagement. The worldview the firm operates from.',
}

const tenets = [
  {
    num: '01',
    tag: 'On the gap',
    heading: <>The gap is human, <em>not technological</em>.</>,
    body: [
      "Every failed AI rollout we've seen failed for the same reason. The model worked. The use case was sound. The investment was real. What didn't change was the workflow, the habit, the governance, or who owned the new thing on Monday morning.",
      "Technology isn't the product. The technology is here, and getting better regardless. The bridge between the technology and the operating model that has to meet it is the product. That's the work no one else is doing, and it's the work that matters most.",
    ],
  },
  {
    num: '02',
    tag: 'On the work',
    heading: <>Ship before you <em>strategize</em>.</>,
    body: [
      'Most consulting firms produce a deck and call it the deliverable. We deploy working agents by week three. The roadmap that comes out at week six is grounded in five weeks of real operation inside your organization.',
      "Strategy without ground truth is fiction. We pay for our recommendations with the evidence of what we've already shipped. If we say a workflow is a strong automation candidate, it's because we've watched it happen, talked to the person doing it, and have a working agent that proves it can be done.",
    ],
  },
  {
    num: '03',
    tag: 'On agents',
    heading: <>Agents are <em>employees</em>, not features.</>,
    body: [
      'The mental model that produces good outcomes is "we hired someone," not "we deployed a bot." Agents need a scope of authority, a chain of accountability, audit trails, and a regular performance review.',
      'The organizations that treat agents as features get drift, surprises, and the slow erosion of trust. The organizations that treat them as employees get compounding output. The framing decides the outcome before any technology is chosen.',
    ],
  },
  {
    num: '04',
    tag: 'On governance',
    heading: <>Governance is the <em>accelerator</em>, not the brake.</>,
    body: [
      "Most organizations treat AI governance as friction, something legal slows down. The opposite is true. Bounded autonomy is what lets agents move. Without scope, every action needs approval; with scope, action becomes routine.",
      "The fastest organizations we've worked inside aren't the most permissive. They're the ones with the clearest fences, so agents know exactly what they may do, what they may not, and where the boundary lies. Build the fence first. Speed comes from clarity, not from the absence of rules.",
    ],
  },
  {
    num: '05',
    tag: 'On outcomes',
    heading: <>Operating capacity, <em>not productivity</em>.</>,
    body: [
      '"Hours saved" is a vanity metric. We hear it constantly and we ignore it. The number that matters is what your organization can now do that it couldn\'t before; what new work has become possible because old work has moved off the team\'s plate.',
      "Can the two-person marketing team operate like five? Can support handle three times the volume on the same headcount? Can leadership get the weekly board update without a Sunday-night scramble? That's the real measure of agentic AI: capacity unlocked rather than minutes returned.",
    ],
  },
  {
    num: '06',
    tag: 'On dependency',
    heading: <>You should be able to <em>fire us</em>.</>,
    body: [
      "Every engagement ends with the same question we ask ourselves: could the client run this on their own now? If the answer is no, we haven't done our job, regardless of what we shipped.",
      "We leave behind documentation that holds up to scrutiny, scorecards your team understands, deployed infrastructure they can operate, and trained internal champions who know more about your AI program than we do. The retainer you sign with us is a choice you renew quarterly. The freedom to leave is what makes the relationship real.",
    ],
  },
  {
    num: '07',
    tag: 'On the firm',
    heading: <>Practitioners, <em>not framework consultants</em>.</>,
    body: [
      "We are engineers and operators, not slide producers. There are plenty of people and vendors out there talking about theoretical frameworks. Our team has built production AI systems, deployed enterprise data platforms, and coached real workforces through change.",
      "If you want a two-hundred-page transformation strategy, there are better-resourced firms for that work. If you want operating AI inside your organization within six weeks, and the roadmap to scale it, that's what we do, and that's all we do. The narrowness of the focus is the point.",
    ],
  },
]

export default function StandardPage() {
  return (
    <div className="container frame" id="main">
      {/* Hero */}
      <section className={s.hero}>
        <SectionLabel accent>The Beliefs</SectionLabel>
        <h1 className={s['hero-title']}>The Agentic <em>Standard</em>.</h1>
        <div className={s['hero-subtitle']}>
          What this firm believes about agentic AI inside the enterprise, and the standard it holds itself to inside every engagement.
        </div>
      </section>

      {/* Opening */}
      <section className={s.section}>
        <div className={s.reading}>
          <SectionLabel>Why this exists</SectionLabel>
          <h2 className={s['reading-heading']}>Most enterprise AI <em>fails to stick</em>.</h2>
          <p className={s.lead}>
            We have sat in pilot post-mortems at firms that spent millions and ended with a Slack bot nobody uses. We have watched data teams ship models that produce insights nobody reads. We have coached executives who can describe their AI strategy in unbroken detail and have never run a prompt themselves.
          </p>
          <p>
            The pattern is uncomfortable and consistent. The technology arrives; the organization doesn't. The model works, the use case is sound, the investment is real, and six months in there's a dashboard nobody opens and a champion who's moved teams.
          </p>
          <p>
            Agentic Standard exists to do the work nobody else is doing. To close the gap between the technology and the operating model that has to meet it. To leave behind operating AI, a workforce that uses it, and a roadmap the team can run on its own.
          </p>
          <p>
            This document is what this firm believes, why it believes it, and the standard it holds itself to.
          </p>
        </div>
      </section>

      {/* Tenets Intro */}
      <section className={s['tenets-intro']}>
        <div className={s.reading}>
          <SectionLabel accent>Seven Tenets</SectionLabel>
          <h2 className={s['tenets-intro-heading']}>The beliefs.</h2>
          <p className={s['tenets-intro-lead']}>
            Each of these rejects a common failure mode in the consulting industry. These aren&apos;t aspirations, they&apos;re the operating principles the firm is judged on inside every engagement taken.
          </p>
        </div>
      </section>

      {/* Tenets */}
      {tenets.map((tenet) => (
        <article key={tenet.num} className={s.tenet}>
          <div className={s['tenet-grid']}>
            <div>
              <div className={s['tenet-num']}>{tenet.num}</div>
              <div className={s['tenet-tag']}>{tenet.tag}</div>
            </div>
            <div className={s['tenet-body']}>
              <h3 className={s['tenet-heading']}>{tenet.heading}</h3>
              {tenet.body.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>
        </article>
      ))}

      {/* Promise */}
      <section className={s.promise}>
        <div className={s.reading}>
          <SectionLabel accent>The Standard</SectionLabel>
          <h2 className={s['promise-heading']}>What you are owed.</h2>
          <p><strong>These are not aspirations.</strong> They are the standard we hold ourselves to inside every engagement we take, every conversation we run, and every recommendation we make.</p>
          <p>If we miss them, we name it and we fix it. We do not paper over a missed mark with a longer deck. We sit down, we acknowledge what we got wrong, and we set the engagement back on the line we drew at the start.</p>
          <p><strong>When we uphold them, we expect to be paid.</strong> When we do not, we do not. That is the deal. It is the Agentic Standard.</p>
        </div>
      </section>

      {/* CTA */}
      <CtaSection
        heading={<>If this is how you think about AI inside your organization, <em>we should talk</em>.</>}
        sub="A forty-five-minute call. No pitch deck. The conversation covers the work your team does, where AI has and hasn't stuck, and whether The Foundation fits. The SOW arrives within forty-eight hours if it does."
      />
    </div>
  )
}

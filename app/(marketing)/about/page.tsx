import Image from 'next/image'
import { SectionLabel } from 'components/section-label'
import { CtaSection } from 'components/cta-section'
import s from './page.module.scss'

export const metadata = {
  title: 'About — Agentic Standard',
  description: 'Three operators. One thesis. The founders behind Agentic Standard and why they got together to close the gap between AI technology and the operating model that has to meet it.',
}

const founders = [
  {
    name: 'Shawn Adrian',
    role: 'Founder',
    bio: 'Fourteen years building software products at Input Logic, an AI-native product lab shipping for brands like NYU, Netgear, and Consumer Reports. Built Harbour, the agent control platform that runs under every Agentic Standard deployment. Brings the engineering discipline that turns agentic AI from a concept into production infrastructure.',
    linkedin: 'https://www.linkedin.com/in/shawnadrian/',
  },
  {
    name: 'Chris Foster',
    role: 'Founder',
    bio: 'Exited Newcomp Analytics, now leading Blueskeye AI across North America. A career spent at the intersection of enterprise data, AI strategy, and go-to-market across energy, construction, manufacturing, and automotive. The strategic mind behind every Agentic Standard engagement, connecting agentic deployment to the business case the board needs to see.',
    linkedin: 'https://www.linkedin.com/in/chrisfoster5/',
  },
  {
    name: 'Jordan Eckersley',
    role: 'Founder',
    bio: 'Years inside enterprise analytics and automation, helping organizations move from dashboards nobody opens to workflows that actually run. Led partnerships at Capitalize Analytics and Alteryx, watching firsthand what happens when capable technology meets an unprepared organization. Brings the client-side pattern recognition that shapes every Foundation engagement.',
    linkedin: 'https://www.linkedin.com/in/jordan-eckersley-7867a459/',
  },
]

export default function AboutPage() {
  return (
    <>
      <div className="container frame" id="main">

        {/* Hero */}
        <section className={s.hero}>
          <SectionLabel accent>Who We Are</SectionLabel>
          <h1 className={s['hero-title']}>
            Three operators. One <em>thesis</em>.
          </h1>
          <p className={s.lead}>
            Agentic AI works when the organization is ready for it. Agentic Standard
            started because the founders kept ending up on the same projects from
            different sides, and watching the same thing happen.
          </p>
        </section>

        {/* Why We Got Together */}
        <section className={s.section}>
          <div className={s.reading}>
            <SectionLabel>Why We Got Together</SectionLabel>
            <h2 className={s['reading-heading']}>
              The technology arrives. The <em>organization</em> doesn&apos;t.
            </h2>
            <p className={s.lead}>
              Between us, the last decade-plus has been spent inside AI and data
              work: designing the tools, architecting the pipelines, shipping the
              agents. Sitting in the meetings where a seven-figure pilot gets
              quietly shelved. Watching capable models fail because the org around
              them wasn&apos;t built to use them. Watching big consulting firms
              charge a fortune to leave behind a slide deck.
            </p>
            <p className={s['muted-lead']}>
              The pattern is always the same. So the firm was built with one job:
              close that gap, then leave.
            </p>
          </div>
        </section>

        {/* The Founders */}
        <section className={s.section}>
          <SectionLabel accent>The Founders</SectionLabel>

          <div className={s['founders-photo']}>
            <Image
              src="/founders/founders.png"
              alt="Shawn Adrian, Jordan Eckersley, and Chris Foster"
              width={1420}
              height={800}
              className={s['founders-img']}
              priority
            />
          </div>

          <div className={s['founders-grid']}>
            {founders.map((f) => (
              <article key={f.name} className={s.founder}>
                <div className={s.name}>{f.name}</div>
                <span className={s.role}>{f.role}</span>
                <p className={s.bio}>{f.bio}</p>
                <a
                  href={f.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={s.linkedin}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className={s['linkedin-icon']}>
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </a>
              </article>
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

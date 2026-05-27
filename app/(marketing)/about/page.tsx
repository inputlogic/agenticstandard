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
    num: '01',
    name: 'Shawn Adrian',
    role: 'Founder',
    initials: 'SA',
    photo: '/founders/shawn.jpg',
    glowX: '68%',
    glowY: '28%',
  },
  {
    num: '02',
    name: 'Jordan Eckersley',
    role: 'Founder',
    initials: 'JE',
    photo: '/founders/jordan.jpg',
    glowX: '30%',
    glowY: '36%',
  },
  {
    num: '03',
    name: 'Chris Foster',
    role: 'Founder',
    initials: 'CF',
    photo: '/founders/chris.jpg',
    glowX: '58%',
    glowY: '64%',
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

          <div className={s['founders-grid']}>
            {founders.map((f) => (
              <article key={f.num} className={s.founder}>
                <div
                  className={s['founder-photo']}
                  style={{ '--glow-x': f.glowX, '--glow-y': f.glowY } as React.CSSProperties}
                >
                  <Image
                    src={f.photo}
                    alt={f.name}
                    width={256}
                    height={256}
                    className={s['founder-img']}
                  />
                  <span className={s.initials}>{f.initials}</span>
                </div>
                <span className={s.num}>{f.num}</span>
                <div className={s.name}>{f.name}</div>
                <span className={s.role}>{f.role}</span>
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

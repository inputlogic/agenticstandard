# Agentic Standard

Marketing website for **Agentic Standard Inc.** — a consulting firm that helps enterprises adopt agentic AI by closing the gap between the technology and the operating model that has to meet it.

## About the Firm

Agentic Standard deploys working AI agents inside client organizations through a fixed-fee, six-week entry engagement followed by an ongoing partnership. The firm operates from seven core tenets (The Agentic Standard) and a proprietary readiness methodology (The Agentic Readiness Map). Based in Canada, remote-capable.

## Site Structure

The site is a static HTML site with no build tools, frameworks, or external JavaScript. All styling is inlined per page via `<style>` blocks. Typography uses Google Fonts (Cormorant Garamond + Instrument Sans).

| Page | File | Description |
|------|------|-------------|
| **Home** | `index.html` | Landing page — hero, problem statement, four disciplines, engagement journey, manifesto teaser, pricing overview, and document links |
| **The Standard** | `standard.html` | The firm's manifesto — seven tenets on how they approach enterprise AI consulting |
| **The Map** | `map.html` | The Agentic Readiness Map methodology — six dimensions of organizational readiness (scored 1-5), opportunity inventory format, phased roadmap, scorecard metrics, and the six-week engagement timeline |
| **The Continuum** | `continuum.html` | The ongoing monthly partnership ($20k/mo) — seven monthly deliverables, operating cadence, out-of-scope items, and exit terms |
| **The Foundation** | `foundation.html` | The six-week entry engagement ($48k) — three deliverables (deployed agents, Readiness Map, working session), week-by-week timeline, prerequisites, satisfaction guarantee, three paths forward after week six |
| **Book a Call** | `book.html` | Discovery call booking page — what to expect, calendar embed placeholder (Calendly), fit/disqualification criteria |

## Design System

- **Dark theme** — near-black background (`#100D0A`), warm cream text (`#E8E1D4`), burnt orange accent (`#D27A3F`)
- **Display font:** Cormorant Garamond (serif, used for headings and italic accents)
- **Body font:** Instrument Sans (sans-serif)
- **Layout:** Max-width container (1180px) with subtle left/right border framing and grain texture overlay
- **Responsive:** Single breakpoint at 880px collapses grids to single-column and hides nav links (keeping only the CTA)
- **Animations:** Subtle entrance `rise` animation on hero elements
- **Print styles** on `standard.html`, `continuum.html`, and `map.html`

## Pricing (as shown on site)

| Tier | Price |
|------|-------|
| The Agentic Foundation | $48,000 USD (fixed, 6 weeks) |
| The Agentic Continuum | $20,000/month |
| Harbour (infra only) | $2,000/month |

## Contact

- Email: jordan@theagenticstandard.com
- Domain: theagenticstandard.com

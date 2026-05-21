---
target: homepage (Next.js)
total_score: 27
p0_count: 0
p1_count: 2
timestamp: 2026-05-21T21-05-05Z
slug: app-marketing-page-tsx
---
## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Hamburger toggle has aria-expanded; homepage nav has no active indicator |
| 2 | Match Between System and Real World | 3 | Strong language; double-hyphens (--) render literally where en-dashes belong |
| 3 | User Control and Freedom | 3 | Skip link works; mobile menu lacks Escape key handler |
| 4 | Consistency and Standards | 3 | Clean component architecture; minor &amp;nbsp; inconsistency in arrow links |
| 5 | Error Prevention | 2 | No forms on this page; no error states visible |
| 6 | Recognition Rather Than Recall | 3 | Good spatial anchoring; tenet numbers jump (01, 03, 06) unexplained |
| 7 | Flexibility and Efficiency of Use | 3 | Skip link, sticky nav, route prefetching; no section deep-links |
| 8 | Aesthetic and Minimalist Design | 3 | Restrained, confident; page is long with some content overlap |
| 9 | Error Recovery | 2 | No error states on static page |
| 10 | Help and Documentation | 2 | No FAQ or glossary for $48K decision |
| **Total** | | **27/40** | **Good — address weak areas, solid foundation** |

## Anti-Patterns Verdict

**LLM assessment:** Improved from previous round. Em-dash removal and vendor-neutral H1 reduced the AI-generated feel. The italic `<em>` saturation (12+ instances, one per heading) remains the most visible pattern — a human copywriter would use this 3-4 times on a page this length. The tricolon "We've watched... We've watched... We've seen..." structure reinforces the generated feel.

**Deterministic scan:** Unavailable (bundled detector not found). Manual scan found: 0 em dashes, 0 side-stripe violations, 0 gradient text, 5 double-hyphen typography issues, 1 contrast failure (--muted-dim at 2.89:1), clean CSS variable coverage, clean SCSS class cross-reference.

## Overall Impression

The fixes landed well. Mobile nav works, accessibility is real (not cosmetic), the conversion funnel flows correctly, and the Next.js architecture is clean. The score moved from 25 to 27. Remaining issues are refinement-level (typography, focus management, semantic anchors) and one strategic gap (zero social proof for a $48K engagement). The codebase is sound — no migration debt.

## What's Working

1. **Component architecture is genuinely clean.** SiteNav, CtaSection, SectionLabel, SkipLink are single-responsibility with co-located SCSS modules. The marketing layout composes them without ceremony. This scales well.

2. **Pricing section with guarantee remains the strongest trust signal.** $48K / $20K/mo / $2K/mo shown honestly, with "we don't get paid" stakes block. The section reorder means credibility-building (Read Deeper) now precedes the ask.

3. **Accessibility foundation is real.** prefers-reduced-motion in reset, :focus-visible globally, skip link, aria-expanded on toggle, aria-label on nav. Integrated into component logic, not bolted on.

## Priority Issues

### [P1] Double-hyphen typography regression
**What:** `--` renders literally in "Weeks 1--6", "Months 2--12+", "2--3 deployed agents", and the metadata title "Agentic Standard -- We make agentic AI work..."
**Why:** Looks unprofessional in browser tabs and body copy. Typographic correctness signals craft.
**Fix:** Replace `--` in ranges with en-dash character (–). Replace `--` in title with ` | ` or ` · `.
**Command:** Direct edit

### [P1] Mobile menu lacks Escape key handler and focus trap
**What:** Hamburger overlay opens but only closes via button click. No Escape key binding. No focus trap — keyboard users can tab behind the overlay.
**Why:** Partially undermines the accessibility gains from the skip link and aria work.
**Fix:** Add `onKeyDown` handler for Escape in SiteNav. Add focus trap when menu is open.
**Command:** `/impeccable harden`

### [P2] --muted-dim (#635C52) fails WCAG AA contrast
**What:** ~2.89:1 ratio against #100D0A. Used for large decorative numerals (journey step numbers). Even the 3:1 large-text threshold is not met.
**Why:** Stated WCAG AA baseline in PRODUCT.md.
**Fix:** Lighten to at least #6F6860 (~3.1:1) for decorative/large text use.
**Command:** `/impeccable audit`

### [P2] Overuse of italic em as design device
**What:** 12+ `<em>` tags across headings, every one styled orange italic. Screen readers announce emphasis on each.
**Why:** Creates visual monotony that reads as formulaic. Dilutes semantic meaning.
**Fix:** Reserve `<em>` for 3-4 genuinely stressed words. Use `<span>` with accent styling for decorative use.
**Command:** `/impeccable polish`

### [P3] No section anchors for deep linking
**What:** Only `id="main"` exists. No IDs on the 7 content sections.
**Fix:** Add `id` attributes to each section for shareable deep links.

## Persona Red Flags

**Jordan (First-Timer):** Improved — no vendor name in H1. But "agentic AI" still appears 20+ times with no definition. Jordan may leave thinking this is about insurance or real estate agents.

**Casey (Mobile User):** Significantly improved — hamburger menu works, layouts collapse correctly. Minor: mobile menu fades rather than slides (can feel like a flash on slow devices). Doc card grid has a double-border artifact on mobile.

**The Burned VP:** Stable-to-improved — section reorder means transparency play precedes the pricing ask. The "Our Stakes" block remains the strongest signal. But: zero case studies, zero client logos, zero team bios. For $48K, social proof is the single biggest gap. The design is polished enough now that the absence is more conspicuous, not less.

## Minor Observations

- `&nbsp;` before arrows in two links ("Read all seven tenets &nbsp;→") creates inconsistent spacing vs. other arrow links that use plain spaces.
- Favicon is an inline SVG diamond — may render inconsistently across browsers and is invisible on dark tab bars.
- Skip-link uses `:focus` instead of `:focus-visible` — can show on mouse click.
- `.lead` (58ch) vs `.narrow` (60ch) — 2ch difference is imperceptible. Consider consolidating.
- Print styles don't address the cream CTA section (would print light-on-light).

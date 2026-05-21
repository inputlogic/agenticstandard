---
name: Agentic Standard
description: We make agentic AI work inside your organization
colors:
  charred-walnut: "#100D0A"
  smoked-oak: "#15110D"
  parchment: "#E8E1D4"
  aged-linen: "#C4BCAC"
  warm-stone: "#7A736A"
  deep-umber: "#4E483F"
  burnt-sienna: "#D27A3F"
  copper-glow: "#E89968"
  raw-cream: "#ECE5D5"
  ink-brown: "#2A241C"
  dark-ember: "#B85A20"
typography:
  display:
    fontFamily: "Cormorant Garamond, Cormorant, Georgia, serif"
    fontSize: "clamp(44px, 6.5vw, 88px)"
    fontWeight: 500
    lineHeight: 1.02
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Cormorant Garamond, Cormorant, Georgia, serif"
    fontSize: "clamp(32px, 4.5vw, 56px)"
    fontWeight: 500
    lineHeight: 1.08
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Cormorant Garamond, Cormorant, Georgia, serif"
    fontSize: "clamp(22px, 2.6vw, 30px)"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Instrument Sans, -apple-system, Helvetica Neue, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Instrument Sans, -apple-system, Helvetica Neue, sans-serif"
    fontSize: "11px"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "0.22em"
rounded:
  none: "0"
  minimal: "1px"
spacing:
  section-y: "clamp(70px, 9vw, 130px)"
  gutter: "clamp(20px, 4vw, 60px)"
  section-gap: "clamp(28px, 4vw, 44px)"
components:
  button-primary:
    backgroundColor: "{colors.burnt-sienna}"
    textColor: "{colors.charred-walnut}"
    padding: "16px 36px"
  button-primary-hover:
    backgroundColor: "{colors.copper-glow}"
  button-cta:
    backgroundColor: "{colors.ink-brown}"
    textColor: "{colors.raw-cream}"
    padding: "20px 44px"
  button-cta-hover:
    backgroundColor: "{colors.dark-ember}"
  nav-cta:
    backgroundColor: "transparent"
    textColor: "{colors.burnt-sienna}"
    padding: "7px 20px"
    rounded: "{rounded.minimal}"
  nav-cta-hover:
    backgroundColor: "{colors.burnt-sienna}"
    textColor: "{colors.charred-walnut}"
---

# Design System: Agentic Standard

## 1. Overview

**Creative North Star: "The Operator's Study"**

A private room where serious work gets discussed over warm light. Not a showroom, not a stage, not a conference room with a projector. The kind of space where a founder and a trusted advisor sit across from each other and speak directly. Dark walls, warm materials, the quiet confidence of a room that doesn't need to impress anyone.

The system rejects everything that signals "consulting theater": gradient blobs, illustration packs, logo bars, bouncy animations, stock photography, corporate blue, neon accents, glowing orbs. It rejects the template-polished Squarespace aesthetic that makes every boutique firm interchangeable. It rejects the SaaS landing page playbook entirely.

What it pursues instead: the weight of a well-set book, the warmth of aged paper, the directness of a handwritten brief. Every element earns its presence through content, not decoration. The site reads like the firm operates: opinionated, direct, principled.

**Key Characteristics:**
- Dark, warm palette grounded in near-black and burnt orange; no cool tones
- Serif display type (Cormorant Garamond) paired with clean sans body (Instrument Sans)
- Border-grid layouts instead of cards; content separated by structure, not containers
- Subtle grain texture overlay for tactile warmth
- Italic serif used as the accent voice: CTAs, emphasis, editorial asides
- Sharp, unrounded edges throughout; the system has no soft corners
- Generous vertical rhythm; sections breathe

## 2. Colors

A restrained palette built from two material families: charred wood and fired clay. The burnt sienna accent appears on less than 10% of any dark surface. Its rarity is its authority.

### Primary
- **Burnt Sienna** (#D27A3F): The singular accent. Used on section labels marked `.accent`, numbered items, italic emphasis, CTA borders, and hover states. Never used as a background on dark surfaces. On cream surfaces, its darker sibling Dark Ember takes over.
- **Copper Glow** (#E89968): The softer accent. Appears on hover states and inline `<em>` within body text. Never used independently; always as a secondary voice to Burnt Sienna.
- **Dark Ember** (#B85A20): The accent's cream-surface form. Used where Burnt Sienna would lack contrast against light backgrounds: CTA section headings, button hovers on cream, closing-band italic emphasis.

### Neutral
- **Charred Walnut** (#100D0A): Primary background. Not pure black; warm-tinted toward brown. The foundation everything sits on.
- **Smoked Oak** (#15110D): Elevated background for differentiated surfaces (booking embed areas, pricing bands). The only tonal step above Charred Walnut.
- **Parchment** (#E8E1D4): Primary text color. Warm cream, not white. Headlines and body text at full weight.
- **Aged Linen** (#C4BCAC): Dimmed text. Body paragraphs, lead text, secondary content.
- **Warm Stone** (#7A736A): Muted text. Descriptions within grids, secondary paragraph content, non-accent labels.
- **Deep Umber** (#4E483F): Dimmest text. Timeline labels, footer legal text, out-of-scope markers.
- **Raw Cream** (#ECE5D5): The inverted surface. Used for CTA sections and closing bands. Warm, not white.
- **Ink Brown** (#2A241C): Text color on cream surfaces. CTA button background on cream.
- **Borders**: `rgba(232, 225, 212, 0.08)` (standard) and `rgba(232, 225, 212, 0.14)` (strong). Transparency-based, not solid; they breathe against the dark background.

### Named Rules
**The One Voice Rule.** Burnt Sienna is the only saturated color in the system. No secondary accent, no tertiary, no status colors, no data-viz palette. If something needs emphasis, it's Burnt Sienna or it's typographic weight. The constraint is the identity.

**The Cream Inversion Rule.** Every page ends with a cream CTA section. On cream, the palette inverts: Dark Ember replaces Burnt Sienna, Ink Brown replaces Parchment, and the button flips to dark-on-light. The inversion is always the same; never improvised.

## 3. Typography

**Display Font:** Cormorant Garamond (with Georgia fallback)
**Body Font:** Instrument Sans (with -apple-system, Helvetica Neue fallback)

**Character:** A classical serif display paired with a clean, contemporary sans. The serif carries authority and editorial weight; the sans carries clarity and professionalism. The pairing says "old enough to have a point of view, modern enough to execute." Italic Cormorant is the system's signature voice: used for CTAs, inline emphasis, subtitles, and editorial asides. It functions almost as a third typeface.

### Hierarchy
- **Display** (500, clamp(44px, 6.5vw, 88px), line-height 1.02): Page heroes only. Cormorant Garamond. Max-width constrained to 12-18ch to force dramatic line breaks. Italic `<em>` words colored Burnt Sienna.
- **Headline** (500, clamp(32px, 4.5vw, 56px), line-height 1.08): Section headings. Cormorant Garamond. Max-width constrained to 18ch. Same italic-accent pattern as Display.
- **Title** (500, clamp(22px, 2.6vw, 30px), line-height 1.2): Sub-section headings, grid item titles, tenet titles at expanded scale. Cormorant Garamond.
- **Body** (400, 16px, line-height 1.65): Running text. Instrument Sans. Capped at 68ch line length (reading sections narrower at 720px). Color is Aged Linen, not full Parchment; the slight dimming reduces fatigue on dark backgrounds.
- **Lead** (400, clamp(17px, 1.7vw, 21px), line-height 1.5): Opening paragraphs below section headings. Instrument Sans. Slightly larger than body. Max-width 58-62ch.
- **Label** (500, 11px, letter-spacing 0.22em, uppercase): Section markers, column headings, metadata. Instrument Sans. The system's structural voice: small, tracked, uppercase, always.

### Named Rules
**The Italic Accent Rule.** Italic Cormorant Garamond in Burnt Sienna is the system's primary emphasis device. It replaces bold for editorial stress. Used inside headings for the key word (`<em>`), for CTA link text, for subtitles and pull quotes. It is never decorative; it always marks the operative word or the call to action.

**The Label Discipline Rule.** Every section opens with a label: 11px, uppercase, tracked at 0.22em, Instrument Sans. Labels are either Warm Stone (default) or Burnt Sienna (`.accent` for featured sections). No section exists without its label. The label is the structural skeleton of the entire site.

## 4. Elevation

The system is flat by design. No box-shadows, no drop-shadows, no blur-based depth. This is a deliberate absence, not an oversight.

Depth is conveyed through three mechanisms:
1. **Tonal layering.** Charred Walnut (#100D0A) is the base; Smoked Oak (#15110D) is the single elevated step. Used sparingly for differentiated surfaces (booking embed area, pricing bands).
2. **Border grids.** Thin transparent borders (8% and 14% opacity) create structure. Content is separated by lines, not by containers or shadows. The border IS the architecture.
3. **Grain texture.** A fixed SVG noise overlay at 2.5% opacity covers the entire viewport. It adds tactile warmth without visual noise; the room has texture, not effects.

### Named Rules
**The Flat-By-Default Rule.** No element casts a shadow. If a future component needs perceived depth, use tonal stepping (Smoked Oak) or border separation. Shadows are reserved for truly exceptional moments; reaching for one should feel like breaking a rule, because it is.

## 5. Components

### Buttons
Sharp and declarative. No border-radius. Uppercase Instrument Sans. Every button is a commitment, not a suggestion.

- **Primary** (`.btn-primary`): Burnt Sienna background, Charred Walnut text, 16px 36px padding, 13px uppercase with 0.18em tracking. 1px solid Burnt Sienna border. Hover: Copper Glow background and border.
- **Secondary** (`.btn-secondary`): No background, no border. Italic Cormorant Garamond at 17px, Aged Linen color. Hover: color shifts to Burnt Sienna. The quietest call to action; used alongside Primary.
- **CTA** (`.cta-button`, cream sections): Ink Brown background, Raw Cream text, 20px 44px padding, 13px uppercase with 0.22em tracking. Hover: Dark Ember background. The inverted primary; appears only on cream surfaces.
- **Nav CTA** (`.primary-nav a.cta`): Italic Cormorant at 15px, Burnt Sienna text, 1px Burnt Sienna border, 7px 20px padding. Hover: Burnt Sienna fill with Charred Walnut text. The only element in the system with border-radius (1px, barely perceptible).

### Navigation
Sticky, frosted. Background at 94% opacity of Charred Walnut with 10px backdrop blur. Left: wordmark in Cormorant at 22px. Right: uppercase Instrument Sans links at 11px with 0.18em tracking, Warm Stone color. Active state: Parchment. The nav CTA stands apart in italic serif. On mobile (below 880px): all text links hidden, only the CTA remains.

### Section Labels
The system's structural spine. Instrument Sans, 11px, 500 weight, 0.22em tracking, uppercase. Default color: Warm Stone. Accent variant: Burnt Sienna. Margin-bottom: clamp(28px, 4vw, 44px). Every content section opens with one. They are not optional.

### Border Grids
The primary layout device. Content is arranged in CSS Grid columns separated by 1px transparent borders, not by gaps or cards. Grids use `gap: 0` with borders applied to individual cells. First cells lose their left border; last cells lose their right padding. On mobile, grids collapse to single-column with top borders replacing left borders.

### Evidence Blocks
A distinctive callout pattern: 2px Burnt Sienna left border, rgba(210, 122, 63, 0.04) background tint. Label in uppercase Instrument Sans, content in italic Cormorant or standard body text. Used for guarantees, stakes, and evidence citations. This is the one place a colored left border is permitted, because it is structural (marking a distinct content type), not decorative.

### Italic Links
Internal navigation links within content sections: italic Cormorant Garamond, Burnt Sienna, no underline, arrow suffix. Hover: shifts to Copper Glow. Used for "See the Foundation", "Read the manifesto" style cross-references.

### The Grain Overlay
Fixed-position SVG noise filter on `body::before`, covering the full viewport. `feTurbulence` with `baseFrequency="0.85"`, 3 octaves, stitched tiles. Opacity: 0.025. Pointer-events: none. Z-index: 1 (content sits above at z-index: 2). Present on every page.

## 6. Do's and Don'ts

### Do:
- **Do** use Burnt Sienna exclusively for emphasis. One accent, applied with restraint. Its power comes from scarcity.
- **Do** open every section with an uppercase label. The label is the skeleton; the heading is the voice.
- **Do** constrain heading line lengths (12-18ch for Display, 18ch for Headline). Let the serif break dramatically across lines.
- **Do** use italic Cormorant Garamond as the accent voice for CTAs, emphasis, and editorial asides. It replaces bold in most contexts.
- **Do** separate content with border grids, not cards. Lines, not boxes.
- **Do** end every page with the cream CTA inversion. The rhythm is dark content, cream close, dark footer. Always.
- **Do** cap body text at 68ch (or 720px in reading sections). Long lines on dark backgrounds cause eye fatigue.
- **Do** use `clamp()` for all responsive sizing. No media-query font overrides; fluid scaling handles it.
- **Do** include the grain texture overlay on every page. It is part of the identity, not optional polish.
- **Do** include print styles on long-form pages (Standard, Map, Continuum, Foundation). The reader who prints it is the reader who buys.

### Don't:
- **Don't** introduce a second accent color. No teal, no blue, no green status indicators. The system has one voice. ("The One Voice Rule.")
- **Don't** use gradient blobs, illustration packs, "trusted by" logo bars, or bouncy animations. These are the anti-references from PRODUCT.md, named and prohibited.
- **Don't** use corporate blue, stock photography, or meaningless buzzwords about "digital transformation." Big Four consulting aesthetic is explicitly rejected.
- **Don't** use neon accents, glowing orbs, particle effects, "powered by AI" badges, or futuristic sans-serifs. AI startup hype aesthetic is explicitly rejected.
- **Don't** use box-shadows for decoration. The system is flat. If you're reaching for a shadow, reconsider the structure. ("The Flat-By-Default Rule.")
- **Don't** use border-radius greater than 1px on any element. The system has no soft corners. Rounded corners signal a friendliness this brand does not claim.
- **Don't** use bold (`<strong>`) for emphasis in body text. Use italic Cormorant in Burnt Sienna. Bold is reserved for structural weight in pull quotes and guarantees.
- **Don't** create card components with background fills, rounded corners, and internal padding. If it looks like a card, it's wrong. Use the border grid.
- **Don't** use em dashes in code; use commas, colons, semicolons, periods, or parentheses. (The content currently uses `&mdash;` in HTML; this rule applies to new copy.)
- **Don't** animate layout properties. The only animation in the system is `rise` (opacity + translateY) with a custom cubic-bezier ease-out. Hero elements only. Nothing else moves.

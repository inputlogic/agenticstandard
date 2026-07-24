# SYSTEM-NOTES — frontier-site shared design system

API for page builders. Everything here is already in `assets/site.css` / `assets/site.js`. Do not restyle these primitives per-page; compose them.

## Rules (non-negotiable)

1. **One accent.** Burnt orange (`--accent`) is SIGNAL only: the wordmark period, the mark dot, one italic word per headline, CTAs, hot highlights. Never texture, never large fills.
2. **The signature move:** every major headline gets exactly ONE Cormorant italic accent word: `<h1>Agentic AI that <em>works</em> inside…</h1>` (any `em` inside h1–h4 auto-styles) or `<span class="accent-italic">word</span>` elsewhere.
3. **Kicker pattern:** every section opens `<div class="kicker">Section Label</div>` (add `.accent` for the orange variant) before the `h2`.
4. **Sharp edges.** border-radius stays at 2px (already baked in). No drop shadows. Flat panels + hairlines only.
5. **Base layout must work with everything stripped:** `.reveal`, view transitions, container queries are all progressive enhancement — never gate content behind them.
6. **`view-transition-name` uniqueness:** `.page-title` goes on exactly ONE h1 wrapper per page. Never reuse `site-mark`/`site-header` names elsewhere (the footer lockup uses `.footer-lockup`, which is unnamed — keep it that way).

## `<head>` boilerplate (every page)

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>PAGE TITLE — Agentic Standard</title>
<meta name="description" content="PAGE DESCRIPTION">
<meta name="theme-color" content="#100D0A">
<link rel="icon" href="assets/favicon.svg" type="image/svg+xml">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300..700;1,300..700&family=Instrument+Sans:ital,wght@0,400..700;1,400..700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="assets/site.css">
<script src="assets/site.js" defer></script>
</head>
<body class="grain">
<a class="skip-link" href="#main">Skip to content</a>
<div class="scroll-progress" aria-hidden="true"></div>  <!-- long pages only; omit on book.html -->
```

## Header (paste verbatim; move `aria-current="page"` to the active link)

```html
<header class="site-header">
  <div class="site-header-inner container">
    <a class="site-lockup" href="index.html" aria-label="Agentic Standard — home">
      <svg class="site-mark" viewBox="0 0 120 120" fill="none" aria-hidden="true">
        <g stroke="currentColor" stroke-linecap="square" stroke-width="7">
          <path d="M 24 56 L 24 22 L 58 22"/>
          <path d="M 96 64 L 96 98 L 62 98"/>
        </g>
        <circle cx="60" cy="60" r="5.5" fill="var(--accent, #D27A3F)"/>
      </svg>
      <span class="site-wordmark">Agentic<span class="wordmark-dot">.</span>Standard</span>
    </a>
    <nav class="site-nav" aria-label="Main">
      <a href="index.html" aria-current="page">Home</a>
      <a href="standard.html">Standard</a>
      <a href="foundation.html">Foundation</a>
      <a href="continuum.html">Continuum</a>
      <a href="about.html">About</a>
      <a href="industries.html">Industries</a>
      <a class="nav-cta" href="book.html">Book a Call</a>
    </nav>
  </div>
</header>
<main id="main">
```

## Footer (paste verbatim, after `</main>`)

```html
<footer class="site-footer">
  <div class="container">
    <div class="footer-grid">
      <div>
        <a class="footer-lockup" href="index.html">
          <svg class="site-mark" viewBox="0 0 120 120" fill="none" aria-hidden="true">
            <g stroke="currentColor" stroke-linecap="square" stroke-width="7">
              <path d="M 24 56 L 24 22 L 58 22"/>
              <path d="M 96 64 L 96 98 L 62 98"/>
            </g>
            <circle cx="60" cy="60" r="5.5" fill="var(--accent, #D27A3F)"/>
          </svg>
          <span class="site-wordmark">Agentic<span class="wordmark-dot">.</span>Standard</span>
        </a>
        <p class="footer-tagline">We make agentic AI work inside your organization, not just in a demo.</p>
      </div>
      <nav class="footer-col" aria-label="The Work">
        <div class="footer-heading">The Work</div>
        <a href="foundation.html">The Foundation</a>
        <a href="continuum.html">The Continuum</a>
      </nav>
      <nav class="footer-col" aria-label="The Firm">
        <div class="footer-heading">The Firm</div>
        <a href="standard.html">The Standard</a>
        <a href="about.html">About</a>
        <a href="industries.html">Industries</a>
        <a href="book.html">Book a Call</a>
      </nav>
      <div class="footer-col">
        <div class="footer-heading">Contact</div>
        <a href="mailto:jordan@theagenticstandard.com">jordan@theagenticstandard.com</a>
        <p class="footer-detail">Canada<br>Remote-capable</p>
      </div>
    </div>
    <div class="footer-bottom">
      <div>&copy; 2026 Agentic Standard Inc.</div>
      <div>theagenticstandard.com</div>
    </div>
  </div>
</footer>
</body>
</html>
```

## Tokens (use vars, never raw hex in page CSS)

Surfaces `--bg` `--bg-soft` `--panel` · Ink `--fg` `--fg-dim` `--fg-body` `--muted` `--muted-dim` · Accent `--accent` `--accent-soft` `--accent-hover` `--accent-active` `--accent-ghost` (alpha, for borders/rings) `--accent-tint` (7% tinted panel bg) · Lines `--hairline` `--hairline-strong` · Layout `--container` `--gutter` `--reading` · Fonts `--font-display` `--font-sans` · Sizes `--text-hero` `--text-h2` `--text-h3` `--text-h4` `--text-lead` `--text-body` `--text-small` `--text-kicker`.

All tokens flip automatically inside `.inverted` — never hand-pick cream colors.

## Class API

- Layout: `.container` (1180px rail) · `.reading` (720px measure) · `.section` (vertical rhythm) · `.section-rule` (hairline top) · `.auto-grid` (responsive card grid) · `.grid-2` / `.grid-3` · `.hr`
- Type: `.kicker` (+`.accent`) · `.lead` · `.accent-italic` · `.pull-quote` · `.muted` · `.small`
- Buttons: `.btn` (solid accent) · `.btn-ghost` (hairline) · `.text-link` (underlined inline link)
- Cards: wrap each card in `<div class="card-slot">` (this is the container-query container — required). Inside: `.card` (may be an `<a>`), children `.card-tag`, `.card-num`, `h3/h4`, `p`, `.card-cta`. Add `.card-split` to the card for auto 1→2-col internal layout at ≥30rem slot width.
- Inverted: `<section class="section inverted">…</section>` flips the full palette to cream. Nest normally; grain and accent rules still apply.
- Motion: `.reveal` on blocks that should fade up (add `.reveal-late` for a second-beat element). Scroll-driven where supported, IntersectionObserver fallback via site.js, invisible-content-safe without JS, killed under reduced motion. `.scroll-progress` div = top reading bar (auto-hides where unsupported).
- View transitions: automatic cross-page fades (`@view-transition` is already on). Add class `page-title` to the ONE h1 wrapper per page for the title morph.
- FAQ: `<details class="faq"><summary>Q</summary><div class="faq-body">A</div></details>` — animated open where supported.
- Bracket frame device (section headers / pull quotes):
  ```html
  <div class="framed">
    <svg class="frame-bracket frame-tl" viewBox="0 0 60 60" fill="none" aria-hidden="true"><path d="M 6 50 L 6 6 L 50 6" stroke="currentColor" stroke-width="6" stroke-linecap="square"/></svg>
    <p class="pull-quote">Quoted line with one <em>accent</em> word.</p>
    <svg class="frame-bracket frame-br" viewBox="0 0 60 60" fill="none" aria-hidden="true"><path d="M 54 10 L 54 54 L 10 54" stroke="currentColor" stroke-width="6" stroke-linecap="square"/></svg>
  </div>
  ```
- Calendly (book.html): `<div data-calendly="https://calendly.com/HANDLE/EVENT"></div>` — site.js lazy-injects the iframe on approach; slot shows a loading note meanwhile.

## site.js classes on `<html>`

`has-scroll-timeline`/`no-scroll-timeline` · `has-view-transitions`/`no-view-transitions` · `has-webgl2`/`no-webgl2` · `fx-live` (bg-field active). Use these to gate page-level extras (e.g. a hero canvas only under `html.has-webgl2`).

## bg-field (site-wide background effect — automatic)

site.js injects one fixed `.bg-field-canvas` behind every page and runs the ambient constellation on it, always. Sections that paint a surface (`.section-alt`, `.inverted`, anything with a background-color) are detected at load, tagged `[data-fx-band]`, and hand their fill to the canvas (`html.fx-live` rule in site.css) — the canvas repaints each band's exact color and draws the effect in that band's own ink, so the effect recolors automatically over cream/alt surfaces. Pages must NOT add their own background canvases; just paint sections normally with tokens. Reduced motion = static field; no JS = sections paint themselves as before.

## Don't forget

- `body class="grain"` (the film-grain overlay lives there).
- `aria-current="page"` on the active nav link.
- Relative asset paths (`assets/...`) — the site is served statically from `frontier-site/`.
- No em dashes in copy (brand voice rule).

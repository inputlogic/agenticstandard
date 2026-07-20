# frontier-site — FRONTIER/26 rebuild of theagenticstandard.com

A page-by-page recreation of the live site (transcribed from the deployed pages on 2026-07-17), rebuilt on 2026 web-platform techniques: CSS scroll-driven animations, OKLCH + wide-gamut color, variable fonts, cross-document View Transitions, container queries, and a WebGL2 raymarched homepage hero. Every technique degrades cleanly (`@supports` guards, `prefers-reduced-motion`, no-WebGL fallback).

**This is NOT the deployed-site source.** The live site remains the Next.js build; this folder is a static, dependency-free rebuild.

Serve it with any static server, e.g. `python -m http.server 8371 --directory frontier-site` (or the `frontier-site` entry in `.claude/launch.json`). Cross-document view transitions require http://, not file://.

Pages: index, standard, foundation, continuum, about, industries (industry explorer, not on the live site), book (+ shared `assets/site.css`, `assets/site.js`, favicon, founder photos). See `assets/SYSTEM-NOTES.md` for the design-system API.

Site-wide background: `site.js` runs one fixed constellation canvas behind every page ("bg-field"). Sections that paint a surface hand their fill to the canvas, which redraws the effect in each surface's own ink, so it recolors automatically over cream/alt bands. Pages must not add their own background canvases.

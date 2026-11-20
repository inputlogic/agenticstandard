# frontier-site — FRONTIER/26 rebuild of theagenticstandard.com

A page-by-page recreation of the live site (transcribed from the deployed pages on 2026-07-17), rebuilt on 2026 web-platform techniques: CSS scroll-driven animations, OKLCH + wide-gamut color, variable fonts, cross-document View Transitions, container queries, and a WebGL2 raymarched homepage hero. Every technique degrades cleanly (`@supports` guards, `prefers-reduced-motion`, no-WebGL fallback).

**This is the deployment source.** The repository's `vercel.json` serves this folder directly, with clean URLs and no build step.

Serve it with any static server, e.g. `python -m http.server 8371 --directory frontier-site` (or the `frontier-site` entry in `.claude/launch.json`). Cross-document view transitions require http://, not file://.

Pages: index, standard, foundation, continuum, about, industries (industry explorer, not on the live site), book (+ shared `assets/site.css`, `assets/site.js`, favicon, founder photos). See `assets/SYSTEM-NOTES.md` for the design-system API.

Site-wide background: `site.js` runs one fixed constellation canvas behind every page ("bg-field"). Sections that paint a surface hand their fill to the canvas, which redraws the effect in each surface's own ink, so it recolors automatically over cream/alt bands. Pages must not add their own background canvases.

## Agent Deployment Blueprint

`agent-deployment-blueprint.html` serves at `/agent-deployment-blueprint`. It is linked from the homepage, Foundation page, and site footers. Its CSS, JavaScript, and five attributed Microsoft reference diagrams live in `assets/agent-deployment-blueprint/`.

The workshop keeps its own focused layout and styles, matching the site's existing brand. It does not load the marketing page animations or shared canvas. Decisions and the meeting clock save in browser local storage under `alzbp-v1`. Copy answers / Load answers transfers a session; Print / Save PDF includes all build-setting blocks. No answers are sent to a server; the existing Plausible page analytics snippet is included without form values or custom events.

The original Claude export has been moved into these deployed files. Edit them directly; no generation or bundling step is needed. For local navigation, use a server that resolves clean URLs to `.html` files. Python's basic static server can preview `/agent-deployment-blueprint.html` but does not resolve extensionless site links.

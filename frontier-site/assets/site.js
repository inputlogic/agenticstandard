/* The Agentic Standard — site.js
   Dependency-free progressive-enhancement layer:
   1. Feature probes -> classes on <html>
   2. IntersectionObserver fallback for .reveal (when animation-timeline: view() is unsupported)
   3. Lazy Calendly iframe loader for [data-calendly]
*/
(function () {
  "use strict";

  var root = document.documentElement;

  /* ---- 1. feature probes ------------------------------------------------ */
  var supports = function (decl) {
    try { return !!(window.CSS && CSS.supports && CSS.supports(decl)); }
    catch (e) { return false; }
  };

  var CAN = {
    "scroll-timeline": supports("animation-timeline: view()"),
    "view-transitions": "startViewTransition" in document,
    "webgl2": (function () {
      try { return !!document.createElement("canvas").getContext("webgl2"); }
      catch (e) { return false; }
    })()
  };

  Object.keys(CAN).forEach(function (name) {
    root.classList.add((CAN[name] ? "has-" : "no-") + name);
  });

  /* ---- 2. .reveal fallback ---------------------------------------------- */
  /* site.css gates the hidden state on html.no-scroll-timeline, so content
     is only ever hidden when this script is running and can reveal it. */
  if (!CAN["scroll-timeline"]) {
    var reveals = document.querySelectorAll(".reveal");
    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15, rootMargin: "0px 0px -5% 0px" });
      reveals.forEach(function (el) { io.observe(el); });
    } else {
      reveals.forEach(function (el) { el.classList.add("in-view"); });
    }
  }

  /* ---- 3. lazy Calendly loader ------------------------------------------ */
  /* Usage: <div data-calendly="https://calendly.com/your-handle/45min"></div>
     The iframe is only created when the slot approaches the viewport. */
  var loadCalendly = function (el) {
    if (el.dataset.calendlyLoaded) return;
    el.dataset.calendlyLoaded = "1";
    var frame = document.createElement("iframe");
    frame.src = el.getAttribute("data-calendly");
    frame.className = "calendly-frame";
    frame.title = "Book a discovery call";
    frame.loading = "lazy";
    frame.setAttribute("allow", "fullscreen");
    el.appendChild(frame);
    el.classList.add("is-loaded");
  };

  var slots = document.querySelectorAll("[data-calendly]");
  if (slots.length) {
    if ("IntersectionObserver" in window) {
      var cio = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            loadCalendly(entry.target);
            cio.unobserve(entry.target);
          }
        });
      }, { rootMargin: "400px 0px" });
      slots.forEach(function (el) { cio.observe(el); });
    } else {
      slots.forEach(loadCalendly);
    }
  }

  /* ---- 4. bg-field: site-wide surface-adaptive constellation ------------- */
  /* One fixed canvas behind everything. Sections that paint a surface color
     ("bands": .section-alt, .inverted, ...) hand their fill to the canvas
     (html.fx-live + [data-fx-band] in site.css), which repaints them and
     draws the constellation in each band's own ink. The effect is therefore
     always present, and recolors itself wherever the background changes.
     Failure at any point => fx-live never set => pages look exactly as
     they do without JS. */
  (function () {
    if (!window.CanvasRenderingContext2D) return;

    var canvas = document.createElement("canvas");
    canvas.className = "bg-field-canvas";
    canvas.setAttribute("aria-hidden", "true");
    var ctx = canvas.getContext("2d");
    if (!ctx) return;

    var reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    var DPR = Math.min(window.devicePixelRatio || 1, 1.5);
    var LINK = 130;
    var W = 0, H = 0, running = false, rafId = 0, live = false;
    var nodes = [], bands = [], base, baseInk;

    var transparent = function (c) {
      return !c || c === "transparent" || c === "rgba(0, 0, 0, 0)";
    };

    /* colors are read ONCE, before fx-live makes band backgrounds
       transparent; geometry is re-measured freely afterwards */
    var scan = function () {
      bands = [];
      var els = document.querySelectorAll("main > section, body > section, .site-footer");
      for (var i = 0; i < els.length; i++) {
        var cs = getComputedStyle(els[i]);
        if (transparent(cs.backgroundColor)) continue;
        bands.push({ el: els[i], bg: cs.backgroundColor, ink: cs.color, top: 0, bottom: 0 });
        els[i].setAttribute("data-fx-band", "");
      }
    };

    var measure = function () {
      var y = window.scrollY;
      for (var i = 0; i < bands.length; i++) {
        var r = bands[i].el.getBoundingClientRect();
        bands[i].top = r.top + y;
        bands[i].bottom = r.bottom + y;
      }
    };

    var size = function () {
      W = Math.max(1, window.innerWidth);
      H = Math.max(1, window.innerHeight);
      canvas.width = Math.round(W * DPR);
      canvas.height = Math.round(H * DPR);
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    };

    var seed = function () {
      nodes = [];
      var n = Math.max(24, Math.min(64, Math.round((W * H) / 26000)));
      for (var i = 0; i < n; i++) {
        nodes.push({
          x: Math.random() * W,
          y: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.22,
          vy: (Math.random() - 0.5) * 0.22
        });
      }
    };

    var inkAt = function (docY) {
      for (var i = 0; i < bands.length; i++) {
        if (docY >= bands[i].top && docY < bands[i].bottom) return bands[i].ink;
      }
      return baseInk;
    };

    var draw = function (move) {
      var y = window.scrollY;
      ctx.globalAlpha = 1;
      ctx.fillStyle = base;
      ctx.fillRect(0, 0, W, H);
      for (var i = 0; i < bands.length; i++) {
        var top = bands[i].top - y, bottom = bands[i].bottom - y;
        if (bottom < 0 || top > H) continue;
        ctx.fillStyle = bands[i].bg;
        ctx.fillRect(0, top, W, bottom - top);
      }
      ctx.lineWidth = 1;
      for (var a, b, j, k = 0; k < nodes.length; k++) {
        a = nodes[k];
        if (move) {
          a.x += a.vx; a.y += a.vy;
          if (a.x < -8) a.x = W + 8; else if (a.x > W + 8) a.x = -8;
          if (a.y < -8) a.y = H + 8; else if (a.y > H + 8) a.y = -8;
        }
        for (j = k + 1; j < nodes.length; j++) {
          b = nodes[j];
          var dx = a.x - b.x, dy = a.y - b.y;
          var d = Math.sqrt(dx * dx + dy * dy);
          if (d < LINK) {
            ctx.globalAlpha = (1 - d / LINK) * 0.2;
            ctx.strokeStyle = inkAt((a.y + b.y) / 2 + y);
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
        ctx.globalAlpha = 0.38;
        ctx.fillStyle = inkAt(a.y + y);
        ctx.fillRect(a.x - 1, a.y - 1, 2, 2); /* square nodes, sharp-edged */
      }
      ctx.globalAlpha = 1;
    };

    var loop = function () { draw(true); rafId = requestAnimationFrame(loop); };
    var start = function () {
      if (!running && !reduce.matches && !document.hidden) {
        running = true;
        rafId = requestAnimationFrame(loop);
      }
    };
    var stop = function () {
      running = false;
      if (rafId) cancelAnimationFrame(rafId);
      rafId = 0;
    };

    /* static mode still repaints on scroll so the bands track the page */
    var staticPending = false;
    var staticRepaint = function () {
      if (!reduce.matches || staticPending) return;
      staticPending = true;
      requestAnimationFrame(function () { staticPending = false; draw(false); });
    };

    var remeasurePending = false;
    var remeasure = function () {
      if (remeasurePending) return;
      remeasurePending = true;
      requestAnimationFrame(function () {
        remeasurePending = false;
        measure();
        if (!running) draw(false);
      });
    };

    var boot = function () {
      try {
        var bodyCS = getComputedStyle(document.body);
        base = transparent(bodyCS.backgroundColor) ? "#100D0A" : bodyCS.backgroundColor;
        baseInk = bodyCS.color;
        scan();          /* cache colors BEFORE fx-live flips them off */
        size();
        seed();
        measure();
        draw(false);
        document.body.prepend(canvas);
        document.documentElement.classList.add("fx-live");
        live = true;
        start();
      } catch (e) {
        /* never activated => sections keep painting themselves */
        if (canvas.parentNode) canvas.parentNode.removeChild(canvas);
        document.documentElement.classList.remove("fx-live");
      }
    };

    boot();
    if (!live) return;

    var resizeT;
    window.addEventListener("resize", function () {
      clearTimeout(resizeT);
      resizeT = setTimeout(function () {
        var area = W * H;
        size();
        if (Math.abs(W * H - area) / area > 0.3) seed();
        measure();
        if (!running) draw(false);
      }, 140);
    });

    if ("ResizeObserver" in window) {
      new ResizeObserver(remeasure).observe(document.body);
    }
    window.addEventListener("load", remeasure);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(remeasure);

    window.addEventListener("scroll", staticRepaint, { passive: true });
    document.addEventListener("visibilitychange", function () {
      if (document.hidden) stop(); else start();
    });
    window.addEventListener("pageshow", function (ev) {
      if (ev.persisted) { remeasure(); start(); }
    });
    if (reduce.addEventListener) {
      reduce.addEventListener("change", function () {
        stop();
        if (reduce.matches) draw(false); else start();
      });
    }
  })();
})();

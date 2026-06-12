'use client'

import { useRef, useEffect, useState } from 'react'
import s from './network-canvas.module.scss'

type NetworkCanvasProps = {
  className?: string
  maxNodes?: number
  density?: number
  pulses?: number
  opacity?: number
}

const WARM = [210, 122, 63]
const COOL = [232, 225, 212]

function buildGlow(size = 16) {
  const canvas = document.createElement('canvas')
  canvas.width = canvas.height = size
  const ctx = canvas.getContext('2d')!
  const grad = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2)
  grad.addColorStop(0, `rgba(${WARM.join(',')},0.9)`)
  grad.addColorStop(0.4, `rgba(${WARM.join(',')},0.35)`)
  grad.addColorStop(1, `rgba(${WARM.join(',')},0)`)
  ctx.fillStyle = grad
  ctx.fillRect(0, 0, size, size)
  return canvas
}

function layoutNodes(w: number, h: number, density: number, max: number) {
  const count = Math.max(14, Math.min(max, Math.round(w * h / density)))
  const cols = Math.max(2, Math.ceil(Math.sqrt(count * w / h)))
  const rows = Math.max(2, Math.ceil(count / cols))
  const cellW = w / cols
  const cellH = h / rows

  const nodes: { x: number, y: number, r: number, drift: number, twinkle: number, warm: boolean, dx: number, dy: number }[] = []
  for (let i = 0; i < count; i++) {
    const col = (i % cols) + 0.5
    const row = Math.floor(i / cols) + 0.5
    nodes.push({
      x: (col + (Math.random() - 0.5) * 0.7) * cellW,
      y: (row + (Math.random() - 0.5) * 0.7) * cellH,
      r: 1 + Math.random() * 1.2,
      drift: Math.random() * Math.PI * 2,
      twinkle: Math.random() * Math.PI * 2,
      warm: Math.random() < 0.7,
      dx: 0,
      dy: 0,
    })
  }

  const maxDist = Math.min(w, h) * 0.3
  const edgeSet = new Set<string>()
  const edges: [number, number][] = []
  nodes.forEach((node, i) => {
    const nearest = nodes
      .map((n, j) => ({ j, d: j === i ? Infinity : Math.hypot(node.x - n.x, node.y - n.y) }))
      .sort((a, b) => a.d - b.d)
      .slice(0, 2)

    nearest.forEach(({ j, d }) => {
      if (d > maxDist) return
      const key = i < j ? `${i}-${j}` : `${j}-${i}`
      if (!edgeSet.has(key)) { edgeSet.add(key); edges.push([i, j]) }
    })
  })

  return { nodes, edges }
}

export function NetworkCanvas({
  className = '',
  maxNodes = 40,
  density = 28000,
  pulses: pulseCount = 4,
  opacity = 0.55,
}: NetworkCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const wrapRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const wrap = wrapRef.current
    if (!wrap) return
    const obs = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { rootMargin: '120px' })
    obs.observe(wrap)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    const wrap = wrapRef.current
    if (!canvas || !wrap) return

    const ctx = canvas.getContext('2d')!
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const glow = buildGlow()
    let graph = { nodes: [] as ReturnType<typeof layoutNodes>['nodes'], edges: [] as [number, number][] }
    let pulsesArr: { edge: number, t: number, dir: boolean, speed: number, wait: number }[] = []
    let raf: number | null = null
    let running = false
    let lastTime = 0
    let w = 0
    let h = 0

    const draw = (time: number) => {
      ctx.clearRect(0, 0, w, h)

      ctx.strokeStyle = `rgba(${COOL.join(',')},0.05)`
      ctx.lineWidth = 1
      ctx.beginPath()
      graph.edges.forEach(([a, b]) => {
        const na = graph.nodes[a]
        const nb = graph.nodes[b]
        ctx.moveTo(na.dx, na.dy)
        ctx.lineTo(nb.dx, nb.dy)
      })
      ctx.stroke()

      graph.nodes.forEach(node => {
        node.dx = node.x + Math.sin(time * 0.00035 + node.drift) * 4
        node.dy = node.y + Math.cos(time * 0.0003 + node.drift * 1.7) * 4
        const twinkle = 0.5 + Math.sin(time * 0.0009 + node.twinkle) * 0.5
        const [r, g, b] = node.warm ? WARM : COOL
        const alpha = (node.warm ? 0.35 : 0.22) + twinkle * 0.2
        ctx.fillStyle = `rgba(${r},${g},${b},${alpha})`
        ctx.beginPath()
        ctx.arc(node.dx, node.dy, node.r, 0, Math.PI * 2)
        ctx.fill()
      })

      pulsesArr.forEach(p => {
        if (p.wait > 0) return
        const [a, b] = graph.edges[p.edge] || [0, 0]
        const na = graph.nodes[a]
        const nb = graph.nodes[b]
        if (!na || !nb) return
        const from = p.dir ? na : nb
        const to = p.dir ? nb : na
        const x = from.dx + (to.dx - from.dx) * p.t
        const y = from.dy + (to.dy - from.dy) * p.t
        const tx = from.dx + (to.dx - from.dx) * Math.max(0, p.t - 0.15)
        const ty = from.dy + (to.dy - from.dy) * Math.max(0, p.t - 0.15)
        const grad = ctx.createLinearGradient(tx, ty, x, y)
        grad.addColorStop(0, `rgba(${WARM.join(',')},0)`)
        grad.addColorStop(1, `rgba(${WARM.join(',')},0.45)`)
        ctx.strokeStyle = grad
        ctx.lineWidth = 1.2
        ctx.beginPath()
        ctx.moveTo(tx, ty)
        ctx.lineTo(x, y)
        ctx.stroke()
        ctx.drawImage(glow, x - 8, y - 8)
      })
    }

    const tick = (dt: number, time: number) => {
      pulsesArr.forEach(p => {
        if (p.wait > 0) { p.wait -= dt; return }
        p.t += p.speed * (dt / 1000)
        if (p.t >= 1) {
          const node = p.dir ? graph.edges[p.edge]?.[1] : graph.edges[p.edge]?.[0]
          const candidates = graph.edges
            .map((e, idx) => ({ e, idx }))
            .filter(({ e }) => e[0] === node || e[1] === node)
          const pick = candidates.length
            ? candidates[Math.floor(Math.random() * candidates.length)]
            : { idx: Math.floor(Math.random() * graph.edges.length), e: graph.edges[0] }
          p.edge = pick.idx
          p.dir = pick.e ? pick.e[0] === node : true
          p.t = 0
          p.wait = 300 + Math.random() * 600
          p.speed = 0.25 + Math.random() * 0.2
        }
      })
      draw(time)
    }

    const loop = (time: number) => {
      raf = requestAnimationFrame(loop)
      if (document.hidden) return
      const dt = Math.min(time - lastTime, 50)
      lastTime = time
      tick(dt, time)
    }

    const start = () => {
      if (running || reduced || !graph.edges.length) return
      running = true
      lastTime = performance.now()
      raf = requestAnimationFrame(loop)
    }

    const stop = () => {
      running = false
      if (raf) cancelAnimationFrame(raf)
    }

    const resize = () => {
      const rect = wrap.getBoundingClientRect()
      w = Math.round(rect.width)
      h = Math.round(rect.height)
      if (!w || !h) return
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      graph = layoutNodes(w, h, density, maxNodes)
      const count = w < 600 ? Math.min(2, pulseCount) : pulseCount
      pulsesArr = Array.from({ length: count }, () => ({
        edge: Math.floor(Math.random() * graph.edges.length),
        t: Math.random(),
        dir: Math.random() < 0.5,
        speed: 0.25 + Math.random() * 0.2,
        wait: 0,
      }))
      draw(performance.now())
    }

    resize()
    let resizeRaf: number | null = null
    const ro = new ResizeObserver(() => {
      if (resizeRaf) cancelAnimationFrame(resizeRaf)
      resizeRaf = requestAnimationFrame(resize)
    })
    ro.observe(wrap)

    if (visible) start()

    return () => {
      stop()
      ro.disconnect()
      if (resizeRaf) cancelAnimationFrame(resizeRaf)
    }
  }, [visible, density, maxNodes, pulseCount])

  return (
    <div ref={wrapRef} className={className} aria-hidden="true" style={{ opacity }}>
      <canvas ref={canvasRef} className={s.canvas} data-fx="network" />
    </div>
  )
}

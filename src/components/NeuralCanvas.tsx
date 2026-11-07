import { useEffect, useRef } from 'react'

/**
 * A lightweight animated neural network: layered nodes with signals
 * travelling along the connections. Pure canvas, no libraries.
 * It pauses when off-screen or in a hidden tab, and draws one still
 * frame when the visitor prefers reduced motion.
 */
const LAYERS = [4, 6, 6, 3]

export function NeuralCanvas() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let w = 0, h = 0, raf = 0, visible = true
    type Node = { x: number; y: number; phase: number }
    let nodes: Node[][] = []
    type Pulse = { l: number; a: number; b: number; t: number; speed: number }
    let pulses: Pulse[] = []

    const layout = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = canvas.clientWidth
      h = canvas.clientHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const padX = w * 0.12, padY = h * 0.14
      nodes = LAYERS.map((count, li) =>
        Array.from({ length: count }, (_, ni) => ({
          x: padX + (li / (LAYERS.length - 1)) * (w - padX * 2),
          y: padY + ((ni + 0.5) / count) * (h - padY * 2),
          phase: Math.random() * Math.PI * 2,
        })),
      )
    }

    const spawn = () => {
      const l = Math.floor(Math.random() * (LAYERS.length - 1))
      pulses.push({
        l,
        a: Math.floor(Math.random() * LAYERS[l]),
        b: Math.floor(Math.random() * LAYERS[l + 1]),
        t: 0,
        speed: 0.008 + Math.random() * 0.01,
      })
    }

    const draw = (time: number) => {
      ctx.clearRect(0, 0, w, h)
      // connections
      for (let l = 0; l < nodes.length - 1; l++) {
        for (const a of nodes[l]) for (const b of nodes[l + 1]) {
          const g = ctx.createLinearGradient(a.x, a.y, b.x, b.y)
          g.addColorStop(0, 'rgba(139,92,246,0.14)')
          g.addColorStop(1, 'rgba(59,130,246,0.14)')
          ctx.strokeStyle = g
          ctx.lineWidth = 1
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke()
        }
      }
      // pulses
      pulses = pulses.filter((p) => p.t <= 1)
      for (const p of pulses) {
        const a = nodes[p.l][p.a], b = nodes[p.l + 1][p.b]
        const x = a.x + (b.x - a.x) * p.t, y = a.y + (b.y - a.y) * p.t
        const glow = ctx.createRadialGradient(x, y, 0, x, y, 14)
        glow.addColorStop(0, 'rgba(196,181,253,0.9)')
        glow.addColorStop(1, 'rgba(139,92,246,0)')
        ctx.fillStyle = glow
        ctx.beginPath(); ctx.arc(x, y, 14, 0, Math.PI * 2); ctx.fill()
        if (!reduce) p.t += p.speed
      }
      // nodes
      nodes.forEach((layer, li) => layer.forEach((n) => {
        const pulse = reduce ? 0.5 : (Math.sin(time / 900 + n.phase) + 1) / 2
        const r = 4 + pulse * 1.5
        const color = li === 0 ? '167,139,250' : li === nodes.length - 1 ? '34,211,238' : '96,165,250'
        ctx.fillStyle = `rgba(${color},${0.12 + pulse * 0.12})`
        ctx.beginPath(); ctx.arc(n.x, n.y, r + 7, 0, Math.PI * 2); ctx.fill()
        ctx.fillStyle = `rgba(${color},0.95)`
        ctx.beginPath(); ctx.arc(n.x, n.y, r, 0, Math.PI * 2); ctx.fill()
      }))
    }

    const loop = (time: number) => {
      if (visible && Math.random() < 0.08 && pulses.length < 18) spawn()
      draw(time)
      raf = requestAnimationFrame(loop)
    }

    layout()
    const ro = new ResizeObserver(layout)
    ro.observe(canvas)
    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting
      if (reduce) return
      cancelAnimationFrame(raf)
      if (visible) raf = requestAnimationFrame(loop)
    })
    io.observe(canvas)

    if (reduce) {
      for (let i = 0; i < 6; i++) { spawn(); pulses[i].t = Math.random() }
      draw(0)
    } else {
      raf = requestAnimationFrame(loop)
    }
    return () => { cancelAnimationFrame(raf); ro.disconnect(); io.disconnect() }
  }, [])

  return <canvas ref={ref} className="h-full w-full" aria-hidden="true" />
}

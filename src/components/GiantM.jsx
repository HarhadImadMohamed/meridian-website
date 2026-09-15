import { forwardRef, useImperativeHandle, useRef } from 'react'
import { gsap } from '../lib/gsap.js'

/* ============================================================
   GIANT M — MERIDIAN'S SCROLL-DRIVEN VISUAL ENVIRONMENT
   ============================================================
   A single, huge, fixed-position SVG that sits behind every
   section (z-index below content, pointer-events none). It is
   NOT the logo — it is an abstract environment built from the
   same five-vertex "M" skeleton, expressed as four overlapping
   states that crossfade into one another as the page scrolls:

     STATE A — SOLID     an enormous filled M, the brand at rest
     STATE B — LINES      the M breaks apart into open strokes
     STATE C — NETWORK    strokes scatter into connected nodes
     STATE D — GRID        nodes resolve into an aligned, ordered system
     (state A returns near the very end — "resolves back into an M")

   ScrollEnvironment.jsx drives this by calling `setProgress(p)`
   through a ref on every scroll tick (via GSAP ScrollTrigger),
   so this component never re-renders on scroll — only DOM
   attributes are touched, which keeps it smooth.
   ============================================================ */

const VERTICES = [
  { x: 90, y: 780 },
  { x: 90, y: 220 },
  { x: 500, y: 620 },
  { x: 910, y: 220 },
  { x: 910, y: 780 },
]

const STROKES = [[0, 1], [1, 2], [2, 3], [3, 4]]

// Grid target positions for STATE D (optimize) — an ordered 4x3 lattice
const GRID = []
for (let row = 0; row < 3; row++) {
  for (let col = 0; col < 4; col++) {
    GRID.push({ x: 160 + col * 230, y: 260 + row * 220 })
  }
}

// Scattered network positions for STATE C — same node count as GRID, disordered
const NETWORK = GRID.map((g, i) => ({
  x: g.x + Math.sin(i * 12.9) * 160,
  y: g.y + Math.cos(i * 7.3) * 140,
}))

const KEYFRAMES = [0, 0.22, 0.48, 0.72, 1] // A, B, C, D, A

function smoothstep(t) {
  const c = Math.min(1, Math.max(0, t))
  return c * c * (3 - 2 * c)
}

function stateWeights(p) {
  const w = [0, 0, 0, 0, 0]
  if (p <= KEYFRAMES[0]) { w[0] = 1; return w }
  if (p >= KEYFRAMES[4]) { w[4] = 1; return w }
  for (let i = 0; i < KEYFRAMES.length - 1; i++) {
    const a = KEYFRAMES[i]
    const b = KEYFRAMES[i + 1]
    if (p >= a && p <= b) {
      const t = smoothstep((p - a) / (b - a))
      w[i] = 1 - t
      w[i + 1] = t
    }
  }
  return w
}

const GiantM = forwardRef(function GiantM({ tone = 'default' }, ref) {
  const wrapRef = useRef(null)
  const stateARef = useRef(null)
  const stateBRef = useRef(null)
  const nodeRefsC = useRef([])
  const nodeRefsD = useRef([])
  const lineRefsD = useRef([])

  useImperativeHandle(ref, () => ({
    setProgress(p) {
      const w = stateWeights(p)

      if (wrapRef.current) {
        const translateY = gsap.utils.interpolate(-4, 10, p) // vh drift
        const rotate = gsap.utils.interpolate(-3, 3, p)
        const scale = 1.15 - 0.32 * Math.sin(Math.min(1, p) * Math.PI)
        gsap.set(wrapRef.current, {
          yPercent: translateY,
          rotate,
          scale,
        })
      }

      if (stateARef.current) gsap.set(stateARef.current, { opacity: w[0] + w[4] * 0.94 })
      if (stateBRef.current) gsap.set(stateBRef.current, { opacity: w[1] })

      const cOpacity = w[2]
      const dOpacity = w[3]
      nodeRefsC.current.forEach((el) => el && gsap.set(el, { opacity: cOpacity }))
      nodeRefsD.current.forEach((el) => el && gsap.set(el, { opacity: dOpacity }))
      lineRefsD.current.forEach((el) => el && gsap.set(el, { opacity: dOpacity * 0.6 }))
    },
  }))

  const strokeColor = tone === 'light' ? 'rgba(255,255,255,0.9)' : 'url(#giantMStroke)'

  return (
    <div className="giant-m" aria-hidden="true">
      <div className="giant-m__wrap" ref={wrapRef}>
        <svg viewBox="0 0 1000 1000" className="giant-m__svg" preserveAspectRatio="xMidYMid meet">
          <defs>
            <linearGradient id="giantMStroke" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#CAA9FE" />
              <stop offset="100%" stopColor="#9F2FFF" />
            </linearGradient>
            <linearGradient id="giantMFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3E2677" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#9F2FFF" stopOpacity="0.28" />
            </linearGradient>
            <radialGradient id="giantMNode">
              <stop offset="0%" stopColor="#F5F1FF" />
              <stop offset="100%" stopColor="#9F2FFF" />
            </radialGradient>
          </defs>

          {/* STATE A — solid filled M */}
          <g ref={stateARef}>
            <path
              d={`M ${VERTICES[0].x} ${VERTICES[0].y}
                  L ${VERTICES[1].x} ${VERTICES[1].y}
                  L ${VERTICES[2].x} ${VERTICES[2].y}
                  L ${VERTICES[3].x} ${VERTICES[3].y}
                  L ${VERTICES[4].x} ${VERTICES[4].y}`}
              fill="none"
              stroke={strokeColor}
              strokeWidth="46"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
            <path
              d={`M ${VERTICES[0].x} ${VERTICES[0].y}
                  L ${VERTICES[1].x} ${VERTICES[1].y}
                  L ${VERTICES[2].x} ${VERTICES[2].y}
                  L ${VERTICES[3].x} ${VERTICES[3].y}
                  L ${VERTICES[4].x} ${VERTICES[4].y}
                  L ${VERTICES[4].x} ${VERTICES[4].y + 60}
                  L ${VERTICES[0].x} ${VERTICES[0].y + 60} Z`}
              fill="url(#giantMFill)"
              opacity="0.5"
            />
          </g>

          {/* STATE B — open strokes, pulled apart with gaps */}
          <g ref={stateBRef}>
            {STROKES.map(([a, b], i) => {
              const va = VERTICES[a]
              const vb = VERTICES[b]
              return (
                <line
                  key={`b-${i}`}
                  x1={va.x}
                  y1={va.y}
                  x2={vb.x}
                  y2={vb.y}
                  stroke={strokeColor}
                  strokeWidth="14"
                  strokeLinecap="round"
                  strokeDasharray="120 26"
                />
              )
            })}
          </g>

          {/* STATE C — scattered connected network (diagnose / simulate) */}
          <g>
            {NETWORK.map((n, i) => {
              const next = NETWORK[(i + 1) % NETWORK.length]
              return (
                <line
                  key={`net-line-${i}`}
                  ref={(el) => (nodeRefsC.current[i + 100] = el)}
                  x1={n.x} y1={n.y} x2={next.x} y2={next.y}
                  stroke={strokeColor} strokeWidth="1.4" opacity="0"
                />
              )
            })}
            {NETWORK.map((n, i) => (
              <circle
                key={`net-node-${i}`}
                ref={(el) => (nodeRefsC.current[i] = el)}
                cx={n.x} cy={n.y} r={i % 4 === 0 ? 14 : 9}
                fill="url(#giantMNode)"
                opacity="0"
              />
            ))}
          </g>

          {/* STATE D — optimized, ordered grid (measure / optimize) */}
          <g>
            {GRID.map((n, i) => {
              const right = GRID[i + 1]
              const below = GRID[i + 4]
              return (
                <g key={`grid-${i}`}>
                  {right && i % 4 !== 3 && (
                    <line
                      ref={(el) => (lineRefsD.current[i * 2] = el)}
                      x1={n.x} y1={n.y} x2={right.x} y2={right.y}
                      stroke={strokeColor} strokeWidth="1.2" opacity="0"
                    />
                  )}
                  {below && (
                    <line
                      ref={(el) => (lineRefsD.current[i * 2 + 1] = el)}
                      x1={n.x} y1={n.y} x2={below.x} y2={below.y}
                      stroke={strokeColor} strokeWidth="1.2" opacity="0"
                    />
                  )}
                </g>
              )
            })}
            {GRID.map((n, i) => (
              <circle
                key={`grid-node-${i}`}
                ref={(el) => (nodeRefsD.current[i] = el)}
                cx={n.x} cy={n.y} r="10"
                fill="url(#giantMNode)"
                opacity="0"
              />
            ))}
          </g>
        </svg>
      </div>
    </div>
  )
})

export default GiantM

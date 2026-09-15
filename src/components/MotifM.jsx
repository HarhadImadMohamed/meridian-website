import { useId } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

/* ============================================================
   MERIDIAN — SIGNATURE MOTIF
   An abstract "M" built from five connected vertices and four
   flowing strokes. It is not the logo — it is a recurring visual
   system representing data, structure and transformation. Used
   across the hero, section transitions and the footer.

   modes:
   - "draw"    : draws itself once on mount (hero)
   - "reveal"  : draws itself when scrolled into view
   - "network" : sits as connected nodes with a slow ambient pulse,
                 used as a quiet background / divider motif
   ============================================================ */

const VERTICES = [
  { x: 20, y: 220 },   // left foot
  { x: 20, y: 60 },    // left peak
  { x: 150, y: 190 },  // center valley
  { x: 280, y: 60 },   // right peak
  { x: 280, y: 220 },  // right foot
]

const STROKES = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
]

const SATELLITES = [
  { x: 70, y: 130 }, { x: 220, y: 130 }, { x: 150, y: 60 }, { x: 150, y: 260 },
]

export default function MotifM({ mode = 'draw', size = 320, className = '', tone = 'default' }) {
  const reduce = useReducedMotion()
  const uid = useId()
  const strokeGradId = `mStrokeGrad-${uid}`
  const nodeGradId = `mNodeGrad-${uid}`
  const viewport = { once: true, amount: 0.5 }
  const isNetwork = mode === 'network'
  const strokeColor = tone === 'light' ? 'rgba(255,255,255,0.9)' : 'var(--brand-violet)'
  const glowColor = tone === 'light' ? '#ffffff' : 'var(--brand-lavender)'

  const strokeVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => ({
      pathLength: 1,
      opacity: 1,
      transition: reduce
        ? { duration: 0.01 }
        : { duration: 1.1, delay: i * 0.16, ease: [0.65, 0, 0.35, 1] },
    }),
  }

  const nodeVariants = {
    hidden: { opacity: 0, scale: 0.2 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: reduce ? { duration: 0.01 } : { duration: 0.5, delay: 0.5 + i * 0.1, ease: 'easeOut' },
    }),
  }

  const animateProp = mode === 'reveal' ? { whileInView: 'visible', viewport } : { animate: 'visible' }

  return (
    <motion.svg
      viewBox="0 0 300 280"
      width={size}
      height={size}
      className={`motif-m ${className}`}
      initial="hidden"
      {...animateProp}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={strokeGradId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#CAA9FE" />
          <stop offset="100%" stopColor="#9F2FFF" />
        </linearGradient>
        <radialGradient id={nodeGradId}>
          <stop offset="0%" stopColor="#F5F1FF" />
          <stop offset="100%" stopColor="#9F2FFF" />
        </radialGradient>
      </defs>

      {/* faint ambient satellite connections — the "network" the M resolves from/into */}
      {isNetwork && SATELLITES.map((s, i) => (
        <motion.line
          key={`sat-${i}`}
          x1={s.x} y1={s.y}
          x2={VERTICES[Math.min(i, VERTICES.length - 1)].x}
          y2={VERTICES[Math.min(i, VERTICES.length - 1)].y}
          stroke={`url(#${strokeGradId})`}
          strokeWidth="0.75"
          strokeOpacity="0.35"
          animate={reduce ? {} : { strokeOpacity: [0.15, 0.4, 0.15] }}
          transition={reduce ? {} : { duration: 4 + i, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
      {isNetwork && SATELLITES.map((s, i) => (
        <motion.circle
          key={`sat-node-${i}`}
          cx={s.x} cy={s.y} r="2.4"
          fill={glowColor}
          animate={reduce ? {} : { opacity: [0.3, 0.9, 0.3] }}
          transition={reduce ? {} : { duration: 3 + i * 0.6, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      {STROKES.map(([a, b], i) => (
        <motion.line
          key={i}
          x1={VERTICES[a].x} y1={VERTICES[a].y}
          x2={VERTICES[b].x} y2={VERTICES[b].y}
          stroke={strokeColor}
          strokeWidth="6"
          strokeLinecap="round"
          variants={strokeVariants}
          custom={i}
        />
      ))}

      {VERTICES.map((v, i) => (
        <motion.circle
          key={i}
          cx={v.x} cy={v.y} r={i === 2 ? 7 : 5.5}
          fill={`url(#${nodeGradId})`}
          variants={nodeVariants}
          custom={i}
        />
      ))}
    </motion.svg>
  )
}

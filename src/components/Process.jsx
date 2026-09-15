import { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'

const STAGES = [
  {
    n: '01',
    title: 'Diagnose',
    text: 'We learn how the business actually runs — not what the org chart says. Data and workflows are examined to find exactly where inefficiency, cost and risk are concentrated.',
  },
  {
    n: '02',
    title: 'Simulate',
    text: 'Using our proprietary simulation environment, we model likely outcomes and failure scenarios before a single recommendation is made.',
  },
  {
    n: '03',
    title: 'Build',
    text: 'We engineer and integrate the AI, automation and infrastructure the simulation calls for — purpose-built, not off-the-shelf.',
  },
  {
    n: '04',
    title: 'Measure',
    text: 'We track performance, efficiency gains and return on investment against real numbers, not projections.',
  },
  {
    n: '05',
    title: 'Optimize',
    text: 'As the business changes, we keep tuning the system. The relationship doesn\u2019t end at launch — it continues.',
  },
]

// scattered starting positions -> resolve into an ordered grid as the section scrolls
const NODES = [
  { sx: 8, sy: 72, tx: 10, ty: 12 },
  { sx: 62, sy: 18, tx: 34, ty: 12 },
  { sx: 30, sy: 88, tx: 58, ty: 12 },
  { sx: 85, sy: 55, tx: 82, ty: 12 },
  { sx: 15, sy: 30, tx: 10, ty: 44 },
  { sx: 70, sy: 82, tx: 34, ty: 44 },
  { sx: 45, sy: 10, tx: 58, ty: 44 },
  { sx: 92, sy: 20, tx: 82, ty: 44 },
  { sx: 20, sy: 60, tx: 10, ty: 76 },
  { sx: 55, sy: 48, tx: 34, ty: 76 },
  { sx: 78, sy: 90, tx: 58, ty: 76 },
  { sx: 5, sy: 95, tx: 82, ty: 76 },
]

function ProcessNode({ node, progress, reduce }) {
  const x = useTransform(progress, [0, 1], [`${node.sx}%`, `${node.tx}%`])
  const y = useTransform(progress, [0, 1], [`${node.sy}%`, `${node.ty}%`])
  const opacity = useTransform(progress, [0, 0.15, 1], [0.35, 0.7, 1])

  return (
    <motion.span
      className="process__node"
      style={{
        left: reduce ? `${node.tx}%` : x,
        top: reduce ? `${node.ty}%` : y,
        opacity: reduce ? 1 : opacity,
      }}
    />
  )
}

export default function Process() {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.85', 'end 0.4'] })

  return (
    <section id="approach" className="section process" ref={ref}>
      <div className="container">
        <div className="section-head">
          <div className="section-kicker">How it works</div>
          <h2>From uncertainty to evidence.</h2>
          <p>
            Every engagement moves through the same disciplined system —
            nothing gets built until it has been tested against evidence.
          </p>
        </div>

        <div className="process__layout">
          <ol className="process__list">
            {STAGES.map((s) => (
              <li className="process__item" key={s.n}>
                <div className="process__num">{s.n}</div>
                <div className="process__body">
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="process__visual" aria-hidden="true">
            <div className="process__visual-inner">
              {NODES.map((node, i) => (
                <ProcessNode key={i} node={node} progress={scrollYProgress} reduce={reduce} />
              ))}
              <span className="process__label process__label--from">Unstructured</span>
              <span className="process__label process__label--to">Evidence-based</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import { useState } from 'react'
import { motion } from 'framer-motion'

const REASONS = [
  {
    tag: 'Diagnosis',
    title: 'We diagnose before we sell',
    text: 'We never start with a tool looking for a use case. We start with the business, find the real problem, and only then decide whether — and how — AI is the right answer.',
  },
  {
    tag: 'Evidence',
    title: 'We prove it before we build it',
    text: 'Our simulation environment tests a recommendation against modeled outcomes first, so decisions are based on evidence rather than a pitch.',
  },
  {
    tag: 'Relationship',
    title: 'We stay after launch',
    text: 'Most vendors leave once the software ships. Meridian measures results and keeps optimizing as the business changes.',
  },
]

export default function WhyUs() {
  const [active, setActive] = useState(0)

  return (
    <section className="section whyus">
      <div className="container">
        <div className="section-head">
          <div className="section-kicker">Why this works</div>
          <h2>Why this works when generic tools don&rsquo;t.</h2>
        </div>

        <div className="whyus__grid">
          <ul className="whyus__tabs">
            {REASONS.map((r, i) => (
              <li key={r.title}>
                <button
                  className={`whyus__tab ${active === i ? 'is-active' : ''}`}
                  onClick={() => setActive(i)}
                  aria-expanded={active === i}
                >
                  <span className="whyus__tag">{r.tag}</span>
                  <span className="whyus__title">{r.title}</span>
                </button>
              </li>
            ))}
          </ul>

          <motion.div
            className="whyus__panel"
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="whyus__tag whyus__tag--panel">{REASONS[active].tag}</span>
            <h3>{REASONS[active].title}</h3>
            <p>{REASONS[active].text}</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

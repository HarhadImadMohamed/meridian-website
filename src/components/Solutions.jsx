import { motion } from 'framer-motion'

const SOLUTIONS = [
  {
    n: '01',
    title: 'AI Strategy',
    text: 'We map how work actually moves through the business — not how the org chart says it should — and find where AI actually creates value.',
  },
  {
    n: '02',
    title: 'Business Automation',
    text: 'Accounts receivable, billing, collections, reconciliation and reporting — cleaned up and removed from the day-to-day.',
  },
  {
    n: '03',
    title: 'AI Systems',
    text: 'Purpose-built AI agents and internal tools designed around the business, not a generic template.',
  },
  {
    n: '04',
    title: 'Simulation',
    text: 'Every recommendation is tested against modeled outcomes before it becomes a commitment of time or budget.',
  },
  {
    n: '05',
    title: 'AI Operations',
    text: 'We deploy, monitor and keep tuning what we build — this is a relationship, not a one-time delivery.',
  },
  {
    n: '06',
    title: 'Intelligence',
    text: 'Operational data turned into forward-looking answers — where risk sits, and what is most likely to happen next.',
  },
]

export default function Solutions() {
  return (
    <section id="solutions" className="section solutions">
      <div className="container">
        <div className="section-head">
          <div className="section-kicker">What we do</div>
          <h2>Consulting, backed by engineering.</h2>
          <p>
            We don&rsquo;t hand over a slide deck and leave. Meridian identifies
            the specific operational problems costing a business time, money
            or growth — then designs, builds and runs the systems that solve
            them.
          </p>
        </div>

        <div className="solutions__list">
          {SOLUTIONS.map((s, i) => (
            <motion.div
              className="solutions__row"
              key={s.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="solutions__num">{s.n}</span>
              <h3 className="solutions__title">{s.title}</h3>
              <p className="solutions__text">{s.text}</p>
              <span className="solutions__arrow" aria-hidden="true">→</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import MotifM from './MotifM.jsx'

const PROJECTS = [
  {
    tag: 'Meridian simulation — concept',
    title: 'Modeling a financial-ops overhaul before touching a single invoice.',
    text: 'A conceptual walk-through of how the simulation environment evaluates a receivables and reconciliation rebuild across three scenarios before implementation begins.',
  },
  {
    tag: 'Prototype — AI operations',
    title: 'An agent layer that watches a workflow instead of replacing it.',
    text: 'A demonstration of how purpose-built agents sit alongside existing tools, flagging exceptions and automating the repetitive parts of a process.',
  },
  {
    tag: 'Prototype — decision intelligence',
    title: 'Turning scattered operational data into one live view of risk.',
    text: 'A conceptual dashboard illustrating how disparate data sources are unified into a single, continuously updated picture of exposure.',
  },
]

export default function Work() {
  return (
    <section id="work" className="section work">
      <div className="container">
        <div className="section-head">
          <div className="section-kicker">Selected work</div>
          <h2>Built for real business.</h2>
          <p>
            These are conceptual demonstrations of Meridian&rsquo;s approach —
            not client results. We label them as such, deliberately.
          </p>
        </div>

        <div className="work__list">
          {PROJECTS.map((p, i) => (
            <motion.article
              className="work__item"
              key={p.title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="work__visual">
                <MotifM mode="network" size={120} />
              </div>
              <div className="work__body">
                <span className="work__tag">{p.tag}</span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import MotifM from './MotifM.jsx'

const PROJECTS = [
  {
    tag: 'Illustrative example — e-commerce',
    title: 'Automation of billing, reconciliation and collections workflows.',
    text: 'How the simulation environment would evaluate a receivables rebuild across multiple scenarios before implementation begins.',
  },
  {
    tag: 'Illustrative example — AI operations',
    title: 'An agent layer that watches a workflow instead of replacing it.',
    text: 'Purpose-built agents sitting alongside existing tools, flagging exceptions and automating repetitive steps.',
  },
  {
    tag: 'Illustrative example — decision intelligence',
    title: 'Turning scattered operational data into one live view of risk.',
    text: 'Disparate data sources unified into a single, continuously updated picture of exposure.',
  },
]

export default function Work() {
  return (
    <section id="work" className="section--tight work">
      <div className="container">
        <h2 className="work__h2">Case studies &amp; examples</h2>
        <p className="work__intro">
          Real client case studies will be published here as they become
          available. Until then, these are clearly labeled illustrative
          examples of how Meridian&rsquo;s approach applies in practice —
          not client results.
        </p>

        <div className="work__list">
          {PROJECTS.map((p, i) => (
            <motion.article
              className="work__item"
              key={p.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <div className="work__visual">
                <MotifM mode="network" size={80} />
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

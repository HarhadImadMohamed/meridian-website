import { motion } from 'framer-motion'

const POINTS = [
  { title: 'Business-first approach', text: 'We start with the operational problem, not the technology.' },
  { title: 'Simulation-first validation', text: 'Solutions can be evaluated before implementation.' },
  { title: 'Consulting + engineering', text: "We don\u2019t just recommend solutions; we can build them." },
  { title: 'Measurable outcomes', text: 'Engagements are tied to specific business outcomes.' },
  { title: 'Long-term optimization', text: 'We can continue measuring and improving systems after delivery.' },
]

export default function WhyMeridian() {
  return (
    <section className="section--tight whymeridian">
      <div className="container">
        <h2 className="whymeridian__h2">Why Meridian</h2>
        <ul className="whymeridian__list">
          {POINTS.map((p, i) => (
            <motion.li
              key={p.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.35, delay: i * 0.04 }}
            >
              <span className="whymeridian__check" aria-hidden="true">{'\u2713'}</span>
              <div>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}

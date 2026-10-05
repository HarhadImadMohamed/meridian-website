import { motion } from 'framer-motion'

const STEPS = [
  {
    n: '01',
    title: 'Appointment Booking',
    text: 'We start with a conversation to understand your business, goals, challenges and priorities.',
    icon: '\u25CB', // circle
  },
  {
    n: '02',
    title: 'Solution Design',
    text: 'We analyze the problem and design a practical AI, automation or technology solution around your requirements.',
    icon: '\u25C7', // diamond
  },
  {
    n: '03',
    title: 'Prototype Presentation',
    text: 'We present a prototype or solution concept so you can see how it works before moving forward.',
    icon: '\u25B3', // triangle
  },
  {
    n: '04',
    title: 'Specs Validation & Contract',
    text: 'We validate the technical specifications, scope, deliverables and timeline before finalizing the agreement.',
    icon: '\u2713', // check
  },
  {
    n: '05',
    title: 'Final Delivery',
    text: 'We build, implement, test and deliver the agreed solution.',
    icon: '\u25A0', // square
  },
]

export default function HowWeWork() {
  return (
    <section id="how-it-works" className="section--tight howwework">
      <div className="container">
        <h2 className="howwework__h2">How we work</h2>
        <p className="howwework__sub">
          Five clear stages, from the first conversation to final delivery.
        </p>

        <ol className="howwework__list">
          {STEPS.map((s, i) => (
            <motion.li
              className="howwework__step"
              key={s.n}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <span className="howwework__icon" aria-hidden="true">{s.icon}</span>
              <span className="howwework__num">{s.n}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              {i < STEPS.length - 1 && <span className="howwework__arrow" aria-hidden="true">→</span>}
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}

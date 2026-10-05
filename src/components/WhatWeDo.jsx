import { motion } from 'framer-motion'

const ITEMS = [
  { title: 'AI Consulting', text: 'Identify where AI can create measurable business value.' },
  { title: 'Business Automation', text: 'Automate repetitive workflows and operational processes.' },
  { title: 'AI Systems', text: 'Design and build custom AI-powered systems and integrations.' },
  { title: 'AI Strategy', text: 'Develop practical AI strategies based on business needs.' },
  { title: 'Simulation & Analysis', text: 'Evaluate scenarios and solutions before implementation.' },
  { title: 'Optimization', text: 'Measure results and continuously improve business operations.' },
]

export default function WhatWeDo() {
  return (
    <section id="services" className="section--tight whatwedo">
      <div className="container">
        <h2 className="whatwedo__h2">What we do</h2>

        <div className="whatwedo__grid">
          {ITEMS.map((item, i) => (
            <motion.div
              className="whatwedo__card"
              key={item.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
            >
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

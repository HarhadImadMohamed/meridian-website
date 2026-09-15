import { motion } from 'framer-motion'

export default function ProblemStatement() {
  return (
    <section className="section problem">
      <div className="container problem__inner">
        <motion.h2
          className="display problem__headline"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          Your business
          <br />
          already has
          <br />
          <span className="problem__accent">the answers.</span>
        </motion.h2>

        <motion.div
          className="problem__side"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="problem__sub">You just need to find them.</p>
          <p className="problem__text">
            Meridian studies how your business actually operates, identifies
            where time, money and growth are being lost, and uses AI and
            automation to build measurable improvements — validated before
            they&rsquo;re built, not after.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

import { motion, useReducedMotion } from 'framer-motion'
import MotifM from './MotifM.jsx'

export default function Hero() {
  const reduce = useReducedMotion()

  const rise = (delay = 0) => ({
    initial: { opacity: 0, y: reduce ? 0 : 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
  })

  return (
    <section id="top" className="hero">
      <div className="container hero__inner">
        <div className="hero__text">
          <motion.p className="eyebrow" {...rise(0)}>Meridian</motion.p>

          <motion.h1 className="hero__headline" {...rise(0.08)}>
            AI consulting &amp; business automation
          </motion.h1>

          <motion.p className="hero__lede" {...rise(0.16)}>
            Meridian helps businesses identify operational inefficiencies,
            design AI solutions, automate workflows, and build technology
            that improves measurable business outcomes.
          </motion.p>

          <motion.div className="hero__actions" {...rise(0.24)}>
            <a href="#cta" className="btn btn-primary">Book an appointment</a>
            <a href="#services" className="btn btn-outline">Explore our services</a>
          </motion.div>
        </div>

        <motion.div
          className="hero__motif"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          aria-hidden="true"
        >
          <MotifM mode="draw" size={220} />
        </motion.div>
      </div>
    </section>
  )
}

import { motion, useReducedMotion } from 'framer-motion'

export default function Hero() {
  const reduce = useReducedMotion()

  const rise = (delay = 0) => ({
    initial: { opacity: 0, y: reduce ? 0 : 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
  })

  return (
    <section id="top" className="hero">
      <div className="hero__glow" aria-hidden="true" />

      <div className="container hero__inner">
        <motion.p className="eyebrow hero__kicker" {...rise(0)}>
          AI business consulting, built to be proven first
        </motion.p>

        <motion.h1 className="display hero__headline" {...rise(0.16)}>
          Don&rsquo;t guess.
          <br />
          Prove it.
        </motion.h1>

        <motion.p className="hero__lede" {...rise(0.32)}>
          Meridian studies how your company actually runs, finds the
          inefficiencies and risks hiding in its operations, tests the fix in
          simulation before a line of code is written, then builds the AI
          that closes the gap — permanently.
        </motion.p>

        <motion.div className="hero__actions" {...rise(0.46)}>
          <a href="#contact" className="btn btn-primary">Book a discovery call</a>
          <a href="#approach" className="btn btn-outline">See how it works</a>
        </motion.div>

        <motion.p className="hero__quote" {...rise(0.6)}>
          &ldquo;Most businesses don&rsquo;t need more advice. They need to
          see, clearly, where their time and money are actually going — and
          what happens next if nothing changes.&rdquo;
        </motion.p>
      </div>

      <motion.div
        className="hero__scrollcue"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        aria-hidden="true"
      >
        <span />
        Scroll
      </motion.div>
    </section>
  )
}

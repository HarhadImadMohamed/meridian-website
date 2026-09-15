import { motion } from 'framer-motion'

const SCENARIOS = [
  { label: 'Scenario A', delta: '+ 6%', tone: 'flat' },
  { label: 'Scenario B', delta: '+ 22%', tone: 'best' },
  { label: 'Scenario C', delta: '\u2212 4%', tone: 'risk' },
]

const FEATURES = [
  { title: 'Scenario & failure modeling', text: 'Stress-tests decisions against realistic best-, worst- and likely-case paths.' },
  { title: 'Risk analysis', text: 'Quantifies where a decision or process is most exposed, before money is committed.' },
  { title: 'Decision evaluation', text: 'Compares alternative strategies side by side on projected cost, time and outcome.' },
  { title: 'Live dashboards', text: 'Gives clients a live, visual view of performance and projected results — not a static report.' },
]

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] },
  }),
}

export default function SimulationPlatform() {
  return (
    <section id="simulation" className="section simulation">
      <div className="simulation__glow" aria-hidden="true" />
      <div className="container">
        <div className="section-head">
          <div className="section-kicker">The simulation environment</div>
          <h2>Decisions, tested before they&rsquo;re made.</h2>
          <p>
            At the center of Meridian is a proprietary simulation environment
            — the engine behind stage two of every engagement. It can model
            business and startup failure scenarios, evaluate the risk behind
            a decision, and generate recommendations grounded in outcomes
            we&rsquo;ve actually tested — not intuition. This is a
            conceptual visualization of how it works, not a customer report.
          </p>
          <blockquote className="simulation__quote">
            &ldquo;Every recommendation we make has already been run through
            a model of what could go right, and what could go wrong.&rdquo;
          </blockquote>
        </div>

        <motion.div
          className="simulation__panel"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={reveal}
        >
          <div className="simulation__panel-head">
            <span className="simulation__dot" />
            <span className="simulation__dot" />
            <span className="simulation__dot" />
            <span className="simulation__title">meridian // simulation-environment</span>
            <span className="simulation__flag">Conceptual visualization</span>
          </div>

          <div className="simulation__flow">
            <FlowNode label="Current business" sub="Operational model" i={0} />
            <FlowArrow />
            <div className="simulation__branches">
              {SCENARIOS.map((s, i) => (
                <motion.div
                  className={`simulation__scenario simulation__scenario--${s.tone}`}
                  key={s.label}
                  variants={reveal}
                  custom={i + 1}
                >
                  <span className="simulation__scenario-label">{s.label}</span>
                  <span className="simulation__scenario-delta">{s.delta}</span>
                  <span className="simulation__scenario-tag">
                    {s.tone === 'best' ? 'Projected outcome' : s.tone === 'risk' ? 'Exposure flagged' : 'Marginal'}
                  </span>
                </motion.div>
              ))}
            </div>
            <FlowArrow />
            <FlowNode label="Best solution" sub="Implementation" i={4} highlight />
          </div>
        </motion.div>

        <div className="simulation__features">
          {FEATURES.map((f, i) => (
            <motion.div
              className="simulation__feature"
              key={f.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={reveal}
              custom={i}
            >
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FlowNode({ label, sub, highlight, i }) {
  return (
    <motion.div
      className={`flow-node ${highlight ? 'flow-node--highlight' : ''}`}
      variants={reveal}
      custom={i}
    >
      <span className="flow-node__label">{label}</span>
      <span className="flow-node__sub">{sub}</span>
    </motion.div>
  )
}

function FlowArrow() {
  return <div className="flow-arrow" aria-hidden="true" />
}

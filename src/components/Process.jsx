const STAGES = [
  { n: '01', title: 'Discover', text: 'We learn your business from the inside — your goals, your constraints, and the processes you run today.' },
  { n: '02', title: 'Analyze', text: 'We examine your data and workflows to find where inefficiency, cost, and risk are actually concentrated.' },
  { n: '03', title: 'Simulate', text: 'Using our proprietary simulation platform, we model likely outcomes and failure scenarios before we recommend anything.' },
  { n: '04', title: 'Recommend', text: 'We deliver a customized strategy that shows precisely where AI and automation will create measurable value.' },
  { n: '05', title: 'Implement', text: 'We build and integrate the AI tools, automations, and systems the strategy calls for.' },
  { n: '06', title: 'Measure', text: 'We track performance, efficiency gains, cost savings, and return on investment against real numbers.' },
  { n: '07', title: 'Optimize', text: 'As your business grows and changes, we continue tuning the system — the relationship doesn\u2019t end at launch.' },
]

export default function Process() {
  return (
    <section id="process" className="section process">
      <div className="container">
        <div className="section-head">
          <div className="section-kicker">How it works</div>
          <h2>A seven-stage engagement.</h2>
          <p>
            Every client moves through the same disciplined process — from understanding
            the business to continuously improving it. Nothing gets built until it&rsquo;s
            been tested.
          </p>
        </div>

        <ol className="process__list">
          {STAGES.map((s) => (
            <li className="process__item" key={s.n}>
              <div className="process__num">{s.n}</div>
              <div className="process__body">
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <style>{`
        .process__list {
          position: relative;
          margin-left: 4px;
          border-left: 1px solid var(--border-strong);
        }
        .process__item {
          display: grid;
          grid-template-columns: 90px 1fr;
          gap: 28px;
          padding: 28px 0 28px 32px;
          position: relative;
        }
        .process__item::before {
          content: '';
          position: absolute;
          left: -5px;
          top: 34px;
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: var(--brand-violet);
          box-shadow: 0 0 0 5px var(--bg-void), 0 0 12px 2px rgba(159,47,255,0.6);
        }
        .process__num {
          font-family: var(--font-mono);
          font-size: 1.6rem;
          color: var(--text-muted);
        }
        .process__body h3 {
          font-size: 1.2rem;
          margin-bottom: 8px;
        }
        .process__body p {
          max-width: 560px;
          font-size: 0.98rem;
        }

        @media (max-width: 680px) {
          .process__item { grid-template-columns: 1fr; gap: 10px; padding-left: 24px; }
          .process__num { font-size: 1.2rem; }
        }
      `}</style>
    </section>
  )
}

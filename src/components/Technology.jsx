const FEATURES = [
  { title: 'Scenario & failure modeling', text: 'Stress-tests decisions against realistic best-, worst-, and likely-case paths.' },
  { title: 'Risk analysis', text: 'Quantifies where a decision or process is most exposed, before money is committed.' },
  { title: 'Decision evaluation', text: 'Compares alternative strategies side by side on projected cost, time, and outcome.' },
  { title: 'Interactive dashboards', text: 'Gives clients a live, visual view of performance and projected results — not a static report.' },
]

export default function Technology() {
  return (
    <section id="technology" className="section technology">
      <div className="technology__glow" aria-hidden="true" />
      <div className="container technology__inner">
        <div className="technology__intro">
          <div className="section-kicker">Our technology</div>
          <h2>Decisions tested before they&rsquo;re made.</h2>
          <p className="technology__text">
            At the center of Meridian is a proprietary simulation platform — the engine
            behind stage three of every engagement. It can model startup and business
            failure scenarios, evaluate the risk behind a decision, and generate
            recommendations grounded in outcomes we&rsquo;ve actually tested — not intuition.
          </p>
          <blockquote>
            &ldquo;Every recommendation we make has already been run through a model of
            what could go right, and what could go wrong.&rdquo;
          </blockquote>
        </div>

        <div className="technology__features">
          {FEATURES.map((f) => (
            <div className="technology__feature" key={f.title}>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .technology {
          background: var(--bg-panel);
          border-top: 1px solid var(--border-soft);
          border-bottom: 1px solid var(--border-soft);
          overflow: hidden;
        }
        .technology__glow {
          position: absolute;
          left: -180px;
          bottom: -180px;
          width: 460px;
          height: 460px;
          background: radial-gradient(circle, rgba(159,47,255,0.18), transparent 70%);
          pointer-events: none;
        }
        .technology__inner {
          position: relative;
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 64px;
        }
        .technology__intro h2 {
          font-size: var(--fs-h2);
          margin-bottom: 20px;
        }
        .technology__text {
          font-size: 1.02rem;
          margin-bottom: 30px;
        }
        .technology__intro blockquote {
          margin: 0;
          padding-left: 20px;
          border-left: 2px solid var(--brand-lavender);
          font-style: italic;
          color: var(--text-primary);
          font-size: 1.05rem;
        }
        .technology__features {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
          align-content: start;
        }
        .technology__feature {
          border: 1px solid var(--border-soft);
          border-radius: var(--radius-md);
          padding: 26px;
          background: var(--bg-void);
        }
        .technology__feature h3 {
          font-size: 1.02rem;
          margin-bottom: 10px;
          color: var(--brand-lavender);
        }
        .technology__feature p {
          font-size: 0.92rem;
        }

        @media (max-width: 900px) {
          .technology__inner { grid-template-columns: 1fr; }
          .technology__features { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 560px) {
          .technology__features { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}

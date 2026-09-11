import { useState } from 'react'

const REASONS = [
  {
    tag: 'Diagnosis',
    title: 'We diagnose before we sell',
    text: 'We never start with a tool looking for a use case. We start with your business, find the real problem, and only then decide whether — and how — AI is the right answer.',
  },
  {
    tag: 'Evidence',
    title: 'We prove it before we build it',
    text: 'Our simulation platform tests a recommendation against modeled outcomes first, so decisions are based on evidence rather than a pitch.',
  },
  {
    tag: 'Relationship',
    title: 'We stay after launch',
    text: 'Most vendors leave once the software ships. Meridian measures results and keeps optimizing as your business changes.',
  },
]

export default function WhyUs() {
  const [active, setActive] = useState(0)

  return (
    <section className="section whyus">
      <div className="container">
        <div className="section-head">
          <div className="section-kicker">Why this works</div>
          <h2>Why this works when generic tools don&rsquo;t.</h2>
        </div>

        <div className="whyus__grid">
          <ul className="whyus__tabs">
            {REASONS.map((r, i) => (
              <li key={r.title}>
                <button
                  className={`whyus__tab ${active === i ? 'is-active' : ''}`}
                  onClick={() => setActive(i)}
                  aria-expanded={active === i}
                >
                  <span className="whyus__tag">{r.tag}</span>
                  <span className="whyus__title">{r.title}</span>
                </button>
              </li>
            ))}
          </ul>

          <div className="whyus__panel">
            <span className="whyus__tag whyus__tag--panel">{REASONS[active].tag}</span>
            <h3>{REASONS[active].title}</h3>
            <p>{REASONS[active].text}</p>
          </div>
        </div>
      </div>

      <style>{`
        .whyus__grid {
          display: grid;
          grid-template-columns: 0.85fr 1.15fr;
          gap: 40px;
          align-items: start;
        }
        .whyus__tabs {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .whyus__tab {
          width: 100%;
          text-align: left;
          display: flex;
          flex-direction: column;
          gap: 6px;
          background: transparent;
          border: none;
          border-left: 2px solid var(--border-soft);
          padding: 16px 20px;
          transition: border-color 0.2s ease, background 0.2s ease;
        }
        .whyus__tab:hover {
          background: var(--bg-panel);
        }
        .whyus__tab.is-active {
          border-left-color: var(--brand-violet);
          background: var(--bg-panel);
        }
        .whyus__tag {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--text-muted);
        }
        .whyus__tab.is-active .whyus__tag {
          color: var(--brand-lavender);
        }
        .whyus__title {
          font-family: var(--font-display);
          font-size: 1.05rem;
          color: var(--text-primary);
        }
        .whyus__panel {
          background: var(--bg-panel);
          border: 1px solid var(--border-soft);
          border-radius: var(--radius-md);
          padding: 44px;
          min-height: 260px;
        }
        .whyus__tag--panel {
          display: block;
          margin-bottom: 16px;
        }
        .whyus__panel h3 {
          font-size: 1.5rem;
          margin-bottom: 18px;
          max-width: 460px;
        }
        .whyus__panel p {
          font-size: 1.02rem;
          max-width: 480px;
        }

        @media (max-width: 860px) {
          .whyus__grid { grid-template-columns: 1fr; }
          .whyus__panel { padding: 28px; }
        }
      `}</style>
    </section>
  )
}

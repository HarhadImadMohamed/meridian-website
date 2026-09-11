const SERVICES = [
  {
    title: 'Business process analysis',
    text: 'We map how work actually moves through your business — not how the org chart says it should.',
  },
  {
    title: 'AI implementation & automation',
    text: 'We build and integrate the AI tools and automated workflows your operation actually needs — nothing off-the-shelf, nothing generic.',
  },
  {
    title: 'Financial operations',
    text: 'Accounts receivable, billing and collections automation, payment reconciliation, and financial reporting — cleaned up and running on autopilot.',
  },
  {
    title: 'Data, risk & predictive analysis',
    text: 'We turn your operational data into forward-looking answers — where the risk sits, and what\u2019s most likely to happen next.',
  },
  {
    title: 'AI agents & custom systems',
    text: 'Purpose-built AI agents and internal tools designed around your business, not a generic template.',
  },
  {
    title: 'Ongoing optimization',
    text: 'Systems are tuned as your business changes — this is a relationship, not a one-time delivery.',
  },
]

export default function Services() {
  return (
    <section id="services" className="section services">
      <div className="container">
        <div className="section-head">
          <div className="section-kicker">What we do</div>
          <h2>Consulting, backed by engineering.</h2>
          <p>
            We don’t hand over a slide deck and leave. Meridian identifies the specific
            operational problems costing a business time, money, or growth — then designs,
            builds, and runs the AI and automation that solves them.
          </p>
        </div>

        <div className="services__grid">
          {SERVICES.map((s, i) => (
            <div className="services__card" key={s.title}>
              <span className="services__index">{String(i + 1).padStart(2, '0')}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .services__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: var(--border-soft);
          border: 1px solid var(--border-soft);
        }
        .services__card {
          background: var(--bg-void);
          padding: 34px 28px;
          transition: background 0.2s ease;
        }
        .services__card:hover {
          background: var(--bg-panel);
        }
        .services__index {
          display: block;
          font-family: var(--font-mono);
          font-size: 0.85rem;
          color: var(--brand-violet);
          margin-bottom: 22px;
        }
        .services__card h3 {
          font-size: 1.12rem;
          margin-bottom: 12px;
        }
        .services__card p {
          font-size: 0.94rem;
        }

        @media (max-width: 900px) {
          .services__grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}

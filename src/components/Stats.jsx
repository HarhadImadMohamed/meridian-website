const STATS = [
  { value: '7', unit: 'stages', label: 'engagement process, from discovery to ongoing optimization' },
  { value: '01', unit: 'principle', label: 'simulation-first — every recommendation is tested before it\u2019s built' },
  { value: '10', unit: 'industries', label: 'served today, built to scale into any operating business' },
]

export default function Stats() {
  return (
    <section className="stats">
      <div className="container stats__grid">
        {STATS.map((s) => (
          <div className="stats__item" key={s.label}>
            <div className="stats__value">
              {s.value}
              <span>{s.unit}</span>
            </div>
            <p>{s.label}</p>
          </div>
        ))}
      </div>

      <style>{`
        .stats {
          border-top: 1px solid var(--border-soft);
          border-bottom: 1px solid var(--border-soft);
          background: var(--bg-panel);
        }
        .stats__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
          padding: 48px 0;
        }
        .stats__item:not(:last-child) {
          border-right: 1px solid var(--border-soft);
          padding-right: 40px;
        }
        .stats__value {
          font-family: var(--font-mono);
          font-size: 2.4rem;
          color: var(--brand-lavender);
          display: flex;
          align-items: baseline;
          gap: 8px;
          margin-bottom: 10px;
        }
        .stats__value span {
          font-size: 0.85rem;
          color: var(--text-muted);
          font-family: var(--font-body);
        }
        .stats__item p {
          max-width: 260px;
          font-size: 0.94rem;
        }

        @media (max-width: 780px) {
          .stats__grid { grid-template-columns: 1fr; gap: 28px; }
          .stats__item:not(:last-child) {
            border-right: none;
            padding-right: 0;
            border-bottom: 1px solid var(--border-soft);
            padding-bottom: 24px;
          }
        }
      `}</style>
    </section>
  )
}

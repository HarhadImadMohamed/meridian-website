const INDUSTRIES = [
  'Startups', 'Small businesses', 'E-commerce', 'SaaS companies', 'Finance',
  'Real estate', 'Healthcare', 'Logistics', 'Professional services', 'Enterprise (next)',
]

export default function Industries() {
  return (
    <section id="industries" className="section industries">
      <div className="container industries__inner">
        <div className="section-head">
          <div className="section-kicker">Industries we serve</div>
          <h2>Built for operating businesses, broadly.</h2>
          <p>
            Meridian&rsquo;s methodology doesn&rsquo;t depend on one type of business — it
            depends on a business having processes, data, and decisions worth improving.
          </p>
        </div>

        <div className="industries__chips">
          {INDUSTRIES.map((ind, i) => (
            <span className="industries__chip" key={ind}>
              <span className="industries__chip-num">{String(i + 1).padStart(2, '0')}</span>
              {ind}
            </span>
          ))}
        </div>

        <p className="industries__note">
          We&rsquo;re often mistaken for an e-commerce-only shop because of where
          operational inefficiency is easiest to see. We&rsquo;re not — our process is
          industry-agnostic by design, built to scale from a five-person startup to a
          large enterprise.
        </p>
      </div>

      <style>{`
        .industries__chips {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 36px;
        }
        .industries__chip {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 10px 18px;
          border: 1px solid var(--border-soft);
          border-radius: 999px;
          font-size: 0.92rem;
          color: var(--text-secondary);
          transition: border-color 0.2s ease, color 0.2s ease;
        }
        .industries__chip:hover {
          border-color: var(--brand-lavender);
          color: var(--text-primary);
        }
        .industries__chip-num {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--brand-violet);
        }
        .industries__note {
          max-width: 640px;
          font-size: 0.98rem;
          color: var(--text-muted);
        }
      `}</style>
    </section>
  )
}

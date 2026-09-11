const ROWS = [
  ['Business diagnosis & strategy', 'full', 'full', 'partial', 'none'],
  ['Risk & simulation modeling', 'full', 'none', 'none', 'none'],
  ['Custom AI & automation build', 'full', 'none', 'full', 'partial'],
  ['Financial-ops automation', 'full', 'none', 'partial', 'partial'],
  ['Ongoing optimization', 'full', 'partial', 'none', 'partial'],
  ['Long-term partnership model', 'full', 'partial', 'none', 'none'],
]

const COLS = ['Meridian', 'Traditional consulting', 'Generic AI agencies', 'Automation-only vendors']

const DOT = { full: '●', partial: '◐', none: '○' }

export default function Competitive() {
  return (
    <section className="section competitive">
      <div className="container">
        <div className="section-head">
          <div className="section-kicker">Competitive landscape</div>
          <h2>Nobody else covers the full stack.</h2>
          <p>
            Traditional consulting firms sell strategy without building. AI agencies and
            automation vendors build without diagnosing. Meridian is built to do all of it.
          </p>
        </div>

        <div className="competitive__table-wrap">
          <table className="competitive__table">
            <thead>
              <tr>
                <th></th>
                {COLS.map((c, i) => (
                  <th key={c} className={i === 0 ? 'is-us' : ''}>{c}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row) => (
                <tr key={row[0]}>
                  <td className="competitive__label">{row[0]}</td>
                  {row.slice(1).map((v, i) => (
                    <td key={i} className={i === 0 ? 'is-us' : ''}>
                      <span className={`dot dot--${v}`}>{DOT[v]}</span>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <style>{`
        .competitive__table-wrap {
          overflow-x: auto;
          border: 1px solid var(--border-soft);
          border-radius: var(--radius-md);
        }
        .competitive__table {
          width: 100%;
          border-collapse: collapse;
          min-width: 720px;
        }
        .competitive__table th, .competitive__table td {
          padding: 16px 20px;
          text-align: center;
          border-bottom: 1px solid var(--border-soft);
          font-size: 0.9rem;
        }
        .competitive__table th {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          color: var(--text-muted);
          text-align: center;
          font-weight: 400;
        }
        .competitive__table th.is-us, .competitive__table td.is-us {
          background: rgba(159, 47, 255, 0.08);
        }
        .competitive__table th.is-us {
          color: var(--brand-lavender);
        }
        .competitive__label {
          text-align: left !important;
          color: var(--text-secondary);
        }
        .competitive__table tr:last-child td {
          border-bottom: none;
        }
        .dot { font-size: 1.1rem; }
        .dot--full { color: var(--brand-violet); }
        .dot--partial { color: var(--brand-lavender); opacity: 0.75; }
        .dot--none { color: var(--text-muted); opacity: 0.5; }
      `}</style>
    </section>
  )
}

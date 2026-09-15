const STATS = [
  { value: '5', unit: 'stages', label: 'diagnose, simulate, build, measure, optimize' },
  { value: '01', unit: 'principle', label: 'simulation-first — every recommendation is tested before it\u2019s built' },
  { value: '10', unit: 'industries', label: 'served today, built to scale into any operating business' },
]

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

export default function Company() {
  return (
    <section id="company" className="section--tight company">
      <div className="container">
        <div className="section-kicker">Company</div>

        <div className="company__stats">
          {STATS.map((s) => (
            <div className="company__stat" key={s.label}>
              <div className="company__stat-value">
                {s.value}
                <span>{s.unit}</span>
              </div>
              <p>{s.label}</p>
            </div>
          ))}
        </div>

        <div className="company__compare">
          <p className="company__compare-lede">
            Traditional consulting firms sell strategy without building. AI
            agencies and automation vendors build without diagnosing.
            Meridian is built to do all of it.
          </p>
          <div className="company__table-wrap">
            <table className="company__table">
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
                    <td className="company__label">{row[0]}</td>
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
      </div>
    </section>
  )
}

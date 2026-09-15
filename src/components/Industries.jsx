const INDUSTRIES = [
  'Startups', 'Small businesses', 'E-commerce', 'SaaS companies', 'Finance',
  'Real estate', 'Healthcare', 'Logistics', 'Professional services', 'Enterprise (next)',
]

export default function Industries() {
  return (
    <section id="industries" className="section--tight industries">
      <div className="container industries__inner">
        <div className="industries__head">
          <div className="section-kicker">Where we apply it</div>
          <p className="industries__note">
            We&rsquo;re often mistaken for an e-commerce-only shop because of
            where operational inefficiency is easiest to see. We&rsquo;re
            not — our process is industry-agnostic by design, built to scale
            from a five-person startup to a large enterprise.
          </p>
        </div>

        <ul className="industries__list">
          {INDUSTRIES.map((ind, i) => (
            <li className="industries__item" key={ind}>
              <span className="industries__index">{String(i + 1).padStart(2, '0')}</span>
              {ind}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

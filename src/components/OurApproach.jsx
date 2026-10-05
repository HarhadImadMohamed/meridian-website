import { Link } from 'react-router-dom'

const STEPS = ['Diagnose', 'Simulate', 'Build', 'Measure', 'Optimize']

export default function OurApproach() {
  return (
    <section id="approach" className="section--tight approach">
      <div className="container approach__inner">
        <div>
          <h2 className="approach__h2">Simulation-first AI solutions</h2>
          <p className="approach__text">
            Test and evaluate potential solutions before committing to full
            implementation. Our methodology — diagnose, simulate, build,
            measure, optimize — replaces guesswork with evidence.
          </p>
          <Link to="/company#approach-detail" className="btn btn-outline approach__cta">
            Learn about our approach
          </Link>
        </div>

        <ol className="approach__steps">
          {STEPS.map((s, i) => (
            <li key={s}>
              <span>{String(i + 1).padStart(2, '0')}</span>
              {s}
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

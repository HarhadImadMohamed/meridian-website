import { Link } from 'react-router-dom'
import Process from '../components/Process.jsx'
import SimulationPlatform from '../components/SimulationPlatform.jsx'
import Company from '../components/Company.jsx'
import FAQ from '../components/FAQ.jsx'
import CTAFooter from '../components/CTAFooter.jsx'

export default function CompanyPage() {
  return (
    <>
      <section className="section--tight company-intro">
        <div className="container">
          <p className="eyebrow">Company</p>
          <h1 className="company-intro__h1">Meridian, in detail.</h1>
          <p className="company-intro__lede">
            The full picture: how our methodology works end to end, how the
            simulation environment operates, how we compare to traditional
            consulting and automation vendors, and answers to common
            questions. The homepage keeps things brief on purpose — this
            page doesn&rsquo;t.
          </p>
          <Link to="/" className="btn btn-outline company-intro__back">← Back to homepage</Link>
        </div>
      </section>

      <div id="approach-detail">
        <Process />
      </div>
      <SimulationPlatform />
      <Company />
      <FAQ />
      <CTAFooter />
    </>
  )
}

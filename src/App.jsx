import ScrollEnvironment from './components/ScrollEnvironment.jsx'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import ProblemStatement from './components/ProblemStatement.jsx'
import Process from './components/Process.jsx'
import SimulationPlatform from './components/SimulationPlatform.jsx'
import Solutions from './components/Solutions.jsx'
import Work from './components/Work.jsx'
import WhyUs from './components/WhyUs.jsx'
import Industries from './components/Industries.jsx'
import Company from './components/Company.jsx'
import FAQ from './components/FAQ.jsx'
import CTAFooter from './components/CTAFooter.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <ScrollEnvironment />
      <Header />
      <main>
        <Hero />
        <ProblemStatement />
        <Process />
        <SimulationPlatform />
        <Solutions />
        <Work />
        <WhyUs />
        <Industries />
        <Company />
        <FAQ />
        <CTAFooter />
      </main>
      <Footer />
    </>
  )
}

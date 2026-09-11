import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Stats from './components/Stats.jsx'
import Services from './components/Services.jsx'
import Process from './components/Process.jsx'
import Technology from './components/Technology.jsx'
import WhyUs from './components/WhyUs.jsx'
import Industries from './components/Industries.jsx'
import Competitive from './components/Competitive.jsx'
import FAQ from './components/FAQ.jsx'
import CTAFooter from './components/CTAFooter.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Process />
        <Technology />
        <WhyUs />
        <Industries />
        <Competitive />
        <FAQ />
        <CTAFooter />
      </main>
      <Footer />
    </>
  )
}

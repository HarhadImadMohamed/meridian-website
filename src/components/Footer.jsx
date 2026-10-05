import { Link } from 'react-router-dom'
import MotifM from './MotifM.jsx'

const COLUMNS = [
  {
    title: 'Site',
    links: [
      { label: 'Services', href: '/#services' },
      { label: 'How it works', href: '/#how-it-works' },
      { label: 'Industries', href: '/#industries' },
      { label: 'Case studies', href: '/#work' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Our approach', href: '/company#approach-detail' },
      { label: 'Simulation platform', href: '/company#simulation' },
      { label: 'Why Meridian', href: '/company#company' },
      { label: 'FAQ', href: '/company#faq' },
    ],
  },
  {
    title: 'Contact',
    links: [
      { label: 'Book an appointment', href: '/#cta' },
      { label: 'Email Meridian', href: 'mailto:hello@meridian.ai' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <Link to="/" className="footer__logo">
            <span className="footer__mark" aria-hidden="true" />
            Meridian
          </Link>
          <p>AI consulting and business automation, proven before it&rsquo;s built.</p>
          <div className="footer__motif">
            <MotifM mode="network" size={90} />
          </div>
        </div>

        <div className="footer__cols">
          {COLUMNS.map((col) => (
            <div key={col.title} className="footer__col">
              <h4>{col.title}</h4>
              <ul>
                {col.links.map((l) => (
                  <li key={l.label}>
                    {l.href.startsWith('mailto:')
                      ? <a href={l.href}>{l.label}</a>
                      : <Link to={l.href}>{l.label}</Link>}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="container footer__bottom">
        <p>&copy; {new Date().getFullYear()} Meridian. All rights reserved.</p>
        <div className="footer__legal">
          <Link to="/">Privacy policy</Link>
          <Link to="/">Terms of use</Link>
        </div>
      </div>
    </footer>
  )
}

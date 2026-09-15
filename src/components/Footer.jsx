import MotifM from './MotifM.jsx'

const COLUMNS = [
  {
    title: 'Company',
    links: [
      { label: 'Solutions', href: '#solutions' },
      { label: 'Approach', href: '#approach' },
      { label: 'Work', href: '#work' },
      { label: 'Company', href: '#company' },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { label: 'AI strategy', href: '#solutions' },
      { label: 'Business automation', href: '#solutions' },
      { label: 'AI systems', href: '#solutions' },
      { label: 'Simulation', href: '#simulation' },
      { label: 'AI operations', href: '#solutions' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'FAQ', href: '#faq' },
      { label: 'Work', href: '#work' },
      { label: 'Contact', href: '#contact' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <a href="#top" className="footer__logo">
            <span className="footer__mark" aria-hidden="true" />
            Meridian
          </a>
          <p>AI consulting and engineering, proven before it&rsquo;s built.</p>
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
                  <li key={l.label}><a href={l.href}>{l.label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="container footer__bottom">
        <p>&copy; {new Date().getFullYear()} Meridian. All rights reserved.</p>
        <div className="footer__legal">
          <a href="#top">Privacy policy</a>
          <a href="#top">Terms of use</a>
        </div>
      </div>
    </footer>
  )
}

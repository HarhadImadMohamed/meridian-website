import { useEffect, useState } from 'react'

const NAV_LINKS = [
  { label: 'What we do', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Technology', href: '#technology' },
  { label: 'Industries', href: '#industries' },
  { label: 'FAQ', href: '#faq' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="container header__inner">
        <a href="#top" className="header__logo">
          <span className="header__mark" aria-hidden="true" />
          Meridian
        </a>

        <nav className="header__nav">
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#contact" className="btn btn-primary header__cta">
          Book a discovery call
        </a>

        <button
          className="header__toggle"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {open && (
        <div className="header__mobile">
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#contact" className="btn btn-primary" onClick={() => setOpen(false)}>
                Book a discovery call
              </a>
            </li>
          </ul>
        </div>
      )}

      <style>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          border-bottom: 1px solid transparent;
          transition: background 0.25s ease, border-color 0.25s ease;
        }
        .header--scrolled {
          background: rgba(13, 8, 23, 0.86);
          backdrop-filter: blur(10px);
          border-bottom-color: var(--border-soft);
        }
        .header__inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 20px;
          padding-bottom: 20px;
        }
        .header__logo {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-display);
          font-weight: 600;
          font-size: 1.2rem;
          color: var(--text-primary);
        }
        .header__mark {
          width: 10px;
          height: 10px;
          border-radius: 2px;
          background: var(--gradient-accent);
          box-shadow: 0 0 14px 2px rgba(159, 47, 255, 0.55);
        }
        .header__nav ul {
          display: flex;
          gap: 32px;
        }
        .header__nav a {
          font-size: 0.94rem;
          color: var(--text-secondary);
          transition: color 0.18s ease;
        }
        .header__nav a:hover {
          color: var(--brand-lavender);
        }
        .header__cta {
          padding: 11px 20px;
          font-size: 0.9rem;
        }
        .header__toggle {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          padding: 6px;
        }
        .header__toggle span {
          width: 22px;
          height: 2px;
          background: var(--text-primary);
        }
        .header__mobile {
          background: var(--bg-panel);
          border-bottom: 1px solid var(--border-soft);
          padding: 18px 20px 28px;
        }
        .header__mobile ul {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .header__mobile a {
          font-size: 1rem;
          color: var(--text-secondary);
        }

        @media (max-width: 900px) {
          .header__nav, .header__cta { display: none; }
          .header__toggle { display: flex; }
        }
      `}</style>
    </header>
  )
}

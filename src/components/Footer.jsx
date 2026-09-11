const COLUMNS = [
  {
    title: 'Company',
    links: ['What we do', 'Process', 'Technology', 'Industries'],
  },
  {
    title: 'Services',
    links: ['Strategy & consulting', 'Financial operations', 'Data & risk', 'Build & automate', 'Ongoing optimization'],
  },
  {
    title: 'Resources',
    links: ['FAQ', 'Case studies', 'Contact'],
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
          <p>AI-driven business consulting and optimization.</p>
        </div>

        <div className="footer__cols">
          {COLUMNS.map((col) => (
            <div key={col.title} className="footer__col">
              <h4>{col.title}</h4>
              <ul>
                {col.links.map((l) => (
                  <li key={l}><a href="#top">{l}</a></li>
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

      <style>{`
        .footer {
          background: var(--bg-panel);
          border-top: 1px solid var(--border-soft);
          padding-top: 72px;
        }
        .footer__inner {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 48px;
          padding-bottom: 56px;
        }
        .footer__logo {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-display);
          font-weight: 600;
          font-size: 1.15rem;
          margin-bottom: 12px;
        }
        .footer__mark {
          width: 10px;
          height: 10px;
          border-radius: 2px;
          background: var(--gradient-accent);
        }
        .footer__brand p {
          max-width: 220px;
          font-size: 0.9rem;
        }
        .footer__cols {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
        }
        .footer__col h4 {
          font-size: 0.85rem;
          color: var(--text-muted);
          font-family: var(--font-mono);
          margin-bottom: 18px;
        }
        .footer__col ul {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .footer__col a {
          font-size: 0.9rem;
          color: var(--text-secondary);
          transition: color 0.18s ease;
        }
        .footer__col a:hover {
          color: var(--brand-lavender);
        }
        .footer__bottom {
          border-top: 1px solid var(--border-soft);
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 24px 0;
          flex-wrap: wrap;
          gap: 12px;
        }
        .footer__bottom p {
          font-size: 0.85rem;
          color: var(--text-muted);
        }
        .footer__legal {
          display: flex;
          gap: 20px;
        }
        .footer__legal a {
          font-size: 0.85rem;
          color: var(--text-muted);
        }
        .footer__legal a:hover {
          color: var(--brand-lavender);
        }

        @media (max-width: 720px) {
          .footer__inner { grid-template-columns: 1fr; }
          .footer__cols { grid-template-columns: 1fr 1fr; }
        }
      `}</style>
    </footer>
  )
}

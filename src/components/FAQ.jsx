import { useState } from 'react'

const FAQS = [
  {
    q: 'How is Meridian different from a normal consulting firm?',
    a: 'Traditional firms hand over a strategy and leave. We diagnose, simulate the outcome of our own recommendation first, then build and implement the AI and automation ourselves — and stay on to keep tuning it.',
  },
  {
    q: 'What does the simulation platform actually do?',
    a: 'It models your business before we change it — stress-testing decisions against best-, worst-, and likely-case outcomes, quantifying risk, and comparing alternative strategies side by side before anything is recommended.',
  },
  {
    q: 'How is an engagement priced?',
    a: 'Pricing is customized to size, complexity, and scope. Most engagements combine a fixed-fee strategy stage (discover, analyze, simulate), a project-based implementation fee, and a recurring monthly retainer for ongoing optimization.',
  },
  {
    q: 'Do you only work with e-commerce businesses?',
    a: 'No. We\u2019re sometimes mistaken for an e-commerce-only shop because inefficiency is easiest to see there, but our methodology is industry-agnostic — it depends on a business having processes, data, and decisions worth improving, from startups to enterprise.',
  },
  {
    q: 'What happens after the AI or automation is built?',
    a: 'The engagement moves into the measure and optimize stages: we track performance, cost savings, and ROI against real numbers, then keep tuning the system as your business changes.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="section faq">
      <div className="container faq__inner">
        <div className="section-head faq__head">
          <div className="section-kicker">FAQ</div>
          <h2>Got more questions?</h2>
          <p>Everything you need to know before the first conversation.</p>
        </div>

        <ul className="faq__list">
          {FAQS.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <li key={item.q} className={`faq__item ${isOpen ? 'is-open' : ''}`}>
                <button
                  className="faq__question"
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                >
                  <span className="faq__num">{String(i + 1).padStart(2, '0')}</span>
                  <span>{item.q}</span>
                  <span className="faq__icon">{isOpen ? '\u2212' : '+'}</span>
                </button>
                {isOpen && <p className="faq__answer">{item.a}</p>}
              </li>
            )
          })}
        </ul>
      </div>

      <style>{`
        .faq__inner {
          display: grid;
          grid-template-columns: 0.7fr 1.3fr;
          gap: 48px;
        }
        .faq__head { margin-bottom: 0; }
        .faq__list {
          border-top: 1px solid var(--border-soft);
        }
        .faq__item {
          border-bottom: 1px solid var(--border-soft);
        }
        .faq__question {
          width: 100%;
          display: grid;
          grid-template-columns: 40px 1fr 24px;
          align-items: center;
          gap: 18px;
          text-align: left;
          background: none;
          border: none;
          padding: 22px 0;
          color: var(--text-primary);
          font-family: var(--font-display);
          font-size: 1.02rem;
        }
        .faq__num {
          font-family: var(--font-mono);
          font-size: 0.82rem;
          color: var(--text-muted);
        }
        .faq__item.is-open .faq__num {
          color: var(--brand-lavender);
        }
        .faq__icon {
          font-size: 1.2rem;
          color: var(--brand-violet);
        }
        .faq__answer {
          padding: 0 0 26px 58px;
          max-width: 560px;
          font-size: 0.98rem;
        }

        @media (max-width: 860px) {
          .faq__inner { grid-template-columns: 1fr; }
          .faq__question { grid-template-columns: 30px 1fr 20px; }
          .faq__answer { padding-left: 48px; }
        }
      `}</style>
    </section>
  )
}

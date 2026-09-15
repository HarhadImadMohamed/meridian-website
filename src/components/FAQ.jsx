import { useState } from 'react'

const FAQS = [
  {
    q: 'How is Meridian different from a normal consulting firm?',
    a: 'Traditional firms hand over a strategy and leave. We diagnose, simulate the outcome of our own recommendation first, then build and implement the AI and automation ourselves — and stay on to keep tuning it.',
  },
  {
    q: 'What does the simulation environment actually do?',
    a: 'It models the business before we change it — stress-testing decisions against best-, worst- and likely-case outcomes, quantifying risk, and comparing alternative strategies side by side before anything is recommended.',
  },
  {
    q: 'How is an engagement priced?',
    a: 'Pricing is customized to size, complexity and scope. Most engagements combine a fixed-fee strategy stage (diagnose, simulate), a project-based build fee, and a recurring monthly retainer for ongoing optimization.',
  },
  {
    q: 'Do you only work with e-commerce businesses?',
    a: 'No. We\u2019re sometimes mistaken for an e-commerce-only shop because inefficiency is easiest to see there, but our methodology is industry-agnostic — it depends on a business having processes, data and decisions worth improving, from startups to enterprise.',
  },
  {
    q: 'What happens after the AI or automation is built?',
    a: 'The engagement moves into the measure and optimize stages: we track performance, cost savings and ROI against real numbers, then keep tuning the system as the business changes.',
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
    </section>
  )
}

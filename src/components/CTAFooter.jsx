export default function CTAFooter() {
  return (
    <section id="contact" className="section cta">
      <div className="cta__glow" aria-hidden="true" />
      <div className="container cta__inner">
        <h2>Let&rsquo;s find what&rsquo;s costing you.</h2>
        <p>
          Every engagement starts the same way — a conversation about where your
          business stands today, and what it could look like with the inefficiency
          removed.
        </p>
        <form
          className="cta__form"
          onSubmit={(e) => {
            e.preventDefault()
            alert('Thanks — we\u2019ll be in touch shortly.')
          }}
        >
          <input type="email" required placeholder="you@company.com" aria-label="Work email" />
          <button type="submit" className="btn btn-primary">Book a discovery call</button>
        </form>
      </div>

      <style>{`
        .cta {
          position: relative;
          text-align: center;
          background: var(--gradient-accent);
          overflow: hidden;
        }
        .cta__glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(60% 80% at 50% 0%, rgba(255,255,255,0.14), transparent 70%);
          pointer-events: none;
        }
        .cta__inner {
          position: relative;
          max-width: 640px;
        }
        .cta h2 {
          font-size: var(--fs-h2);
          color: #ffffff;
          margin-bottom: 16px;
        }
        .cta p {
          color: rgba(255,255,255,0.85);
          font-size: 1.05rem;
          margin-bottom: 36px;
        }
        .cta__form {
          display: flex;
          gap: 12px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .cta__form input {
          padding: 14px 18px;
          border-radius: var(--radius-sm);
          border: 1px solid rgba(255,255,255,0.3);
          background: rgba(13, 8, 23, 0.25);
          color: #ffffff;
          font-family: var(--font-body);
          min-width: 280px;
        }
        .cta__form input::placeholder {
          color: rgba(255,255,255,0.6);
        }
        .cta__form .btn-primary {
          background: #0D0817;
        }
        .cta__form .btn-primary:hover {
          background: #1E1240;
        }
      `}</style>
    </section>
  )
}

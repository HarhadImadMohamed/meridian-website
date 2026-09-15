export default function CTAFooter() {
  return (
    <section id="contact" className="section cta">
      <div className="cta__glow" aria-hidden="true" />
      <div className="container cta__inner">
        <h2 className="display cta__headline">
          Ready to
          <br />
          build what&rsquo;s next?
        </h2>
        <p>
          Every engagement starts the same way — a conversation about where
          the business stands today, and what it could look like with the
          inefficiency removed.
        </p>
        <form
          className="cta__form"
          onSubmit={(e) => {
            e.preventDefault()
            alert('Thanks — we\u2019ll be in touch shortly.')
          }}
        >
          <input type="email" required placeholder="you@company.com" aria-label="Work email" />
          <button type="submit" className="btn btn-primary">Let&rsquo;s talk</button>
        </form>
      </div>
    </section>
  )
}

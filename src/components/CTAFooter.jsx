export default function CTAFooter() {
  return (
    <section id="cta" className="section--tight cta">
      <div className="container cta__inner">
        <h2 className="cta__headline">Ready to identify your next AI opportunity?</h2>
        <p>
          Book an appointment with Meridian to discuss your business,
          operational challenges, and potential AI or automation solutions.
        </p>
        <form
          className="cta__form"
          onSubmit={(e) => {
            e.preventDefault()
            alert('Thanks — we\u2019ll be in touch shortly.')
          }}
        >
          <input type="email" required placeholder="you@company.com" aria-label="Work email" />
          <button type="submit" className="btn btn-primary">Book an appointment</button>
        </form>
        <a href="mailto:hello@meridian.ai" className="cta__secondary">Or contact Meridian directly</a>
      </div>
    </section>
  )
}

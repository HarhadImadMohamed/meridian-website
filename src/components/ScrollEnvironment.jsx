import { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from '../lib/gsap.js'
import GiantM from './GiantM.jsx'

// Background chapters, in scroll order, interpolated smoothly rather than
// cut abruptly — see _tokens.scss for the source colors.
const COLOR_STOPS = [
  'var(--scroll-stop-1)', // hero
  'var(--scroll-stop-2)', // problem statement
  'var(--scroll-stop-2)', // process (diagnose → optimize)
  'var(--scroll-stop-3)', // simulation environment
  'var(--scroll-stop-4)', // solutions
  'var(--scroll-stop-4)', // work
  'var(--scroll-stop-5)', // why us / industries / company / faq
  'var(--scroll-stop-6)', // final CTA
]

export default function ScrollEnvironment() {
  const bgRef = useRef(null)
  const giantMRef = useRef(null)

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const bgEl = bgRef.current
    if (!bgEl) return

    // Resolve CSS custom properties to concrete hex colors gsap can tween.
    const resolved = COLOR_STOPS.map((token) => {
      const probe = document.createElement('span')
      probe.style.color = token
      document.body.appendChild(probe)
      const value = getComputedStyle(probe).color
      document.body.removeChild(probe)
      return value
    })

    if (reduce) {
      bgEl.style.background = resolved[0]
      giantMRef.current?.setProgress(0)
      return
    }

    const proxy = { i: 0 }
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.6,
        onUpdate: (self) => {
          giantMRef.current?.setProgress(self.progress)
        },
      },
    })

    resolved.forEach((color, i) => {
      if (i === 0) return
      tl.to(bgEl, { backgroundColor: color, duration: 1, ease: 'none' }, i - 1)
    })

    bgEl.style.background = resolved[0]

    return () => {
      tl.kill()
      ScrollTrigger.getAll().forEach((st) => st.kill())
    }
  }, [])

  return (
    <>
      <div className="scroll-bg" ref={bgRef} aria-hidden="true" />
      <GiantM ref={giantMRef} />
    </>
  )
}

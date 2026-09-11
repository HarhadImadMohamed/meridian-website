export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__glow" aria-hidden="true" />

      <div className="container hero__inner">
        <div className="hero__copy">
          <div className="section-kicker">AI business consulting, built to be proven first</div>

          <h1>
            We find where your business
            <br />
            is losing ground.
          </h1>
          <p className="hero__lede">
            Meridian studies how your company actually runs, finds the inefficiencies
            and risks hiding in its operations, and builds the AI that closes those
            gaps — permanently.
          </p>

          <div className="hero__actions">
            <a href="#contact" className="btn btn-primary">Book a discovery call</a>
            <a href="#process" className="btn btn-outline">See how it works</a>
          </div>

          <p className="hero__quote">
            "Most businesses don't need more advice. They need to see, clearly,
            where their time and money are actually going — and what happens next
            if nothing changes."
          </p>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <SimulationGraphic />
        </div>
      </div>

      <style>{`
        .hero {
          position: relative;
          padding: 168px 0 96px;
          overflow: hidden;
          background: var(--gradient-hero), var(--bg-void);
        }
        .hero__glow {
          position: absolute;
          top: -220px;
          right: -160px;
          width: 620px;
          height: 620px;
          background: radial-gradient(circle, rgba(202, 169, 254, 0.22), transparent 70%);
          filter: blur(10px);
          pointer-events: none;
        }
        .hero__inner {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 56px;
          align-items: center;
          position: relative;
        }
        .hero__copy h1 {
          font-size: var(--fs-hero);
          max-width: 620px;
        }
        .hero__lede {
          margin-top: 24px;
          max-width: 520px;
          font-size: 1.08rem;
          color: var(--text-secondary);
        }
        .hero__actions {
          display: flex;
          gap: 16px;
          margin-top: 36px;
          flex-wrap: wrap;
        }
        .hero__quote {
          margin-top: 52px;
          max-width: 480px;
          padding-left: 20px;
          border-left: 2px solid var(--brand-violet);
          font-style: italic;
          font-size: 0.98rem;
          color: var(--text-muted);
        }
        .hero__visual {
          position: relative;
          height: 460px;
        }

        @media (max-width: 980px) {
          .hero { padding-top: 140px; }
          .hero__inner { grid-template-columns: 1fr; }
          .hero__visual { height: 320px; order: -1; }
        }
      `}</style>
    </section>
  )
}

function SimulationGraphic() {
  const nodes = [
    { x: 60, y: 70 }, { x: 210, y: 40 }, { x: 340, y: 110 },
    { x: 95, y: 190 }, { x: 250, y: 210 }, { x: 380, y: 260 },
    { x: 150, y: 300 }, { x: 40, y: 260 },
  ]
  const edges = [
    [0,1],[1,2],[0,3],[1,4],[2,4],[2,5],[3,4],[4,5],[3,6],[6,7],[3,7],[4,6],
  ]

  return (
    <svg viewBox="0 0 420 340" className="sim-graphic" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="edgeGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#9F2FFF" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#CAA9FE" stopOpacity="0.15" />
        </linearGradient>
        <radialGradient id="nodeGlow">
          <stop offset="0%" stopColor="#CAA9FE" />
          <stop offset="100%" stopColor="#9F2FFF" />
        </radialGradient>
      </defs>

      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a].x} y1={nodes[a].y}
          x2={nodes[b].x} y2={nodes[b].y}
          stroke="url(#edgeGrad)"
          strokeWidth="1.4"
          className="sim-edge"
          style={{ animationDelay: `${i * 0.09}s` }}
        />
      ))}

      {nodes.map((n, i) => (
        <circle
          key={i}
          cx={n.x} cy={n.y}
          r={i % 3 === 0 ? 6 : 4}
          fill="url(#nodeGlow)"
          className="sim-node"
          style={{ animationDelay: `${i * 0.12}s` }}
        />
      ))}

      <style>{`
        .sim-graphic { width: 100%; height: 100%; }
        .sim-edge {
          stroke-dasharray: 6 260;
          stroke-dashoffset: 266;
          animation: draw 1.8s ease-out forwards;
        }
        .sim-node {
          opacity: 0;
          transform-origin: center;
          animation: pop 0.5s ease-out forwards;
        }
        @keyframes draw {
          to { stroke-dashoffset: 0; }
        }
        @keyframes pop {
          from { opacity: 0; transform: scale(0.3); }
          to { opacity: 1; transform: scale(1); }
        }
        @media (prefers-reduced-motion: reduce) {
          .sim-edge { stroke-dashoffset: 0; }
          .sim-node { opacity: 1; }
        }
      `}</style>
    </svg>
  )
}

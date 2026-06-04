import { useState } from 'react'

const container: React.CSSProperties = {
  maxWidth: 1200,
  margin: '0 auto',
  padding: '0 48px',
  position: 'relative',
  zIndex: 1,
}

export default function CtaSection() {
  return (
    <section
      id="contact"
      style={{
        background: '#0F0B1E',
        color: '#fff',
        textAlign: 'center',
        padding: '96px 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Animated background blob */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '80%',
          height: '60%',
          background:
            'radial-gradient(ellipse 60% 60% at 50% 100%, rgba(91,47,212,0.2), transparent)',
          animation: 'float 10s ease-in-out infinite',
          filter: 'blur(60px)',
          opacity: 0.6,
          pointerEvents: 'none',
        }}
      />

      <div style={container}>
        <h2
          className="rv"
          style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: 44,
            letterSpacing: '-0.4px',
            lineHeight: 1.15,
            margin: '0 auto 20px',
          }}
        >
          Tell us the problem.
          <br />
          We'll show you what's possible.
        </h2>
        <p
          className="rv d1"
          style={{
            fontSize: 16,
            color: 'rgba(255,255,255,0.48)',
            maxWidth: 400,
            lineHeight: 1.65,
            margin: '0 auto 36px',
          }}
        >
          We don't do generic demos. Every conversation starts with the
          specific outcome you're trying to achieve.
        </p>

        <div
          className="rv d2"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 14,
            flexWrap: 'wrap',
          }}
        >
          <PrimaryBtn />
          <GhostBtn />
        </div>
      </div>
    </section>
  )
}

function PrimaryBtn() {
  const [hover, setHover] = useState(false)
  return (
    <a
      href="#"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: hover ? '#7B52E0' : '#5B2FD4',
        color: '#fff',
        padding: '14px 32px',
        borderRadius: 10,
        fontWeight: 700,
        fontSize: 14,
        textDecoration: 'none',
        transition: 'background 0.15s ease',
      }}
    >
      Talk to our team →
    </a>
  )
}

function GhostBtn() {
  const [hover, setHover] = useState(false)
  return (
    <a
      href="#proof"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: hover ? 'rgba(255,255,255,0.13)' : 'rgba(255,255,255,0.08)',
        border: '1px solid rgba(255,255,255,0.18)',
        color: 'rgba(255,255,255,0.8)',
        padding: '14px 28px',
        borderRadius: 10,
        fontSize: 14,
        fontWeight: 500,
        textDecoration: 'none',
        transition: 'background 0.15s ease',
      }}
    >
      See our work first
    </a>
  )
}

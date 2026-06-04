import { useState } from 'react'

const container: React.CSSProperties = {
  maxWidth: 1200,
  margin: '0 auto',
  padding: '0 48px',
  position: 'relative',
  zIndex: 1,
}

export default function Hero() {
  return (
    <section
      style={{
        background: '#fff',
        padding: '140px 0 100px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Animated mesh background — three blurred gradient blobs */}
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          left: '-5%',
          width: '60%',
          height: '70%',
          background:
            'radial-gradient(ellipse, rgba(91,47,212,0.12) 0%, transparent 70%)',
          animation: 'float 8s ease-in-out infinite',
          filter: 'blur(40px)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-5%',
          right: '-10%',
          width: '50%',
          height: '60%',
          background:
            'radial-gradient(ellipse, rgba(14,164,122,0.08) 0%, transparent 70%)',
          animation: 'floatSlow 10s ease-in-out infinite 2s',
          filter: 'blur(50px)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '30%',
          right: '20%',
          width: '30%',
          height: '40%',
          background:
            'radial-gradient(ellipse, rgba(196,154,16,0.05) 0%, transparent 70%)',
          animation: 'float 12s ease-in-out infinite 4s',
          filter: 'blur(30px)',
          pointerEvents: 'none',
        }}
      />

      <div style={container}>
        {/* Badge */}
        <div style={fadeUp(0)}>
          <span
            style={{
              background: '#F5F2FE',
              border: '1px solid rgba(91,47,212,0.18)',
              borderRadius: 100,
              padding: '5px 16px 5px 10px',
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: '0.6px',
              textTransform: 'uppercase',
              color: '#5B2FD4',
              marginBottom: 28,
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
            }}
          >
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: '50%',
                background: '#5B2FD4',
              }}
            />
            Platform-Led Banking Technology
          </span>
        </div>

        {/* H1 */}
        <h1
          style={{
            ...fadeUp(0.15),
            fontFamily: "'DM Serif Display', serif",
            fontSize: 'clamp(44px, 6vw, 80px)',
            lineHeight: 1.06,
            color: '#1A1625',
            letterSpacing: '-1.5px',
            maxWidth: 800,
            margin: '0 auto',
          }}
        >
          We solve the{' '}
          <em style={{ fontStyle: 'italic', color: '#5B2FD4' }}>hardest</em>{' '}
          problems in banking.
        </h1>

        {/* Paragraph */}
        <p
          style={{
            ...fadeUp(0.3),
            fontSize: 18,
            lineHeight: 1.72,
            color: '#6B6484',
            maxWidth: 520,
            margin: '24px auto 40px',
          }}
        >
          Zeta helps financial institutions build and scale what others won't
          take on. Through proprietary platforms, deep domain expertise, and a
          track record of complex delivery.
        </p>

        {/* CTA buttons */}
        <div
          style={{
            ...fadeUp(0.45),
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 14,
            flexWrap: 'wrap',
          }}
        >
          <PrimaryBtn />
          <SecondaryBtn />
        </div>
      </div>
    </section>
  )
}

/* Hero children animate in directly via CSS (not the .rv observer). */
function fadeUp(delay: number): React.CSSProperties {
  return {
    opacity: 0,
    animation: `fadeUp 0.7s ease ${delay}s forwards`,
  }
}

function PrimaryBtn() {
  const [hover, setHover] = useState(false)
  return (
    <a
      href="#approach"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        padding: '14px 28px',
        background: hover ? '#7B52E0' : '#5B2FD4',
        color: '#fff',
        borderRadius: 10,
        fontWeight: 700,
        fontSize: 14,
        textDecoration: 'none',
        transform: hover ? 'translateY(-1px)' : 'translateY(0)',
        transition: 'background 0.15s, transform 0.15s',
      }}
    >
      See how we work →
    </a>
  )
}

function SecondaryBtn() {
  const [hover, setHover] = useState(false)
  return (
    <a
      href="#proof"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        padding: '14px 24px',
        background: '#fff',
        border: `1.5px solid ${hover ? '#5B2FD4' : '#C8C4D8'}`,
        color: hover ? '#5B2FD4' : '#3D3557',
        borderRadius: 10,
        fontWeight: 500,
        fontSize: 14,
        textDecoration: 'none',
        transition: 'border-color 0.15s, color 0.15s',
      }}
    >
      View case studies
    </a>
  )
}

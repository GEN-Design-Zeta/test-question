import { useState } from 'react'
import { Zap, Lock, Sun } from 'lucide-react'

const container: React.CSSProperties = {
  maxWidth: 1200,
  margin: '0 auto',
  padding: '0 48px',
}

type Platform = {
  name: string
  Icon: typeof Zap
  orbBg: string
  accent: string
  subtitle: string
  caps: string[]
}

const PLATFORMS: Platform[] = [
  {
    name: 'Tachyon',
    Icon: Zap,
    orbBg: '#EDE8FB',
    accent: '#5B2FD4',
    subtitle: 'Transaction Processing Engine',
    caps: [
      'Sub-100ms response on every consumer action',
      'Configurable reward and offer logic at transaction time',
      'Multi-tenancy for co-brand and white-label programs',
    ],
  },
  {
    name: 'Cipher',
    Icon: Lock,
    orbBg: '#E1F5EE',
    accent: '#0EA47A',
    subtitle: 'Identity, Security & Compliance',
    caps: [
      'KYC, KYB, and AML built in',
      'Multi-market regulatory framework',
      'Fraud detection and tokenisation',
    ],
  },
  {
    name: 'Neutrino',
    Icon: Sun,
    orbBg: '#FEF3D7',
    accent: '#B8860B',
    subtitle: 'Digital Engagement Platform',
    caps: [
      'Omni-channel digital experiences',
      'Common intelligence layer and knowledge ontology',
      'Personalised, context-aware banking',
    ],
  },
]

export default function PlatformSection() {
  return (
    <section
      id="platform"
      style={{
        background: '#F5F2FE',
        padding: '96px 0',
        borderTop: '1px solid rgba(91,47,212,0.1)',
        borderBottom: '1px solid rgba(91,47,212,0.1)',
      }}
    >
      <div style={container}>
        {/* Header */}
        <div className="rv" style={{ maxWidth: 600 }}>
          <div
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: '1.8px',
              textTransform: 'uppercase',
              color: '#5B2FD4',
              marginBottom: 16,
            }}
          >
            Platform IP
          </div>
          <h2
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: 40,
              lineHeight: 1.15,
              color: '#1A1625',
              margin: '0 0 16px',
            }}
          >
            Our core platforms.
          </h2>
          <p
            style={{
              fontSize: 16,
              color: '#6B6484',
              maxWidth: 520,
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            Three purpose-built platforms forming the foundation of everything
            we deliver. Not licensed middleware — our own IP, engineered from
            first principles.
          </p>
        </div>

        {/* Cards */}
        <div
          className="zeta-platform-cards"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 20,
            marginTop: 48,
          }}
        >
          {PLATFORMS.map((p, i) => (
            <PlatformCard key={p.name} platform={p} delay={i + 1} />
          ))}
        </div>

        {/* Cert logos strip */}
        <div
          className="rv"
          style={{
            marginTop: 40,
            paddingTop: 32,
            borderTop: '1px solid rgba(91,47,212,0.1)',
            display: 'flex',
            alignItems: 'center',
            gap: 32,
            flexWrap: 'wrap',
          }}
        >
          <span
            style={{
              fontSize: 10.5,
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '1.5px',
              color: '#8C86A0',
            }}
          >
            Certified & Compliant
          </span>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {['PCI-DSS L1', 'ISO 27001', 'SOC 2 Type II'].map((c) => (
              <CertPill
                key={c}
                bg="#EDE8FB"
                border="rgba(91,47,212,0.15)"
                color="#5B2FD4"
              >
                {c}
              </CertPill>
            ))}
            {['RBI', 'FIDO2'].map((c) => (
              <CertPill
                key={c}
                bg="#E1F5EE"
                border="rgba(14,164,122,0.2)"
                color="#0EA47A"
              >
                {c}
              </CertPill>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .zeta-platform-cards { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

function PlatformCard({ platform, delay }: { platform: Platform; delay: number }) {
  const [hover, setHover] = useState(false)
  const { Icon } = platform
  return (
    <div
      className={`rv d${delay}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: '#fff',
        border: `1px solid ${hover ? '#5B2FD4' : 'rgba(91,47,212,0.12)'}`,
        borderRadius: 16,
        padding: '36px 32px',
        boxShadow: hover ? '0 6px 24px rgba(91,47,212,0.1)' : 'none',
        transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
      }}
    >
      <div
        style={{
          width: 52,
          height: 52,
          borderRadius: 14,
          background: platform.orbBg,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 22,
        }}
      >
        <Icon size={24} color={platform.accent} />
      </div>
      <h3
        style={{
          fontSize: 22,
          fontWeight: 700,
          color: platform.accent,
          margin: '0 0 4px',
        }}
      >
        {platform.name}
      </h3>
      <div style={{ fontSize: 13, color: '#6B6484', marginBottom: 22 }}>
        {platform.subtitle}
      </div>
      <ul style={{ listStyle: 'none', margin: '0 0 24px', padding: 0 }}>
        {platform.caps.map((cap) => (
          <li
            key={cap}
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: 10,
              fontSize: 13.5,
              color: '#3D3557',
              lineHeight: 1.5,
              marginBottom: 12,
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: '50%',
                background: platform.accent,
                marginTop: 7,
                flexShrink: 0,
              }}
            />
            {cap}
          </li>
        ))}
      </ul>
      <a
        href="#"
        style={{
          fontSize: 13.5,
          fontWeight: 600,
          color: platform.accent,
          textDecoration: 'none',
        }}
      >
        Learn more →
      </a>
    </div>
  )
}

function CertPill({
  children,
  bg,
  border,
  color,
}: {
  children: React.ReactNode
  bg: string
  border: string
  color: string
}) {
  return (
    <span
      style={{
        background: bg,
        border: `1px solid ${border}`,
        color,
        borderRadius: 100,
        padding: '5px 14px',
        fontSize: 12,
        fontWeight: 600,
      }}
    >
      {children}
    </span>
  )
}

import { useState } from 'react'
import { Cloud, Shield, Puzzle, Network } from 'lucide-react'

const container: React.CSSProperties = {
  maxWidth: 1200,
  margin: '0 auto',
  padding: '0 48px',
}

const STATS = [
  { value: '25M+', label: 'Cards live in production' },
  { value: '1M+', label: 'Transactions / sec, peak' },
  { value: '60M+', label: 'Contracted accounts' },
  { value: '<100ms', label: 'Response time, every action' },
  { value: '800M+', label: 'MFA authentications' },
  { value: '10yr', label: 'In production at scale' },
]

type Tile = {
  span: number
  bar?: string
  Icon?: typeof Cloud
  title: string
  desc?: string
  stat?: string
  statColor?: string
  bg?: string
  pills?: string[]
}

const TILES: Tile[] = [
  {
    span: 5,
    bar: '#5B2FD4',
    Icon: Cloud,
    title: 'Cloud-native from first principles',
    desc: 'Not a legacy system rehosted on cloud — built cloud-native from the ground up. Elastic scale, zero downtime. Deploy on AWS, Azure, or GCP.',
  },
  {
    span: 3,
    bg: '#F5F2FE',
    stat: '<100ms',
    statColor: '#5B2FD4',
    title: 'Response time on every consumer action. An architectural guarantee, not a target.',
  },
  {
    span: 4,
    bar: '#0EA47A',
    Icon: Shield,
    title: 'Security designed in, not bolted on',
    desc: 'Zero Trust, encryption, 800M+ MFA, no reported breach.',
    pills: ['PCI-DSS L1', 'ISO 27001', 'RBI', 'FIDO2'],
  },
  {
    span: 3,
    bg: '#EAF7F2',
    stat: '1M+',
    statColor: '#0EA47A',
    title: 'Transactions per second at peak. Designed for India-scale from day one.',
  },
  {
    span: 5,
    bar: '#E85D3A',
    Icon: Puzzle,
    title: 'Adopt on your terms',
    desc: '15+ independently deployable modular components. No big bang. No disruption.',
  },
  {
    span: 4,
    Icon: Network,
    title: 'Certified across global networks',
    desc: 'NPCI, Mastercard, Visa, RuPay. India, US, Southeast Asia and beyond.',
    pills: ['NPCI', 'Mastercard', 'Visa', 'RuPay'],
  },
]

export default function TechSection() {
  return (
    <section
      id="tech"
      style={{
        background:
          'linear-gradient(155deg, #F2EFFE 0%, #EAF3FB 55%, #EDF7F3 100%)',
        padding: '96px 0',
        borderTop: '1px solid rgba(91,47,212,0.12)',
        borderBottom: '1px solid rgba(14,164,122,0.15)',
      }}
    >
      <div style={container}>
        {/* Header */}
        <div className="rv" style={{ maxWidth: 640, marginBottom: 40 }}>
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
            Platform strength
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
            A platform built for the high-scale demands of modern banking.
          </h2>
          <p style={{ fontSize: 16, color: '#6B6484', lineHeight: 1.7, margin: 0 }}>
            Every architectural decision was made against a single benchmark:
            can it serve a major bank's entire customer base, at full load,
            without compromise?
          </p>
        </div>

        {/* 6-col stats strip */}
        <div
          className="zeta-tech-stats rv"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(6, 1fr)',
            background: '#fff',
            border: '1px solid #EDEAF5',
            borderRadius: 14,
            overflow: 'hidden',
            marginBottom: 40,
            boxShadow: '0 2px 12px rgba(91,47,212,0.05)',
          }}
        >
          {STATS.map((s, i) => (
            <div
              key={s.label}
              style={{
                padding: '22px 20px',
                borderRight: i < STATS.length - 1 ? '1px solid #EDEAF5' : 'none',
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  fontFamily: "'DM Serif Display', serif",
                  fontSize: 28,
                  color: '#1A1625',
                  marginBottom: 6,
                }}
              >
                {s.value}
              </div>
              <div style={{ fontSize: 11.5, color: '#6B6484', lineHeight: 1.4 }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Bento grid */}
        <div
          className="zeta-bento"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: 16,
          }}
        >
          {TILES.map((t, i) => (
            <BentoTile key={i} tile={t} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 980px) {
          .zeta-tech-stats { grid-template-columns: repeat(3, 1fr) !important; }
          .zeta-tech-stats > div:nth-child(3n) { border-right: none !important; }
          .zeta-bento { grid-template-columns: repeat(6, 1fr) !important; }
          .zeta-bento > div { grid-column: span 6 !important; }
        }
        @media (max-width: 560px) {
          .zeta-tech-stats { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  )
}

function BentoTile({ tile, index }: { tile: Tile; index: number }) {
  const [hover, setHover] = useState(false)
  const { Icon } = tile
  return (
    <div
      className="rv"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        gridColumn: `span ${tile.span}`,
        background: tile.bg ?? '#fff',
        border: `1px solid ${
          hover ? 'rgba(91,47,212,0.25)' : 'rgba(91,47,212,0.1)'
        }`,
        borderRadius: 16,
        padding: 28,
        boxShadow: hover ? '0 6px 28px rgba(91,47,212,0.1)' : 'none',
        transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
        transitionDelay: `${index * 0.06}s`,
      }}
    >
      {tile.bar && (
        <div
          style={{
            height: 3,
            width: 40,
            borderRadius: 2,
            background: tile.bar,
            marginBottom: 20,
          }}
        />
      )}

      {tile.stat ? (
        <>
          <div
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: 40,
              color: tile.statColor,
              lineHeight: 1,
              marginBottom: 14,
            }}
          >
            {tile.stat}
          </div>
          <p style={{ fontSize: 14, color: '#6B6484', lineHeight: 1.6, margin: 0 }}>
            {tile.title}
          </p>
        </>
      ) : (
        <>
          {Icon && (
            <div style={{ marginBottom: 14 }}>
              <Icon size={22} color={tile.bar ?? '#5B2FD4'} />
            </div>
          )}
          <h3
            style={{
              fontSize: 17,
              fontWeight: 700,
              color: '#1A1625',
              margin: '0 0 10px',
            }}
          >
            {tile.title}
          </h3>
          {tile.desc && (
            <p style={{ fontSize: 13.5, color: '#6B6484', lineHeight: 1.6, margin: 0 }}>
              {tile.desc}
            </p>
          )}
          {tile.pills && (
            <div
              style={{
                display: 'flex',
                gap: 8,
                flexWrap: 'wrap',
                marginTop: 16,
              }}
            >
              {tile.pills.map((p) => (
                <span
                  key={p}
                  style={{
                    fontSize: 11,
                    fontWeight: 600,
                    color: '#3D3557',
                    background: 'rgba(91,47,212,0.06)',
                    border: '1px solid #EDEAF5',
                    borderRadius: 6,
                    padding: '3px 9px',
                  }}
                >
                  {p}
                </span>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  )
}

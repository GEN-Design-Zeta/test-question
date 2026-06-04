const container: React.CSSProperties = {
  maxWidth: 1200,
  margin: '0 auto',
  padding: '0 48px',
}

const COMPACT_STATS = [
  { value: '5.6M', label: 'Customers adopted with limited marketing' },
  { value: '4.7+', label: 'App store rating on Android and iOS' },
  { value: '35%', label: 'Of users were new-to-bank customers' },
]

export default function ProofSection() {
  return (
    <section id="proof" style={{ background: '#fff', paddingTop: 72 }}>
      <div style={container}>
        {/* Intro strip */}
        <div
          className="rv"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            flexWrap: 'wrap',
            marginBottom: 40,
          }}
        >
          <span style={{ width: 20, height: 1, background: '#C8C4D8' }} />
          <span
            style={{
              fontSize: 10.5,
              fontWeight: 700,
              letterSpacing: '2.5px',
              textTransform: 'uppercase',
              color: '#8C86A0',
            }}
          >
            The Solutions We Have Built
          </span>
          <span style={{ width: 20, height: 1, background: '#C8C4D8' }} />
          <Pill>HDFC Bank</Pill>
          <Pill>PayZapp</Pill>
          <span
            style={{
              fontSize: 11.5,
              fontWeight: 600,
              padding: '4px 12px',
              borderRadius: 100,
              background: '#FEFCE8',
              border: '1px solid rgba(196,154,16,0.2)',
              color: '#C49A10',
            }}
          >
            Celent Model Bank 2024
          </span>
        </div>

        {/* H2 */}
        <h2
          className="rv d1"
          style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: 'clamp(22px, 2.8vw, 36px)',
            color: '#1A1625',
            maxWidth: 680,
            lineHeight: 1.18,
            marginTop: 0,
            marginBottom: 48,
          }}
        >
          How Zeta helped India's largest private bank{' '}
          <em style={{ fontStyle: 'italic', color: '#5B2FD4' }}>
            reclaim customer primacy in payments.
          </em>
        </h2>

        {/* Proof grid */}
        <div
          className="zeta-proof-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 56,
          }}
        >
          {/* Left — The Problem */}
          <div className="rv d1">
            <div
              style={{
                color: '#E85D3A',
                fontSize: 10.5,
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '2.5px',
                marginBottom: 16,
              }}
            >
              The Problem
            </div>
            <div
              style={{
                fontFamily: "'DM Serif Display', serif",
                color: '#8C86A0',
                lineHeight: 1,
                display: 'flex',
                alignItems: 'baseline',
              }}
            >
              <span style={{ fontSize: 'clamp(120px, 18vw, 200px)' }}>95</span>
              <span style={{ fontSize: 'clamp(56px, 8vw, 88px)' }}>%</span>
            </div>
            <h3
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: 'clamp(17px, 1.8vw, 22px)',
                color: '#1A1625',
                lineHeight: 1.3,
                marginTop: 8,
                marginBottom: 16,
              }}
            >
              of customers of India's largest private bank were making payments
              through third-party apps.
            </h3>
            <p style={{ fontSize: 14, color: '#6B6484', lineHeight: 1.7, margin: 0 }}>
              Three fintech apps controlled{' '}
              <strong style={{ color: '#3D3557' }}>
                85% of all UPI transactions
              </strong>
              , pushing the bank into the background of its own customers'
              financial lives — and eroding the primacy that drives every
              downstream relationship.
            </p>
          </div>

          {/* Right — The Result */}
          <div className="rv d2">
            <div
              style={{
                color: '#0EA47A',
                fontSize: 10.5,
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '2.5px',
                marginBottom: 16,
              }}
            >
              The Result
            </div>

            {/* Mock payment card */}
            <div
              style={{
                background: '#fff',
                borderRadius: 14,
                boxShadow: '0 8px 28px rgba(26,22,37,0.1)',
                overflow: 'hidden',
                maxWidth: 320,
                marginBottom: 20,
              }}
            >
              <div
                style={{
                  padding: '16px 18px 8px',
                  fontSize: 10.5,
                  textTransform: 'uppercase',
                  letterSpacing: '1.5px',
                  color: '#8C86A0',
                  fontWeight: 600,
                }}
              >
                Choose how to pay
              </div>
              <PayRow
                selected
                badge="P"
                badgeBg="#EDE8FB"
                badgeColor="#5B2FD4"
                title="PayZapp by HDFC Bank"
                sub="Recommended"
              />
              <PayRow
                badge="F"
                badgeBg="#E1F5EE"
                badgeColor="#0EA47A"
                title="Fintech App"
                sub="Pay via UPI"
              />
            </div>

            {/* Compact stats */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: 10,
                marginBottom: 22,
              }}
            >
              {COMPACT_STATS.map((s) => (
                <div
                  key={s.value}
                  style={{
                    background: '#F8F7FC',
                    borderRadius: 12,
                    padding: '16px 18px',
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'DM Serif Display', serif",
                      fontSize: 30,
                      letterSpacing: '-1px',
                      color: '#1A1625',
                      marginBottom: 6,
                    }}
                  >
                    {s.value}
                  </div>
                  <div style={{ fontSize: 12, color: '#6B6484', lineHeight: 1.4 }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#"
              style={{
                display: 'inline-block',
                background: '#5B2FD4',
                color: '#fff',
                padding: '12px 24px',
                borderRadius: 9,
                fontSize: 14,
                fontWeight: 700,
                textDecoration: 'none',
              }}
            >
              Explore more →
            </a>
          </div>
        </div>
      </div>

      {/* Proof footer — dark strip */}
      <div
        className="zeta-proof-footer"
        style={{
          background: '#0F0B1E',
          padding: '28px 48px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 20,
          marginTop: 72,
        }}
      >
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            background: 'rgba(196,154,16,0.1)',
            border: '1px solid rgba(196,154,16,0.2)',
            color: '#C49A10',
            borderRadius: 100,
            padding: '6px 14px',
            fontSize: 11,
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '1px',
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: '50%',
              background: '#C49A10',
            }}
          />
          Celent Model Bank 2024, Payments Innovation
        </span>
        <span
          style={{
            fontStyle: 'italic',
            color: 'rgba(255,255,255,0.35)',
            fontSize: 14,
          }}
        >
          A methodology built around delivery, not just design.
        </span>
        <a
          href="#"
          style={{
            color: 'rgba(255,255,255,0.42)',
            fontSize: 13.5,
            textDecoration: 'none',
            transition: 'color 0.15s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
          onMouseLeave={(e) =>
            (e.currentTarget.style.color = 'rgba(255,255,255,0.42)')
          }
        >
          Read the full case study →
        </a>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .zeta-proof-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  )
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        background: '#fff',
        border: '1px solid #EDEAF5',
        borderRadius: 100,
        padding: '4px 14px',
        fontSize: 11.5,
        fontWeight: 600,
        color: '#3D3557',
      }}
    >
      {children}
    </span>
  )
}

function PayRow({
  selected,
  badge,
  badgeBg,
  badgeColor,
  title,
  sub,
}: {
  selected?: boolean
  badge: string
  badgeBg: string
  badgeColor: string
  title: string
  sub: string
}) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '14px 18px',
        background: selected ? '#F5F2FE' : '#fff',
      }}
    >
      <span
        style={{
          width: 34,
          height: 34,
          borderRadius: 8,
          background: badgeBg,
          color: badgeColor,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 700,
          fontSize: 15,
          flexShrink: 0,
        }}
      >
        {badge}
      </span>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 13.5, fontWeight: 600, color: '#1A1625' }}>
          {title}
        </div>
        <div style={{ fontSize: 11.5, color: '#8C86A0' }}>{sub}</div>
      </div>
      <span
        style={{
          width: 18,
          height: 18,
          borderRadius: '50%',
          border: selected ? '5px solid #5B2FD4' : '2px solid #C8C4D8',
          boxSizing: 'border-box',
          flexShrink: 0,
        }}
      />
    </div>
  )
}

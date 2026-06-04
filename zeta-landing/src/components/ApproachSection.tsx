const container: React.CSSProperties = {
  maxWidth: 1200,
  margin: '0 auto',
  padding: '0 48px',
}

type Card = {
  num: string
  label: string
  name: string
  stat: string
  statLabel: string
  bar: string
}

const CARDS: Card[] = [
  {
    num: '01',
    label: 'Platforms',
    name: 'Built from first principles.',
    stat: '3',
    statLabel: 'Proprietary platforms. Cloud-native, API-first, fully certified',
    bar: '#5B2FD4',
  },
  {
    num: '02',
    label: 'People',
    name: 'Domain experts, not generalists.',
    stat: '1,700+',
    statLabel: 'Practitioners across banking, product, and technology',
    bar: '#0EA47A',
  },
  {
    num: '03',
    label: 'Implementation Pedigree',
    name: 'A methodology built to deliver.',
    stat: '25M+',
    statLabel: 'Cards live across 7 countries',
    bar: '#C49A10',
  },
]

export default function ApproachSection() {
  return (
    <section
      id="approach"
      style={{
        background: '#F8F7FC',
        padding: '88px 0',
        borderTop: '1px solid #EDEAF5',
      }}
    >
      <div style={container}>
        {/* Top 2-column grid */}
        <div
          className="zeta-approach-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 80,
            marginBottom: 64,
          }}
        >
          {/* Left */}
          <div className="rv">
            <div
              style={{
                fontSize: 10.5,
                fontWeight: 700,
                letterSpacing: '2.5px',
                textTransform: 'uppercase',
                color: '#5B2FD4',
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                marginBottom: 20,
              }}
            >
              <span style={{ width: 24, height: 1, background: '#5B2FD4' }} />
              Our Approach
            </div>
            <h2
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: 'clamp(30px, 3.8vw, 50px)',
                color: '#1A1625',
                letterSpacing: '-0.5px',
                lineHeight: 1.1,
                margin: 0,
              }}
            >
              The right platforms.
              <br />
              The right people.
              <br />
              <em style={{ fontStyle: 'italic', color: '#5B2FD4' }}>
                The pedigree to deliver.
              </em>
            </h2>
          </div>

          {/* Right */}
          <div className="rv d1">
            <p
              style={{
                fontSize: 15.5,
                color: '#6B6484',
                lineHeight: 1.78,
                marginTop: 0,
                marginBottom: 24,
              }}
            >
              Zeta's practitioners have spent careers inside banking — building
              the core systems, payment rails, and card programs that the
              industry runs on. We pair that domain depth with{' '}
              <strong style={{ color: '#3D3557' }}>
                platforms engineered from first principles
              </strong>
              , so every engagement starts from real operational experience,
              without exception.
            </p>
            <blockquote
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontStyle: 'italic',
                fontSize: 19,
                color: '#1A1625',
                lineHeight: 1.45,
                paddingLeft: 20,
                borderLeft: '3px solid #5B2FD4',
                margin: 0,
              }}
            >
              The result is not just a solution to the problem in front of you.
              It is a foundation your bank can grow from, above and beyond what
              you need today.
            </blockquote>
          </div>
        </div>

        {/* Three numbered statement cards */}
        <div
          className="zeta-approach-cards"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            border: '1px solid #EDEAF5',
            borderRadius: 16,
            overflow: 'hidden',
            background: '#fff',
            marginBottom: 48,
          }}
        >
          {CARDS.map((c, i) => (
            <div
              key={c.num}
              className={`rv d${i + 1}`}
              style={{
                padding: '36px 32px',
                borderRight: i < CARDS.length - 1 ? '1px solid #EDEAF5' : 'none',
                position: 'relative',
              }}
            >
              <span
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 2,
                  background: c.bar,
                }}
              />
              <div
                style={{
                  fontFamily: "'DM Serif Display', serif",
                  fontSize: 30,
                  color: '#C8C4D8',
                  marginBottom: 14,
                }}
              >
                {c.num}
              </div>
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  color: '#5B2FD4',
                  marginBottom: 8,
                }}
              >
                {c.label}
              </div>
              <div
                style={{
                  fontSize: 16,
                  fontWeight: 600,
                  color: '#1A1625',
                  marginBottom: 20,
                }}
              >
                {c.name}
              </div>
              <div
                style={{
                  fontFamily: "'DM Serif Display', serif",
                  fontSize: 44,
                  color: '#1A1625',
                  letterSpacing: '-1px',
                  lineHeight: 1,
                  marginBottom: 10,
                }}
              >
                {c.stat}
              </div>
              <div style={{ fontSize: 13, color: '#6B6484', lineHeight: 1.6 }}>
                {c.statLabel}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .zeta-approach-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .zeta-approach-cards { grid-template-columns: 1fr !important; }
          .zeta-approach-cards > div { border-right: none !important; border-bottom: 1px solid #EDEAF5; }
        }
      `}</style>
    </section>
  )
}

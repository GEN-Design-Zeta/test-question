import { useState } from 'react'

const container: React.CSSProperties = {
  maxWidth: 1200,
  margin: '0 auto',
  padding: '0 48px',
}

type Insight = {
  tag: string
  title: string
  subtext: string
  cta: string
}

const INSIGHTS: Insight[] = [
  {
    tag: 'White Paper',
    title: 'Shattering the Co-Brand Glass Ceiling',
    subtext:
      '15 strategic plays for co-brand program success — and why legacy architecture is the real ceiling.',
    cta: 'Read the paper →',
  },
  {
    tag: 'eBook',
    title: 'Reimagining UPI for Banks: 10 Winning Ideas',
    subtext:
      'A product-led guide for banks to capture the next wave of UPI growth.',
    cta: 'Download the guide →',
  },
  {
    tag: 'White Paper',
    title: 'The $1 Trillion Credit Line on UPI Opportunity',
    subtext:
      'A definitive launch playbook for banks ready to move from pilot to scale.',
    cta: 'Get the playbook →',
  },
]

export default function InsightsSection() {
  return (
    <section
      id="insights"
      style={{
        background: '#fff',
        padding: '72px 0',
        borderTop: '1px solid #EDEAF5',
      }}
    >
      <div style={container}>
        {/* Header row */}
        <div
          className="rv zeta-insights-head"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: 32,
            gap: 16,
            flexWrap: 'wrap',
          }}
        >
          <div>
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: '1.8px',
                textTransform: 'uppercase',
                color: '#5B2FD4',
                marginBottom: 12,
              }}
            >
              Thought Leadership
            </div>
            <h2
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: 32,
                color: '#1A1625',
                margin: 0,
              }}
            >
              What we're thinking about.
            </h2>
          </div>
          <a
            href="#"
            style={{
              fontSize: 13,
              fontWeight: 700,
              color: '#5B2FD4',
              textDecoration: 'none',
            }}
          >
            All insights →
          </a>
        </div>

        {/* Grid */}
        <div
          className="zeta-insights-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 20,
          }}
        >
          {INSIGHTS.map((it, i) => (
            <InsightCard key={it.title} insight={it} delay={i + 1} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .zeta-insights-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

function InsightCard({ insight, delay }: { insight: Insight; delay: number }) {
  const [hover, setHover] = useState(false)
  return (
    <div
      className={`rv d${delay}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: '#F8F7FC',
        border: `1px solid ${hover ? '#5B2FD4' : '#EDEAF5'}`,
        borderRadius: 12,
        padding: '24px 24px 20px',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        boxShadow: hover ? '0 3px 16px rgba(91,47,212,0.07)' : 'none',
        transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
      }}
    >
      <span
        style={{
          fontSize: 10.5,
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '1.5px',
          color: '#5B2FD4',
        }}
      >
        {insight.tag}
      </span>
      <h3
        style={{
          fontFamily: "'DM Serif Display', serif",
          fontSize: 20,
          color: '#1A1625',
          lineHeight: 1.25,
          margin: '4px 0',
        }}
      >
        {insight.title}
      </h3>
      <p style={{ fontSize: 13.5, color: '#6B6484', lineHeight: 1.6, margin: 0 }}>
        {insight.subtext}
      </p>
      <span
        style={{
          marginTop: 8,
          fontSize: 13,
          fontWeight: 600,
          color: '#5B2FD4',
        }}
      >
        {insight.cta}
      </span>
    </div>
  )
}

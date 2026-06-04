const container: React.CSSProperties = {
  maxWidth: 1200,
  margin: '0 auto',
  padding: '0 48px',
}

type Col = { title: string; links: string[] }

const COLS: Col[] = [
  { title: 'Platforms', links: ['Tachyon', 'Cipher', 'Neutrino'] },
  {
    title: 'Solutions',
    links: [
      'Card Modernization',
      'Co-branded Cards',
      'Credit Line on UPI',
      'Digital Banking',
      'Employee Benefits',
    ],
  },
  {
    title: 'Company',
    links: ['Our Work', 'Insights', 'Manifesto', 'Careers', 'Trust Centre'],
  },
]

const BADGES = ['PCI-DSS L1', 'ISO 27001', 'SOC 2 Type II', 'RBI']

export default function Footer() {
  return (
    <footer
      style={{
        padding: '56px 0 36px',
        background: '#fff',
        borderTop: '1px solid #EDEAF5',
      }}
    >
      <div style={container}>
        {/* Top grid */}
        <div
          className="zeta-footer-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.6fr 1fr 1fr 1fr',
            gap: 48,
            marginBottom: 48,
          }}
        >
          {/* Brand column */}
          <div>
            <div
              style={{
                fontSize: 22,
                fontWeight: 800,
                color: '#5B2FD4',
                letterSpacing: '-0.5px',
                marginBottom: 16,
              }}
            >
              zeta
            </div>
            <p
              style={{
                fontSize: 13,
                color: '#6B6484',
                maxWidth: 220,
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              Banking technology that solves the problems others won't take on.
            </p>
          </div>

          {COLS.map((col) => (
            <div key={col.title}>
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '1.4px',
                  color: '#C8C4D8',
                  marginBottom: 16,
                }}
              >
                {col.title}
              </div>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                {col.links.map((link) => (
                  <li key={link} style={{ marginBottom: 10 }}>
                    <FooterLink>{link}</FooterLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div
          className="zeta-footer-bottom"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: 28,
            borderTop: '1px solid #EDEAF5',
            gap: 16,
            flexWrap: 'wrap',
          }}
        >
          <span style={{ fontSize: 12, color: '#C8C4D8' }}>
            © 2026 Better World Technology Pvt. Ltd.
          </span>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {BADGES.map((b) => (
              <span
                key={b}
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  color: '#C8C4D8',
                  border: '1px solid #EDEAF5',
                  borderRadius: 4,
                  padding: '3px 8px',
                }}
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .zeta-footer-grid { grid-template-columns: 1fr 1fr !important; gap: 32px !important; }
        }
        @media (max-width: 520px) {
          .zeta-footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  )
}

function FooterLink({ children }: { children: React.ReactNode }) {
  return (
    <a
      href="#"
      style={{
        fontSize: 13.5,
        color: '#6B6484',
        textDecoration: 'none',
        transition: 'color 0.15s ease',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.color = '#1A1625')}
      onMouseLeave={(e) => (e.currentTarget.style.color = '#6B6484')}
    >
      {children}
    </a>
  )
}

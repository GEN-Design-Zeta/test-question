import { useEffect, useRef, useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'

/* ------------------------------------------------------------------ */
/* Dropdown content model                                             */
/* ------------------------------------------------------------------ */
type Sub = { label: string; highlight?: boolean }
type Group = { header: string; subs?: Sub[]; highlight?: boolean }
type MenuDef = { columns: Group[][] }

const MENUS: Record<string, MenuDef> = {
  'Modernisation Strategies': {
    columns: [[{ header: 'Modern Banking Reference Architecture' }]],
  },
  Platform: {
    columns: [
      [
        { header: 'Platform Overview' },
        {
          header: 'Issuing',
          subs: [
            { label: 'Credit Cards' },
            { label: 'Debit Cards' },
            { label: 'Prepaid Accounts' },
            { label: 'Virtual Cards' },
          ],
        },
      ],
      [
        {
          header: 'Digital Payments & Processing',
          subs: [
            { label: 'UPI Issuer Processing' },
            { label: 'UPI Acquirer Processing' },
            { label: 'Checkout' },
            { label: 'Issuer Wallets' },
          ],
        },
        { header: 'Credit Line on UPI' },
        {
          header: 'Digital Banking',
          subs: [{ label: 'Digital Accounts' }, { label: 'Digital Engagement' }],
        },
        {
          header: 'Identity & Access Management',
          subs: [{ label: 'Consumer IAM' }],
        },
      ],
    ],
  },
  Solutions: {
    columns: [
      [
        { header: 'Retail Credit Cards' },
        {
          header: 'Corporate Credit Cards',
          subs: [{ label: 'Corporate Cards' }, { label: 'Virtual Credit Cards' }],
        },
        { header: 'Co-branded Credit Cards' },
        {
          header: 'Corporate Prepaid Solutions',
          subs: [{ label: 'Closed Loop Wallets' }, { label: 'Employee Benefits' }],
        },
      ],
      [
        {
          header: 'Retail Prepaid Solutions',
          subs: [{ label: 'General Purpose Reloadable' }],
        },
        {
          header: 'UPI Issuing',
          subs: [{ label: 'UPI Issuing Switch' }, { label: 'UPI Issuing PSP' }],
        },
        {
          header: 'UPI Acquiring',
          subs: [{ label: 'UPI Acquiring Switch' }, { label: 'UPI Acquiring PSP' }],
        },
        {
          header: 'Credit Line on UPI (CLOU)',
          subs: [{ label: 'BNPL', highlight: true }],
        },
      ],
    ],
  },
  Services: {
    columns: [
      [
        { header: 'Zeta Studios' },
        { header: 'Operations' },
        { header: 'Customer Support' },
        { header: 'Fulfillment Services' },
      ],
    ],
  },
  Resources: {
    columns: [
      [
        { header: 'Case Studies' },
        {
          header: 'Insights',
          subs: [
            { label: 'eBooks' },
            { label: 'Whitepapers' },
            { label: 'Reports' },
            { label: 'Blog' },
          ],
        },
        { header: 'Events' },
      ],
      [{ header: 'Trust Centre' }],
    ],
  },
  Company: {
    columns: [
      [
        { header: 'Manifesto' },
        { header: 'About Us' },
        { header: 'Our Investors' },
        { header: 'Newsroom' },
        { header: 'Careers' },
      ],
    ],
  },
}

const NAV_ITEMS = Object.keys(MENUS)

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 80)
    handler()
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  // Hover-intent helpers — 100ms grace so the pointer can travel
  // between trigger and panel without flicker.
  const openMenu = (name: string) => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current)
    setActiveMenu(name)
  }
  const scheduleClose = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current)
    closeTimerRef.current = setTimeout(() => setActiveMenu(null), 100)
  }

  // White background whenever scrolled OR a dropdown is open.
  const solid = scrolled || activeMenu !== null

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          height: 64,
          background: solid ? 'rgba(255,255,255,0.97)' : 'transparent',
          backdropFilter: solid ? 'blur(12px)' : 'none',
          WebkitBackdropFilter: solid ? 'blur(12px)' : 'none',
          boxShadow: scrolled ? '0 1px 0 rgba(0,0,0,0.08)' : 'none',
          transition: 'background 0.3s ease, box-shadow 0.3s ease',
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            padding: '0 48px',
            height: 64,
            display: 'flex',
            alignItems: 'center',
            gap: 8,
          }}
        >
          {/* Logo */}
          <a
            href="#"
            style={{
              fontSize: 22,
              fontWeight: 800,
              letterSpacing: '-0.5px',
              textDecoration: 'none',
              color: solid ? '#5B2FD4' : '#1A1625',
              transition: 'color 0.3s ease',
            }}
          >
            zeta
          </a>

          {/* Desktop nav links */}
          <div
            className="zeta-desktop-nav"
            style={{
              flex: 1,
              display: 'flex',
              justifyContent: 'center',
              gap: 4,
            }}
          >
            {NAV_ITEMS.map((item) => {
              const open = activeMenu === item
              return (
                <div
                  key={item}
                  style={{ position: 'relative' }}
                  onMouseEnter={() => openMenu(item)}
                  onMouseLeave={scheduleClose}
                >
                  <div
                    style={{
                      padding: '8px 14px',
                      borderRadius: 8,
                      fontSize: 14,
                      fontWeight: 500,
                      color: '#1A1625',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 4,
                      background: open ? 'rgba(91,47,212,0.06)' : 'transparent',
                      transition: 'background 0.15s ease',
                    }}
                  >
                    {item}
                    <ChevronDown
                      size={12}
                      style={{
                        transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.2s ease',
                      }}
                    />
                  </div>
                </div>
              )
            })}
          </div>

          {/* Right CTA */}
          <a
            href="#contact"
            className="zeta-desktop-nav"
            style={{
              borderRadius: 8,
              padding: '8px 18px',
              fontSize: 13.5,
              fontWeight: 600,
              textDecoration: 'none',
              transition: 'background 0.3s ease, color 0.3s ease, border-color 0.3s ease',
              ...(scrolled
                ? { background: '#5B2FD4', color: '#fff', border: 'none' }
                : {
                    background: 'transparent',
                    color: '#3D3557',
                    border: '1.5px solid #C8C4D8',
                  }),
            }}
          >
            Talk to us
          </a>

          {/* Mobile hamburger */}
          <button
            className="zeta-mobile-toggle"
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
            style={{
              display: 'none',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              color: '#1A1625',
              padding: 0,
            }}
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Mega-dropdown panel */}
        {activeMenu && (
          <div
            onMouseEnter={() => openMenu(activeMenu)}
            onMouseLeave={scheduleClose}
            style={{
              position: 'fixed',
              top: 64,
              left: 0,
              right: 0,
              background: '#fff',
              borderTop: '1px solid #EDEAF5',
              boxShadow:
                '0 12px 40px rgba(0,0,0,0.10), 0 2px 8px rgba(0,0,0,0.06)',
              zIndex: 99,
              animation: 'fadeIn 0.18s ease, dropdownIn 0.18s ease',
            }}
          >
            <div
              style={{
                maxWidth: 1200,
                margin: '0 auto',
                padding: '36px 48px',
                display: 'flex',
                gap: 48,
              }}
            >
              {MENUS[activeMenu].columns.map((col, ci) => (
                <div
                  key={ci}
                  style={{
                    flex: 1,
                    maxWidth: 320,
                    paddingLeft: ci > 0 ? 48 : 0,
                    borderLeft: ci > 0 ? '1px solid #EDEAF5' : 'none',
                  }}
                >
                  {col.map((group) => (
                    <div key={group.header} style={{ marginBottom: 20 }}>
                      <DropLink header text={group.header} highlight={group.highlight} />
                      {group.subs?.map((s) => (
                        <DropLink key={s.label} text={s.label} highlight={s.highlight} sub />
                      ))}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Mobile drawer */}
      <MobileDrawer
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        expanded={mobileExpanded}
        setExpanded={setMobileExpanded}
      />

      <style>{`
        @keyframes dropdownIn {
          from { transform: translateY(-8px); }
          to   { transform: translateY(0); }
        }
        @media (max-width: 768px) {
          .zeta-desktop-nav { display: none !important; }
          .zeta-mobile-toggle { display: inline-flex !important; }
        }
      `}</style>
    </>
  )
}

/* ------------------------------------------------------------------ */
/* Dropdown link — header / sub-item / highlighted                    */
/* ------------------------------------------------------------------ */
function DropLink({
  text,
  header,
  sub,
  highlight,
}: {
  text: string
  header?: boolean
  sub?: boolean
  highlight?: boolean
}) {
  const [hover, setHover] = useState(false)
  const base: React.CSSProperties = {
    display: 'block',
    textDecoration: 'none',
    fontSize: 13,
    transition: 'color 0.15s ease',
    cursor: 'pointer',
  }
  let style: React.CSSProperties
  if (highlight) {
    style = { ...base, color: '#E85D3A', fontWeight: 700, marginBottom: 6 }
  } else if (header) {
    style = {
      ...base,
      color: '#1A1625',
      fontWeight: 700,
      letterSpacing: '0.5px',
      marginBottom: 6,
    }
  } else {
    style = {
      ...base,
      color: '#6B6484',
      paddingLeft: 16,
      lineHeight: 1.8,
    }
  }
  if (hover) style = { ...style, color: '#5B2FD4' }
  return (
    <a
      href="#"
      style={style}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {sub && !highlight ? '↳ ' : ''}
      {text}
    </a>
  )
}

/* ------------------------------------------------------------------ */
/* Mobile drawer — slide-in accordion                                 */
/* ------------------------------------------------------------------ */
function MobileDrawer({
  open,
  onClose,
  expanded,
  setExpanded,
}: {
  open: boolean
  onClose: () => void
  expanded: string | null
  setExpanded: (v: string | null) => void
}) {
  return (
    <>
      {/* Scrim */}
      <div
        onClick={onClose}
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(15,11,30,0.4)',
          zIndex: 199,
          opacity: open ? 1 : 0,
          pointerEvents: open ? 'auto' : 'none',
          transition: 'opacity 0.3s ease',
        }}
      />
      <aside
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 300,
          height: '100vh',
          background: '#fff',
          zIndex: 200,
          padding: 24,
          boxShadow: '4px 0 24px rgba(0,0,0,0.12)',
          transform: open ? 'translateX(0)' : 'translateX(-100%)',
          transition: 'transform 0.3s ease',
          overflowY: 'auto',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 24,
          }}
        >
          <span
            style={{
              fontSize: 22,
              fontWeight: 800,
              letterSpacing: '-0.5px',
              color: '#5B2FD4',
            }}
          >
            zeta
          </span>
          <button
            aria-label="Close menu"
            onClick={onClose}
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              color: '#1A1625',
              padding: 0,
            }}
          >
            <X size={24} />
          </button>
        </div>

        {NAV_ITEMS.map((item) => {
          const isOpen = expanded === item
          const groups = MENUS[item].columns.flat()
          return (
            <div key={item} style={{ borderBottom: '1px solid #EDEAF5' }}>
              <button
                onClick={() => setExpanded(isOpen ? null : item)}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '14px 0',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: 15,
                  fontWeight: 600,
                  color: '#1A1625',
                  textAlign: 'left',
                }}
              >
                {item}
                <ChevronDown
                  size={16}
                  style={{
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.2s ease',
                    color: '#6B6484',
                  }}
                />
              </button>
              <div
                style={{
                  maxHeight: isOpen ? 600 : 0,
                  overflow: 'hidden',
                  transition: 'max-height 0.3s ease',
                }}
              >
                <div style={{ paddingBottom: 12 }}>
                  {groups.map((g) => (
                    <div key={g.header} style={{ marginBottom: 8 }}>
                      <a
                        href="#"
                        style={{
                          display: 'block',
                          fontSize: 13,
                          fontWeight: 700,
                          color: g.highlight ? '#E85D3A' : '#1A1625',
                          textDecoration: 'none',
                          padding: '4px 0',
                        }}
                      >
                        {g.header}
                      </a>
                      {g.subs?.map((s) => (
                        <a
                          key={s.label}
                          href="#"
                          style={{
                            display: 'block',
                            fontSize: 13,
                            color: s.highlight ? '#E85D3A' : '#6B6484',
                            textDecoration: 'none',
                            paddingLeft: 16,
                            lineHeight: 1.9,
                          }}
                        >
                          ↳ {s.label}
                        </a>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )
        })}

        <a
          href="#contact"
          style={{
            display: 'block',
            marginTop: 24,
            textAlign: 'center',
            background: '#5B2FD4',
            color: '#fff',
            borderRadius: 8,
            padding: '12px 18px',
            fontSize: 14,
            fontWeight: 600,
            textDecoration: 'none',
          }}
        >
          Talk to us
        </a>
      </aside>
    </>
  )
}

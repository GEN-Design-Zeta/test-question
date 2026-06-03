import { useEffect, useState } from 'react'
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react'

const NAV_ITEMS = [
  'Modernisation',
  'Platform',
  'Solutions',
  'Services',
  'Resources',
  'Company',
]

function Logo({ className = '' }) {
  return (
    <a
      href="#top"
      className={`flex items-center text-[24px] font-bold tracking-[-0.5px] text-white ${className}`}
    >
      zeta
      <span
        className="ml-[3px] h-[7px] w-[7px] rounded-full bg-violet-soft"
        style={{ boxShadow: '0 0 12px #C8B8F5' }}
      />
    </a>
  )
}

export default function Navigation() {
  const [open, setOpen] = useState(false)

  // Lock body scroll while the mobile drawer is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav
        className="border-b backdrop-blur-[18px] backdrop-saturate-150"
        style={{
          background: 'rgba(8, 7, 13, 0.7)',
          borderColor: 'rgba(200, 184, 245, 0.12)',
        }}
      >
        <div className="mx-auto flex h-[74px] max-w-7xl items-center gap-10 px-6 lg:px-12">
          {/* Left — logo */}
          <Logo />

          {/* Center — nav triggers */}
          <div className="hidden flex-1 items-center justify-center gap-1 lg:flex">
            {NAV_ITEMS.map((label) => (
              <button
                key={label}
                type="button"
                aria-haspopup="true"
                aria-expanded="false"
                className="group inline-flex items-center gap-[6px] rounded-[9px] px-[13px] py-[9px] text-[14px] font-medium text-white/65 transition-colors duration-200 hover:bg-white/5 hover:text-white"
              >
                {label}
                <ChevronDown
                  className="h-3.5 w-3.5 opacity-60 transition-transform duration-300 group-hover:rotate-180"
                  strokeWidth={2}
                />
              </button>
            ))}
          </div>

          {/* Right — actions */}
          <div className="ml-auto flex items-center gap-[18px] lg:ml-0">
            <a
              href="#signin"
              className="hidden text-[14.5px] font-semibold text-white/90 transition-colors duration-200 hover:text-violet-soft sm:inline"
            >
              Sign in
            </a>
            <a
              href="#contact"
              className="hidden items-center gap-2 rounded-[11px] px-5 py-[10px] text-[14px] font-semibold text-[#160F2B] transition-transform duration-200 hover:-translate-y-0.5 sm:inline-flex"
              style={{
                background:
                  'linear-gradient(135deg, #E2D7FF 0%, #A98CF2 55%, #7C5CE8 100%)',
                boxShadow: '0 10px 30px -10px rgba(138,107,240,0.5)',
              }}
            >
              Talk to us <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
            </a>

            {/* Mobile burger */}
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={open}
              onClick={() => setOpen(true)}
              className="flex h-10 w-10 items-center justify-center rounded-[10px] border border-white/15 bg-white/5 text-white lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile drawer ── */}
      <div
        className={`fixed inset-0 z-50 bg-ink transition-transform duration-300 lg:hidden ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div
          className="flex h-[74px] items-center justify-between border-b px-6"
          style={{ borderColor: 'rgba(200,184,245,0.12)' }}
        >
          <Logo />
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="flex h-10 w-10 items-center justify-center rounded-[10px] border border-white/15 bg-white/5 text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="flex flex-col px-6 py-3">
          {NAV_ITEMS.map((label) => (
            <a
              key={label}
              href="#"
              onClick={() => setOpen(false)}
              className="flex items-center justify-between border-b py-[18px] text-[18px] font-semibold text-white"
              style={{ borderColor: 'rgba(200,184,245,0.10)' }}
            >
              {label}
              <ChevronDown className="h-4 w-4 text-violet-soft" />
            </a>
          ))}
          <div className="mt-6 flex flex-col gap-3">
            <a
              href="#signin"
              className="rounded-[11px] border border-white/15 bg-white/5 py-3 text-center text-[15px] font-semibold text-white"
            >
              Sign in
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-[11px] py-3 text-center text-[15px] font-semibold text-[#160F2B]"
              style={{
                background:
                  'linear-gradient(135deg, #E2D7FF 0%, #A98CF2 55%, #7C5CE8 100%)',
              }}
            >
              Talk to us <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

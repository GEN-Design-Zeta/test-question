import { ArrowRight } from 'lucide-react'

const COLUMNS = [
  {
    head: 'Platforms',
    links: ['Tachyon', 'Cipher', 'Neutrino'],
  },
  {
    head: 'Solutions',
    links: [
      'Card Modernization',
      'Co-branded Cards',
      'Credit Line on UPI',
      'Digital Banking',
      'Employee Benefits',
    ],
  },
  {
    head: 'Company',
    links: ['Our Work', 'Insights', 'Manifesto', 'Careers', 'Trust Centre'],
  },
]

const CERTS = ['PCI-DSS L1', 'ISO 27001', 'SOC 2 Type II', 'RBI']

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#070612] pt-px">
      {/* ── Bold gradient panel ── */}
      <div
        className="relative overflow-hidden"
        style={{
          background:
            'linear-gradient(165deg, #2B1D63 0%, #4A2FB0 38%, #6B49D8 70%, #8A6BF0 100%)',
        }}
      >
        {/* soft glows + mesh for depth */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 -top-24 h-[460px] w-[460px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(200,184,245,0.45), transparent 65%)',
            filter: 'blur(70px)',
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 top-1/3 h-[380px] w-[380px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(123,82,224,0.55), transparent 65%)',
            filter: 'blur(80px)',
          }}
        />
        {/* fine grid texture */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
            backgroundSize: '54px 54px',
            maskImage:
              'radial-gradient(ellipse 80% 60% at 50% 0%, #000, transparent 75%)',
            WebkitMaskImage:
              'radial-gradient(ellipse 80% 60% at 50% 0%, #000, transparent 75%)',
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6 pb-0 pt-20 lg:px-12">
          {/* Top: brand + CTA */}
          <div className="flex flex-col items-start justify-between gap-8 border-b border-white/15 pb-12 md:flex-row md:items-end">
            <div className="max-w-md">
              <div className="flex items-center text-[34px] font-bold tracking-[-0.6px] text-white">
                zeta
                <span
                  className="ml-[4px] h-2 w-2 rounded-full bg-white"
                  style={{ boxShadow: '0 0 14px rgba(255,255,255,0.9)' }}
                />
              </div>
              <p className="mt-4 text-[16px] leading-relaxed text-white/75">
                Banking technology that solves the problems others won't take on.
                Build and scale what the rest of the market avoids.
              </p>
            </div>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-[15px] font-semibold text-[#3A2580] shadow-[0_14px_40px_-12px_rgba(0,0,0,0.5)] transition-transform duration-200 hover:-translate-y-0.5"
            >
              Talk to our team
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" strokeWidth={2.2} />
            </a>
          </div>

          {/* Link columns */}
          <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
            <div className="hidden lg:block">
              <h4 className="font-mono text-[11px] uppercase tracking-[1.2px] text-white/60">
                Build with Zeta
              </h4>
              <p className="mt-4 text-[13.5px] leading-relaxed text-white/55">
                Three proprietary platforms. Practitioners who've run programmes
                inside banks. Live on schedule.
              </p>
            </div>
            {COLUMNS.map((col) => (
              <div key={col.head}>
                <h4 className="font-mono text-[11px] uppercase tracking-[1.2px] text-white/60">
                  {col.head}
                </h4>
                <div className="mt-4">
                  {col.links.map((l) => (
                    <a
                      key={l}
                      href="#"
                      className="block py-[7px] text-[14.5px] text-white/80 transition-all duration-200 hover:translate-x-1 hover:text-white"
                    >
                      {l}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/15 py-7">
            <div className="font-mono text-[11.5px] text-white/65">
              © 2026 Better World Technology Pvt. Ltd.
            </div>
            <div className="flex flex-wrap gap-2">
              {CERTS.map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-white/25 bg-white/10 px-3 py-1.5 font-mono text-[10.5px] text-white/80 backdrop-blur-sm"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>

          {/* Oversized wordmark watermark */}
          <div className="relative -mb-4 select-none pt-4" aria-hidden="true">
            <div
              className="bg-gradient-to-b from-white/20 to-white/[0.02] bg-clip-text text-center font-bold leading-[0.8] tracking-[-0.04em] text-transparent"
              style={{ fontSize: 'clamp(72px, 17vw, 260px)' }}
            >
              zeta
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

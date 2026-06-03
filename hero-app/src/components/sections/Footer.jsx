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
    <footer className="border-t border-white/[0.06] bg-[#0B0A12] pb-9 pt-[74px]">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid gap-11 border-b border-white/[0.06] pb-12 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <div className="mb-4 flex items-center text-[30px] font-bold tracking-[-0.5px] text-white">
              zeta
              <span
                className="ml-[3px] h-[7px] w-[7px] rounded-full bg-violet-soft"
                style={{ boxShadow: '0 0 12px #C8B8F5' }}
              />
            </div>
            <p className="max-w-[280px] text-[14.5px] leading-relaxed text-white/55">
              Banking technology that solves the problems others won't take on.
            </p>
          </div>
          {COLUMNS.map((col) => (
            <div key={col.head}>
              <h4 className="mb-4 font-mono text-[11px] uppercase tracking-[1px] text-white/45">
                {col.head}
              </h4>
              {col.links.map((l) => (
                <a
                  key={l}
                  href="#"
                  className="block py-1.5 text-[14px] text-white/60 transition-all duration-200 hover:pl-1 hover:text-violet-soft"
                >
                  {l}
                </a>
              ))}
            </div>
          ))}
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4 pt-7">
          <div className="font-mono text-[11.5px] text-white/45">
            © 2026 Better World Technology Pvt. Ltd.
          </div>
          <div className="flex flex-wrap gap-2">
            {CERTS.map((c) => (
              <span
                key={c}
                className="rounded-full border border-white/10 px-3 py-1.5 font-mono text-[10.5px] text-white/50"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

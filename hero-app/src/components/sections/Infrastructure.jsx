import Reveal from '../Reveal.jsx'
import CountUp from '../CountUp.jsx'
import { Eyebrow } from './_shared.jsx'

const METRICS = [
  { end: 25, suffix: 'M+', label: 'Cards live in production' },
  { end: 1, suffix: 'M+', label: 'Transactions / sec, peak' },
  { end: 60, suffix: 'M+', label: 'Contracted accounts' },
  { end: 100, prefix: '<', suffix: 'ms', label: 'Response, every action' },
  { end: 800, suffix: 'M+', label: 'MFA authentications' },
  { end: 10, suffix: 'yr', label: 'In production at scale' },
]

const SPECS = [
  {
    no: 'A1',
    title: 'Cloud-native architecture',
    body: 'Built cloud-native from the ground up — not a legacy system rehosted. Elastic scale, zero scheduled downtime, continuous delivery on AWS, Azure, or GCP.',
    pills: ['AWS', 'Azure', 'GCP', 'PaaS'],
  },
  {
    no: 'A2',
    title: 'Zero-trust security',
    body: 'Security governs every layer — continuous verification, encryption at rest and in transit, segmentation. 800M+ MFA authentications. No reported breach.',
    pills: ['PCI-DSS L1', 'ISO 27001', 'RBI', 'FIDO2'],
  },
  {
    no: 'A3',
    title: 'Adopt on your terms',
    body: '15+ independently deployable modules. Add card management. Run the UPI switch in parallel. Expand into lending when ready. No big bang, no disruption.',
    pills: ['Modular', 'API-first', '15+ components'],
  },
  {
    no: 'A4',
    title: 'Certified across networks',
    body: 'Certified with NPCI, Mastercard, Visa, and RuPay. Proven in regulated markets across India, the US, Southeast Asia, and beyond.',
    pills: ['NPCI', 'Mastercard', 'Visa', 'RuPay'],
  },
]

export default function Infrastructure() {
  return (
    <section
      id="infrastructure"
      className="border-t border-white/[0.06] bg-[#0B0A12] py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow className="justify-center text-violet-soft">Platform Strength</Eyebrow>
            <h2 className="mt-4 text-[clamp(32px,4.4vw,52px)] font-bold leading-[1.06] tracking-[-1.5px] text-white">
              Built for the high-scale demands of{' '}
              <span className="bg-gradient-to-br from-[#E2D7FF] to-[#7C5CE8] bg-clip-text font-serif italic text-transparent">
                modern banking.
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[17px] leading-relaxed text-white/55">
              Every architectural decision measured against one benchmark: can it
              serve a major bank's entire customer base, at full load, without
              compromise?
            </p>
          </div>
        </Reveal>

        {/* Metrics band */}
        <Reveal delay={0.05}>
          <div className="mt-14 grid grid-cols-2 overflow-hidden rounded-[18px] border border-white/[0.08] bg-white/[0.03] md:grid-cols-3 lg:grid-cols-6">
            {METRICS.map((m, i) => (
              <div
                key={m.label}
                className="border-b border-r border-white/[0.06] px-5 py-7 transition-colors duration-300 last:border-r-0 hover:bg-violet-core/[0.08]"
              >
                <b className="block text-[34px] font-bold leading-none tracking-[-1.5px] text-white">
                  {m.prefix && <span>{m.prefix}</span>}
                  <CountUp end={m.end} />
                  <em className="not-italic text-[15px] text-violet-soft">{m.suffix}</em>
                </b>
                <span className="mt-3 block font-mono text-[10px] leading-snug text-white/45">
                  {m.label}
                </span>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Spec cards */}
        <div className="mt-5 grid gap-5 md:grid-cols-2">
          {SPECS.map((s, i) => (
            <Reveal key={s.no} delay={(i % 2) * 0.08}>
              <div className="flex h-full gap-5 rounded-[18px] border border-white/[0.08] bg-white/[0.03] p-7 transition-colors duration-300 hover:border-violet-bright/30">
                <div className="pt-0.5 font-mono text-[12px] text-violet-soft">{s.no}</div>
                <div>
                  <h4 className="mb-2 text-[18px] font-bold tracking-[-0.3px] text-white">
                    {s.title}
                  </h4>
                  <p className="mb-3.5 text-[14px] leading-relaxed text-white/60">
                    {s.body}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {s.pills.map((p) => (
                      <span
                        key={p}
                        className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-[10.5px] text-white/60"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

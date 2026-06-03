import Reveal from '../Reveal.jsx'
import CountUp from '../CountUp.jsx'
import { tileDark } from './_shared.jsx'

/* Small metric tile */
function Metric({ end, prefix, suffix, label, className = '' }) {
  return (
    <div className={`flex flex-col justify-between p-6 ${tileDark} ${className}`}>
      <b className="text-[clamp(28px,3vw,38px)] font-bold leading-none tracking-[-1.5px] text-white">
        {prefix}
        <CountUp end={end} />
        <em className="ml-0.5 not-italic text-[15px] text-violet-soft">{suffix}</em>
      </b>
      <span className="mt-4 font-mono text-[10.5px] leading-snug text-white/45">{label}</span>
    </div>
  )
}

/* Spec tile with pills */
function Spec({ no, title, body, pills, className = '' }) {
  return (
    <div className={`flex flex-col p-7 ${tileDark} ${className}`}>
      <div className="flex items-center gap-3">
        <span className="font-mono text-[12px] text-violet-soft">{no}</span>
        <h4 className="text-[17px] font-bold tracking-[-0.3px] text-white">{title}</h4>
      </div>
      <p className="mt-3 text-[13.5px] leading-relaxed text-white/55">{body}</p>
      <div className="mt-auto flex flex-wrap gap-2 pt-5">
        {pills.map((p) => (
          <span
            key={p}
            className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-[10px] text-white/55"
          >
            {p}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Infrastructure() {
  return (
    <section id="infrastructure" className="relative overflow-hidden bg-[#0B0A12] py-28">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2.5 font-mono text-[12px] font-medium uppercase tracking-[1.5px] text-violet-soft">
              <span className="h-px w-6 bg-violet-soft/60" />
              Platform Strength
            </span>
            <h2 className="mt-4 text-[clamp(32px,4.4vw,52px)] font-bold leading-[1.06] tracking-[-1.5px] text-white">
              Built for the high-scale demands of{' '}
              <span className="bg-gradient-to-br from-[#E2D7FF] to-[#7C5CE8] bg-clip-text font-serif italic text-transparent">
                modern banking.
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[17px] leading-relaxed text-white/55">
              Every architectural decision measured against one benchmark: serve a
              major bank's entire customer base, at full load, without compromise.
            </p>
          </div>
        </Reveal>

        {/* Bento mosaic */}
        <Reveal delay={0.05}>
          <div className="mt-14 grid auto-rows-[minmax(150px,auto)] grid-cols-2 gap-3 lg:grid-cols-6">
            {/* Hero metric with mini chart */}
            <div className={`relative col-span-2 row-span-2 flex flex-col justify-between overflow-hidden p-7 ${tileDark}`}>
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-violet-core/20 blur-3xl" />
              <div className="relative">
                <div className="font-mono text-[10.5px] uppercase tracking-[0.5px] text-white/45">
                  Cards live in production
                </div>
                <div className="mt-3 text-[64px] font-bold leading-none tracking-[-3px] text-white">
                  <CountUp end={25} />
                  <span className="text-[26px] text-violet-soft">M+</span>
                </div>
              </div>
              {/* mini bar chart */}
              <div className="relative mt-6 flex items-end gap-1.5" aria-hidden="true">
                {[28, 36, 30, 48, 44, 60, 56, 72, 68, 88, 82, 100].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t bg-gradient-to-t from-violet-core/30 to-violet-soft/80"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>

            <Spec
              className="col-span-2"
              no="A1"
              title="Cloud-native architecture"
              body="Built cloud-native from the ground up. Elastic scale, zero scheduled downtime, continuous delivery on AWS, Azure, or GCP."
              pills={['AWS', 'Azure', 'GCP']}
            />
            <Spec
              className="col-span-2"
              no="A2"
              title="Zero-trust security"
              body="Continuous verification, encryption at rest and in transit, segmentation. 800M+ MFA authentications, no reported breach."
              pills={['PCI-DSS L1', 'ISO 27001', 'FIDO2']}
            />

            <Metric className="col-span-1" end={1} suffix="M+" label="Transactions / sec, peak" />
            <Metric className="col-span-1" end={100} prefix="<" suffix="ms" label="Response, every action" />
            <Metric className="col-span-1" end={60} suffix="M+" label="Contracted accounts" />
            <Metric className="col-span-1" end={800} suffix="M+" label="MFA authentications" />

            <Metric className="col-span-2" end={10} suffix="yr" label="In production at scale" />
            <Spec
              className="col-span-2"
              no="A3"
              title="Adopt on your terms"
              body="15+ independently deployable modules. Add card management, run the UPI switch in parallel, expand into lending when ready."
              pills={['Modular', 'API-first', '15+ components']}
            />
            <Spec
              className="col-span-2"
              no="A4"
              title="Certified across networks"
              body="Certified with NPCI, Mastercard, Visa, and RuPay. Proven in regulated markets across India, the US, and Southeast Asia."
              pills={['NPCI', 'Mastercard', 'Visa', 'RuPay']}
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}

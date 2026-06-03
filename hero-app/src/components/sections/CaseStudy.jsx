import Reveal from '../Reveal.jsx'
import CountUp from '../CountUp.jsx'
import { lightCard } from './_shared.jsx'

const STATS = [
  { end: 5.6, suffix: 'M', label: 'Customers adopted, limited marketing' },
  { end: 4.7, suffix: '+', label: 'App store rating, iOS & Android' },
  { end: 35, suffix: '%', label: 'Were new-to-bank customers' },
]

export default function CaseStudy() {
  return (
    <section
      id="proof"
      className="relative overflow-hidden border-t border-violet-core/10 bg-[#F8F7FD] py-28"
    >
      {/* soft lavender bloom */}
      <div className="pointer-events-none absolute left-[-10%] top-[10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(138,107,240,0.12),transparent_65%)] blur-[80px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <Reveal>
            <div className="mb-6 flex flex-wrap gap-2">
              <span className="rounded-full border border-violet-core/15 bg-white px-3.5 py-1.5 font-mono text-[11px] text-slate-500">
                HDFC Bank
              </span>
              <span className="rounded-full border border-violet-core/15 bg-white px-3.5 py-1.5 font-mono text-[11px] text-slate-500">
                PayZapp
              </span>
              <span className="rounded-full border border-amber-400/40 bg-white px-3.5 py-1.5 font-mono text-[11px] text-amber-600">
                ★ Celent Model Bank 2024
              </span>
            </div>
            <h2 className="mb-6 text-[clamp(28px,3.8vw,46px)] font-bold leading-[1.1] tracking-[-1.5px] text-slate-900">
              How Zeta helped India's largest private bank{' '}
              <span className="bg-gradient-to-br from-[#A98CF2] to-[#7C5CE8] bg-clip-text font-serif italic text-transparent">
                reclaim customer primacy
              </span>{' '}
              in payments.
            </h2>
            <div className="mb-3.5 flex items-baseline gap-2">
              <b className="bg-gradient-to-br from-[#A98CF2] to-[#7C5CE8] bg-clip-text text-[82px] font-extrabold leading-[0.9] tracking-[-4px] text-transparent">
                <CountUp end={95} />
              </b>
              <i className="text-[32px] font-bold not-italic text-violet-core">%</i>
            </div>
            <p className="max-w-md text-[15.5px] leading-relaxed text-slate-500">
              of the bank's customers were paying through third-party apps. Three
              fintech apps controlled{' '}
              <strong className="font-semibold text-slate-900">
                85% of all UPI transactions
              </strong>{' '}
              in India. The bank provided the infrastructure — and owned none of
              the relationship.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className={`mb-5 p-6 ${lightCard}`}>
              <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.5px] text-slate-400">
                Choose how to pay
              </div>
              <div className="mb-2.5 flex items-center gap-3.5 rounded-[13px] border border-violet-bright/40 bg-violet-core/[0.08] p-4">
                <div className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-[11px] bg-gradient-to-br from-[#A98CF2] to-[#7C5CE8] text-[16px] font-bold text-white">
                  P
                </div>
                <div className="flex-1">
                  <div className="text-[14px] font-semibold text-slate-900">
                    PayZapp by HDFC Bank
                  </div>
                  <div className="font-mono text-[10.5px] text-slate-400">
                    UPI · Cards · Wallet · & more
                  </div>
                </div>
                <div className="relative h-[19px] w-[19px] flex-shrink-0 rounded-full border-2 border-violet-bright">
                  <span className="absolute inset-[3px] rounded-full bg-violet-bright" />
                </div>
              </div>
              <div className="flex items-center gap-3.5 rounded-[13px] border border-violet-core/10 p-4">
                <div className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-[11px] bg-violet-core/[0.07] text-[16px] font-bold text-slate-400">
                  F
                </div>
                <div className="flex-1">
                  <div className="text-[14px] font-semibold text-slate-900">
                    Fintech App
                  </div>
                  <div className="font-mono text-[10.5px] text-slate-400">UPI only</div>
                </div>
                <div className="h-[19px] w-[19px] flex-shrink-0 rounded-full border-2 border-violet-core/20" />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {STATS.map((s) => (
                <div key={s.label} className={`p-4 text-center ${lightCard}`}>
                  <b className="block text-[28px] font-bold leading-none tracking-[-1px] text-slate-900">
                    <CountUp end={s.end} suffix={s.suffix} />
                  </b>
                  <span className="mt-2 block text-[11px] leading-tight text-slate-400">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

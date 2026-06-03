import Reveal from '../Reveal.jsx'
import CountUp from '../CountUp.jsx'
import { tile, tileAccent, accentGradient, Bloom } from './_shared.jsx'

const STATS = [
  { end: 5.6, suffix: 'M', label: 'Customers adopted, limited marketing' },
  { end: 4.7, suffix: '+', label: 'App store rating, iOS & Android' },
  { end: 35, suffix: '%', label: 'Were new-to-bank customers' },
]

export default function CaseStudy() {
  return (
    <section id="proof" className="relative overflow-hidden bg-[#F6F3FD] py-28">
      <Bloom className="-left-32 top-24" color="rgba(138,107,240,0.10)" size={520} />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid items-stretch gap-4 lg:grid-cols-12">
          {/* Editorial narrative */}
          <Reveal className="lg:col-span-5" delay={0}>
            <div className="flex h-full flex-col justify-center">
              <div className="mb-6 flex flex-wrap gap-2">
                <span className="rounded-full border border-violet-core/15 bg-white px-3.5 py-1.5 font-mono text-[11px] text-slate-500">
                  HDFC Bank
                </span>
                <span className="rounded-full border border-violet-core/15 bg-white px-3.5 py-1.5 font-mono text-[11px] text-slate-500">
                  PayZapp
                </span>
                <span className="rounded-full border border-amber-400/40 bg-amber-50 px-3.5 py-1.5 font-mono text-[11px] text-amber-600">
                  ★ Celent Model Bank 2024
                </span>
              </div>
              <h2 className="text-[clamp(28px,3.6vw,42px)] font-bold leading-[1.12] tracking-[-1.4px] text-slate-900">
                India's largest private bank{' '}
                <span className="bg-gradient-to-br from-[#A98CF2] to-[#7C5CE8] bg-clip-text font-serif italic text-transparent">
                  reclaimed customer primacy
                </span>{' '}
                in payments.
              </h2>
              <div className="mt-7 flex items-baseline gap-3">
                <span className="bg-gradient-to-br from-[#A98CF2] to-[#6A4BD6] bg-clip-text text-[88px] font-extrabold leading-[0.85] tracking-[-5px] text-transparent">
                  <CountUp end={95} />
                </span>
                <span className="text-[34px] font-bold text-violet-core">%</span>
              </div>
              <p className="mt-4 max-w-md text-[15px] leading-relaxed text-slate-500">
                of the bank's customers were paying through third-party apps. Three
                fintech apps controlled{' '}
                <strong className="font-semibold text-slate-900">
                  85% of all UPI transactions
                </strong>{' '}
                in India — the bank owned the infrastructure, but none of the
                relationship.
              </p>
            </div>
          </Reveal>

          {/* Bento proof tiles */}
          <div className="grid gap-4 lg:col-span-7 lg:grid-cols-6">
            {/* PayZapp chooser */}
            <Reveal className="lg:col-span-6" delay={0.08}>
              <div className={`p-7 ${tile}`}>
                <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.5px] text-slate-400">
                  Choose how to pay
                </div>
                <div className="mb-2.5 flex items-center gap-3.5 rounded-2xl border border-violet-bright/40 bg-violet-core/[0.07] p-4">
                  <div className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl bg-gradient-to-br from-[#A98CF2] to-[#7C5CE8] text-[17px] font-bold text-white">
                    P
                  </div>
                  <div className="flex-1">
                    <div className="text-[14.5px] font-semibold text-slate-900">
                      PayZapp by HDFC Bank
                    </div>
                    <div className="font-mono text-[10.5px] text-slate-400">
                      UPI · Cards · Wallet · & more
                    </div>
                  </div>
                  <div className="relative h-5 w-5 flex-shrink-0 rounded-full border-2 border-violet-bright">
                    <span className="absolute inset-[3px] rounded-full bg-violet-bright" />
                  </div>
                </div>
                <div className="flex items-center gap-3.5 rounded-2xl border border-violet-core/10 p-4">
                  <div className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl bg-violet-core/[0.06] text-[17px] font-bold text-slate-400">
                    F
                  </div>
                  <div className="flex-1">
                    <div className="text-[14.5px] font-semibold text-slate-900">Fintech App</div>
                    <div className="font-mono text-[10.5px] text-slate-400">UPI only</div>
                  </div>
                  <div className="h-5 w-5 flex-shrink-0 rounded-full border-2 border-violet-core/20" />
                </div>
              </div>
            </Reveal>

            {/* Stat tiles — first one accent */}
            {STATS.map((s, i) => (
              <Reveal key={s.label} className="lg:col-span-2" delay={0.16 + i * 0.07}>
                <div
                  className={`flex h-full flex-col justify-between p-5 ${i === 0 ? tileAccent : tile}`}
                  style={i === 0 ? { background: accentGradient } : undefined}
                >
                  <b
                    className={`text-[34px] font-bold leading-none tracking-[-1.5px] ${
                      i === 0 ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    <CountUp end={s.end} suffix={s.suffix} />
                  </b>
                  <span
                    className={`mt-3 block text-[11.5px] leading-tight ${
                      i === 0 ? 'text-white/80' : 'text-slate-400'
                    }`}
                  >
                    {s.label}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

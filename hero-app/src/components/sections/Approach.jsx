import { Zap, Users, CheckCircle2 } from 'lucide-react'
import Reveal from '../Reveal.jsx'
import CountUp from '../CountUp.jsx'
import { SectionHead, tile, tileAccent, accentGradient, Bloom } from './_shared.jsx'

export default function Approach() {
  return (
    <section
      id="approach"
      className="relative overflow-hidden bg-[#F6F3FD] py-28"
    >
      <Bloom className="-right-40 top-20" color="rgba(138,107,240,0.10)" size={620} />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <Reveal>
          <SectionHead
            eyebrow="Our Approach"
            title="The right platforms. The right people."
            accent="The pedigree to deliver."
            sub="Practitioners who've spent careers inside banking — who understand what a regulated institution needs before it's fully articulated in a brief."
          />
        </Reveal>

        {/* Bento: big feature tile (left) + two stacked stat tiles (right) */}
        <div className="mt-14 grid gap-4 lg:grid-cols-12">
          {/* Feature — Platforms */}
          <Reveal className="lg:col-span-7" delay={0}>
            <div className={`flex h-full flex-col p-9 ${tile}`}>
              <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-violet-core/[0.06] blur-2xl transition-transform duration-500 group-hover:scale-125" />
              <div className="relative flex items-start justify-between">
                <div className="grid h-14 w-14 place-items-center rounded-2xl border border-violet-core/15 bg-violet-core/[0.07] text-violet-core">
                  <Zap className="h-7 w-7" strokeWidth={1.7} />
                </div>
                <span className="font-mono text-[11px] uppercase tracking-[1px] text-slate-400">
                  01 — Platforms
                </span>
              </div>
              <h3 className="relative mt-7 text-[28px] font-bold leading-[1.1] tracking-[-0.8px] text-slate-900">
                Built from first principles.
              </h3>
              <p className="relative mt-3 max-w-md text-[15px] leading-relaxed text-slate-500">
                Tachyon, Cipher, and Neutrino — three cloud-native platforms built
                from scratch, not adapted from legacy. Purpose-built for the scale
                and compliance of modern banking.
              </p>
              <div className="relative mt-auto flex flex-wrap items-end justify-between gap-6 pt-8">
                <div>
                  <div className="text-[64px] font-bold leading-none tracking-[-3px] text-slate-900">
                    <CountUp end={3} />
                  </div>
                  <div className="mt-2 text-[13px] text-slate-400">
                    Proprietary platforms. Cloud-native, API-first, certified.
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Tachyon', 'Cipher', 'Neutrino'].map((p) => (
                    <span
                      key={p}
                      className="rounded-full border border-violet-core/15 bg-violet-core/[0.05] px-3.5 py-2 font-mono text-[12px] text-violet-core"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right column — two stacked tiles */}
          <div className="grid gap-4 lg:col-span-5 lg:grid-rows-2">
            <Reveal delay={0.08}>
              <div className={`flex h-full flex-col justify-between p-8 ${tile}`}>
                <div className="flex items-start justify-between">
                  <div className="grid h-12 w-12 place-items-center rounded-xl border border-violet-core/15 bg-violet-core/[0.07] text-violet-core">
                    <Users className="h-6 w-6" strokeWidth={1.7} />
                  </div>
                  <span className="font-mono text-[11px] uppercase tracking-[1px] text-slate-400">
                    02 — People
                  </span>
                </div>
                <div className="mt-6">
                  <h3 className="text-[20px] font-bold tracking-[-0.4px] text-slate-900">
                    Domain experts, not generalists.
                  </h3>
                  <div className="mt-3 flex items-baseline gap-3">
                    <span className="text-[40px] font-bold leading-none tracking-[-1.5px] text-slate-900">
                      <CountUp end={1700} suffix="+" />
                    </span>
                    <span className="text-[13px] text-slate-400">
                      practitioners across banking, product & technology.
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Accent tile — Implementation */}
            <Reveal delay={0.16}>
              <div className={`flex h-full flex-col justify-between p-8 ${tileAccent}`} style={{ background: accentGradient }}>
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 opacity-20"
                  style={{
                    backgroundImage:
                      'radial-gradient(circle at 80% 10%, rgba(255,255,255,0.5), transparent 45%)',
                  }}
                />
                <div className="relative flex items-start justify-between">
                  <div className="grid h-12 w-12 place-items-center rounded-xl border border-white/25 bg-white/15 text-white">
                    <CheckCircle2 className="h-6 w-6" strokeWidth={1.8} />
                  </div>
                  <span className="font-mono text-[11px] uppercase tracking-[1px] text-white/70">
                    03 — Implementation
                  </span>
                </div>
                <div className="relative mt-6">
                  <h3 className="text-[20px] font-bold tracking-[-0.4px] text-white">
                    A methodology built to deliver.
                  </h3>
                  <div className="mt-3 flex items-baseline gap-3">
                    <span className="text-[40px] font-bold leading-none tracking-[-1.5px] text-white">
                      <CountUp end={25} suffix="M+" />
                    </span>
                    <span className="text-[13px] text-white/75">
                      cards live in production, across 7 countries.
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

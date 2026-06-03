import { Zap, ShieldCheck, Radio, ArrowRight } from 'lucide-react'
import Reveal from '../Reveal.jsx'
import { SectionHead, tile, tileDark, Bloom } from './_shared.jsx'

export default function Platforms() {
  return (
    <section
      id="platforms"
      className="relative overflow-hidden bg-[#0C0A16] py-28"
    >
      <Bloom className="left-1/2 -top-20 -translate-x-1/2" color="rgba(123,82,224,0.30)" size={760} />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2.5 font-mono text-[12px] font-medium uppercase tracking-[1.5px] text-violet-soft">
              <span className="h-px w-6 bg-violet-soft/60" />
              Platform IP
            </span>
            <h2 className="mt-4 text-[clamp(32px,4.4vw,52px)] font-bold leading-[1.06] tracking-[-1.5px] text-white">
              Our own IP —{' '}
              <span className="bg-gradient-to-br from-[#E2D7FF] to-[#8A6BF0] bg-clip-text font-serif italic text-transparent">
                engineered, not licensed.
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[17px] leading-relaxed text-white/55">
              Three purpose-built platforms forming the foundation of everything we
              deliver — proprietary technology, built from first principles.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-4 lg:grid-cols-12">
          {/* Featured — Tachyon */}
          <Reveal className="lg:col-span-7" delay={0}>
            <div className={`flex h-full flex-col p-9 ${tileDark}`}>
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-violet-core/20 blur-3xl" />
              <div className="relative flex items-center justify-between">
                <div className="grid h-14 w-14 place-items-center rounded-2xl border border-white/10 bg-white/[0.04] text-violet-soft">
                  <Zap className="h-7 w-7" strokeWidth={1.7} />
                </div>
                <span className="rounded-full border border-white/10 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.8px] text-white/55">
                  01 / Processing
                </span>
              </div>
              <div className="relative mt-7">
                <div className="text-[30px] font-bold tracking-[-0.8px] text-white">Tachyon</div>
                <div className="font-mono text-[11px] uppercase tracking-[0.5px] text-violet-soft">
                  Transaction Processing Engine
                </div>
              </div>
              <p className="relative mt-4 max-w-md text-[15px] leading-relaxed text-white/60">
                Cloud-native, real-time processing built for velocity, variability,
                and volume — designed from first principles, not adapted from legacy.
              </p>

              {/* mini visual — latency KPIs */}
              <div className="relative mt-7 grid grid-cols-3 gap-3">
                {[
                  ['Response', '<100', 'ms'],
                  ['Throughput', '1M+', '/s'],
                  ['Uptime', '99.99', '%'],
                ].map(([l, v, u]) => (
                  <div key={l} className="rounded-2xl border border-white/[0.07] bg-white/[0.03] p-4">
                    <div className="font-mono text-[10px] uppercase tracking-[0.5px] text-white/40">{l}</div>
                    <div className="mt-2 text-[22px] font-bold tracking-[-1px] text-white">
                      {v}
                      <span className="ml-0.5 text-[12px] text-violet-soft">{u}</span>
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="#"
                className="relative mt-7 inline-flex items-center gap-2 text-[14px] font-semibold text-violet-soft transition-all duration-200 hover:gap-3"
              >
                Learn about Tachyon <ArrowRight className="h-4 w-4" strokeWidth={2} />
              </a>
            </div>
          </Reveal>

          {/* Right column — Cipher + Neutrino */}
          <div className="grid gap-4 lg:col-span-5 lg:grid-rows-2">
            {[
              {
                icon: ShieldCheck,
                tag: '02 / Security',
                name: 'Cipher',
                role: 'Identity, Security & Compliance',
                desc: 'A unified security layer abstracting regulatory complexity — PCI-DSS, RBI, and beyond.',
                caps: ['KYC / KYB / AML', 'Multi-market', 'Tokenisation'],
              },
              {
                icon: Radio,
                tag: '03 / Engagement',
                name: 'Neutrino',
                role: 'Digital Engagement Platform',
                desc: 'An omni-channel experience layer with a unified intelligence foundation and knowledge ontology.',
                caps: ['Omni-channel', 'Intelligence layer', 'Context-aware'],
              },
            ].map((p, i) => {
              const Icon = p.icon
              return (
                <Reveal key={p.name} delay={0.08 + i * 0.08}>
                  <div className={`flex h-full flex-col p-7 ${tileDark}`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-violet-soft">
                          <Icon className="h-[20px] w-[20px]" strokeWidth={1.7} />
                        </div>
                        <div>
                          <div className="text-[20px] font-bold tracking-[-0.5px] text-white">
                            {p.name}
                          </div>
                          <div className="font-mono text-[10px] uppercase tracking-[0.4px] text-violet-soft">
                            {p.role}
                          </div>
                        </div>
                      </div>
                      <span className="font-mono text-[10px] uppercase tracking-[0.6px] text-white/40">
                        {p.tag}
                      </span>
                    </div>
                    <p className="mt-4 text-[14px] leading-relaxed text-white/60">{p.desc}</p>
                    <div className="mt-auto flex flex-wrap gap-2 pt-5">
                      {p.caps.map((c) => (
                        <span
                          key={c}
                          className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-[10.5px] text-white/55"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

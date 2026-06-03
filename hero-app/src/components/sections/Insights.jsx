import { ArrowRight, ArrowUpRight } from 'lucide-react'
import Reveal from '../Reveal.jsx'
import { SectionHead, tile, tileAccent, accentGradient, Bloom } from './_shared.jsx'

export default function Insights() {
  return (
    <section id="insights" className="relative overflow-hidden bg-[#F6F3FD] py-28">
      <Bloom className="-right-28 top-16" color="rgba(200,184,245,0.16)" size={520} />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHead eyebrow="Resources" title="What we're" accent="thinking about." />
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full border border-violet-core/20 px-5 py-2.5 text-[14px] font-semibold text-violet-core transition-colors duration-200 hover:bg-violet-core/[0.06]"
            >
              View all resources <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </a>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-4 lg:grid-cols-12">
          {/* Featured — accent */}
          <Reveal className="lg:col-span-7" delay={0}>
            <a
              href="#"
              className={`flex h-full flex-col justify-between p-9 ${tileAccent}`}
              style={{ background: accentGradient }}
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    'radial-gradient(circle at 85% 0%, rgba(255,255,255,0.55), transparent 50%)',
                }}
              />
              <div className="relative flex items-center justify-between">
                <span className="rounded-full border border-white/25 bg-white/15 px-3 py-1.5 font-mono text-[10.5px] uppercase tracking-[0.8px] text-white">
                  White Paper
                </span>
                <ArrowUpRight className="h-6 w-6 text-white/80 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
              <div className="relative mt-16">
                <h3 className="text-[30px] font-bold leading-[1.15] tracking-[-1px] text-white">
                  Shattering the Co-Brand Glass Ceiling
                </h3>
                <p className="mt-4 max-w-md text-[15px] leading-relaxed text-white/80">
                  15 strategic plays for co-brand programme success — and why legacy
                  architecture is the real ceiling holding banks back.
                </p>
              </div>
            </a>
          </Reveal>

          {/* Two supporting tiles */}
          <div className="grid gap-4 lg:col-span-5 lg:grid-rows-2">
            {[
              {
                type: 'eBook',
                title: 'Reimagining UPI for Banks: 10 Winning Ideas',
                body: 'A product-led guide to capture the next wave of UPI growth.',
              },
              {
                type: 'White Paper',
                title: 'The $1 Trillion Credit Line on UPI Opportunity',
                body: 'A launch playbook for banks ready to move from pilot to scale.',
              },
            ].map((p, i) => (
              <Reveal key={p.title} delay={0.08 + i * 0.08}>
                <a href="#" className={`flex h-full flex-col p-7 ${tile}`}>
                  <div className="flex items-center justify-between">
                    <span className="rounded-full border border-violet-core/15 bg-violet-core/[0.06] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.8px] text-violet-core">
                      {p.type}
                    </span>
                    <ArrowUpRight className="h-5 w-5 text-violet-core/50 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                  <h3 className="mt-4 text-[18px] font-bold leading-snug tracking-[-0.4px] text-slate-900">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-slate-500">{p.body}</p>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

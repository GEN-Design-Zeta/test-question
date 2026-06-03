import { ArrowRight } from 'lucide-react'
import Reveal from '../Reveal.jsx'
import { SectionHead, lightCard, Bloom } from './_shared.jsx'

const POSTS = [
  {
    type: 'White Paper',
    title: 'Shattering the Co-Brand Glass Ceiling',
    body: '15 strategic plays for co-brand programme success — and why legacy architecture is the real ceiling.',
    cta: 'Read the paper',
  },
  {
    type: 'eBook',
    title: 'Reimagining UPI for Banks: 10 Winning Ideas',
    body: 'A product-led guide for banks to capture the next wave of UPI growth.',
    cta: 'Download the guide',
  },
  {
    type: 'White Paper',
    title: 'The $1 Trillion Credit Line on UPI Opportunity',
    body: 'A definitive launch playbook for banks ready to move from pilot to scale.',
    cta: 'Get the playbook',
  },
]

export default function Insights() {
  return (
    <section
      id="insights"
      className="relative overflow-hidden bg-gradient-to-b from-[#F4EEFC] to-[#FBF9FF] py-28"
    >
      {/* fade in from the dark infrastructure band */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#0B0A12] to-transparent"
      />
      <Bloom className="-right-28 top-16" color="rgba(200,184,245,0.16)" size={520} />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <Reveal>
          <SectionHead eyebrow="Resources" title="What we're" accent="thinking about." />
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {POSTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <a
                href="#"
                className={`group flex h-full min-h-[230px] flex-col p-8 ${lightCard}`}
              >
                <span className="mb-5 self-start rounded-full border border-violet-core/15 bg-violet-core/[0.08] px-3 py-1.5 font-mono text-[10.5px] uppercase tracking-[0.8px] text-violet-core">
                  {p.type}
                </span>
                <h3 className="mb-3 text-[19px] font-bold leading-snug tracking-[-0.4px] text-slate-900">
                  {p.title}
                </h3>
                <p className="flex-1 text-[14px] leading-relaxed text-slate-500">
                  {p.body}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-[13.5px] font-semibold text-violet-core transition-all duration-200 group-hover:gap-3">
                  {p.cta} <ArrowRight className="h-4 w-4" strokeWidth={2} />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

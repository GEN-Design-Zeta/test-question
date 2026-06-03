import { Zap, Users, CheckCircle2 } from 'lucide-react'
import Reveal from '../Reveal.jsx'
import CountUp from '../CountUp.jsx'
import { SectionHead, lightCard } from './_shared.jsx'

const CARDS = [
  {
    icon: Zap,
    no: '01 — Platforms',
    title: 'Built from first principles.',
    body: 'Tachyon, Cipher, and Neutrino — three cloud-native platforms built from scratch, not adapted from legacy. Purpose-built for the scale and compliance of modern banking.',
    stat: { end: 3, suffix: '', label: 'Proprietary platforms. Cloud-native, API-first, certified.' },
  },
  {
    icon: Users,
    no: '02 — People',
    title: 'Domain experts, not generalists.',
    body: "Banking practitioners who've built programmes inside financial institutions. They recognise the real problem before it's been fully articulated in a brief.",
    stat: { end: 1700, suffix: '+', label: 'Practitioners across banking, product, and technology.' },
  },
  {
    icon: CheckCircle2,
    no: '03 — Implementation',
    title: 'A methodology built to deliver.',
    body: 'The operating model and compliance framework to take complex programmes live inside regulated environments. On schedule, without exception.',
    stat: { end: 25, suffix: 'M+', label: 'Cards live in production, across 7 countries.' },
  },
]

export default function Approach() {
  return (
    <section id="approach" className="bg-[#F8F7FD] py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <Reveal>
          <SectionHead
            eyebrow="Our Approach"
            title="The right platforms. The right people."
            accent="The pedigree to deliver."
            sub="Practitioners who've spent careers inside banking — who understand what a regulated institution needs before it's fully articulated in a brief."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {CARDS.map((c, i) => {
            const Icon = c.icon
            return (
              <Reveal key={c.no} delay={i * 0.08}>
                <div className={`flex h-full flex-col p-8 ${lightCard}`}>
                  <div className="mb-5 grid h-[50px] w-[50px] place-items-center rounded-[14px] border border-violet-core/20 bg-violet-core/[0.08] text-violet-core">
                    <Icon className="h-6 w-6" strokeWidth={1.8} />
                  </div>
                  <div className="mb-2.5 font-mono text-[11px] uppercase tracking-[1px] text-slate-400">
                    {c.no}
                  </div>
                  <h3 className="mb-3 text-[21px] font-bold tracking-[-0.5px] text-slate-900">
                    {c.title}
                  </h3>
                  <p className="mb-6 text-[14.5px] leading-relaxed text-slate-500">
                    {c.body}
                  </p>
                  <div className="mt-auto border-t border-violet-core/10 pt-5">
                    <b className="block text-[34px] font-bold leading-none tracking-[-1px] text-slate-900">
                      <CountUp end={c.stat.end} suffix={c.stat.suffix} />
                    </b>
                    <span className="mt-2 block text-[12.5px] text-slate-400">
                      {c.stat.label}
                    </span>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

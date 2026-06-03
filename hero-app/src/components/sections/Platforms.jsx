import { Zap, ShieldCheck, Radio, ArrowRight } from 'lucide-react'
import Reveal from '../Reveal.jsx'
import { SectionHead, lightCard } from './_shared.jsx'

const PLATFORMS = [
  {
    icon: Zap,
    tag: '01 / Processing',
    name: 'Tachyon',
    role: 'Transaction Processing Engine',
    desc: 'Cloud-native, real-time processing built for velocity, variability, and volume — designed from first principles, not adapted from legacy.',
    caps: [
      'Sub-100ms response on every consumer action',
      'Configurable reward & offer logic at transaction time',
      'Multi-tenancy for co-brand and white-label programmes',
    ],
  },
  {
    icon: ShieldCheck,
    tag: '02 / Security',
    name: 'Cipher',
    role: 'Identity, Security & Compliance',
    desc: 'A unified security layer abstracting regulatory complexity — PCI-DSS, RBI, and beyond — without bespoke engineering for each market.',
    caps: [
      'KYC, KYB, and AML built in',
      'Multi-market regulatory framework',
      'Fraud detection and tokenisation',
    ],
  },
  {
    icon: Radio,
    tag: '03 / Engagement',
    name: 'Neutrino',
    role: 'Digital Engagement Platform',
    desc: 'An omni-channel experience layer with a unified intelligence foundation and its own knowledge ontology — context-aware banking across every touchpoint.',
    caps: [
      'Omni-channel digital experiences',
      'Common intelligence layer & knowledge ontology',
      'Personalised, context-aware banking',
    ],
  },
]

export default function Platforms() {
  return (
    <section id="platforms" className="border-t border-violet-core/10 bg-[#F0EEF9] py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <Reveal>
          <SectionHead
            center
            eyebrow="Platform IP"
            title="Our own IP —"
            accent="engineered, not licensed."
            sub="Three purpose-built platforms forming the foundation of everything we deliver. Not licensed middleware — proprietary technology, built from first principles."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {PLATFORMS.map((p, i) => {
            const Icon = p.icon
            return (
              <Reveal key={p.name} delay={i * 0.08}>
                <div className={`group flex h-full flex-col p-8 ${lightCard}`}>
                  <div className="mb-6 flex items-center justify-between">
                    <div className="grid h-12 w-12 place-items-center rounded-[13px] border border-violet-core/20 bg-violet-core/[0.07] text-violet-core transition-transform duration-300 group-hover:-translate-y-0.5">
                      <Icon className="h-[22px] w-[22px]" strokeWidth={1.7} />
                    </div>
                    <span className="rounded-full border border-violet-core/15 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.8px] text-slate-400">
                      {p.tag}
                    </span>
                  </div>
                  <div className="text-[26px] font-bold tracking-[-0.6px] text-slate-900">
                    {p.name}
                  </div>
                  <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.5px] text-violet-core">
                    {p.role}
                  </div>
                  <p className="mb-6 text-[14.5px] leading-relaxed text-slate-500">
                    {p.desc}
                  </p>
                  <ul className="mb-6 flex-1 list-none">
                    {p.caps.map((cap) => (
                      <li
                        key={cap}
                        className="relative border-t border-violet-core/10 py-2.5 pl-5 text-[13.5px] leading-snug text-slate-500"
                      >
                        <span className="absolute left-0 top-[15px] h-[7px] w-[7px] rounded-full bg-violet-bright shadow-[0_0_8px_rgba(138,107,240,0.5)]" />
                        {cap}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-[14px] font-semibold text-violet-core transition-all duration-200 hover:gap-3"
                  >
                    Learn about {p.name} <ArrowRight className="h-4 w-4" strokeWidth={2} />
                  </a>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

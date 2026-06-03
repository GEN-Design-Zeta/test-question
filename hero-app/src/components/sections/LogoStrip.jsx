import Reveal from '../Reveal.jsx'

const LOGOS = ['HDFC Bank', 'PayZapp', 'Mastercard', 'Visa', 'RuPay', 'NPCI']

export default function LogoStrip() {
  return (
    <section className="relative bg-[#F6F3FD] py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <Reveal>
          <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-center lg:gap-12">
            <p className="max-w-[220px] flex-shrink-0 text-center font-mono text-[11.5px] uppercase leading-relaxed tracking-[1.5px] text-slate-400 lg:text-left">
              Powering banking for the institutions people trust
            </p>
            <div className="hidden h-10 w-px flex-shrink-0 bg-violet-core/15 lg:block" />
            <div className="flex flex-1 flex-wrap items-center justify-center gap-x-10 gap-y-5 lg:justify-between">
              {LOGOS.map((name) => (
                <span
                  key={name}
                  className="text-[18px] font-semibold tracking-[-0.3px] text-slate-400/90 transition-colors duration-200 hover:text-violet-core"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

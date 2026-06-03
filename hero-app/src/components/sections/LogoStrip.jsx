import Reveal from '../Reveal.jsx'

const LOGOS = ['HDFC Bank', 'PayZapp', 'Mastercard', 'Visa', 'RuPay', 'NPCI']

export default function LogoStrip() {
  return (
    <section className="border-y border-violet-core/10 bg-[#F8F7FD] py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <Reveal>
          <p className="text-center font-mono text-[11.5px] uppercase tracking-[1.5px] text-slate-400">
            Powering banking for the institutions people trust
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-12 gap-y-5">
            {LOGOS.map((name) => (
              <span
                key={name}
                className="text-[19px] font-semibold tracking-[-0.3px] text-slate-400 transition-colors duration-200 hover:text-violet-core"
              >
                {name}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

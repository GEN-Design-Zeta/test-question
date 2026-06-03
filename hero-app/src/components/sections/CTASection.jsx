import { ArrowRight } from 'lucide-react'
import Reveal from '../Reveal.jsx'

export default function CTASection() {
  return (
    <section id="contact" className="relative overflow-hidden bg-[#070612] py-28">
      {/* fade in from the light insights section */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#FBF9FF] to-transparent"
      />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <Reveal>
          <div className="relative overflow-hidden rounded-[28px] border border-white/[0.12] bg-[linear-gradient(180deg,rgba(138,107,240,0.16),rgba(255,255,255,0.02))] px-6 py-20 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.07)] md:px-12">
            <div className="pointer-events-none absolute left-1/2 top-[-40%] h-[500px] w-[700px] -translate-x-1/2 bg-[radial-gradient(ellipse,rgba(138,107,240,0.4),transparent_65%)] blur-[70px]" />
            <h2 className="relative z-10 text-[clamp(34px,5vw,62px)] font-bold leading-[1.04] tracking-[-2px] text-white">
              Tell us the problem.
              <br />
              We'll show you{' '}
              <span className="bg-gradient-to-br from-[#E2D7FF] to-[#7C5CE8] bg-clip-text font-serif italic text-transparent">
                what's possible.
              </span>
            </h2>
            <p className="relative z-10 mx-auto mt-5 max-w-md text-[18px] leading-snug text-white/65">
              We don't do generic demos. Every conversation starts with the
              specific outcome you're trying to achieve.
            </p>
            <div className="relative z-10 mt-8 flex flex-wrap justify-center gap-3.5">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-[15px] font-semibold text-[#160F2B] transition-transform duration-200 hover:-translate-y-0.5"
                style={{
                  background:
                    'linear-gradient(135deg, #E2D7FF 0%, #A98CF2 55%, #7C5CE8 100%)',
                  boxShadow: '0 12px 34px -12px rgba(138,107,240,0.6)',
                }}
              >
                Talk to our team <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
              </a>
              <a
                href="#proof"
                className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-6 py-3.5 text-[15px] font-semibold text-white backdrop-blur-sm transition-colors duration-200 hover:bg-white/20"
              >
                See our work first
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

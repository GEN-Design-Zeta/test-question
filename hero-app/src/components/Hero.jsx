import { ArrowRight, Sparkles } from 'lucide-react'
import Navigation from './Navigation.jsx'
import BackgroundVideo from './BackgroundVideo.jsx'
import HeroMotion from './HeroMotion.jsx'
import BlurIn from './BlurIn.jsx'
import SplitText from './SplitText.jsx'

const HEADLINE_LINES = [
  ['We', 'solve', 'the'],
  [{ text: 'hardest', emphasis: true }],
  ['problems', 'in', 'banking.'],
]

export default function Hero() {
  return (
    <section
      id="top"
      className="relative h-screen w-full overflow-hidden"
      style={{ backgroundColor: '#070612' }}
    >
      {/* ── Navigation (z-50) ── */}
      <Navigation />

      {/* ── Layer 0 · Background video ── */}
      <BackgroundVideo />

      {/* ── Layer 1 · Purple video overlay (readability + glow) ── */}
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{ background: 'rgba(7, 6, 18, 0.68)' }}
      />
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            'radial-gradient(circle at center, rgba(7,6,18,0.78) 0%, rgba(7,6,18,0.58) 35%, rgba(7,6,18,0.85) 100%)',
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            'radial-gradient(circle at center, rgba(123,82,224,0.32), transparent 48%)',
        }}
      />
      {/* Extra darkening on small screens for legibility */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-black/25 md:hidden" />

      {/* ── Centered content stack ── */}
      <div className="relative z-20 flex h-full items-center justify-center">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-12">
          {/* hero-motion-wrapper: motion (z-10) frames the copy (z-20) */}
          <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-12 text-center">
            <HeroMotion />

            {/* Copy group (badge + heading + subtitle) */}
            <div className="relative z-20 flex flex-col items-center gap-6">
              {/* Badge */}
              <BlurIn delay={0} duration={0.6}>
                <span
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-1.5 text-[12.5px] font-medium text-white/80 backdrop-blur-sm"
                  style={{ background: 'rgba(255,255,255,0.06)' }}
                >
                  <Sparkles className="h-3.5 w-3.5 text-violet-soft" strokeWidth={2} />
                  Platform-Led Banking Technology
                </span>
              </BlurIn>

              {/* Heading */}
              <SplitText
                lines={HEADLINE_LINES}
                stagger={0.08}
                duration={0.6}
                delay={0.15}
                className="text-balance text-4xl font-semibold leading-tight tracking-[-0.02em] text-white md:text-5xl lg:text-6xl lg:leading-[1.08] xl:text-7xl"
                emphasisClassName="bg-gradient-to-br from-[#E2D7FF] via-[#A98CF2] to-[#7C5CE8] bg-clip-text font-serif italic text-transparent"
              />

              {/* Subtitle */}
              <BlurIn delay={0.4} duration={0.6}>
                <p className="mx-auto max-w-2xl text-lg font-normal leading-relaxed text-white/75 md:text-xl">
                  Zeta helps financial institutions build and scale what others
                  won't take on. Through proprietary platforms, deep domain
                  expertise, and a track record of complex delivery.
                </p>
              </BlurIn>
            </div>

            {/* CTA buttons */}
            <BlurIn delay={0.6} duration={0.6} className="relative z-20">
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href="#approach"
                  className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-[15px] font-semibold text-[#160F2B] transition-transform duration-200 hover:-translate-y-0.5"
                  style={{
                    background:
                      'linear-gradient(135deg, #F2ECFF 0%, #C8B8F5 55%, #8A6BF0 100%)',
                    boxShadow: '0 12px 34px -12px rgba(138,107,240,0.65)',
                  }}
                >
                  See how we work
                  <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
                </a>
                <a
                  href="#proof"
                  className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-8 py-3 text-[15px] font-semibold text-white backdrop-blur-sm transition-colors duration-200 hover:bg-white/20"
                >
                  View case studies
                </a>
              </div>
            </BlurIn>
          </div>
        </div>
      </div>

      {/* ── Layer 10 · Bottom fade gradient ── */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-40"
        style={{
          background:
            'linear-gradient(to top, #070612 0%, rgba(7,6,18,0) 100%)',
        }}
      />
    </section>
  )
}

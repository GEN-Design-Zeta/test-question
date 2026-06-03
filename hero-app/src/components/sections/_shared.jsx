/* Small presentational helpers shared across the light content sections. */

export function Eyebrow({ children, className = '' }) {
  return (
    <span
      className={`inline-flex items-center gap-2.5 font-mono text-[12px] font-medium uppercase tracking-[1.5px] text-violet-core ${className}`}
    >
      <span className="h-px w-6 bg-violet-core/60" />
      {children}
    </span>
  )
}

/**
 * SectionHead — eyebrow + h2 (+ optional sub). `accent` is wrapped in a
 * lavender gradient. Pass `center` to center the block.
 */
export function SectionHead({ eyebrow, title, accent, sub, center = false }) {
  return (
    <div
      className={`max-w-2xl ${center ? 'mx-auto text-center' : ''}`}
    >
      <Eyebrow className={center ? 'justify-center' : ''}>{eyebrow}</Eyebrow>
      <h2 className="mt-4 text-[clamp(32px,4.4vw,52px)] font-bold leading-[1.06] tracking-[-1.5px] text-slate-900">
        {title}{' '}
        {accent && (
          <span className="bg-gradient-to-br from-[#A98CF2] to-[#7C5CE8] bg-clip-text font-serif italic text-transparent">
            {accent}
          </span>
        )}
      </h2>
      {sub && (
        <p className={`mt-4 text-[17px] leading-relaxed text-slate-500 ${center ? 'mx-auto' : ''} max-w-xl`}>
          {sub}
        </p>
      )}
    </div>
  )
}

/* Light card — soft white-to-lavender surface with a gentle lift on hover. */
export const lightCard =
  'rounded-[22px] border border-white bg-gradient-to-b from-white to-[#FBF9FF] shadow-[0_1px_2px_rgba(80,50,180,0.04),0_14px_44px_-14px_rgba(80,50,180,0.13)] ring-1 ring-violet-core/[0.06] transition-all duration-300 hover:-translate-y-1.5 hover:ring-violet-bright/25 hover:shadow-[0_22px_56px_-14px_rgba(80,50,180,0.22)]'

/* ── Bento tiles ── larger radius, generous, modern. */
// Light bento tile (white surface)
export const tile =
  'group relative overflow-hidden rounded-[26px] border border-white bg-white ring-1 ring-violet-core/[0.07] shadow-[0_1px_2px_rgba(80,50,180,0.04),0_18px_50px_-18px_rgba(80,50,180,0.16)] transition-all duration-300 hover:ring-violet-bright/30 hover:shadow-[0_26px_60px_-18px_rgba(80,50,180,0.24)]'

// Filled accent tile (violet gradient, light text)
export const tileAccent =
  'group relative overflow-hidden rounded-[26px] text-white shadow-[0_20px_60px_-20px_rgba(106,75,214,0.6)] transition-all duration-300 hover:shadow-[0_30px_70px_-20px_rgba(106,75,214,0.7)]'

// Dark bento tile (for dark sections)
export const tileDark =
  'group relative overflow-hidden rounded-[26px] border border-white/[0.08] bg-white/[0.03] ring-1 ring-white/[0.04] transition-all duration-300 hover:border-violet-bright/30 hover:bg-white/[0.05]'

export const accentGradient =
  'linear-gradient(150deg, #5A38C8 0%, #7C5CE8 45%, #9F86F2 100%)'

/* Decorative soft radial bloom for adding depth to light sections. */
export function Bloom({ className = '', color = 'rgba(138,107,240,0.12)', size = 520 }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute rounded-full ${className}`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color}, transparent 70%)`,
        filter: 'blur(60px)',
      }}
    />
  )
}

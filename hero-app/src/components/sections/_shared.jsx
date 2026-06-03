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

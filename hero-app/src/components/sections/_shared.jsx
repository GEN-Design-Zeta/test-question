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

/* Light glass card — white surface with a soft lavender shadow. */
export const lightCard =
  'rounded-[18px] border border-violet-core/[0.13] bg-white shadow-[0_2px_8px_rgba(70,40,180,0.05),0_8px_28px_rgba(70,40,180,0.05)] transition-all duration-300 hover:-translate-y-1.5 hover:border-violet-bright/40 hover:shadow-[0_6px_18px_rgba(70,40,180,0.1),0_28px_56px_rgba(70,40,180,0.09)]'

import { motion, useReducedMotion } from 'framer-motion'

/**
 * HeroMotion — the premium purple energy that orbits the hero copy.
 * Sits at z-10, inside the centered content wrapper, so the motion
 * frames the headline rather than washing the whole page. The very
 * center is kept clear (radial mask) so words stay readable.
 *
 * pointer-events-none throughout; respects prefers-reduced-motion.
 */
export default function HeroMotion() {
  const reduce = useReducedMotion()

  // When reduced motion is requested, render a calm static glow only.
  if (reduce) {
    return (
      <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
        <div
          className="h-[420px] w-[680px] max-w-[120%] rounded-full opacity-60"
          style={{
            background:
              'radial-gradient(circle, rgba(123,82,224,0.30), transparent 60%)',
            filter: 'blur(40px)',
          }}
        />
      </div>
    )
  }

  return (
    <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        {/* ── Pulsing radial glow directly behind the headline ── */}
        <motion.div
          className="absolute h-[440px] w-[720px] max-w-[130%] rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(123,82,224,0.32), transparent 48%)',
            filter: 'blur(36px)',
          }}
          animate={{ opacity: [0.35, 0.7, 0.35], scale: [0.96, 1.04, 0.96] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* ── Slow rotating ring — wide, thin lavender orbit ── */}
        <motion.div
          className="absolute rounded-full border"
          style={{
            width: 'min(860px, 92vw)',
            height: 'min(860px, 92vw)',
            borderColor: 'rgba(200,184,245,0.10)',
            maskImage:
              'radial-gradient(circle, transparent 38%, #000 62%)',
            WebkitMaskImage:
              'radial-gradient(circle, transparent 38%, #000 62%)',
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        >
          {/* a brighter arc segment riding the ring */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              border: '1px solid transparent',
              background:
                'conic-gradient(from 0deg, transparent 0deg, rgba(138,107,240,0.55) 40deg, transparent 90deg)',
              WebkitMask:
                'radial-gradient(farthest-side, transparent calc(100% - 2px), #000 calc(100% - 1px))',
              mask: 'radial-gradient(farthest-side, transparent calc(100% - 2px), #000 calc(100% - 1px))',
            }}
          />
        </motion.div>

        {/* ── Second counter-rotating ring, tighter ── */}
        <motion.div
          className="absolute rounded-full border"
          style={{
            width: 'min(620px, 74vw)',
            height: 'min(620px, 74vw)',
            borderColor: 'rgba(123,82,224,0.16)',
            maskImage:
              'radial-gradient(circle, transparent 30%, #000 70%)',
            WebkitMaskImage:
              'radial-gradient(circle, transparent 30%, #000 70%)',
          }}
          animate={{ rotate: -360 }}
          transition={{ duration: 44, repeat: Infinity, ease: 'linear' }}
        >
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background:
                'conic-gradient(from 180deg, transparent 0deg, rgba(200,184,245,0.45) 28deg, transparent 70deg)',
              WebkitMask:
                'radial-gradient(farthest-side, transparent calc(100% - 2px), #000 calc(100% - 1px))',
              mask: 'radial-gradient(farthest-side, transparent calc(100% - 2px), #000 calc(100% - 1px))',
            }}
          />
        </motion.div>

        {/* ── Floating blurred orbs around the copy ── */}
        <FloatingOrb
          className="left-[8%] top-[26%]"
          size={170}
          color="rgba(123,82,224,0.35)"
          dx={26}
          dy={-22}
          duration={11}
        />
        <FloatingOrb
          className="right-[10%] top-[30%]"
          size={140}
          color="rgba(200,184,245,0.22)"
          dx={-24}
          dy={20}
          duration={13}
        />
        <FloatingOrb
          className="left-[16%] bottom-[20%]"
          size={120}
          color="rgba(138,107,240,0.30)"
          dx={20}
          dy={18}
          duration={14}
        />
        <FloatingOrb
          className="right-[16%] bottom-[22%]"
          size={150}
          color="rgba(123,82,224,0.28)"
          dx={-18}
          dy={-20}
          duration={12}
        />

        {/* ── Particle trails / orbiting points on the wide ring ── */}
        <OrbitDots radius={330} count={3} duration={28} />
        <OrbitDots radius={250} count={2} duration={36} reverse />
      </div>

      {/* ── Faint data-line shimmer near the text band ── */}
      <DataLines />
    </div>
  )
}

function FloatingOrb({ className = '', size, color, dx, dy, duration }) {
  return (
    <motion.div
      className={`absolute rounded-full ${className}`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color}, transparent 70%)`,
        filter: 'blur(28px)',
      }}
      animate={{
        x: [0, dx, 0],
        y: [0, dy, 0],
        opacity: [0.25, 0.6, 0.25],
        scale: [0.96, 1.04, 0.96],
      }}
      transition={{ duration, repeat: Infinity, ease: 'easeInOut' }}
    />
  )
}

/**
 * A few glowing points slowly orbiting the headline, leaving soft trails.
 */
function OrbitDots({ radius, count, duration, reverse = false }) {
  return (
    <motion.div
      className="absolute"
      style={{ width: radius * 2, height: radius * 2 }}
      animate={{ rotate: reverse ? -360 : 360 }}
      transition={{ duration, repeat: Infinity, ease: 'linear' }}
    >
      {Array.from({ length: count }).map((_, i) => {
        const angle = (i / count) * Math.PI * 2
        const x = radius + Math.cos(angle) * radius
        const y = radius + Math.sin(angle) * radius
        return (
          <motion.span
            key={i}
            className="absolute rounded-full"
            style={{
              left: x,
              top: y,
              width: 5,
              height: 5,
              background: '#C8B8F5',
              boxShadow:
                '0 0 12px rgba(200,184,245,0.9), 0 0 28px rgba(123,82,224,0.6)',
            }}
            animate={{ opacity: [0.3, 0.9, 0.3], scale: [0.8, 1.3, 0.8] }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        )
      })}
    </motion.div>
  )
}

/**
 * Thin horizontal "data lines" that drift and shimmer behind the copy band,
 * hinting at moving transaction streams. Masked to fade at the edges.
 */
function DataLines() {
  const lines = [
    { top: '34%', delay: 0, dur: 10 },
    { top: '50%', delay: 1.5, dur: 13 },
    { top: '66%', delay: 0.8, dur: 11 },
  ]
  return (
    <div
      className="absolute inset-0 hidden md:block"
      style={{
        maskImage:
          'radial-gradient(ellipse 60% 50% at 50% 50%, transparent 30%, #000 70%)',
        WebkitMaskImage:
          'radial-gradient(ellipse 60% 50% at 50% 50%, transparent 30%, #000 70%)',
      }}
    >
      {lines.map((l, i) => (
        <motion.div
          key={i}
          className="absolute left-0 right-0 h-px"
          style={{
            top: l.top,
            background:
              'linear-gradient(90deg, transparent, rgba(138,107,240,0.45), transparent)',
          }}
          animate={{ x: ['-12%', '12%', '-12%'], opacity: [0.15, 0.5, 0.15] }}
          transition={{
            duration: l.dur,
            delay: l.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

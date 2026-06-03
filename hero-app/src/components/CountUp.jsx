import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

/**
 * CountUp — animates a number from 0 to `end` when scrolled into view.
 * Supports decimals (inferred from `end`) and an optional suffix/prefix.
 */
export default function CountUp({ end, suffix = '', prefix = '', duration = 1.6 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [val, setVal] = useState(0)
  const decimals = String(end).includes('.') ? String(end).split('.')[1].length : 0

  useEffect(() => {
    if (!inView) return
    let raf
    const start = performance.now()
    const ease = (t) => 1 - Math.pow(1 - t, 3)
    const tick = (now) => {
      const t = Math.min((now - start) / (duration * 1000), 1)
      setVal(end * ease(t))
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, end, duration])

  return (
    <span ref={ref}>
      {prefix}
      {val.toLocaleString('en-US', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </span>
  )
}

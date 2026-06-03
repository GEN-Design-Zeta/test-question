import { motion } from 'framer-motion'

/**
 * Reveal — scroll-triggered entrance. Fades + lifts its children when
 * they enter the viewport. `delay` staggers siblings.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 28,
  className = '',
  as = 'div',
  once = true,
}) {
  const MotionTag = motion[as] || motion.div
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 0.68, 0.28, 1] }}
    >
      {children}
    </MotionTag>
  )
}

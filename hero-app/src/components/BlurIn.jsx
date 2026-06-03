import { motion } from 'framer-motion'

/**
 * BlurIn — fades + un-blurs + lifts its children into place.
 * Initial: opacity 0, blur(10px), y 20  →  Animate: opacity 1, blur(0), y 0
 */
export default function BlurIn({
  children,
  delay = 0,
  duration = 0.6,
  className = '',
  as = 'div',
}) {
  const MotionTag = motion[as] || motion.div
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
      animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
      transition={{ duration, delay, ease: [0.22, 0.68, 0.28, 1] }}
    >
      {children}
    </MotionTag>
  )
}

import { motion } from 'framer-motion'

const wordVariants = {
  hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

/**
 * SplitText — splits a headline into words and staggers each one in.
 *
 * Accepts `lines`: an array of lines, where each line is an array of
 * word tokens. A token is either a string or { text, emphasis: true }.
 * Emphasised words render in serif italic with a lavender gradient.
 *
 * Words animate sequentially across all lines using a shared stagger.
 */
export default function SplitText({
  lines,
  stagger = 0.08,
  duration = 0.6,
  delay = 0,
  className = '',
  emphasisClassName = '',
}) {
  let wordIndex = 0
  const label = lines
    .flat()
    .map((t) => (typeof t === 'string' ? t : t.text))
    .join(' ')

  return (
    <h1 className={className} aria-label={label}>
      {lines.map((line, li) => (
        <span key={li} className="block">
          {line.map((token, ti) => {
            const isObj = typeof token === 'object'
            const text = isObj ? token.text : token
            const emphasis = isObj && token.emphasis
            const i = wordIndex++
            return (
              <span key={ti} aria-hidden="true">
                <motion.span
                  className="inline-block will-change-[transform,filter]"
                  style={{ transformOrigin: 'bottom' }}
                  variants={wordVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{
                    duration,
                    delay: delay + i * stagger,
                    ease: [0.22, 0.68, 0.28, 1],
                  }}
                >
                  <span className={emphasis ? emphasisClassName : undefined}>{text}</span>
                </motion.span>
                {ti < line.length - 1 ? ' ' : ''}
              </span>
            )
          })}
        </span>
      ))}
    </h1>
  )
}

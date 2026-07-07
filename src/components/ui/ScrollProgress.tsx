import { memo } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

function ScrollProgressInner() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 })

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[9999] h-[2px] origin-left bg-[var(--accent)]"
      style={{ scaleX }}
    />
  )
}

export const ScrollProgress = memo(ScrollProgressInner)

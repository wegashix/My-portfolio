import { useRef, memo } from 'react'
import { motion, useInView } from 'framer-motion'

interface Props {
  children: React.ReactNode
  className?: string
  delay?: number
  id?: string
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0,
    },
  },
}

export const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

export const SectionWrapper = memo(function SectionWrapper({
  children,
  className = '',
  id,
}: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px 0px' })

  return (
    <motion.div
      ref={ref}
      id={id}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className={className}
    >
      {children}
    </motion.div>
  )
})

export const SectionLabel = memo(function SectionLabel({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <motion.p
      variants={itemVariants}
      className="mb-2.5 text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-[var(--accent)]"
    >
      {children}
    </motion.p>
  )
})

export const SectionHeading = memo(function SectionHeading({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <motion.h2
      variants={itemVariants}
      className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[var(--text)]"
    >
      {children}
    </motion.h2>
  )
})

export const SectionDescription = memo(function SectionDescription({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <motion.p
      variants={itemVariants}
      className="mt-3 sm:mt-4 max-w-2xl text-[var(--text-secondary)] text-sm sm:text-[17px] leading-relaxed sm:leading-relaxed"
    >
      {children}
    </motion.p>
  )
})

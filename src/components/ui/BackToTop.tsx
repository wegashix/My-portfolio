import { memo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import { useScrollProgress } from '@/hooks/useScrollProgress'

function BackToTopInner() {
  const { scrolled } = useScrollProgress()

  return (
    <AnimatePresence>
      {scrolled && (
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.15 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
          className={[
            'fixed bottom-5 right-5 z-50',
            'flex h-9 w-9 items-center justify-center rounded-full',
            'bg-[var(--surface)] border border-[var(--border)]',
            'text-[var(--text-secondary)] shadow-[var(--shadow-sm)]',
            'hover:text-[var(--accent)] hover:border-[var(--accent)]',
            'transition-colors duration-150',
            'active:scale-95',
          ].join(' ')}
        >
          <ArrowUp size={15} strokeWidth={2.5} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export const BackToTop = memo(BackToTopInner)

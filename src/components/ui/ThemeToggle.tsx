import { memo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from '@/hooks/useTheme'

function ThemeToggleInner() {
  const { isDark, toggle } = useTheme()

  return (
    <button
      onClick={toggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={[
        'relative flex h-8 w-8 items-center justify-center rounded-lg',
        'text-[var(--text-secondary)] hover:text-[var(--text)]',
        'hover:bg-[var(--surface)] transition-colors duration-150',
        'active:scale-90',
      ].join(' ')}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={isDark ? 'moon' : 'sun'}
          initial={{ opacity: 0, rotate: -20, scale: 0.8 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 20, scale: 0.8 }}
          transition={{ duration: 0.15 }}
          className="flex"
        >
          {isDark ? <Moon size={16} strokeWidth={2} /> : <Sun size={16} strokeWidth={2} />}
        </motion.span>
      </AnimatePresence>
    </button>
  )
}

export const ThemeToggle = memo(ThemeToggleInner)

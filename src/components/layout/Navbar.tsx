import { useState, useEffect, useCallback, memo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher'
import { useScrollProgress } from '@/hooks/useScrollProgress'
import { useActiveSection } from '@/hooks/useActiveSection'
import { useTranslation } from '@/i18n'

const navKeys = ['about', 'skills', 'projects', 'experience', 'contact'] as const

function NavbarInner() {
  const { scrolled } = useScrollProgress()
  const active = useActiveSection()
  const [menuOpen, setMenuOpen] = useState(false)
  const { t } = useTranslation()

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen)
    return () => { document.body.classList.remove('menu-open') }
  }, [menuOpen])

  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setMenuOpen(false)
  }, [])

  const navLinks = navKeys.map(key => ({
    id: key,
    label: t.nav[key],
  }))

  return (
    <>
      <header
        className={[
          'fixed top-0 left-0 right-0 z-50',
          'transition-[background-color,border-color,box-shadow] duration-200',
          scrolled
            ? 'bg-[var(--bg)]/80 backdrop-blur-md border-b border-[var(--border)] shadow-[var(--shadow-sm)]'
            : 'bg-transparent',
        ].join(' ')}
        role="banner"
      >
        <div className="mx-auto flex h-[60px] max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            className="flex items-center gap-2.5 select-none"
            aria-label="Baratov Damir — Home"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--accent)] shadow-[0_2px_6px_0_rgb(37_99_235/0.25)]">
              <span className="text-xs font-bold text-white tracking-tight">BD</span>
            </div>
            <span className="hidden font-semibold text-[var(--text)] sm:block text-sm">
              Baratov Damir
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-1" aria-label="Primary navigation">
            {navLinks.map(link => {
              const isActive = active === link.id
              return (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={[
                    'relative px-3 py-1.5 text-sm rounded-lg font-medium transition-colors duration-150',
                    isActive
                      ? 'text-[var(--accent)]'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text)] hover:bg-[var(--surface)]',
                  ].join(' ')}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-pill"
                      className="absolute inset-0 rounded-lg bg-[var(--accent-bg)]"
                      style={{ zIndex: -1 }}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              )
            })}
          </nav>

          <div className="flex items-center gap-0.5">
            <LanguageSwitcher />
            <ThemeToggle />

            <div className="hidden sm:block w-px h-4 bg-[var(--border)] mx-1" />

            <a
              href="#contact"
              onClick={e => { e.preventDefault(); scrollTo('contact') }}
              className="hidden sm:inline-flex items-center h-8 rounded-lg bg-[var(--accent)] px-3 text-xs font-semibold text-white shadow-[0_1px_2px_0_rgb(0_0_0/0.1)] hover:bg-[var(--accent-h)] transition-colors duration-150"
            >
              {t.nav.hire}
            </a>

            <button
              onClick={() => setMenuOpen(o => !o)}
              className="flex md:hidden h-9 w-9 items-center justify-center rounded-lg text-[var(--text-secondary)] hover:bg-[var(--surface)] transition-colors"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="fixed inset-0 z-30 bg-black/20 md:hidden"
              onClick={() => setMenuOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="fixed top-[60px] left-0 right-0 z-40 md:hidden bg-[var(--bg)] border-b border-[var(--border)] shadow-[var(--shadow-lg)]"
            >
              <nav className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-0.5" aria-label="Mobile navigation">
                {navLinks.map((link, i) => {
                  const isActive = active === link.id
                  return (
                    <motion.button
                      key={link.id}
                      onClick={() => scrollTo(link.id)}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04, duration: 0.2 }}
                      className={[
                        'w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors',
                        isActive
                          ? 'text-[var(--accent)] bg-[var(--accent-bg)]'
                          : 'text-[var(--text-secondary)]',
                      ].join(' ')}
                    >
                      {link.label}
                    </motion.button>
                  )
                })}
                <div className="mt-2 pt-2 border-t border-[var(--border)]">
                  <a
                    href="#contact"
                    onClick={e => { e.preventDefault(); scrollTo('contact') }}
                    className="flex w-full items-center justify-center h-10 rounded-lg bg-[var(--accent)] text-sm font-semibold text-white"
                  >
                    {t.nav.hire}
                  </a>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default memo(NavbarInner)

import { motion } from 'framer-motion'
import { Home, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { useTranslation } from '@/i18n'

export default function NotFound() {
  const { t } = useTranslation()

  return (
    <div className="flex min-h-screen items-center justify-center px-5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="max-w-md text-center"
      >
        <p className="text-xs font-semibold uppercase tracking-widest text-[var(--accent)] mb-4">
          {t.notFound.label}
        </p>
        <h1 className="text-7xl font-bold text-[var(--text)] tracking-tight">
          {t.notFound.heading}
        </h1>
        <p className="mt-4 text-[var(--text-secondary)] leading-relaxed">
          {t.notFound.description}
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button href="/">
            <Home size={15} />
            {t.notFound.home}
          </Button>
          <Button variant="secondary" onClick={() => window.history.back()}>
            <ArrowLeft size={15} />
            {t.notFound.back}
          </Button>
        </div>
      </motion.div>
    </div>
  )
}

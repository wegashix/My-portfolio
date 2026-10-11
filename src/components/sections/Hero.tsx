import { memo } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Github, Send } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { useTranslation } from '@/i18n'
import { renderBold } from '@/i18n/richText'
import portraitImage from '@/images/my-photo.jpg'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
}
const item = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
}
const photoVariant = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.4 } },
}

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function HeroInner() {
  const { t } = useTranslation()

  return (
    <section aria-label={t.hero.role} className="relative flex min-h-[100svh] items-center overflow-hidden pt-[60px]">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div
          className="absolute inset-0 opacity-[0.015] dark:opacity-[0.02]"
          style={{
            backgroundImage: 'linear-gradient(var(--text) 1px, transparent 1px), linear-gradient(90deg, var(--text) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div
          className="absolute -top-24 -right-24 h-[480px] w-[480px] rounded-full opacity-[0.05] dark:opacity-[0.03]"
          style={{ background: 'radial-gradient(circle, #2563EB 0%, transparent 70%)' }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid min-h-[calc(100svh-60px)] grid-cols-1 items-center gap-10 py-16 sm:py-20 lg:grid-cols-[1fr_380px] lg:gap-16 lg:py-0">
          <motion.div variants={container} initial="hidden" animate="visible" className="flex flex-col">
            <motion.div variants={item} className="mb-6 sm:mb-8">
              <Badge color="green" dot pulse>{t.hero.badge}</Badge>
            </motion.div>

            <motion.div variants={item} className="mb-5 sm:mb-6">
              <h1 className="font-bold leading-[1.0] tracking-[-0.04em] text-[var(--text)]">
                <span className="block text-[clamp(2.5rem,8vw,5.5rem)]">Baratov</span>
                <span className="block text-[clamp(2.5rem,8vw,5.5rem)]">
                  Damir<span className="text-[var(--accent)]">.</span>
                </span>
              </h1>
            </motion.div>

            <motion.div variants={item} className="mb-6 sm:mb-8">
              <p className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-3.5 py-1.5 text-sm font-medium text-[var(--text-secondary)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                {t.hero.role}
              </p>
            </motion.div>

            <motion.p variants={item} className="mb-8 sm:mb-10 max-w-lg text-base sm:text-[17px] leading-[1.7] text-[var(--text-secondary)]">
              {renderBold(t.hero.description)}
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap gap-3">
              <Button size="lg" onClick={() => scrollTo('projects')}>
                {t.hero.viewProjects}
                <ArrowRight size={16} strokeWidth={2.5} />
              </Button>
              <Button variant="secondary" size="lg" onClick={() => scrollTo('contact')}>
                {t.hero.contactMe}
              </Button>
            </motion.div>

            <motion.div variants={item} className="mt-8 sm:mt-10 flex items-center gap-4">
              <span className="text-xs text-[var(--text-muted)]">{t.hero.findMe}</span>
              <div className="flex items-center gap-2">
                {[
                  { icon: Github, href: 'https://github.com/wegashix', label: 'GitHub' },
                  { icon: Send, href: 'https://t.me/wegashix', label: 'Telegram' },
                ].map(({ icon: Icon, href, label }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--surface)] text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors duration-150">
                    <Icon size={15} />
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div variants={photoVariant} initial="hidden" animate="visible" className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="relative overflow-hidden rounded-[24px]"
                style={{
                  background: 'linear-gradient(var(--surface), var(--surface)) padding-box, linear-gradient(135deg, #2563EB50, #7c3aed30) border-box',
                  border: '1px solid transparent',
                  width: 'clamp(240px, 36vw, 340px)',
                  height: 'clamp(300px, 45vw, 420px)',
                }}>
                <img src={portraitImage} alt="Baratov Damir" className="h-full w-full object-cover object-[center_25%]" />
              </div>

              <div className="absolute -left-3 bottom-10 hidden sm:flex items-center gap-2 rounded-xl bg-[var(--bg)] px-3 py-2 shadow-[var(--shadow-sm)] border border-[var(--border)] animate-float-slow">
                <div className="h-6 w-6 rounded-md bg-blue-500/10 flex items-center justify-center">
                  <div className="h-2 w-2 rounded-full bg-[var(--accent)]" />
                </div>
                <div>
                  <p className="text-[10px] font-semibold text-[var(--text)] leading-none">{t.hero.badgeReact}</p>
                  <p className="text-[9px] text-[var(--text-muted)] leading-none mt-0.5">{t.hero.badgeCoreStack}</p>
                </div>
              </div>

              <div className="absolute -right-3 top-10 hidden sm:flex items-center gap-2 rounded-xl bg-[var(--bg)] px-3 py-2 shadow-[var(--shadow-sm)] border border-[var(--border)] animate-float-slow-reverse">
                <div className="h-6 w-6 rounded-md bg-emerald-500/10 flex items-center justify-center">
                  <div className="h-2 w-2 rounded-full bg-emerald-500" />
                </div>
                <div>
                  <p className="text-[10px] font-semibold text-[var(--text)] leading-none">{t.hero.badgeTs}</p>
                  <p className="text-[9px] text-[var(--text-muted)] leading-none mt-0.5">{t.hero.badgeProficient}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2" aria-hidden="true">
          <p className="text-[10px] font-medium uppercase tracking-widest text-[var(--text-muted)]">{t.hero.scroll}</p>
          <div className="h-8 w-[1px] bg-gradient-to-b from-[var(--text-muted)] to-transparent animate-pulse-line" />
        </div>
      </div>
    </section>
  )
}

export default memo(HeroInner)

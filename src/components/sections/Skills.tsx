import { useState, memo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { skillCategories } from '@/data/portfolio'
import { SectionWrapper, SectionLabel, SectionHeading, SectionDescription } from '@/components/ui/SectionWrapper'
import { useTranslation } from '@/i18n'

const levelBar: Record<string, string> = { Core: 'w-full', Proficient: 'w-3/4', Familiar: 'w-1/2' }
const levelLabel: Record<string, string> = {
  Core: 'text-emerald-600 dark:text-emerald-400',
  Proficient: 'text-blue-600 dark:text-blue-400',
  Familiar: 'text-amber-600 dark:text-amber-400',
}

function SkillsInner() {
  const [active, setActive] = useState(skillCategories[0].id)
  const current = skillCategories.find(c => c.id === active) ?? skillCategories[0]
  const { t } = useTranslation()

  return (
    <section id="skills" className="section-padding bg-[var(--surface)]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionWrapper>
          <SectionLabel>{t.skills.label}</SectionLabel>
          <SectionHeading>{t.skills.heading}</SectionHeading>
          <SectionDescription>{t.skills.description}</SectionDescription>
        </SectionWrapper>

        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 }}
          className="mt-10 sm:mt-12 -mx-4 px-4 sm:mx-0 sm:px-0 overflow-x-auto">
          <div className="inline-flex rounded-xl bg-[var(--surface-2)] p-1 gap-0.5 border border-[var(--border)] min-w-max" role="tablist" aria-label={t.skills.label}>
            {skillCategories.map(cat => {
              const isActive = cat.id === active
              const catT = t.skills.categories[cat.id]
              return (
                <button key={cat.id} role="tab" aria-selected={isActive} onClick={() => setActive(cat.id)}
                  className={['relative px-3.5 sm:px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-150 select-none whitespace-nowrap',
                    isActive ? 'text-[var(--text)]' : 'text-[var(--text-muted)] hover:text-[var(--text-secondary)]'].join(' ')}>
                  {catT?.label ?? cat.label}
                  {isActive && (
                    <motion.span layoutId="skill-tab-indicator" className="absolute inset-0 rounded-lg bg-[var(--bg)] shadow-[var(--shadow-sm)]"
                      style={{ zIndex: -1 }} transition={{ type: 'spring', stiffness: 400, damping: 30 }} />
                  )}
                </button>
              )
            })}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.p key={current.id + '-desc'} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }} className="mt-5 sm:mt-6 text-sm text-[var(--text-muted)]">
            {t.skills.categories[current.id]?.description ?? current.description}
          </motion.p>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.div key={current.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }} className="mt-6 sm:mt-8 grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3" role="tabpanel">
            {current.skills.map((skill, i) => (
              <motion.div key={skill.name} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: i * 0.04 }}
                className="group flex items-center gap-3.5 rounded-xl border border-[var(--border)] bg-[var(--bg)] p-3.5 sm:p-4 transition-colors duration-200 hover:bg-[var(--surface-2)]"
                style={{ borderLeftWidth: 3, borderLeftColor: skill.color }}>
                <div className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-lg" style={{ backgroundColor: `${skill.color}14` }}>
                  <div className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: skill.color }} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-[var(--text)] truncate">{skill.name}</p>
                  <div className="mt-1.5 flex items-center gap-2">
                    <div className="h-1 flex-1 rounded-full bg-[var(--surface-2)] overflow-hidden">
                      <div className={`h-full rounded-full ${levelBar[skill.level]} transition-transform duration-500 ease-out`} style={{ backgroundColor: skill.color }} />
                    </div>
                    <span className={`shrink-0 text-[10px] font-semibold uppercase tracking-wider ${levelLabel[skill.level]}`}>
                      {t.skills.levels[skill.level]}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

export default memo(SkillsInner)

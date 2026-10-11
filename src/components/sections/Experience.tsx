import { memo } from 'react'
import { motion } from 'framer-motion'
import { Briefcase, GraduationCap, Award, Check } from 'lucide-react'
import { experience } from '@/data/portfolio'
import { Badge } from '@/components/ui/Badge'
import { SectionWrapper, SectionLabel, SectionHeading, SectionDescription } from '@/components/ui/SectionWrapper'
import { useTranslation } from '@/i18n'

const typeIcon: Record<string, React.ElementType> = { Work: Briefcase, Education: GraduationCap, Certificate: Award }
const iconBg: Record<string, string> = {
  Work: 'bg-blue-500/10 text-blue-600 dark:text-blue-400',
  Education: 'bg-violet-500/10 text-violet-600 dark:text-violet-400',
  Certificate: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
}
const badgeColor: Record<string, 'blue' | 'violet' | 'green'> = { Work: 'blue', Education: 'violet', Certificate: 'green' }

function ExperienceInner() {
  const { t } = useTranslation()

  return (
    <section id="experience" className="section-padding">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionWrapper>
          <SectionLabel>{t.experience.label}</SectionLabel>
          <SectionHeading>{t.experience.heading}</SectionHeading>
          <SectionDescription>{t.experience.description}</SectionDescription>
        </SectionWrapper>

        <div className="relative mt-10 sm:mt-14 sm:ml-5">
          <div className="absolute left-[15px] sm:left-0 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--accent)]/30 via-[var(--border)] to-transparent hidden sm:block" aria-hidden="true" />

          <div className="space-y-6 sm:space-y-0">
            {experience.map((item, i) => {
              const Icon = typeIcon[item.type] ?? Briefcase
              const et = t.experience.items[item.id]
              return (
                <motion.div key={item.id} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.4, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="relative sm:pl-12 sm:pb-8 last:pb-0">

                  <div className="hidden sm:flex absolute left-[-18px] top-0 z-10 h-9 w-9 items-center justify-center rounded-xl bg-[var(--bg)] border border-[var(--border)] shadow-[var(--shadow-sm)]" aria-hidden="true">
                    <div className={`flex h-6 w-6 items-center justify-center rounded-md ${iconBg[item.type]}`}>
                      {item.type === 'Certificate' && !item.current ? <Check size={13} strokeWidth={2.5} /> : <Icon size={13} strokeWidth={2} />}
                    </div>
                  </div>

                  <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 sm:p-5 lg:p-6 transition-colors duration-200 hover:border-[var(--accent)]/15">
                    <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-start sm:justify-between sm:gap-3 mb-2">
                      <div className="min-w-0">
                        <h3 className="text-[15px] sm:text-[17px] font-bold text-[var(--text)] tracking-tight leading-tight">{et?.role ?? item.role}</h3>
                        <p className="mt-0.5 text-sm text-[var(--text-secondary)]">{et?.organization ?? item.organization}</p>
                      </div>
                      <div className="flex items-center gap-1.5 shrink-0">
                        {item.current && <Badge color="green" dot pulse>{t.experience.current}</Badge>}
                        <Badge color={badgeColor[item.type]}>{t.experience.types[item.type]}</Badge>
                      </div>
                    </div>
                    <p className="mb-3 text-xs font-medium text-[var(--text-muted)] font-mono tracking-wide">{et?.period ?? item.period}</p>
                    <p className="mb-3 text-sm leading-relaxed text-[var(--text-secondary)]">{et?.description ?? item.description}</p>
                    <ul className="space-y-1.5" role="list">
                      {(et?.highlights ?? item.highlights).map(hl => (
                        <li key={hl} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                          <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]" aria-hidden="true" />
                          {hl}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default memo(ExperienceInner)

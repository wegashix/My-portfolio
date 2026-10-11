import { memo } from 'react'
import { motion } from 'framer-motion'
import { Code2, Zap, Layout, Target } from 'lucide-react'
import { SectionWrapper, SectionLabel, SectionHeading, itemVariants } from '@/components/ui/SectionWrapper'
import { useTranslation } from '@/i18n'
import { renderBold } from '@/i18n/richText'

const traitIcons = [Code2, Zap, Layout, Target]

function AboutInner() {
  const { t } = useTranslation()
  const traits = [
    { icon: traitIcons[0], title: t.about.trait1t, description: t.about.trait1d },
    { icon: traitIcons[1], title: t.about.trait2t, description: t.about.trait2d },
    { icon: traitIcons[2], title: t.about.trait3t, description: t.about.trait3d },
    { icon: traitIcons[3], title: t.about.trait4t, description: t.about.trait4d },
  ]
  const stats = [
    { value: t.about.stat1v, label: t.about.stat1l },
    { value: t.about.stat2v, label: t.about.stat2l },
    { value: t.about.stat3v, label: t.about.stat3l },
  ]

  return (
    <section id="about" className="section-padding">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20 items-start">
          <SectionWrapper className="lg:sticky lg:top-28 self-start">
            <SectionLabel>{t.about.label}</SectionLabel>
            <SectionHeading>
              {t.about.heading}
              <span className="text-gradient">{t.about.headingHighlight}</span>
            </SectionHeading>

            <motion.div variants={itemVariants} className="mt-5 sm:mt-6 space-y-3.5 text-base sm:text-[17px] leading-[1.75] text-[var(--text-secondary)]">
              <p>{renderBold(t.about.p1)}</p>
              <p>{renderBold(t.about.p2)}</p>
              <p>{renderBold(t.about.p3)}</p>
              <p>{renderBold(t.about.p4)}</p>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-8 sm:mt-10 flex gap-6 sm:gap-8">
              {stats.map(stat => (
                <div key={stat.label}>
                  <p className="text-xl sm:text-2xl font-bold text-[var(--text)] tracking-tight">{stat.value}</p>
                  <p className="mt-0.5 text-[11px] sm:text-xs text-[var(--text-muted)]">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </SectionWrapper>

          <SectionWrapper className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {traits.map((trait) => {
              const Icon = trait.icon
              return (
                <motion.div key={trait.title} variants={itemVariants}
                  className="group rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 sm:p-6 transition-colors duration-200 hover:border-[var(--accent)]/30 hover:bg-[var(--surface-2)]">
                  <div className="mb-3.5 flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--accent-bg)] text-[var(--accent)]">
                    <Icon size={20} strokeWidth={1.75} />
                  </div>
                  <h3 className="mb-2 font-semibold text-[15px] text-[var(--text)]">{trait.title}</h3>
                  <p className="text-sm leading-relaxed text-[var(--text-secondary)]">{trait.description}</p>
                </motion.div>
              )
            })}
          </SectionWrapper>
        </div>
      </div>
    </section>
  )
}

export default memo(AboutInner)

import { memo } from 'react'
import { motion } from 'framer-motion'
import { Github, Send, Instagram, Mail, ArrowUpRight } from 'lucide-react'
import { contactLinks } from '@/data/portfolio'
import { SectionWrapper, SectionLabel, SectionHeading, SectionDescription, itemVariants } from '@/components/ui/SectionWrapper'
import { useTranslation } from '@/i18n'

const iconMap: Record<string, React.ElementType> = { github: Github, send: Send, instagram: Instagram, mail: Mail }
const brandAccent: Record<string, string> = {
  github: 'group-hover:text-[var(--text)] group-hover:border-[var(--text-muted)]',
  telegram: 'group-hover:text-[#26A5DE] group-hover:border-[#26A5DE]/30',
  instagram: 'group-hover:text-[#E1306C] group-hover:border-[#E1306C]/30',
  email: 'group-hover:text-emerald-500 group-hover:border-emerald-500/30',
}

function ContactInner() {
  const { t } = useTranslation()

  return (
    <section id="contact" className="section-padding bg-[var(--surface)]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionWrapper className="mx-auto max-w-2xl text-center">
          <SectionLabel>{t.contact.label}</SectionLabel>
          <SectionHeading>{t.contact.heading}</SectionHeading>
          <SectionDescription>{t.contact.description}</SectionDescription>
        </SectionWrapper>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }}
          className="mx-auto mt-10 sm:mt-14 grid max-w-3xl gap-3 sm:grid-cols-2">
          {contactLinks.map(link => {
            const Icon = iconMap[link.icon] ?? Mail
            const accent = brandAccent[link.id] ?? ''
            const ct = t.contact.items[link.id]

            return (
              <motion.a key={link.id} href={link.url}
                target={link.url.startsWith('mailto:') ? undefined : '_blank'}
                rel={link.url.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                variants={itemVariants}
                className={['group relative flex items-center gap-3.5 rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-4 sm:p-5',
                  'transition-[border-color,box-shadow] duration-200', 'hover:border-[var(--accent)]/20 hover:shadow-[var(--shadow)]'].join(' ')}>
                <div className={['flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface)]',
                  'text-[var(--text-secondary)] transition-colors duration-200', accent].join(' ')}>
                  <Icon size={18} strokeWidth={1.75} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-[var(--text)] text-sm sm:text-[15px]">{ct?.platform ?? link.platform}</p>
                  <p className="mt-0.5 text-xs sm:text-sm text-[var(--text-muted)] truncate">{link.handle}</p>
                </div>
                <ArrowUpRight size={15} className="shrink-0 text-[var(--text-muted)] transition-colors duration-200 group-hover:text-[var(--accent)]" />
              </motion.a>
            )
          })}
        </motion.div>

        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.4 }} className="mt-8 text-center text-xs text-[var(--text-muted)]">
          <span className="inline-flex items-center gap-1.5">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
            </span>
            {t.contact.available}
          </span>
        </motion.p>
      </div>
    </section>
  )
}

export default memo(ContactInner)

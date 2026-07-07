import { memo } from 'react'
import { Github, Send, Instagram, Mail, Heart } from 'lucide-react'
import { useTranslation } from '@/i18n'

const socials = [
  { icon: Github, href: 'https://github.com/wegashix', label: 'GitHub' },
  { icon: Send, href: 'https://t.me/wegashix', label: 'Telegram' },
  { icon: Instagram, href: 'https://www.instagram.com/wegashix', label: 'Instagram' },
  { icon: Mail, href: 'mailto:wegashixbar@gmail.com', label: 'Email' },
]

function FooterInner() {
  const year = new Date().getFullYear()
  const { t } = useTranslation()

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)]" role="contentinfo">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-5 py-8 sm:flex-row sm:justify-between sm:py-10">
          <div className="flex flex-col items-center gap-1 sm:items-start">
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-md bg-[var(--accent)] flex items-center justify-center">
                <span className="text-[9px] font-bold text-white">BD</span>
              </div>
              <span className="font-semibold text-sm text-[var(--text)]">Baratov Damir</span>
            </div>
            <p className="flex items-center gap-1 text-xs text-[var(--text-muted)]">
              {t.footer.built}
              <Heart size={10} className="text-red-400 fill-red-400" aria-hidden="true" />
            </p>
          </div>

          <div className="flex items-center gap-1">
            {socials.map(({ icon: Icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                className="flex h-8 w-8 items-center justify-center rounded-lg text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[var(--surface-2)] transition-colors duration-150">
                <Icon size={15} />
              </a>
            ))}
          </div>

          <p className="text-xs text-[var(--text-muted)]">&copy; {year} Baratov Damir</p>
        </div>
      </div>
    </footer>
  )
}

export default memo(FooterInner)

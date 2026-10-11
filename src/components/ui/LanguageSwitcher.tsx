import { memo } from 'react'
import { useTranslation } from '@/i18n'

function LanguageSwitcherInner() {
  const { lang, toggle } = useTranslation()

  return (
    <button
      onClick={toggle}
      aria-label={lang === 'en' ? 'Переключить на русский' : 'Switch to English'}
      className={[
        'flex h-8 items-center gap-0.5 rounded-lg px-1.5',
        'text-xs font-semibold tracking-wide',
        'text-[var(--text-secondary)] hover:text-[var(--text)]',
        'hover:bg-[var(--surface)] transition-colors duration-150',
        'active:scale-95 select-none',
      ].join(' ')}
    >
      <span className={lang === 'en' ? 'text-[var(--text)]' : 'text-[var(--text-muted)]'}>EN</span>
      <span className="text-[var(--border)]">/</span>
      <span className={lang === 'ru' ? 'text-[var(--text)]' : 'text-[var(--text-muted)]'}>RU</span>
    </button>
  )
}

export const LanguageSwitcher = memo(LanguageSwitcherInner)

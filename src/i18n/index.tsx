import {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
  type ReactNode,
} from 'react'
import { translations, type Lang, type Translations } from './translations'

interface LanguageContextValue {
  lang: Lang
  t: Translations
  setLang: (lang: Lang) => void
  toggle: () => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

function getInitialLang(): Lang {
  if (typeof window === 'undefined') return 'en'
  const stored = localStorage.getItem('lang')
  if (stored === 'en' || stored === 'ru') return stored
  // Auto-detect from browser locale
  const nav = navigator.language.toLowerCase()
  if (nav.startsWith('ru')) return 'ru'
  return 'en'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(getInitialLang)

  const setLang = useCallback((l: Lang) => {
    setLangState(l)
    localStorage.setItem('lang', l)
    document.documentElement.lang = l
  }, [])

  const toggle = useCallback(() => {
    setLang(lang === 'en' ? 'ru' : 'en')
  }, [lang, setLang])

  const value = useMemo<LanguageContextValue>(
    () => ({ lang, t: translations[lang], setLang, toggle }),
    [lang, setLang, toggle]
  )

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useTranslation(): LanguageContextValue {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useTranslation must be used within LanguageProvider')
  return ctx
}

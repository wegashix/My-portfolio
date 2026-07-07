import { useState, useEffect } from 'react'

const SECTIONS = ['about', 'skills', 'projects', 'experience', 'contact'] as const
type Section = (typeof SECTIONS)[number] | ''

export function useActiveSection(): Section {
  const [active, setActive] = useState<Section>('')

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    const callback = (sectionId: string) => (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActive(sectionId as Section)
        }
      })
    }

    SECTIONS.forEach(id => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(callback(id), {
        rootMargin: '-40% 0px -50% 0px',
        threshold: 0,
      })
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach(o => o.disconnect())
  }, [])

  return active
}

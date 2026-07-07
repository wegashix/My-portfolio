import { useState, useEffect, useRef, useCallback } from 'react'

export function useScrollProgress() {
  const [scrolled, setScrolled] = useState(false)
  const scrolledRef = useRef(false)

  useEffect(() => {
    let ticking = false

    const update = () => {
      const isScrolled = document.documentElement.scrollTop > 16
      // Only setState when the value actually changes — avoids re-renders
      if (isScrolled !== scrolledRef.current) {
        scrolledRef.current = isScrolled
        setScrolled(isScrolled)
      }
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update)
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    update()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return { scrolled }
}

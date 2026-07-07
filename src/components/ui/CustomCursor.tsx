import { useEffect, useRef, memo } from 'react'
import { useMotionValue, useSpring, motion } from 'framer-motion'

const SPRING = { stiffness: 500, damping: 35, mass: 0.5 }

function CustomCursorInner() {
  const rawX = useMotionValue(-100)
  const rawY = useMotionValue(-100)
  const x = useSpring(rawX, SPRING)
  const y = useSpring(rawY, SPRING)

  // Use refs for hover/visible to avoid re-renders — animate via DOM directly
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return

    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    const onMove = (e: MouseEvent) => {
      rawX.set(e.clientX)
      rawY.set(e.clientY)

      // Show cursor
      dot.style.opacity = '0.6'

      // Check if hovering interactive element
      const target = e.target as HTMLElement
      const interactive = target.closest(
        'a, button, [role="button"], input, textarea, select, [tabindex]'
      )
      if (interactive) {
        ring.style.opacity = '0.15'
        ring.style.transform = 'scale(1)'
        dot.style.opacity = '0'
      } else {
        ring.style.opacity = '0'
        ring.style.transform = 'scale(0)'
        dot.style.opacity = '0.6'
      }
    }

    const onLeave = () => {
      dot.style.opacity = '0'
      ring.style.opacity = '0'
    }

    document.addEventListener('mousemove', onMove, { passive: true })
    document.addEventListener('mouseleave', onLeave)

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
    }
  }, [rawX, rawY])

  // Don't render on touch devices
  if (typeof window !== 'undefined' && !window.matchMedia('(pointer: fine)').matches) {
    return null
  }

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9998] pointer-events-none"
      style={{ x, y, translateX: '-50%', translateY: '-50%' }}
    >
      {/* Hover ring — size changes via CSS transition, no React re-renders */}
      <div
        ref={ringRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-[var(--accent)] transition-all duration-200 ease-out"
        style={{ opacity: 0, transform: 'scale(0)' }}
      />
      {/* Dot — visibility via CSS, no React re-renders */}
      <div
        ref={dotRef}
        className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] transition-opacity duration-150"
        style={{ opacity: 0 }}
      />
    </motion.div>
  )
}

export const CustomCursor = memo(CustomCursorInner)

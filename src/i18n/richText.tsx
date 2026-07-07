import { type ReactNode } from 'react'

/** Renders text with **bold** markers as <span> elements */
export function renderBold(text: string): ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*)/)
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <span key={i} className="font-medium text-[var(--text)]">
          {part.slice(2, -2)}
        </span>
      )
    }
    return part
  })
}

import { type ReactNode } from 'react'

type Color = 'green' | 'blue' | 'amber' | 'slate' | 'violet'

interface Props {
  children: ReactNode
  color?: Color
  dot?: boolean
  pulse?: boolean
  className?: string
}

const colorMap: Record<Color, string> = {
  green: 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-400 dark:border-emerald-900',
  blue:  'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/40 dark:text-blue-400 dark:border-blue-900',
  amber: 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/40 dark:text-amber-400 dark:border-amber-900',
  slate: 'bg-slate-100 text-slate-600 border-slate-200 dark:bg-slate-800/60 dark:text-slate-400 dark:border-slate-700',
  violet:'bg-violet-50 text-violet-700 border-violet-200 dark:bg-violet-950/40 dark:text-violet-400 dark:border-violet-900',
}

const dotMap: Record<Color, string> = {
  green: 'bg-emerald-500',
  blue:  'bg-blue-500',
  amber: 'bg-amber-500',
  slate: 'bg-slate-500',
  violet:'bg-violet-500',
}

export function Badge({ children, color = 'slate', dot, pulse, className = '' }: Props) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium tracking-wide ${colorMap[color]} ${className}`}
    >
      {dot && (
        <span className="relative flex h-1.5 w-1.5 shrink-0">
          {pulse && (
            <span
              className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 ${dotMap[color]}`}
            />
          )}
          <span className={`relative inline-flex h-1.5 w-1.5 rounded-full ${dotMap[color]}`} />
        </span>
      )}
      {children}
    </span>
  )
}

import { memo, type ReactNode, type MouseEventHandler } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps {
  variant?: Variant
  size?: Size
  className?: string
  children: ReactNode
  href?: string
  target?: string
  rel?: string
  onClick?: MouseEventHandler
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  'aria-label'?: string
}

const variantStyles: Record<Variant, string> = {
  primary: [
    'bg-[var(--accent)] text-white',
    'hover:bg-[var(--accent-h)]',
    'shadow-[0_1px_2px_0_rgb(0_0_0/0.12),inset_0_1px_0_0_rgb(255_255_255/0.12)]',
  ].join(' '),
  secondary: [
    'bg-[var(--surface)] text-[var(--text)]',
    'border border-[var(--border)]',
    'hover:bg-[var(--surface-2)] hover:border-[var(--text-muted)]',
    'shadow-[var(--shadow-sm)]',
  ].join(' '),
  ghost: [
    'text-[var(--text-secondary)]',
    'hover:text-[var(--text)] hover:bg-[var(--surface)]',
  ].join(' '),
}

const sizeStyles: Record<Size, string> = {
  sm: 'h-8 px-3 text-sm gap-1.5',
  md: 'h-10 px-4 text-sm gap-2',
  lg: 'h-11 sm:h-12 px-5 sm:px-6 text-sm sm:text-base gap-2',
}

const base =
  'inline-flex items-center justify-center font-medium rounded-[10px] transition-colors duration-150 select-none whitespace-nowrap active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)] disabled:opacity-50 disabled:pointer-events-none'

export const Button = memo(function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  href,
  target,
  rel,
  onClick,
  disabled,
  type = 'button',
  'aria-label': ariaLabel,
}: ButtonProps) {
  const cls = `${base} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={cls}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      type={type}
      className={cls}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  )
})

import css from '../css.js'

/**
 * Herond Design System — Button (core).
 * Recreates the `HerondDesignSystem.Button` used on the login screen:
 * solid primary, soft secondary; `lg` size is 48px tall.
 */
const SIZES = {
  md: 'height:40px;padding:0 16px;font-size:14px;',
  lg: 'height:48px;padding:0 20px;font-size:15px;',
}

const VARIANTS = {
  primary:
    'background:var(--color-primary);color:var(--color-on-primary);border:1px solid var(--color-primary);',
  secondary:
    'background:var(--surface-card);color:var(--text-primary);border:1px solid var(--border-default);',
}

export default function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  onClick,
  style,
  children,
}) {
  const base =
    'display:inline-flex;align-items:center;justify-content:center;gap:9px;border-radius:10px;font-family:inherit;font-weight:700;cursor:pointer;transition:background .15s var(--ease-out),transform .15s var(--ease-out),box-shadow .15s var(--ease-out);'
  const merged = {
    ...css(base + SIZES[size] + VARIANTS[variant]),
    ...(fullWidth ? { width: '100%' } : null),
    ...style,
  }
  return (
    <button className={`hds-btn hds-btn--${variant}`} style={merged} onClick={onClick}>
      {children}
    </button>
  )
}

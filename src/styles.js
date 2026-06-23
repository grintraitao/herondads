// Pure style-string builders shared across screens, ported from the prototype.
// Each returns a CSS string; components feed it through css() before use.

export const navBtn = (active) =>
  `position:relative;display:flex;align-items:center;gap:11px;padding:11px 12px 11px 14px;border-radius:11px;border:none;cursor:pointer;font-family:inherit;font-size:14px;font-weight:${active ? 700 : 500};background:${active ? 'rgba(51,115,246,.09)' : 'transparent'};color:${active ? 'var(--text-primary)' : 'var(--text-secondary)'};`

export const rail = (active) =>
  `position:absolute;left:0;top:9px;bottom:9px;width:3px;border-radius:3px;background:${active ? 'var(--aurora-flow)' : 'transparent'};`

export const radio = (sel) =>
  `width:20px;height:20px;border-radius:50%;flex:none;border:2px solid ${sel ? 'var(--color-primary)' : 'var(--border-strong)'};background:${sel ? 'radial-gradient(circle, var(--color-primary) 0 4px, transparent 5px)' : 'transparent'};`

export const selRow = (sel) =>
  `display:flex;align-items:center;gap:11px;padding:13px 14px;border-radius:11px;border:1px solid ${sel ? 'var(--color-primary)' : 'var(--border-default)'};background:${sel ? 'rgba(51,115,246,.07)' : 'var(--surface-card)'};color:var(--text-primary);font-family:inherit;font-size:14px;cursor:pointer;`

export const numBadge = (sel) =>
  `width:26px;height:26px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;flex:none;background:${sel ? 'var(--color-primary)' : 'var(--surface-sunken)'};color:${sel ? '#fff' : 'var(--text-secondary)'};`

export const fundCard = (sel) =>
  `padding:22px;border-radius:13px;border:1px solid ${sel ? 'var(--color-primary)' : 'var(--border-default)'};background:${sel ? 'rgba(51,115,246,.07)' : 'var(--surface-card)'};color:var(--text-primary);font-family:inherit;font-size:18px;font-weight:700;cursor:pointer;`

export const customCard = (sel) =>
  `width:100%;padding:15px;border-radius:13px;border:1px solid ${sel ? 'var(--color-primary)' : 'var(--border-default)'};background:${sel ? 'rgba(51,115,246,.07)' : 'var(--surface-card)'};color:var(--text-primary);font-family:inherit;font-size:15px;font-weight:700;cursor:pointer;`

export const payChip = (sel) =>
  `display:flex;align-items:center;justify-content:center;gap:9px;padding:14px;border-radius:12px;border:1px solid ${sel ? 'var(--color-primary)' : 'var(--border-default)'};background:${sel ? 'rgba(51,115,246,.07)' : 'var(--surface-card)'};color:var(--text-primary);font-family:inherit;font-size:14px;font-weight:600;cursor:pointer;`

export const tokChip = (sel) =>
  `display:flex;align-items:center;gap:8px;padding:9px 14px 9px 9px;border-radius:999px;border:1px solid ${sel ? 'var(--color-primary)' : 'var(--border-default)'};background:${sel ? 'rgba(51,115,246,.08)' : 'var(--surface-card)'};color:var(--text-primary);font-family:inherit;font-size:13px;font-weight:700;cursor:pointer;`

// Accordion step badge: active (filled) / done (tinted) / upcoming (sunken).
export const stepNum = (openStep, n) => {
  const active = openStep === n
  const done = openStep > n
  return `width:28px;height:28px;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;flex:none;background:${active ? 'var(--color-primary)' : done ? 'rgba(51,115,246,.14)' : 'var(--surface-sunken)'};color:${active ? '#fff' : done ? 'var(--color-primary)' : 'var(--text-secondary)'};`
}

export const pricingCard = (sel) =>
  `display:flex;align-items:center;justify-content:space-between;padding:14px 16px;border-radius:11px;border:1px solid ${sel ? 'var(--color-primary)' : 'var(--border-default)'};background:${sel ? 'rgba(51,115,246,.07)' : 'var(--surface-card)'};color:var(--text-primary);font-family:inherit;cursor:pointer;`

export const tabBtn = (sel) =>
  `display:flex;align-items:center;gap:9px;padding:11px 13px;border-radius:10px;border:1px solid ${sel ? 'transparent' : 'var(--border-default)'};background:${sel ? 'var(--color-primary)' : 'var(--surface-card)'};color:${sel ? '#fff' : 'var(--text-secondary)'};font-family:inherit;font-size:14px;font-weight:600;cursor:pointer;`

export const geoRow = (sel) =>
  `display:flex;align-items:center;gap:10px;padding:12px 13px;border-radius:10px;border:1px solid ${sel ? 'var(--color-primary)' : 'var(--border-default)'};background:${sel ? 'rgba(51,115,246,.06)' : 'var(--surface-card)'};color:var(--text-primary);font-family:inherit;font-size:13px;cursor:pointer;`

export const adTypeBtn = (sel) =>
  `display:flex;align-items:center;gap:11px;padding:14px;border-radius:12px;border:1px solid ${sel ? 'var(--color-primary)' : 'var(--border-default)'};background:${sel ? 'rgba(51,115,246,.06)' : 'var(--surface-card)'};color:var(--text-primary);font-family:inherit;cursor:pointer;`

export const adTypeIconBox = (color) =>
  `width:38px;height:38px;border-radius:10px;display:flex;align-items:center;justify-content:center;flex:none;background:${color}1f;color:${color};`

// Create/Fund flow stepper at the top of the page.
export const flowStepStyle = (active) =>
  `display:flex;align-items:center;gap:8px;font-size:13px;font-weight:600;color:${active ? 'var(--text-primary)' : 'var(--text-tertiary)'};`

export const flowNum = (active) =>
  `width:22px;height:22px;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;background:${active ? 'var(--color-primary)' : 'var(--surface-sunken)'};color:${active ? '#fff' : 'var(--text-secondary)'};`

// Hierarchy breadcrumb pill (Campaign › Adgroup › Creative).
export const hierPill = (current) =>
  `display:inline-flex;align-items:center;padding:5px 13px;border-radius:999px;font-size:12px;font-weight:700;${current ? 'background:rgba(51,115,246,.1);color:var(--color-primary);border:1px solid rgba(51,115,246,.32);' : 'background:var(--surface-card);color:var(--text-tertiary);border:1px solid var(--border-default);'}`

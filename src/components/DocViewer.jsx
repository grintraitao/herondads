import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import css from '../css.js'
import Icon from '../Icon.jsx'

const CODES = ['en', 'vi']
const OTHER = { en: 'vi', vi: 'en' }

// Renders a self-contained bilingual HTML deck in an isolated iframe.
// Language is encoded in the URL so a link can be shared in a specific language:
//   {basePath}        -> English (default)
//   {basePath}/vn     -> Vietnamese  (also accepts /vi)
// Files live in {srcDir}/en.html and {srcDir}/vi.html under public/.
//
// Performance: both languages stay mounted once touched and we only flip
// visibility, so switching never re-fetches or re-parses. The inactive
// language is preloaded during idle time so the first toggle is instant
// without slowing the initial render. Iframe DOM order is kept stable
// (never reordered) because moving an <iframe> in the DOM reloads it.
export default function DocViewer({ title, srcDir, basePath }) {
  const { lang } = useParams()
  const navigate = useNavigate()
  const code = lang === 'vn' || lang === 'vi' ? 'vi' : 'en'

  // Which languages are kept in the DOM (and thus in memory).
  const [mounted, setMounted] = useState(() => ({ [code]: true }))

  // Always keep the active language mounted.
  useEffect(() => {
    setMounted((m) => (m[code] ? m : { ...m, [code]: true }))
  }, [code])

  // Preload the other language once the browser is idle.
  useEffect(() => {
    const other = OTHER[code]
    if (mounted[other]) return
    const ric = window.requestIdleCallback || ((cb) => setTimeout(cb, 500))
    const cic = window.cancelIdleCallback || clearTimeout
    const id = ric(() => setMounted((m) => (m[other] ? m : { ...m, [other]: true })))
    return () => cic(id)
  }, [code, mounted])

  const LANGS = [
    ['en', 'EN', basePath],
    ['vi', 'VI', `${basePath}/vn`],
  ]

  return (
    <div style={css('position:fixed;inset:0;background:#fff;font-family:var(--font-sans);')}>
      {CODES.filter((c) => mounted[c]).map((c) => {
        const active = c === code
        return (
          <iframe
            key={c}
            data-lang={c}
            data-active={active ? 'true' : 'false'}
            src={`${srcDir}/${c}.html`}
            title={active ? title : `${title} (${c})`}
            aria-hidden={active ? undefined : 'true'}
            tabIndex={active ? undefined : -1}
            style={{
              ...css('position:absolute;inset:0;width:100%;height:100%;border:none;'),
              visibility: active ? 'visible' : 'hidden',
              pointerEvents: active ? 'auto' : 'none',
            }}
          />
        )
      })}

      {/* Back to chooser */}
      <button
        onClick={() => navigate('/')}
        style={css(
          'position:fixed;top:18px;left:18px;z-index:10;display:flex;align-items:center;gap:7px;height:40px;padding:0 16px 0 13px;border-radius:11px;border:1px solid var(--border-default);background:rgba(255,255,255,.9);backdrop-filter:saturate(140%) blur(8px);color:var(--text-primary);font-family:inherit;font-size:13px;font-weight:700;cursor:pointer;box-shadow:0 6px 18px rgba(15,26,53,.12);',
        )}
      >
        <Icon name="arrow-left" /> Back
      </button>

      {/* Language toggle (top-right) — updates the URL */}
      <div
        style={css(
          'position:fixed;top:18px;right:18px;z-index:10;display:flex;align-items:center;gap:8px;padding:6px;border-radius:12px;border:1px solid var(--border-default);background:rgba(255,255,255,.9);backdrop-filter:saturate(140%) blur(8px);box-shadow:0 6px 18px rgba(15,26,53,.12);',
        )}
      >
        <Icon name="languages" style={css('color:var(--text-tertiary);font-size:16px;margin:0 2px 0 5px;')} />
        {LANGS.map(([c, label, to]) => {
          const active = code === c
          return (
            <button
              key={c}
              onClick={() => navigate(to)}
              style={css(
                `height:30px;padding:0 13px;border-radius:8px;border:none;cursor:pointer;font-family:inherit;font-size:13px;font-weight:700;background:${active ? 'var(--color-primary)' : 'transparent'};color:${active ? '#fff' : 'var(--text-secondary)'};`,
              )}
            >
              {label}
            </button>
          )
        })}
      </div>
    </div>
  )
}

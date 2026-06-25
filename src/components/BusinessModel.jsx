import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import css from '../css.js'
import Icon from '../Icon.jsx'

const SRC = {
  en: '/business-model/en.html',
  vi: '/business-model/vi.html',
}
const LANGS = [
  ['en', 'EN'],
  ['vi', 'VI'],
]

// Renders the self-contained business-model deck in an isolated iframe,
// with a language toggle (default English) and a way back to the chooser.
export default function BusinessModel() {
  const [lang, setLang] = useState('en')
  const navigate = useNavigate()

  return (
    <div style={css('position:fixed;inset:0;background:#fff;font-family:var(--font-sans);')}>
      <iframe
        key={lang}
        src={SRC[lang]}
        title="Herond Ads — Business Model"
        style={css('width:100%;height:100%;border:none;display:block;')}
      />

      {/* Back to chooser */}
      <button
        onClick={() => navigate('/')}
        style={css(
          'position:fixed;top:18px;left:18px;z-index:10;display:flex;align-items:center;gap:7px;height:40px;padding:0 16px 0 13px;border-radius:11px;border:1px solid var(--border-default);background:rgba(255,255,255,.9);backdrop-filter:saturate(140%) blur(8px);color:var(--text-primary);font-family:inherit;font-size:13px;font-weight:700;cursor:pointer;box-shadow:0 6px 18px rgba(15,26,53,.12);',
        )}
      >
        <Icon name="arrow-left" /> Back
      </button>

      {/* Language toggle (top-right) */}
      <div
        style={css(
          'position:fixed;top:18px;right:18px;z-index:10;display:flex;align-items:center;gap:8px;padding:6px;border-radius:12px;border:1px solid var(--border-default);background:rgba(255,255,255,.9);backdrop-filter:saturate(140%) blur(8px);box-shadow:0 6px 18px rgba(15,26,53,.12);',
        )}
      >
        <Icon name="languages" style={css('color:var(--text-tertiary);font-size:16px;margin:0 2px 0 5px;')} />
        {LANGS.map(([code, label]) => {
          const active = lang === code
          return (
            <button
              key={code}
              onClick={() => setLang(code)}
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

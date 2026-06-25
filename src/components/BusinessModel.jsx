import { useNavigate, useParams } from 'react-router-dom'
import css from '../css.js'
import Icon from '../Icon.jsx'

const SRC = {
  en: '/business-model/en.html',
  vi: '/business-model/vi.html',
}

// Language is encoded in the URL so a link can be shared in a specific language:
//   /business_model        -> English (default)
//   /business_model/vn     -> Vietnamese  (also accepts /vi)
// [code, label, path]
const LANGS = [
  ['en', 'EN', '/business_model'],
  ['vi', 'VI', '/business_model/vn'],
]

// Renders the self-contained business-model deck in an isolated iframe,
// with a URL-driven language toggle (default English) and a way back.
export default function BusinessModel() {
  const { lang } = useParams()
  const navigate = useNavigate()
  const code = lang === 'vn' || lang === 'vi' ? 'vi' : 'en'

  return (
    <div style={css('position:fixed;inset:0;background:#fff;font-family:var(--font-sans);')}>
      <iframe
        key={code}
        src={SRC[code]}
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

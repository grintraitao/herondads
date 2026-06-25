import { useNavigate } from 'react-router-dom'
import css from '../css.js'
import Icon from '../Icon.jsx'

const LOGO = '/assets/logo-glyph.png'

const CHOICES = [
  {
    to: '/client_prototype',
    icon: 'layout-dashboard',
    eyebrow: 'Interactive demo',
    title: 'Client Prototype',
    desc: 'The advertiser console — sign in, dashboard, campaigns, funding and targeting.',
    accent: 'linear-gradient(135deg,#3373F6,#00b3ED)',
  },
  {
    to: '/business_model',
    icon: 'presentation',
    eyebrow: 'Deck',
    title: 'Business Model',
    desc: 'How Herond Ads works — the B2B2C advertising model for Web3, end to end.',
    accent: 'linear-gradient(135deg,#6b33fa,#ff4070)',
  },
]

export default function Landing() {
  const navigate = useNavigate()

  return (
    <div
      data-theme="light"
      style={css(
        'min-height:100vh;width:100%;font-family:var(--font-sans);background:var(--bg-page);color:var(--text-primary);position:relative;overflow:hidden;display:flex;align-items:center;justify-content:center;padding:48px 24px;',
      )}
    >
      {/* aurora glow wash */}
      <div
        style={css(
          'position:fixed;inset:0;pointer-events:none;z-index:0;background:radial-gradient(ellipse 60% 46% at 14% 6%,rgba(51,115,246,.10),transparent 60%),radial-gradient(ellipse 54% 44% at 88% 90%,rgba(107,51,250,.08),transparent 62%);',
        )}
      ></div>

      <div style={css('position:absolute;top:34px;left:40px;display:flex;align-items:center;gap:11px;')}>
        <img src={LOGO} alt="" style={css('width:34px;height:34px;')} />
        <span style={css('font-weight:800;font-size:18px;letter-spacing:-.4px;')}>
          Herond <span style={css('font-weight:500;color:var(--text-tertiary);')}>Ads</span>
        </span>
      </div>

      <div style={css('position:relative;z-index:1;width:100%;max-width:880px;animation:fadeUp .5s ease both;')}>
        <div style={css('text-align:center;margin-bottom:38px;')}>
          <div className="ov" style={css('color:var(--herond-blue-sky);margin-bottom:14px;')}>
            Web3 Advertising Console
          </div>
          <h1
            style={css(
              'font-size:46px;line-height:1.05;font-weight:800;letter-spacing:-1.4px;margin:0 0 14px;background:linear-gradient(120deg,#0F1A35 22%,#3373F6 70%,#6b33fa 100%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;',
            )}
          >
            Where would you like to start?
          </h1>
          <p style={css('font-size:16px;line-height:1.6;color:var(--text-secondary);max-width:520px;margin:0 auto;')}>
            Pick a view below. Try the interactive advertiser console, or read the business model behind
            Herond Ads.
          </p>
        </div>

        <div style={css('display:grid;grid-template-columns:1fr 1fr;gap:20px;')}>
          {CHOICES.map((c) => (
            <button
              key={c.to}
              onClick={() => navigate(c.to)}
              className="choice-card"
              style={css(
                'position:relative;text-align:left;background:var(--surface-card);border:1px solid var(--border-default);border-radius:20px;padding:28px;cursor:pointer;font-family:inherit;color:var(--text-primary);box-shadow:var(--shadow-sm);display:flex;flex-direction:column;gap:14px;min-height:230px;',
              )}
            >
              <div
                style={css(
                  `width:54px;height:54px;border-radius:15px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:24px;background:${c.accent};box-shadow:0 10px 24px rgba(51,115,246,.25);`,
                )}
              >
                <Icon name={c.icon} />
              </div>
              <div className="ov" style={css('color:var(--text-tertiary);')}>{c.eyebrow}</div>
              <div style={css('font-size:22px;font-weight:800;letter-spacing:-.5px;')}>{c.title}</div>
              <p style={css('font-size:14px;line-height:1.55;color:var(--text-secondary);margin:0;flex:1;')}>{c.desc}</p>
              <div
                style={css(
                  'display:flex;align-items:center;gap:7px;font-size:14px;font-weight:700;color:var(--color-primary);',
                )}
              >
                Open <Icon name="arrow-right" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

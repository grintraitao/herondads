import css from '../css.js'
import Icon from '../Icon.jsx'

export default function PromoModal({ show, set }) {
  if (!show) return null
  const close = () => set({ showPromo: false })
  const claim = () => set({ showPromo: false, view: 'fund' })

  return (
    <div
      style={css(
        'position:fixed;inset:0;z-index:80;background:rgba(15,26,53,.45);backdrop-filter:blur(4px);display:flex;align-items:center;justify-content:center;padding:24px;',
      )}
    >
      <div
        style={css(
          'position:relative;width:100%;max-width:436px;background:var(--surface-card);border:1px solid var(--border-default);border-radius:24px;overflow:hidden;box-shadow:0 30px 80px rgba(15,26,53,.3);animation:popIn .35s ease both;',
        )}
      >
        <div style={css('height:6px;background:var(--aurora-flow);')}></div>
        <button
          onClick={close}
          style={css(
            'position:absolute;top:18px;right:16px;z-index:2;width:32px;height:32px;border-radius:9px;border:none;background:var(--surface-sunken);color:var(--text-secondary);cursor:pointer;',
          )}
        >
          <Icon name="x" />
        </button>
        <div style={css('position:relative;padding:30px 32px 32px;text-align:center;')}>
          <div
            style={css(
              'width:64px;height:64px;border-radius:18px;background:var(--aurora-flow);display:flex;align-items:center;justify-content:center;margin:0 auto 18px;color:#fff;box-shadow:0 12px 28px rgba(107,51,250,.35);',
            )}
          >
            <Icon name="gift" />
          </div>
          <div className="ov" style={css('color:var(--color-primary);margin-bottom:10px;')}>
            Welcome offer
          </div>
          <h2 style={css('font-size:25px;font-weight:800;letter-spacing:-.5px;margin:0 0 10px;')}>
            Get a <span style={css('color:var(--color-primary);')}>+10% bonus</span>
            <br />
            on your first deposit
          </h2>
          <p style={css('font-size:14px;color:var(--text-secondary);line-height:1.55;margin:0 0 22px;')}>
            Fund $500 or more this week and we'll add an instant credit to your balance · pay with card or
            crypto.
          </p>
          <button
            onClick={claim}
            style={css(
              'width:100%;padding:14px;border-radius:12px;border:none;background:var(--color-primary);color:#fff;font-family:inherit;font-size:15px;font-weight:700;cursor:pointer;box-shadow:0 10px 24px rgba(51,115,246,.28);margin-bottom:10px;',
            )}
          >
            Claim &amp; fund now
          </button>
          <button
            onClick={close}
            style={css(
              'background:none;border:none;color:var(--text-tertiary);font-family:inherit;font-size:13px;cursor:pointer;',
            )}
          >
            Maybe later
          </button>
        </div>
      </div>
    </div>
  )
}

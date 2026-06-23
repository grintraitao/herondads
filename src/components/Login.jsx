import css from '../css.js'
import Icon from '../Icon.jsx'
import Button from './Button.jsx'

const LOGO = '/assets/logo-glyph.png'

export default function Login({ set }) {
  const login = () => set({ screen: 'app', showPromo: true })

  return (
    <div
      style={css(
        'position:relative;z-index:1;min-height:100vh;display:flex;align-items:center;justify-content:center;padding:48px;',
      )}
    >
      <div style={css('position:absolute;top:34px;left:40px;display:flex;align-items:center;gap:11px;')}>
        <img src={LOGO} alt="" style={css('width:34px;height:34px;')} />
        <span style={css('font-weight:800;font-size:18px;letter-spacing:-.4px;')}>
          Herond <span style={css('font-weight:500;color:var(--text-tertiary);')}>Ads</span>
        </span>
      </div>

      <div
        style={css(
          'position:relative;width:100%;max-width:1000px;display:grid;grid-template-columns:1fr 392px;gap:64px;align-items:center;',
        )}
      >
        {/* Hero copy */}
        <div style={css('animation:fadeUp .5s ease both;')}>
          <div className="ov" style={css('color:var(--herond-blue-sky);margin-bottom:18px;')}>
            Web3 Advertising Console
          </div>
          <h1
            style={css(
              'font-size:58px;line-height:1.02;font-weight:800;letter-spacing:-2px;margin:0 0 22px;background:linear-gradient(120deg,#0F1A35 22%,#3373F6 70%,#6b33fa 100%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;',
            )}
          >
            Advertising,
            <br />
            on-chain.
          </h1>
          <p
            style={css(
              'font-size:18px;line-height:1.6;color:var(--text-secondary);max-width:440px;margin:0 0 28px;',
            )}
          >
            The advertiser console for the decentralized web. Fund with crypto, reach 240+ GEOs, and
            own your audiences. Every click verified by Herond Shield.
          </p>
          <div style={css('display:flex;gap:32px;')}>
            {[
              ['14.2B', 'Monthly impressions'],
              ['240+', 'GEOs covered'],
              ['99.4%', 'Fraud-free'],
            ].map(([n, label]) => (
              <div key={label}>
                <div style={css('font-size:24px;font-weight:800;font-family:var(--font-mono);')}>{n}</div>
                <div style={css('font-size:13px;color:var(--text-tertiary);')}>{label}</div>
              </div>
            ))}
          </div>
          <div className="ov" style={css('color:var(--text-tertiary);margin-top:34px;')}>
            Defend · Discover · Decentralize
          </div>
        </div>

        {/* Sign-in card */}
        <div
          style={css(
            'background:var(--surface-card);border:1px solid var(--border-default);border-radius:22px;padding:34px 32px;box-shadow:0 18px 50px rgba(15,26,53,.10);animation:popIn .5s ease both;',
          )}
        >
          <h2 style={css('font-size:22px;font-weight:800;letter-spacing:-.4px;margin:0 0 4px;')}>
            Welcome back
          </h2>
          <p style={css('font-size:14px;color:var(--text-secondary);margin:0 0 22px;')}>
            Sign in to your advertiser account
          </p>
          <label style={css('display:block;font-size:13px;font-weight:600;margin-bottom:7px;')}>Email</label>
          <input
            defaultValue="advertiser@herond.org"
            style={css(
              'width:100%;padding:13px 14px;border-radius:10px;border:1px solid var(--border-default);background:#fff;color:var(--text-primary);font-family:inherit;font-size:14px;margin-bottom:14px;outline:none;',
            )}
          />
          <label style={css('display:block;font-size:13px;font-weight:600;margin-bottom:7px;')}>Password</label>
          <input
            type="password"
            defaultValue="herondbrowser"
            style={css(
              'width:100%;padding:13px 14px;border-radius:10px;border:1px solid var(--border-default);background:#fff;color:var(--text-primary);font-family:inherit;font-size:14px;margin-bottom:10px;outline:none;',
            )}
          />
          <div
            style={css(
              'display:flex;justify-content:space-between;align-items:center;margin-bottom:18px;',
            )}
          >
            <label
              style={css(
                'display:flex;align-items:center;gap:7px;font-size:13px;color:var(--text-secondary);cursor:pointer;',
              )}
            >
              <input type="checkbox" defaultChecked style={css('accent-color:var(--color-primary);')} /> Keep me
              signed in
            </label>
            <a
              style={css(
                'font-size:13px;color:var(--color-primary);cursor:pointer;text-decoration:none;font-weight:600;',
              )}
            >
              Forgot?
            </a>
          </div>
          <Button variant="primary" size="lg" fullWidth onClick={login} style={css('width:100%;')}>
            Sign in
          </Button>
          <div style={css('margin-top:11px;')}>
            <Button variant="secondary" size="lg" fullWidth onClick={login}>
              <Icon name="wallet" /> Connect Wallet
            </Button>
          </div>
          <div
            style={css(
              'display:flex;align-items:center;gap:6px;justify-content:center;margin-top:14px;font-size:12px;color:var(--text-tertiary);',
            )}
          >
            <Icon name="shield-check" style={css('color:var(--herond-teal);font-size:14px;')} /> Keyless login ·
            no seed phrase needed
          </div>
          <p style={css('text-align:center;font-size:13px;color:var(--text-secondary);margin:18px 0 0;')}>
            New here?{' '}
            <a style={css('color:var(--color-primary);cursor:pointer;font-weight:600;text-decoration:none;')}>
              Create account
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

import css from '../css.js'
import Icon from '../Icon.jsx'
import { NAV_ITEMS, PAGE_TITLES } from '../data/create.js'
import { navBtn, rail } from '../styles.js'
import Dashboard from './Dashboard.jsx'
import TableView from './TableView.jsx'
import FundCampaign from './FundCampaign.jsx'
import CreateCampaign from './CreateCampaign.jsx'
import ChatWidget from './ChatWidget.jsx'
import PromoModal from './PromoModal.jsx'

const LOGO = '/assets/logo-glyph.png'
const TABLE_VIEWS = ['campaigns', 'adgroups', 'creative', 'audiences', 'conversions', 'reports']

function Sidebar({ view, set }) {
  const startCreate = () => set({ view: 'fund' })
  return (
    <aside
      style={css(
        'width:248px;flex:none;background:var(--surface-card);border-right:1px solid var(--border-default);display:flex;flex-direction:column;padding:22px 14px;position:sticky;top:0;height:100vh;',
      )}
    >
      <div style={css('display:flex;align-items:center;gap:11px;padding:0 8px;margin-bottom:22px;flex:none;')}>
        <img src={LOGO} alt="" style={css('width:30px;height:30px;')} />
        <span style={css('font-weight:800;font-size:17px;letter-spacing:-.4px;')}>
          Herond <span style={css('font-weight:500;color:var(--text-tertiary);')}>Ads</span>
        </span>
      </div>

      <button
        onClick={startCreate}
        style={css(
          'display:flex;align-items:center;justify-content:center;gap:9px;padding:12px;border-radius:12px;border:none;background:var(--aurora-flow);color:#fff;font-family:inherit;font-size:14px;font-weight:700;cursor:pointer;margin-bottom:18px;flex:none;box-shadow:0 8px 20px rgba(51,115,246,.3);',
        )}
      >
        <Icon name="plus" /> New Campaign
      </button>

      <nav
        style={css(
          'flex:1;min-height:0;overflow-y:auto;display:flex;flex-direction:column;gap:2px;margin:0 -4px;padding:0 4px;',
        )}
      >
        {NAV_ITEMS.map(([key, label, icon]) => {
          const active = view === key
          return (
            <button key={key} onClick={() => set({ view: key })} style={css(navBtn(active))}>
              <span style={css(rail(active))}></span>
              <Icon name={icon} />
              <span style={css('flex:1;text-align:left;')}>{label}</span>
            </button>
          )
        })}
      </nav>

      <div
        style={css(
          'flex:none;margin-top:14px;position:relative;border-radius:16px;background:linear-gradient(150deg,rgba(51,115,246,.1),rgba(107,51,250,.1));border:1px solid var(--border-default);padding:16px;overflow:hidden;',
        )}
      >
        <img
          src={LOGO}
          alt=""
          style={css('position:absolute;right:-16px;bottom:-16px;width:84px;opacity:.14;')}
        />
        <div className="ov" style={css('color:var(--text-secondary);margin-bottom:6px;')}>
          Account balance
        </div>
        <div
          style={css(
            'font-size:23px;font-weight:800;font-family:var(--font-mono);letter-spacing:-.5px;color:var(--text-primary);',
          )}
        >
          $12,480.50
        </div>
        <button
          onClick={startCreate}
          style={css(
            'margin-top:11px;width:100%;padding:9px;border-radius:9px;border:1px solid var(--color-primary);background:rgba(51,115,246,.08);color:var(--color-primary);font-family:inherit;font-size:13px;font-weight:700;cursor:pointer;',
          )}
        >
          Add funds
        </button>
      </div>
    </aside>
  )
}

function Header({ state, set }) {
  const connected = state.walletConnected
  const walletBtnStyle = connected
    ? 'display:flex;align-items:center;gap:9px;height:40px;padding:0 14px 0 10px;border-radius:11px;border:1px solid rgba(51,115,246,.4);background:rgba(51,115,246,.07);color:var(--text-primary);font-family:inherit;font-size:13px;font-weight:700;cursor:pointer;'
    : 'display:flex;align-items:center;gap:8px;height:40px;padding:0 16px;border-radius:11px;border:1px solid var(--color-primary);background:rgba(51,115,246,.06);color:var(--color-primary);font-family:inherit;font-size:13px;font-weight:700;cursor:pointer;'

  return (
    <header
      style={css(
        'height:68px;flex:none;display:flex;align-items:center;gap:14px;padding:0 26px;border-bottom:1px solid var(--border-default);background:var(--surface-card);position:sticky;top:0;z-index:20;',
      )}
    >
      <h1 style={css('font-size:20px;font-weight:800;letter-spacing:-.4px;margin:0;')}>
        {PAGE_TITLES[state.view] || 'Dashboard'}
      </h1>
      <div style={css('flex:1;')}></div>
      <div
        style={css(
          'display:flex;align-items:center;gap:9px;padding:8px 14px;border-radius:11px;border:1px solid var(--border-default);background:#fff;font-size:13px;color:var(--text-tertiary);min-width:220px;',
        )}
      >
        <Icon name="search" /> Search campaigns, offers…
      </div>
      <button onClick={() => set({ walletConnected: !connected })} style={css(walletBtnStyle)}>
        {connected ? (
          <>
            <span style={css('display:inline-flex;')}>
              <span
                style={css(
                  'width:16px;height:16px;border-radius:50%;background:#627EEA;border:2px solid var(--surface-card);',
                )}
              ></span>
              <span
                style={css(
                  'width:16px;height:16px;border-radius:50%;background:#9945FF;border:2px solid var(--surface-card);margin-left:-6px;',
                )}
              ></span>
            </span>
            <span style={css('font-family:var(--font-mono);')}>0x7a3f…D4e9</span>
          </>
        ) : (
          <>
            <Icon name="wallet" /> Connect Wallet
          </>
        )}
      </button>
      <button
        style={css(
          'width:40px;height:40px;border-radius:11px;border:1px solid var(--border-default);background:#fff;color:var(--text-secondary);cursor:pointer;position:relative;',
        )}
      >
        <Icon name="bell" />
        <span
          style={css(
            'position:absolute;top:9px;right:10px;width:7px;height:7px;border-radius:50%;background:var(--herond-pink);',
          )}
        ></span>
      </button>
      <div
        style={css(
          'width:40px;height:40px;border-radius:11px;background:var(--aurora-flow);display:flex;align-items:center;justify-content:center;font-weight:800;font-size:14px;color:#fff;cursor:pointer;',
        )}
      >
        A
      </div>
    </header>
  )
}

export default function AppShell({ state, set }) {
  const { view } = state

  return (
    <>
      <div style={css('position:relative;z-index:1;display:flex;height:100vh;overflow:hidden;')}>
        <Sidebar view={view} set={set} />

        <div style={css('flex:1;min-width:0;display:flex;flex-direction:column;')}>
          <Header state={state} set={set} />

          <main style={css('flex:1;padding:26px;overflow-y:auto;')}>
            {view === 'dashboard' && <Dashboard />}
            {TABLE_VIEWS.includes(view) && <TableView view={view} set={set} />}
            {view === 'fund' && <FundCampaign state={state} set={set} />}
            {view === 'setup' && <CreateCampaign state={state} set={set} />}
          </main>
        </div>
      </div>

      <ChatWidget open={state.chatOpen} set={set} />
      <PromoModal show={state.showPromo} set={set} />
    </>
  )
}

import { useState } from 'react'
import css from '../css.js'
import Login from './Login.jsx'
import AppShell from './AppShell.jsx'

const INITIAL = {
  screen: 'login',
  walletConnected: false,
  showPromo: false,
  view: 'dashboard',
  chatOpen: false,
  fundAmount: 1000,
  fundCustom: false,
  payMethod: 'card',
  token: 'usdt',
  openStep: 1,
  campaignName: '',
  adgroupName: '',
  adgroupType: 'manual',
  pricing: 'cpm',
  targetTab: 'geo',
  selected: { geo: [], language: [], os: [], sources: [] },
  adType: 'image',
}

// The advertiser console prototype (login + app), mounted at /client_prototype.
export default function Prototype() {
  const [state, setState] = useState(INITIAL)
  const set = (patch) => setState((s) => ({ ...s, ...patch }))

  return (
    <div
      data-theme="light"
      style={css(
        'min-height:100vh;width:100%;font-family:var(--font-sans);background:var(--bg-page);color:var(--text-primary);position:relative;overflow:hidden;',
      )}
    >
      {/* aurora glow wash */}
      <div
        style={css(
          'position:fixed;inset:0;pointer-events:none;z-index:0;background:radial-gradient(ellipse 60% 46% at 14% 6%,rgba(51,115,246,.10),transparent 60%),radial-gradient(ellipse 54% 44% at 88% 90%,rgba(107,51,250,.08),transparent 62%);',
        )}
      ></div>

      {state.screen === 'login' ? <Login set={set} /> : <AppShell state={state} set={set} />}
    </div>
  )
}

import css from '../css.js'
import Icon from '../Icon.jsx'
import { FUND_AMOUNTS, PAY_METHODS, TOKENS } from '../data/create.js'
import { fundCard, customCard, payChip, tokChip, flowStepStyle, flowNum } from '../styles.js'

const FLOW = ['Fund', 'Create campaign', 'Targeting & ad setup']

export default function FundCampaign({ state, set }) {
  const { fundAmount, fundCustom, payMethod, token } = state
  const isCrypto = payMethod === 'crypto'
  const fundSummary = fundCustom ? 'a custom amount' : '$' + fundAmount.toLocaleString()
  const toSetup = () => set({ view: 'setup', openStep: 1 })

  return (
    <div style={css('max-width:760px;margin:0 auto;animation:fadeUp .35s ease both;')}>
      <div style={css('display:flex;align-items:center;justify-content:center;gap:18px;margin-bottom:22px;')}>
        {FLOW.map((label, i) => (
          <div key={label} style={css(flowStepStyle(i === 0))}>
            <span style={css(flowNum(i === 0))}>{i + 1}</span> {label}
          </div>
        ))}
      </div>

      <h2 style={css('font-size:28px;font-weight:800;text-align:center;letter-spacing:-.6px;margin:0 0 6px;')}>
        Fund Campaign
      </h2>
      <p style={css('text-align:center;font-size:14px;color:var(--text-secondary);margin:0 0 24px;')}>
        Optional. Top up your balance now, or skip and pay later.
      </p>

      <div
        style={css(
          'background:var(--surface-card);border:1px solid var(--border-default);border-radius:20px;padding:28px;box-shadow:var(--shadow-sm);',
        )}
      >
        <div style={css('text-align:center;font-size:14px;font-weight:600;color:var(--text-secondary);margin-bottom:14px;')}>
          Select amount
        </div>
        <div style={css('display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:12px;')}>
          {FUND_AMOUNTS.map((v) => (
            <button
              key={v}
              onClick={() => set({ fundAmount: v, fundCustom: false })}
              style={css(fundCard(!fundCustom && fundAmount === v))}
            >
              {v.toLocaleString()} USD
            </button>
          ))}
        </div>
        <button onClick={() => set({ fundCustom: true })} style={css(customCard(fundCustom))}>
          Custom amount
        </button>

        <div style={css('text-align:center;font-size:14px;font-weight:600;color:var(--text-secondary);margin:22px 0 13px;')}>
          Select payment method
        </div>
        <div style={css('display:grid;grid-template-columns:repeat(3,1fr);gap:11px;')}>
          {PAY_METHODS.map(([k, label, icon]) => (
            <button key={k} onClick={() => set({ payMethod: k })} style={css(payChip(payMethod === k))}>
              <Icon name={icon} /> {label}
            </button>
          ))}
        </div>

        {isCrypto && (
          <div
            style={css(
              'margin-top:13px;padding:16px;border-radius:14px;border:1px solid rgba(107,51,250,.25);background:linear-gradient(120deg,rgba(51,115,246,.05),rgba(107,51,250,.06));',
            )}
          >
            <div className="ov" style={css('color:var(--text-secondary);margin-bottom:11px;display:flex;align-items:center;gap:7px;')}>
              <Icon name="coins" style={css('color:var(--herond-violet);')} /> Pay with crypto. Select token
            </div>
            <div style={css('display:flex;gap:9px;flex-wrap:wrap;')}>
              {TOKENS.map(([k, name, sym, color]) => (
                <button key={k} onClick={() => set({ token: k })} style={css(tokChip(token === k))}>
                  <span
                    style={css(
                      `width:22px;height:22px;border-radius:50%;background:${color};display:inline-flex;align-items:center;justify-content:center;font-size:12px;font-weight:800;color:#fff;`,
                    )}
                  >
                    {sym}
                  </span>{' '}
                  {name}
                </button>
              ))}
            </div>
            <div
              style={css(
                'margin-top:13px;display:flex;justify-content:space-between;align-items:center;font-size:12px;color:var(--text-secondary);',
              )}
            >
              <span>Send to your keyless wallet</span>
              <span style={css('font-family:var(--font-mono);color:var(--color-primary);')}>
                0x7a3f…D4e9 <Icon name="copy" style={css('font-size:12px;')} />
              </span>
            </div>
          </div>
        )}

        <div style={css('height:1px;background:var(--border-default);margin:22px 0;')}></div>
        <div style={css('display:flex;justify-content:space-between;align-items:center;gap:14px;')}>
          <div style={css('font-size:13px;color:var(--text-secondary);')}>
            You'll fund{' '}
            <span style={css('color:var(--text-primary);font-weight:700;font-family:var(--font-mono);')}>
              {fundSummary}
            </span>
          </div>
          <div style={css('display:flex;gap:12px;')}>
            <button
              onClick={toSetup}
              style={css(
                'padding:13px 22px;border-radius:11px;border:1px solid var(--border-default);background:var(--surface-card);color:var(--color-primary);font-family:inherit;font-size:14px;font-weight:700;cursor:pointer;',
              )}
            >
              Skip this step
            </button>
            <button
              onClick={toSetup}
              style={css(
                'padding:13px 26px;border-radius:11px;border:none;background:var(--color-primary);color:#fff;font-family:inherit;font-size:14px;font-weight:700;cursor:pointer;box-shadow:0 8px 22px rgba(51,115,246,.28);',
              )}
            >
              Continue →
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

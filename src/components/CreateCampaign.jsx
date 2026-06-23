import css from '../css.js'
import Icon from '../Icon.jsx'
import {
  ADGROUP_TYPES,
  PRICING_MODELS,
  TARGET_TABS,
  REGIONS,
  AD_TYPES,
} from '../data/create.js'
import {
  stepNum,
  radio,
  selRow,
  numBadge,
  pricingCard,
  tabBtn,
  geoRow,
  adTypeBtn,
  adTypeIconBox,
  flowStepStyle,
  flowNum,
} from '../styles.js'

const LOGO = '/assets/logo-glyph.png'
const FLOW = ['Fund', 'Create campaign', 'Targeting & ad setup']
const CARD =
  'background:var(--surface-card);border:1px solid var(--border-default);border-radius:16px;margin-bottom:13px;overflow:hidden;box-shadow:var(--shadow-sm);'
const HINT_CARD =
  'align-self:start;border-radius:14px;background:rgba(51,115,246,.06);border:1px solid rgba(51,115,246,.18);padding:18px;'
const HINT_ICON =
  'width:34px;height:34px;border-radius:9px;border:1px solid var(--border-default);background:#fff;display:flex;align-items:center;justify-content:center;margin-bottom:12px;'
const INPUT =
  'width:100%;padding:13px 14px;border-radius:10px;border:1px solid var(--border-default);background:#fff;color:var(--text-primary);font-family:inherit;font-size:14px;margin-bottom:18px;outline:none;'
const LABEL = 'display:block;font-size:14px;font-weight:700;margin-bottom:8px;'
const CONTINUE =
  'padding:12px 26px;border-radius:11px;border:none;background:var(--color-primary);color:#fff;font-family:inherit;font-size:14px;font-weight:700;cursor:pointer;'

function StepHeader({ n, openStep, onToggle, title, sub }) {
  return (
    <button
      onClick={onToggle}
      style={css(
        'width:100%;display:flex;align-items:center;gap:14px;padding:20px 22px;background:transparent;border:none;cursor:pointer;text-align:left;',
      )}
    >
      <span style={css(stepNum(openStep, n))}>{n}</span>
      <span style={css('flex:1;')}>
        <span style={css('font-size:17px;font-weight:800;display:block;')}>{title}</span>
        <span style={css('font-size:13px;color:var(--text-secondary);')}>{sub}</span>
      </span>
      <Icon name={openStep === n ? 'chevron-up' : 'chevron-down'} style={css('color:var(--text-tertiary);')} />
    </button>
  )
}

function CreativePreview({ adType }) {
  if (adType === 'text')
    return (
      <div
        style={css(
          'background:#fff;border:1px solid var(--border-default);border-radius:10px;padding:16px 18px;max-width:540px;box-shadow:var(--shadow-sm);',
        )}
      >
        <div style={css('display:flex;align-items:center;gap:8px;margin-bottom:7px;')}>
          <span style={css('font-size:11px;font-weight:800;color:#0a9d63;border:1px solid #0a9d63;border-radius:4px;padding:0 5px;')}>
            Ad
          </span>
          <span style={css('font-size:12px;color:var(--text-secondary);font-family:var(--font-mono);')}>
            defilaunch.io/start
          </span>
        </div>
        <div style={css('font-size:18px;font-weight:600;color:#1b5fe0;margin-bottom:5px;cursor:pointer;')}>
          Launch Your DeFi Project on Herond Traffic
        </div>
        <div style={css('font-size:13px;color:var(--text-secondary);line-height:1.5;')}>
          Reach 14B+ monthly impressions across 240+ GEOs. Fund with crypto, track every click on chain.
          Campaigns start from $500.
        </div>
      </div>
    )

  if (adType === 'image')
    return (
      <div
        style={css(
          'width:300px;height:250px;border-radius:14px;overflow:hidden;position:relative;background:linear-gradient(155deg,#0F1A35 0%,#1c4dc2 56%,#6b33fa 100%);color:#fff;display:flex;flex-direction:column;justify-content:space-between;padding:22px;box-shadow:0 14px 32px rgba(15,26,53,.28);',
        )}
      >
        <div
          style={css(
            'position:absolute;width:210px;height:210px;border-radius:50%;top:-72px;right:-64px;background:radial-gradient(circle,rgba(0,179,237,.5),transparent 64%);',
          )}
        ></div>
        <div style={css('position:relative;display:flex;align-items:center;gap:8px;')}>
          <img src={LOGO} alt="" style={css('width:24px;height:24px;')} />
          <span style={css('font-weight:800;font-size:14px;')}>DeFi Launch</span>
        </div>
        <div style={css('position:relative;')}>
          <div style={css('font-size:23px;font-weight:800;line-height:1.12;letter-spacing:-.5px;')}>
            Launch on
            <br />
            Web3 traffic
          </div>
          <div style={css('font-size:13px;opacity:.82;margin-top:7px;')}>14B+ impressions · 240+ GEOs</div>
        </div>
        <button
          style={css(
            'position:relative;align-self:flex-start;padding:10px 18px;border-radius:8px;border:none;background:#fff;color:#0F1A35;font-family:inherit;font-weight:700;font-size:13px;cursor:pointer;',
          )}
        >
          Get started →
        </button>
        <span style={css('position:absolute;bottom:8px;right:11px;font-size:9px;opacity:.6;font-family:var(--font-mono);')}>
          Ad · 300×250
        </span>
      </div>
    )

  if (adType === 'responsive')
    return (
      <div style={css('display:flex;flex-direction:column;gap:16px;align-items:center;width:100%;')}>
        <div
          style={css(
            'width:100%;max-width:520px;height:62px;border-radius:10px;overflow:hidden;position:relative;background:linear-gradient(120deg,#0F1A35,#1c4dc2 68%,#6b33fa);color:#fff;display:flex;align-items:center;gap:13px;padding:0 18px;',
          )}
        >
          <img src={LOGO} alt="" style={css('width:30px;height:30px;flex:none;')} />
          <div style={css('flex:1;min-width:0;')}>
            <div style={css('font-weight:800;font-size:15px;line-height:1.1;')}>Launch on Web3 traffic</div>
            <div style={css('font-size:11px;opacity:.8;')}>240+ GEOs · from $500</div>
          </div>
          <button
            style={css(
              'flex:none;padding:8px 15px;border-radius:7px;border:none;background:#fff;color:#0F1A35;font-family:inherit;font-weight:700;font-size:12px;cursor:pointer;',
            )}
          >
            Start
          </button>
          <span style={css('position:absolute;top:5px;right:8px;font-size:8px;opacity:.6;font-family:var(--font-mono);')}>
            728×90
          </span>
        </div>
        <div style={css('display:flex;gap:16px;align-items:stretch;flex-wrap:wrap;justify-content:center;')}>
          <div
            style={css(
              'width:150px;height:140px;border-radius:12px;overflow:hidden;position:relative;background:linear-gradient(155deg,#0F1A35,#5a1fd0);color:#fff;display:flex;flex-direction:column;justify-content:space-between;padding:14px;',
            )}
          >
            <img src={LOGO} alt="" style={css('width:22px;height:22px;')} />
            <div style={css('font-weight:800;font-size:14px;line-height:1.15;')}>Launch on Web3</div>
            <button
              style={css(
                'align-self:flex-start;padding:6px 12px;border-radius:6px;border:none;background:#fff;color:#0F1A35;font-weight:700;font-size:11px;font-family:inherit;cursor:pointer;',
              )}
            >
              Start
            </button>
            <span style={css('position:absolute;bottom:5px;right:7px;font-size:8px;opacity:.6;font-family:var(--font-mono);')}>
              180×150
            </span>
          </div>
          <div
            style={css(
              'width:300px;border-radius:12px;border:1px solid var(--border-default);background:#fff;display:flex;gap:12px;padding:13px;align-items:center;',
            )}
          >
            <div style={css('width:54px;height:54px;flex:none;border-radius:10px;background:linear-gradient(135deg,#3373F6,#6b33fa);')}></div>
            <div style={css('min-width:0;')}>
              <div style={css('font-size:11px;color:var(--text-tertiary);font-weight:700;')}>Sponsored · DeFi Launch</div>
              <div style={css('font-size:14px;font-weight:700;line-height:1.25;color:var(--text-primary);')}>
                Launch your project on Herond Web3 traffic
              </div>
            </div>
            <span style={css('font-size:8px;opacity:.5;font-family:var(--font-mono);align-self:flex-start;')}>native</span>
          </div>
        </div>
        <div style={css('font-size:12px;color:var(--text-secondary);')}>
          One creative, auto-fitted to every placement.
        </div>
      </div>
    )

  // html5
  return (
    <div style={css('display:flex;flex-direction:column;gap:10px;align-items:center;')}>
      <div
        style={css(
          'width:560px;max-width:100%;height:100px;border-radius:12px;overflow:hidden;position:relative;background:linear-gradient(120deg,#0F1A35,#163a8f 60%,#5a1fd0);color:#fff;display:flex;align-items:center;justify-content:space-between;padding:0 24px;box-shadow:0 14px 32px rgba(15,26,53,.26);',
        )}
      >
        <div
          style={css(
            'position:absolute;inset:0;background:linear-gradient(100deg,transparent 32%,rgba(255,255,255,.20) 50%,transparent 68%);transform:translateX(-120%);animation:shine 2.8s ease-in-out infinite;',
          )}
        ></div>
        <div style={css('position:relative;display:flex;align-items:center;gap:13px;')}>
          <img src={LOGO} alt="" style={css('width:36px;height:36px;animation:floaty 3s ease-in-out infinite;')} />
          <div>
            <div style={css('font-weight:800;font-size:18px;')}>Trade on Herond</div>
            <div style={css('font-size:12px;opacity:.82;')}>Keyless wallet · zero gas to start</div>
          </div>
        </div>
        <button
          style={css(
            'position:relative;padding:11px 20px;border-radius:8px;border:none;background:var(--aurora-flow);color:#fff;font-weight:700;font-family:inherit;font-size:13px;cursor:pointer;',
          )}
        >
          Connect ↗
        </button>
        <span style={css('position:absolute;top:7px;right:10px;font-size:9px;font-family:var(--font-mono);opacity:.7;')}>
          HTML5 · interactive
        </span>
      </div>
      <div style={css('font-size:12px;color:var(--text-secondary);')}>Animated, clickable rich-media banner.</div>
    </div>
  )
}

export default function CreateCampaign({ state, set }) {
  const { openStep, campaignName, adgroupName, adgroupType, pricing, targetTab, selectedGeo, adType } = state

  const toggle = (n) => () => set({ openStep: openStep === n ? 0 : n })
  const curAg = ADGROUP_TYPES.find((a) => a[0] === adgroupType) || ADGROUP_TYPES[4]
  const targetTabLabel = (TARGET_TABS.find((t) => t[0] === targetTab) || TARGET_TABS[0])[1]
  const adTypeLabel = (AD_TYPES.find((a) => a[0] === adType) || AD_TYPES[2])[1]

  return (
    <div style={css('max-width:1000px;margin:0 auto;animation:fadeUp .35s ease both;')}>
      <div style={css('display:flex;align-items:center;justify-content:center;gap:18px;margin-bottom:20px;')}>
        {FLOW.map((label, i) => (
          <div key={label} style={css(flowStepStyle(i === 1))}>
            <span style={css(flowNum(i === 1))}>{i + 1}</span> {label}
          </div>
        ))}
      </div>
      <h2 style={css('font-size:28px;font-weight:800;letter-spacing:-.6px;margin:0 0 20px;')}>Create campaign</h2>

      {/* ---- Step 1: Campaign & adgroup setup ---- */}
      <div style={css(CARD)}>
        <StepHeader
          n={1}
          openStep={openStep}
          onToggle={toggle(1)}
          title="Campaign & adgroup setup"
          sub="Configure your basic settings"
        />
        {openStep === 1 && (
          <div style={css('padding:0 22px 22px;')}>
            <div style={css('height:1px;background:var(--border-subtle);margin-bottom:20px;')}></div>
            <div style={css('display:grid;grid-template-columns:1fr 280px;gap:24px;')}>
              <div>
                <label style={css(LABEL)}>Create campaign</label>
                <input
                  value={campaignName}
                  onChange={(e) => set({ campaignName: e.target.value })}
                  placeholder="Enter name of the new campaign"
                  style={css(INPUT)}
                />
                <label style={css(LABEL)}>Create an adgroup</label>
                <input
                  value={adgroupName}
                  onChange={(e) => set({ adgroupName: e.target.value })}
                  placeholder="Enter name of the new adgroup"
                  style={css(INPUT)}
                />
                <label style={css(LABEL)}>Adgroup type</label>
                <div style={css('display:flex;flex-direction:column;gap:8px;')}>
                  {ADGROUP_TYPES.map(([k, label], i) => {
                    const sel = adgroupType === k
                    return (
                      <button key={k} onClick={() => set({ adgroupType: k })} style={css(selRow(sel))}>
                        <span style={css(numBadge(sel))}>{i + 1}</span>
                        <span style={css('flex:1;text-align:left;font-weight:600;')}>{label}</span>
                        <span style={css(radio(sel))}></span>
                      </button>
                    )
                  })}
                </div>
                <label style={css('display:block;font-size:14px;font-weight:700;margin:18px 0 8px;')}>Pricing model</label>
                <div style={css('display:grid;grid-template-columns:1fr 1fr;gap:11px;')}>
                  {PRICING_MODELS.map(([k, label]) => {
                    const sel = pricing === k
                    return (
                      <button key={k} onClick={() => set({ pricing: k })} style={css(pricingCard(sel))}>
                        <span style={css('font-weight:700;')}>{label}</span>
                        <span style={css(radio(sel))}></span>
                      </button>
                    )
                  })}
                </div>
              </div>
              <div style={css(HINT_CARD)}>
                <div style={css(HINT_ICON)}>
                  <Icon name="help-circle" style={css('color:var(--color-primary);')} />
                </div>
                <div style={css('font-size:15px;font-weight:800;margin-bottom:8px;')}>{curAg[1]}</div>
                <p style={css('font-size:13px;line-height:1.55;color:var(--text-secondary);margin:0;')}>{curAg[2]}</p>
              </div>
            </div>
            <div style={css('display:flex;justify-content:flex-end;margin-top:20px;')}>
              <button onClick={() => set({ openStep: 2 })} style={css(CONTINUE)}>
                Continue
              </button>
            </div>
          </div>
        )}
      </div>

      {/* ---- Step 2: Targeting ---- */}
      <div style={css(CARD)}>
        <StepHeader
          n={2}
          openStep={openStep}
          onToggle={toggle(2)}
          title="Targeting"
          sub="Configure targeting settings and preferences"
        />
        {openStep === 2 && (
          <div style={css('padding:0 22px 22px;')}>
            <div style={css('height:1px;background:var(--border-subtle);margin-bottom:18px;')}></div>
            <div style={css('display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;')}>
              <div style={css('font-size:16px;font-weight:800;')}>Targeting Settings</div>
              <div style={css('display:flex;gap:16px;font-size:13px;font-weight:600;')}>
                <span style={css('color:var(--color-primary);cursor:pointer;display:flex;align-items:center;gap:5px;')}>
                  <Icon name="rotate-ccw" style={css('font-size:13px;')} /> Reset all
                </span>
                <span style={css('color:var(--color-primary);cursor:pointer;display:flex;align-items:center;gap:5px;')}>
                  <Icon name="upload" style={css('font-size:13px;')} /> Import settings
                </span>
              </div>
            </div>
            <div style={css('display:grid;grid-template-columns:200px 1fr 1fr;gap:14px;')}>
              <div>
                <div className="ov" style={css('color:var(--text-tertiary);margin-bottom:10px;')}>
                  Targetings
                </div>
                <div style={css('display:flex;flex-direction:column;gap:7px;')}>
                  {TARGET_TABS.map(([k, label, icon]) => (
                    <button key={k} onClick={() => set({ targetTab: k })} style={css(tabBtn(targetTab === k))}>
                      <Icon name={icon} /> {label}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <div className="ov" style={css('color:var(--text-tertiary);margin-bottom:10px;display:flex;align-items:center;gap:6px;')}>
                  <Icon name="globe" style={css('color:var(--color-primary);font-size:14px;')} /> {targetTabLabel}
                </div>
                <div
                  style={css(
                    'display:flex;align-items:center;gap:8px;padding:10px 12px;border-radius:10px;border:1px solid var(--border-default);background:#fff;margin-bottom:10px;font-size:13px;color:var(--text-tertiary);',
                  )}
                >
                  <Icon name="search" /> Search
                </div>
                <div style={css('display:flex;flex-direction:column;gap:7px;max-height:300px;overflow-y:auto;')}>
                  {REGIONS.map((regionName) => {
                    const sel = selectedGeo.includes(regionName)
                    return (
                      <button
                        key={regionName}
                        onClick={() =>
                          set({
                            selectedGeo: sel
                              ? selectedGeo.filter((g) => g !== regionName)
                              : [...selectedGeo, regionName],
                          })
                        }
                        style={css(geoRow(sel))}
                      >
                        <Icon name="chevron-down" style={css('color:var(--text-tertiary);font-size:14px;')} />
                        <span style={css('flex:1;text-align:left;')}>{regionName}</span>
                        <Icon
                          name={sel ? 'check-circle' : 'plus-circle'}
                          style={css(`color:${sel ? 'var(--color-primary)' : 'var(--text-tertiary)'};font-size:15px;`)}
                        />
                      </button>
                    )
                  })}
                </div>
              </div>
              <div>
                <div className="ov" style={css('color:var(--text-tertiary);margin-bottom:10px;display:flex;align-items:center;gap:6px;')}>
                  <Icon name="check-circle" style={css('color:var(--color-primary);font-size:14px;')} /> Selected targeting
                </div>
                <div
                  style={css(
                    'border-radius:12px;border:1px solid rgba(51,115,246,.18);background:rgba(51,115,246,.04);min-height:240px;padding:12px;display:flex;flex-direction:column;gap:8px;',
                  )}
                >
                  {selectedGeo.length > 0 ? (
                    selectedGeo.map((regionName) => (
                      <div
                        key={regionName}
                        style={css(
                          'display:flex;align-items:center;gap:8px;padding:10px 12px;border-radius:9px;background:#fff;border:1px solid var(--border-default);font-size:13px;font-weight:600;',
                        )}
                      >
                        <span style={css('flex:1;')}>{regionName}</span>
                        <button
                          onClick={() => set({ selectedGeo: selectedGeo.filter((g) => g !== regionName) })}
                          style={css('border:none;background:none;color:var(--text-tertiary);cursor:pointer;')}
                        >
                          <Icon name="x" style={css('font-size:15px;')} />
                        </button>
                      </div>
                    ))
                  ) : (
                    <div
                      style={css(
                        'flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;color:var(--text-tertiary);gap:8px;text-align:center;',
                      )}
                    >
                      <Icon name="globe" style={css('font-size:26px;')} />
                      <span style={css('font-size:13px;')}>
                        Pick regions on the left to
                        <br />
                        build your targeting
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div style={css('display:flex;justify-content:flex-end;margin-top:20px;')}>
              <button onClick={() => set({ openStep: 3 })} style={css(CONTINUE)}>
                Continue
              </button>
            </div>
          </div>
        )}
      </div>

      {/* ---- Step 3: Ad setup ---- */}
      <div style={css(CARD)}>
        <StepHeader
          n={3}
          openStep={openStep}
          onToggle={toggle(3)}
          title="Ad setup"
          sub="Configure tracking, destination URLs, and ad creatives"
        />
        {openStep === 3 && (
          <div style={css('padding:0 22px 22px;')}>
            <div style={css('height:1px;background:var(--border-subtle);margin-bottom:18px;')}></div>
            <div className="ov" style={css('color:var(--text-secondary);margin-bottom:14px;')}>
              Destination &amp; tracking
            </div>
            <div style={css('display:grid;grid-template-columns:1fr 280px;gap:24px;')}>
              <div>
                <label style={css(LABEL)}>Click URL</label>
                <input placeholder="https://" style={css(INPUT)} />
                <div style={css('display:flex;align-items:center;justify-content:space-between;margin-bottom:14px;')}>
                  <div>
                    <div style={css('font-size:14px;font-weight:700;')}>UTM Tags</div>
                    <div style={css('font-size:12px;color:var(--text-secondary);')}>Add tracking parameters for analytics</div>
                  </div>
                  <button
                    style={css(
                      'padding:9px 16px;border-radius:9px;border:none;background:rgba(51,115,246,.1);color:var(--color-primary);font-family:inherit;font-size:13px;font-weight:700;cursor:pointer;',
                    )}
                  >
                    Edit tags
                  </button>
                </div>
                <div style={css('display:flex;align-items:center;justify-content:space-between;')}>
                  <div>
                    <div style={css('font-size:14px;font-weight:700;')}>Macros</div>
                    <div style={css('font-size:12px;color:var(--text-secondary);')}>Auto-populate links with click data</div>
                  </div>
                  <button
                    style={css(
                      'padding:9px 16px;border-radius:9px;border:none;background:rgba(51,115,246,.1);color:var(--color-primary);font-family:inherit;font-size:13px;font-weight:700;cursor:pointer;',
                    )}
                  >
                    Add macros
                  </button>
                </div>
                <div
                  style={css(
                    'margin-top:16px;padding:15px;border-radius:13px;background:rgba(107,51,250,.06);border:1px solid rgba(107,51,250,.18);display:flex;align-items:center;gap:13px;',
                  )}
                >
                  <div
                    style={css(
                      'width:40px;height:40px;flex:none;border-radius:11px;background:rgba(107,51,250,.14);display:flex;align-items:center;justify-content:center;',
                    )}
                  >
                    <Icon name="radar" style={css('color:var(--herond-violet);')} />
                  </div>
                  <div style={css('flex:1;')}>
                    <div style={css('font-size:14px;font-weight:700;')}>Track visitors with Pixel code</div>
                    <div style={css('font-size:12px;color:var(--text-secondary);')}>
                      Measure activity &amp; build retargeting audiences
                    </div>
                  </div>
                  <button
                    style={css(
                      'padding:9px 15px;border-radius:9px;border:1px solid var(--border-default);background:#fff;color:var(--text-primary);font-family:inherit;font-size:13px;font-weight:700;cursor:pointer;white-space:nowrap;',
                    )}
                  >
                    Create audience
                  </button>
                </div>
              </div>
              <div style={css(HINT_CARD)}>
                <div style={css(HINT_ICON)}>
                  <Icon name="help-circle" style={css('color:var(--color-primary);')} />
                </div>
                <div style={css('font-size:15px;font-weight:800;margin-bottom:8px;')}>Click URL</div>
                <p style={css('font-size:13px;line-height:1.55;color:var(--text-secondary);margin:0;')}>
                  The destination users land on after clicking your ad. Use one URL for the whole adgroup or set
                  per creative.
                </p>
              </div>
            </div>

            <div className="ov" style={css('color:var(--text-secondary);margin:22px 0 14px;')}>
              Creative setup
            </div>
            <label
              style={css(
                'display:flex;align-items:center;gap:11px;padding:14px 16px;border-radius:12px;background:rgba(51,115,246,.06);border:1px solid rgba(51,115,246,.18);cursor:pointer;margin-bottom:16px;',
              )}
            >
              <input type="checkbox" defaultChecked style={css('accent-color:var(--color-primary);width:18px;height:18px;')} />
              <span style={css('flex:1;font-size:14px;font-weight:600;')}>Run ads after approval</span>
              <span style={css('font-size:12px;color:var(--text-secondary);')}>Ads start immediately once approved</span>
            </label>
            <label style={css('display:block;font-size:14px;font-weight:700;margin-bottom:10px;')}>Display ad type</label>
            <div style={css('display:grid;grid-template-columns:repeat(4,1fr);gap:12px;')}>
              {AD_TYPES.map(([k, label, icon, color]) => {
                const sel = adType === k
                return (
                  <button key={k} onClick={() => set({ adType: k })} style={css(adTypeBtn(sel))}>
                    <span style={css(adTypeIconBox(color))}>
                      <Icon name={icon} />
                    </span>
                    <span style={css('flex:1;text-align:left;font-weight:600;font-size:14px;')}>{label}</span>
                    <span style={css(radio(sel))}></span>
                  </button>
                )
              })}
            </div>

            <div className="ov" style={css('color:var(--text-secondary);margin:22px 0 12px;display:flex;align-items:center;gap:7px;')}>
              <Icon name="eye" style={css('color:var(--color-primary);font-size:14px;')} /> Creative preview · {adTypeLabel}
            </div>
            <div
              style={css(
                'background:var(--surface-sunken);border:1px dashed var(--border-strong);border-radius:14px;padding:30px;display:flex;align-items:center;justify-content:center;min-height:230px;',
              )}
            >
              <CreativePreview adType={adType} />
            </div>

            <div style={css('display:flex;justify-content:space-between;align-items:center;margin-top:24px;')}>
              <button
                onClick={() => set({ view: 'fund' })}
                style={css(
                  'padding:13px 24px;border-radius:11px;border:1px solid var(--border-default);background:var(--surface-card);color:var(--text-primary);font-family:inherit;font-size:14px;font-weight:700;cursor:pointer;',
                )}
              >
                Back
              </button>
              <button
                onClick={() => set({ view: 'campaigns' })}
                style={css(
                  'display:flex;align-items:center;gap:8px;padding:13px 28px;border-radius:11px;border:none;background:var(--aurora-flow);color:#fff;font-family:inherit;font-size:14px;font-weight:700;cursor:pointer;box-shadow:0 10px 24px rgba(107,51,250,.3);',
                )}
              >
                Apply for approval <Icon name="check" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

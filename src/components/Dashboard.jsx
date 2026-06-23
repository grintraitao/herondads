import css from '../css.js'
import Icon from '../Icon.jsx'
import { buildSpend, donut } from '../data/charts.js'
import { stats, barCharts, offers } from '../data/dashboard.js'

// Marketplace is built but toggled off in the source design.
const SHOW_MARKETPLACE = false

export default function Dashboard() {
  const sp = buildSpend()
  const devices = donut()

  return (
    <div style={css('animation:fadeUp .35s ease both;')}>
      {/* Heading + date range */}
      <div
        style={css(
          'display:flex;align-items:center;justify-content:space-between;margin-bottom:18px;flex-wrap:wrap;gap:12px;',
        )}
      >
        <div style={css('font-size:14px;color:var(--text-secondary);')}>
          Your traffic, defended. Here's the last 7 days.
        </div>
        <div
          style={css(
            'display:flex;align-items:center;gap:8px;padding:9px 14px;border-radius:11px;border:1px solid var(--border-default);background:var(--surface-card);font-size:13px;font-weight:600;cursor:pointer;',
          )}
        >
          <Icon name="calendar" style={css('color:var(--color-primary);')} /> Jun 17 – Jun 23, 2026{' '}
          <Icon name="chevron-down" style={css('color:var(--text-tertiary);')} />
        </div>
      </div>

      {/* Stat cards */}
      <div style={css('display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-bottom:22px;')}>
        {stats.map((s) => (
          <div
            key={s.label}
            style={css(
              'background:var(--surface-card);border:1px solid var(--border-default);border-radius:16px;padding:17px 19px;box-shadow:var(--shadow-sm);',
            )}
          >
            <div style={css('display:flex;align-items:center;gap:10px;margin-bottom:13px;')}>
              <div
                style={css(
                  `width:34px;height:34px;border-radius:10px;display:flex;align-items:center;justify-content:center;background:${s.iconBg};color:${s.iconColor};`,
                )}
              >
                <Icon name={s.icon} />
              </div>
              <span className="ov" style={css('color:var(--text-secondary);')}>
                {s.label}
              </span>
            </div>
            <div style={css('display:flex;gap:12px;')}>
              <div style={css('flex:1.1;')}>
                <div style={css('font-size:10px;color:var(--text-tertiary);margin-bottom:3px;letter-spacing:.5px;')}>
                  TODAY
                </div>
                <div style={css('font-size:21px;font-weight:800;font-family:var(--font-mono);letter-spacing:-.5px;')}>
                  {s.today}
                </div>
              </div>
              <div style={css('flex:1;border-left:1px solid var(--border-subtle);padding-left:12px;')}>
                <div style={css('font-size:10px;color:var(--text-tertiary);margin-bottom:3px;letter-spacing:.5px;')}>
                  YEST.
                </div>
                <div style={css('font-size:13px;font-weight:700;font-family:var(--font-mono);')}>{s.yest}</div>
                <div style={css(`font-size:11px;font-weight:700;color:${s.d1Color};`)}>{s.d1}</div>
              </div>
              <div style={css('flex:1;')}>
                <div style={css('font-size:10px;color:var(--text-tertiary);margin-bottom:3px;letter-spacing:.5px;')}>
                  7 DAYS
                </div>
                <div style={css('font-size:13px;font-weight:700;font-family:var(--font-mono);')}>{s.week}</div>
                <div style={css(`font-size:11px;font-weight:700;color:${s.d2Color};`)}>{s.d2}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Spend over time + Devices */}
      <div style={css('display:grid;grid-template-columns:2fr 1fr;gap:14px;margin-bottom:22px;')}>
        <div
          style={css(
            'background:var(--surface-card);border:1px solid var(--border-default);border-radius:16px;padding:20px;',
          )}
        >
          <div style={css('display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;')}>
            <div>
              <div className="ov" style={css('color:var(--text-tertiary);margin-bottom:4px;')}>
                Spend over time
              </div>
              <span style={css('font-size:15px;font-weight:700;')}>$7,940.20 this week</span>
            </div>
            <span style={css('font-size:13px;color:var(--color-up);font-weight:700;')}>▲ 18.4%</span>
          </div>
          <svg viewBox="0 0 720 210" style={css('width:100%;height:210px;display:block;')}>
            <defs>
              <linearGradient id="spg" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#3373F6" stopOpacity=".22"></stop>
                <stop offset="1" stopColor="#3373F6" stopOpacity="0"></stop>
              </linearGradient>
            </defs>
            <line x1="0" y1="50" x2="720" y2="50" stroke="rgba(15,26,53,.07)"></line>
            <line x1="0" y1="105" x2="720" y2="105" stroke="rgba(15,26,53,.07)"></line>
            <line x1="0" y1="160" x2="720" y2="160" stroke="rgba(15,26,53,.07)"></line>
            <path d={sp.area} fill="url(#spg)"></path>
            <path d={sp.line} fill="none" stroke="#3373F6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg>
          <div
            style={css(
              'display:flex;justify-content:space-between;font-size:11px;color:var(--text-tertiary);margin-top:4px;',
            )}
          >
            <span>Jun 17</span>
            <span>Jun 19</span>
            <span>Jun 21</span>
            <span>Jun 23</span>
          </div>
        </div>

        <div
          style={css(
            'background:var(--surface-card);border:1px solid var(--border-default);border-radius:16px;padding:20px;',
          )}
        >
          <div className="ov" style={css('color:var(--text-tertiary);margin-bottom:14px;')}>
            Devices
          </div>
          <div style={css('display:flex;align-items:center;gap:16px;')}>
            <svg viewBox="0 0 120 120" style={css('width:118px;height:118px;flex:none;')}>
              <circle cx="60" cy="60" r="46" fill="none" stroke="rgba(15,26,53,.07)" strokeWidth="15"></circle>
              {devices.map((d) => (
                <circle
                  key={d.name}
                  cx="60"
                  cy="60"
                  r="46"
                  fill="none"
                  stroke={d.color}
                  strokeWidth="15"
                  strokeDasharray={d.dash}
                  strokeDashoffset={d.offset}
                  transform="rotate(-90 60 60)"
                ></circle>
              ))}
              <text x="60" y="56" textAnchor="middle" fill="var(--text-primary)" fontSize="19" fontWeight="800" fontFamily="JetBrains Mono">
                68%
              </text>
              <text x="60" y="72" textAnchor="middle" fill="var(--text-tertiary)" fontSize="9">
                mobile
              </text>
            </svg>
            <div style={css('flex:1;display:flex;flex-direction:column;gap:11px;')}>
              {devices.map((d) => (
                <div key={d.name} style={css('display:flex;align-items:center;gap:8px;font-size:13px;')}>
                  <span style={css(`width:10px;height:10px;border-radius:3px;background:${d.color};`)}></span>
                  <span style={css('flex:1;color:var(--text-secondary);')}>{d.name}</span>
                  <span style={css('font-weight:700;font-family:var(--font-mono);')}>{d.pct}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bar charts */}
      <div style={css('display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-bottom:24px;')}>
        {barCharts.map((bc) => (
          <div
            key={bc.title}
            style={css(
              'background:var(--surface-card);border:1px solid var(--border-default);border-radius:16px;padding:18px;',
            )}
          >
            <div className="ov" style={css('color:var(--text-tertiary);margin-bottom:2px;')}>
              {bc.title}
            </div>
            <div style={css('font-size:12px;color:var(--text-tertiary);margin-bottom:15px;')}>Spent, $</div>
            <div style={css('display:flex;align-items:flex-end;gap:9px;height:128px;')}>
              {bc.bars.map((b) => (
                <div
                  key={b.label}
                  style={css(
                    'flex:1;display:flex;flex-direction:column;align-items:center;gap:6px;height:100%;justify-content:flex-end;',
                  )}
                >
                  <div style={css('font-size:10px;font-weight:700;color:var(--text-secondary);font-family:var(--font-mono);')}>
                    {b.val}
                  </div>
                  <div style={css(`width:100%;border-radius:6px 6px 0 0;background:${b.color};height:${b.h}px;`)}></div>
                  <div
                    style={css(
                      'font-size:10px;color:var(--text-tertiary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:100%;',
                    )}
                  >
                    {b.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Marketplace (hidden by default, mirroring the source) */}
      {SHOW_MARKETPLACE && (
        <>
          <div style={css('display:flex;align-items:center;justify-content:space-between;margin-bottom:14px;')}>
            <div>
              <div className="ov" style={css('color:var(--color-primary);margin-bottom:4px;')}>
                Marketplace
              </div>
              <div style={css('font-size:18px;font-weight:800;letter-spacing:-.4px;')}>
                Hot offers for broader exposure
              </div>
            </div>
            <button
              style={css(
                'display:flex;align-items:center;gap:6px;padding:9px 16px;border-radius:10px;border:1px solid var(--border-default);background:var(--surface-card);color:var(--text-primary);font-family:inherit;font-size:13px;font-weight:600;cursor:pointer;',
              )}
            >
              Show more <Icon name="arrow-right" />
            </button>
          </div>
          <div style={css('display:grid;grid-template-columns:repeat(3,1fr);gap:14px;')}>
            {offers.map((o) => (
              <div
                key={o.name}
                style={css(
                  'background:var(--surface-card);border:1px solid var(--border-default);border-radius:16px;padding:19px;display:flex;flex-direction:column;box-shadow:var(--shadow-sm);',
                )}
              >
                <div style={css('display:flex;gap:12px;margin-bottom:13px;')}>
                  <div
                    style={css(
                      `width:46px;height:46px;flex:none;border-radius:12px;background:${o.logoBg};display:flex;align-items:center;justify-content:center;font-weight:800;font-size:18px;color:#fff;`,
                    )}
                  >
                    {o.initial}
                  </div>
                  <div style={css('min-width:0;')}>
                    <div style={css('font-size:14px;font-weight:700;line-height:1.3;margin-bottom:3px;')}>{o.name}</div>
                    <div style={css('font-size:12px;color:var(--color-primary);font-weight:600;')}>{o.category}</div>
                  </div>
                </div>
                <div style={css('display:flex;flex-wrap:wrap;gap:6px;margin-bottom:12px;')}>
                  {o.tags.map((t) => (
                    <span
                      key={t}
                      style={css(
                        'font-size:11px;font-weight:600;padding:4px 9px;border-radius:999px;background:var(--surface-sunken);color:var(--text-secondary);',
                      )}
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div style={css('display:flex;align-items:center;gap:6px;font-size:12px;color:var(--text-tertiary);margin-bottom:13px;')}>
                  <Icon name="link" style={css('font-size:13px;')} /> {o.site}
                </div>
                <div style={css('display:flex;align-items:baseline;gap:8px;margin:auto 0 13px;')}>
                  <span style={css('font-size:13px;color:var(--text-tertiary);text-decoration:line-through;font-family:var(--font-mono);')}>
                    {o.was}
                  </span>
                  <span style={css('font-size:20px;font-weight:800;color:var(--color-up);font-family:var(--font-mono);')}>
                    {o.now}
                  </span>
                </div>
                <button
                  style={css(
                    'width:100%;padding:11px;border-radius:10px;border:1px solid var(--color-primary);background:rgba(51,115,246,.06);color:var(--color-primary);font-family:inherit;font-size:13px;font-weight:700;cursor:pointer;',
                  )}
                >
                  View offer
                </button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

import { Fragment } from 'react'
import css from '../css.js'
import Icon from '../Icon.jsx'
import { tableData, subMap, levels, lvIdx, audienceLegend } from '../data/tables.js'
import { hierPill } from '../styles.js'

export default function TableView({ view, set }) {
  const td = tableData(view)
  const startCreate = () => set({ view: 'fund' })

  const cur = lvIdx[view]
  const showHier = cur !== undefined
  const showAudienceLegend = view === 'audiences'

  return (
    <div style={css('animation:fadeUp .35s ease both;')}>
      <div style={css('margin-bottom:18px;')}>
        {showHier && (
          <div style={css('display:flex;align-items:center;gap:6px;margin-bottom:9px;flex-wrap:wrap;')}>
            {levels.map((label, i) => (
              <Fragment key={label}>
                <span style={css(hierPill(i === cur))}>{label}</span>
                {i < levels.length - 1 && (
                  <Icon name="chevron-right" style={css('color:var(--text-tertiary);font-size:14px;')} />
                )}
              </Fragment>
            ))}
          </div>
        )}
        <div style={css('font-size:14px;color:var(--text-secondary);line-height:1.5;max-width:720px;')}>
          {subMap[view] || ''}
        </div>
      </div>

      {/* Filters + CTA */}
      <div
        style={css(
          'display:flex;align-items:center;justify-content:space-between;margin-bottom:18px;flex-wrap:wrap;gap:12px;',
        )}
      >
        <div style={css('display:flex;gap:8px;flex-wrap:wrap;')}>
          {td.filters.map((f) => (
            <span key={f.label} style={css(f.style)}>
              {f.label}
            </span>
          ))}
        </div>
        <button
          onClick={startCreate}
          style={css(
            'display:flex;align-items:center;gap:7px;padding:10px 16px;border-radius:10px;border:none;background:var(--aurora-flow);color:#fff;font-family:inherit;font-size:13px;font-weight:700;cursor:pointer;',
          )}
        >
          <Icon name="plus" /> {td.cta}
        </button>
      </div>

      {/* KPIs */}
      <div style={css('display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-bottom:18px;')}>
        {td.kpis.map((k) => (
          <div
            key={k.label}
            style={css(
              'background:var(--surface-card);border:1px solid var(--border-default);border-radius:14px;padding:15px 17px;box-shadow:var(--shadow-sm);',
            )}
          >
            <div className="ov" style={css('color:var(--text-tertiary);margin-bottom:7px;')}>
              {k.label}
            </div>
            <div style={css('font-size:20px;font-weight:800;font-family:var(--font-mono);letter-spacing:-.5px;')}>
              {k.value}
            </div>
            <div style={css(`font-size:11px;font-weight:700;color:${k.color};margin-top:2px;`)}>{k.delta}</div>
          </div>
        ))}
      </div>

      {/* Audience legend */}
      {showAudienceLegend && (
        <div style={css('display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-bottom:18px;')}>
          {audienceLegend.map((a) => (
            <div
              key={a.name}
              style={css(
                'background:var(--surface-card);border:1px solid var(--border-default);border-radius:14px;padding:15px 16px;display:flex;gap:12px;',
              )}
            >
              <div
                style={css(
                  'width:30px;height:30px;flex:none;border-radius:9px;background:rgba(51,115,246,.1);color:var(--color-primary);display:flex;align-items:center;justify-content:center;',
                )}
              >
                <Icon name="info" />
              </div>
              <div style={css('min-width:0;')}>
                <div
                  style={css(
                    'font-size:14px;font-weight:700;margin-bottom:3px;display:flex;align-items:center;gap:6px;',
                  )}
                >
                  <Icon name={a.icon} style={css('color:var(--text-tertiary);font-size:14px;')} /> {a.name}
                </div>
                <div style={css('font-size:12.5px;color:var(--text-secondary);line-height:1.45;')}>{a.desc}</div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Table */}
      <div
        style={css(
          'background:var(--surface-card);border:1px solid var(--border-default);border-radius:16px;overflow:hidden;box-shadow:var(--shadow-sm);',
        )}
      >
        <div
          style={css(
            `display:grid;grid-template-columns:${td.cols};padding:14px 20px;border-bottom:1px solid var(--border-default);font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.6px;color:var(--text-tertiary);`,
          )}
        >
          {td.head.map((h) => (
            <div key={h.label} style={css(h.align)}>
              {h.label}
            </div>
          ))}
        </div>
        {td.rows.map((r, ri) => (
          <div
            key={ri}
            style={css(
              `display:grid;grid-template-columns:${td.cols};padding:15px 20px;border-bottom:1px solid var(--border-subtle);align-items:center;font-size:14px;`,
            )}
          >
            {r.cells.map((c, ci) => (
              <div key={ci} style={css(c.style)}>
                {c.html}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

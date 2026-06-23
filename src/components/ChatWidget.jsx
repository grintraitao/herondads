import css from '../css.js'
import Icon from '../Icon.jsx'

export default function ChatWidget({ open, set }) {
  const toggle = () => set({ chatOpen: !open })

  return (
    <>
      {open && (
        <div
          style={css(
            'position:fixed;right:24px;bottom:96px;z-index:60;width:340px;background:var(--surface-card);border:1px solid var(--border-default);border-radius:18px;box-shadow:0 24px 60px rgba(15,26,53,.22);overflow:hidden;animation:popIn .25s ease both;',
          )}
        >
          <div
            style={css(
              'display:flex;align-items:center;gap:10px;padding:15px 16px;border-bottom:1px solid var(--border-default);background:linear-gradient(120deg,rgba(51,115,246,.1),rgba(107,51,250,.1));',
            )}
          >
            <div
              style={css(
                'width:34px;height:34px;border-radius:10px;background:var(--aurora-flow);display:flex;align-items:center;justify-content:center;color:#fff;',
              )}
            >
              <Icon name="sparkles" />
            </div>
            <div style={css('flex:1;')}>
              <div style={css('font-size:14px;font-weight:700;')}>Herond Support</div>
              <div style={css('font-size:11px;color:var(--color-up);display:flex;align-items:center;gap:5px;')}>
                <span
                  style={css(
                    'width:6px;height:6px;border-radius:50%;background:var(--color-up);animation:blink 1.6s infinite;',
                  )}
                ></span>{' '}
                Online · replies in ~2 min
              </div>
            </div>
            <button
              onClick={toggle}
              style={css(
                'width:28px;height:28px;border-radius:8px;border:none;background:var(--surface-sunken);color:var(--text-secondary);cursor:pointer;',
              )}
            >
              <Icon name="x" />
            </button>
          </div>
          <div style={css('padding:16px;display:flex;flex-direction:column;gap:10px;max-height:280px;overflow-y:auto;')}>
            <div
              style={css(
                'align-self:flex-start;max-width:82%;background:var(--surface-sunken);padding:10px 13px;border-radius:14px 14px 14px 4px;font-size:13px;line-height:1.5;color:var(--text-primary);',
              )}
            >
              Hi 👋 Need any help setting up your campaign or funding with crypto?
            </div>
            <div style={css('display:flex;flex-wrap:wrap;gap:7px;')}>
              <span
                style={css(
                  'font-size:12px;padding:7px 11px;border-radius:999px;border:1px solid var(--color-primary);background:rgba(51,115,246,.06);color:var(--color-primary);cursor:pointer;',
                )}
              >
                How to fund with USDT?
              </span>
              <span
                style={css(
                  'font-size:12px;padding:7px 11px;border-radius:999px;border:1px solid var(--border-default);background:var(--surface-card);color:var(--text-secondary);cursor:pointer;',
                )}
              >
                Approval time?
              </span>
            </div>
          </div>
          <div style={css('display:flex;gap:8px;padding:12px 14px;border-top:1px solid var(--border-default);')}>
            <input
              placeholder="Type a message…"
              style={css(
                'flex:1;padding:11px 13px;border-radius:10px;border:1px solid var(--border-default);background:#fff;color:var(--text-primary);font-family:inherit;font-size:13px;outline:none;',
              )}
            />
            <button
              style={css(
                'width:40px;height:40px;flex:none;border-radius:10px;border:none;background:var(--color-primary);color:#fff;cursor:pointer;',
              )}
            >
              <Icon name="send" />
            </button>
          </div>
        </div>
      )}

      <button
        onClick={toggle}
        style={css(
          'position:fixed;right:24px;bottom:24px;z-index:60;width:58px;height:58px;border-radius:50%;border:none;background:var(--aurora-flow);color:#fff;cursor:pointer;box-shadow:0 12px 28px rgba(51,115,246,.4);display:flex;align-items:center;justify-content:center;',
        )}
      >
        <Icon name={open ? 'chevron-down' : 'message-circle'} />
      </button>
    </>
  )
}

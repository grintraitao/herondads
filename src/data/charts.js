// Chart geometry helpers, ported verbatim from the prototype logic.

// Spend-over-time area + line path strings for a 720x210 viewBox.
export function buildSpend() {
  const data = [380, 520, 470, 690, 610, 880, 760, 950, 1020, 1180, 980, 1240, 1120, 1284]
  const w = 720, h = 210, max = 1400, pad = 14
  const n = data.length
  const x = (i) => (i / (n - 1)) * w
  const y = (v) => h - pad - (v / max) * (h - pad * 2)
  let line = ''
  data.forEach((v, i) => {
    line += (i === 0 ? 'M' : 'L') + x(i).toFixed(1) + ' ' + y(v).toFixed(1) + ' '
  })
  const area = line + `L${w} ${h} L0 ${h} Z`
  return { line: line.trim(), area }
}

// Device-share donut segments (dasharray/offset around an r=46 circle).
export function donut() {
  const C = 2 * Math.PI * 46
  const segs = [
    { name: 'Mobile', pct: 0.68, color: '#3373F6' },
    { name: 'Desktop', pct: 0.26, color: '#6b33fa' },
    { name: 'Tablet', pct: 0.06, color: '#00CCC0' },
  ]
  let start = 0
  return segs.map((s) => {
    const dash = s.pct * C
    const o = {
      name: s.name,
      color: s.color,
      pct: Math.round(s.pct * 100) + '%',
      dash: dash.toFixed(1) + ' ' + (C - dash).toFixed(1),
      offset: (-start * C).toFixed(1),
    }
    start += s.pct
    return o
  })
}

// Bar-chart bars: [label, value][] -> sized + tinted bars.
export function bars(arr, max, hue) {
  return arr.map((a) => ({
    label: a[0],
    val: a[1],
    h: Math.round((a[1] / max) * 120),
    color: `rgba(${hue},${0.4 + 0.55 * (a[1] / max)})`,
  }))
}

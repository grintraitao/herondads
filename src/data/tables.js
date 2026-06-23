// Per-view table definitions, ported verbatim from the prototype.

function filterChips(arr) {
  return arr.map((label, i) => ({
    label,
    style: `padding:8px 15px;border-radius:999px;font-size:13px;font-weight:600;cursor:pointer;border:1px solid ${i === 0 ? 'transparent' : 'var(--border-default)'};background:${i === 0 ? 'rgba(51,115,246,.1)' : 'var(--surface-card)'};color:${i === 0 ? 'var(--color-primary)' : 'var(--text-secondary)'};`,
  }))
}

const pill = (txt, color, bg) => ({
  html: txt,
  style: `display:inline-flex;align-items:center;gap:5px;padding:4px 11px;border-radius:999px;font-size:12px;font-weight:700;color:${color};background:${bg};justify-self:start;`,
})
const ACT = ['Active', '#0a9d63', 'rgba(22,199,132,.14)']
const PAU = ['Paused', '#b9770d', 'rgba(245,166,35,.16)']
const REV = ['In review', '#6b33fa', 'rgba(107,51,250,.13)']
const PEN = ['Pending', '#1b5fe0', 'rgba(51,115,246,.12)']
const name = (t) => ({ html: t, style: 'font-weight:700;color:var(--text-primary);' })
const mono = (t) => ({ html: t, style: 'font-family:var(--font-mono);color:var(--text-primary);' })
const dim = (t) => ({ html: t, style: 'color:var(--text-secondary);' })
const head = (arr) => arr.map((label) => ({ label, align: '' }))
const kpi = (label, value, delta, up) => ({ label, value, delta, color: up ? '#0a9d63' : '#ff4070' })

export function tableData(view) {
  if (view === 'campaigns') return {
    filters: filterChips(['All', 'Active', 'Paused', 'In review']), cta: 'New Campaign',
    kpis: [kpi('Active campaigns', '6', '+2 this week', true), kpi('Total spend', '$7,940', '+18.4%', true), kpi('Avg CTR', '1.42%', '+4.4%', true), kpi('Impressions', '4.10M', '+12.0%', true)],
    cols: '2fr 1fr 1fr 1fr 1fr 1fr', head: head(['Campaign', 'Status', 'Spent', 'Impressions', 'Clicks', 'CTR']),
    rows: [
      { cells: [name('DeFi Launch · EU'), pill(...ACT), mono('$2,100.40'), mono('1.24M'), mono('18,420'), mono('1.49%')] },
      { cells: [name('NFT Drop · Worldwide'), pill(...ACT), mono('$1,680.10'), mono('980K'), mono('13,210'), mono('1.35%')] },
      { cells: [name('GameFi Retargeting'), pill(...PAU), mono('$1,320.00'), mono('742K'), mono('9,640'), mono('1.30%')] },
      { cells: [name('Airdrop Awareness'), pill(...ACT), mono('$940.25'), mono('612K'), mono('8,100'), mono('1.32%')] },
      { cells: [name('Staking Promo'), pill(...REV), mono('$520.00'), mono('318K'), mono('3,980'), mono('1.25%')] },
      { cells: [name('Wallet Install · US'), pill(...PEN), mono('$0.00'), mono('0'), mono('0'), mono('0%')] },
    ],
  }
  if (view === 'adgroups') return {
    filters: filterChips(['All', 'Manual', 'Smart Bidding', 'Retargeting']), cta: 'New Adgroup',
    kpis: [kpi('Adgroups', '11', '+3', true), kpi('Spend', '$5,180', '+9.2%', true), kpi('Avg bid', '$1.94', '+3.1%', true), kpi('Best CTR', '1.61%', '+6.0%', true)],
    cols: '1.8fr 1.4fr 1fr 1fr 1fr 1fr', head: head(['Adgroup', 'Campaign', 'Type', 'Bid', 'Spent', 'Status']),
    rows: [
      { cells: [name('EU Tier-1'), dim('DeFi Launch'), dim('Manual'), mono('$2.10'), mono('$1,740'), pill(...ACT)] },
      { cells: [name('US Smart'), dim('NFT Drop'), dim('Smart Bidding'), mono('$1.85'), mono('$1,290'), pill(...ACT)] },
      { cells: [name('Retarget 7d'), dim('GameFi'), dim('Retargeting'), mono('$2.40'), mono('$980'), pill(...PAU)] },
      { cells: [name('Source Bundle A'), dim('Airdrop'), dim('Source Pack'), mono('$1.60'), mono('$760'), pill(...ACT)] },
      { cells: [name('Lookalike 1%'), dim('Staking'), dim('Audiences'), mono('$1.40'), mono('$410'), pill(...REV)] },
    ],
  }
  if (view === 'creative') return {
    filters: filterChips(['All', 'Image', 'Video', 'HTML5', 'Native']), cta: 'New Creative',
    kpis: [kpi('Creatives', '24', '+5', true), kpi('Impressions', '4.10M', '+12%', true), kpi('Avg CTR', '1.42%', '+4.4%', true), kpi('In review', '3', 'Pending', false)],
    cols: '2fr 1fr 1fr 1fr 1fr 1fr', head: head(['Creative', 'Type', 'Impressions', 'Clicks', 'CTR', 'Status']),
    rows: [
      { cells: [name('Banner · Defend'), dim('Image'), mono('1.10M'), mono('17,800'), mono('1.61%'), pill(...ACT)] },
      { cells: [name('Video · Keyless'), dim('Video'), mono('860K'), mono('12,300'), mono('1.43%'), pill(...ACT)] },
      { cells: [name('HTML5 · Aurora'), dim('HTML5'), mono('640K'), mono('8,420'), mono('1.32%'), pill(...PAU)] },
      { cells: [name('Native · Discover'), dim('Native'), mono('512K'), mono('6,210'), mono('1.21%'), pill(...ACT)] },
      { cells: [name('Text · Airdrop'), dim('Text'), mono('320K'), mono('3,180'), mono('0.99%'), pill(...REV)] },
    ],
  }
  if (view === 'audiences') return {
    filters: filterChips(['All', 'Pixel', 'Lookalike', 'Uploaded']), cta: 'New Audience',
    kpis: [kpi('Audiences', '8', '+2', true), kpi('Total reach', '2.4M', '+14%', true), kpi('Pixel events', '186K', '+22%', true), kpi('Lookalikes', '3', 'Ready', true)],
    cols: '2fr 1.2fr 1fr 1.4fr 1fr', head: head(['Audience', 'Type', 'Size', 'Source', 'Status']),
    rows: [
      { cells: [name('Site visitors 30d'), dim('Pixel'), mono('842K'), dim('Herond Pixel'), pill(...ACT)] },
      { cells: [name('Cart abandoners'), dim('Pixel'), mono('126K'), dim('Herond Pixel'), pill(...ACT)] },
      { cells: [name('Lookalike 1% · EU'), dim('Lookalike'), mono('1.10M'), dim('Auto-built'), pill(...ACT)] },
      { cells: [name('Token holders'), dim('Uploaded'), mono('48K'), dim('CSV upload'), pill(...PEN)] },
      { cells: [name('Newsletter list'), dim('Uploaded'), mono('22K'), dim('CSV upload'), pill(...REV)] },
    ],
  }
  if (view === 'conversions') return {
    filters: filterChips(['All', 'Purchase', 'Sign-up', 'Install']), cta: 'New Conversion',
    kpis: [kpi('Conversions', '1,284', '+19%', true), kpi('Conv. value', '$48,210', '+24%', true), kpi('Avg CR', '2.2%', '+0.4%', true), kpi('ROAS', '3.1x', '+0.3x', true)],
    cols: '2fr 1.2fr 1fr 1fr 1fr', head: head(['Conversion', 'Pixel', 'Conversions', 'Value', 'CR']),
    rows: [
      { cells: [name('Wallet created'), dim('px_8a21'), mono('612'), mono('$0.00'), mono('3.1%')] },
      { cells: [name('Token swap'), dim('px_8a21'), mono('388'), mono('$28,400'), mono('2.4%')] },
      { cells: [name('Premium upgrade'), dim('px_9f04'), mono('184'), mono('$15,640'), mono('1.8%')] },
      { cells: [name('Newsletter sign-up'), dim('px_9f04'), mono('100'), mono('$4,170'), mono('1.2%')] },
    ],
  }
  return {
    filters: filterChips(['Last 7 days', 'By day', 'By campaign', 'By GEO']), cta: 'Export CSV',
    kpis: [kpi('Spend', '$7,940', '+18.4%', true), kpi('Impressions', '4.10M', '+12.0%', true), kpi('Clicks', '58,210', '+11.2%', true), kpi('eCPM', '$1.94', '+3.1%', true)],
    cols: '1.4fr 1fr 1fr 1fr 1fr 1fr', head: head(['Date', 'Spent', 'Impressions', 'Clicks', 'CTR', 'eCPM']),
    rows: [
      { cells: [name('Jun 23'), mono('$1,284.50'), mono('642K'), mono('8,742'), mono('1.36%'), mono('$2.00')] },
      { cells: [name('Jun 22'), mono('$1,102.30'), mono('588K'), mono('7,980'), mono('1.36%'), mono('$1.87')] },
      { cells: [name('Jun 21'), mono('$1,240.10'), mono('610K'), mono('8,310'), mono('1.36%'), mono('$2.03')] },
      { cells: [name('Jun 20'), mono('$980.40'), mono('512K'), mono('6,840'), mono('1.34%'), mono('$1.91')] },
      { cells: [name('Jun 19'), mono('$1,180.00'), mono('598K'), mono('8,020'), mono('1.34%'), mono('$1.97')] },
      { cells: [name('Jun 18'), mono('$610.20'), mono('342K'), mono('4,520'), mono('1.32%'), mono('$1.78')] },
    ],
  }
}

export const subMap = {
  campaigns: 'The top level of your account. A campaign sets your objective and budget, then holds one or more adgroups.',
  adgroups: 'Lives inside a campaign. An adgroup decides who you target and how you bid (CPM / CPC), and groups the creatives that run together.',
  creative: 'The actual ads people see. Each creative belongs to an adgroup — Image, Responsive, HTML5 or Text — and shares its targeting and bid.',
  audiences: 'Reusable segments of users you can target from any adgroup. Build them once, reuse everywhere.',
  conversions: 'The post-click actions you want to measure and optimise toward, tracked by your Herond Pixel.',
  reports: 'Performance across your whole account, broken down by day. Stats may lag up to 15 minutes.',
}

export const levels = ['Campaign', 'Adgroup', 'Creative']
export const lvIdx = { campaigns: 0, adgroups: 1, creative: 2 }

export const audienceLegend = [
  ['Pixel', 'radar', 'Built automatically from visitors tracked by your Herond Pixel — site visitors, cart abandoners and more.'],
  ['Lookalike', 'users-round', 'Auto-generated users who behave like an existing high-value audience you already own.'],
  ['Uploaded', 'upload', 'Your own customer list (CSV): emails, wallet addresses or device IDs that you bring in.'],
].map(([name, icon, desc]) => ({ name, icon, desc }))

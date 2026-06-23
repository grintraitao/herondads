// Option lists for the Fund + Create Campaign flows, ported from the prototype.

// Fund step
export const FUND_AMOUNTS = [500, 1000, 2000, 10000]

// [key, label, icon]
export const PAY_METHODS = [
  ['card', 'Card', 'credit-card'],
  ['crypto', 'Crypto', 'coins'],
  ['wire', 'Wire transfer', 'building-2'],
]

// [key, name, symbol, color]
export const TOKENS = [
  ['usdt', 'USDT', '₮', '#26A17B'],
  ['eth', 'ETH', 'Ξ', '#627EEA'],
  ['btc', 'BTC', '₿', '#F7931A'],
  ['sol', 'SOL', '◎', '#9945FF'],
]

// [key, label, hint-title is label, hint-body]
export const ADGROUP_TYPES = [
  ['smart', 'Smart Bidding', 'Let Herond auto-optimize your bids toward conversions across premium traffic.'],
  ['source', 'Source Packages', 'Buy curated bundles of high-performing traffic sources in one click.'],
  ['audiences', 'Audiences', 'Target users from your own pixel-built audiences and lookalikes.'],
  ['retargeting', 'Retargeting', 'Re-engage visitors who already interacted with your site or ads.'],
  ['manual', 'Manual', 'Set a fixed price for premium traffic. Manually configure your bid and targeting for full control over your adgroup.'],
]

// [key, label]
export const PRICING_MODELS = [
  ['cpm', 'CPM'],
  ['cpc', 'CPC'],
]

// [key, label, icon]
export const TARGET_TABS = [
  ['geo', 'Geo', 'globe'],
  ['language', 'Language', 'languages'],
  ['os', 'OS', 'monitor'],
  ['sources', 'Sources', 'layout-grid'],
]

export const REGIONS = [
  'Africa', 'Antarctica', 'Australia and New Zealand', 'Central South America', 'CIS',
  'Eastern Asia', 'Europe', 'Latin America and the Caribbean', 'Micronesia', 'Northern America',
  'Northern Europe', 'Polynesia', 'South-Eastern Asia', 'Southern Asia', 'Sub-Saharan Africa', 'Western Asia',
]

export const LANGUAGES = [
  'English', 'Spanish', 'Mandarin Chinese', 'Hindi', 'Arabic', 'Portuguese', 'Russian', 'Japanese',
  'French', 'German', 'Korean', 'Vietnamese', 'Turkish', 'Indonesian', 'Italian',
]

export const OPERATING_SYSTEMS = [
  'Windows', 'macOS', 'Linux', 'Android', 'iOS', 'Chrome OS', 'HarmonyOS', 'Other',
]

export const SOURCES = [
  'Herond Browser', 'Premium Publishers', 'News & Media', 'Crypto & Web3 Sites', 'Streaming & Video',
  'Push Notifications', 'Native Widgets', 'In-App Network', 'Search Partners', 'Social Embeds',
]

// Options per Targeting tab, plus the noun used in each tab's empty state.
export const TARGETING_OPTIONS = {
  geo: REGIONS,
  language: LANGUAGES,
  os: OPERATING_SYSTEMS,
  sources: SOURCES,
}

export const TARGETING_NOUN = {
  geo: 'regions',
  language: 'languages',
  os: 'operating systems',
  sources: 'traffic sources',
}

// [key, label, icon, color]
export const AD_TYPES = [
  ['text', 'Text Ad', 'type', '#3373F6'],
  ['responsive', 'Responsive Ad', 'layout-template', '#00CCC0'],
  ['image', 'Image Ad', 'image', '#f5a623'],
  ['html5', 'HTML5 Ad', 'code-2', '#ff4070'],
]

// Sidebar nav: [key, label, icon]
export const NAV_ITEMS = [
  ['dashboard', 'Dashboard', 'layout-dashboard'],
  ['campaigns', 'Campaigns', 'megaphone'],
  ['adgroups', 'Adgroups', 'layers'],
  ['creative', 'Creative', 'image'],
  ['audiences', 'Audiences', 'users'],
  ['conversions', 'Conversions', 'target'],
  ['reports', 'Reports', 'bar-chart-3'],
]

export const PAGE_TITLES = {
  dashboard: 'Dashboard', campaigns: 'Campaigns', adgroups: 'Adgroups', creative: 'Creative',
  audiences: 'Audiences', conversions: 'Conversions', reports: 'Reports',
  fund: 'Fund Campaign', setup: 'Create Campaign',
}

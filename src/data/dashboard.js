import { bars } from './charts.js'

const green = '#16c784'
const pink = '#ff4070'

const stat = (label, icon, ic, ib, today, yest, d1, d1u, week, d2, d2u) => ({
  label,
  icon,
  iconColor: ic,
  iconBg: ib,
  today,
  yest,
  d1,
  d1Color: d1u ? green : pink,
  week,
  d2,
  d2Color: d2u ? green : pink,
})

export const stats = [
  stat('Spent', 'dollar-sign', '#3373F6', 'rgba(51,115,246,.12)', '$1,284.50', '$1,102.30', '+16.5%', true, '$7,940.20', '+18.4%', true),
  stat('Impressions', 'eye', '#6b33fa', 'rgba(107,51,250,.13)', '642,180', '588,400', '+9.1%', true, '4.10M', '+12.0%', true),
  stat('Clicks', 'mouse-pointer-click', '#00b3ED', 'rgba(0,179,237,.13)', '8,742', '7,980', '+9.5%', true, '58,210', '+11.2%', true),
  stat('eCPM', 'gauge', '#00CCC0', 'rgba(0,204,192,.14)', '$2.00', '$1.87', '+6.9%', true, '$1.94', '+3.1%', true),
  stat('CPC', 'badge-dollar-sign', '#ff4070', 'rgba(255,64,112,.12)', '$0.147', '$0.138', '+6.5%', false, '$0.136', '-2.2%', true),
  stat('CTR', 'percent', '#f5a623', 'rgba(245,166,35,.14)', '1.36%', '1.36%', '+0.0%', true, '1.42%', '+4.4%', true),
]

export const barCharts = [
  { title: 'Campaigns', bars: bars([['DeFi Launch', 2100], ['NFT Drop', 1680], ['GameFi', 1320], ['Airdrop', 940], ['Staking', 520]], 2100, '51,115,246') },
  { title: 'Adgroups', bars: bars([['Manual EU', 1740], ['Smart US', 1290], ['Retarget', 980], ['Source', 760], ['Audience', 410]], 1740, '107,51,250') },
  { title: 'Creatives', bars: bars([['Banner A', 1480], ['Video 1', 1160], ['HTML5', 870], ['Native', 640], ['Text', 320]], 1480, '0,179,237') },
]

export const offers = [
  { initial: 'i', name: 'iGaming Republic', category: 'Casino & Gambling', tags: ['Press releases', 'Website'], site: 'igamingrepublic.com', was: '$1,200', now: '$1,000', logoBg: 'linear-gradient(135deg,#3373F6,#00b3ED)' },
  { initial: 'C', name: 'The Crypto Factor', category: 'Crypto & Blockchain', tags: ['Influencer', 'YouTube'], site: 'youtube.com/@TheCryptoFactor', was: '$3,500', now: '$2,500', logoBg: 'linear-gradient(135deg,#6b33fa,#ff4070)' },
  { initial: 'f', name: 'finews.com Headlines', category: 'Finance & Investments', tags: ['Sponsored', '+1wk teaser'], site: 'finews.com/news', was: '$4,000', now: '$3,850', logoBg: 'linear-gradient(135deg,#00CCC0,#3373F6)' },
]

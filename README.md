# Herond Ads — Web3 Advertising Console

A working implementation of the **Web3 Ads Client** design — the advertiser
console for Herond, a privacy-first, Web3-native browser. Built as a
Vite + React app from the Claude Design prototype, using the Herond Design
System's aurora tokens (Plus Jakarta Sans, blue → cyan → violet → pink).

## Stack

- **Vite 6** + **React 18**
- **lucide-react** for icons
- Design-system tokens ported to `src/index.css` (colors / type / spacing / effects)

## Getting started

```bash
npm install
npm run dev      # start the dev server (opens http://localhost:5173)
npm run build    # production build to dist/
npm run preview  # preview the production build
```

Demo credentials are pre-filled on the login screen — click **Sign in** (or
**Connect Wallet**) to enter the console.

## What's implemented

- **Login** — aurora hero + sign-in / connect-wallet card
- **Dashboard** — stat cards, spend-over-time area chart, device donut, per-entity bar charts
- **Entity tables** — Campaigns, Adgroups, Creative, Audiences, Conversions, Reports
  (each with its own filters, KPIs, hierarchy breadcrumb and rows)
- **Fund Campaign** — amount + payment-method picker with a crypto token selector
- **Create Campaign** — 3-step accordion (setup → targeting → ad setup) with a
  live creative preview for Text / Image / Responsive / HTML5 ads
- **Overlays** — support chat widget, header wallet toggle, welcome-bonus promo modal

## Project layout

```
src/
  App.jsx              # single source of UI state + login/app routing
  css.js               # inline-style-string -> React style-object helper
  Icon.jsx             # lucide-react wrapper (kebab-case names)
  index.css            # design-system tokens, globals, keyframes
  components/          # Login, AppShell, Dashboard, TableView, Fund/Create, Chat, Promo, Button
  data/                # charts, dashboard data, table data, flow option lists
  styles.js            # shared style-string builders (selected/active states)
public/assets/         # Herond glyph logo
```

## Notes

State is held in a single object in `App.jsx` and threaded down via a `set(patch)`
helper, mirroring the original prototype's centralized model. The design's inline
styles were preserved through the `css()` parser to keep visual fidelity with the
source.

# PRO TRANS Logistics LLP — Website

A premium, fully responsive multi-page marketing site for PRO TRANS Logistics LLP,
an FMCG fleet-logistics operator in South India.

**Stack:** Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

## Design system

The visual language is documented in code:

- **Design tokens** — `tailwind.config.ts` (colors, fonts, easing, keyframes)
- **Global styles & signature utilities** — `app/globals.css`
  (`.chip` telemetry pill, `.eyebrow`, `.hazard` fleet-livery stripe, `.grid-lines`)

**Palette:** `asphalt` (dark base) + `paper` (light base), with two accents —
`signal` orange (speed / road-safety) and `cold` cyan (cold-chain / tracking).
The page alternates dark "operational" bands and light "editorial" bands.

**Type:** `Archivo` (industrial display + body) · `JetBrains Mono` (telemetry data).

**Signature element:** a live-telemetry route map (`components/RouteMap.tsx`) and a
cold-chain temperature monitor (`components/sections/ColdChainFeature.tsx`).

## Structure

```
app/
  layout.tsx            Root layout — fonts, metadata, Header + Footer
  page.tsx              Home
  services/page.tsx     Services (all 10)
  about/page.tsx        About Us
  contact/page.tsx      Contact + enquiry form
components/
  motion/               Reusable animation primitives (Reveal, StaggerText)
  sections/             Page section blocks (Hero, ColdChainFeature, ...)
  ui/                   Shared UI (SectionHeading, PageHero, Marquee)
  Header, Footer, Logo, RouteMap, ServiceCard, ContactForm
lib/
  site.ts               Single source of truth for all company content
```

## Editing content

All company copy — services, clients, values, contact details — lives in
[`lib/site.ts`](lib/site.ts). Update it there and every page stays in sync.

## Notes

- The contact form is client-side and opens the visitor's mail app with a
  prefilled message (no backend required). To wire up a real endpoint, replace
  the `mailto:` handoff in `components/ContactForm.tsx`.
- All motion respects `prefers-reduced-motion`, and interactive elements have
  visible keyboard focus.

# Lumirise Website — Technical Design

**Date:** 2026-05-18
**Content/visual spec:** `Lumirise_Website_Spec.md` (source of truth for copy, sections, colors)
**This doc:** implementation architecture only.

## Decisions (from brainstorming)

- **Build order:** Core pages first (Home → About → Services → Quote → Contact) at medium-high fidelity, then secondary (Coverage, Industries, Why Choose, Fleet & Safety).
- **Fidelity:** Elevate beyond spec — Webflow/Framer-agency feel: refined motion, micro-interactions, premium spacing, custom cursor, marquee, animated counters.

## Stack

- Next.js 16.2.6 App Router. Server Components by default; `"use client"` only for interactive/animated components.
- Tailwind v4 (CSS-first `@theme` in `globals.css`).
- Framer Motion — in-view reveals, hover states, tab cross-fade, carousel.
- GSAP + ScrollTrigger — hero parallax, pinned stats band, marquee, count-up, coverage route-line pulse.
- `next/font/google` Urbanist as `--font-sans`.

## Routes

```
app/
  layout.tsx                  fonts, Nav, Footer, smooth scroll, custom cursor, sticky mobile bar
  page.tsx                    Home (12 sections)
  about/page.tsx
  services/page.tsx           overview (5 cards + process)
  services/[slug]/page.tsx    5 service pages, data-driven from one template
  coverage/page.tsx
  industries/page.tsx
  why-lumirise/page.tsx
  fleet-safety/page.tsx
  quote/page.tsx              + app/api/quote/route.ts
  contact/page.tsx            + app/api/contact/route.ts
```

## Directory layout

```
components/
  layout/      Nav, Footer, MobileBar, Cursor, SmoothScroll
  ui/          Section, Eyebrow, Button, Card, IconCircle, StatCounter, Reveal, Marquee
  sections/    Home + page section components
lib/
  content/     typed data: services, routes, industries, values, stats, nav, footer
  images.ts    central role→file map for public/pexels-*.jpg
```

## Design tokens (`globals.css` `@theme`)

| Token | Value |
|---|---|
| `--color-navy` | `#0A2540` |
| `--color-royal` | `#1E4DAF` |
| `--color-gold` | `#D4A437` |
| `--color-champagne` | `#F4E5B8` |
| `--color-cream` | `#FAFAF7` |
| `--color-ink` | `#111827` |
| `--color-divider` | `#E5E7EB` |
| `--color-success` | `#10B981` |
| `--font-sans` | Urbanist |

Type scale, radii (16–24px), button variants per spec §2.

## Components / interfaces

- **`Reveal`** — client wrapper, Framer `whileInView` fade + 20px rise, optional stagger. Wraps any block.
- **`Section`** — semantic `<section>` with bg variant (`navy|cream|white|gold`) + standard padding.
- **`Eyebrow`** — `◆ LABEL` gold caps, color-aware on dark/light.
- **`Button`** — variants `primary|outline|text`, polymorphic (link/button).
- **`StatCounter`** — GSAP count-up on enter-view; props `value`, `suffix`, `label`.
- **`Marquee`** — GSAP infinite x-scroll tagline strip.
- **`Carousel`** — Framer drag/snap card row with arrows (Services snapshot).
- **`Tabs`** — Framer cross-fade; collapses to accordion under `md`.

## Content/data flow

Spec copy lives in typed modules under `lib/content/`. Pages and `services/[slug]` map over data so service pages, route cards, industry blocks stay DRY. No CMS.

## Images

`lib/images.ts` maps semantic roles → the 12 `public/pexels-*.jpg` files (tankers→fuel, containers→container, highway→hero/cross-border, port→about, etc.). All rendered via `next/image` with sizes/priority on hero.

## Forms

Quote (full) + Contact (simple): client components with inline validation → Next Route Handler returns `{ok:true}` (logs payload; no email provider wired unless requested). Success → Forest-green confirmation state.

## Motion budget

Mobile: tabs→accordions, carousels swipeable, custom cursor disabled, sticky bottom Call/Quote bar, reduced parallax. Respect `prefers-reduced-motion`.

## Verification

- `next build` and `eslint` must pass with no errors.
- Manual visual pass per page (desktop + mobile widths).
- AGENTS.md constraint: consult `node_modules/next/dist/docs/` before using unfamiliar Next 16 APIs (fonts, route handlers, metadata, image).

## Out of scope (YAGNI for v1)

Blog/Insights, leadership headshots, client portal, live tracking, EN/SW toggle, real email backend, analytics. Hooks left where spec marks "when content exists".

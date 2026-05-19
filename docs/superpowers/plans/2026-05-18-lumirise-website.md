# Lumirise Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the full Lumirise marketing website (core pages first, then secondary) with a premium Webflow/Framer-grade feel.

**Architecture:** Next.js 16 App Router, RSC by default with `"use client"` islands for motion. Typed content modules drive DRY pages. Framer Motion for reveals/hover/tabs, GSAP+ScrollTrigger for scroll/parallax/marquee/counters.

**Tech Stack:** Next.js 16.2.6, React 19, Tailwind v4, framer-motion, gsap, Urbanist (next/font/google).

**Verification model:** Visual site — no TDD per component. Each phase ends with `npx next build` + `npx eslint` passing and a visual pass. Unit tests (Node test runner) only for form-validation logic.

---

## File Structure

```
app/layout.tsx                  fonts, Nav, Footer, Cursor, SmoothScroll, MobileBar, base metadata
app/globals.css                 Tailwind v4 @theme tokens, base styles
app/page.tsx                    Home
app/{about,services,coverage,industries,why-lumirise,fleet-safety,quote,contact}/page.tsx
app/services/[slug]/page.tsx    data-driven service template
app/api/{quote,contact}/route.ts
components/layout/{Nav,Footer,MobileBar,Cursor,SmoothScroll}.tsx
components/ui/{Section,Eyebrow,Button,Card,IconCircle,StatCounter,Reveal,Marquee,Carousel,Tabs}.tsx
components/sections/*.tsx        page section blocks
lib/content/{nav,services,routes,industries,values,stats,site}.ts
lib/images.ts                   role -> public/pexels file map
lib/validation.ts               form validators (unit-tested)
lib/validation.test.ts
```

---

### Task 1: Dependencies & design system

**Files:** Modify `package.json`; Create/modify `app/globals.css`, `app/layout.tsx`, `lib/images.ts`.

- [ ] Install deps: `yarn add framer-motion gsap`
- [ ] Rewrite `globals.css`: `@import "tailwindcss";` + `@theme` with navy/royal/gold/champagne/cream/ink/divider/success tokens, `--font-sans: var(--font-urbanist)`, radii, base body (cream bg, ink text), `prefers-reduced-motion` guard, smooth-scroll-safe defaults.
- [ ] `layout.tsx`: load `Urbanist` via `next/font/google` (`variable: "--font-urbanist"`, weights 400–800), set real `metadata` (Home title/desc from spec §16), render `<Nav/>`, `{children}`, `<Footer/>`, `<MobileBar/>`, `<Cursor/>`, `<SmoothScroll/>`. Remove Geist boilerplate.
- [ ] `lib/images.ts`: export `images` object mapping roles (`hero`, `aboutPort`, `fuelTanker`, `containers`, `dryCargo`, `breakBulk`, `crossBorder`, `fleet`, `driver`, `industryX`) to the 12 `/pexels-*.jpg` paths.
- [ ] **Verify:** `npx next build` passes. **Commit:** `chore: design system, fonts, deps`.

### Task 2: UI primitives

**Files:** Create `components/ui/*`.

- [ ] `Section.tsx` (RSC): props `bg: navy|cream|white|gold`, `className`; standard responsive padding + max-width container.
- [ ] `Eyebrow.tsx`: `◆ LABEL`, gold, uppercase, tracked; `tone` adapts on dark bg.
- [ ] `Button.tsx`: variants `primary` (gold/navy), `outline`, `text` (gold underline + arrow); renders `<a>`/Next `<Link>` or `<button>`; hover transitions.
- [ ] `Reveal.tsx` (`"use client"`): Framer `whileInView` opacity 0→1, y 20→0, `viewport once`, optional `delay`/`stagger`; respects reduced motion.
- [ ] `Card.tsx`, `IconCircle.tsx` (gold/navy circle + icon), `Marquee.tsx` (`"use client"`, GSAP infinite x), `StatCounter.tsx` (`"use client"`, GSAP count-up on ScrollTrigger enter), `Carousel.tsx` (`"use client"`, Framer drag/snap + arrows), `Tabs.tsx` (`"use client"`, cross-fade, accordion < md).
- [ ] **Verify:** build + lint pass. **Commit:** `feat: ui primitives`.

### Task 3: Global shell

**Files:** Create `components/layout/*`, `lib/content/{nav,site}.ts`.

- [ ] `nav.ts`/`site.ts`: nav links, phone `+255 762 361 374`, email `info@lumirise.co.tz`, address, footer columns/services from spec §3 & Appendix.
- [ ] `Nav.tsx` (`"use client"`): sticky, transparent over hero → navy on scroll, wordmark, center menu, phone pill + gold "Request a Quote →"; mobile hamburger → full navy panel w/ gold dividers.
- [ ] `Footer.tsx`: dark, headline + newsletter input + Subscribe, 4-column grid, bottom strip `© 2026 Lumirise Company Limited · Dar es Salaam, Tanzania · Privacy Policy · Terms of Service`.
- [ ] `MobileBar.tsx` (`"use client"`): fixed bottom Call/Quote, < md only. `Cursor.tsx` (`"use client"`): gold dot follows cursor, expands on interactive hover, desktop+fine-pointer only. `SmoothScroll.tsx` (`"use client"`): subtle GSAP/raf smoothing, reduced-motion aware.
- [ ] **Verify:** build + lint. **Commit:** `feat: global nav, footer, shell`.

### Task 4: Home page

**Files:** `app/page.tsx`, `components/sections/home/*`, `lib/content/{services,routes,industries,values,stats}.ts`.

- [ ] Content modules with all spec copy (services §4.4/§6, routes §8.3 table, industries §4.5 tabs, values, stats `5 / 7+ / 100% / 24hr`).
- [ ] Sections 4.1–4.10 as components: Hero (video/parallax image + dark overlay, dual CTA, floating Featured Route card), TrustBar, DrivingTrade (overlapping image cards + 3 icon-stats), ServicesSnapshot (Carousel), Industries (Tabs), WhyChoose (2-col), StatsBand (gold, StatCounter), CoverageMap (stylised SVG + pulsing routes), Testimonials (placeholder cards), CTABanner. Marquee tagline strip between sections.
- [ ] Wrap blocks in `Reveal`. Wire `app/page.tsx`.
- [ ] **Verify:** build + lint; visual pass desktop+mobile. **Commit:** `feat: home page`.

### Task 5: About page

**Files:** `app/about/page.tsx`, `components/sections/about/*`.

- [ ] Sections 5.1–5.8: Hero, Company Overview (2-col + image stack), Our Story, Vision/Mission cards, Core Values (5-card 3+2, big gold numbers), Leadership (placeholder grid), Compliance (check list + logo row placeholders), gold CTA band. Page metadata from §16. Reveal-wrapped.
- [ ] **Verify:** build + lint + visual. **Commit:** `feat: about page`.

### Task 6: Services overview + dynamic service pages

**Files:** `app/services/page.tsx`, `app/services/[slug]/page.tsx`, `components/sections/services/*`, extend `lib/content/services.ts` (slug, hero headline, lead, transported list, features, sectors, related).

- [ ] Overview §6: Hero, 5 alternating image/content cards, 4-step process timeline, gold CTA.
- [ ] `[slug]` template §7 Sections A–H driven by data for the 5 services; `generateStaticParams`; per-slug `generateMetadata`; 404 for unknown slug.
- [ ] **Verify:** build (5 static params) + lint + visual. **Commit:** `feat: services overview + service pages`.

### Task 7: Form validation lib (unit-tested)

**Files:** `lib/validation.ts`, `lib/validation.test.ts`.

- [ ] `lib/validation.test.ts` (node:test): required fields, email regex, phone non-empty, returns `{valid, errors}` for quote + contact shapes.
- [ ] Run `node --test lib/validation.test.ts` → FAIL.
- [ ] Implement `lib/validation.ts` (`validateQuote`, `validateContact`).
- [ ] Run tests → PASS. **Commit:** `feat: form validation`.

### Task 8: Quote page + API

**Files:** `app/quote/page.tsx`, `app/api/quote/route.ts`, `components/sections/quote/QuoteForm.tsx`.

- [ ] §12: Hero, 2-col — `QuoteForm` (`"use client"`, all fields incl. cargo dropdown, validation via lib, success = forest-green state) + reassurance block + call/email; "What happens next" 3-step.
- [ ] `route.ts` POST: validate, log payload, return `{ok:true}` (no email backend).
- [ ] **Verify:** build + lint; submit happy + invalid path manually. **Commit:** `feat: quote page + api`.

### Task 9: Contact page + API

**Files:** `app/contact/page.tsx`, `app/api/contact/route.ts`, `components/sections/contact/ContactForm.tsx`.

- [ ] §13: Hero, contact details + map (styled Google Maps embed to Dar es Salaam), simple form (subject dropdown), 3 quick-channel tiles (Call/WhatsApp/Email), gold CTA band. Metadata from §16.
- [ ] `route.ts` mirrors quote API.
- [ ] **Verify:** build + lint + visual. **Commit:** `feat: contact page + api`.

### Task 10: Secondary pages

**Files:** `app/{coverage,industries,why-lumirise,fleet-safety}/page.tsx`, `components/sections/*`.

- [ ] Coverage §8 (hero, interactive-ish map, route cards from data, 3 advantage tiles, CTA).
- [ ] Industries §9 (alternating full-section blocks, relevant-service links).
- [ ] Why Lumirise §10 (6 reason tiles 3×2, stats band reuse, CTA).
- [ ] Fleet & Safety §11 (hero, 3 fleet cards, 5-point safety list, compliance reuse, CTA).
- [ ] Per-page metadata. Reveal-wrapped.
- [ ] **Verify:** build + lint + full-site visual pass. **Commit:** `feat: coverage, industries, why, fleet pages`.

### Task 11: Final polish & verification

- [ ] `prefers-reduced-motion` audit, mobile breakpoints (tabs→accordion, carousel swipe, 2×2 stats), image `sizes`/lazy, hero `priority`.
- [ ] Final `npx next build` + `npx eslint` clean.
- [ ] **Commit:** `chore: polish & a11y pass`.

---

## Self-Review

- **Spec coverage:** Global §3 → T1/T3. Home §4 → T4. About §5 → T5. Services §6/§7 → T6. Coverage §8 → T10. Industries §9 → T10. Why §10 → T10. Fleet §11 → T10. Quote §12 → T8. Contact §13 → T9. Motion §14 → T2/T3 + per-page Reveal. Mobile §15 → T3/T11. SEO §16 → per-page metadata. §17 additions handled where in scope (WhatsApp tile T9), rest YAGNI per design doc.
- **Placeholders:** none — testimonials/leadership/logos are intentional spec-marked placeholders.
- **Type consistency:** `images` keys (T1) referenced by all page tasks; `services` content module extended once in T6 and consumed by T4/T6; validation API (`validateQuote/validateContact`) shared T7→T8/T9.

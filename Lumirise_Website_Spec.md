# Lumirise Company Limited — Website Specification

**Project:** Lumirise Company Website
**Client:** Lumirise Company Limited, Dar es Salaam, Tanzania
**Style Reference:** [mivora-wbs.webflow.io](https://mivora-wbs.webflow.io/)
**Color Direction:** Deep Navy Blue + Gold
**Version:** 1.0

---

## Table of Contents

1. [Project Strategy](#1-project-strategy)
2. [Design System](#2-design-system)
3. [Global Elements](#3-global-elements)
4. [Home Page](#4-home-page)
5. [About Page](#5-about-page)
6. [Services Overview Page](#6-services-overview-page)
7. [Individual Service Pages](#7-individual-service-pages)
8. [Coverage Page](#8-coverage-page)
9. [Industries Page](#9-industries-page)
10. [Why Choose Lumirise Page](#10-why-choose-lumirise-page)
11. [Fleet & Safety Page](#11-fleet--safety-page)
12. [Request a Quote Page](#12-request-a-quote-page)
13. [Contact Page](#13-contact-page)
14. [Motion & Interactions](#14-motion--interactions)
15. [Mobile Considerations](#15-mobile-considerations)
16. [SEO Metadata](#16-seo-metadata)
17. [Recommended Additions](#17-recommended-additions)

---

## 1. Project Strategy

### Brand Positioning
Tanzania's trusted cross-border transport partner — premium, safety-first, regionally networked across East and Central Africa.

### Tone of Voice
Confident, professional, reassuring. Plain-English (avoid jargon). B2B procurement-friendly. Logistics buyers want to feel that the company is competent, compliant, and contactable.

### Primary Goals
1. Generate qualified quote requests (primary conversion)
2. Build trust with cargo owners, freight forwarders, and procurement managers
3. Establish regional credibility (Tanzania + 7 neighbouring countries)

### Visual Direction
Inspired by the Mivora template — bold section labels, video heroes, tab-based industry showcases, large stat callouts, and a "sandwich" structure (dark navy hero → light content sections → dark navy footer). Adapted to navy + gold for a premium, trustworthy logistics aesthetic.

---

## 2. Design System

### Color Palette

| Role | Color Name | Hex | Usage |
|------|-----------|-----|-------|
| Primary | Deep Navy | `#0A2540` | Hero/footer backgrounds, headings, dark sections |
| Secondary | Royal Blue | `#1E4DAF` | Buttons, links, hover states, accents |
| Accent | Warm Gold | `#D4A437` | CTAs, highlights, icon backgrounds, decorative shapes |
| Light Accent | Soft Champagne | `#F4E5B8` | Subtle highlights, gradient overlays |
| Background Light | Off-White (cream-tinted) | `#FAFAF7` | Light section backgrounds |
| Text Dark | Charcoal | `#111827` | Body text on light backgrounds |
| Divider | Soft Gray | `#E5E7EB` | Dividers, card borders |
| Success | Forest Green | `#10B981` | Success states (form submissions) |

**Sandwich structure:** Dark navy hero → light sections in the middle → dark navy footer. Creates a premium, framed feel.

### Typography

**Recommended:**
- **Headlines:** Manrope Bold or Plus Jakarta Sans (clean, modern, B2B-credible)
- **Body:** Inter or DM Sans (neutral, legible)

**Alternative (more editorial feel):** Fraunces or DM Serif Display for headlines, paired with Inter body.

### Type Scale (Desktop)

| Element | Size | Weight | Line Height |
|---------|------|--------|-------------|
| H1 (Hero) | 64–80px | 700 | 1.1 |
| H2 (Section) | 48–56px | 700 | 1.15 |
| H3 (Card/Subsection) | 28–32px | 600 | 1.3 |
| H4 | 20–24px | 600 | 1.4 |
| Body Large | 18px | 400 | 1.6 |
| Body Regular | 16px | 400 | 1.6 |
| Caption / Eyebrow | 13–14px | 600, uppercase, letter-spacing 1.5px | 1.4 |

### Visual Motifs (Repeat Across Every Page)

- **Section Eyebrow Labels** — Small ALL-CAPS gold text with a small diamond/icon, sitting above every section heading (e.g. `◆ DRIVING TRADE`, `◆ OUR SERVICES`, `◆ COVERAGE`)
- **Rounded Corners** — 16–24px radius on cards, image frames, and buttons
- **Icon-in-Circle** — Gold or navy filled circles holding white icons, used in feature lists, value cards, stat blocks
- **Gold Check Icons** — In front of every feature list item
- **Dual CTA Pattern** — One solid button (gold) + one outline button (white/navy) side by side
- **Big Stat Callouts** — Huge numbers (80–120px), small label below, with a small arrow icon next to the number

### Buttons

| Type | Style | Use |
|------|-------|-----|
| Primary | Gold background, navy text, rounded-full, soft shadow | "Request a Quote", main CTAs |
| Secondary | Transparent with navy/white outline | "Learn more", "Explore services" |
| Tertiary | Underlined gold text with arrow → | Inline links like "View detail" |

---

## 3. Global Elements

### Top Navigation

- **Style:** Sticky, transparent over hero, navy when scrolled
- **Left:** Lumirise wordmark (white over hero, navy on scroll)
- **Center menu:** Home · About · Services · Coverage · Industries · Contact
- **Right:** Small phone-icon pill + **"Request a Quote →"** gold button
- **Mobile:** Hamburger that slides in a navy panel with gold accent lines between items

### Footer

**Background:** Looping low-opacity video of a truck on the road at dawn (or a static dark image for performance).

**Top block (full-width):**
> Headline: *We keep the region's cargo moving. Safely. Reliably. On time.*
> Newsletter input + gold "Subscribe" button

**Four-column grid:**

| Column | Content |
|--------|---------|
| Brand | Lumirise logo · Tagline *"Safe. Reliable. On Time."* · One-line description |
| Pages | Home · About · Services · Coverage · Industries · Contact |
| Services | Fuel & Petroleum · Dry Cargo · Containers · Break-Bulk · Cross-Border |
| Get in Touch | Phone · Email · Address · WhatsApp · Social icons |

**Bottom strip:**
`© 2026 Lumirise Company Limited · Dar es Salaam, Tanzania · Privacy Policy · Terms of Service`

---

## 4. Home Page

### 4.1 Hero Section (Full viewport, navy background)

**Background:** Looping muted video of a truck convoy on an African highway at sunrise, OR fuel tankers at the Port of Dar es Salaam. Dark navy overlay at ~60% opacity.

**Layout:** Left-aligned, content takes ~70% width.

**Content:**
- Eyebrow (gold): `◆ TANZANIA & EAST-CENTRAL AFRICA`
- **H1 (white):** *Cargo that moves Africa forward.*
- **Sub-headline:** Safe, reliable, on-time transport from Dar es Salaam to seven countries across the region.
- **Dual CTA:**
  - `[Request a Quote →]` (gold solid)
  - `[Explore Our Services]` (outline white)

**Floating Card (bottom-right, overlapping):** "Featured Route" — rounded white card with route name (*Dar es Salaam → Kigali*), small image, and 3 mini stats (transit time, cargo type, border crossings). Mimics Mivora's featured case study card.

### 4.2 Trust Bar (Thin strip below hero, off-white)

Three stats in a horizontal row, navy text, gold accent numbers:
- **5** Service Lines
- **7+** Countries Served
- **100%** Regulatory Compliant

### 4.3 About / Driving Trade Section (White background)

- Eyebrow (gold): `◆ DRIVING REGIONAL TRADE`
- **Heading (navy, 60% width):** *At Lumirise, we connect East and Central African markets through safe, disciplined, and modern logistics.*

**Body paragraph:**
> Lumirise Company Limited is a dynamic Tanzanian transportation and logistics company built around one promise: moving your cargo safely, reliably, and on time. From the Port of Dar es Salaam to depots, warehouses, and border posts across East and Central Africa, our fleet and our people keep regional trade moving.

**Three overlapping rounded image cards** (right side, or below on mobile): trucks on road · port containers · fuel tanker.

**Three icon-stat cards (horizontal row):**
| Icon | Title |
|------|-------|
| 🛣 | Optimised Routes |
| 🛡 | Safety-First Operations |
| 🌍 | Regional Reach |

**Link:** `More about us →` (gold)

### 4.4 Services Snapshot (Navy background — break the rhythm)

- Eyebrow (gold over navy): `◆ OUR SERVICES`
- **Heading (white):** *Five service lines. One standard of excellence.*

**Horizontal scrolling card carousel** (Mivora-style) with left/right arrow controls.

Each card contains:
- Gold icon in circle
- Service name
- Short description
- "View detail →" link
- Small service image

**Cards:**

1. **Fuel & Petroleum Transport** — Certified tankers for diesel, petrol, kerosene, and other petroleum products.
2. **Dry Cargo Transport** — Fertilizers, grains, cement, packaged goods, and industrial materials.
3. **Container Transport** — 20ft and 40ft containers, port to destination.
4. **Loose Cargo / Break-Bulk** — Machinery, equipment, and oversized loads with precision planning.
5. **Cross-Border Transport** — Regional routes connecting 7 countries.

### 4.5 Industries We Serve (Off-white background)

- Eyebrow (gold): `◆ INDUSTRIES WE SERVE`
- **Heading:** *Powering supply chains across diverse industries.*

**Tabbed component** (Mivora-style): vertical tab list on the left with icons, expanded content on the right showing a large rounded image + bullet list with gold check icons.

**Tab content:**

**Tab 1 — Manufacturing**
> Lumirise supports manufacturers with reliable scheduled freight that keeps production lines moving.
> ✓ Raw materials to factories on time
> ✓ Finished goods to distribution centres
> ✓ Inter-facility transfers across the region
> ✓ Industrial materials and packaged products

**Tab 2 — Retail & FMCG**
> Time-sensitive distribution of consumer goods to warehouses and stores across East and Central Africa.
> ✓ Fast-moving consumer goods transport
> ✓ Packaged goods to retail centres
> ✓ Regional distribution networks
> ✓ Reliable scheduled deliveries

**Tab 3 — Energy & Petroleum**
> Certified tanker transport for fuel distributors, mining operations, and energy infrastructure projects.
> ✓ Diesel, petrol, and kerosene transport
> ✓ Lubricants and industrial fuels
> ✓ Mining and energy site supply
> ✓ Strict regulatory compliance

**Tab 4 — Construction & Infrastructure**
> Cement, steel, machinery, and break-bulk freight to project sites anywhere in the region.
> ✓ Cement and building materials
> ✓ Heavy machinery and equipment
> ✓ Project freight coordination
> ✓ Oversized cargo handling

**Tab 5 — Agriculture & Mining**
> Bulk transport for the region's primary industries — fertilizers in, harvests and minerals out.
> ✓ Fertilizer and seed distribution
> ✓ Grain and produce haulage
> ✓ Mining material transport
> ✓ Cross-border bulk shipments

### 4.6 Why Choose Lumirise (White background)

- Eyebrow (gold): `◆ WHY CHOOSE US`
- **Heading:** *Why cargo owners across the region choose Lumirise.*

**Two-column layout:**

**Left column — three stacked text blocks:**

1. **Proven Safety Record**
   Certified operations, trained drivers, well-maintained fleet, and a culture of zero compromise on safety.

2. **Full Regulatory Compliance**
   All licenses, permits, and cross-border documentation in order — so your cargo moves without surprises.

3. **Regional Network**
   Established routes to seven countries in East and Central Africa, with local expertise at every transit point.

**Right column:** Tall rounded image — driver in branded vest, or truck close-up at golden hour.

**Link:** `Meet our team →` (gold)

### 4.7 Stats Band (Gold background — punchy interruption)

- Eyebrow (navy on gold): `◆ LUMIRISE IN NUMBERS`
- **Heading (navy):** *Driving measurable impact across every shipment.*

**Four big stat columns:**

| Number | Label |
|--------|-------|
| 5 | Service Lines |
| 7+ | Countries Served |
| 100% | Regulatory Compliance |
| 24hr | Quote Response Time |

Each stat: tiny gold label above, huge 96–120px navy number with small arrow icon, short caption below.

### 4.8 Coverage Map (Navy background)

- Eyebrow (gold): `◆ ONE HUB. SEVEN COUNTRIES.`
- **Heading (white):** *Cross-border logistics, built on local expertise.*

**Two-column layout:**

**Left:** Stylised map of East/Central Africa with Tanzania glowing gold; route lines pulsing out to the 7 destinations.

**Right:** List of established corridors with gold check icons:
- ✓ Dar es Salaam → Kigali (Rwanda)
- ✓ Dar es Salaam → Bujumbura (Burundi)
- ✓ Dar es Salaam → Lusaka (Zambia)
- ✓ Dar es Salaam → Blantyre (Malawi)
- ✓ Dar es Salaam → Nairobi (Kenya)
- ✓ Dar es Salaam → Kampala (Uganda)
- ✓ Dar es Salaam → Kinshasa (DRC)

**Button:** `Explore Coverage →` (gold)

### 4.9 Testimonials (Off-white background)

*Note: Replace with client logo strip if testimonials are not yet available.*

- Eyebrow (gold): `◆ CLIENT VOICES`
- **Heading:** *What our clients say.*

**Card row** (Mivora-style): Each card contains circular client photo, name, role/company, and a short quote. Decorative gold quote-mark shape in the corner.

**Placeholder testimonials (replace with real ones):**

> "Lumirise has become the logistics partner we recommend to everyone. Reliable, communicative, and always on time."
> — **[Client Name]**, Operations Manager, [Company]

> "Their cross-border expertise is unmatched. Our shipments to Lusaka have never been smoother."
> — **[Client Name]**, Supply Chain Director, [Company]

> "Safety, compliance, and professionalism — exactly what we need for our fuel distribution."
> — **[Client Name]**, Procurement Head, [Company]

### 4.10 CTA Banner (Gold background, full-bleed)

**Huge dark navy headline:** *Have cargo to move? Let's talk.*
**Sub-line:** Get a transparent quote within 24 hours.

**Two buttons:**
- `[Request a Quote →]` (navy solid)
- `[Call +255 762 361 374]` (navy outline)

Subtle decorative shape (gold-on-gold) or faint truck silhouette in the background.

### 4.11 Insights / Blog Teaser (White background — optional, add when content exists)

- Eyebrow (gold): `◆ INSIGHTS`
- **Heading:** *Latest from Lumirise.*
- Three blog card grid: category badge (gold) · date · title · "Read →" link.

### 4.12 Client Logo Strip (White background — when clients exist)

Marquee-style scrolling row of client logos in grayscale, with gold hover state.

---

## 5. About Page

### 5.1 Hero (Navy, ~60vh)

- Eyebrow (gold): `◆ ABOUT LUMIRISE`
- **H1 (white):** *Built on safety. Driven by trust.*
- **Sub-line:** Get to know the team and the principles behind every Lumirise delivery.
- **Background:** Faded image of the Lumirise team or fleet shot at golden hour.

### 5.2 Company Overview (White background)

**Heading:** *A Tanzanian logistics company with a regional vision.*

**Body:**
> Lumirise Company Limited is a dynamic Tanzanian transportation and logistics company dedicated to the safe, reliable, and efficient movement of cargo across Tanzania and the broader East and Central African region.
>
> We specialise in the transportation of containers, loose cargo, dry cargo, and petroleum products, serving clients across manufacturing, retail, energy, and construction. With a fleet of well-maintained trucks and fuel tankers, trained drivers, and strict adherence to safety and regulatory standards, we deliver — every time.
>
> Based in Dar es Salaam, we leverage Tanzania's strategic position as the gateway to landlocked East and Central African markets, giving our clients reliable access to ports, depots, and destinations throughout the region.

**Layout:** Two-column — narrative left, image stack right (founder portrait + early fleet photo).

### 5.3 Our Story (Off-white background)

- Eyebrow (gold): `◆ OUR STORY`
- **Heading:** *From local routes to regional reach.*

**Body (placeholder — replace with real history):**
> Lumirise was founded to address a clear gap in East and Central African trade: cargo owners needed a logistics partner they could genuinely rely on. From a handful of vehicles serving local routes, we have grown into a regional operator handling complex cross-border shipments — all while keeping safety and service at the centre of everything we do.

### 5.4 Vision & Mission (White background)

Two side-by-side rounded cards. Each has a small icon in a gold circle, navy heading, gold accent line on top.

**Card 1 — Our Vision**
> To become East and Central Africa's most trusted and efficient transport and logistics partner — delivering safe, reliable, and innovative cargo solutions that drive regional trade and economic growth.

**Card 2 — Our Mission**
> To provide superior transportation and logistics services through safe operations, timely deliveries, professional customer care, and continuous improvement — ensuring value, integrity, and excellence in the movement of containers, loose cargo, dry cargo, and petroleum products.

### 5.5 Core Values (Navy background)

- Eyebrow (gold): `◆ OUR PRINCIPLES`
- **Heading (white):** *The principles behind every kilometre.*

**Five-card grid (3+2 layout)** — each card has a large gold number (01–05), navy/white bold value name, description in muted white.

**01 — Safety First**
Prioritising the safety of our people, clients' cargo, and communities through strict compliance and responsible operations.

**02 — Integrity & Transparency**
Conducting business with honesty, fairness, and accountability — ensuring trust and long-term relationships.

**03 — Professionalism**
Upholding high standards in every aspect of operations with disciplined, respectful, and responsible service delivery.

**04 — Customer-Centred Service**
Listening, understanding, and adapting to clients' needs with personalised and efficient transport solutions.

**05 — Operational Excellence**
Committed to efficient processes, quality fleet management, and best practices for smooth cargo movement.

### 5.6 Leadership (White background — when available)

- Eyebrow (gold): `◆ OUR LEADERSHIP`
- **Heading:** *The people driving Lumirise forward.*

Grid of 3–4 headshot cards: rounded portrait, name, role, short bio. Hover reveals a LinkedIn icon.

### 5.7 Compliance & Certifications (Off-white background)

- Eyebrow (gold): `◆ COMPLIANCE & STANDARDS`
- **Heading:** *Licensed, certified, and ready to deliver.*

Logo row of regulatory bodies (LATRA, TRA, cross-border transit agencies). Gold check icons next to each compliance statement:
- ✓ Licensed by the Land Transport Regulatory Authority (LATRA)
- ✓ Tanzania Revenue Authority (TRA) compliant
- ✓ Cross-border transit permits across all served countries
- ✓ Petroleum transport certifications
- ✓ Driver licensing and ongoing training programs

### 5.8 CTA Band before Footer

Same gold band pattern as homepage: *"Ready to move with Lumirise?"*

---

## 6. Services Overview Page

### 6.1 Hero (Navy)

- Eyebrow (gold): `◆ OUR SERVICES`
- **H1 (white):** *Five service lines. One standard of excellence.*
- **Sub-line:** Whatever you need moved — fuel, freight, containers, or oversized equipment — we have the fleet, the certifications, and the regional reach to do it safely.

### 6.2 Service Cards Grid (White, 5 large cards)

Each card is a **horizontal layout** alternating left-image / right-image for visual rhythm.

**Card structure:**
- ~40% width: Service image (rounded)
- ~60% width: Gold icon + service name + 2-line description + bullet list of what's transported (gold checks) + "Learn more →" link

**Card 1 — Fuel & Petroleum Product Transportation**
> Certified fuel tankers for the safe transport of diesel, petrol, kerosene, and other petroleum products. Strict safety standards and regulatory adherence throughout every journey.

What we transport:
- ✓ Diesel and petrol
- ✓ Kerosene
- ✓ Lubricants
- ✓ Regulated petroleum products

**Card 2 — Dry Cargo Transportation**
> Efficient transport of fertilizers, grains, cement, general merchandise, packaged goods, and industrial materials in well-maintained fleets.

What we transport:
- ✓ Fertilizers and agricultural inputs
- ✓ Grains and bulk produce
- ✓ Cement and building materials
- ✓ General merchandise and FMCG
- ✓ Industrial materials

**Card 3 — Container Transportation**
> Moving 20ft and 40ft containers from ports, inland depots, and warehouses — including port clearance coordination and customs compliance.

What we offer:
- ✓ 20ft and 40ft container transport
- ✓ Port clearance coordination
- ✓ Customs documentation support
- ✓ Inland depot collection
- ✓ Onward delivery to client warehouses

**Card 4 — Loose Cargo / Break-Bulk**
> Transporting non-containerized goods such as machinery, construction materials, industrial equipment, and oversized cargo with precision planning.

What we transport:
- ✓ Heavy machinery
- ✓ Construction materials
- ✓ Industrial equipment
- ✓ Oversized cargo
- ✓ Project freight

**Card 5 — Cross-Border Transportation**
> Supporting regional trade to Rwanda, Burundi, Malawi, Zambia, Kenya, Uganda, and DRC — including border documentation and route planning.

What we handle:
- ✓ Border documentation
- ✓ Customs coordination
- ✓ Transit permits
- ✓ Route planning
- ✓ Multi-jurisdiction compliance

### 6.3 Process Section (Off-white background)

- Eyebrow (gold): `◆ HOW WE WORK`
- **Heading:** *A simple, transparent process from quote to delivery.*

**Four-step horizontal timeline (gold numbered circles):**

1. **Inquiry** — Tell us what you need to move, where, and when.
2. **Planning** — We design the route, secure permits, and confirm the quote.
3. **Execution** — Trained drivers transport your cargo with real-time updates.
4. **Delivery** — Your cargo arrives safely, on time, with full documentation.

### 6.4 CTA Band before Footer

Gold band: *"Need a quote for one of our services? Let's talk."*

---

## 7. Individual Service Pages

*One template repeated for each of the 5 services.*

### Template Structure:

**Section A — Hero (Navy, service-specific image)**
- Eyebrow: `◆ [SERVICE NAME]`
- H1: Service-specific headline
- Dual CTA: `[Request a Quote]` + `[Call Us]`

**Section B — Service Overview (White)**
- Large paragraph describing the service
- Image to the side or below

**Section C — What We Transport (Off-white)**
- Grid of icons with labels

**Section D — Sectors We Serve (White)**
- Industry icon/logo row

**Section E — Our Process (Off-white)**
- 4-step timeline specific to this service

**Section F — Why This Service Matters (Navy)**
- 3 reason-tiles with gold icons

**Section G — Related Services (White)**
- Cross-link to other 4 services as cards

**Section H — CTA Band**
- Service-specific quote CTA

---

### 7.1 Fuel & Petroleum Transport Page

**Hero Headline:** *Certified Fuel Tankers for Critical Cargo.*

**Lead paragraph:**
> Petroleum logistics demands more than vehicles — it demands certified equipment, trained drivers, and zero tolerance for shortcuts. Lumirise transports diesel, petrol, kerosene, and other petroleum products under the strictest safety and regulatory standards, every kilometre of the journey.

**What we transport:** Diesel · Petrol · Kerosene · Lubricants · Other regulated petroleum products

**Key features:**
- ✓ Certified tankers
- ✓ Trained, licensed drivers
- ✓ Real-time monitoring
- ✓ Full regulatory compliance
- ✓ Emergency response protocols

**Sectors served:** Energy companies, fuel distributors, mining operations, construction sites, industrial clients

---

### 7.2 Dry Cargo Transport Page

**Hero Headline:** *Reliable Dry Cargo, Delivered on Schedule.*

**Lead paragraph:**
> From fertilizers to fast-moving consumer goods, our dry cargo fleet keeps supply chains running. Well-maintained vehicles, experienced crews, and disciplined route planning ensure your goods arrive intact and on time.

**What we transport:** Fertilizers · Grains · Cement · General merchandise · Packaged goods · Industrial materials

**Key features:**
- ✓ Maintained fleet
- ✓ Secure loading
- ✓ Route optimisation
- ✓ End-to-end tracking

**Sectors served:** Agriculture, FMCG, retail, manufacturing, construction

---

### 7.3 Container Transport Page

**Hero Headline:** *20ft & 40ft Container Movement — Port to Destination.*

**Lead paragraph:**
> We move standard and high-cube containers from the Port of Dar es Salaam to inland depots, warehouses, and onward to regional destinations. Our team coordinates port clearance, documentation, and customs compliance so your cargo keeps moving without delays.

**What we offer:** 20ft container transport · 40ft container transport · Port clearance · Customs documentation · Inland depot collection · Onward delivery

**Sectors served:** Importers, exporters, freight forwarders, shipping lines, manufacturers

---

### 7.4 Loose Cargo / Break-Bulk Page

**Hero Headline:** *Precision Planning for Non-Containerised Cargo.*

**Lead paragraph:**
> Machinery, construction materials, and oversized industrial equipment require more than a truck — they require planning, permits, and people who understand the route. Our break-bulk service handles complex loads with care.

**What we transport:** Heavy machinery · Construction materials · Industrial equipment · Oversized cargo · Project freight

**Key features:**
- ✓ Route surveys
- ✓ Special permits
- ✓ Escort coordination where required
- ✓ Specialised loading equipment

**Sectors served:** Construction, energy, mining, manufacturing, infrastructure projects

---

### 7.5 Cross-Border Transport Page

**Hero Headline:** *Seven Countries. One Logistics Partner.*

**Lead paragraph:**
> Lumirise supports regional trade across East and Central Africa with established cross-border routes, full documentation expertise, and on-ground familiarity with every major border post.

**Countries served:** Rwanda · Burundi · Kenya · Uganda · Zambia · Malawi · DR Congo

**What we handle:**
- ✓ Border documentation
- ✓ Customs coordination
- ✓ Transit permits
- ✓ Route planning
- ✓ Driver compliance across jurisdictions

---

## 8. Coverage Page

### 8.1 Hero (Navy with map overlay)

- Eyebrow (gold): `◆ REGIONAL COVERAGE`
- **H1 (white):** *Tanzania to the region. Coverage you can count on.*
- **Sub-line:** From the Port of Dar es Salaam to seven neighbouring countries, our routes connect East and Central African markets to the world.

### 8.2 Interactive Map Section (Off-white or navy)

Large stylised map dominates the section. Hovering each country highlights it in gold and reveals a popup with route info.

### 8.3 Established Routes (White)

- Eyebrow (gold): `◆ OUR ROUTES`
- **Heading:** *Established corridors across East and Central Africa.*

**Two-column grid of route cards.** Each card includes:
- Route name (e.g. Dar es Salaam → Kigali)
- Estimated transit time
- Border crossings
- Cargo types commonly moved
- Gold corner accent

**Route data:**

| Route | Destination Country | Cargo Types |
|-------|---------------------|-------------|
| Dar es Salaam → Kigali | Rwanda | Containers, dry cargo, fuel |
| Dar es Salaam → Bujumbura | Burundi | Containers, dry cargo |
| Dar es Salaam → Lusaka | Zambia | Containers, fuel, break-bulk |
| Dar es Salaam → Blantyre | Malawi | Dry cargo, containers |
| Dar es Salaam → Nairobi | Kenya | Containers, dry cargo |
| Dar es Salaam → Kampala | Uganda | Containers, fuel, dry cargo |
| Dar es Salaam → Kinshasa | DR Congo | Containers, break-bulk, dry cargo |

### 8.4 Why Our Cross-Border Operation Works (Off-white)

- Eyebrow (gold): `◆ CROSS-BORDER ADVANTAGE`
- **Heading:** *What makes our regional logistics different.*

**Three-tile row, each with gold icon-in-circle:**

1. **Documentation Expertise** — Permits, transit bonds, and customs paperwork handled in advance.
2. **Local Relationships** — Established presence at every major border post means fewer surprises.
3. **Compliance Discipline** — Vehicles, drivers, and cargo always meet jurisdictional requirements.

### 8.5 CTA Band before Footer

Gold band: *"Planning a cross-border shipment? We've done it before."*

---

## 9. Industries Page

### 9.1 Hero (Navy)

- Eyebrow (gold): `◆ INDUSTRIES WE SERVE`
- **H1 (white):** *Industry-specific logistics. Tailored to how you work.*

### 9.2 Industry Blocks (Alternating white / off-white sections)

One full section per industry, alternating image-left and image-right layouts.

**9.2.1 Manufacturing**
> Raw materials in, finished goods out. Reliable scheduled freight that keeps production lines moving. From inter-facility transfers to final distribution, Lumirise provides the consistency manufacturers depend on.

**Relevant services:** Container Transport · Dry Cargo · Cross-Border

---

**9.2.2 Retail & FMCG**
> Time-sensitive distribution of packaged goods to warehouses and distribution centres across the region. Our fleet keeps shelves stocked and supply chains moving — even across borders.

**Relevant services:** Dry Cargo · Container Transport · Cross-Border

---

**9.2.3 Energy & Petroleum**
> Certified tanker transport for fuel distributors, mining operations, and energy infrastructure projects. Strict safety standards. Full regulatory compliance. Zero compromise.

**Relevant services:** Fuel & Petroleum Transport · Cross-Border

---

**9.2.4 Construction & Infrastructure**
> Cement, steel, machinery, and break-bulk freight to project sites anywhere in East and Central Africa. We understand project timelines — and what's at stake when we miss them.

**Relevant services:** Dry Cargo · Loose Cargo / Break-Bulk · Container Transport

---

**9.2.5 Agriculture & Mining**
> Bulk transport for the region's primary industries — fertilizers in, harvests and minerals out. We move what feeds and fuels the region.

**Relevant services:** Dry Cargo · Container Transport · Cross-Border

### 9.3 CTA Band before Footer

Gold band: *"Don't see your industry? We probably still serve it. Let's talk."*

---

## 10. Why Choose Lumirise Page

### 10.1 Hero (Navy)

- Eyebrow (gold): `◆ WHY CHOOSE US`
- **H1 (white):** *Why cargo owners across the region choose Lumirise.*
- **Sub-line:** Six reasons your shipment is safer with us.

### 10.2 Six Reason Tiles (White background, 3x2 grid)

Each tile has a gold icon-in-circle, navy heading, body description.

**1. Proven Safety Record**
Certified operations, trained drivers, well-maintained fleet, and a culture of zero compromise on safety.

**2. Full Regulatory Compliance**
All licenses, permits, and cross-border documentation in order, so your cargo moves without surprises.

**3. Diverse Cargo Capability**
Containers, petroleum, dry cargo, and break-bulk — one partner for all your logistics needs.

**4. Regional Network**
Established routes to seven countries in East and Central Africa, with local expertise at every transit point.

**5. Transparent Communication**
Real-time updates and professional customer care, so you always know where your cargo is.

**6. Timely Delivery Commitment**
Disciplined operations and smart route planning that deliver on the promise: on time, every time.

### 10.3 Stats Reinforcement (Gold band)

Same stats as homepage band: 5 · 7+ · 100% · 24hr

### 10.4 CTA Band before Footer

---

## 11. Fleet & Safety Page

### 11.1 Hero (Navy)

- Eyebrow (gold): `◆ FLEET & SAFETY`
- **H1 (white):** *A fleet built for the road ahead.*
- **Background:** Hero image of a Lumirise truck or tanker.

### 11.2 Our Fleet (White)

- Eyebrow (gold): `◆ OUR FLEET`
- **Heading:** *Right vehicles, right cargo, right route.*

**Three card blocks (with photos):**

**Card 1 — Cargo Trucks**
> Our cargo trucks handle containers, dry cargo, and general freight across the region. Modern, well-maintained, and regularly inspected.

**Card 2 — Fuel Tankers**
> Certified tankers built for the safe transport of petroleum products. Equipped with safety systems, monitoring technology, and operated by specially trained drivers.

**Card 3 — Specialised Vehicles**
> Low-loaders, flatbeds, and equipment for break-bulk and oversized cargo — for project freight that doesn't fit the standard mould.

### 11.3 Safety Standards (Off-white)

- Eyebrow (gold): `◆ SAFETY STANDARDS`
- **Heading:** *Safety isn't a feature. It's a foundation.*

**Five-point list with gold check icons:**

- ✓ **Driver Training & Licensing** — All drivers fully licensed and trained on cargo-specific and route-specific protocols.
- ✓ **Vehicle Inspection & Maintenance** — Regular scheduled inspections and proactive maintenance for every vehicle.
- ✓ **Regulatory Compliance** — Full compliance with national and regional transport regulations across every country we serve.
- ✓ **Cargo Handling Protocols** — Standardised procedures for loading, securing, and unloading every cargo type.
- ✓ **Emergency Response** — Trained protocols and resources for incident response, especially for hazardous cargo.

### 11.4 Compliance & Certifications (White)

Repeat from About page — regulatory logos and certifications list.

### 11.5 CTA Band before Footer

Gold band: *"Confidence starts with the right fleet. Let's get your cargo moving."*

---

## 12. Request a Quote Page

### 12.1 Hero (Navy, short)

- Eyebrow (gold): `◆ REQUEST A QUOTE`
- **H1 (white):** *Get a quote in 24 hours.*
- **Sub-line:** Tell us what you need moved, and a Lumirise specialist will respond within one business day.

### 12.2 Quote Form (White background, two-column)

**Left column — Form Card (rounded, navy border, gold focus state):**

Form fields:
- Full name *
- Company name *
- Email address *
- Phone number *
- Cargo type (dropdown): Container / Fuel / Dry Cargo / Break-Bulk / Other
- Origin (city/port) *
- Destination (city/country) *
- Estimated weight or volume
- Preferred pickup date
- Additional details (free text)
- **Submit button:** `Request My Quote →` (solid gold)

**Right column — Reassurance Block:**

✓ Response within 24 hours
✓ Transparent, all-inclusive pricing
✓ No obligation
✓ Direct line to a logistics specialist

**Below the reassurance block:**
> Prefer to talk to someone now?
> **Call:** +255 762 361 374
> **Email:** info@lumirise.co.tz

### 12.3 What Happens Next (Off-white)

- Eyebrow (gold): `◆ THE PROCESS`
- **Heading:** *Here's what happens after you submit.*

**Three-step timeline:**

1. **Within 1 hour** — You receive a confirmation email acknowledging your request.
2. **Within 24 hours** — A logistics specialist reaches out with questions and a tailored quote.
3. **On approval** — We plan the route, prepare documentation, and schedule pickup.

---

## 13. Contact Page

### 13.1 Hero (Navy, short)

- Eyebrow (gold): `◆ GET IN TOUCH`
- **H1 (white):** *Let's move your cargo.*
- **Sub-line:** We'd love to partner with you. Reach out for a quote, a question, or a conversation about your logistics needs.

### 13.2 Contact Details + Map (White, two-column)

**Left column — Contact details with gold icons:**

📞 **Phone**
+255 762 361 374
+255 719 186 216

📧 **Email**
info@lumirise.co.tz

📍 **Address**
Buza kwa Mama Kibonge, Plot No. 12
Dar es Salaam, Tanzania

📬 **P.O. Box**
P.O. Box 10877, Dar es Salaam

🕒 **Business Hours**
Monday – Saturday, 8:00 AM – 6:00 PM EAT *(to confirm)*

**Right column:** Embedded Google Map pinned to Buza kwa Mama Kibonge office, styled with custom navy/gold theme.

### 13.3 General Contact Form (Off-white)

Simpler version of the quote form:
- Name *
- Email *
- Phone
- Subject (dropdown): General Inquiry / Quote Request / Partnership / Other
- Message *
- **Submit:** `Send Message →` (gold)

### 13.4 Quick-Channel Tiles (White)

Three big tiles, each with gold icon and direct-action button:

1. **Call Us** — Fastest response. Click to call.
2. **WhatsApp** — Message us on WhatsApp Business.
3. **Email** — Detailed inquiries welcome.

### 13.5 CTA Band before Footer

Gold band: *"Safe. Reliable. On Time. — Tanzania's Trusted Transport Partner."*

---

## 14. Motion & Interactions

Subtle Mivora-style touches to lock in:

- **On-scroll fade-and-rise** — Sections fade in and rise 20px as they enter the viewport.
- **Image hover** — Slight zoom (1.03×) with a soft gold corner accent appearing.
- **Button hover** — Gold buttons shift slightly darker; outlined buttons fill with their respective color.
- **Cursor accent (optional)** — A small gold dot follows the cursor on desktop, expands on hover over interactive elements.
- **Stat counter animation** — Numbers count up from 0 when the stats band enters viewport.
- **Tab transitions** — Industry/service tabs cross-fade content rather than snap.
- **Marquee tagline strip** — A thin band somewhere on the home page: *"Safe · Reliable · On Time · Safe · Reliable · On Time ·"* scrolling in gold over navy.
- **Map route lines** — Pulse animation on coverage map route lines.

---

## 15. Mobile Considerations

- **Hero:** Text drops to ~36–44px H1, video plays muted with poster image fallback for slow connections.
- **Carousels:** Become swipeable with visible scroll indicators.
- **Tabs:** Industry and service tabs convert to accordion stacks.
- **Stats band:** Shifts from 4-in-a-row to a 2×2 grid.
- **Navigation:** Hamburger menu opens a full-screen navy panel with gold accent lines.
- **Sticky bottom bar:** Appears on mobile with `[Call]` and `[Quote]` gold buttons for one-tap conversion.
- **Forms:** Single-column layout, larger touch targets (min 48px height on all inputs/buttons).
- **Images:** Lazy-loaded, responsive sizes, WebP format with JPEG fallback.

---

## 16. SEO Metadata

### Recommended Page Titles & Descriptions

**Home**
- **Title:** Lumirise Company Limited | Cross-Border Transport & Logistics | Tanzania
- **Description:** Safe, reliable, on-time cargo transport from Dar es Salaam to 7 countries across East and Central Africa. Containers, fuel, dry cargo, and break-bulk.

**About**
- **Title:** About Lumirise | Tanzanian Transport & Logistics Company
- **Description:** Discover Lumirise — a Tanzanian transport company built on safety, integrity, and operational excellence, serving manufacturing, retail, energy, and construction clients across East and Central Africa.

**Services**
- **Title:** Our Services | Lumirise Transport & Logistics
- **Description:** Container transport, fuel tankers, dry cargo, break-bulk, and cross-border logistics across Tanzania and the East and Central African region.

**Coverage**
- **Title:** Cross-Border Coverage | Lumirise — Dar es Salaam to 7 Countries
- **Description:** Established cross-border routes from Dar es Salaam to Rwanda, Burundi, Kenya, Uganda, Zambia, Malawi, and DRC. Safe, compliant, reliable.

**Contact**
- **Title:** Contact Lumirise | Get a Transport Quote | Dar es Salaam, Tanzania
- **Description:** Get a quote within 24 hours. Call +255 762 361 374 or email info@lumirise.co.tz. Tanzania's trusted transport partner.

### Recommended Keywords (Primary)

- Transport company Tanzania
- Logistics Dar es Salaam
- Cross-border transport East Africa
- Container transport Tanzania
- Fuel tanker transport Tanzania
- Dar es Salaam to Kigali freight
- Dar es Salaam to Lusaka transport
- Cargo transport East Africa
- Tanzanian logistics company

---

## 17. Recommended Additions

Small enhancements that significantly strengthen the site beyond the original profile:

### High Priority
- **WhatsApp floating button** — In Tanzania and the region, WhatsApp is often a faster conversion channel than email. Adding a floating chat button is a quick win.
- **Testimonials / client logos** — Even three short quotes move the needle on conversion. Logos do the same.
- **Privacy Policy & Terms** — Required for trust and any future Google Ads campaigns.

### Medium Priority
- **Case studies / recent deliveries page** — Simple "Recent Deliveries" stories make operational capability tangible.
- **Blog / Insights section** — Excellent for SEO over time. Topics: cross-border transit tips, Dar es Salaam port updates, regional trade trends.
- **English / Swahili language toggle** — Signals you're serious about local clients.

### Future Considerations
- **Driver / Careers page** — Useful for recruitment and HR branding.
- **Client portal** — For tracking shipments and accessing documents (longer-term project).
- **Live cargo tracking widget** — Once tracking systems are in place, embed this on the homepage.

---

## Appendix: Brand Quick Reference

**Company Name:** Lumirise Company Limited
**Tagline:** Safe. Reliable. On Time.
**Location:** Buza kwa Mama Kibonge, Plot No. 12, Dar es Salaam, Tanzania
**P.O. Box:** 10877, Dar es Salaam
**Phone:** +255 762 361 374 / +255 719 186 216
**Email:** info@lumirise.co.tz
**Website:** lumirise.co.tz

**Service Lines:** 5 (Fuel · Dry Cargo · Containers · Break-Bulk · Cross-Border)
**Countries Served:** 7 (Rwanda, Burundi, Kenya, Uganda, Zambia, Malawi, DRC)
**Industries Served:** Manufacturing, Retail, Energy, Construction, Agriculture & Mining

---

*End of specification document. Version 1.0. Hand this to a designer or developer to build directly from.*

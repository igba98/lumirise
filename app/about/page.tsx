import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { PageHero } from "@/components/sections/shared/PageHero";
import { Compliance } from "@/components/sections/shared/Compliance";
import { CTABand } from "@/components/sections/shared/CTABand";
import { values } from "@/lib/content/values";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "About Lumirise | Tanzanian Transport & Logistics Company",
  description:
    "Discover Lumirise — a Tanzanian transport company built on safety, integrity, and operational excellence, serving manufacturing, retail, energy, and construction clients across East and Central Africa.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Lumirise"
        title={
          <>
            Built on safety. <span className="text-gold">Driven by trust.</span>
          </>
        }
        sub="Get to know the team and the principles behind every Lumirise delivery."
        image={images.goldenHour}
        alt="Lumirise fleet at golden hour"
      />

      {/* Company overview */}
      <Section bg="white">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <h2 className="text-4xl font-extrabold leading-tight text-navy md:text-5xl">
              A Tanzanian logistics company with a regional vision.
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
              <p>
                Lumirise Company Limited is a dynamic Tanzanian transportation
                and logistics company dedicated to the safe, reliable, and
                efficient movement of cargo across Tanzania and the broader East
                and Central African region.
              </p>
              <p>
                We specialise in the transportation of containers, loose cargo,
                dry cargo, and petroleum products, serving clients across
                manufacturing, retail, energy, and construction. With a fleet of
                well-maintained trucks and fuel tankers, trained drivers, and
                strict adherence to safety and regulatory standards, we deliver
                — every time.
              </p>
              <p>
                Based in Dar es Salaam, we leverage Tanzania&apos;s strategic
                position as the gateway to landlocked East and Central African
                markets, giving our clients reliable access to ports, depots,
                and destinations throughout the region.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="grid grid-cols-2 gap-4">
              <ImageFrame
                src={images.port}
                alt="Port operations"
                ratio="aspect-[3/4]"
                className="mt-8"
              />
              <ImageFrame
                src={images.fleet}
                alt="Lumirise fleet"
                ratio="aspect-[3/4]"
              />
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Our story */}
      <Section bg="cream">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <SectionHeading
            eyebrow="OUR STORY"
            title="From local routes to regional reach."
          />
          <Reveal delay={0.1}>
            <p className="text-lg leading-relaxed text-muted">
              Lumirise was founded to address a clear gap in East and Central
              African trade: cargo owners needed a logistics partner they could
              genuinely rely on. From a handful of vehicles serving local
              routes, we have grown into a regional operator handling complex
              cross-border shipments — all while keeping safety and service at
              the centre of everything we do.
            </p>
          </Reveal>
        </div>
      </Section>

      {/* Vision & Mission */}
      <Section bg="white">
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              t: "Our Vision",
              b: "To become East and Central Africa's most trusted and efficient transport and logistics partner — delivering safe, reliable, and innovative cargo solutions that drive regional trade and economic growth.",
            },
            {
              t: "Our Mission",
              b: "To provide superior transportation and logistics services through safe operations, timely deliveries, professional customer care, and continuous improvement — ensuring value, integrity, and excellence in the movement of containers, loose cargo, dry cargo, and petroleum products.",
            },
          ].map((c, i) => (
            <Reveal
              key={c.t}
              delay={i * 0.12}
              className="rounded-[var(--radius-card)] border-t-4 border-gold bg-cream p-9"
            >
              <h3 className="text-2xl font-extrabold text-navy">{c.t}</h3>
              <p className="mt-4 leading-relaxed text-muted">{c.b}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Core values */}
      <Section bg="navy">
        <SectionHeading
          eyebrow="OUR PRINCIPLES"
          title="The principles behind every kilometre."
          tone="white"
          max="max-w-2xl"
        />
        <Stagger className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {values.map((v) => (
            <StaggerItem
              key={v.n}
              className="rounded-[var(--radius-card)] border border-white/10 bg-navy-700 p-8"
            >
              <span className="text-5xl font-extrabold text-gold/30">
                {v.n}
              </span>
              <h3 className="mt-4 text-xl font-bold text-white">{v.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60">
                {v.body}
              </p>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* Leadership (placeholder) */}
      <Section bg="white">
        <SectionHeading
          eyebrow="OUR LEADERSHIP"
          title="The people driving Lumirise forward."
          max="max-w-2xl"
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <Reveal
              key={i}
              delay={i * 0.08}
              className="rounded-[var(--radius-card)] border border-divider bg-cream p-6 text-center"
            >
              <div className="mx-auto h-24 w-24 rounded-full bg-navy/10" />
              <p className="mt-5 font-bold text-navy">Leadership Name</p>
              <p className="text-sm text-muted">Role / Title</p>
              <p className="mt-3 text-xs text-muted">
                Short bio to be added once team profiles are confirmed.
              </p>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-8">
          <p className="text-center text-xs text-muted">
            Placeholder — to be replaced with named leadership profiles.
          </p>
        </Reveal>
      </Section>

      <Compliance bg="cream" />

      <CTABand
        headline="Ready to move with Lumirise?"
        sub="Tell us what you need moved — we respond within 24 hours."
      />
    </>
  );
}

import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { IconCircle } from "@/components/ui/IconCircle";
import { ArrowUpRight } from "@/components/ui/icons";
import { PageHero } from "@/components/sections/shared/PageHero";
import { RouteMap } from "@/components/sections/shared/RouteMap";
import { CTABand } from "@/components/sections/shared/CTABand";
import { routes, origin } from "@/lib/content/routes";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Cross-Border Coverage | Lumirise — Dar es Salaam to 7 Countries",
  description:
    "Established cross-border routes from Dar es Salaam to Rwanda, Burundi, Kenya, Uganda, Zambia, Malawi, and DRC. Safe, compliant, reliable.",
};

const advantages = [
  {
    title: "Documentation Expertise",
    body: "Permits, transit bonds, and customs paperwork handled in advance.",
  },
  {
    title: "Local Relationships",
    body: "Established presence at every major border post means fewer surprises.",
  },
  {
    title: "Compliance Discipline",
    body: "Vehicles, drivers, and cargo always meet jurisdictional requirements.",
  },
];

export default function CoveragePage() {
  return (
    <>
      <PageHero
        eyebrow="Regional Coverage"
        title={
          <>
            Tanzania to the region.{" "}
            <span className="text-gold">Coverage you can count on.</span>
          </>
        }
        sub="From the Port of Dar es Salaam to seven neighbouring countries, our routes connect East and Central African markets to the world."
        image={images.crossBorder}
        alt="Containers crossing the region"
      />

      <Section bg="navy">
        <SectionHeading
          eyebrow="ONE HUB. SEVEN COUNTRIES."
          title="Cross-border logistics, built on local expertise."
          tone="white"
          max="max-w-2xl"
        />
        <Reveal className="mt-12">
          <div className="rounded-[var(--radius-frame)] border border-white/10 bg-navy-700/50 p-6">
            <RouteMap />
          </div>
        </Reveal>
      </Section>

      <Section bg="white">
        <SectionHeading
          eyebrow="OUR ROUTES"
          title="Established corridors across East and Central Africa."
          max="max-w-2xl"
        />
        <Stagger className="mt-12 grid gap-6 md:grid-cols-2">
          {routes.map((r) => (
            <StaggerItem
              key={r.to}
              className="group relative overflow-hidden rounded-[var(--radius-card)] border border-divider bg-cream p-8"
            >
              <span className="pointer-events-none absolute right-0 top-0 h-20 w-20 rounded-bl-[2.5rem] bg-gold/15" />
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-extrabold text-navy">
                  {origin} → {r.to}
                </h3>
                <ArrowUpRight className="h-5 w-5 text-gold" />
              </div>
              <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-muted">
                {r.country}
              </p>
              <div className="mt-6 border-t border-divider pt-4">
                <p className="text-xs uppercase tracking-wide text-muted">
                  Cargo commonly moved
                </p>
                <p className="mt-1 font-semibold text-navy">{r.cargo}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal className="mt-8">
          <p className="text-sm text-muted">
            Transit times and border details confirmed per shipment during
            quoting.
          </p>
        </Reveal>
      </Section>

      <Section bg="cream">
        <SectionHeading
          eyebrow="CROSS-BORDER ADVANTAGE"
          title="What makes our regional logistics different."
          max="max-w-2xl"
        />
        <Stagger className="mt-12 grid gap-6 md:grid-cols-3">
          {advantages.map((a) => (
            <StaggerItem
              key={a.title}
              className="rounded-[var(--radius-card)] border border-divider bg-white p-8"
            >
              <IconCircle icon={ArrowUpRight} />
              <h3 className="mt-5 text-lg font-bold text-navy">{a.title}</h3>
              <p className="mt-2 text-muted">{a.body}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <CTABand headline="Planning a cross-border shipment? We've done it before." />
    </>
  );
}

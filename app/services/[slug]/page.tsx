import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { IconCircle } from "@/components/ui/IconCircle";
import { CheckList } from "@/components/ui/CheckList";
import { ArrowRight } from "@/components/ui/icons";
import { PageHero } from "@/components/sections/shared/PageHero";
import { ProcessTimeline } from "@/components/sections/shared/ProcessTimeline";
import { CTABand } from "@/components/sections/shared/CTABand";
import { services, serviceBySlug, serviceIcons } from "@/lib/content/services";
import { serviceImage } from "@/lib/images";
import { site } from "@/lib/content/site";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  if (!service) return {};
  return {
    title: `${service.name} | Lumirise`,
    description: service.overview,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  if (!service) notFound();

  const Icon = serviceIcons[service.slug];
  const related = services.filter((s) => s.slug !== service.slug);
  const tel = `tel:${site.phonePrimary.replace(/\s/g, "")}`;

  return (
    <>
      {/* A — Hero */}
      <PageHero
        eyebrow={service.shortName}
        title={service.heroHeadline}
        image={serviceImage[service.slug]}
        alt={service.name}
        ctas={[
          { label: "Request a Quote", href: "/quote" },
          { label: `Call ${site.phonePrimary}`, href: tel, variant: "outline" },
        ]}
      />

      {/* B — Overview */}
      <Section bg="white">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="flex items-center gap-4">
              <IconCircle icon={Icon} />
              <h2 className="text-3xl font-extrabold text-navy md:text-4xl">
                {service.name}
              </h2>
            </div>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              {service.lead}
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <ImageFrame
              src={serviceImage[service.slug]}
              alt={service.name}
              ratio="aspect-[5/4]"
            />
          </Reveal>
        </div>
      </Section>

      {/* C — What we transport */}
      <Section bg="cream">
        <SectionHeading
          eyebrow={service.transportLabel.toUpperCase()}
          title={`${service.transportLabel}.`}
          max="max-w-2xl"
        />
        <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {service.transports.map((t) => (
            <StaggerItem
              key={t}
              className="rounded-[var(--radius-card)] border border-divider bg-white px-6 py-5 font-semibold text-navy"
            >
              {t}
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* D — Sectors we serve */}
      <Section bg="white">
        <SectionHeading
          eyebrow="SECTORS WE SERVE"
          title="Built for the industries that depend on us."
          max="max-w-2xl"
        />
        <div className="mt-10 flex flex-wrap gap-3">
          {service.sectors.map((s) => (
            <span
              key={s}
              className="rounded-full border border-divider bg-cream px-5 py-2.5 text-sm font-semibold text-navy/80"
            >
              {s}
            </span>
          ))}
        </div>
      </Section>

      {/* E — Process */}
      <ProcessTimeline bg="cream" />

      {/* F — Why this service matters */}
      <Section bg="navy">
        <SectionHeading
          eyebrow="WHY IT MATTERS"
          title="What you get with Lumirise on this lane."
          tone="white"
          max="max-w-2xl"
        />
        <Stagger className="mt-14 grid gap-6 md:grid-cols-3">
          {service.features.slice(0, 3).map((f) => (
            <StaggerItem
              key={f}
              className="rounded-[var(--radius-card)] border border-white/10 bg-navy-700 p-8"
            >
              <IconCircle icon={Icon} tone="gold" />
              <h3 className="mt-5 text-lg font-bold text-white">{f}</h3>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal className="mt-10">
          <CheckList tone="white" items={service.features} />
        </Reveal>
      </Section>

      {/* G — Related services */}
      <Section bg="white">
        <SectionHeading
          eyebrow="RELATED SERVICES"
          title="Explore the rest of our fleet."
          max="max-w-2xl"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {related.map((r) => {
            const RIcon = serviceIcons[r.slug];
            return (
              <Reveal key={r.slug}>
                <Link
                  href={`/services/${r.slug}`}
                  className="group block h-full rounded-[var(--radius-card)] border border-divider bg-cream p-7 transition-colors hover:border-gold/50"
                >
                  <IconCircle icon={RIcon} />
                  <h3 className="mt-5 text-lg font-bold text-navy">
                    {r.name}
                  </h3>
                  <p className="mt-2 text-sm text-muted">{r.snapshot}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold">
                    Learn more
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* H — CTA */}
      <CTABand
        headline={`Need ${service.shortName.toLowerCase()} transport? Let's talk.`}
      />
    </>
  );
}

import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { PageHero } from "@/components/sections/shared/PageHero";
import { ProcessTimeline } from "@/components/sections/shared/ProcessTimeline";
import { CTABand } from "@/components/sections/shared/CTABand";
import { ServiceRow } from "@/components/sections/services/ServiceRow";
import { services } from "@/lib/content/services";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Our Services | Lumirise Transport & Logistics",
  description:
    "Container transport, fuel tankers, dry cargo, break-bulk, and cross-border logistics across Tanzania and the East and Central African region.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title={
          <>
            Five service lines.{" "}
            <span className="text-gold">One standard of excellence.</span>
          </>
        }
        sub="Whatever you need moved — fuel, freight, containers, or oversized equipment — we have the fleet, the certifications, and the regional reach to do it safely."
        image={images.logisticsAerial}
        alt="Logistics operations overview"
        ctas={[{ label: "Request a Quote", href: "/quote" }]}
      />

      <Section bg="white">
        <div className="space-y-24">
          {services.map((s, i) => (
            <ServiceRow key={s.slug} service={s} flip={i % 2 === 1} />
          ))}
        </div>
      </Section>

      <ProcessTimeline bg="cream" />

      <CTABand headline="Need a quote for one of our services? Let's talk." />
    </>
  );
}

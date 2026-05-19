import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { IconCircle } from "@/components/ui/IconCircle";
import { Shield, Check, Box, Globe, Chat, Route } from "@/components/ui/icons";
import { PageHero } from "@/components/sections/shared/PageHero";
import { StatsBand } from "@/components/sections/shared/StatsBand";
import { CTABand } from "@/components/sections/shared/CTABand";
import { reasons } from "@/lib/content/values";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Why Choose Lumirise | Tanzania's Trusted Transport Partner",
  description:
    "Six reasons cargo owners across East and Central Africa choose Lumirise: safety, compliance, diverse cargo capability, regional network, communication, and on-time delivery.",
};

const icons = [Shield, Check, Box, Globe, Chat, Route];

export default function WhyLumirisePage() {
  return (
    <>
      <PageHero
        eyebrow="Why Choose Us"
        title={
          <>
            Why cargo owners across the region{" "}
            <span className="text-gold">choose Lumirise.</span>
          </>
        }
        sub="Six reasons your shipment is safer with us."
        image={images.fleet}
        alt="Lumirise fleet"
      />

      <Section bg="white">
        <SectionHeading
          eyebrow="WHY CHOOSE US"
          title="One partner, six reasons to trust us with your cargo."
          max="max-w-2xl"
        />
        <Stagger className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => {
            const Icon = icons[i];
            return (
              <StaggerItem
                key={r.title}
                className="rounded-[var(--radius-card)] border border-divider bg-cream p-8"
              >
                <IconCircle icon={Icon} />
                <h3 className="mt-5 text-xl font-bold text-navy">{r.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{r.body}</p>
              </StaggerItem>
            );
          })}
        </Stagger>
      </Section>

      <StatsBand />

      <CTABand headline="Ready to move with a partner you can trust?" />
    </>
  );
}

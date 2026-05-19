import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { PageHero } from "@/components/sections/shared/PageHero";
import { Compliance } from "@/components/sections/shared/Compliance";
import { CTABand } from "@/components/sections/shared/CTABand";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Fleet & Safety | Lumirise — A Fleet Built for the Road Ahead",
  description:
    "Modern cargo trucks, certified fuel tankers, and specialised vehicles — backed by driver training, vehicle inspection, regulatory compliance, and emergency response.",
};

const fleet = [
  {
    name: "Cargo Trucks",
    img: images.fleet,
    body: "Our cargo trucks handle containers, dry cargo, and general freight across the region. Modern, well-maintained, and regularly inspected.",
  },
  {
    name: "Fuel Tankers",
    img: images.fuelTanker,
    body: "Certified tankers built for the safe transport of petroleum products. Equipped with safety systems, monitoring technology, and operated by specially trained drivers.",
  },
  {
    name: "Specialised Vehicles",
    img: images.breakBulk,
    body: "Low-loaders, flatbeds, and equipment for break-bulk and oversized cargo — for project freight that doesn't fit the standard mould.",
  },
];

const safety = [
  {
    t: "Driver Training & Licensing",
    d: "All drivers fully licensed and trained on cargo-specific and route-specific protocols.",
  },
  {
    t: "Vehicle Inspection & Maintenance",
    d: "Regular scheduled inspections and proactive maintenance for every vehicle.",
  },
  {
    t: "Regulatory Compliance",
    d: "Full compliance with national and regional transport regulations across every country we serve.",
  },
  {
    t: "Cargo Handling Protocols",
    d: "Standardised procedures for loading, securing, and unloading every cargo type.",
  },
  {
    t: "Emergency Response",
    d: "Trained protocols and resources for incident response, especially for hazardous cargo.",
  },
];

export default function FleetSafetyPage() {
  return (
    <>
      <PageHero
        eyebrow="Fleet & Safety"
        title={
          <>
            A fleet built for{" "}
            <span className="text-gold">the road ahead.</span>
          </>
        }
        image={images.dryCargo}
        alt="Lumirise truck on the road"
      />

      <Section bg="white">
        <SectionHeading
          eyebrow="OUR FLEET"
          title="Right vehicles, right cargo, right route."
          max="max-w-2xl"
        />
        <Stagger className="mt-14 grid gap-6 md:grid-cols-3">
          {fleet.map((f) => (
            <StaggerItem
              key={f.name}
              className="overflow-hidden rounded-[var(--radius-card)] border border-divider bg-cream"
            >
              <ImageFrame
                src={f.img}
                alt={f.name}
                ratio="aspect-[16/10]"
                rounded="rounded-none"
              />
              <div className="p-7">
                <h3 className="text-xl font-bold text-navy">{f.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {f.body}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section bg="cream">
        <SectionHeading
          eyebrow="SAFETY STANDARDS"
          title="Safety isn't a feature. It's a foundation."
          max="max-w-2xl"
        />
        <div className="mt-12 grid gap-5">
          {safety.map((s, i) => (
            <Reveal
              key={s.t}
              delay={i * 0.06}
              className="flex flex-col gap-2 rounded-[var(--radius-card)] border border-divider bg-white p-7 sm:flex-row sm:items-center sm:gap-8"
            >
              <div className="flex items-center gap-4 sm:w-80 sm:shrink-0">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-gold text-sm font-extrabold text-navy">
                  {i + 1}
                </span>
                <h3 className="text-lg font-bold text-navy">{s.t}</h3>
              </div>
              <p className="text-muted">{s.d}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Compliance bg="white" />

      <CTABand headline="Confidence starts with the right fleet. Let's get your cargo moving." />
    </>
  );
}

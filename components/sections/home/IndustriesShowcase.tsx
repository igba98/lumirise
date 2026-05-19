"use client";

import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tabs, type TabItem } from "@/components/ui/Tabs";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { CheckList } from "@/components/ui/CheckList";
import { industries } from "@/lib/content/industries";
import { industryImage } from "@/lib/images";

/** Spec §4.5 — industries we serve, tabbed. */
export function IndustriesShowcase() {
  const items: TabItem[] = industries.map((ind) => ({
    id: ind.id,
    label: ind.name,
    icon: ind.icon,
    content: (
      <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
        <ImageFrame
          src={industryImage[ind.id]}
          alt={ind.name}
          ratio="aspect-[4/3]"
        />
        <div>
          <h3 className="text-2xl font-bold text-navy">{ind.name}</h3>
          <p className="mt-4 text-muted">{ind.blurb}</p>
          <CheckList items={ind.points} className="mt-6" />
        </div>
      </div>
    ),
  }));

  return (
    <Section bg="cream">
      <SectionHeading
        eyebrow="INDUSTRIES WE SERVE"
        title="Powering supply chains across diverse industries."
        max="max-w-2xl"
      />
      <div className="mt-14">
        <Tabs items={items} />
      </div>
    </Section>
  );
}

import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { CheckList } from "@/components/ui/CheckList";
import { PageHero } from "@/components/sections/shared/PageHero";
import { CTABand } from "@/components/sections/shared/CTABand";
import { industries } from "@/lib/content/industries";
import { industryImage, images } from "@/lib/images";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: "Industries We Serve | Lumirise Transport & Logistics",
  description:
    "Industry-specific logistics tailored to manufacturing, retail & FMCG, energy & petroleum, construction, and agriculture & mining across East and Central Africa.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries We Serve"
        title={
          <>
            Industry-specific logistics.{" "}
            <span className="text-gold">Tailored to how you work.</span>
          </>
        }
        image={images.warehouse}
        alt="Industrial logistics"
      />

      {industries.map((ind, i) => {
        const flip = i % 2 === 1;
        return (
          <Section key={ind.id} bg={flip ? "cream" : "white"}>
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <Reveal className={cn(flip && "lg:order-2")}>
                <ImageFrame
                  src={industryImage[ind.id]}
                  alt={ind.name}
                  ratio="aspect-[4/3]"
                />
              </Reveal>
              <Reveal delay={0.1}>
                <Eyebrow>{`0${i + 1} — ${ind.name.toUpperCase()}`}</Eyebrow>
                <h2 className="mt-4 text-3xl font-extrabold text-navy md:text-4xl">
                  {ind.name}
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-muted">
                  {ind.blurb}
                </p>
                <CheckList items={ind.points} className="mt-6" />
                <div className="mt-7">
                  <p className="text-xs uppercase tracking-wide text-muted">
                    Relevant services
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {ind.relevant.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-divider bg-white px-4 py-2 text-sm font-semibold text-navy/80"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </Section>
        );
      })}

      <CTABand headline="Don't see your industry? We probably still serve it. Let's talk." />
    </>
  );
}

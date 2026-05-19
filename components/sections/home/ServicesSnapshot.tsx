import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Carousel } from "@/components/ui/Carousel";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { IconCircle } from "@/components/ui/IconCircle";
import { ArrowRight } from "@/components/ui/icons";
import { services, serviceImage, serviceIcons } from "@/lib/content/services";

/** Spec §4.4 — services snapshot carousel on navy. */
export function ServicesSnapshot() {
  return (
    <Section bg="navy">
      <SectionHeading
        eyebrow="OUR SERVICES"
        title={
          <>
            Five service lines.{" "}
            <span className="text-gold">One standard of excellence.</span>
          </>
        }
        tone="white"
        max="max-w-2xl"
      />
      <div className="mt-14">
        <Carousel ariaLabel="Lumirise services">
          {services.map((s) => {
            const Icon = serviceIcons[s.slug];
            return (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group w-[300px] shrink-0 snap-start rounded-[var(--radius-card)] border border-white/10 bg-navy-700 p-6 transition-colors hover:border-gold/40 sm:w-[340px]"
              >
                <ImageFrame
                  src={serviceImage[s.slug]}
                  alt={s.name}
                  ratio="aspect-[16/10]"
                  rounded="rounded-2xl"
                  sizes="340px"
                />
                <div className="mt-6 flex items-center gap-4">
                  <IconCircle icon={Icon} />
                  <h3 className="text-xl font-bold text-white">{s.name}</h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-white/60">
                  {s.snapshot}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold">
                  View detail
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            );
          })}
        </Carousel>
      </div>
    </Section>
  );
}

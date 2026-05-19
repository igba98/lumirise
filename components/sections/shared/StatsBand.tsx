import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatCounter } from "@/components/ui/StatCounter";
import { stats } from "@/lib/content/stats";

/** Spec §4.7 / §10.3 — gold stats band. */
export function StatsBand({
  eyebrow = "LUMIRISE IN NUMBERS",
  title = "Driving measurable impact across every shipment.",
}: {
  eyebrow?: string;
  title?: string;
}) {
  return (
    <Section bg="gold">
      <SectionHeading
        eyebrow={eyebrow}
        title={title}
        tone="navy-on-gold"
        max="max-w-2xl"
      />
      <div className="mt-14 grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-4">
        {stats.map((s) => (
          <StatCounter
            key={s.label}
            value={s.value}
            suffix={s.suffix}
            label={s.label}
            caption={s.caption}
            tone="navy"
          />
        ))}
      </div>
    </Section>
  );
}

import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CheckList } from "@/components/ui/CheckList";
import { Reveal } from "@/components/ui/Reveal";

const compliance = [
  "Licensed by the Land Transport Regulatory Authority (LATRA)",
  "Tanzania Revenue Authority (TRA) compliant",
  "Cross-border transit permits across all served countries",
  "Petroleum transport certifications",
  "Driver licensing and ongoing training programs",
];

const bodies = ["LATRA", "TRA", "Transit Authority", "Petroleum Board"];

/** Spec §5.7 / §11.4 — compliance & certifications. */
export function Compliance({ bg = "cream" }: { bg?: "cream" | "white" }) {
  return (
    <Section bg={bg}>
      <SectionHeading
        eyebrow="COMPLIANCE & STANDARDS"
        title="Licensed, certified, and ready to deliver."
        max="max-w-2xl"
      />
      <div className="mt-12 grid gap-12 lg:grid-cols-2">
        <Reveal>
          <CheckList items={compliance} />
        </Reveal>
        <Reveal delay={0.1}>
          <div className="grid grid-cols-2 gap-4">
            {bodies.map((b) => (
              <div
                key={b}
                className="flex h-28 items-center justify-center rounded-2xl border border-divider bg-white px-4 text-center text-sm font-bold uppercase tracking-wide text-navy/70"
              >
                {b}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

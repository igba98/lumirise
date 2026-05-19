import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";

const steps = [
  {
    n: "01",
    t: "Inquiry",
    d: "Tell us what you need to move, where, and when.",
  },
  {
    n: "02",
    t: "Planning",
    d: "We design the route, secure permits, and confirm the quote.",
  },
  {
    n: "03",
    t: "Execution",
    d: "Trained drivers transport your cargo with real-time updates.",
  },
  {
    n: "04",
    t: "Delivery",
    d: "Your cargo arrives safely, on time, with full documentation.",
  },
];

/** Spec §6.3 — simple, transparent process from quote to delivery. */
export function ProcessTimeline({ bg = "cream" }: { bg?: "cream" | "white" }) {
  return (
    <Section bg={bg}>
      <SectionHeading
        eyebrow="HOW WE WORK"
        title="A simple, transparent process from quote to delivery."
        max="max-w-2xl"
      />
      <Stagger className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((s) => (
          <StaggerItem
            key={s.n}
            className="relative rounded-[var(--radius-card)] border border-divider bg-white p-7"
          >
            <span className="grid h-12 w-12 place-items-center rounded-full bg-gold text-base font-extrabold text-navy">
              {s.n}
            </span>
            <h3 className="mt-5 text-lg font-bold text-navy">{s.t}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{s.d}</p>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}

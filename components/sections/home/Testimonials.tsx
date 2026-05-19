import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";

/** Spec §4.9 — placeholder testimonials; replace with real quotes/logos. */
const quotes = [
  {
    quote:
      "Lumirise has become the logistics partner we recommend to everyone. Reliable, communicative, and always on time.",
    name: "Operations Manager",
    company: "Manufacturing client",
  },
  {
    quote:
      "Their cross-border expertise is unmatched. Our shipments to Lusaka have never been smoother.",
    name: "Supply Chain Director",
    company: "Regional distributor",
  },
  {
    quote:
      "Safety, compliance, and professionalism — exactly what we need for our fuel distribution.",
    name: "Procurement Head",
    company: "Energy sector",
  },
];

export function Testimonials() {
  return (
    <Section bg="cream">
      <SectionHeading
        eyebrow="CLIENT VOICES"
        title="What our clients say."
        max="max-w-xl"
      />
      <Stagger className="mt-14 grid gap-6 md:grid-cols-3">
        {quotes.map((t) => (
          <StaggerItem
            key={t.quote}
            className="relative rounded-[var(--radius-card)] border border-divider bg-white p-8"
          >
            <span
              aria-hidden
              className="absolute right-6 top-4 font-serif text-6xl leading-none text-gold/25"
            >
              &rdquo;
            </span>
            <p className="relative text-lg leading-relaxed text-navy">
              {t.quote}
            </p>
            <div className="mt-8 flex items-center gap-4">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-navy text-sm font-bold text-gold">
                {t.name
                  .split(" ")
                  .map((w) => w[0])
                  .join("")
                  .slice(0, 2)}
              </span>
              <div>
                <p className="font-bold text-navy">{t.name}</p>
                <p className="text-sm text-muted">{t.company}</p>
              </div>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
      <p className="mt-8 text-center text-xs text-muted">
        Placeholder testimonials — to be replaced with named client references.
      </p>
    </Section>
  );
}

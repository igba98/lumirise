import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { CheckList } from "@/components/ui/CheckList";
import { Phone, Mail } from "@/components/ui/icons";
import { PageHero } from "@/components/sections/shared/PageHero";
import { QuoteForm } from "@/components/sections/quote/QuoteForm";
import { site } from "@/lib/content/site";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Request a Quote | Lumirise — Get a Transport Quote in 24 Hours",
  description:
    "Tell us what you need moved and a Lumirise specialist will respond within one business day with a transparent, all-inclusive quote.",
};

const steps = [
  {
    n: "Within 1 hour",
    d: "You receive a confirmation email acknowledging your request.",
  },
  {
    n: "Within 24 hours",
    d: "A logistics specialist reaches out with questions and a tailored quote.",
  },
  {
    n: "On approval",
    d: "We plan the route, prepare documentation, and schedule pickup.",
  },
];

export default function QuotePage() {
  const tel = `tel:${site.phonePrimary.replace(/\s/g, "")}`;
  return (
    <>
      <PageHero
        eyebrow="Request a Quote"
        title={
          <>
            Get a quote in <span className="text-gold">24 hours.</span>
          </>
        }
        sub="Tell us what you need moved, and a Lumirise specialist will respond within one business day."
        image={images.night}
        alt="Night port terminal operations"
      />

      <Section bg="white">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <QuoteForm />
          </Reveal>

          <Reveal delay={0.12}>
            <div className="rounded-[var(--radius-card)] bg-navy p-8 text-white">
              <h3 className="text-xl font-bold">Why request through us?</h3>
              <CheckList
                tone="white"
                className="mt-6"
                items={[
                  "Response within 24 hours",
                  "Transparent, all-inclusive pricing",
                  "No obligation",
                  "Direct line to a logistics specialist",
                ]}
              />
              <div className="mt-8 border-t border-white/10 pt-6">
                <p className="text-sm text-white/60">
                  Prefer to talk to someone now?
                </p>
                <a
                  href={tel}
                  className="mt-3 flex items-center gap-3 font-semibold text-white hover:text-gold"
                >
                  <Phone className="h-4 w-4 text-gold" /> {site.phonePrimary}
                </a>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-2 flex items-center gap-3 font-semibold text-white hover:text-gold"
                >
                  <Mail className="h-4 w-4 text-gold" /> {site.email}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section bg="cream">
        <SectionHeading
          eyebrow="THE PROCESS"
          title="Here's what happens after you submit."
          max="max-w-2xl"
        />
        <Stagger className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <StaggerItem
              key={s.n}
              className="rounded-[var(--radius-card)] border border-divider bg-white p-8"
            >
              <span className="text-sm font-bold uppercase tracking-wide text-gold">
                {s.n}
              </span>
              <p className="mt-3 text-navy">{s.d}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>
    </>
  );
}

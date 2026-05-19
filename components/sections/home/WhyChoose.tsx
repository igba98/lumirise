import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { images } from "@/lib/images";

const blocks = [
  {
    title: "Proven Safety Record",
    body: "Certified operations, trained drivers, well-maintained fleet, and a culture of zero compromise on safety.",
  },
  {
    title: "Full Regulatory Compliance",
    body: "All licenses, permits, and cross-border documentation in order — so your cargo moves without surprises.",
  },
  {
    title: "Regional Network",
    body: "Established routes to seven countries in East and Central Africa, with local expertise at every transit point.",
  },
];

/** Spec §4.6 — why choose Lumirise. */
export function WhyChoose() {
  return (
    <Section bg="white">
      <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
        <div>
          <Reveal>
            <Eyebrow>WHY CHOOSE US</Eyebrow>
            <h2 className="mt-5 text-4xl font-extrabold leading-tight text-navy md:text-5xl">
              Why cargo owners across the region choose Lumirise.
            </h2>
          </Reveal>
          <div className="mt-10 space-y-8">
            {blocks.map((b, i) => (
              <Reveal key={b.title} delay={i * 0.1}>
                <div className="border-l-2 border-gold pl-6">
                  <h3 className="text-xl font-bold text-navy">{b.title}</h3>
                  <p className="mt-2 text-muted">{b.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-10">
            <Button href="/why-lumirise" variant="text">
              Meet our team
            </Button>
          </div>
        </div>

        <Reveal delay={0.15}>
          <ImageFrame
            src={images.goldenHour}
            alt="Lumirise trucks at golden hour"
            ratio="aspect-[4/5]"
          />
        </Reveal>
      </div>
    </Section>
  );
}

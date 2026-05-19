import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { IconCircle } from "@/components/ui/IconCircle";
import { Route, Shield, Globe } from "@/components/ui/icons";
import { images } from "@/lib/images";

const cards = [
  { icon: Route, title: "Optimised Routes" },
  { icon: Shield, title: "Safety-First Operations" },
  { icon: Globe, title: "Regional Reach" },
];

/** Spec §4.3 — driving regional trade (Uthao-style: text + image collage). */
export function DrivingTrade() {
  return (
    <Section bg="cream">
      <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full bg-gold px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-navy">
            Driving Regional Trade
          </span>
          <h2 className="mt-6 text-4xl font-extrabold leading-[1.1] text-navy md:text-5xl">
            At Lumirise, we connect East and Central African markets through
            safe, disciplined, and modern logistics.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted">
            Lumirise Company Limited is a dynamic Tanzanian transportation and
            logistics company built around one promise: moving your cargo
            safely, reliably, and on time.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted">
            From the Port of Dar es Salaam to depots, warehouses, and border
            posts across East and Central Africa, our fleet and our people keep
            regional trade moving.
          </p>
          <div className="mt-9">
            <Button href="/about" variant="outlineDark">
              More about us
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="grid h-[460px] grid-cols-2 grid-rows-2 gap-4 lg:h-[560px]">
            <ImageCell
              src={images.logisticsAerial}
              alt="Aerial view of containers and trucks at port"
              className="row-span-2"
            />
            <ImageCell
              src={images.containers}
              alt="Stacked shipping containers"
            />
            <ImageCell
              src={images.fuelTanker}
              alt="Fuel tankers in formation"
            />
          </div>
        </Reveal>
      </div>

      <Stagger className="mt-20 grid gap-6 sm:grid-cols-3">
        {cards.map((c) => (
          <StaggerItem
            key={c.title}
            className="flex items-center gap-4 rounded-[var(--radius-card)] border border-divider bg-white p-6"
          >
            <IconCircle icon={c.icon} />
            <span className="text-lg font-bold text-navy">{c.title}</span>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}

function ImageCell({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div
      className={`group relative overflow-hidden rounded-3xl ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 50vw, 25vw"
        className="object-cover transition-transform duration-700 ease-[var(--ease-out-soft)] group-hover:scale-[1.05]"
      />
    </div>
  );
}

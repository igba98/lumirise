import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

/** Inset rounded hero panel for inner pages — matches the home aesthetic. */
export function PageHero({
  eyebrow,
  title,
  sub,
  image,
  alt,
  ctas,
}: {
  eyebrow: string;
  title: React.ReactNode;
  sub?: string;
  image: string;
  alt: string;
  ctas?: { label: string; href: string; variant?: "primary" | "outline" }[];
}) {
  return (
    <section className="bg-cream px-3 pt-24 sm:px-5 sm:pt-28">
      <div className="relative mx-auto flex min-h-[440px] max-w-[1400px] flex-col justify-end overflow-hidden rounded-[2rem] p-7 sm:p-12 lg:min-h-[520px] lg:p-16">
        <Image
          src={image}
          alt={alt}
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-linear-to-t from-navy/90 via-navy/45 to-navy/25" />

        <Reveal className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-white backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            {eyebrow}
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {sub && (
            <p className="mt-5 max-w-xl text-lg text-white/75">{sub}</p>
          )}
          {ctas && ctas.length > 0 && (
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {ctas.map((c) => (
                <Button
                  key={c.label}
                  href={c.href}
                  variant={c.variant ?? "primary"}
                  arrow={c.variant !== "outline"}
                >
                  {c.label}
                </Button>
              ))}
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}

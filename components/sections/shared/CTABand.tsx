import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowRight, Phone } from "@/components/ui/icons";
import { site } from "@/lib/content/site";

/** Spec: gold full-bleed CTA band before footer (§4.10 and every page). */
export function CTABand({
  headline,
  sub = "Get a transparent quote within 24 hours.",
}: {
  headline: string;
  sub?: string;
}) {
  const tel = `tel:${site.phonePrimary.replace(/\s/g, "")}`;
  return (
    <section className="relative overflow-hidden bg-gold">
      <span className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-gold-bright/40 blur-2xl" />
      <span className="pointer-events-none absolute -bottom-32 -left-16 text-[16rem] font-extrabold leading-none text-navy/[0.04] select-none">
        ◆
      </span>
      <div className="container-x relative py-20 md:py-24">
        <Reveal className="max-w-3xl">
          <h2 className="text-4xl font-extrabold leading-[1.1] text-navy md:text-6xl">
            {headline}
          </h2>
          <p className="mt-5 text-lg text-navy/80">{sub}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/quote"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-navy px-7 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-navy-600"
            >
              Request a Quote
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href={tel}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-navy/40 px-7 py-3.5 text-[15px] font-semibold text-navy transition-colors hover:bg-navy hover:text-white"
            >
              <Phone className="h-4 w-4" /> Call {site.phonePrimary}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

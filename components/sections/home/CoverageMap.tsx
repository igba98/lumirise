import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { CheckList } from "@/components/ui/CheckList";
import { RouteMap } from "@/components/sections/shared/RouteMap";
import { routes, origin } from "@/lib/content/routes";

/** Spec §4.8 — coverage map on navy. */
export function CoverageMap() {
  return (
    <Section bg="navy">
      <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <div className="rounded-[var(--radius-frame)] border border-white/10 bg-navy-700/50 p-6">
            <RouteMap />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <Eyebrow>ONE HUB. SEVEN COUNTRIES.</Eyebrow>
            <h2 className="mt-5 text-4xl font-extrabold leading-tight text-white md:text-5xl">
              Cross-border logistics, built on local expertise.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <CheckList
              tone="white"
              className="mt-8"
              items={routes.map(
                (r) => `${origin} → ${r.to} (${r.country})`,
              )}
            />
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-9">
              <Button href="/coverage">Explore Coverage</Button>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

import { Reveal } from "@/components/ui/Reveal";

const items = [
  ["5", "Service Lines"],
  ["7+", "Countries Served"],
  ["100%", "Regulatory Compliant"],
];

/** Spec §4.2 — trust strip below hero (Uthao-style airy partner row). */
export function TrustBar() {
  return (
    <div className="bg-cream">
      <div className="container-x py-16">
        <Reveal className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-muted">
            Trusted to keep regional trade moving
          </p>
        </Reveal>
        <div className="mt-10 flex flex-col items-stretch divide-y divide-divider sm:flex-row sm:items-center sm:justify-center sm:divide-x sm:divide-y-0">
          {items.map(([n, label], i) => (
            <Reveal
              key={label}
              delay={i * 0.08}
              className="flex items-baseline justify-center gap-3 px-10 py-5 sm:py-2"
            >
              <span className="text-4xl font-extrabold tracking-tight text-navy">
                {n}
              </span>
              <span className="text-sm font-semibold uppercase tracking-wide text-muted">
                {label}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}

"use client";

import { useRef, type ReactNode } from "react";
import { ArrowRight } from "./icons";
import { cn } from "@/lib/cn";

/** Spec §4.4: horizontal scrolling card carousel with arrow controls.
 *  Native scroll-snap (swipeable on mobile per §15) + desktop arrows. */
export function Carousel({
  children,
  className,
  ariaLabel = "carousel",
}: {
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.8), behavior: "smooth" });
  };

  return (
    <div className={cn("relative", className)}>
      <div
        ref={trackRef}
        role="region"
        aria-label={ariaLabel}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {children}
      </div>

      <div className="mt-8 flex gap-3">
        <button
          type="button"
          aria-label="Previous"
          onClick={() => scrollBy(-1)}
          className="grid h-12 w-12 place-items-center rounded-full border border-white/25 text-white transition-colors hover:bg-gold hover:text-navy hover:border-gold"
        >
          <ArrowRight className="h-5 w-5 rotate-180" />
        </button>
        <button
          type="button"
          aria-label="Next"
          onClick={() => scrollBy(1)}
          className="grid h-12 w-12 place-items-center rounded-full border border-white/25 text-white transition-colors hover:bg-gold hover:text-navy hover:border-gold"
        >
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

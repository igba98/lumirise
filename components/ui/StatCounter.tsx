"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "./icons";
import { cn } from "@/lib/cn";

gsap.registerPlugin(ScrollTrigger);

/** Spec §2 / §14: huge number, counts up from 0 on enter-view. */
export function StatCounter({
  value,
  suffix = "",
  label,
  caption,
  tone = "navy",
}: {
  value: number;
  suffix?: string;
  label: string;
  caption?: string;
  tone?: "navy" | "white";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const obj = { n: 0 };
    const st = ScrollTrigger.create({
      trigger: el,
      start: "top 85%",
      once: true,
      onEnter: () => {
        gsap.to(obj, {
          n: value,
          duration: reduce ? 0 : 1.6,
          ease: "power2.out",
          onUpdate: () => setDisplay(Math.round(obj.n)),
        });
      },
    });
    return () => st.kill();
  }, [value]);

  return (
    <div ref={ref}>
      <span className="mb-3 block text-[13px] font-bold uppercase tracking-[0.18em] text-gold">
        {label}
      </span>
      <div className="flex items-start gap-2">
        <span
          className={cn(
            "text-6xl font-extrabold leading-none tracking-tight md:text-7xl lg:text-8xl",
            tone === "white" ? "text-white" : "text-navy",
          )}
        >
          {display}
          {suffix}
        </span>
        <ArrowUpRight
          className={cn(
            "mt-2 h-7 w-7",
            tone === "white" ? "text-gold" : "text-gold",
          )}
        />
      </div>
      {caption && (
        <p
          className={cn(
            "mt-3 max-w-[14rem] text-sm",
            tone === "white" ? "text-white/70" : "text-muted",
          )}
        >
          {caption}
        </p>
      )}
    </div>
  );
}

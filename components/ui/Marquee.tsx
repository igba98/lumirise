"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { cn } from "@/lib/cn";

/** Spec §14: thin scrolling tagline strip ("Safe · Reliable · On Time ·"). */
export function Marquee({
  text = "Safe",
  items = ["Safe", "Reliable", "On Time"],
  className,
  speed = 28,
}: {
  text?: string;
  items?: string[];
  className?: string;
  speed?: number;
}) {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      gsap.to(el, {
        xPercent: -50,
        repeat: -1,
        ease: "none",
        duration: speed,
      });
    });
    return () => ctx.revert();
  }, [speed]);

  const group = (
    <div className="flex shrink-0 items-center" aria-hidden>
      {Array.from({ length: 10 }).map((_, i) => (
        <span key={i} className="flex items-center">
          <span className="px-8 text-xl font-bold uppercase tracking-[0.15em] text-gold/90">
            {items[i % items.length] ?? text}
          </span>
          <span className="text-gold/40">◆</span>
        </span>
      ))}
    </div>
  );

  return (
    <div
      className={cn(
        "overflow-hidden border-y border-white/10 bg-navy py-5",
        className,
      )}
    >
      <div ref={trackRef} className="flex w-max">
        {group}
        {group}
      </div>
    </div>
  );
}

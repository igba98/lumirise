"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

/** Spec §14: small gold dot follows the cursor, expands over interactive elements.
 *  Desktop fine-pointer only; native cursor kept for usability. */
export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!fine || reduce || !dot || !ring) return;

    const xTo = gsap.quickTo(ring, "x", { duration: 0.5, ease: "power3" });
    const yTo = gsap.quickTo(ring, "y", { duration: 0.5, ease: "power3" });

    const SELECTOR = "a, button, input, textarea, select, [role='button']";

    const onMove = (e: MouseEvent) => {
      gsap.set(dot, { x: e.clientX, y: e.clientY });
      xTo(e.clientX);
      yTo(e.clientY);
    };
    // Event delegation: two document-level listeners instead of 2×N
    // per-element listeners. Also covers elements added after mount.
    const onOver = (e: MouseEvent) => {
      if ((e.target as Element)?.closest?.(SELECTOR))
        gsap.to(ring, { scale: 1.8, duration: 0.3 });
    };
    const onOut = (e: MouseEvent) => {
      if ((e.target as Element)?.closest?.(SELECTOR))
        gsap.to(ring, { scale: 1, duration: 0.3 });
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver, { passive: true });
    document.addEventListener("mouseout", onOut, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[100] hidden lg:block">
      <div
        ref={dotRef}
        className="absolute -ml-1 -mt-1 h-2 w-2 rounded-full bg-gold"
      />
      <div
        ref={ringRef}
        className="absolute -ml-4 -mt-4 h-8 w-8 rounded-full border border-gold/50"
      />
    </div>
  );
}

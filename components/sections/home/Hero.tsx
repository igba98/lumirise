"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/Button";
import { ArrowUpRight } from "@/components/ui/icons";
import { images } from "@/lib/images";

gsap.registerPlugin(ScrollTrigger);

const EASE = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = imgRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      gsap.to(el, {
        yPercent: 14,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-cream px-3 pt-24 sm:px-5 sm:pt-28">
      <div className="relative mx-auto min-h-[640px] max-w-[1400px] overflow-hidden rounded-[2rem] lg:min-h-[86vh]">
        {/* Image + parallax */}
        <div ref={imgRef} className="absolute inset-0 z-0 scale-110">
          <Image
            src={images.hero}
            alt="Cargo containers at the Port of Dar es Salaam at sunrise"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 z-0 bg-linear-to-t from-navy/85 via-navy/30 to-navy/15" />

        <div className="relative z-10 flex min-h-[640px] flex-col justify-end p-7 sm:p-12 lg:min-h-[86vh] lg:p-16">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-2xl">
              <motion.span
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: EASE }}
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-white backdrop-blur"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                Tanzania &amp; East-Central Africa
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
                className="mt-6 text-5xl font-extrabold leading-[1.04] text-white sm:text-6xl lg:text-[5rem]"
              >
                Cargo that moves{" "}
                <span className="text-gold">Africa forward.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
                className="mt-6 max-w-xl text-lg text-white/75"
              >
                Safe, reliable, on-time transport from Dar es Salaam to seven
                countries across the region.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
                className="mt-9 flex flex-col gap-3 sm:flex-row"
              >
                <Button href="/quote">Request a Quote</Button>
                <Button href="/services" variant="outline" arrow={false}>
                  Explore Our Services
                </Button>
              </motion.div>
            </div>

            {/* Floating featured-route widget */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45, ease: EASE }}
              className="w-full rounded-[1.5rem] border border-white/15 bg-white/10 p-5 backdrop-blur-md lg:w-[340px]"
            >
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-gold px-4 py-2 text-xs font-bold uppercase tracking-wide text-navy">
                  Featured Route
                </span>
                <span className="flex-1 rounded-full border border-white/20 px-4 py-2 text-center text-xs font-semibold uppercase tracking-wide text-white/60">
                  Regular Service
                </span>
              </div>

              <div className="mt-5 flex items-center justify-between">
                <p className="text-xl font-bold text-white">
                  Dar es Salaam → Kigali
                </p>
                <ArrowUpRight className="h-5 w-5 text-gold" />
              </div>

              <div className="mt-5 grid grid-cols-3 gap-2 rounded-2xl border border-white/15 bg-white/5 p-4 text-center">
                {[
                  ["Cargo", "Containers"],
                  ["Crossings", "1 border"],
                  ["Service", "Regular"],
                ].map(([k, v]) => (
                  <div key={k}>
                    <p className="text-sm font-bold text-white">{v}</p>
                    <p className="mt-1 text-[11px] uppercase tracking-wide text-white/50">
                      {k}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

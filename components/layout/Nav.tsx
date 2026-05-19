"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/Button";
import { Phone, Menu, Close } from "@/components/ui/icons";
import { navLinks, site } from "@/lib/content/site";
import { cn } from "@/lib/cn";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-400 ease-[var(--ease-out-soft)]",
        scrolled
          ? "bg-navy/95 py-3 shadow-[0_10px_30px_-20px_rgba(0,0,0,0.8)] backdrop-blur"
          : "bg-transparent py-5",
      )}
    >
      <div className="container-x flex items-center justify-between">
        <Logo tone="light" />

        <nav className="hidden items-center gap-9 lg:flex">
          {navLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative text-sm font-medium transition-colors",
                  scrolled
                    ? "text-white/80 hover:text-white"
                    : "text-navy/80 hover:text-navy",
                  active && (scrolled ? "text-white" : "text-navy"),
                )}
              >
                {link.label}
                {active && (
                  <span className="absolute -bottom-1.5 left-0 h-0.5 w-full rounded-full bg-gold" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${site.phonePrimary.replace(/\s/g, "")}`}
            aria-label="Call Lumirise"
            className="grid h-11 w-11 place-items-center rounded-full border border-white/25 text-white transition-colors hover:bg-white hover:text-navy"
          >
            <Phone className="h-4 w-4" />
          </a>
          <Button href="/quote">Request a Quote</Button>
        </div>

        <button
          type="button"
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          className="grid h-11 w-11 place-items-center rounded-full border border-white/25 text-white lg:hidden"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 lg:hidden"
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="ml-auto flex h-full w-full max-w-sm flex-col bg-navy px-7 py-6"
            >
              <div className="flex items-center justify-between">
                <Logo tone="light" />
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="grid h-11 w-11 place-items-center rounded-full border border-white/25 text-white"
                >
                  <Close className="h-5 w-5" />
                </button>
              </div>

              <nav className="mt-10 flex flex-col">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="border-b border-gold/20 py-4 text-2xl font-semibold text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <div className="mt-auto space-y-4">
                <Button href="/quote" className="w-full justify-center">
                  Request a Quote
                </Button>
                <a
                  href={`tel:${site.phonePrimary.replace(/\s/g, "")}`}
                  className="flex items-center justify-center gap-2 rounded-full border border-white/25 py-3.5 text-sm font-semibold text-white"
                >
                  <Phone className="h-4 w-4" /> {site.phonePrimary}
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

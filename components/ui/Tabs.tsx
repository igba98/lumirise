"use client";

import { useState, type ComponentType, type ReactNode, type SVGProps } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/cn";

export type TabItem = {
  id: string;
  label: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  content: ReactNode;
};

/** Spec §4.5: vertical tab list + cross-fade content; accordion under md (§15). */
export function Tabs({ items }: { items: TabItem[] }) {
  const [active, setActive] = useState(items[0]?.id);
  const current = items.find((i) => i.id === active) ?? items[0];

  return (
    <div>
      {/* Desktop: tabs + panel */}
      <div className="hidden gap-12 md:grid md:grid-cols-[minmax(0,22rem)_1fr]">
        <ul className="space-y-2">
          {items.map((item) => {
            const on = item.id === active;
            return (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => setActive(item.id)}
                  className={cn(
                    "flex w-full items-center gap-4 rounded-2xl border px-5 py-4 text-left transition-all duration-300",
                    on
                      ? "border-gold bg-white shadow-[0_18px_40px_-24px_rgba(10,37,64,0.4)]"
                      : "border-transparent bg-white/60 hover:bg-white",
                  )}
                >
                  <span
                    className={cn(
                      "grid h-11 w-11 place-items-center rounded-full transition-colors",
                      on ? "bg-gold text-navy" : "bg-navy/5 text-navy",
                    )}
                  >
                    <item.icon className="h-5 w-5" />
                  </span>
                  <span
                    className={cn(
                      "text-lg font-semibold",
                      on ? "text-navy" : "text-muted",
                    )}
                  >
                    {item.label}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>

        <div className="min-h-[22rem]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              {current.content}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Mobile: accordion */}
      <div className="space-y-3 md:hidden">
        {items.map((item) => {
          const on = item.id === active;
          return (
            <div
              key={item.id}
              className="overflow-hidden rounded-2xl border border-divider bg-white"
            >
              <button
                type="button"
                onClick={() => setActive(on ? "" : item.id)}
                className="flex w-full items-center gap-3 px-5 py-4 text-left"
              >
                <span
                  className={cn(
                    "grid h-10 w-10 place-items-center rounded-full",
                    on ? "bg-gold text-navy" : "bg-navy/5 text-navy",
                  )}
                >
                  <item.icon className="h-5 w-5" />
                </span>
                <span className="text-base font-semibold text-navy">
                  {item.label}
                </span>
              </button>
              <AnimatePresence initial={false}>
                {on && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="px-5 pb-6">{item.content}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}

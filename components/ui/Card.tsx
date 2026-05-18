import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Card({
  children,
  className,
  tone = "light",
  hover = true,
}: {
  children: ReactNode;
  className?: string;
  tone?: "light" | "dark" | "outline";
  hover?: boolean;
}) {
  const toneCls =
    tone === "dark"
      ? "bg-navy-700 text-white border border-white/10"
      : tone === "outline"
        ? "bg-transparent border border-white/15 text-white"
        : "bg-white text-ink border border-divider";

  return (
    <div
      className={cn(
        "rounded-[var(--radius-card)] p-7 transition-all duration-400 ease-[var(--ease-out-soft)]",
        toneCls,
        hover && "hover:-translate-y-1 hover:shadow-[0_24px_50px_-24px_rgba(10,37,64,0.35)]",
        className,
      )}
    >
      {children}
    </div>
  );
}

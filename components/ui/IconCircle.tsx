import type { ComponentType, SVGProps } from "react";
import { cn } from "@/lib/cn";

/** Spec §2: gold or navy filled circle holding a white icon. */
export function IconCircle({
  icon: Icon,
  tone = "gold",
  size = "md",
  className,
}: {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  tone?: "gold" | "navy" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const dim =
    size === "lg" ? "h-16 w-16" : size === "sm" ? "h-10 w-10" : "h-14 w-14";
  const icn =
    size === "lg" ? "h-7 w-7" : size === "sm" ? "h-5 w-5" : "h-6 w-6";
  const toneCls =
    tone === "gold"
      ? "bg-gold text-navy"
      : tone === "navy"
        ? "bg-navy text-white"
        : "border border-gold/40 text-gold";

  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-full",
        dim,
        toneCls,
        className,
      )}
    >
      <Icon className={icn} />
    </span>
  );
}

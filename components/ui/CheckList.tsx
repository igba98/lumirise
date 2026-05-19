import { cn } from "@/lib/cn";
import { Check } from "./icons";

/** Spec §2: gold check icon in front of every feature list item. */
export function CheckList({
  items,
  className,
  tone = "ink",
}: {
  items: string[];
  className?: string;
  tone?: "ink" | "white";
}) {
  return (
    <ul className={cn("space-y-3", className)}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
            <Check className="h-3.5 w-3.5" strokeWidth={3} />
          </span>
          <span
            className={cn(
              "text-[15px] leading-relaxed",
              tone === "white" ? "text-white/80" : "text-muted",
            )}
          >
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

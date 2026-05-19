import { cn } from "@/lib/cn";

/** Spec §2: small ALL-CAPS gold label with a diamond, above every section heading. */
export function Eyebrow({
  children,
  tone = "gold",
  className,
}: {
  children: React.ReactNode;
  /** "gold" on light/navy bg, "navy" on gold bg. */
  tone?: "gold" | "navy";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.18em]",
        tone === "gold" ? "text-gold" : "text-navy",
        className,
      )}
    >
      <span aria-hidden className="text-[10px] leading-none">
        ◆
      </span>
      {children}
    </span>
  );
}

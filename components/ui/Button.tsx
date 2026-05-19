import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { ArrowRight } from "./icons";

type Variant = "primary" | "outline" | "outlineDark" | "text";

const styles: Record<Variant, string> = {
  primary:
    "bg-gold text-navy hover:bg-gold-bright shadow-[0_10px_30px_-10px_rgba(212,164,55,0.6)]",
  outline:
    "border border-white/40 text-white hover:bg-white hover:text-navy",
  outlineDark:
    "border border-navy/30 text-navy hover:bg-navy hover:text-white",
  text: "text-gold hover:gap-3 !px-0 !py-0 underline-offset-4 hover:underline",
};

export function Button({
  children,
  href,
  variant = "primary",
  className,
  arrow = true,
  type,
  onClick,
  disabled,
}: {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  className?: string;
  arrow?: boolean;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
}) {
  const isText = variant === "text";
  const base = cn(
    "group inline-flex items-center gap-2 font-semibold transition-all duration-300 ease-[var(--ease-out-soft)]",
    !isText &&
      "rounded-full px-7 py-3.5 text-[15px] leading-none disabled:opacity-50 disabled:pointer-events-none",
    styles[variant],
    className,
  );

  const inner = (
    <>
      {children}
      {arrow && (
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </>
  );

  if (href) {
    const external = href.startsWith("http") || href.startsWith("tel:");
    if (external) {
      return (
        <a href={href} className={base}>
          {inner}
        </a>
      );
    }
    return (
      <Link href={href} className={base}>
        {inner}
      </Link>
    );
  }

  return (
    <button
      type={type ?? "button"}
      onClick={onClick}
      disabled={disabled}
      className={base}
    >
      {inner}
    </button>
  );
}

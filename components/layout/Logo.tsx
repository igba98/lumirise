import Link from "next/link";
import { cn } from "@/lib/cn";

export function Logo({
  tone = "light",
  className,
}: {
  /** "light" = white wordmark (over navy), "dark" = navy wordmark. */
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <Link
      href="/"
      aria-label="Lumirise — home"
      className={cn(
        "group inline-flex items-center gap-2.5 text-xl font-extrabold tracking-tight",
        tone === "light" ? "text-white" : "text-navy",
        className,
      )}
    >
      <span className="grid h-8 w-8 place-items-center rounded-lg bg-gold text-navy transition-transform duration-300 group-hover:rotate-12">
        <span className="text-sm leading-none">◆</span>
      </span>
      <span>
        LUMI<span className="text-gold">RISE</span>
      </span>
    </Link>
  );
}

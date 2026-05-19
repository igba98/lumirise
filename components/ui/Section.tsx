import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Bg = "navy" | "cream" | "white" | "gold";

const bgMap: Record<Bg, string> = {
  navy: "bg-navy text-white",
  cream: "bg-cream text-ink",
  white: "bg-white text-ink",
  gold: "bg-gold text-navy",
};

export function Section({
  children,
  bg = "white",
  id,
  className,
  contained = true,
  full = false,
}: {
  children: ReactNode;
  bg?: Bg;
  id?: string;
  className?: string;
  contained?: boolean;
  /** Tighter vertical rhythm for band-style strips. */
  full?: boolean;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative",
        bgMap[bg],
        full ? "py-14 md:py-16" : "py-20 md:py-28",
        className,
      )}
    >
      {contained ? (
        <div className="container-x">{children}</div>
      ) : (
        children
      )}
    </section>
  );
}

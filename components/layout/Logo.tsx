import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/cn";

export function Logo({
  className,
  size = "md",
  dark = false,
}: {
  tone?: "light" | "dark";
  className?: string;
  size?: "sm" | "md";
  /** Render the wordmark in brand navy (for light backgrounds). */
  dark?: boolean;
}) {
  const h = size === "sm" ? 26 : 32;
  const ratio = 760 / 222;
  return (
    <Link
      href="/"
      aria-label="Lumirise — home"
      className={cn("inline-flex items-center", className)}
    >
      {dark ? (
        // Recolor the white wordmark precisely to brand navy via its
        // alpha shape — exact #11305F, no filter approximation.
        <span
          aria-hidden
          className="block bg-navy transition-colors"
          style={{
            height: h,
            width: h * ratio,
            WebkitMaskImage: "url(/logos/logo-white.png)",
            maskImage: "url(/logos/logo-white.png)",
            WebkitMaskSize: "contain",
            maskSize: "contain",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            WebkitMaskPosition: "left center",
            maskPosition: "left center",
          }}
        />
      ) : (
        <Image
          src="/logos/logo-white.png"
          alt="Lumirise"
          width={760}
          height={222}
          priority
          className="w-auto"
          style={{ height: h }}
        />
      )}
    </Link>
  );
}

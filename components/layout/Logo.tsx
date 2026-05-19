import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/cn";

export function Logo({
  className,
  size = "md",
}: {
  /** Retained for API compatibility; the supplied wordmark is white. */
  tone?: "light" | "dark";
  className?: string;
  size?: "sm" | "md";
}) {
  const h = size === "sm" ? 26 : 32;
  return (
    <Link
      href="/"
      aria-label="Lumirise — home"
      className={cn("inline-flex items-center", className)}
    >
      <Image
        src="/logos/logo-white.png"
        alt="Lumirise"
        width={760}
        height={222}
        priority
        className="w-auto"
        style={{ height: h }}
      />
    </Link>
  );
}

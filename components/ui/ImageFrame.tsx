import Image from "next/image";
import { cn } from "@/lib/cn";

/** Spec §2/§14: rounded image frame, hover zoom 1.03 + gold corner accent. */
export function ImageFrame({
  src,
  alt,
  className,
  ratio = "aspect-[4/3]",
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
  rounded = "rounded-[var(--radius-frame)]",
}: {
  src: string;
  alt: string;
  className?: string;
  ratio?: string;
  priority?: boolean;
  sizes?: string;
  rounded?: string;
}) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden",
        rounded,
        ratio,
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover transition-transform duration-700 ease-[var(--ease-out-soft)] group-hover:scale-[1.04]"
      />
      <span className="pointer-events-none absolute right-4 top-4 h-10 w-10 rounded-tr-xl border-r-2 border-t-2 border-gold opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </div>
  );
}

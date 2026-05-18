import { cn } from "@/lib/cn";
import { Eyebrow } from "./Eyebrow";
import { Reveal } from "./Reveal";

/** Eyebrow + H2 + optional intro — the standard section header (spec §2). */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  tone = "ink",
  align = "left",
  className,
  max = "max-w-3xl",
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  tone?: "ink" | "white" | "navy-on-gold";
  align?: "left" | "center";
  className?: string;
  max?: string;
}) {
  const titleColor =
    tone === "white"
      ? "text-white"
      : tone === "navy-on-gold"
        ? "text-navy"
        : "text-navy";
  const introColor =
    tone === "white"
      ? "text-white/70"
      : tone === "navy-on-gold"
        ? "text-navy/80"
        : "text-muted";

  return (
    <Reveal
      className={cn(
        align === "center" && "mx-auto text-center",
        max,
        className,
      )}
    >
      <Eyebrow tone={tone === "navy-on-gold" ? "navy" : "gold"}>
        {eyebrow}
      </Eyebrow>
      <h2
        className={cn(
          "mt-5 text-4xl font-extrabold leading-[1.1] md:text-5xl",
          titleColor,
        )}
      >
        {title}
      </h2>
      {intro && (
        <p className={cn("mt-5 text-lg leading-relaxed", introColor)}>
          {intro}
        </p>
      )}
    </Reveal>
  );
}

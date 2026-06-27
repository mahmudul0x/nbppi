import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  dark = false,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: string;
  align?: "left" | "center";
  dark?: boolean;
}) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <div
        className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] ${
          dark ? "text-[#7FE0D4]" : "text-[#0A6A38]"
        }`}
      >
        <span className={`h-px w-8 ${dark ? "bg-[#7FE0D4]" : "bg-[#0A6A38]"}`} />
        {eyebrow}
      </div>
      <h2
        className={`mt-5 font-display text-4xl font-bold leading-[1.1] tracking-tight md:text-5xl ${
          dark ? "text-white" : "text-[#0B2D6B]"
        }`}
      >
        {title}
      </h2>
      {intro ? (
        <p
          className={`mt-5 text-base leading-relaxed md:text-lg ${
            dark ? "text-white/70" : "text-muted-foreground"
          }`}
        >
          {intro}
        </p>
      ) : null}
    </div>
  );
}
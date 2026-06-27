import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  crumbs,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: string;
  image: string;
  crumbs?: { label: string; to?: string }[];
}) {
  return (
    <section className="relative isolate overflow-hidden bg-[#0B2D6B] text-white">
      <div className="absolute inset-0">
        <img src={image} alt="" className="h-full w-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B2D6B] via-[#0B2D6B]/90 to-[#0B2D6B]/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0B2D6B]" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 pb-8 pt-8 sm:px-6 sm:pb-12 sm:pt-12 md:pb-16 md:pt-16 lg:pb-20 lg:pt-20">
        {crumbs ? (
          <nav className="mb-6 flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-white/55">
    {crumbs.map((c, i) => (
              <span key={i} className="flex items-center gap-2">
                {c.to ? (
                  <Link to={c.to} className="transition hover:text-white">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-white/80">{c.label}</span>
                )}
                {i < crumbs.length - 1 ? <ChevronRight className="h-3 w-3" /> : null}
              </span>
            ))}
          </nav>
        ) : null}
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-white/80 backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-[#0A6A38]" />
          {eyebrow}
        </div>
        <h1 className="mt-4 max-w-3xl font-display text-xl font-bold leading-[1.2] tracking-tight sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
          {title}
        </h1>
        {intro ? (
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/75 sm:text-base md:text-lg">
            {intro}
          </p>
        ) : null}
      </div>
    </section>
  );
}
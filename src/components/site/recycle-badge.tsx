import { Link } from "@tanstack/react-router";
import { Recycle } from "lucide-react";

type RecycleBadgeProps = {
  tone?: "light" | "dark";
  label?: string;
  /** When set, the badge becomes a link (e.g. "/sustainability"). */
  to?: string;
  className?: string;
};

export function RecycleBadge({
  tone = "light",
  label = "100% Recyclable",
  to,
  className = "",
}: RecycleBadgeProps) {
  const toneClasses =
    tone === "dark"
      ? "border-white/20 bg-white/10 text-[#7FE0D4] backdrop-blur"
      : "border-[#0A6A38]/25 bg-[#0A6A38]/10 text-[#0A6A38]";

  const content = (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] ${toneClasses} ${className}`}
    >
      <Recycle className="h-3 w-3 shrink-0" aria-hidden />
      {label}
    </span>
  );

  if (to) {
    return (
      <Link to={to} className="inline-flex transition-opacity hover:opacity-80">
        {content}
      </Link>
    );
  }
  return content;
}

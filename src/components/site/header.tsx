import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { NAV } from "@/lib/site-data";
import logoAsset from "@/assets/nbppi-logo.png.asset.json";

export function SiteHeader({ transparentOnTop = false }: { transparentOnTop?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const onDark = transparentOnTop && !scrolled;

  return (
    <header className="sticky top-0 z-50">
      <div
        className={`backdrop-blur-md transition-all duration-300 ${
          onDark
            ? "border-b border-transparent bg-[#0B2D6B]/95 lg:bg-[#0B2D6B]"
            : "border-b border-border bg-background/90 shadow-[0_1px_0_rgba(8,43,89,0.06)]"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-3 sm:gap-4">
            <img
              src={logoAsset.url}
              alt="NBPPI logo"
              className="h-10 w-10 object-contain sm:h-11 sm:w-11 lg:h-12 lg:w-12"
            />
            <div className="leading-tight">
              <div
                className={`font-display text-sm font-bold ${
                  onDark ? "text-white" : "text-[#0B2D6B]"
                }`}
              >
                NBPPI
              </div>
              <div
                className={`text-[10px] uppercase tracking-[0.18em] ${
                  onDark ? "text-white/60" : "text-muted-foreground"
                }`}
              >
                Poly &amp; Packaging Ind. Ltd.
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-0.5 lg:flex">
            {NAV.map((n) => {
              const active =
                n.to === "/" ? pathname === "/" : pathname === n.to || pathname.startsWith(n.to + "/");
              return (
                <Link
                  key={n.to}
                  to={n.to}
                  className={`relative rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    onDark
                      ? `${active ? "text-white" : "text-white/70 hover:text-white"}`
                      : `${active ? "text-[#0B2D6B]" : "text-foreground/70 hover:text-[#0B2D6B]"}`
                  }`}
                >
                  {n.label}
                  {active ? (
                    <span
                      className={`absolute inset-x-3 -bottom-0.5 h-0.5 ${
                        onDark ? "bg-[#0A6A38]" : "bg-[#0A6A38]"
                      }`}
                    />
                  ) : null}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              to="/quote"
              className="group hidden items-center gap-2 rounded-md bg-[linear-gradient(135deg,#F4C542_0%,#D9A520_50%,#B8860B_100%)] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_28px_-10px_rgba(217,165,32,0.55)] transition hover:brightness-110 lg:inline-flex"
            >
              Request Quote
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <button
              aria-label="Menu"
              onClick={() => setOpen((o) => !o)}
              className={`flex h-10 w-10 items-center justify-center rounded-md lg:hidden ${
                onDark ? "text-white" : "text-[#0B2D6B]"
              }`}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open ? (
          <div className="border-t border-border bg-background lg:hidden">
            <div className="mx-auto grid max-w-7xl grid-cols-2 gap-1 px-4 py-4">
              {NAV.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  className="rounded-md px-3 py-3 text-sm font-medium text-foreground/80 hover:bg-muted hover:text-[#0B2D6B]"
                >
                  {n.label}
                </Link>
              ))}
              <Link
                to="/quote"
                className="col-span-2 mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-[linear-gradient(135deg,#F4C542_0%,#D9A520_50%,#B8860B_100%)] px-5 py-3 text-sm font-semibold text-white"
              >
                Request Quote <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, Menu, X, Phone, Mail, MapPin } from "lucide-react";
import { NAV } from "@/lib/site-data";
import logoImg from "@/assets/logoWebsite.png";

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

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

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
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5">
          <Link to="/" className="flex min-w-0 items-center gap-3">
            <img
              src={logoImg}
              alt="NBPPI logo"
              className={`h-10 w-auto object-contain sm:h-11 lg:h-12 transition-all duration-300 ${onDark ? "brightness-0 invert" : ""}`}
            />
            <span className="flex min-w-0 flex-col leading-tight">
              <span className={`font-display text-base font-bold tracking-tight sm:text-lg ${onDark ? "text-white" : "text-[#0B2D6B]"}`}>
                NorthBengal
              </span>
              <span className={`hidden whitespace-nowrap text-[10px] font-medium uppercase tracking-[0.18em] sm:block ${onDark ? "text-white/70" : "text-foreground/60"}`}>
                Poly & Packaging Ind. Ltd.
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-0.5 lg:flex">
            {NAV.map((n) => {
              const active =
                n.to === "/" ? pathname === "/" : pathname === n.to || pathname.startsWith(n.to + "/");
              return (
                <Link
                  key={n.to}
                  to={n.to}
                  className={`relative whitespace-nowrap rounded-md px-2 py-2 text-sm font-medium transition-colors xl:px-3 ${
                    onDark
                      ? `${active ? "text-white" : "text-white/70 hover:text-white"}`
                      : `${active ? "text-[#0B2D6B]" : "text-foreground/70 hover:text-[#0B2D6B]"}`
                  }`}
                >
                  {n.label}
                  {active ? (
                    <span
                      className={`absolute inset-x-2 -bottom-0.5 h-0.5 xl:inset-x-3 ${
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
              className="group hidden items-center gap-2 whitespace-nowrap rounded-md bg-[linear-gradient(135deg,#F4C542_0%,#D9A520_50%,#B8860B_100%)] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_28px_-10px_rgba(217,165,32,0.55)] transition hover:brightness-110 lg:inline-flex"
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

      </div>

      {/* Mobile menu overlay + drawer */}
      <div
        className={`fixed inset-0 z-40 bg-[#0B2D6B]/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      />
      <aside
        className={`fixed right-0 top-0 z-50 flex h-[100svh] w-[88%] max-w-sm flex-col bg-white shadow-2xl transition-transform duration-300 ease-out lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Mobile navigation"
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
            <img src={logoImg} alt="NBPPI logo" className="h-9 w-auto object-contain" />
            <span className="flex flex-col leading-tight">
              <span className="font-display text-base font-bold tracking-tight text-[#0B2D6B]">
                NorthBengal
              </span>
              <span className="text-[9px] font-medium uppercase tracking-[0.18em] text-foreground/60">
                Poly & Packaging Ind. Ltd.
              </span>
            </span>
          </Link>
          <button
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="flex h-10 w-10 items-center justify-center rounded-md text-[#0B2D6B] hover:bg-muted"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 py-4">
          <ul className="flex flex-col gap-1">
            {NAV.map((n) => {
              const active =
                n.to === "/" ? pathname === "/" : pathname === n.to || pathname.startsWith(n.to + "/");
              return (
                <li key={n.to}>
                  <Link
                    to={n.to}
                    onClick={() => setOpen(false)}
                    className={`group flex items-center justify-between rounded-lg px-4 py-3.5 text-[15px] font-semibold transition ${
                      active
                        ? "bg-[#0B2D6B]/5 text-[#0B2D6B]"
                        : "text-foreground/80 hover:bg-muted hover:text-[#0B2D6B]"
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      {active ? (
                        <span className="h-1.5 w-1.5 rounded-full bg-[#0A6A38]" />
                      ) : (
                        <span className="h-1.5 w-1.5 rounded-full bg-transparent" />
                      )}
                      {n.label}
                    </span>
                    <ArrowRight
                      className={`h-4 w-4 transition-transform ${
                        active ? "text-[#0B2D6B]" : "text-foreground/30 group-hover:translate-x-0.5 group-hover:text-[#0B2D6B]"
                      }`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="mt-6 space-y-3 rounded-xl border border-border bg-muted/30 p-4 text-sm">
            <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0B2D6B]">
              Get in touch
            </div>
            <a href="tel:+8801700000000" className="flex items-center gap-3 text-foreground/80 hover:text-[#0B2D6B]">
              <Phone className="h-4 w-4 text-[#0A6A38]" />
              +880 1700 000 000
            </a>
            <a href="mailto:info@nbppi.com" className="flex items-center gap-3 text-foreground/80 hover:text-[#0B2D6B]">
              <Mail className="h-4 w-4 text-[#0A6A38]" />
              info@nbppi.com
            </a>
            <div className="flex items-start gap-3 text-foreground/70">
              <MapPin className="mt-0.5 h-4 w-4 text-[#0A6A38]" />
              <span>Rangpur Industrial Zone, Bangladesh</span>
            </div>
          </div>
        </nav>

        <div className="border-t border-border p-4">
          <Link
            to="/quote"
            onClick={() => setOpen(false)}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-[linear-gradient(135deg,#F4C542_0%,#D9A520_50%,#B8860B_100%)] px-5 py-3.5 text-sm font-semibold text-white shadow-[0_10px_28px_-10px_rgba(217,165,32,0.55)]"
          >
            Request Quote
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </aside>
    </header>
  );
}
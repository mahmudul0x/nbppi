import { Link } from "@tanstack/react-router";
import { Linkedin, Facebook, Youtube, ArrowRight } from "lucide-react";
import logoAsset from "@/assets/nbppi-logo.png.asset.json";

const cols = [
  {
    t: "Company",
    l: [
      ["About NBPPI", "/about"],
      ["Manufacturing", "/manufacturing"],
      ["Sustainability", "/sustainability"],
      ["Careers", "/career"],
      ["News & Blog", "/blog"],
    ],
  },
  {
    t: "Products",
    l: [
      ["Plain PP Woven", "/products"],
      ["Laminated Bags", "/products"],
      ["Lined Bags", "/products"],
      ["BOPP Bags", "/products"],
      ["Gusseted Bags", "/products"],
    ],
  },
  {
    t: "Resources",
    l: [
      ["Brochures", "/contact"],
      ["Certifications", "/quality"],
      ["Quality Policy", "/quality"],
      ["Gallery", "/gallery"],
      ["Contact", "/contact"],
    ],
  },
] as const;

export function SiteFooter() {
  return (
    <footer className="bg-[#07204E] pt-20 text-white/70">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Link to="/" className="flex items-center gap-3">
              <img
                src={logoAsset.url}
                alt="NBPPI logo"
                className="h-14 w-14 rounded-md bg-white object-contain p-1.5 sm:h-16 sm:w-16 lg:h-20 lg:w-20"
              />
              <div className="leading-tight">
                <div className="font-display text-base font-bold text-white">NBPPI</div>
                <div className="text-[10px] uppercase tracking-[0.18em] text-white/50">
                  Poly &amp; Packaging Industries Ltd.
                </div>
              </div>
            </Link>
            <p className="mt-6 max-w-md text-sm leading-relaxed">
              A vertically integrated manufacturer of polypropylene woven packaging serving
              agriculture, food, construction, chemical and export markets across 22+ countries.
            </p>
            <form
              className="mt-8 flex max-w-md items-center gap-2 rounded-lg border border-white/10 bg-white/5 p-1.5"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                placeholder="Subscribe to NBPPI updates"
                className="flex-1 bg-transparent px-3 py-2 text-sm placeholder:text-white/40 focus:outline-none"
              />
              <button className="inline-flex items-center gap-1.5 rounded-md bg-[#0A6A38] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#22887b]">
                Subscribe <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </form>
          </div>

          {cols.map((c) => (
            <div key={c.t} className="lg:col-span-2">
              <div className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-white">
                {c.t}
              </div>
              <ul className="mt-5 space-y-3 text-sm">
                {c.l.map(([label, href]) => (
                  <li key={label}>
                    <Link to={href} className="transition hover:text-white">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="lg:col-span-1">
            <div className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-white">
              Follow
            </div>
            <div className="mt-5 flex gap-3">
              <a aria-label="LinkedIn" className="flex h-9 w-9 items-center justify-center rounded-md border border-white/10 transition hover:bg-white/10">
                <Linkedin className="h-4 w-4" />
              </a>
              <a aria-label="Facebook" className="flex h-9 w-9 items-center justify-center rounded-md border border-white/10 transition hover:bg-white/10">
                <Facebook className="h-4 w-4" />
              </a>
              <a aria-label="YouTube" className="flex h-9 w-9 items-center justify-center rounded-md border border-white/10 transition hover:bg-white/10">
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 py-6 text-xs text-white/50">
          <div>
            © {new Date().getFullYear()} North Bengal Poly &amp; Packaging Industries Ltd. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a className="hover:text-white">Privacy</a>
            <a className="hover:text-white">Terms</a>
            <a className="hover:text-white">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
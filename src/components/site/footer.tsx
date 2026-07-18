import { Link } from "@tanstack/react-router";
import { Linkedin, Facebook, Youtube, MapPin, Phone, Mail } from "lucide-react";
import { RecycleBadge } from "@/components/site/recycle-badge";
import logoImg from "@/assets/logoWebsite.png";

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
      ["FAQ", "/faq"],
      ["Case Studies", "/case-studies"],
      ["Certifications", "/quality"],
      ["Gallery", "/gallery"],
      ["Sitemap", "/sitemap"],
    ],
  },
] as const;

export function SiteFooter() {
  return (
    <footer className="bg-[#07204E] pt-14 text-white/70 sm:pt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-12 lg:grid-cols-12 lg:gap-12">
          <div className="sm:col-span-2 lg:col-span-5">
            <Link to="/" className="inline-flex items-center gap-2.5 sm:gap-3">
              <img
                src={logoImg}
                alt="NBPPI logo"
                className="h-10 w-auto object-contain brightness-0 invert sm:h-12 lg:h-16"
              />
              <span className="flex flex-col leading-tight">
                <span className="font-display text-lg font-bold tracking-tight text-white sm:text-xl">
                  NorthBengal
                </span>
                <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-white/60">
                  Poly & Packaging Ind. Ltd.
                </span>
              </span>
            </Link>
            <p className="mt-6 max-w-md text-sm leading-relaxed">
              A vertically integrated manufacturer of polypropylene woven packaging serving
              agriculture, food, construction, chemical and export markets across 22+ countries.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <RecycleBadge tone="dark" to="/sustainability" />
              <span className="text-xs text-white/55">
                Recyclable by design — mono-material PP packaging.
              </span>
            </div>

            {/* Social icons */}
            <div className="mt-8">
              <div className="font-display text-[10px] font-semibold uppercase tracking-[0.22em] text-white/50">
                Follow us
              </div>
              <div className="mt-4 flex gap-3">
                <a
                  aria-label="LinkedIn"
                  className="group flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-all duration-200 hover:border-[#0A6A38]/60 hover:bg-[#0A6A38] hover:scale-110"
                >
                  <Linkedin className="h-4 w-4 text-white/60 transition group-hover:text-white" />
                </a>
                <a
                  aria-label="Facebook"
                  className="group flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-all duration-200 hover:border-[#0A6A38]/60 hover:bg-[#0A6A38] hover:scale-110"
                >
                  <Facebook className="h-4 w-4 text-white/60 transition group-hover:text-white" />
                </a>
                <a
                  aria-label="YouTube"
                  className="group flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-all duration-200 hover:border-[#0A6A38]/60 hover:bg-[#0A6A38] hover:scale-110"
                >
                  <Youtube className="h-4 w-4 text-white/60 transition group-hover:text-white" />
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 sm:col-span-2 sm:grid-cols-3 lg:col-span-7 lg:gap-8">
            {cols.map((c) => (
              <div key={c.t} className="min-w-0">
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
          </div>
        </div>

        {/* Contact row */}
        <div className="mt-12 grid grid-cols-1 gap-6 border-t border-white/10 pt-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex items-start gap-3">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#7FE0D4]" />
            <div>
              <div className="font-display text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50">
                Head Office
              </div>
              <p className="mt-1.5 text-sm leading-relaxed">
                Room-807, Level-7, Zaman Court, 45 Dilkusha C/A, Dhaka-1000
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#7FE0D4]" />
            <div>
              <div className="font-display text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50">
                Zonal Office
              </div>
              <p className="mt-1.5 text-sm leading-relaxed">
                Sydney Tower, 3rd Floor, Court House Street, Joleshoritola, Bogura-5800
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Phone className="mt-0.5 h-5 w-5 shrink-0 text-[#7FE0D4]" />
            <div>
              <div className="font-display text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50">
                Phone
              </div>
              <a href="tel:+8801714570179" className="mt-1.5 block text-sm transition hover:text-white">
                +880 1714 570179
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Mail className="mt-0.5 h-5 w-5 shrink-0 text-[#7FE0D4]" />
            <div>
              <div className="font-display text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50">
                Email
              </div>
              <a href="mailto:info@nbppi.com" className="mt-1.5 block text-sm transition hover:text-white">
                info@nbppi.com
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 pb-4">
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-white/50">
            <div>
              © {new Date().getFullYear()} North Bengal Poly &amp; Packaging Industries Ltd. All rights reserved.
            </div>
            <div className="flex gap-6">
              <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-white">Terms of Use</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
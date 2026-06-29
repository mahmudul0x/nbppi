import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/page-shell";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/sitemap")({
  head: () => ({
    meta: [
      { title: "Sitemap — NBPPI" },
      { name: "description", content: "Complete sitemap of the NBPPI website — all pages and sections." },
      { property: "og:title", content: "Sitemap — NBPPI" },
      { property: "og:description", content: "Complete sitemap of the NBPPI website — all pages including products, industries, blog, case studies, FAQ and more." },
      { property: "og:url", content: "https://nbppi.com/sitemap" },
      { property: "og:site_name", content: "NBPPI" },
    ],
    links: [{ rel: "canonical", href: "https://nbppi.com/sitemap" }],
  }),
  component: SitemapPage,
});

const SITE_STRUCTURE = [
  {
    category: "Main Pages",
    color: "#0B2D6B",
    pages: [
      { label: "Home", to: "/", desc: "Hero, Purpose, Products, Industries, Sustainability & more" },
      { label: "About Us", to: "/about", desc: "Purpose, Vision, Mission, Leadership, Core Values, Timeline" },
      { label: "Products", to: "/products", desc: "Full PP woven packaging catalogue — 6 product lines" },
      { label: "Manufacturing", to: "/manufacturing", desc: "11-stage integrated production process" },
      { label: "Industries", to: "/industries", desc: "Feed, Agriculture, Fertilizer & Industrial sectors" },
      { label: "Quality & Certifications", to: "/quality", desc: "Licenses, certifications and QC testing protocols" },
      { label: "Sustainability", to: "/sustainability", desc: "Recyclable materials, energy efficiency & ESG metrics" },
    ],
  },
  {
    category: "Get Involved",
    color: "#0A6A38",
    pages: [
      { label: "Request a Quote", to: "/quote", desc: "B2B quotation form — respond within 24 hours" },
      { label: "Contact Us", to: "/contact", desc: "Sales, export & general enquiries" },
      { label: "Careers", to: "/career", desc: "Open roles and why to work at NBPPI" },
    ],
  },
  {
    category: "Resources",
    color: "#1f618d",
    pages: [
      { label: "Gallery", to: "/gallery", desc: "Factory, product and facility photography" },
      { label: "News & Blog", to: "/blog", desc: "Industry insights, company updates and sustainability news" },
      { label: "Case Studies", to: "/case-studies", desc: "Client success stories with measurable outcomes" },
      { label: "FAQ", to: "/faq", desc: "Frequently asked questions about orders, products and export" },
    ],
  },
  {
    category: "Legal",
    color: "#64748b",
    pages: [
      { label: "Privacy Policy", to: "/privacy", desc: "How we collect, use and protect your information" },
      { label: "Terms of Use", to: "/terms", desc: "Terms governing use of the NBPPI website" },
    ],
  },
];

function SitemapPage() {
  return (
    <PageShell>
      {/* Hero */}
      <div className="relative overflow-hidden bg-[#0B2D6B] py-14 text-white sm:py-20">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6">
          <div className="flex items-center gap-2 text-xs text-white/50">
            <Link to="/" className="hover:text-white/80">Home</Link>
            <span>/</span>
            <span className="text-white/80">Sitemap</span>
          </div>
          <h1 className="mt-6 font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Sitemap
          </h1>
          <p className="mt-4 text-base text-white/65">
            A complete overview of all pages on the NBPPI website.
          </p>
        </div>
      </div>

      {/* Sitemap content */}
      <section className="bg-[#F1F4F9] py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="space-y-8">
            {SITE_STRUCTURE.map((cat) => (
              <div key={cat.category}>
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full" style={{ backgroundColor: cat.color }} />
                  <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: cat.color }}>
                    {cat.category}
                  </span>
                  <div className="h-px flex-1 bg-border" />
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {cat.pages.map((page) => (
                    <Link
                      key={page.to}
                      to={page.to}
                      className="group flex items-start justify-between gap-4 rounded-xl border border-border bg-white p-5 transition hover:-translate-y-0.5 hover:border-[#0B2D6B]/20 hover:shadow-[0_8px_24px_-6px_rgba(11,45,107,0.10)]"
                    >
                      <div>
                        <div className="font-display text-sm font-bold text-[#0B2D6B]">{page.label}</div>
                        <div className="mt-1 text-xs leading-relaxed text-muted-foreground">{page.desc}</div>
                      </div>
                      <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground/40 transition group-hover:translate-x-0.5 group-hover:text-[#0B2D6B]" />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}

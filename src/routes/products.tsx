import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { PageShell } from "@/components/site/page-shell";
import { PageHero } from "@/components/site/page-hero";
import { PRODUCTS } from "@/lib/site-data";
import { ArrowRight, CircleCheck, ChevronDown } from "lucide-react";
import { RecycleBadge } from "@/components/site/recycle-badge";
import productWoven from "@/assets/product-woven.jpg";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "PP Woven Bags Bangladesh — BOPP, Laminated & Printed Bags | NBPPI" },
      { name: "description", content: "Buy 100% recyclable PP woven bags from Bangladesh — plain, BOPP laminated, flexo printed, PE-lined and gusseted bags. Custom sizes, GSM and print. MOQ 10,000 pcs. ISO certified manufacturer. Export to 22+ countries." },
      { property: "og:title", content: "PP Woven Bag Products — NBPPI" },
      { property: "og:description", content: "Plain PP woven, BOPP laminated, printed, lined and gusseted bags — 6 product lines engineered for agriculture, food, construction and export industries." },
      { property: "og:url", content: "https://nbppi.com/products" },
      { property: "og:image", content: "https://nbppi.com/og-image.jpg" },
      { property: "og:site_name", content: "NBPPI" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "PP Woven Bags Bangladesh — BOPP, Laminated & Printed | NBPPI" },
      { name: "twitter:description", content: "Plain PP woven, BOPP laminated, flexo printed, PE-lined and gusseted bags. MOQ 10,000 pcs. ISO certified. Export to 22+ countries." },
      { name: "twitter:image", content: "https://nbppi.com/og-image.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://nbppi.com/products" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "NBPPI PP Woven Bag Products",
          description: "Polypropylene woven packaging product range",
          url: "https://nbppi.com/products",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Plain PP Woven Bags", url: "https://nbppi.com/products" },
            { "@type": "ListItem", position: 2, name: "Laminated PP Woven Bags", url: "https://nbppi.com/products" },
            { "@type": "ListItem", position: 3, name: "BOPP Printed Bags", url: "https://nbppi.com/products" },
            { "@type": "ListItem", position: 4, name: "PP Bags with Inner Liners", url: "https://nbppi.com/products" },
            { "@type": "ListItem", position: 5, name: "Gusseted Bags", url: "https://nbppi.com/products" },
            { "@type": "ListItem", position: 6, name: "Printed PP Woven Bags", url: "https://nbppi.com/products" },
          ],
        }),
      },
    ],
  }),
  component: ProductsPage,
});

function ProductCard({ p, i }: { p: typeof PRODUCTS[number]; i: number }) {
  const [open, setOpen] = useState(false);
  const cardRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let ctx: { revert: () => void } | null = null;
    (async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      ctx = gsap.context(() => {
        gsap.fromTo(
          cardRef.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1, y: 0,
            duration: 0.65,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardRef.current,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    })();
    return () => ctx?.revert();
  }, []);

  return (
    <>
      {/* ── Mobile card (< lg) ─────────────────────────────────── */}
      <article
        ref={cardRef}
        id={p.slug}
        className="overflow-hidden rounded-2xl border border-border bg-white shadow-[0_2px_16px_-6px_rgba(11,45,107,0.10)] lg:hidden"
      >
        {/* Image */}
        <div className="relative aspect-video overflow-hidden">
          <img
            src={p.image}
            alt={p.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#0B2D6B]/70 via-[#0B2D6B]/10 to-transparent" />
          <div className="absolute bottom-0 left-0 p-4">
            <span className="inline-flex flex-wrap items-center gap-1.5">
              <span className="inline-flex rounded-full bg-white/20 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-white backdrop-blur">
                {p.category}
              </span>
              {p.eco && <RecycleBadge tone="dark" label="Recyclable" />}
            </span>
            <h2 className="mt-2 font-display text-lg font-bold text-white leading-tight">{p.name}</h2>
          </div>
        </div>

        {/* Body */}
        <div className="p-4">
          <p className="text-sm leading-relaxed text-muted-foreground">{p.short}</p>

          {/* Tags: Applications */}
          <div className="mt-4">
            <div className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#0B2D6B]">Applications</div>
            <div className="flex flex-wrap gap-1.5">
              {p.applications.map((a) => (
                <span key={a} className="inline-flex items-center gap-1 rounded-full border border-[#0A6A38]/20 bg-[#0A6A38]/6 px-2.5 py-0.5 text-[11px] font-medium text-[#0A6A38]">
                  <CircleCheck className="h-3 w-3" /> {a}
                </span>
              ))}
            </div>
          </div>

          {/* Expandable specs */}
          <button
            onClick={() => setOpen((o) => !o)}
            className="mt-4 flex w-full items-center justify-between rounded-lg border border-border bg-[#F8F9FB] px-4 py-2.5 text-xs font-semibold text-[#0B2D6B]"
          >
            View specifications
            <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
          </button>

          {open && (
            <div className="mt-3 grid grid-cols-2 gap-3 rounded-xl border border-border bg-[#F8F9FB] p-4">
              {p.sizes && (
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#0A6A38]">Sizes</div>
                  <div className="mt-1 text-[11px] leading-relaxed text-muted-foreground">{p.sizes.join(" · ")}</div>
                </div>
              )}
              {p.printing && (
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#0A6A38]">Printing</div>
                  <div className="mt-1 text-[11px] leading-relaxed text-muted-foreground">{p.printing.join(" · ")}</div>
                </div>
              )}
              {p.lamination && (
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#0A6A38]">Lamination</div>
                  <div className="mt-1 text-[11px] leading-relaxed text-muted-foreground">{p.lamination.join(" · ")}</div>
                </div>
              )}
              {p.customization && (
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#0A6A38]">Customization</div>
                  <div className="mt-1 text-[11px] leading-relaxed text-muted-foreground">{p.customization.join(" · ")}</div>
                </div>
              )}
              {p.eco && (
                <div className="col-span-2">
                  <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#0A6A38]">Sustainability</div>
                  <div className="mt-1 text-[11px] leading-relaxed text-muted-foreground">{p.eco.join(" · ")}</div>
                </div>
              )}
            </div>
          )}

          {/* CTAs */}
          <div className="mt-4 flex gap-2">
            <Link
              to="/quote"
              className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-[linear-gradient(135deg,#F4C542_0%,#D9A520_50%,#B8860B_100%)] py-2.5 text-xs font-semibold text-white shadow-[0_8px_20px_-8px_rgba(217,165,32,0.55)] transition hover:brightness-110"
            >
              Request Quote <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <Link
              to="/contact"
              className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-border bg-background py-2.5 text-xs font-semibold text-[#0B2D6B] transition hover:bg-muted"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </article>

      {/* ── Desktop layout (≥ lg) ───────────────────────────────── */}
      <article
        ref={undefined}
        id={`${p.slug}-desktop`}
        className={`hidden gap-12 lg:grid lg:grid-cols-2 lg:items-center ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}
      >
        <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-(--shadow-card)">
          <img src={p.image} alt={p.name} loading="lazy" className="aspect-4/3 w-full object-cover transition-transform duration-[1.4s] hover:scale-105" />
        </div>
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex rounded-full bg-[#0A6A38]/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#0A6A38]">
              {p.category}
            </span>
            {p.eco && <RecycleBadge tone="light" />}
          </div>
          <h2 className="mt-4 font-display text-3xl font-bold text-[#0B2D6B] md:text-4xl">{p.name}</h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">{p.description}</p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0B2D6B]">Applications</div>
              <ul className="mt-3 space-y-2">
                {p.applications.map((a) => (
                  <li key={a} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CircleCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#0A6A38]" /> {a}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0B2D6B]">Key Features</div>
              <ul className="mt-3 space-y-2">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CircleCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#0A6A38]" /> {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {(p.sizes || p.printing || p.lamination || p.customization) && (
            <div className="mt-6 grid gap-3 rounded-xl border border-border bg-card p-5 sm:grid-cols-2">
              {p.sizes && (
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#0A6A38]">Available Sizes</div>
                  <div className="mt-1.5 text-sm text-muted-foreground">{p.sizes.join(" · ")}</div>
                </div>
              )}
              {p.printing && (
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#0A6A38]">Printing Options</div>
                  <div className="mt-1.5 text-sm text-muted-foreground">{p.printing.join(" · ")}</div>
                </div>
              )}
              {p.lamination && (
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#0A6A38]">Lamination Options</div>
                  <div className="mt-1.5 text-sm text-muted-foreground">{p.lamination.join(" · ")}</div>
                </div>
              )}
              {p.customization && (
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#0A6A38]">Customization</div>
                  <div className="mt-1.5 text-sm text-muted-foreground">{p.customization.join(" · ")}</div>
                </div>
              )}
              {p.eco && (
                <div className="sm:col-span-2">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#0A6A38]">Sustainability</div>
                  <div className="mt-1.5 text-sm text-muted-foreground">{p.eco.join(" · ")}</div>
                </div>
              )}
            </div>
          )}
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/quote"
              className="inline-flex items-center gap-2 rounded-[14px] bg-[linear-gradient(135deg,#F4C542_0%,#D9A520_50%,#B8860B_100%)] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_-12px_rgba(217,165,32,0.55)] transition hover:brightness-110"
            >
              Request Quote <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-6 py-3 text-sm font-semibold text-[#0B2D6B] transition hover:bg-muted"
            >
              Download datasheet
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}

function ProductsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Product Catalogue"
        title={<>Industrial packaging,<br /> engineered to specification.</>}
        intro="A complete portfolio in 100% recyclable polypropylene — from breathable agricultural sacks to premium BOPP retail bags and bespoke export programmes."
        image={productWoven}
        crumbs={[{ label: "Home", to: "/" }, { label: "Products" }]}
      />

      <section className="bg-background py-12 sm:py-16 lg:py-20">
        {/* Mobile: 2-col grid of cards */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:hidden">
            {PRODUCTS.map((p, i) => (
              <ProductCard key={p.slug} p={p} i={i} />
            ))}
          </div>

          {/* Desktop: alternating 2-col layout */}
          <div className="hidden space-y-20 lg:block">
            {PRODUCTS.map((p, i) => (
              <ProductCard key={p.slug + "-d"} p={p} i={i} />
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}

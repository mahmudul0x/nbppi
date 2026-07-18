import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { PageShell } from "@/components/site/page-shell";
import { PageHero } from "@/components/site/page-hero";
import { PRODUCTS, type Product } from "@/lib/site-data";
import { ArrowRight } from "lucide-react";
import { RecycleBadge } from "@/components/site/recycle-badge";
import productWoven from "@/assets/product-woven.jpg";

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title: "PP Woven Bags Bangladesh — Woven, BOPP, Leno & Shopping Bags | NBPPI" },
      { name: "description", content: "Buy 100% recyclable PP woven bags from Bangladesh — matt & gloss laminated, digital printed, non-laminated, leno mesh and BOPP shopping bags. Custom sizes, GSM and print. MOQ 10,000 pcs. ISO certified. Export to 22+ countries." },
      { property: "og:title", content: "PP Woven Bag Products — NBPPI" },
      { property: "og:description", content: "Fourteen product lines in 100% recyclable polypropylene — engineered for feed mills, rice mills, produce, retail and export brands." },
      { property: "og:url", content: "https://northbengalpoly.com/products" },
      { property: "og:image", content: "https://northbengalpoly.com/og-image.jpg" },
      { property: "og:site_name", content: "NBPPI" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "PP Woven Bags Bangladesh — Woven, BOPP, Leno & Shopping Bags | NBPPI" },
      { name: "twitter:description", content: "Fourteen PP woven bag product lines. MOQ 10,000 pcs. ISO certified. Export to 22+ countries." },
      { name: "twitter:image", content: "https://northbengalpoly.com/og-image.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://northbengalpoly.com/products" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "NBPPI PP Woven Bag Products",
          description: "Polypropylene woven packaging product range",
          url: "https://northbengalpoly.com/products",
          itemListElement: PRODUCTS.map((p, i) => ({
            "@type": "ListItem",
            position: i + 1,
            url: `https://northbengalpoly.com/products/${p.slug}`,
            name: p.name,
          })),
        }),
      },
    ],
  }),
  component: ProductsPage,
});

/** Summary card — image, name, category and a one-line blurb. Full specs live on the detail page. */
function ProductCard({ p, i, columns }: { p: Product; i: number; columns: number }) {
  const cardRef = useRef<HTMLElement>(null);

  // Reveal-on-scroll. Deliberately not GSAP/ScrollTrigger: a product card must
  // never be left stuck at opacity 0 if the animation fails to fire.
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = cardRef.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <article
      ref={cardRef}
      id={p.slug}
      // Stagger across a row. On a single-column phone every card is its own row,
      // so the delay collapses to 0 rather than making each card feel laggy.
      style={{ transitionDelay: `${(i % columns) * 70}ms` }}
      className={`group flex scroll-mt-28 flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-[0_2px_16px_-6px_rgba(11,45,107,0.10)] transition-[opacity,transform,box-shadow] duration-500 ease-out hover:shadow-(--shadow-elevated) motion-reduce:transition-none ${
        shown ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0 motion-reduce:opacity-100"
      }`}
    >
      <Link to="/products/$slug" params={{ slug: p.slug }} className="relative block aspect-4/3 overflow-hidden bg-muted">
        <img
          src={p.image}
          alt={p.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
        />
        <div className="absolute left-3 top-3 max-w-[calc(100%-1.5rem)] truncate rounded-full bg-white/95 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.14em] text-[#0B2D6B] backdrop-blur sm:left-4 sm:top-4 sm:px-3 sm:text-[10px] sm:tracking-[0.18em]">
          {p.category}
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-4 sm:p-5 lg:p-6">
        {/* From sm: up the grid is multi-column, so each block reserves a min-height
            to keep the footer on a shared baseline across a row. On a single-column
            phone there is no neighbour to align to — the heights are left natural so
            nothing is clamped or padded out unnecessarily. */}
        <div className="flex items-start justify-between gap-3 sm:min-h-14">
          <h2 className="font-display text-base font-bold leading-snug text-[#0B2D6B] sm:line-clamp-2 sm:text-lg lg:text-xl">
            <Link to="/products/$slug" params={{ slug: p.slug }} className="transition hover:text-[#0A6A38]">
              {p.name}
            </Link>
          </h2>
          {p.eco && (
            <div className="shrink-0">
              <RecycleBadge tone="light" />
            </div>
          )}
        </div>

        <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:line-clamp-3 sm:min-h-15.75">
          {p.short}
        </p>

        <div className="mt-4">
          <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#0B2D6B]">
            Applications
          </div>
          <div className="mt-2 flex flex-wrap content-start gap-1.5 sm:min-h-14">
            {p.applications.map((a) => (
              <span
                key={a}
                className="inline-flex h-6 items-center rounded-full border border-[#0A6A38]/20 bg-[#0A6A38]/6 px-2.5 text-[11px] font-medium text-[#0A6A38]"
              >
                {a}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-auto pt-4 sm:pt-5">
          <Link
            to="/products/$slug"
            params={{ slug: p.slug }}
            className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-[#0B2D6B] px-5 text-sm font-semibold text-white transition hover:bg-[#0A6A38] active:scale-[0.98]"
          >
            View Details
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </article>
  );
}

/** Column count of the card grid, mirroring the sm:/lg: breakpoints on the grid itself.
 *  Used only to stagger the reveal animation across a row. */
function useGridColumns() {
  const [columns, setColumns] = useState(1);

  useEffect(() => {
    if (typeof window.matchMedia !== "function") return;
    const sm = window.matchMedia("(min-width: 40rem)");
    const lg = window.matchMedia("(min-width: 64rem)");
    const sync = () => setColumns(lg.matches ? 3 : sm.matches ? 2 : 1);
    sync();
    sm.addEventListener("change", sync);
    lg.addEventListener("change", sync);
    return () => {
      sm.removeEventListener("change", sync);
      lg.removeEventListener("change", sync);
    };
  }, []);

  return columns;
}

function ProductsPage() {
  const columns = useGridColumns();

  return (
    <PageShell>
      <PageHero
        eyebrow="Product Catalogue"
        title={<>Industrial packaging,<br /> engineered to specification.</>}
        intro="A complete portfolio in 100% recyclable polypropylene — from breathable woven sacks and leno mesh produce bags to BOPP laminated retail carriers."
        image={productWoven}
        crumbs={[{ label: "Home", to: "/" }, { label: "Products" }]}
      />

      <section className="bg-background py-10 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
            {PRODUCTS.map((p, i) => (
              <ProductCard key={p.slug} p={p} i={i} columns={columns} />
            ))}
          </div>

          {/* Closing CTA */}
          <div className="mt-12 rounded-2xl border border-border bg-card p-6 text-center sm:mt-20 sm:p-12">
            <h2 className="font-display text-xl font-bold text-[#0B2D6B] sm:text-3xl">
              Need a bag built to your specification?
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Every line above is made to order — size, GSM, weave, lamination and print are all yours to
              define. Send us your requirement and we will quote against it.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
              <Link
                to="/quote"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[14px] bg-[linear-gradient(135deg,#F4C542_0%,#D9A520_50%,#B8860B_100%)] px-6 text-sm font-semibold text-white shadow-[0_12px_30px_-12px_rgba(217,165,32,0.55)] transition hover:brightness-110 active:scale-[0.98]"
              >
                Request a Quote <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-border bg-background px-6 text-sm font-semibold text-[#0B2D6B] transition hover:bg-muted active:scale-[0.98]"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

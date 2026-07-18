import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell } from "@/components/site/page-shell";
import { PRODUCTS, getProduct, type Product } from "@/lib/site-data";
import { ArrowRight, ArrowLeft, CircleCheck, ChevronRight } from "lucide-react";
import { RecycleBadge } from "@/components/site/recycle-badge";

export const Route = createFileRoute("/products_/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.product;
    if (!p) return {};
    const url = `https://northbengalpoly.com/products/${p.slug}`;
    const title = `${p.name} — PP Woven Bag Manufacturer Bangladesh | NBPPI`;
    return {
      meta: [
        { title },
        { name: "description", content: p.short },
        { property: "og:title", content: `${p.name} — NBPPI` },
        { property: "og:description", content: p.short },
        { property: "og:url", content: url },
        { property: "og:image", content: "https://northbengalpoly.com/og-image.jpg" },
        { property: "og:type", content: "product" },
        { property: "og:site_name", content: "NBPPI" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: `${p.name} — NBPPI` },
        { name: "twitter:description", content: p.short },
        { name: "twitter:image", content: "https://northbengalpoly.com/og-image.jpg" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: p.name,
            description: p.description,
            category: p.category,
            url,
            image: (p.gallery?.map((g) => g.src) ?? [p.image]).map(
              (src) => new URL(src, "https://northbengalpoly.com").href
            ),
            brand: { "@type": "Brand", name: "NBPPI" },
            manufacturer: {
              "@type": "Organization",
              name: "North Bengal Poly & Packaging Industries Ltd.",
              url: "https://northbengalpoly.com",
            },
          }),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <PageShell>
      <section className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6 sm:py-32">
        <h1 className="font-display text-3xl font-bold text-[#0B2D6B]">Product not found</h1>
        <p className="mt-4 text-muted-foreground">
          We could not find that product. Browse the full catalogue instead.
        </p>
        <Link
          to="/products"
          className="mt-8 inline-flex items-center gap-2 rounded-[14px] bg-[linear-gradient(135deg,#F4C542_0%,#D9A520_50%,#B8860B_100%)] px-6 py-3 text-sm font-semibold text-white transition hover:brightness-110"
        >
          View all products <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </PageShell>
  ),
  component: ProductDetailPage,
});

/** Main image with a thumbnail strip beneath it. */
function Gallery({ p }: { p: Product }) {
  const shots = p.gallery?.length ? p.gallery : [{ src: p.image, alt: p.name }];
  const [active, setActive] = useState(0);
  const current = shots[active] ?? shots[0];

  return (
    <div>
      <div className="relative aspect-4/3 overflow-hidden rounded-2xl border border-border bg-muted shadow-(--shadow-card)">
        <img
          key={current.src}
          src={current.src}
          alt={current.alt}
          className="h-full w-full animate-[fade-in_0.35s_ease-out] object-cover"
        />
      </div>

      {shots.length > 1 && (
        <div className="mt-3 grid grid-cols-4 gap-2 sm:grid-cols-6 sm:gap-3" role="tablist" aria-label={`${p.name} images`}>
          {shots.map((shot, idx) => {
            const selected = idx === active;
            return (
              <button
                key={shot.src}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-label={shot.alt}
                title={shot.alt}
                onClick={() => setActive(idx)}
                className={`relative aspect-square overflow-hidden rounded-lg border-2 transition ${
                  selected
                    ? "border-[#0A6A38] ring-2 ring-[#0A6A38]/25"
                    : "border-border opacity-70 hover:opacity-100"
                }`}
              >
                <img src={shot.src} alt="" aria-hidden="true" loading="lazy" className="h-full w-full object-cover" />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

function SpecBlock({ label, items }: { label: string; items?: string[] }) {
  if (!items?.length) return null;
  return (
    <div className="rounded-xl border border-border bg-card p-5">
      <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0A6A38]">{label}</div>
      <ul className="mt-3 space-y-1.5">
        {items.map((it) => (
          <li key={it} className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground">
            <CircleCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#0A6A38]" /> {it}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProductDetailPage() {
  const { product } = Route.useLoaderData();
  const p = product as Product;
  const related = PRODUCTS.filter((x) => x.slug !== p.slug).slice(0, 3);

  return (
    <PageShell>
      {/* Breadcrumb */}
      <nav className="border-b border-border bg-[#F8F9FB]">
        <div className="mx-auto flex max-w-7xl items-center gap-2 px-4 py-4 text-xs uppercase tracking-[0.16em] text-muted-foreground sm:px-6">
          <Link to="/" className="transition hover:text-[#0B2D6B]">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <Link to="/products" className="transition hover:text-[#0B2D6B]">Products</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="truncate text-[#0B2D6B]">{p.name}</span>
        </div>
      </nav>

      {/* Gallery + summary */}
      <section className="bg-background py-10 sm:py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
            <Gallery p={p} />

            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex rounded-full bg-[#0A6A38]/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#0A6A38]">
                  {p.category}
                </span>
                {p.eco && <RecycleBadge tone="light" />}
              </div>

              <h1 className="mt-4 font-display text-3xl font-bold leading-tight text-[#0B2D6B] md:text-4xl">
                {p.name}
              </h1>

              <p className="mt-5 text-base leading-relaxed text-muted-foreground">{p.description}</p>

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

              <div className="mt-9 flex flex-wrap gap-3">
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
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="border-t border-border bg-[#F8F9FB] py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="font-display text-2xl font-bold text-[#0B2D6B] sm:text-3xl">Specifications</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Every dimension below is made to order — tell us your requirement and we will build to it.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <SpecBlock label="Available Sizes" items={p.sizes} />
            <SpecBlock label="Printing Options" items={p.printing} />
            <SpecBlock label="Lamination Options" items={p.lamination} />
            <SpecBlock label="Customization" items={p.customization} />
            <SpecBlock label="Sustainability" items={p.eco} />
          </div>
        </div>
      </section>

      {/* Related products */}
      <section className="bg-background py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-2xl font-bold text-[#0B2D6B] sm:text-3xl">Related products</h2>
            <Link
              to="/products"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-[#0B2D6B] hover:text-[#0A6A38]"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to catalogue
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {related.map((r) => (
              <Link
                key={r.slug}
                to="/products/$slug"
                params={{ slug: r.slug }}
                className="group overflow-hidden rounded-2xl border border-border bg-card transition hover:-translate-y-1 hover:shadow-(--shadow-elevated)"
              >
                <div className="relative aspect-4/3 overflow-hidden bg-muted">
                  <img
                    src={r.image}
                    alt={r.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
                  />
                  <div className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#0B2D6B] backdrop-blur">
                    {r.category}
                  </div>
                </div>
                <div className="p-5 sm:p-6">
                  <h3 className="font-display text-lg font-semibold text-[#0B2D6B] transition group-hover:text-[#0A6A38]">
                    {r.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.short}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}

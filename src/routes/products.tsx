import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/page-shell";
import { PageHero } from "@/components/site/page-hero";
import { PRODUCTS } from "@/lib/site-data";
import { ArrowRight, CircleCheck } from "lucide-react";
import productWoven from "@/assets/product-woven.jpg";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — NBPPI" },
      { name: "description", content: "PP woven, laminated, BOPP, lined and gusseted industrial packaging — engineered for agriculture, food, construction and export." },
      { property: "og:title", content: "Products — NBPPI" },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Product Catalogue"
        title={<>Industrial packaging,<br /> engineered to specification.</>}
        intro="A complete polypropylene woven packaging portfolio — from breathable agricultural sacks to premium BOPP retail bags and bespoke export programmes."
        image={productWoven}
        crumbs={[{ label: "Home", to: "/" }, { label: "Products" }]}
      />

      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl space-y-20 px-6">
          {PRODUCTS.map((p, i) => (
            <article
              key={p.slug}
              id={p.slug}
              className={`grid gap-12 lg:grid-cols-2 lg:items-center ${
                i % 2 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)]">
                <img src={p.image} alt={p.name} loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-[1.4s] hover:scale-105" />
              </div>
              <div>
                <div className="inline-flex rounded-full bg-[#0A6A38]/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#0A6A38]">
                  {p.category}
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
          ))}
        </div>
      </section>
    </PageShell>
  );
}
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
                <div className="inline-flex rounded-full bg-[#2A9D8F]/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#2A9D8F]">
                  {p.category}
                </div>
                <h2 className="mt-4 font-display text-3xl font-bold text-[#082B59] md:text-4xl">{p.name}</h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">{p.description}</p>
                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#082B59]">Applications</div>
                    <ul className="mt-3 space-y-2">
                      {p.applications.map((a) => (
                        <li key={a} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CircleCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#2A9D8F]" /> {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#082B59]">Key Features</div>
                    <ul className="mt-3 space-y-2">
                      {p.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CircleCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#2A9D8F]" /> {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-10 flex flex-wrap gap-3">
                  <Link
                    to="/quote"
                    className="inline-flex items-center gap-2 rounded-md bg-[#082B59] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#145DA0]"
                  >
                    Request Quote <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-6 py-3 text-sm font-semibold text-[#082B59] transition hover:bg-muted"
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
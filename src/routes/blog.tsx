import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/page-shell";
import { PageHero } from "@/components/site/page-hero";
import factoryAerial from "@/assets/factory-aerial.jpg";
import productBopp from "@/assets/product-bopp.jpg";
import qualityLab from "@/assets/quality-lab.jpg";
import warehouseImg from "@/assets/warehouse.jpg";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "PP Packaging Industry Insights & News — NBPPI Blog" },
      { name: "description", content: "Expert insights on polypropylene woven bag manufacturing, BOPP lamination trends, circular economy packaging, export logistics and quality standards — from NBPPI's production team in Bangladesh." },
      { property: "og:title", content: "News & Insights — NBPPI Blog" },
      { property: "og:description", content: "Manufacturing updates, sustainability progress, BOPP trends and export logistics insights from the NBPPI production team in Bangladesh." },
      { property: "og:url", content: "https://nbppi.com/blog" },
      { property: "og:image", content: "https://nbppi.com/og-image.jpg" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "NBPPI" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "PP Packaging Industry Insights & News — NBPPI Blog" },
      { name: "twitter:description", content: "Expert insights on PP woven bag manufacturing, BOPP trends, circular economy packaging and export logistics from Bangladesh." },
      { name: "twitter:image", content: "https://nbppi.com/og-image.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://nbppi.com/blog" }],
  }),
  component: BlogPage,
});

const POSTS = [
  { t: "Inside NBPPI's new circular-economy line", c: "Sustainability", d: "Jun 24, 2026", img: factoryAerial, desc: "How our mono-material PP programme is reshaping recyclable industrial packaging across South Asia.", slug: "/blog/circular-economy" },
  { t: "Why BOPP lamination is winning premium retail", c: "Insights", d: "Jun 02, 2026", img: productBopp, desc: "From rice to pet food — premium brands are turning to BOPP-laminated woven bags for shelf-grade graphics.", slug: "/blog/bopp-lamination" },
  { t: "Inside the NBPPI quality laboratory", c: "Manufacturing", d: "May 18, 2026", img: qualityLab, desc: "A tour through our in-house testing protocols: tensile, GSM, burst, moisture and print accuracy.", slug: "/blog/quality-laboratory" },
  { t: "Scaling export logistics in 2026", c: "Operations", d: "Apr 30, 2026", img: warehouseImg, desc: "How NBPPI is reducing FCL turnaround times across 22+ export markets.", slug: "/blog/export-logistics" },
];

function BlogPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="News & Insights"
        title={<>Stories from inside the factory.</>}
        intro="Manufacturing updates, sustainability progress and industry analysis from the NBPPI team."
        image={factoryAerial}
        crumbs={[{ label: "Home", to: "/" }, { label: "Blog" }]}
      />
      <section className="bg-background py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2">
          {POSTS.map((p, i) => (
            <Link
              to={p.slug}
              key={p.t}
              className={`group overflow-hidden rounded-2xl border border-border bg-card transition hover:-translate-y-1 hover:shadow-(--shadow-elevated) ${
                i === 0 ? "md:col-span-2" : ""
              }`}
            >
              <div className="grid md:grid-cols-2">
                <div className="relative aspect-4/3 overflow-hidden bg-muted md:aspect-auto">
                  <img src={p.img} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-110" />
                </div>
                <div className="flex flex-col justify-between p-8">
                  <div>
                    <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#0A6A38]">
                      <span>{p.c}</span>
                      <span className="h-1 w-1 rounded-full bg-muted-foreground/40" />
                      <span className="text-muted-foreground">{p.d}</span>
                    </div>
                    <h2 className="mt-4 font-display text-2xl font-bold text-[#0B2D6B]">{p.t}</h2>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                  </div>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#0B2D6B] transition group-hover:text-[#0A6A38]">
                    Read article <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
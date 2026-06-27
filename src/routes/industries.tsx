import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/page-shell";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import industryAgri from "@/assets/industry-agri.jpg";
import industryCement from "@/assets/industry-cement.jpg";
import industryExport from "@/assets/industry-export.jpg";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries We Serve — NBPPI" },
      { name: "description", content: "Polypropylene packaging engineered for agriculture, food, construction, chemical, feed, retail and export industries." },
      { property: "og:title", content: "Industries We Serve — NBPPI" },
      { property: "og:url", content: "/industries" },
    ],
    links: [{ rel: "canonical", href: "/industries" }],
  }),
  component: IndustriesPage,
});

const ROWS = [
  { t: "Feed Manufacturers", d: "Custom printed PP woven bags for poultry, fish and cattle feed producers — branded, durable and engineered for high-turnover mills.", image: industryAgri, tags: ["Poultry Feed", "Fish Feed", "Cattle Feed", "Feed Mills"] },
  { t: "Agriculture, Rice & Flour Mills", d: "Breathable plain bags, lined food-grade bags and premium BOPP packaging for rice mills, flour mills, seed companies and produce traders.", image: industryExport, tags: ["Rice Mills", "Flour Mills", "Seed Companies", "Vegetables"] },
  { t: "Fertilizer & Industrial Packaging", d: "Laminated and lined woven bags for fertilizer suppliers, food processors and industrial OEMs requiring consistent bulk packaging.", image: industryCement, tags: ["Fertilizer", "Food Processing", "Industrial", "OEM Bulk"] },
];

function IndustriesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Industries We Serve"
        title={<>Packaging power for every supply chain.</>}
        intro="NBPPI engineers polypropylene woven packaging for some of the most demanding industries in Bangladesh and the export economy."
        image={industryAgri}
        crumbs={[{ label: "Home", to: "/" }, { label: "Industries" }]}
      />

      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl space-y-20 px-6">
          {ROWS.map((r, i) => (
            <div key={r.t} className={`grid gap-12 lg:grid-cols-2 lg:items-center ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
              <div className="overflow-hidden rounded-2xl shadow-[var(--shadow-card)]">
                <img src={r.image} alt="" loading="lazy" className="aspect-[4/3] w-full object-cover" />
              </div>
              <div>
                <SectionHeading eyebrow={`Sector ${String(i + 1).padStart(2, "0")}`} title={r.t} intro={r.d} />
                <div className="mt-6 flex flex-wrap gap-2">
                  {r.tags.map((t) => (
                    <span key={t} className="rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-[#0B2D6B]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
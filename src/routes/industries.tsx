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
  { t: "Agriculture & Food Processing", d: "From breathable potato sacks to food-grade lined bags for rice, flour, sugar and salt — built around the regulatory standards of premium agri-food brands.", image: industryAgri, tags: ["Rice Mills", "Flour Mills", "Vegetables", "Grain"] },
  { t: "Construction & Chemical", d: "UV-stabilised laminated sacks for cement, sand, fertilizer and bulk minerals — engineered for outdoor stockpiling and rough handling.", image: industryCement, tags: ["Cement", "Fertilizer", "Minerals", "Powders"] },
  { t: "Export & Retail Programs", d: "Premium BOPP printed bags, FIBC and container liners shipped to 22+ countries via FCL/LCL logistics partners.", image: industryExport, tags: ["Premium Rice", "Pet Food", "Seed", "Export"] },
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
                    <span key={t} className="rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-[#082B59]">
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
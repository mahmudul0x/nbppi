import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/page-shell";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import industryAgri from "@/assets/industry-agri.jpg";
import industryCement from "@/assets/industry-cement.jpg";
import industryExport from "@/assets/industry-export.jpg";
import factoryAerial from "@/assets/factory-aerial.jpg";
import warehouse from "@/assets/warehouse.jpg";
import productWoven from "@/assets/product-woven.jpg";
import productBopp from "@/assets/product-bopp.jpg";
import weaving from "@/assets/weaving.jpg";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries We Serve — NBPPI" },
      { name: "description", content: "Polypropylene packaging engineered for agriculture, food, construction, chemical, feed, retail and export industries." },
      { property: "og:title", content: "Industries We Serve — NBPPI PP Packaging" },
      { property: "og:description", content: "PP woven packaging for 9 industries — feed mills, agriculture, fertilizer, construction, retail, export, food processing, industrial and aquaculture sectors." },
      { property: "og:url", content: "https://northbengalpoly.com/industries" },
      { property: "og:image", content: "https://northbengalpoly.com/og-image.jpg" },
      { property: "og:site_name", content: "NBPPI" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Industries We Serve — NBPPI PP Packaging" },
      { name: "twitter:description", content: "Feed, agriculture, fertilizer, construction, retail, export, food processing, industrial and aquaculture — PP packaging for 9 industries." },
      { name: "twitter:image", content: "https://northbengalpoly.com/og-image.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://northbengalpoly.com/industries" }],
  }),
  component: IndustriesPage,
});

const INDUSTRIES = [
  {
    t: "Feed Manufacturers",
    d: "Custom printed PP woven bags for poultry, fish and cattle feed producers — branded, durable and engineered for high-turnover mills. Our bags handle 25–50 kg fills, withstand automated filling lines, and maintain brand consistency across large print runs.",
    image: industryAgri,
    tags: ["Poultry Feed", "Fish Feed", "Cattle Feed", "Feed Mills"],
    products: ["Printed PP Woven Bags", "Laminated Bags", "Gusseted Bags"],
    detail: "Feed manufacturers demand bags that survive automated filling, stacking, and warehouse handling — while keeping branding sharp across millions of units. Our 8-color flexo printing and reinforced seam stitching are specified by major feed mills across Bangladesh.",
  },
  {
    t: "Agriculture, Rice & Flour Mills",
    d: "Breathable plain bags, lined food-grade bags and premium BOPP packaging for rice mills, flour mills, seed companies and produce traders. We support everything from 5 kg retail bags to 50 kg bulk commodity sacks.",
    image: industryExport,
    tags: ["Rice Mills", "Flour Mills", "Seed Companies", "Vegetables", "Spices"],
    products: ["BOPP Laminated Bags", "Plain PP Woven Bags", "PP Bags with Inner Liners"],
    detail: "Rice and flour mills need packaging that preserves product integrity, communicates brand quality at retail, and handles long supply chains. Our BOPP-laminated bags deliver photo-grade shelf presence; our breathable plain bags are trusted for long-duration grain storage.",
  },
  {
    t: "Fertilizer & Chemical Industry",
    d: "Laminated and lined woven bags for fertilizer suppliers, agrochemical producers and chemical manufacturers requiring UV-resistant, moisture-proof packaging that meets international safety markings.",
    image: industryCement,
    tags: ["Fertilizer", "Agrochemicals", "Industrial Chemicals", "Micronutrients"],
    products: ["Laminated PP Woven Bags", "PP Bags with Inner PE Liners", "Plain PP Woven Bags"],
    detail: "Fertilizer and chemical packaging must resist UV degradation, moisture ingress, and mechanical stress during bulk logistics. Our laminated bags with PE inner liners provide dual-layer protection — keeping product dry and reducing contamination risk across extended storage periods.",
  },
  {
    t: "Construction & Cement",
    d: "Heavy-duty woven PP bags for cement producers, construction material companies, sand suppliers and building product manufacturers. Engineered for pallet loads, forklift handling and outdoor storage.",
    image: factoryAerial,
    tags: ["Cement", "Sand & Aggregate", "Plaster", "Building Materials", "Lime"],
    products: ["Plain PP Woven Bags", "Laminated Bags", "Gusseted Bags"],
    detail: "Construction materials packaging must withstand rough handling, outdoor exposure, and high fill weights. Our heavy-duty woven PP bags — with fabric weights up to 120 GSM and reinforced bottom seams — are trusted by cement producers across Bangladesh and export markets.",
  },
  {
    t: "Retail & Consumer Brands",
    d: "Premium BOPP-laminated bags and high-graphics flexo-printed packaging for consumer brands in food, pet care, home products and specialty retail. Shelf-ready packaging with brand-accurate colour reproduction.",
    image: productBopp,
    tags: ["Pet Food", "Retail Food", "Home Products", "Specialty Retail", "E-commerce"],
    products: ["BOPP Laminated Bags", "Printed PP Woven Bags"],
    detail: "Retail brands require packaging that sells on the shelf — with accurate brand colours, high-resolution imagery, and surface finishes that communicate premium quality. Our BOPP laminated line delivers rotogravure-quality graphics on woven PP substrates, from 1 kg retail packs to 25 kg premium bags.",
  },
  {
    t: "Export & International Trade",
    d: "Compliant, documentation-ready packaging for exporters across South Asia, the Middle East, Africa and Europe. Full export documentation, pre-shipment inspection, and FCL/LCL logistics support included.",
    image: warehouse,
    tags: ["Export Markets", "International Buyers", "Trading Companies", "Import/Export"],
    products: ["All Product Lines", "Custom Export Specification"],
    detail: "International buyers have specific compliance, documentation and specification requirements. Our export team handles ERC, EPB and certificate of origin documentation, coordinates pre-shipment inspections, and supports both LC and open account payment terms — across 22+ active export markets.",
  },
  {
    t: "Food Processing & Packaging",
    d: "Food-grade PP packaging with PE inner liners for processed food manufacturers, dairy, confectionery and food ingredient companies. Full food-contact material declarations available.",
    image: weaving,
    tags: ["Processed Food", "Dairy", "Confectionery", "Food Ingredients", "Spice Mills"],
    products: ["PP Bags with Inner PE Liners", "BOPP Laminated Bags", "Printed PP Woven Bags"],
    detail: "Food packaging requires material declarations, food-contact compliance, and hygienic production environments. Our food-grade lines use virgin PP granules, food-safe PE inner liners, and water-based inks — with full material traceability and food-contact compliance documentation available on request.",
  },
  {
    t: "Industrial & B2B Manufacturing",
    d: "Bulk industrial packaging for OEM manufacturers, component suppliers, raw material distributors and industrial logistics companies requiring unbranded, high-volume, cost-efficient woven bags.",
    image: productWoven,
    tags: ["OEM", "Bulk Industrial", "Raw Materials", "Component Distribution"],
    products: ["Plain PP Woven Bags", "Laminated Bags", "Gusseted Bags"],
    detail: "Industrial buyers prioritise volume, consistency and cost efficiency. Our plain and minimally branded PP woven bags are produced in high-volume runs with consistent GSM, dimensional accuracy, and seam strength — with full batch documentation and AQL 2.5 pre-shipment inspection as standard.",
  },
  {
    t: "Aquaculture & Fisheries",
    d: "Moisture-resistant, printed woven bags for fish feed producers, aquaculture suppliers and seafood processors. Bags engineered to perform in high-humidity coastal and processing environments.",
    image: industryAgri,
    tags: ["Fish Feed", "Aquaculture", "Seafood Processing", "Shrimp Feed"],
    products: ["Laminated PP Woven Bags", "PP Bags with Inner PE Liners", "Printed PP Woven Bags"],
    detail: "Aquaculture environments are demanding — high humidity, salt air, and rough handling combine to challenge packaging integrity. Our laminated woven bags with moisture-resistant coatings are widely used by fish feed producers and shrimp feed manufacturers across the coastal belt of Bangladesh.",
  },
];

function IndustriesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Industries We Serve"
        title={<>Packaging power for every supply chain.</>}
        intro="NBPPI engineers polypropylene woven packaging for 9 distinct industries — from feed mills and rice brands to cement producers, chemical manufacturers and international exporters."
        image={industryAgri}
        crumbs={[{ label: "Home", to: "/" }, { label: "Industries" }]}
      />

      {/* Industry count strip */}
      <div className="border-b border-border bg-white py-6">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 sm:px-6">
          <div className="flex flex-wrap gap-2">
            {INDUSTRIES.map((ind) => (
              <a
                key={ind.t}
                href={`#${ind.t.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                className="rounded-full border border-border px-3 py-1 text-xs font-medium text-[#0B2D6B] transition hover:border-[#0B2D6B] hover:bg-[#0B2D6B]/5"
              >
                {ind.t}
              </a>
            ))}
          </div>
          <Link to="/quote" className="inline-flex items-center gap-2 text-sm font-semibold text-[#0A6A38] hover:underline">
            Request Quote <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Industries list */}
      <section className="bg-background py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl space-y-20 px-4 sm:px-6">
          {INDUSTRIES.map((r, i) => (
            <div
              id={r.t.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
              key={r.t}
              className={`grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16 ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}
            >
              {/* Image */}
              <div className="overflow-hidden rounded-2xl shadow-(--shadow-card)">
                <img src={r.image} alt={r.t} loading="lazy" className="aspect-4/3 w-full object-cover transition-transform duration-700 hover:scale-105" />
              </div>

              {/* Content */}
              <div>
                <div className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#0A6A38]">
                  Sector {String(i + 1).padStart(2, "0")}
                </div>
                <h2 className="mt-3 font-display text-2xl font-bold text-[#0B2D6B] sm:text-3xl">{r.t}</h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">{r.detail}</p>

                {/* Tags */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {r.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-border bg-[#F8F9FB] px-3 py-1 text-xs font-medium text-[#0B2D6B]">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Products */}
                <div className="mt-5 rounded-xl border border-border bg-[#F8F9FB] px-5 py-4">
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Recommended Products</div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {r.products.map((p) => (
                      <span key={p} className="flex items-center gap-1.5 text-xs font-semibold text-[#0B2D6B]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#0A6A38]" />
                        {p}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  to="/quote"
                  className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#0B2D6B] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#0A6A38]"
                >
                  Get a Quote for {r.t} <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA strip */}
      <section className="bg-[#07204E] py-14 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <div className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#7FE0D4]">Not sure which product fits?</div>
          <h2 className="mt-4 font-display text-2xl font-bold text-white sm:text-3xl">
            Talk to our technical team.
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-base text-white/55">
            Describe your product, fill weight and destination — we'll recommend the right bag specification within 24 hours.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/quote" className="inline-flex items-center gap-2 rounded-xl bg-[#0A6A38] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#22887b]">
              Request Quote <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/8 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/15">
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

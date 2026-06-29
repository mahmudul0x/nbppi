import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/page-shell";
import factoryAerial from "@/assets/factory-aerial.jpg";
import industryAgri from "@/assets/industry-agri.jpg";
import industryExport from "@/assets/industry-export.jpg";
import industryCement from "@/assets/industry-cement.jpg";
import productBopp from "@/assets/product-bopp.jpg";
import warehouse from "@/assets/warehouse.jpg";
import { ArrowRight, TrendingUp, CheckCircle } from "lucide-react";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies — NBPPI" },
      { name: "description", content: "How NBPPI solves real packaging challenges for feed mills, rice exporters, cement manufacturers and international buyers." },
      { property: "og:title", content: "Client Case Studies — NBPPI Packaging Solutions" },
      { property: "og:description", content: "Real results: Aman Feed scaled 3×, Golden Harvest won UK retail, Gulf Construction achieved zero complaints across 18 containers. See how NBPPI solves packaging challenges." },
      { property: "og:url", content: "https://nbppi.com/case-studies" },
      { property: "og:image", content: "https://nbppi.com/og-image.jpg" },
      { property: "og:site_name", content: "NBPPI" },
    ],
    links: [{ rel: "canonical", href: "https://nbppi.com/case-studies" }],
  }),
  component: CaseStudiesPage,
});

const CASES = [
  {
    id: "aman-feed",
    image: industryAgri,
    industry: "Feed Manufacturing",
    client: "Aman Feed Ltd.",
    location: "Dhaka, Bangladesh",
    title: "Scaling from 3 to 12 containers per quarter — without a single quality deviation",
    challenge: "Aman Feed needed to triple packaging volume within 18 months as they expanded production capacity. Their previous supplier could not maintain consistent GSM and print registration at higher volumes, causing brand inconsistency across retail shelves.",
    solution: "NBPPI implemented a dedicated production line allocation for Aman Feed orders, with a standardised quality checkpoint protocol including spectrophotometer ΔE verification on every print batch. Pre-production samples were approved by Aman's QC team before each run.",
    results: [
      { metric: "Volume scaled", value: "3× growth in 18 months" },
      { metric: "Quality deviation rate", value: "0% across all batches" },
      { metric: "Print ΔE consistency", value: "≤ 1.2 on brand colors" },
      { metric: "Relationship duration", value: "10+ years active" },
    ],
    quote: "NBPPI's ability to scale with us while maintaining print accuracy is what made our retail expansion possible.",
    quoteName: "Md. Rafiqul Islam, Head of Procurement",
  },
  {
    id: "golden-harvest",
    image: productBopp,
    industry: "Rice Export",
    client: "Golden Harvest Agro",
    location: "Narayanganj, Bangladesh",
    title: "Winning the UK retail shelf with BOPP packaging — competing with Thai and Indian product",
    challenge: "Golden Harvest was losing ground to Thai and Indian rice competitors in the UK Asian grocery market. Their plain flexo-printed bags looked dated compared to competitors' photo-grade packaging. They needed premium shelf presence without significantly increasing packaging cost.",
    solution: "NBPPI developed a custom BOPP laminated bag specification for Golden Harvest's premium aromatic rice lines — with gloss surface finish, 10-colour rotogravure film printing, and Pantone-matched brand colours. Production samples were submitted to the UK distributor for approval before full-scale production.",
    results: [
      { metric: "UK distributor feedback", value: "'Now competitive with Thai product'" },
      { metric: "Retail price premium", value: "+12% achieved post-repackaging" },
      { metric: "Export markets", value: "UK, UAE, Malaysia" },
      { metric: "BOPP bag reorder rate", value: "100% — all SKUs retained" },
    ],
    quote: "Our UK distributor told us for the first time that our packaging was competitive with Thai product. That's not a small thing.",
    quoteName: "S.M. Tanvir Ahmed, Export Manager",
  },
  {
    id: "gulf-construction",
    image: industryCement,
    industry: "Cement & Construction",
    client: "Gulf Construction Supplies",
    location: "UAE",
    title: "18 container shipments, zero quality complaints — packaging reliability for a GCC construction materials buyer",
    challenge: "Gulf Construction Supplies required heavy-duty PP woven bags for cement and construction material distribution across the UAE and Saudi Arabia. Previous suppliers had issues with inconsistent seam strength and dimensional variance, leading to bag failures under forklift handling.",
    solution: "NBPPI supplied 120 GSM heavy-duty plain woven bags with reinforced bottom seams, dimensional tolerances of ±5mm, and AQL 2.5 pre-shipment inspection on every container. Tensile test certificates were provided with each shipment.",
    results: [
      { metric: "Container shipments", value: "18 FCL to date" },
      { metric: "Quality complaints", value: "0 across all shipments" },
      { metric: "Seam failure rate", value: "< 0.01% (industry avg: 0.3%)" },
      { metric: "Reorder frequency", value: "Monthly standing order" },
    ],
    quote: "Zero quality complaints across 18 container shipments. For a cement manufacturer, packaging failure means product failure — NBPPI understands that.",
    quoteName: "Khalid Al-Rashidi, Supply Chain Director",
  },
  {
    id: "west-africa-trading",
    image: warehouse,
    industry: "International Trade",
    client: "West Africa Trading Co.",
    location: "Nigeria",
    title: "Reducing LC discrepancy rate from 8% to under 1% — documentation excellence for West Africa exports",
    challenge: "West Africa Trading Co. was experiencing an 8% letter of credit discrepancy rate with their previous Bangladesh supplier, causing payment delays of 30–45 days per shipment and significant administrative cost. The root cause was inconsistent export documentation — incorrect packing list formats, wrong HS codes, and missing certificate of origin details.",
    solution: "NBPPI assigned a dedicated export documentation coordinator to the West Africa Trading account. A documentation checklist aligned to Nigerian import requirements was developed and applied from order confirmation. All LC documents are now reviewed against LC terms 7 days before container stuffing.",
    results: [
      { metric: "LC discrepancy rate", value: "8% → < 1%" },
      { metric: "Payment delay reduction", value: "30–45 days → < 5 days" },
      { metric: "Active SKUs supplied", value: "14 product configurations" },
      { metric: "Annual shipment volume", value: "8 FCL per year" },
    ],
    quote: "Our LC discrepancy rate dropped from 8% to under 1%. That alone saves us more than the price difference.",
    quoteName: "Amara Diallo, Procurement Manager",
  },
  {
    id: "bengal-foods",
    image: factoryAerial,
    industry: "Food Processing",
    client: "Bengal Foods Processing",
    location: "Chittagong, Bangladesh",
    title: "First-run approval on food-grade PE-lined bags — meeting MVTR and food-contact compliance for processed food export",
    challenge: "Bengal Foods Processing needed custom food-grade PP woven bags with PE inner liners for their processed food export range. They required a specific MVTR performance, food-contact material declarations, and compliance with EU food packaging regulations — a specification their previous supplier could not meet.",
    solution: "NBPPI's technical team developed a custom specification using virgin PP fabric and food-grade PE liner, with MVTR testing conducted in-house and third-party food-contact compliance documentation sourced from material suppliers. Pre-production samples were submitted with full test reports and material declarations.",
    results: [
      { metric: "Specification approval", value: "First-run — no revision required" },
      { metric: "MVTR achieved", value: "≤ 3.2 g/m²/day (target: ≤ 4)" },
      { metric: "Compliance documents", value: "Food-contact declaration + MVTR cert" },
      { metric: "Export markets enabled", value: "EU, UK, Middle East" },
    ],
    quote: "NBPPI's technical team hit every target on the first production run. For food export compliance, that saves months.",
    quoteName: "Nurul Huda, Operations Director",
  },
];

function CaseStudiesPage() {
  return (
    <PageShell>
      {/* Hero */}
      <div className="relative overflow-hidden bg-[#0B2D6B] py-14 text-white sm:py-20 lg:py-24">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6">
          <div className="flex items-center gap-2 text-xs text-white/50">
            <Link to="/" className="hover:text-white/80">Home</Link>
            <span>/</span>
            <span className="text-white/80">Case Studies</span>
          </div>
          <div className="mt-6">
            <div className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#7FE0D4]">Client Success Stories</div>
            <h1 className="mt-3 font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Real challenges.<br className="hidden sm:block" /> Measurable results.
            </h1>
            <p className="mt-4 max-w-xl text-base text-white/65">
              From feed mills scaling 3× to export buyers eliminating LC discrepancies — how NBPPI solves real packaging problems for real businesses.
            </p>
          </div>
          {/* Stats */}
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { v: "150+", l: "Active Clients" },
              { v: "22+", l: "Export Markets" },
              { v: "10 yrs", l: "Avg. Relationship" },
              { v: "0.01%", l: "Defect Rate" },
            ].map(({ v, l }) => (
              <div key={l} className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
                <div className="font-display text-2xl font-black text-[#7FE0D4] sm:text-3xl">{v}</div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.18em] text-white/45">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Case studies */}
      <section className="bg-[#F1F4F9] py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-5xl space-y-10 px-4 sm:px-6">
          {CASES.map((c, i) => (
            <div
              key={c.id}
              className="overflow-hidden rounded-2xl border border-border bg-white shadow-[0_4px_24px_-8px_rgba(11,45,107,0.08)]"
            >
              {/* Image + header */}
              <div className="grid lg:grid-cols-[380px_1fr]">
                <div className="relative h-56 overflow-hidden lg:h-auto">
                  <img src={c.image} alt={c.client} className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-linear-to-t from-[#07204E]/80 via-transparent to-transparent lg:bg-linear-to-r" />
                  <div className="absolute bottom-4 left-4 lg:bottom-auto lg:top-4">
                    <span className="rounded-full bg-[#0A6A38] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white">
                      {c.industry}
                    </span>
                  </div>
                </div>
                <div className="p-7 sm:p-8">
                  <div className="text-xs font-semibold text-muted-foreground">{c.client} · {c.location}</div>
                  <h2 className="mt-2 font-display text-lg font-bold leading-snug text-[#0B2D6B] sm:text-xl">{c.title}</h2>

                  <div className="mt-5 space-y-4">
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0B2D6B]">Challenge</div>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{c.challenge}</p>
                    </div>
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0A6A38]">Solution</div>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{c.solution}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Results */}
              <div className="border-t border-border bg-[#F8F9FB] px-7 py-6 sm:px-8">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-[#0A6A38]" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0A6A38]">Results</span>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {c.results.map(({ metric, value }) => (
                    <div key={metric} className="rounded-xl border border-border bg-white p-3">
                      <div className="font-display text-sm font-bold text-[#0B2D6B]">{value}</div>
                      <div className="mt-0.5 text-[10px] text-muted-foreground">{metric}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quote */}
              <div className="border-t border-border bg-[#0B2D6B] px-7 py-5 sm:px-8">
                <p className="text-sm italic leading-relaxed text-white/80">&ldquo;{c.quote}&rdquo;</p>
                <div className="mt-2 text-xs font-semibold text-[#7FE0D4]">— {c.quoteName}</div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mx-auto mt-12 max-w-5xl px-4 sm:px-6">
          <div className="overflow-hidden rounded-2xl bg-[#0B2D6B] p-8 sm:p-10">
            <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
              <div>
                <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#7FE0D4]">Work with us</div>
                <h3 className="mt-2 font-display text-xl font-bold text-white sm:text-2xl">
                  Ready to solve your packaging challenge?
                </h3>
                <p className="mt-2 text-sm text-white/55">
                  Tell us your product, volume and requirements — we'll respond with a tailored proposal in 24 hours.
                </p>
              </div>
              <div className="flex shrink-0 flex-wrap gap-3">
                <Link to="/quote" className="inline-flex items-center gap-2 rounded-xl bg-[#0A6A38] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#22887b]">
                  Request Quote <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/8 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/15">
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

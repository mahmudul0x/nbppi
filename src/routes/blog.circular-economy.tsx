import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/page-shell";
import factoryAerial from "@/assets/factory-aerial.jpg";
import warehouse from "@/assets/warehouse.jpg";
import { ArrowLeft, Clock, Calendar } from "lucide-react";

export const Route = createFileRoute("/blog/circular-economy")({
  head: () => ({
    meta: [
      { title: "Inside NBPPI's new circular-economy line — NBPPI Blog" },
      { name: "description", content: "How our mono-material PP programme is reshaping recyclable industrial packaging across South Asia." },
      { property: "og:title", content: "Inside NBPPI's new circular-economy line" },
      { property: "og:url", content: "/blog/circular-economy" },
    ],
    links: [{ rel: "canonical", href: "/blog/circular-economy" }],
  }),
  component: ArticlePage,
});

function ArticlePage() {
  return (
    <PageShell>
      {/* Hero */}
      <div className="relative h-[420px] overflow-hidden sm:h-[500px] lg:h-[560px]">
        <img src={factoryAerial} alt="NBPPI factory aerial" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-linear-to-t from-[#07204E]/90 via-[#07204E]/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 px-4 pb-10 sm:px-6">
          <div className="mx-auto max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#0A6A38] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-white">
              Sustainability
            </div>
            <h1 className="mt-4 font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Inside NBPPI's new circular-economy line
            </h1>
            <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-white/60">
              <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" /> Jun 24, 2026</span>
              <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> 6 min read</span>
              <span>By NBPPI Editorial Team</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <section className="bg-[#F1F4F9] py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-[#0B2D6B] hover:text-[#0A6A38]">
            <ArrowLeft className="h-4 w-4" /> Back to Blog
          </Link>

          <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-white shadow-[0_4px_24px_-8px_rgba(11,45,107,0.08)]">
            <div className="prose prose-slate max-w-none px-8 py-10 sm:px-12">

              <p className="lead text-lg font-medium text-[#0B2D6B]">
                How our mono-material PP programme is reshaping recyclable industrial packaging across South Asia — and why it matters for buyers, brands, and the planet.
              </p>

              <h2>The Problem with Mixed-Material Packaging</h2>
              <p>
                For decades, the industrial packaging industry relied on multi-layer laminated bags — PE liners bonded to woven PP fabric, BOPP films heat-sealed onto base cloth, and adhesive layers sandwiched between substrates. These combinations delivered excellent moisture resistance and print quality. But they came at a hidden cost: end-of-life recyclability.
              </p>
              <p>
                When a bag combines polypropylene, polyethylene, adhesives, and printed inks in permanently bonded layers, it becomes practically impossible to separate at a recycling facility. The result? Millions of tons of used industrial packaging going to landfill every year across Bangladesh, India, and the broader South Asian market.
              </p>

              <h2>NBPPI's Answer: The Mono-Material PP Programme</h2>
              <p>
                In early 2025, NBPPI's R&D team began a 12-month programme to redesign our laminated bag portfolio from the ground up — with one strict requirement: every layer of the final bag must be chemically compatible with PP recycling streams.
              </p>
              <p>
                The result is our new Circular PP Line — a range of bags that deliver the moisture protection, print quality, and structural performance of traditional laminated packaging, while using only polypropylene-compatible materials throughout.
              </p>

              <blockquote>
                <p>"We refused to accept that sustainability and performance were a trade-off. It took us fourteen months of material testing, but we got there."</p>
                <cite>— R&D Team Lead, NBPPI Manufacturing</cite>
              </blockquote>

              <h2>What Changed in the Production Process</h2>
              <p>Three key innovations made the circular line possible:</p>

              <h3>1. PP-Compatible Barrier Coatings</h3>
              <p>
                Traditional laminated bags use polyethylene (PE) as the moisture barrier — bonded permanently to the PP woven substrate. Our new process uses a specially formulated polypropylene-based coating that delivers equivalent moisture vapor transmission rates (MVTR) without introducing incompatible polymer layers. The coating is applied inline during the extrusion stage, eliminating a separate lamination step.
              </p>

              <h3>2. Water-Based Inks</h3>
              <p>
                Our eight-color flexographic printing line was retrofitted to use water-based ink systems that are fully compatible with PP recycling. Solvent-based inks — which previously contaminated recycling batches — have been eliminated from the circular line entirely. Print quality is maintained through higher-opacity pigment concentrations and improved anilox roll specifications.
              </p>

              <h3>3. Closed-Loop Trim Recovery</h3>
              <p>
                Cutting and stitching waste from the circular line — previously landfilled or downcycled — is now collected, re-granulated on-site, and reintroduced into the extrusion process as secondary raw material. Our pilot data shows a 94% recovery rate on production trim waste for the circular line.
              </p>

              <h2>Performance Data: Circular vs. Traditional</h2>
              <p>After 6 months of production trials with 4 major client accounts, here is what the data shows:</p>

              <div className="not-prose my-6 overflow-hidden rounded-xl border border-border">
                <table className="w-full text-sm">
                  <thead className="bg-[#0B2D6B] text-white">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold">Parameter</th>
                      <th className="px-4 py-3 text-left font-semibold">Traditional Laminated</th>
                      <th className="px-4 py-3 text-left font-semibold">Circular PP Line</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      ["GSM Range", "80–120 gsm", "80–120 gsm"],
                      ["Moisture Barrier (MVTR)", "≤ 3 g/m²/day", "≤ 4 g/m²/day"],
                      ["Burst Strength", "≥ 500 kPa", "≥ 480 kPa"],
                      ["Print Colors", "Up to 8", "Up to 8"],
                      ["End-of-Life Recyclability", "< 20% (mixed material)", "≥ 95% (mono-material PP)"],
                      ["Production Trim Recovery", "~40%", "~94%"],
                    ].map(([param, trad, circ]) => (
                      <tr key={param} className="hover:bg-[#F8F9FB]">
                        <td className="px-4 py-3 font-medium text-[#0B2D6B]">{param}</td>
                        <td className="px-4 py-3 text-muted-foreground">{trad}</td>
                        <td className="px-4 py-3 font-semibold text-[#0A6A38]">{circ}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2>Market Response</h2>
              <p>
                We launched the circular line to four pilot customers in Q1 2026 — a rice mill in Bogura, a poultry feed manufacturer in Mymensingh, an international export buyer in the UAE, and a fertilizer company in Narayanganj. All four renewed orders at higher volumes than their traditional laminated bag purchases.
              </p>
              <p>
                The UAE buyer specifically cited the circular PP certification as a requirement for accessing EU retail channels under new extended producer responsibility (EPR) regulations taking effect in 2027.
              </p>

              <h2>What This Means for Our Buyers</h2>
              <p>
                If you purchase packaging for export to Europe or markets with active EPR legislation, the circular PP line offers a direct compliance pathway. If you purchase for domestic markets, you get a performance-equivalent product with a measurably lower environmental footprint — at comparable pricing to our standard laminated range.
              </p>
              <p>
                Samples are available on request. Our technical team can provide a material declaration, MVTR test report, and recycling compatibility statement for buyer audits.
              </p>

            </div>
          </div>

          {/* CTA */}
          <div className="mt-8 rounded-2xl bg-[#0B2D6B] p-8">
            <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
              <div>
                <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#7FE0D4]">Interested?</div>
                <h3 className="mt-1 font-display text-lg font-bold text-white">Request a circular PP line sample.</h3>
                <p className="mt-1 text-sm text-white/55">We respond within 24 business hours.</p>
              </div>
              <Link to="/quote" className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-[#0A6A38] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#22887b]">
                Request Quote
              </Link>
            </div>
          </div>

          {/* Back */}
          <div className="mt-8">
            <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-[#0B2D6B] hover:text-[#0A6A38]">
              <ArrowLeft className="h-4 w-4" /> All Articles
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

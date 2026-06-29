import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/page-shell";
import warehouseImg from "@/assets/warehouse.jpg";
import { ArrowLeft, Clock, Calendar } from "lucide-react";

export const Route = createFileRoute("/blog/export-logistics")({
  head: () => ({
    meta: [
      { title: "Scaling export logistics in 2026 — NBPPI Blog" },
      { name: "description", content: "How NBPPI is reducing FCL turnaround times across 22+ export markets." },
      { property: "og:title", content: "Scaling export logistics in 2026" },
      { property: "og:description", content: "How NBPPI is reducing FCL turnaround times and improving export documentation across 22+ markets — from Chittagong port to GCC, Africa and Europe." },
      { property: "og:url", content: "https://nbppi.com/blog/export-logistics" },
      { property: "og:image", content: "https://nbppi.com/og-image.jpg" },
      { property: "og:type", content: "article" },
      { property: "og:site_name", content: "NBPPI" },
      { property: "article:published_time", content: "2026-04-30" },
      { property: "article:section", content: "Operations" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Scaling export logistics in 2026 — NBPPI" },
      { name: "twitter:description", content: "How NBPPI reduced FCL turnaround times and LC discrepancy rates across 22+ export markets including GCC, Africa and Europe." },
      { name: "twitter:image", content: "https://nbppi.com/og-image.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://nbppi.com/blog/export-logistics" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Scaling export logistics in 2026",
          description: "How NBPPI is reducing FCL turnaround times across 22+ export markets.",
          datePublished: "2026-04-30",
          dateModified: "2026-04-30",
          image: { "@type": "ImageObject", url: "https://nbppi.com/og-image.jpg", width: 1200, height: 630 },
          author: { "@type": "Person", name: "NBPPI Editorial Team", url: "https://nbppi.com/about" },
          publisher: { "@type": "Organization", name: "NBPPI", logo: { "@type": "ImageObject", url: "https://nbppi.com/logoWebsite.png" } },
          url: "https://nbppi.com/blog/export-logistics",
          articleSection: "Operations",
          keywords: "PP bag export Bangladesh, FCL shipping, export packaging, Chittagong port logistics",
        }),
      },
    ],
  }),
  component: ArticlePage,
});

function ArticlePage() {
  return (
    <PageShell>
      {/* Hero */}
      <div className="relative h-105 overflow-hidden sm:h-125 lg:h-140">
        <img src={warehouseImg} alt="NBPPI warehouse and export logistics" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-linear-to-t from-[#07204E]/90 via-[#07204E]/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 px-4 pb-10 sm:px-6">
          <div className="mx-auto max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#64748b] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-white">
              Operations
            </div>
            <h1 className="mt-4 font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Scaling export logistics in 2026
            </h1>
            <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-white/60">
              <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" /> Apr 30, 2026</span>
              <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> 5 min read</span>
              <span>By NBPPI Operations Team</span>
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
                How NBPPI is reducing FCL turnaround times and strengthening export reliability across 22+ markets — and what this means for international buyers placing orders in 2026.
              </p>

              <h2>The Export Logistics Challenge</h2>
              <p>
                Export packaging logistics involves more variables than domestic supply — port scheduling, freight forwarder coordination, documentation compliance across multiple jurisdictions, and the ever-present risk of container space volatility. For a manufacturer like NBPPI serving 22+ countries across three continents, managing these variables reliably is as important as product quality itself.
              </p>
              <p>
                In 2024 and 2025, global container freight markets experienced significant disruption — Red Sea routing changes, port congestion in major Asian hubs, and unpredictable space availability on key trade lanes. Our operations team used this period to systematically rebuild our export logistics playbook.
              </p>

              <h2>Three Changes That Reduced FCL Turnaround by 22%</h2>

              <h3>1. Pre-Booking Container Slots 45 Days Out</h3>
              <p>
                The single biggest change to our logistics process was shifting from reactive container booking (booking when goods are ready) to proactive slot reservation 45 days before planned shipping dates. This required closer integration between our production planning team and our freight forwarder network, but the result was a measurable reduction in post-production waiting time.
              </p>
              <p>
                For buyers, this means that orders confirmed with adequate lead time are far less likely to experience container space delays — a problem that affected multiple international shipments in 2023–2024.
              </p>

              <h3>2. Pre-Cleared Export Documentation</h3>
              <p>
                Our export team now prepares documentation packages — commercial invoice, packing list, certificate of origin, and any buyer-specific compliance documents — 7 days before the planned container stuffing date. This allows for buyer review and correction before the shipment is locked, rather than discovering discrepancies at the port.
              </p>
              <p>
                We've also standardised our LC documentation preparation to ensure that letter of credit terms are systematically checked against our production capacity and shipping timeline before order acceptance — reducing LC discrepancy rates to under 2%.
              </p>

              <h3>3. Dedicated Export Logistics Coordinator Per Market Region</h3>
              <p>
                In 2025, we restructured our export team to assign dedicated logistics coordinators to three regional clusters: South & Southeast Asia, Middle East & Africa, and Europe & Americas. Each coordinator maintains ongoing relationships with 3–4 freight forwarders in their region and monitors lane-specific freight conditions on a weekly basis.
              </p>
              <p>
                Buyers in each region now have a named contact point for all logistics queries — not a generic export team inbox.
              </p>

              <blockquote>
                <p>"We've been buying from NBPPI for three years. The difference in communication since they restructured their export team is significant — we know exactly where our container is, and problems get flagged to us before they become emergencies."</p>
                <cite>— Procurement Manager, Industrial Packaging Distributor, UAE</cite>
              </blockquote>

              <h2>Current Export Capabilities</h2>

              <div className="not-prose my-6 overflow-hidden rounded-xl border border-border">
                <table className="w-full text-sm">
                  <thead className="bg-[#0B2D6B] text-white">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold">Parameter</th>
                      <th className="px-4 py-3 text-left font-semibold">Details</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      ["Active export markets", "22+ countries"],
                      ["Monthly FCL capacity", "80–120 containers"],
                      ["LCL availability", "Yes — for orders < 1 full container"],
                      ["Lead time (new orders)", "15–25 working days from order confirmation"],
                      ["Lead time (repeat orders)", "10–18 working days"],
                      ["LC acceptance", "Yes — all major issuing banks"],
                      ["Open account terms", "Available for established buyers (credit approved)"],
                      ["Documentation turnaround", "Within 48 hours of container loading"],
                      ["Pre-shipment inspection", "Third-party available on request"],
                    ].map(([param, detail]) => (
                      <tr key={param} className="hover:bg-[#F8F9FB]">
                        <td className="px-4 py-3 font-medium text-[#0B2D6B]">{param}</td>
                        <td className="px-4 py-3 text-muted-foreground">{detail}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2>What International Buyers Should Know for 2026</h2>
              <p>
                Freight rates on key Bangladesh export lanes remain elevated relative to pre-2022 levels, though they have stabilised compared to the 2021–2023 peak. We strongly recommend that buyers planning large import programmes (3+ containers per quarter) establish a 60-day forward planning horizon with us to enable container pre-booking.
              </p>
              <p>
                For buyers new to importing from Bangladesh, our export team provides a first-shipment guidance document covering: Bangladesh export procedures, typical documentation requirements, port of loading options (Chittagong, Mongla), and recommended freight forwarder contacts in major destination markets.
              </p>
              <p>
                Contact our export team to discuss your 2026 sourcing programme.
              </p>

            </div>
          </div>

          {/* CTA */}
          <div className="mt-8 rounded-2xl bg-[#0B2D6B] p-8">
            <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
              <div>
                <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#7FE0D4]">Export Enquiries</div>
                <h3 className="mt-1 font-display text-lg font-bold text-white">Planning an import programme for 2026?</h3>
                <p className="mt-1 text-sm text-white/55">Talk to our export team — we'll walk you through lead times, documentation and logistics.</p>
              </div>
              <Link to="/contact" className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-[#0A6A38] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#22887b]">
                Contact Export Team
              </Link>
            </div>
          </div>

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

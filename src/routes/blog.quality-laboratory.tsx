import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/page-shell";
import qualityLab from "@/assets/quality-lab.jpg";
import { ArrowLeft, Clock, Calendar, CheckCircle } from "lucide-react";

export const Route = createFileRoute("/blog/quality-laboratory")({
  head: () => ({
    meta: [
      { title: "Inside the NBPPI quality laboratory — NBPPI Blog" },
      { name: "description", content: "A tour through our in-house testing protocols: tensile, GSM, burst, moisture and print accuracy." },
      { property: "og:title", content: "Inside the NBPPI quality laboratory" },
      { property: "og:description", content: "8-checkpoint in-house QC protocol — tensile strength, GSM, burst resistance, moisture barrier, seam integrity, print accuracy, dimensional tolerance and AQL sampling." },
      { property: "og:url", content: "https://nbppi.com/blog/quality-laboratory" },
      { property: "og:image", content: "https://nbppi.com/og-image.jpg" },
      { property: "og:type", content: "article" },
      { property: "og:site_name", content: "NBPPI" },
      { property: "article:published_time", content: "2026-05-18" },
      { property: "article:section", content: "Manufacturing" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Inside the NBPPI quality laboratory" },
      { name: "twitter:description", content: "8-checkpoint QC protocol — tensile, GSM, burst, moisture, seam, print accuracy and AQL sampling. How NBPPI maintains zero defect shipments." },
      { name: "twitter:image", content: "https://nbppi.com/og-image.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://nbppi.com/blog/quality-laboratory" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Inside the NBPPI quality laboratory",
          description: "A tour through our in-house testing protocols: tensile, GSM, burst, moisture and print accuracy.",
          datePublished: "2026-05-18",
          dateModified: "2026-05-18",
          image: { "@type": "ImageObject", url: "https://nbppi.com/og-image.jpg", width: 1200, height: 630 },
          author: { "@type": "Person", name: "NBPPI Editorial Team", url: "https://nbppi.com/about" },
          publisher: { "@type": "Organization", name: "NBPPI", logo: { "@type": "ImageObject", url: "https://nbppi.com/logoWebsite.png" } },
          url: "https://nbppi.com/blog/quality-laboratory",
          articleSection: "Manufacturing",
          keywords: "PP bag quality control, ISO 9001 packaging, tensile test GSM test, woven bag QC Bangladesh",
        }),
      },
    ],
  }),
  component: ArticlePage,
});

const QC_STEPS = [
  {
    step: "01",
    title: "Fabric GSM Testing",
    detail: "Every production batch begins with GSM (grams per square metre) validation using a calibrated electronic balance. Fabric samples are cut to ISO 536 dimensions and weighed to verify they meet the specification GSM within ±3% tolerance.",
  },
  {
    step: "02",
    title: "Tensile & Elongation Testing",
    detail: "Our Instron-equivalent tensile tester measures both warp and weft direction strength for every fabric batch. Minimum tensile requirements are set per product specification — typically 1,200 N/5 cm warp and 900 N/5 cm weft for 80 gsm fabric.",
  },
  {
    step: "03",
    title: "Burst Strength (Mullen Test)",
    detail: "The Mullen burst pressure test measures the resistance of the fabric to a perpendicular force. This predicts how the bag will behave under drop or impact stress. Minimum burst strength is 500 kPa for standard laminated bags.",
  },
  {
    step: "04",
    title: "Load Capacity Testing",
    detail: "Filled bags are subjected to drop testing from standardised heights to simulate warehouse and logistics handling. We also run static load tests with weights 1.5× the bag's rated capacity for a minimum 24-hour hold.",
  },
  {
    step: "05",
    title: "Moisture Resistance",
    detail: "For laminated and BOPP bags, we test moisture vapor transmission rate (MVTR) and water penetration resistance. Lamination adhesion is tested by peel strength measurement after 48-hour water immersion.",
  },
  {
    step: "06",
    title: "Color Consistency (Spectrophotometer)",
    detail: "A spectrophotometer measures ΔE (color difference) between the approved color standard and production output. We accept a maximum ΔE of 1.5 on brand-critical Pantone colors, and 2.0 on secondary colors.",
  },
  {
    step: "07",
    title: "Print Accuracy & Registration",
    detail: "Print accuracy is verified against approved artwork using calibrated light tables and digital overlays. Color-to-color registration is checked to within ±0.3mm on all flexographic and BOPP printed items.",
  },
  {
    step: "08",
    title: "Final AQL Inspection",
    detail: "Before container loading, every shipment is subject to AQL 2.5 sampling inspection covering dimensional accuracy, seam quality, print defects, contamination, and labeling. Only lots passing AQL 2.5 are released for shipment.",
  },
];

function ArticlePage() {
  return (
    <PageShell>
      {/* Hero */}
      <div className="relative h-105 overflow-hidden sm:h-125 lg:h-140">
        <img src={qualityLab} alt="NBPPI quality laboratory" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-linear-to-t from-[#07204E]/90 via-[#07204E]/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 px-4 pb-10 sm:px-6">
          <div className="mx-auto max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#0B2D6B] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-white">
              Manufacturing
            </div>
            <h1 className="mt-4 font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Inside the NBPPI quality laboratory
            </h1>
            <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-white/60">
              <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" /> May 18, 2026</span>
              <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> 7 min read</span>
              <span>By NBPPI Quality Team</span>
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
                A tour through our in-house testing protocols: tensile, GSM, burst, moisture and print accuracy — and why every shipment runs through all eight checkpoints before container loading.
              </p>

              <h2>Why In-House Testing Matters</h2>
              <p>
                Third-party laboratory testing is valuable for certification audits and periodic verification. But for a manufacturing operation producing hundreds of thousands of bags per week, third-party testing is too slow and too expensive to catch quality deviations at the batch level.
              </p>
              <p>
                NBPPI's in-house QC laboratory — staffed by five dedicated quality technicians and equipped with calibrated testing instruments — runs 8 checkpoints on every production batch. Not every shipment batch; every production batch. This means quality deviations are caught at the source, before non-conforming material moves forward in the production chain.
              </p>

              <h2>The 8-Checkpoint Protocol</h2>
            </div>

            {/* QC Steps */}
            <div className="divide-y divide-border px-8 pb-10 sm:px-12">
              {QC_STEPS.map((s) => (
                <div key={s.step} className="flex gap-5 py-6">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0B2D6B] text-xs font-black text-white">
                    {s.step}
                  </div>
                  <div>
                    <div className="font-display text-base font-bold text-[#0B2D6B]">{s.title}</div>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{s.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="prose prose-slate max-w-none px-8 pb-10 sm:px-12">
              <h2>What Buyers Can Request</h2>
              <p>B2B buyers can request the following quality documentation for any NBPPI order:</p>
              <ul>
                {[
                  "Pre-shipment inspection report (covering all 8 checkpoints)",
                  "GSM and tensile test certificates for the production batch",
                  "AQL inspection report with defect classification",
                  "Color measurement report (ΔE values vs. approved standard)",
                  "Third-party laboratory test report (available on request, additional lead time applies)",
                  "Copy of current ISO 9001:2015 certificate",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#0A6A38]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h2>Our ISO 9001:2015 Commitment</h2>
              <p>
                NBPPI's quality management system is certified to ISO 9001:2015 by an accredited certification body. The standard requires documented quality procedures, calibration records for all test equipment, non-conformance tracking, and annual management review of quality performance data.
              </p>
              <p>
                Our QC team calibrates all testing instruments on a quarterly schedule, with calibration certificates traceable to national metrology standards. Calibration records are available for buyer review during supplier audits.
              </p>

              <blockquote>
                <p>"Our lab doesn't exist to generate paperwork. It exists to find problems before our customers do — and ideally, before the problem even enters the bag."</p>
                <cite>— QC Manager, NBPPI</cite>
              </blockquote>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8 rounded-2xl bg-[#0B2D6B] p-8">
            <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
              <div>
                <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#7FE0D4]">Quality Documents</div>
                <h3 className="mt-1 font-display text-lg font-bold text-white">Request our full QC documentation pack.</h3>
                <p className="mt-1 text-sm text-white/55">ISO certificate, test reports, and QC procedures — within 24 hours.</p>
              </div>
              <Link to="/contact" className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-[#0A6A38] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#22887b]">
                Contact Us
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

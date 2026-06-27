import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/page-shell";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import qualityLab from "@/assets/quality-lab.jpg";
import { CircleCheck, ShieldCheck, Award, FlaskConical } from "lucide-react";

export const Route = createFileRoute("/quality")({
  head: () => ({
    meta: [
      { title: "Quality Assurance — NBPPI" },
      { name: "description", content: "ISO 9001 aligned testing for tensile, GSM, burst strength, moisture and print accuracy — every bag verified before dispatch." },
      { property: "og:title", content: "Quality Assurance — NBPPI" },
      { property: "og:url", content: "/quality" },
    ],
    links: [{ rel: "canonical", href: "/quality" }],
  }),
  component: QualityPage,
});

const CHECKS = [
  ["Fabric GSM Testing", "Calibrated GSM validation per production batch."],
  ["Burst Strength", "Mullen burst pressure testing across substrates."],
  ["Load Capacity", "Drop and load simulation under operational stress."],
  ["Moisture Resistance", "Lamination integrity and water-resistance verification."],
  ["Color Consistency", "Spectrophotometer-based ΔE color matching."],
  ["Print Accuracy", "Registration, ink density and design verification."],
  ["Dimensional Accuracy", "Programmed-size verification on every cutting batch."],
  ["Final Inspection", "100% visual + AQL sampling before container loading."],
];

function QualityPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Quality Assurance"
        title={<>Engineered to spec.<br /> Verified at every stage.</>}
        intro="A dedicated in-house laboratory runs ISO-aligned testing across tensile, GSM, burst, moisture and print parameters — before any product leaves the facility."
        image={qualityLab}
        crumbs={[{ label: "Home", to: "/" }, { label: "Quality" }]}
      />

      <section className="bg-background py-24">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-2xl shadow-[var(--shadow-elevated)]">
            <img src={qualityLab} alt="" loading="lazy" className="h-full w-full object-cover" />
          </div>
          <div>
            <SectionHeading eyebrow="In-House Testing" title="A laboratory built into the production line." intro="Quality is engineered into the process, not inspected at the end. NBPPI operates a dedicated QC lab adjacent to the production floor." />
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                { i: ShieldCheck, t: "ISO 9001" },
                { i: Award, t: "BSCI" },
                { i: FlaskConical, t: "Sedex" },
              ].map(({ i: Icon, t }) => (
                <div key={t} className="flex items-center gap-3 rounded-lg border border-border bg-card p-4">
                  <Icon className="h-5 w-5 text-[#2A9D8F]" />
                  <span className="font-display text-sm font-semibold text-[#082B59]">{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F1F4F9] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="Testing Protocols" title="Every product passes multiple quality checkpoints." />
          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {CHECKS.map(([t, d]) => (
              <div key={t} className="rounded-xl border border-border bg-white p-6">
                <CircleCheck className="h-6 w-6 text-[#2A9D8F]" />
                <div className="mt-4 font-display text-base font-semibold text-[#082B59]">{t}</div>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
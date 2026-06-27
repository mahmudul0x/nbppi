import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/page-shell";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import qualityLab from "@/assets/quality-lab.jpg";
import bdGovtSeal from "@/assets/certs/bd-govt-seal.png";
import bidaLogo from "@/assets/certs/bida.jpg";
import difeLogo from "@/assets/certs/dife.jpg";
import fireLogo from "@/assets/certs/fire-license.png";
import doeLogo from "@/assets/certs/doe-environment.jpg";
import epbLogo from "@/assets/certs/epb.png";
import iso9001Logo from "@/assets/certs/iso-9001.jpg";
import bstiLogo from "@/assets/certs/bsti.png";
import { CircleCheck, ShieldCheck, FlaskConical, ArrowRight, FileText } from "lucide-react";

export const Route = createFileRoute("/quality")({
  head: () => ({
    meta: [
      { title: "Licenses, Certifications & Quality — NBPPI" },
      { name: "description", content: "NBPPI holds all mandatory Bangladesh government licenses — Trade License, Factory License (DIFE), BIDA, DoE Environment Clearance, Fire License, ERC, BSTI and ISO 9001:2015." },
      { property: "og:title", content: "Licenses, Certifications & Quality — NBPPI" },
      { property: "og:url", content: "/quality" },
    ],
    links: [{ rel: "canonical", href: "/quality" }],
  }),
  component: QualityPage,
});

const CATEGORIES = [
  {
    id: "mandatory",
    label: "Government Licenses",
    color: "#0B2D6B",
    certs: [
      { logo: bdGovtSeal, name: "Trade License", authority: "City Corporation" },
      { logo: bdGovtSeal, name: "TIN Certificate", authority: "NBR Bangladesh" },
      { logo: bdGovtSeal, name: "BIN / VAT", authority: "NBR Bangladesh" },
      { logo: bidaLogo,   name: "BIDA Registration", authority: "Prime Minister's Office" },
      { logo: difeLogo,   name: "Factory License", authority: "DIFE — Ministry of Labour" },
      { logo: fireLogo,   name: "Fire License", authority: "Fire Service & Civil Defence" },
      { logo: doeLogo,    name: "Environment Clearance", authority: "Dept. of Environment" },
    ],
  },
  {
    id: "export",
    label: "Export & Trade",
    color: "#1f618d",
    certs: [
      { logo: bdGovtSeal, name: "Export Registration Certificate", authority: "CCI&E — Ministry of Commerce" },
      { logo: bdGovtSeal, name: "Import Registration Certificate", authority: "CCI&E — Ministry of Commerce" },
      { logo: epbLogo,    name: "EPB Registration", authority: "Export Promotion Bureau" },
    ],
  },
  {
    id: "quality",
    label: "Quality Certifications",
    color: "#0A6A38",
    certs: [
      { logo: iso9001Logo, name: "ISO 9001:2015", authority: "Accredited Certification Body" },
      { logo: bstiLogo,    name: "BSTI Certification", authority: "Ministry of Industries, BD" },
    ],
  },
] as const;

const CHECKS = [
  ["Fabric GSM Testing",    "Calibrated GSM validation per batch."],
  ["Burst Strength",        "Mullen burst pressure test across substrates."],
  ["Load Capacity",         "Drop & load simulation under operational stress."],
  ["Moisture Resistance",   "Lamination integrity & water-resistance check."],
  ["Color Consistency",     "Spectrophotometer ΔE — Pantone-accurate batch to batch."],
  ["Print Accuracy",        "Registration, ink density & artwork verification."],
  ["Dimensional Accuracy",  "Size verified on every cutting batch."],
  ["Final Inspection",      "100% visual + AQL 2.5 before container loading."],
];

function QualityPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Licenses & Certifications"
        title={<>Government licensed.<br />Quality certified.</>}
        intro="NBPPI holds all mandatory Bangladesh government licenses, export trade documents and quality certifications — ensuring full legal compliance and buyer confidence at every stage."
        image={qualityLab}
        crumbs={[{ label: "Home", to: "/" }, { label: "Quality & Certifications" }]}
      />

      {/* ── Certifications ─────────────────────────────────────────────────── */}
      <section className="bg-background py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Our Credentials"
            title="Fully licensed, audited and certified."
            intro="From mandatory government registrations to international quality standards — every credential is active, renewed and available on request."
          />

          <div className="mt-14 space-y-12">
            {CATEGORIES.map(({ id, label, color, certs }) => (
              <div key={id}>
                {/* Category label row */}
                <div className="mb-6 flex items-center gap-3">
                  <span className="h-4 w-1 rounded-full" style={{ backgroundColor: color }} />
                  <span
                    className="font-display text-[11px] font-bold uppercase tracking-[0.25em]"
                    style={{ color }}
                  >
                    {label}
                  </span>
                  <span className="flex-1 border-t border-border" />
                  <span
                    className="rounded-full border px-2.5 py-0.5 text-[10px] font-semibold"
                    style={{ color, borderColor: color + "40" }}
                  >
                    {certs.length}
                  </span>
                </div>

                {/* Cert tiles */}
                <div className="grid gap-2.5 sm:grid-cols-2 sm:gap-3 md:grid-cols-3 lg:grid-cols-4">
                  {certs.map((cert) => (
                    <div
                      key={cert.name}
                      className="group flex items-center gap-4 rounded-xl border border-border bg-white px-4 py-3.5 transition hover:border-[#0B2D6B]/20 hover:shadow-[0_4px_24px_-6px_rgba(11,45,107,0.12)]"
                    >
                      {/* Logo */}
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-border bg-[#F8F9FB] p-1">
                        <img
                          src={cert.logo}
                          alt={cert.name}
                          className="h-full w-full object-contain"
                        />
                      </div>

                      {/* Text */}
                      <div className="min-w-0">
                        <div className="truncate font-display text-sm font-semibold text-[#0B2D6B]">
                          {cert.name}
                        </div>
                        <div className="mt-0.5 truncate text-[11px] text-muted-foreground">
                          {cert.authority}
                        </div>
                        <div className="mt-1.5 flex items-center gap-1">
                          <span
                            className="h-1.5 w-1.5 rounded-full"
                            style={{ backgroundColor: color }}
                          />
                          <span className="text-[10px] font-semibold" style={{ color }}>
                            Active
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── QC Lab ─────────────────────────────────────────────────────────── */}
      <section className="bg-[#F1F4F9] py-12 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div className="overflow-hidden rounded-2xl shadow-[0_20px_60px_-15px_rgba(11,45,107,0.18)]">
            <img src={qualityLab} alt="NBPPI QC Laboratory" loading="lazy" className="h-full w-full object-cover" />
          </div>
          <div>
            <SectionHeading
              eyebrow="In-House Testing Laboratory"
              title="Quality built in — not checked at the end."
              intro="A dedicated QC lab runs alongside the production floor. Every batch is tested before it advances — not after."
            />
            <div className="mt-8 grid gap-2.5 sm:grid-cols-2">
              {[
                "Tensile strength & elongation tester",
                "Mullen burst tester",
                "GSM balance — ISO 536 calibrated",
                "Spectrophotometer — Pantone ΔE",
                "Drop tester for load simulation",
                "Moisture ingress test rig",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2.5 rounded-lg border border-border bg-white px-3.5 py-2.5">
                  <CircleCheck className="h-4 w-4 shrink-0 text-[#0A6A38]" />
                  <span className="text-xs font-medium text-foreground/80">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 8 Testing Checkpoints ──────────────────────────────────────────── */}
      <section className="bg-background py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Testing Protocols"
            title="8 checkpoints. Every product. Every batch."
          />
          <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-border bg-border/50 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
            {CHECKS.map(([t, d], i) => (
              <div key={t} className="flex flex-col gap-3 bg-white p-6 transition hover:bg-[#F8F9FB]">
                <div className="flex items-center justify-between">
                  <CircleCheck className="h-5 w-5 text-[#0A6A38]" />
                  <span className="font-display text-2xl font-bold text-[#0B2D6B]/8">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="font-display text-sm font-semibold text-[#0B2D6B]">{t}</div>
                <p className="text-xs leading-relaxed text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────────────────── */}
      <section className="bg-[#0B2D6B] py-12 text-white sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-10 lg:gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHeading
                dark
                eyebrow="Document Requests"
                title="Need certified copies for your audit or RFQ?"
                intro="Our compliance team can provide certified copies of all active licenses and certificates within 24 hours."
              />
              <div className="mt-8 grid gap-2 sm:grid-cols-2">
                {[
                  "Trade License & BIDA Registration",
                  "Factory License (DIFE)",
                  "Environment & Fire Clearance",
                  "ERC, IRC & EPB Documents",
                  "ISO 9001 Certificate",
                  "BSTI Certification",
                  "Batch QC Test Records",
                  "AQL Inspection Reports",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <ShieldCheck className="h-4 w-4 shrink-0 text-[#7FE0D4]" />
                    <span className="text-sm text-white/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <FlaskConical className="h-8 w-8 text-[#7FE0D4]" />
              <h3 className="mt-4 font-display text-2xl font-bold text-white">
                We'll send the documents within 24 hours.
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60">
                Contact our compliance team — for RFQ support, supplier audit, LC documentation or buyer due diligence.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-[#0A6A38] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#22887b]"
                >
                  <FileText className="h-4 w-4" />
                  Request Documents
                </Link>
                <Link
                  to="/quote"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Get a Quote <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

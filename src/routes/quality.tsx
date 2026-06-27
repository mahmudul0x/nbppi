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
import {
  CircleCheck,
  ShieldCheck,
  FlaskConical,
  ArrowRight,
  FileText,
  Building2,
  Flame,
  Leaf,
  ScrollText,
  Landmark,
  Package,
  BadgeCheck,
  ClipboardList,
} from "lucide-react";

export const Route = createFileRoute("/quality")({
  head: () => ({
    meta: [
      { title: "Licenses, Certifications & Quality — NBPPI" },
      {
        name: "description",
        content:
          "NBPPI holds all mandatory Bangladesh government licenses and certifications — Trade License, Factory License, BIDA, DoE Environment Clearance, Fire License, ERC, BSTI and ISO 9001:2015 quality compliance.",
      },
      { property: "og:title", content: "Licenses, Certifications & Quality — NBPPI" },
      { property: "og:url", content: "/quality" },
    ],
    links: [{ rel: "canonical", href: "/quality" }],
  }),
  component: QualityPage,
});

// ─── Certificate data ────────────────────────────────────────────────────────
// logo: null  →  তুমি logo image দিলে এখানে import করে লাগাবে
// e.g.  import tradeLicenseLogo from "@/assets/certs/trade-license.png";
// তারপর  logo: tradeLicenseLogo  করে দাও

type Cert = {
  icon: React.ComponentType<{ className?: string }>;
  logo: string | null;          // logo image path — null মানে logo আসেনি এখনো
  logoPlaceholder: string;      // logo না থাকলে এই text দেখাবে
  name: string;
  issuedBy: string;
  issuedByFull: string;
  scope: string;
  desc: string;
  accentColor: string;
  badge: string;
  category: "mandatory" | "quality" | "export";
};

const CERTS: Cert[] = [
  // ── MANDATORY BD LICENSES ──────────────────────────────────────────────────
  {
    icon: ScrollText,
    logo: bdGovtSeal,
    logoPlaceholder: "TRADE\nLICENSE",
    name: "Trade License",
    issuedBy: "City Corporation / Pourasava",
    issuedByFull: "Rajshahi / Rangpur City Corporation",
    scope: "Mandatory business operation license",
    desc: "The primary government-issued authorization to legally operate a business entity in Bangladesh — renewed annually through the local City Corporation.",
    accentColor: "#0B2D6B",
    badge: "Mandatory",
    category: "mandatory",
  },
  {
    icon: Landmark,
    logo: bdGovtSeal,
    logoPlaceholder: "TIN\nNBR",
    name: "TIN Certificate",
    issuedBy: "National Board of Revenue (NBR)",
    issuedByFull: "NBR — Government of Bangladesh",
    scope: "Tax Identification Number",
    desc: "Taxpayer Identification Number issued by NBR confirming NBPPI's registration as a tax-compliant industrial entity under Bangladesh revenue law.",
    accentColor: "#1a5276",
    badge: "Mandatory",
    category: "mandatory",
  },
  {
    icon: ClipboardList,
    logo: bdGovtSeal,
    logoPlaceholder: "BIN\nVAT",
    name: "BIN / VAT Registration",
    issuedBy: "National Board of Revenue (NBR)",
    issuedByFull: "VAT Online — NBR Bangladesh",
    scope: "Business Identification Number for VAT",
    desc: "Business Identification Number (BIN) issued by NBR confirming registration under the VAT and Supplementary Duty Act 2012 for industrial manufacturing.",
    accentColor: "#154360",
    badge: "Mandatory",
    category: "mandatory",
  },
  {
    icon: Building2,
    logo: bidaLogo,
    logoPlaceholder: "BIDA",
    name: "BIDA Registration",
    issuedBy: "Bangladesh Investment Development Authority",
    issuedByFull: "BIDA — Prime Minister's Office, Govt. of Bangladesh",
    scope: "Industrial enterprise registration",
    desc: "Formal recognition as a registered industrial enterprise under BIDA — required for all manufacturing units and enabling access to government industrial incentives.",
    accentColor: "#0A6A38",
    badge: "Mandatory",
    category: "mandatory",
  },
  {
    icon: ShieldCheck,
    logo: difeLogo,
    logoPlaceholder: "DIFE\nFACTORY",
    name: "Factory License",
    issuedBy: "Dept. of Inspection for Factories & Establishments",
    issuedByFull: "DIFE — Ministry of Labour & Employment, Bangladesh",
    scope: "Authorization to operate a manufacturing facility",
    desc: "Mandatory license from DIFE confirming the facility meets all occupational health, safety and labour standards required under the Bangladesh Labour Act 2006.",
    accentColor: "#117a65",
    badge: "Mandatory",
    category: "mandatory",
  },
  {
    icon: Flame,
    logo: fireLogo,
    logoPlaceholder: "FIRE\nLICENSE",
    name: "Fire License",
    issuedBy: "Fire Service & Civil Defence",
    issuedByFull: "Bangladesh Fire Service & Civil Defence (BFSCD)",
    scope: "Fire safety compliance for industrial premises",
    desc: "Clearance from Bangladesh Fire Service & Civil Defence certifying that the production facility meets mandatory fire prevention, suppression and evacuation standards.",
    accentColor: "#b03a2e",
    badge: "Mandatory",
    category: "mandatory",
  },
  {
    icon: Leaf,
    logo: doeLogo,
    logoPlaceholder: "DoE\nENV.",
    name: "Environment Clearance Certificate",
    issuedBy: "Department of Environment (DoE)",
    issuedByFull: "DoE — Ministry of Environment, Forest & Climate Change",
    scope: "Environmental compliance for industrial operations",
    desc: "Issued by the Department of Environment confirming NBPPI's operations are in full compliance with the Bangladesh Environment Conservation Act 1995 and Rules 1997.",
    accentColor: "#1e8449",
    badge: "Mandatory",
    category: "mandatory",
  },
  // ── EXPORT DOCUMENTS ───────────────────────────────────────────────────────
  {
    icon: Package,
    logo: bdGovtSeal,
    logoPlaceholder: "ERC\nCCI&E",
    name: "Export Registration Certificate",
    issuedBy: "Chief Controller of Imports & Exports",
    issuedByFull: "CCI&E — Ministry of Commerce, Bangladesh",
    scope: "Authorization to export goods internationally",
    desc: "ERC issued by CCI&E authorizing NBPPI to legally export PP woven packaging products to international markets — mandatory for all container shipments.",
    accentColor: "#1f618d",
    badge: "Export",
    category: "export",
  },
  {
    icon: Package,
    logo: bdGovtSeal,
    logoPlaceholder: "IRC\nCCI&E",
    name: "Import Registration Certificate",
    issuedBy: "Chief Controller of Imports & Exports",
    issuedByFull: "CCI&E — Ministry of Commerce, Bangladesh",
    scope: "Authorization to import raw materials",
    desc: "IRC permitting NBPPI to import virgin PP granules, BOPP film and industrial inks from global petrochemical and chemical partners for manufacturing.",
    accentColor: "#1a5276",
    badge: "Export",
    category: "export",
  },
  {
    icon: BadgeCheck,
    logo: epbLogo,
    logoPlaceholder: "EPB",
    name: "EPB Registration",
    issuedBy: "Export Promotion Bureau",
    issuedByFull: "EPB — Ministry of Commerce, Bangladesh",
    scope: "Registered export-oriented industrial unit",
    desc: "Registration with the Export Promotion Bureau recognizing NBPPI as a certified export-oriented manufacturer eligible for government export facilitation and incentive programs.",
    accentColor: "#7d6608",
    badge: "Export",
    category: "export",
  },
  // ── QUALITY CERTIFICATIONS ─────────────────────────────────────────────────
  {
    icon: ShieldCheck,
    logo: iso9001Logo,
    logoPlaceholder: "ISO\n9001",
    name: "ISO 9001:2015",
    issuedBy: "Bureau Veritas / SGS / DNV",
    issuedByFull: "Internationally Accredited Certification Body",
    scope: "Quality Management System",
    desc: "The world's most recognised quality management standard — certifying that NBPPI's production processes, documentation and customer satisfaction procedures meet ISO requirements.",
    accentColor: "#0B2D6B",
    badge: "Quality",
    category: "quality",
  },
  {
    icon: BadgeCheck,
    logo: bstiLogo,
    logoPlaceholder: "BSTI",
    name: "BSTI Certification",
    issuedBy: "Bangladesh Standards and Testing Institution",
    issuedByFull: "BSTI — Ministry of Industries, Bangladesh",
    scope: "Bangladesh national product quality standard",
    desc: "Product certification from BSTI confirming NBPPI's PP woven bags meet Bangladesh national standards for tensile strength, GSM, and material composition — required for domestic institutional buyers.",
    accentColor: "#6c3483",
    badge: "Quality",
    category: "quality",
  },
  {
    icon: FlaskConical,
    logo: null,           // → (no external logo — internal)
    logoPlaceholder: "QC\nLAB",
    name: "In-House QC Laboratory",
    issuedBy: "NBPPI Internal — ISO-Aligned",
    issuedByFull: "NBPPI Quality Control Division",
    scope: "On-floor batch testing & inspection",
    desc: "A dedicated production-floor laboratory running tensile, GSM, burst strength, moisture and print-accuracy tests on every batch — results logged and traceable per order.",
    accentColor: "#7a2020",
    badge: "Quality",
    category: "quality",
  },
];

const CHECKS = [
  ["Fabric GSM Testing", "Calibrated GSM validation per production batch — substrate weight verified within tolerance."],
  ["Burst Strength", "Mullen burst pressure testing across substrates — bag integrity under full load."],
  ["Load Capacity", "Drop and load simulation under operational stress to confirm safe fill capacity."],
  ["Moisture Resistance", "Lamination integrity and water-resistance check for outdoor and humid storage."],
  ["Color Consistency", "Spectrophotometer ΔE color matching — Pantone-accurate batch to batch."],
  ["Print Accuracy", "Registration, ink density and design verification against approved artwork."],
  ["Dimensional Accuracy", "Programmed-size verification on every cutting batch — length, width, gusset."],
  ["Final Inspection", "100% visual + AQL 2.5 sampling before container loading and seal."],
];

// ─── Logo placeholder component ─────────────────────────────────────────────
function CertLogo({ logo, placeholder, accent }: { logo: string | null; placeholder: string; accent: string }) {
  if (logo) {
    return (
      <img
        src={logo}
        alt={placeholder.replace("\n", " ")}
        className="h-14 w-auto object-contain"
      />
    );
  }
  // placeholder box — replace করা হবে যখন actual logo আসবে
  return (
    <div
      className="flex h-14 w-14 items-center justify-center rounded-lg text-center text-[9px] font-black leading-tight tracking-wider text-white"
      style={{ backgroundColor: accent + "33", border: `2px solid ${accent}55`, color: accent }}
    >
      {placeholder.split("\n").map((line, i) => (
        <span key={i} className="block">{line}</span>
      ))}
    </div>
  );
}

// ─── Category label ──────────────────────────────────────────────────────────
const CATEGORY_META = {
  mandatory: { label: "Mandatory Government Licenses", color: "bg-[#0B2D6B]", text: "text-[#0B2D6B]", border: "border-[#0B2D6B]/20" },
  export:    { label: "Export & Trade Documents",      color: "bg-[#1f618d]", text: "text-[#1f618d]", border: "border-[#1f618d]/20" },
  quality:   { label: "Quality Certifications",        color: "bg-[#0A6A38]", text: "text-[#0A6A38]", border: "border-[#0A6A38]/20" },
} as const;


function QualityPage() {
  const grouped = (["mandatory", "export", "quality"] as const).map((cat) => ({
    cat,
    items: CERTS.filter((c) => c.category === cat),
  }));

  return (
    <PageShell>
      <PageHero
        eyebrow="Licenses & Certifications"
        title={<>Government licensed.<br />Quality certified.</>}
        intro="NBPPI holds all mandatory Bangladesh government licenses, export trade documents and quality certifications — ensuring full legal compliance, traceable production and buyer confidence at every stage."
        image={qualityLab}
        crumbs={[{ label: "Home", to: "/" }, { label: "Quality & Certifications" }]}
      />


      {/* Cert sections by category */}
      {grouped.map(({ cat, items }, gi) => {
        const meta = CATEGORY_META[cat];
        return (
          <section
            key={cat}
            className={gi % 2 === 0 ? "bg-background py-20" : "bg-[#F1F4F9] py-20"}
          >
            <div className="mx-auto max-w-7xl px-6">
              {/* Category header */}
              <div className="mb-12 flex items-center gap-4">
                <span className={`h-1 w-10 rounded-full ${meta.color}`} />
                <h2 className={`font-display text-xs font-bold uppercase tracking-[0.25em] ${meta.text}`}>
                  {meta.label}
                </h2>
                <span className={`flex-1 border-t ${meta.border}`} />
                <span className={`rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] ${meta.text} ${meta.border}`}>
                  {items.length} {items.length === 1 ? "document" : "documents"}
                </span>
              </div>

              <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {items.map((cert) => (
                  <div
                    key={cert.name}
                    className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-white transition hover:-translate-y-1 hover:shadow-[0_20px_50px_-15px_rgba(11,45,107,0.14)]"
                  >
                    {/* Card top strip */}
                    <div
                      className="flex items-center justify-between px-5 py-4"
                      style={{ backgroundColor: cert.accentColor + "12", borderBottom: `1px solid ${cert.accentColor}22` }}
                    >
                      <CertLogo logo={cert.logo} placeholder={cert.logoPlaceholder} accent={cert.accentColor} />
                      <span
                        className="rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white"
                        style={{ backgroundColor: cert.accentColor }}
                      >
                        {cert.badge}
                      </span>
                    </div>

                    {/* Card body */}
                    <div className="flex flex-1 flex-col p-5">
                      <h3 className="font-display text-base font-bold text-[#0B2D6B]">{cert.name}</h3>

                      <div className="mt-3 space-y-1.5">
                        <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                          Issued by
                        </div>
                        <div className="text-xs font-semibold text-foreground/80">{cert.issuedByFull}</div>
                      </div>

                      <div className="mt-3 space-y-1">
                        <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                          Scope
                        </div>
                        <div className="text-xs text-foreground/70">{cert.scope}</div>
                      </div>

                      <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                        {cert.desc}
                      </p>

                      <div
                        className="mt-4 flex items-center gap-2 border-t pt-4"
                        style={{ borderColor: cert.accentColor + "22" }}
                      >
                        <CircleCheck className="h-4 w-4 shrink-0" style={{ color: cert.accentColor }} />
                        <span className="text-xs font-semibold" style={{ color: cert.accentColor }}>
                          Active &amp; Valid
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* QC Lab + Testing Protocols */}
      <section className="bg-background py-24">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-2xl shadow-[0_20px_60px_-15px_rgba(11,45,107,0.18)]">
            <img src={qualityLab} alt="NBPPI QC Laboratory" loading="lazy" className="h-full w-full object-cover" />
          </div>
          <div>
            <SectionHeading
              eyebrow="In-House Testing Laboratory"
              title="Quality engineered in — not inspected on."
              intro="A dedicated QC lab sits adjacent to the production floor. Every batch is tested before it moves to the next stage — not after the product is finished."
            />
            <div className="mt-8 space-y-3">
              {[
                "Tensile strength and elongation tester",
                "Mullen burst tester for substrate integrity",
                "GSM balance — calibrated per ISO 536",
                "Spectrophotometer for Pantone ΔE color matching",
                "Drop tester for load simulation",
                "Moisture ingress test rig for laminated bags",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CircleCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#0A6A38]" />
                  <span className="text-sm leading-relaxed text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8 Testing Checkpoints */}
      <section className="bg-[#F1F4F9] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Testing Protocols"
            title="8 checkpoints. Every product. Every batch."
            intro="No product leaves the facility without passing all eight quality checkpoints — logged, signed off and traceable per order."
          />
          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {CHECKS.map(([t, d], i) => (
              <div
                key={t}
                className="group relative rounded-xl border border-border bg-white p-6 transition hover:-translate-y-1 hover:shadow-(--shadow-card)"
              >
                <div className="flex items-center justify-between">
                  <CircleCheck className="h-6 w-6 text-[#0A6A38]" />
                  <span className="font-display text-3xl font-bold text-[#0B2D6B]/8">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="mt-4 font-display text-base font-semibold text-[#0B2D6B]">{t}</div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0B2D6B] py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHeading
                dark
                eyebrow="Document Requests"
                title="Need certified copies for your audit or RFQ?"
                intro="Our compliance team can provide certified copies of all active licenses, certificates and batch test reports within 24 hours of request."
              />
              <div className="mt-10 space-y-4">
                {[
                  { t: "All BD government licenses available on request", d: "Trade License, Factory License, BIDA, DoE, Fire License — certified copies." },
                  { t: "Export documents for customs & LC",               d: "ERC, IRC and EPB registration documents for letters of credit and shipment." },
                  { t: "ISO 9001 certificate & audit reports",            d: "Full quality management system certificate and most recent audit summary." },
                  { t: "Batch QC test records",                           d: "GSM, burst, tensile and print test data per production batch on request." },
                ].map(({ t, d }) => (
                  <div key={t} className="flex items-start gap-4">
                    <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0A6A38]">
                      <CircleCheck className="h-3.5 w-3.5 text-white" />
                    </div>
                    <div>
                      <div className="font-display text-sm font-semibold text-white">{t}</div>
                      <div className="mt-0.5 text-sm leading-relaxed text-white/60">{d}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/4 p-8 backdrop-blur">
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7FE0D4]">
                Request Certification Documents
              </div>
              <h3 className="mt-3 font-display text-2xl font-bold text-white">
                We'll send the documents within 24 hours.
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/65">
                Contact our compliance team with your requirement — RFQ support, supplier audit, LC documentation or due diligence.
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

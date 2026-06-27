import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
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
    bg: "#0B2D6B12",
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
    bg: "#1f618d12",
    certs: [
      { logo: bdGovtSeal, name: "Export Registration", authority: "CCI&E — Ministry of Commerce" },
      { logo: bdGovtSeal, name: "Import Registration", authority: "CCI&E — Ministry of Commerce" },
      { logo: epbLogo,    name: "EPB Registration", authority: "Export Promotion Bureau" },
    ],
  },
  {
    id: "quality",
    label: "Quality Certifications",
    color: "#0A6A38",
    bg: "#0A6A3812",
    certs: [
      { logo: iso9001Logo, name: "ISO 9001:2015", authority: "Accredited Certification Body" },
      { logo: bstiLogo,    name: "BSTI Certification", authority: "Ministry of Industries, BD" },
    ],
  },
] as const;

const CHECKS = [
  ["Fabric GSM Testing",   "Calibrated GSM validation per batch."],
  ["Burst Strength",       "Mullen burst pressure test across substrates."],
  ["Load Capacity",        "Drop & load simulation under operational stress."],
  ["Moisture Resistance",  "Lamination integrity & water-resistance check."],
  ["Color Consistency",    "Spectrophotometer ΔE — Pantone-accurate batch to batch."],
  ["Print Accuracy",       "Registration, ink density & artwork verification."],
  ["Dimensional Accuracy", "Size verified on every cutting batch."],
  ["Final Inspection",     "100% visual + AQL 2.5 before container loading."],
];

function CertSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let ctx: { revert: () => void } | null = null;
    (async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      ctx = gsap.context(() => {
        // Animate each category block
        gsap.utils.toArray<HTMLElement>(".cert-category").forEach((cat) => {
          gsap.fromTo(
            cat.querySelector(".cert-label"),
            { opacity: 0, x: -20 },
            {
              opacity: 1, x: 0, duration: 0.5, ease: "power3.out",
              scrollTrigger: { trigger: cat, start: "top 88%", toggleActions: "play none none none" },
            }
          );
          gsap.fromTo(
            cat.querySelectorAll(".cert-tile"),
            { opacity: 0, y: 30, scale: 0.95 },
            {
              opacity: 1, y: 0, scale: 1,
              duration: 0.5, ease: "power3.out",
              stagger: 0.07,
              scrollTrigger: { trigger: cat, start: "top 85%", toggleActions: "play none none none" },
            }
          );
        });
      }, sectionRef);
    })();
    return () => ctx?.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-background py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Our Credentials"
          title="Fully licensed, audited and certified."
          intro="From mandatory government registrations to international quality standards — every credential is active, renewed and available on request."
        />

        <div className="mt-10 space-y-10 sm:mt-14">
          {CATEGORIES.map(({ id, label, color, bg, certs }) => (
            <div key={id} className="cert-category">
              {/* Category header */}
              <div className="cert-label mb-5 flex items-center gap-3">
                <div
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg"
                  style={{ backgroundColor: bg }}
                >
                  <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: color }} />
                </div>
                <span className="font-display text-[11px] font-bold uppercase tracking-[0.25em]" style={{ color }}>
                  {label}
                </span>
                <span className="flex-1 border-t border-border" />
                <span
                  className="rounded-full px-2.5 py-0.5 text-[10px] font-bold"
                  style={{ backgroundColor: bg, color }}
                >
                  {certs.length} docs
                </span>
              </div>

              {/* Cert grid — 2 cols on mobile, 3 on md, 4 on lg */}
              <div className="grid grid-cols-2 gap-3 sm:gap-3 md:grid-cols-3 lg:grid-cols-4">
                {certs.map((cert) => (
                  <div
                    key={cert.name}
                    className="cert-tile group relative overflow-hidden rounded-xl border border-border bg-white p-3 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_-6px_rgba(11,45,107,0.14)] sm:p-4"
                  >
                    {/* top accent */}
                    <div className="absolute inset-x-0 top-0 h-0.5 rounded-t-xl" style={{ backgroundColor: color }} />

                    {/* logo */}
                    <div
                      className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg p-1 sm:h-12 sm:w-12"
                      style={{ backgroundColor: bg }}
                    >
                      <img src={cert.logo} alt={cert.name} className="h-full w-full object-contain" />
                    </div>

                    {/* text */}
                    <div className="mt-3">
                      <div className="font-display text-xs font-bold leading-snug text-[#0B2D6B] sm:text-sm">
                        {cert.name}
                      </div>
                      <div className="mt-0.5 text-[10px] leading-snug text-muted-foreground sm:text-[11px]">
                        {cert.authority}
                      </div>
                    </div>

                    {/* active badge */}
                    <div className="mt-3 inline-flex items-center gap-1 rounded-full px-2 py-0.5" style={{ backgroundColor: bg }}>
                      <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: color }} />
                      <span className="text-[9px] font-bold uppercase tracking-wide sm:text-[10px]" style={{ color }}>
                        Active
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CheckpointsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let ctx: { revert: () => void } | null = null;
    (async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      ctx = gsap.context(() => {
        gsap.fromTo(
          ".check-tile",
          { opacity: 0, y: 24 },
          {
            opacity: 1, y: 0,
            duration: 0.5, ease: "power3.out",
            stagger: 0.06,
            scrollTrigger: { trigger: sectionRef.current, start: "top 82%", toggleActions: "play none none none" },
          }
        );
      }, sectionRef);
    })();
    return () => ctx?.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-background py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading eyebrow="Testing Protocols" title="8 checkpoints. Every product. Every batch." />
        <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-4 lg:grid-cols-4">
          {CHECKS.map(([t, d], i) => (
            <div key={t} className="check-tile flex flex-col gap-2 rounded-xl border border-border bg-white p-4 transition hover:bg-[#F8F9FB] sm:p-5">
              <div className="flex items-center justify-between">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0A6A38]/8">
                  <CircleCheck className="h-4 w-4 text-[#0A6A38]" />
                </div>
                <span className="font-display text-2xl font-black text-[#0B2D6B]/6">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="font-display text-xs font-bold text-[#0B2D6B] sm:text-sm">{t}</div>
              <p className="text-[11px] leading-relaxed text-muted-foreground sm:text-xs">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

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

      <CertSection />

      {/* ── QC Lab ─────────────────────────────────────────────────────────── */}
      <section className="bg-[#F1F4F9] py-12 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div className="overflow-hidden rounded-2xl shadow-[0_20px_60px_-15px_rgba(11,45,107,0.18)]">
            <img src={qualityLab} alt="NBPPI QC Laboratory" loading="lazy" className="h-56 w-full object-cover sm:h-72 lg:h-full" />
          </div>
          <div>
            <SectionHeading
              eyebrow="In-House Testing Laboratory"
              title="Quality built in — not checked at the end."
              intro="A dedicated QC lab runs alongside the production floor. Every batch is tested before it advances — not after."
            />
            <div className="mt-6 grid grid-cols-2 gap-2.5 sm:mt-8">
              {[
                "Tensile strength & elongation tester",
                "Mullen burst tester",
                "GSM balance — ISO 536 calibrated",
                "Spectrophotometer — Pantone ΔE",
                "Drop tester for load simulation",
                "Moisture ingress test rig",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-lg border border-border bg-white px-3 py-2.5">
                  <CircleCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#0A6A38]" />
                  <span className="text-[11px] font-medium leading-snug text-foreground/80 sm:text-xs">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CheckpointsSection />

      {/* ── CTA ────────────────────────────────────────────────────────────── */}
      <section className="bg-[#0B2D6B] py-12 text-white sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-8 lg:gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHeading
                dark
                eyebrow="Document Requests"
                title="Need certified copies for your audit or RFQ?"
                intro="Our compliance team can provide certified copies of all active licenses and certificates within 24 hours."
              />
              <div className="mt-6 grid grid-cols-2 gap-2 sm:mt-8">
                {[
                  "Trade License & BIDA",
                  "Factory License (DIFE)",
                  "Environment & Fire Clearance",
                  "ERC, IRC & EPB Documents",
                  "ISO 9001 Certificate",
                  "BSTI Certification",
                  "Batch QC Test Records",
                  "AQL Inspection Reports",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-[#7FE0D4]" />
                    <span className="text-xs text-white/80 sm:text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
              <FlaskConical className="h-7 w-7 text-[#7FE0D4] sm:h-8 sm:w-8" />
              <h3 className="mt-4 font-display text-xl font-bold text-white sm:text-2xl">
                We'll send the documents within 24 hours.
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60">
                Contact our compliance team — for RFQ support, supplier audit, LC documentation or buyer due diligence.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#0A6A38] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#22887b]"
                >
                  <FileText className="h-4 w-4" />
                  Request Documents
                </Link>
                <Link
                  to="/quote"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
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

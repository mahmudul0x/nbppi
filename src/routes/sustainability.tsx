import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/page-shell";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import factoryAerial from "@/assets/factory-aerial.jpg";
import {
  Recycle, Leaf, ShieldCheck, Boxes, Zap, Droplets,
  ArrowRight, CheckCircle, Target, TrendingUp, Globe,
} from "lucide-react";

export const Route = createFileRoute("/sustainability")({
  head: () => ({
    meta: [
      { title: "Sustainability — NBPPI" },
      { name: "description", content: "Energy-efficient production, waste recovery and 100% recyclable polypropylene — NBPPI's responsible manufacturing programme and 2030 roadmap." },
      { property: "og:title", content: "Sustainability — NBPPI" },
      { property: "og:url", content: "/sustainability" },
    ],
    links: [{ rel: "canonical", href: "/sustainability" }],
  }),
  component: SustainabilityPage,
});

const PILLARS = [
  { i: Recycle, t: "100% Recyclable", d: "Mono-material polypropylene supports closed-loop recycling. Our bags are designed from the ground up to re-enter the PP recycling stream at end of life — with no mixed-material contamination." },
  { i: Zap, t: "Energy Efficient", d: "High-efficiency variable-speed motors on all extrusion lines, LED lighting throughout the plant, and solar-assisted operations reduce our energy intensity per kg of output by 18% vs our 2020 baseline." },
  { i: Droplets, t: "Water Stewardship", d: "Our manufacturing process uses minimal process water. All cooling water is recirculated in a closed loop. Effluent monitoring is conducted weekly with results logged and available for buyer audit." },
  { i: Boxes, t: "Waste Recovery", d: "Trims, off-cuts and rejects from the circular line are granulated on-site and reintroduced into the extrusion process or supplied to industrial PP recyclers. Current recovery rate: 94% on circular line batches." },
  { i: Leaf, t: "Future-Focused", d: "Our R&D team is actively investigating biodegradable PP additives and bio-based feedstocks, with pilot trials scheduled for 2027. We are also exploring partnerships with waste collection organisations across our export markets." },
  { i: ShieldCheck, t: "Compliant", d: "Aligned with BSCI, Sedex and REACH supply-chain frameworks. Our factory is open to buyer and third-party social compliance audits. Audit reports are available on request." },
];

const METRICS = [
  { value: "18%", label: "Energy reduction vs 2020 baseline" },
  { value: "95%", label: "Production waste recovered or recycled" },
  { value: "100%", label: "Product lines mono-material recyclable" },
  { value: "0", label: "Hazardous-substance complaints (all-time)" },
];

const ROADMAP = [
  {
    year: "2024–2025",
    status: "completed",
    title: "Circular PP Line Launch",
    items: [
      "Mono-material PP barrier coating development",
      "Water-based ink conversion on flexo line",
      "On-site trim re-granulation system commissioned",
      "4 pilot buyer accounts transitioned",
    ],
  },
  {
    year: "2025–2026",
    status: "active",
    title: "Energy & Water Reduction",
    items: [
      "Variable-speed drive retrofits on extrusion lines",
      "LED lighting conversion — 100% of plant",
      "Solar panel feasibility study completed",
      "Closed-loop cooling water system operational",
    ],
  },
  {
    year: "2026–2027",
    status: "upcoming",
    title: "Supply Chain Transparency",
    items: [
      "Supplier raw material declarations for all PP grades",
      "Carbon footprint calculation per product line",
      "Buyer-accessible sustainability dashboard",
      "Third-party ESG audit (first cycle)",
    ],
  },
  {
    year: "2027–2030",
    status: "future",
    title: "Net-Zero Roadmap",
    items: [
      "Solar installation — target 30% renewable electricity",
      "Bio-based PP feedstock pilot trials",
      "Scope 1 & 2 emissions disclosure",
      "Industry partnership on PP collection & recycling",
    ],
  },
];

const COMMITMENTS = [
  {
    icon: Globe,
    title: "EPR Readiness",
    body: "As Extended Producer Responsibility (EPR) legislation expands across EU and GCC markets, NBPPI is proactively designing products that comply with take-back and recyclability requirements — protecting our export buyers from future regulatory risk.",
  },
  {
    icon: Target,
    title: "Science-Based Targets",
    body: "We are developing our first formal greenhouse gas inventory (Scope 1 & 2) ahead of a 2027 target-setting exercise. Our goal is to align with a 1.5°C-compatible emissions reduction pathway by 2030.",
  },
  {
    icon: TrendingUp,
    title: "Continuous Improvement",
    body: "Sustainability performance is reviewed quarterly by our senior management team. Key metrics — energy intensity, waste recovery rate, water consumption, and audit findings — are tracked against annual targets and published in our annual report.",
  },
];

function SustainabilityPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Sustainability"
        title={<>Responsible production.<br /> Recyclable by design.</>}
        intro="Industrial packaging can be both durable and circular. NBPPI's sustainability programme integrates energy efficiency, waste recovery and recyclable mono-material engineering — with a clear roadmap to 2030."
        image={factoryAerial}
        crumbs={[{ label: "Home", to: "/" }, { label: "Sustainability" }]}
      />

      {/* Six Pillars */}
      <section className="bg-background py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Our Approach"
            title="Six pillars of responsible manufacturing."
            intro="Every pillar is backed by measurable targets and operational practice — not just policy statements."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PILLARS.map(({ i: Icon, t, d }) => (
              <div key={t} className="group rounded-2xl border border-border bg-card p-7 transition hover:-translate-y-0.5 hover:border-[#0A6A38]/30 hover:shadow-[0_8px_24px_-6px_rgba(10,106,56,0.12)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0A6A38]/10 text-[#0A6A38] transition group-hover:bg-[#0A6A38] group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="mt-5 font-display text-lg font-bold text-[#0B2D6B]">{t}</div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="bg-[#07204E] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {METRICS.map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="font-display text-5xl font-black text-[#7FE0D4] sm:text-6xl">{value}</div>
                <div className="mt-3 text-sm uppercase tracking-[0.18em] text-white/55">{label}</div>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-xs text-white/30">
            Data as of Q1 2026. Figures are internally audited. Third-party verification scheduled for 2027.
          </p>
        </div>
      </section>

      {/* 2030 Roadmap */}
      <section className="bg-[#F1F4F9] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Our Roadmap"
            title="Sustainability through 2030."
            intro="Four phases of measurable progress — from circular product design to net-zero alignment."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ROADMAP.map(({ year, status, title, items }) => {
              const statusStyles: Record<string, string> = {
                completed: "bg-[#0A6A38] text-white",
                active: "bg-[#0B2D6B] text-white",
                upcoming: "bg-[#F4C542] text-[#07204E]",
                future: "bg-white/70 text-[#0B2D6B] border border-border",
              };
              const dotStyles: Record<string, string> = {
                completed: "bg-[#0A6A38]",
                active: "bg-[#0B2D6B]",
                upcoming: "bg-[#F4C542]",
                future: "bg-white border border-border",
              };
              return (
                <div key={year} className="rounded-2xl border border-border bg-white p-6 shadow-[0_2px_12px_-4px_rgba(11,45,107,0.08)]">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-display text-xs font-bold text-muted-foreground">{year}</span>
                    <span className={`rounded-full px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wide ${statusStyles[status]}`}>
                      {status === "completed" ? "Done" : status === "active" ? "In Progress" : status === "upcoming" ? "Planned" : "Future"}
                    </span>
                  </div>
                  <h3 className="mt-3 font-display text-base font-bold text-[#0B2D6B]">{title}</h3>
                  <ul className="mt-4 space-y-2">
                    {items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${status === "completed" ? "text-[#0A6A38]" : status === "active" ? "text-[#0B2D6B]" : "text-muted-foreground/40"}`} />
                        <span className="text-[11px] leading-snug text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Commitments */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="For Our Buyers"
            title="What our sustainability commitment means for you."
            intro="Sourcing from NBPPI means your supply chain is backed by measurable environmental performance and regulatory readiness."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {COMMITMENTS.map(({ icon: Icon, title, body }) => (
              <div key={title} className="rounded-2xl border border-border bg-[#F8F9FB] p-7">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0B2D6B]/10">
                  <Icon className="h-5 w-5 text-[#0B2D6B]" />
                </div>
                <h3 className="mt-5 font-display text-base font-bold text-[#0B2D6B]">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog CTA */}
      <section className="bg-[#F1F4F9] py-12 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="overflow-hidden rounded-2xl bg-[#0B2D6B] p-8 sm:p-10">
            <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
              <div>
                <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#7FE0D4]">Read More</div>
                <h3 className="mt-2 font-display text-xl font-bold text-white sm:text-2xl">
                  Our circular-economy line — in detail.
                </h3>
                <p className="mt-2 text-sm text-white/55">
                  How mono-material PP and water-based inks are changing what recyclable industrial packaging looks like.
                </p>
              </div>
              <Link
                to="/blog/circular-economy"
                className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-[#0A6A38] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#22887b]"
              >
                Read Article <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

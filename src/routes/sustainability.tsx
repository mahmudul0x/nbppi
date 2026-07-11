import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/page-shell";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import factoryFloor from "../../Images/sustainability-factory-floor.jpg";
import ppBags from "../../Images/sustainability-pp-bags.jpg";
import solarFarm from "../../Images/sustainability-solar.jpg";
import windTurbines from "../../Images/sustainability-wind.jpg";
import waterTesting from "../../Images/sustainability-water-testing.jpg";
import factoryTeam from "../../Images/sustainability-team.jpg";
import wasteRecovery from "../../Images/sustainability-waste-recovery.jpg";
import {
  Recycle, Leaf, ShieldCheck, Boxes, Zap, Droplets,
  ArrowRight, CheckCircle, Target, TrendingUp, Globe, Factory,
} from "lucide-react";

export const Route = createFileRoute("/sustainability")({
  head: () => ({
    meta: [
      { title: "Sustainability — NBPPI" },
      { name: "description", content: "Energy-efficient production, waste recovery and 100% recyclable polypropylene — NBPPI's responsible manufacturing programme and 2030 roadmap." },
      { property: "og:title", content: "Sustainability & Recyclable Packaging — NBPPI" },
      { property: "og:description", content: "100% recyclable mono-material PP bags, 18% energy reduction, 95% waste recovery — NBPPI's sustainability programme and 2030 net-zero roadmap." },
      { property: "og:url", content: "https://nbppi.com/sustainability" },
      { property: "og:image", content: "https://nbppi.com/og-image.jpg" },
      { property: "og:site_name", content: "NBPPI" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Sustainable PP Packaging — NBPPI 2030 Roadmap" },
      { name: "twitter:description", content: "100% recyclable mono-material PP bags, 18% energy reduction, 95% waste recovery. NBPPI's sustainability programme and net-zero roadmap." },
      { name: "twitter:image", content: "https://nbppi.com/og-image.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://nbppi.com/sustainability" }],
  }),
  component: SustainabilityPage,
});

const CIRCULAR_POINTS = [
  "Mono-material PP construction — no mixed-material contamination at end of life",
  "Water-based inks on the flexo line, free of heavy-metal pigments",
  "On-site trim re-granulation feeding recovered PP back into extrusion",
  "Designed to comply with EU & GCC recyclability and EPR frameworks",
];

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

const PRACTICES = [
  {
    image: solarFarm,
    alt: "Factory building with rooftop solar panels and modern production lines",
    icon: Zap,
    tag: "Renewable Energy",
    title: "Solar-assisted operations",
    body: "Feasibility study complete; installation targets 30% renewable electricity by 2030, alongside variable-speed drives and 100% LED lighting across the plant.",
  },
  {
    image: waterTesting,
    alt: "Lab technician testing effluent water samples in the factory ETP lab",
    icon: Droplets,
    tag: "Water Stewardship",
    title: "Closed-loop cooling water",
    body: "All cooling water recirculates in a closed loop with weekly effluent monitoring — results logged and available for buyer audit at any time.",
  },
  {
    image: wasteRecovery,
    alt: "Factory workers feeding PP trims into an on-site recycling granulator",
    icon: Recycle,
    tag: "Waste Recovery",
    title: "Segregation & re-granulation",
    body: "Trims, off-cuts and rejects are segregated at source, granulated on-site and fed back into extrusion — a 94% recovery rate on circular-line batches.",
  },
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
        image={factoryFloor}
        crumbs={[{ label: "Home", to: "/" }, { label: "Sustainability" }]}
      />

      {/* Circular by design — split feature */}
      <section className="bg-background py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeading
                eyebrow="Circular By Design"
                title="Sustainability engineered into the product — not added afterwards."
                intro="Every NBPPI bag begins with a single question: can it re-enter the recycling stream at end of life? Our circular PP line answers yes — by design decisions made at the extrusion stage, not by offsets."
              />
              <ul className="mt-8 space-y-4">
                {CIRCULAR_POINTS.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0A6A38]/10">
                      <CheckCircle className="h-4 w-4 text-[#0A6A38]" />
                    </span>
                    <span className="text-sm leading-relaxed text-muted-foreground sm:text-base">{point}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/blog/circular-economy"
                className="mt-9 inline-flex items-center gap-2 rounded-xl bg-[#0A6A38] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#22887b]"
              >
                Explore Our Circular Line <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
              <div className="overflow-hidden rounded-3xl shadow-[0_24px_60px_-20px_rgba(11,45,107,0.35)]">
                <img
                  src={ppBags}
                  alt="Circular-economy PP bag production line with closed-loop pellet feed"
                  loading="lazy"
                  className="aspect-4/3 w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-4 rounded-2xl border border-border bg-white p-5 shadow-[0_16px_40px_-12px_rgba(11,45,107,0.25)] sm:-left-8">
                <div className="font-display text-4xl font-black text-[#0A6A38]">95%</div>
                <div className="mt-1 max-w-[10rem] text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  Production waste recovered or recycled
                </div>
              </div>
              <div className="absolute -top-5 -right-3 flex items-center gap-2.5 rounded-full border border-border bg-white py-2 pl-2.5 pr-5 shadow-[0_12px_30px_-10px_rgba(11,45,107,0.25)] sm:-right-6">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0A6A38] text-white">
                  <Recycle className="h-4.5 w-4.5" />
                </span>
                <span className="text-xs font-bold uppercase tracking-wide text-[#0B2D6B]">100% Recyclable PP</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Six Pillars */}
      <section className="bg-[#F1F4F9] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Our Approach"
            title="Six pillars of responsible manufacturing."
            intro="Every pillar is backed by measurable targets and operational practice — not just policy statements."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PILLARS.map(({ i: Icon, t, d }, idx) => (
              <div
                key={t}
                className="group relative overflow-hidden rounded-2xl border border-border bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#0A6A38]/30 hover:shadow-[0_16px_40px_-12px_rgba(10,106,56,0.18)]"
              >
                <span className="pointer-events-none absolute -right-2 -top-4 font-display text-7xl font-black text-[#0B2D6B]/[0.04] transition group-hover:text-[#0A6A38]/[0.07]">
                  {String(idx + 1).padStart(2, "0")}
                </span>
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
      <section className="relative overflow-hidden bg-[#07204E] py-16 sm:py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "linear-gradient(#7FE0D4 1px, transparent 1px), linear-gradient(90deg, #7FE0D4 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Measured Progress"
            title="Numbers we hold ourselves to."
            align="center"
            dark
          />
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {METRICS.map(({ value, label }) => (
              <div key={label} className="bg-[#07204E] px-6 py-10 text-center">
                <div className="font-display text-5xl font-black text-[#7FE0D4] sm:text-6xl">{value}</div>
                <div className="mt-3 text-xs uppercase tracking-[0.18em] text-white/55 sm:text-sm">{label}</div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-xs text-white/30">
            Data as of Q1 2026. Figures are internally audited. Third-party verification scheduled for 2027.
          </p>
        </div>
      </section>

      {/* In Practice — image mosaic */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="On The Ground"
            title="Sustainability in practice."
            intro="From the energy that powers our extrusion lines to the water that cools them — here is where our programme lives day to day."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {PRACTICES.map(({ image, alt, icon: Icon, tag, title, body }) => (
              <article
                key={title}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-[0_2px_12px_-4px_rgba(11,45,107,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_44px_-16px_rgba(11,45,107,0.25)]"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={image}
                    alt={alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07204E]/60 via-transparent to-transparent" />
                  <span className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-[#0A6A38] backdrop-blur">
                    <Icon className="h-3.5 w-3.5" /> {tag}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-lg font-bold text-[#0B2D6B]">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
                </div>
              </article>
            ))}
          </div>
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
          <div className="relative mt-14">
            <div aria-hidden className="absolute left-0 right-0 top-[7px] hidden h-0.5 bg-border lg:block">
              <div className="h-full w-[37.5%] bg-gradient-to-r from-[#0A6A38] to-[#0B2D6B]" />
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
              {ROADMAP.map(({ year, status, title, items }) => {
                const statusStyles: Record<string, string> = {
                  completed: "bg-[#0A6A38] text-white",
                  active: "bg-[#0B2D6B] text-white",
                  upcoming: "bg-[#F4C542] text-[#07204E]",
                  future: "bg-white text-[#0B2D6B] border border-border",
                };
                const dotStyles: Record<string, string> = {
                  completed: "bg-[#0A6A38] ring-[#0A6A38]/20",
                  active: "bg-[#0B2D6B] ring-[#0B2D6B]/20",
                  upcoming: "bg-[#F4C542] ring-[#F4C542]/30",
                  future: "bg-white border border-border ring-border/40",
                };
                return (
                  <div key={year} className="relative">
                    <div aria-hidden className={`mb-5 hidden h-4 w-4 rounded-full ring-4 lg:block ${dotStyles[status]}`} />
                    <div className="flex h-full flex-col rounded-2xl border border-border bg-white p-6 shadow-[0_2px_12px_-4px_rgba(11,45,107,0.08)] transition hover:shadow-[0_14px_36px_-14px_rgba(11,45,107,0.2)]">
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
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Commitments — split with seedling image */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-5 lg:gap-16">
            <div className="relative order-last mx-auto w-full max-w-md lg:order-first lg:col-span-2 lg:max-w-none">
              <div className="overflow-hidden rounded-3xl shadow-[0_24px_60px_-20px_rgba(10,106,56,0.35)]">
                <img
                  src={factoryTeam}
                  alt="NBPPI production team in safety gear standing in front of the PP bag line"
                  loading="lazy"
                  className="aspect-4/3 w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 left-1/2 flex w-max -translate-x-1/2 items-center gap-3 rounded-2xl border border-border bg-white px-5 py-4 shadow-[0_16px_40px_-12px_rgba(11,45,107,0.25)]">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0A6A38]/10">
                  <Factory className="h-5 w-5 text-[#0A6A38]" />
                </span>
                <div>
                  <div className="font-display text-sm font-bold text-[#0B2D6B]">People-first manufacturing</div>
                  <div className="text-[11px] text-muted-foreground">Reviewed quarterly by senior management</div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-3">
              <SectionHeading
                eyebrow="For Our Buyers"
                title="What our sustainability commitment means for you."
                intro="Sourcing from NBPPI means your supply chain is backed by measurable environmental performance and regulatory readiness."
              />
              <div className="mt-10 space-y-5">
                {COMMITMENTS.map(({ icon: Icon, title, body }) => (
                  <div key={title} className="flex gap-5 rounded-2xl border border-border bg-[#F8F9FB] p-6 transition hover:border-[#0A6A38]/25">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0B2D6B]/10">
                      <Icon className="h-5 w-5 text-[#0B2D6B]" />
                    </div>
                    <div>
                      <h3 className="font-display text-base font-bold text-[#0B2D6B]">{title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Net-zero CTA — full-width image band */}
      <section className="relative isolate overflow-hidden">
        <img
          src={windTurbines}
          alt="Wind turbines on a field at sunrise"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07204E]/95 via-[#07204E]/80 to-[#07204E]/40" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:py-28">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-[#7FE0D4] backdrop-blur">
              <Leaf className="h-3.5 w-3.5" /> Net-Zero Aligned By 2030
            </div>
            <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              The future of industrial packaging is circular. We're building it now.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base">
              Read how mono-material PP and water-based inks are changing what recyclable industrial packaging looks like — or talk to us about a circular-line trial for your next order.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/blog/circular-economy"
                className="inline-flex items-center gap-2 rounded-xl bg-[#0A6A38] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#22887b]"
              >
                Read Article <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-white/25 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
              >
                Contact Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

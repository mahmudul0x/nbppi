import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/page-shell";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { PROCESS } from "@/lib/site-data";
import manufacturingExtrusion from "@/assets/manufacturing-extrusion.jpg";
import mfg01 from "@/assets/mfg/01-raw-material.jpg";
import mfg02 from "@/assets/mfg/02-extrusion.jpg";
import mfg03 from "@/assets/mfg/03-stretching.jpg";
import mfg04 from "@/assets/mfg/04-weaving.jpg";
import mfg05 from "@/assets/mfg/05-lamination.jpg";
import mfg06 from "@/assets/mfg/06-printing.jpg";
import mfg07 from "@/assets/mfg/07-cutting.jpg";
import mfg08 from "@/assets/mfg/08-stitching.jpg";
import mfg09 from "@/assets/mfg/09-quality.jpg";
import mfg10 from "@/assets/mfg/10-packing.jpg";
import mfg11 from "@/assets/mfg/11-delivery.jpg";
import { ArrowRight, ShieldCheck, Factory, Gauge, Layers } from "lucide-react";
import { Link } from "@tanstack/react-router";

const STAGE_IMAGES = [mfg01, mfg02, mfg03, mfg04, mfg05, mfg06, mfg07, mfg08, mfg09, mfg10, mfg11];

const STAGE_GROUPS = [
  { id: "input", label: "Material Input", range: [0, 1] },
  { id: "fabric", label: "Fabric Formation", range: [2, 4] },
  { id: "finishing", label: "Finishing & Print", range: [5, 7] },
  { id: "dispatch", label: "QC & Dispatch", range: [8, 10] },
];

export const Route = createFileRoute("/manufacturing")({
  head: () => ({
    meta: [
      { title: "Manufacturing — NBPPI" },
      { name: "description", content: "An 11-stage vertically integrated production process: extrusion, weaving, lamination, printing, QC and dispatch — under one roof." },
      { property: "og:title", content: "PP Woven Bag Manufacturing Process — NBPPI" },
      { property: "og:description", content: "11-stage vertically integrated PP woven bag production — extrusion, weaving, lamination, printing, quality control and dispatch under one roof in Rangpur, Bangladesh." },
      { property: "og:url", content: "https://northbengalpoly.com/manufacturing" },
      { property: "og:image", content: "https://northbengalpoly.com/og-image.jpg" },
      { property: "og:site_name", content: "NBPPI" },
    ],
    links: [{ rel: "canonical", href: "https://northbengalpoly.com/manufacturing" }],
  }),
  component: ManufacturingPage,
});

function ManufacturingPage() {
  const stages = PROCESS.map(([n, t, d], i) => ({ n, t, d, img: STAGE_IMAGES[i] }));
  return (
    <PageShell>
      <PageHero
        eyebrow="Manufacturing Process"
        title={<>From polymer pellet to<br /> palletized container.</>}
        intro="Eleven integrated stages — each one engineered, monitored and quality-checked inside a single, vertically operated industrial facility."
        image={manufacturingExtrusion}
        crumbs={[{ label: "Home", to: "/" }, { label: "Manufacturing" }]}
      />

      {/* Stats strip */}
      <section className="border-b border-border bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-border md:grid-cols-4">
          {[
            { icon: Factory, k: "11", l: "Production Stages" },
            { icon: Layers, k: "1", l: "Roof — Vertically Integrated" },
            { icon: Gauge, k: "24/7", l: "Continuous Operation" },
            { icon: ShieldCheck, k: "100%", l: "Pre-Shipment QC" },
          ].map((s, i) => (
            <div key={i} className="flex items-center gap-4 bg-white px-6 py-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0B2D6B]/5 text-[#0A6A38]">
                <s.icon className="h-6 w-6" />
              </div>
              <div>
                <div className="font-display text-2xl font-bold text-[#0B2D6B]">{s.k}</div>
                <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{s.l}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Intro */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Production Flow"
            title="11 integrated stages, one quality standard."
            intro="Every stage is operated by trained engineers using calibrated machinery from Starlinger, Lohia and other industry-leading suppliers — engineered for repeatability, traceability and export-grade consistency."
          />

          {/* Group nav */}
          <div className="mt-10 flex flex-wrap gap-3">
            {STAGE_GROUPS.map((g) => (
              <a
                key={g.id}
                href={`#${g.id}`}
                className="rounded-full border border-border bg-white px-5 py-2 text-xs font-medium uppercase tracking-[0.18em] text-[#0B2D6B] transition hover:border-[#0A6A38] hover:text-[#0A6A38]"
              >
                {g.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Alternating timeline of stages with images */}
      <section className="relative bg-background pb-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="relative">
            {/* Vertical line on desktop */}
            <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#0B2D6B]/15 to-transparent lg:block" />

            <div className="space-y-16 lg:space-y-24">
              {stages.map((s, i) => {
                const reversed = i % 2 === 1;
                return (
                  <div
                    key={s.n}
                    className={`group grid items-center gap-8 lg:grid-cols-2 lg:gap-16 ${
                      reversed ? "lg:[direction:rtl]" : ""
                    }`}
                  >
                    {/* Image */}
                    <div className="relative [direction:ltr]">
                      <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)]">
                        <img
                          src={s.img}
                          alt={s.t}
                          loading="lazy"
                          width={1024}
                          height={1024}
                          className="aspect-[4/3] w-full object-cover transition-transform duration-[1.4s] group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#0B2D6B]/30 via-transparent to-transparent" />
                        <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0B2D6B] backdrop-blur">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#0A6A38]" />
                          Stage {s.n}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="[direction:ltr]">
                      <div className="font-display text-7xl font-bold leading-none text-[#0B2D6B]/10 lg:text-8xl">
                        {s.n}
                      </div>
                      <h3 className="mt-4 font-display text-2xl font-bold text-[#0B2D6B] sm:text-3xl lg:text-4xl">
                        {s.t}
                      </h3>
                      <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">
                        {s.d}
                      </p>
                      <div className="mt-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#0A6A38]">
                        <span className="h-px w-8 bg-[#0A6A38]" />
                        Process step {i + 1} of {stages.length}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0B2D6B] py-20 text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-6 lg:flex-row lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#7FE0D4]">
              <span className="h-px w-8 bg-[#7FE0D4]" /> Build with NBPPI
            </div>
            <h3 className="mt-4 max-w-2xl font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Ready to specify your next production run?
            </h3>
            <p className="mt-4 max-w-xl text-white/70">
              Share your bag specification — size, GSM, lamination, print colors — and our engineering team will respond with a tailored production plan within 24 hours.
            </p>
          </div>
          <Link
            to="/quote"
            className="inline-flex items-center gap-2 rounded-[14px] bg-gradient-to-r from-[#D9A520] to-[#E8B844] px-7 py-4 text-sm font-semibold text-[#0B2D6B] shadow-lg transition hover:shadow-xl"
          >
            Request a Quote <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
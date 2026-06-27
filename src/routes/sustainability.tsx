import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/page-shell";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import factoryAerial from "@/assets/factory-aerial.jpg";
import { Recycle, Leaf, ShieldCheck, Boxes, Zap, Droplets } from "lucide-react";

export const Route = createFileRoute("/sustainability")({
  head: () => ({
    meta: [
      { title: "Sustainability — NBPPI" },
      { name: "description", content: "Energy-efficient production, waste recovery and 100% recyclable polypropylene — NBPPI's responsible manufacturing programme." },
      { property: "og:title", content: "Sustainability — NBPPI" },
      { property: "og:url", content: "/sustainability" },
    ],
    links: [{ rel: "canonical", href: "/sustainability" }],
  }),
  component: SustainabilityPage,
});

function SustainabilityPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Sustainability"
        title={<>Responsible production.<br /> Recyclable by design.</>}
        intro="Industrial packaging can be both durable and circular. NBPPI's sustainability programme integrates energy efficiency, waste recovery and recyclable mono-material engineering."
        image={factoryAerial}
        crumbs={[{ label: "Home", to: "/" }, { label: "Sustainability" }]}
      />

      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { i: Recycle, t: "100% Recyclable", d: "Mono-material polypropylene supports closed-loop recycling." },
              { i: Zap, t: "Energy Efficient", d: "High-efficiency motors, optimised extrusion and solar-assisted operations." },
              { i: Droplets, t: "Water Stewardship", d: "Minimal-water processes and on-site effluent monitoring." },
              { i: Boxes, t: "Waste Recovery", d: "Trims and rejects re-granulated into non-food industrial applications." },
              { i: Leaf, t: "Future-Focused", d: "R&D into biodegradable additives and renewable feedstocks." },
              { i: ShieldCheck, t: "Compliant", d: "Aligned with BSCI, Sedex and REACH supply-chain frameworks." },
            ].map(({ i: Icon, t, d }) => (
              <div key={t} className="rounded-2xl border border-border bg-card p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#2A9D8F]/10 text-[#2A9D8F]">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="mt-6 font-display text-lg font-semibold text-[#082B59]">{t}</div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#0A2A1F] via-[#082B59] to-[#04132A] py-24 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-4">
          {[
            ["18%", "Energy reduction vs 2020"],
            ["95%", "Production waste recovered"],
            ["100%", "Mono-material recyclable lines"],
            ["0", "Hazardous-substance complaints"],
          ].map(([n, l]) => (
            <div key={String(l)}>
              <div className="font-display text-5xl font-bold text-[#7FE0D4]">{n}</div>
              <div className="mt-3 text-sm uppercase tracking-[0.18em] text-white/60">{l}</div>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
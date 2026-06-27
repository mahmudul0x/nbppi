import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/page-shell";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import factoryAerial from "@/assets/factory-aerial.jpg";
import teamEngineer from "@/assets/team-engineer.jpg";
import { Award, Leaf, ShieldCheck, Settings2, Target, Eye, HeartHandshake } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — NBPPI" },
      { name: "description", content: "Two decades of engineering excellence in polypropylene woven packaging — NBPPI's story, mission and leadership." },
      { property: "og:title", content: "About — NBPPI" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const TIMELINE = [
  ["2008", "Founded", "First circular weaving line commissioned in Rangpur."],
  ["2012", "BOPP Capability", "Premium 8-color BOPP print operations launched."],
  ["2015", "Exports Begin", "First container shipped to international markets."],
  ["2018", "ISO 9001", "Quality management system fully certified."],
  ["2021", "Capacity Expansion", "Annual capacity scaled past 30,000 MT."],
  ["2023", "Sustainability Line", "Recyclable mono-material program launched."],
  ["2025", "Global Footprint", "22+ export markets across 4 continents."],
];

function AboutPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="About NBPPI"
        title={<>Engineering Bangladesh's most advanced<br /> polypropylene packaging operation.</>}
        intro="What began as a single weaving line has grown into a vertically integrated industrial manufacturer trusted across agriculture, food, construction and export markets."
        image={factoryAerial}
        crumbs={[{ label: "Home", to: "/" }, { label: "About" }]}
      />

      <section className="bg-background py-24">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-3">
          {[
            { i: Target, t: "Mission", d: "To engineer durable, sustainable polypropylene packaging that secures the world's most demanding supply chains." },
            { i: Eye, t: "Vision", d: "To become South Asia's most trusted manufacturer of industrial woven packaging, recognised globally for engineering excellence." },
            { i: HeartHandshake, t: "Promise", d: "Consistency at scale, certified quality, and partnerships measured in decades — not transactions." },
          ].map(({ i: Icon, t, d }) => (
            <div key={t} className="rounded-2xl border border-border bg-card p-8">
              <Icon className="h-7 w-7 text-[#2A9D8F]" />
              <div className="mt-5 font-display text-xl font-semibold text-[#082B59]">{t}</div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#F1F4F9] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="Core Values" title="The four principles behind every NBPPI bag." />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { i: Settings2, t: "Engineering Excellence", d: "Precision specs, certified machinery, measurable results." },
              { i: Award, t: "Quality", d: "ISO-aligned QC at every production checkpoint." },
              { i: ShieldCheck, t: "Integrity", d: "Transparent contracts and full supply-chain traceability." },
              { i: Leaf, t: "Sustainability", d: "Recyclable mono-material structures and waste recovery." },
            ].map(({ i: Icon, t, d }) => (
              <div key={t} className="rounded-xl border border-border bg-white p-6">
                <Icon className="h-6 w-6 text-[#2A9D8F]" />
                <div className="mt-5 font-display text-base font-semibold text-[#082B59]">{t}</div>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="Our Journey" title="From a single loom to a global supplier." />
          <div className="relative mt-16">
            <div className="absolute left-4 top-0 hidden h-full w-px bg-border md:block md:left-1/2" />
            <div className="space-y-10">
              {TIMELINE.map(([y, t, d], i) => (
                <div key={y} className={`relative grid gap-6 md:grid-cols-2 md:gap-12 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
                  <div className="md:text-right">
                    <div className="inline-block rounded-md bg-[#082B59] px-3 py-1 font-display text-sm font-bold text-white">
                      {y}
                    </div>
                    <div className="mt-3 font-display text-2xl font-bold text-[#082B59]">{t}</div>
                    <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground md:ml-auto">{d}</p>
                  </div>
                  <div className="hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#082B59] py-24 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-2xl shadow-[var(--shadow-elevated)]">
            <img src={teamEngineer} alt="NBPPI leadership" loading="lazy" className="h-full w-full object-cover" />
          </div>
          <div>
            <SectionHeading dark eyebrow="Message From Leadership" title="A note from our CEO." />
            <p className="mt-6 text-lg leading-relaxed text-white/80">
              &ldquo;We didn't set out to be the largest. We set out to be the most reliable — the
              kind of manufacturer whose name on a shipment means the supply chain doesn't need to
              worry. Two decades later, that principle still defines every line we run.&rdquo;
            </p>
            <div className="mt-8 border-t border-white/10 pt-6">
              <div className="font-display text-lg font-semibold">Md. Rezaul Karim</div>
              <div className="text-sm text-white/60">Managing Director · NBPPI</div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
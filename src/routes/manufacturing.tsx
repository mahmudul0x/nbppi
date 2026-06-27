import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/page-shell";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { PROCESS } from "@/lib/site-data";
import manufacturingExtrusion from "@/assets/manufacturing-extrusion.jpg";

export const Route = createFileRoute("/manufacturing")({
  head: () => ({
    meta: [
      { title: "Manufacturing — NBPPI" },
      { name: "description", content: "An 11-stage vertically integrated production process: extrusion, weaving, lamination, printing, QC and dispatch — under one roof." },
      { property: "og:title", content: "Manufacturing — NBPPI" },
      { property: "og:url", content: "/manufacturing" },
    ],
    links: [{ rel: "canonical", href: "/manufacturing" }],
  }),
  component: ManufacturingPage,
});

function ManufacturingPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Manufacturing Process"
        title={<>From polymer pellet to<br /> palletized container.</>}
        intro="Eleven integrated stages — each one engineered, monitored and quality-checked inside a single, vertically operated industrial facility."
        image={manufacturingExtrusion}
        crumbs={[{ label: "Home", to: "/" }, { label: "Manufacturing" }]}
      />

      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Production Flow"
            title="11 integrated stages, one quality standard."
            intro="Every stage is operated by trained engineers using calibrated machinery from Starlinger, Lohia and other industry-leading suppliers."
          />
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {PROCESS.map(([n, t, d]) => (
              <div
                key={n}
                className="group relative overflow-hidden rounded-xl border border-border bg-card p-7 transition hover:-translate-y-1 hover:border-[#2A9D8F]/40 hover:shadow-[var(--shadow-card)]"
              >
                <div className="font-display text-5xl font-bold text-[#D6DCE5] transition group-hover:text-[#2A9D8F]/40">
                  {n}
                </div>
                <div className="mt-4 font-display text-lg font-semibold text-[#082B59]">{t}</div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#2A9D8F] transition-all duration-500 group-hover:w-full" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import { PageShell } from "@/components/site/page-shell";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import factoryAerial from "@/assets/factory-aerial.jpg";
import teamEngineer from "@/assets/smnayonmahmud1.png";
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

function JourneyTimeline() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const yearRefs = useRef<(HTMLDivElement | null)[]>([]);
  const dotRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    let ctx: { revert: () => void } | null = null;
    (async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      ctx = gsap.context(() => {
        // Animate the vertical line growing downward
        if (lineRef.current) {
          gsap.fromTo(
            lineRef.current,
            { scaleY: 0, transformOrigin: "top center" },
            {
              scaleY: 1,
              ease: "none",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 70%",
                end: "bottom 80%",
                scrub: 0.8,
              },
            }
          );
        }

        // Stagger cards in from alternating sides
        cardRefs.current.forEach((card, i) => {
          if (!card) return;
          const fromLeft = i % 2 === 0;
          gsap.fromTo(
            card,
            { opacity: 0, x: fromLeft ? -60 : 60, y: 20 },
            {
              opacity: 1,
              x: 0,
              y: 0,
              duration: 0.7,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none none",
              },
            }
          );
        });

        // Year badges pop in with scale
        yearRefs.current.forEach((el) => {
          if (!el) return;
          gsap.fromTo(
            el,
            { scale: 0.5, opacity: 0 },
            {
              scale: 1,
              opacity: 1,
              duration: 0.5,
              ease: "back.out(1.7)",
              scrollTrigger: {
                trigger: el,
                start: "top 88%",
                toggleActions: "play none none none",
              },
            }
          );
        });

        // Dots pulse in
        dotRefs.current.forEach((dot) => {
          if (!dot) return;
          gsap.fromTo(
            dot,
            { scale: 0, opacity: 0 },
            {
              scale: 1,
              opacity: 1,
              duration: 0.4,
              ease: "elastic.out(1,0.5)",
              scrollTrigger: {
                trigger: dot,
                start: "top 88%",
                toggleActions: "play none none none",
              },
            }
          );
        });
      }, sectionRef);
    })();
    return () => ctx?.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-background py-20 sm:py-28">
      {/* Faint blueprint dot grid */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle, #0B2D6B14 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
        {/* Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#0A6A38]">
            <span className="h-px w-8 bg-[#0A6A38]" />
            Our Journey
            <span className="h-px w-8 bg-[#0A6A38]" />
          </div>
          <h2 className="mt-5 font-display text-2xl font-bold leading-tight text-[#0B2D6B] sm:text-3xl md:text-4xl lg:text-5xl">
            From a single loom to a global supplier.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            17 years of deliberate growth — every milestone earned on the factory floor.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mt-16 sm:mt-20">
          {/* Vertical spine */}
          <div className="absolute left-1/2 top-0 hidden h-full -translate-x-1/2 md:block">
            <div className="mx-auto w-px bg-[#0B2D6B]/10" style={{ height: "100%" }}>
              <div ref={lineRef} className="h-full w-full origin-top bg-gradient-to-b from-[#0B2D6B]/60 via-[#0A6A38]/70 to-[#0B2D6B]/60" />
            </div>
          </div>

          <div className="space-y-10 sm:space-y-14">
            {TIMELINE.map(([y, t, d], i) => {
              const isLeft = i % 2 === 0;
              return (
                <div key={y} className="relative flex flex-col md:flex-row md:items-center md:gap-0">

                  {/* Left side content */}
                  <div className={`flex flex-1 md:pr-10 lg:pr-14 ${isLeft ? "md:justify-end" : "md:invisible"}`}>
                    {isLeft && (
                      <div
                        ref={(el) => { cardRefs.current[i] = el; }}
                        className="group w-full max-w-sm rounded-2xl border border-border bg-white p-6 shadow-[0_4px_24px_-8px_rgba(11,45,107,0.10)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_-10px_rgba(11,45,107,0.18)] md:w-auto"
                      >
                        <div
                          ref={(el) => { yearRefs.current[i] = el; }}
                          className="inline-flex items-center gap-2 rounded-full bg-[#0B2D6B] px-3 py-1"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-[#7FE0D4]" />
                          <span className="font-display text-xs font-bold text-white tracking-wider">{y}</span>
                        </div>
                        <h3 className="mt-4 font-display text-lg font-bold text-[#0B2D6B]">{t}</h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{d}</p>
                        <div className="mt-4 h-px w-full bg-gradient-to-r from-[#0A6A38]/30 via-[#0B2D6B]/20 to-transparent group-hover:from-[#0A6A38]/60 transition-all duration-500" />
                      </div>
                    )}
                  </div>

                  {/* Centre dot */}
                  <div className="relative z-10 hidden md:flex md:flex-col md:items-center">
                    <div
                      ref={(el) => { dotRefs.current[i] = el; }}
                      className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#0A6A38] bg-white shadow-[0_0_0_5px_rgba(10,106,56,0.12)]"
                    >
                      <span className="h-2.5 w-2.5 rounded-full bg-[#0A6A38]" />
                    </div>
                  </div>

                  {/* Right side content */}
                  <div className={`flex flex-1 md:pl-10 lg:pl-14 ${!isLeft ? "md:justify-start" : "md:invisible"}`}>
                    {!isLeft && (
                      <div
                        ref={(el) => { cardRefs.current[i] = el; }}
                        className="group w-full max-w-sm rounded-2xl border border-border bg-white p-6 shadow-[0_4px_24px_-8px_rgba(11,45,107,0.10)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_-10px_rgba(11,45,107,0.18)] md:w-auto"
                      >
                        <div
                          ref={(el) => { yearRefs.current[i] = el; }}
                          className="inline-flex items-center gap-2 rounded-full bg-[#0B2D6B] px-3 py-1"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-[#7FE0D4]" />
                          <span className="font-display text-xs font-bold text-white tracking-wider">{y}</span>
                        </div>
                        <h3 className="mt-4 font-display text-lg font-bold text-[#0B2D6B]">{t}</h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{d}</p>
                        <div className="mt-4 h-px w-full bg-gradient-to-l from-[#0A6A38]/30 via-[#0B2D6B]/20 to-transparent group-hover:from-[#0A6A38]/60 transition-all duration-500" />
                      </div>
                    )}
                  </div>

                  {/* Mobile-only card (stacked, full width) */}
                  <div className="md:hidden">
                    <div className="flex items-start gap-4">
                      <div className="mt-1 flex flex-col items-center">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-[#0A6A38] bg-white shadow-[0_0_0_4px_rgba(10,106,56,0.10)]">
                          <span className="h-2 w-2 rounded-full bg-[#0A6A38]" />
                        </div>
                        {i < TIMELINE.length - 1 && <div className="mt-1 w-px flex-1 bg-[#0B2D6B]/15" style={{ minHeight: 32 }} />}
                      </div>
                      <div className="flex-1 pb-4">
                        <div className="inline-flex items-center gap-1.5 rounded-full bg-[#0B2D6B] px-3 py-1">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#7FE0D4]" />
                          <span className="font-display text-xs font-bold text-white">{y}</span>
                        </div>
                        <h3 className="mt-3 font-display text-base font-bold text-[#0B2D6B]">{t}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{d}</p>
                      </div>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom stats */}
        <div className="mt-16 grid grid-cols-3 gap-3 rounded-2xl border border-border bg-[#F1F4F9] p-4 sm:mt-20 sm:gap-6 sm:p-8">
          {[
            ["2008", "Founded"],
            ["22+", "Export Markets"],
            ["30k MT", "Annual Capacity"],
          ].map(([v, l]) => (
            <div key={l} className="text-center">
              <div className="font-display text-xl font-bold text-[#0B2D6B] sm:text-3xl">{v}</div>
              <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground sm:text-xs">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const MVP_ITEMS = [
  {
    i: Target,
    t: "Mission",
    d: "To engineer durable, sustainable polypropylene packaging that secures the world's most demanding supply chains.",
    accent: "#0A6A38",
  },
  {
    i: Eye,
    t: "Vision",
    d: "To become South Asia's most trusted manufacturer of industrial woven packaging, recognised globally for engineering excellence.",
    accent: "#0B2D6B",
  },
  {
    i: HeartHandshake,
    t: "Promise",
    d: "Consistency at scale, certified quality, and partnerships measured in decades — not transactions.",
    accent: "#1f618d",
  },
];

function MissionVisionPromise() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    let ctx: { revert: () => void } | null = null;
    (async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      ctx = gsap.context(() => {
        cardRefs.current.forEach((card, i) => {
          if (!card) return;
          gsap.fromTo(
            card,
            { opacity: 0, y: 48, scale: 0.96 },
            {
              opacity: 1, y: 0, scale: 1,
              duration: 0.65,
              ease: "power3.out",
              delay: i * 0.12,
              scrollTrigger: {
                trigger: card,
                start: "top 87%",
                toggleActions: "play none none none",
              },
            }
          );
          // icon counter-rotate in
          const icon = card.querySelector(".mvp-icon");
          if (icon) {
            gsap.fromTo(
              icon,
              { rotate: -15, opacity: 0, scale: 0.6 },
              {
                rotate: 0, opacity: 1, scale: 1,
                duration: 0.5,
                ease: "back.out(1.7)",
                delay: i * 0.12 + 0.2,
                scrollTrigger: {
                  trigger: card,
                  start: "top 87%",
                  toggleActions: "play none none none",
                },
              }
            );
          }
        });
      }, sectionRef);
    })();
    return () => ctx?.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-background py-10 sm:py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-4 sm:grid-cols-3 sm:gap-5 lg:gap-6">
          {MVP_ITEMS.map(({ i: Icon, t, d, accent }, idx) => (
            <div
              key={t}
              ref={(el) => { cardRefs.current[idx] = el; }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-white p-5 shadow-[0_2px_16px_-6px_rgba(11,45,107,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_-10px_rgba(11,45,107,0.16)] sm:p-6"
            >
              {/* top accent bar */}
              <div
                className="absolute inset-x-0 top-0 h-1 rounded-t-2xl transition-all duration-500 group-hover:h-1.5"
                style={{ backgroundColor: accent }}
              />
              {/* bg glow */}
              <div
                className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-10"
                style={{ backgroundColor: accent }}
              />
              <div
                className="mvp-icon flex h-10 w-10 items-center justify-center rounded-xl"
                style={{ backgroundColor: accent + "15" }}
              >
                <Icon className="h-5 w-5" style={{ color: accent }} />
              </div>
              <div
                className="mt-4 font-display text-base font-bold"
                style={{ color: accent }}
              >
                {t}
              </div>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">{d}</p>
              <div
                className="mt-4 h-px w-0 transition-all duration-500 group-hover:w-full"
                style={{ backgroundColor: accent + "40" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const CV_ITEMS = [
  { i: Settings2, t: "Engineering Excellence", d: "Precision specs, certified machinery, measurable results." },
  { i: Award, t: "Quality", d: "ISO-aligned QC at every production checkpoint." },
  { i: ShieldCheck, t: "Integrity", d: "Transparent contracts and full supply-chain traceability." },
  { i: Leaf, t: "Sustainability", d: "Recyclable mono-material structures and waste recovery." },
];

function CoreValues() {
  const sectionRef = useRef<HTMLElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    let ctx: { revert: () => void } | null = null;
    (async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      ctx = gsap.context(() => {
        gsap.fromTo(
          itemRefs.current.filter(Boolean),
          { opacity: 0, x: -32 },
          {
            opacity: 1, x: 0,
            duration: 0.55,
            ease: "power3.out",
            stagger: 0.1,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 82%",
              toggleActions: "play none none none",
            },
          }
        );
      }, sectionRef);
    })();
    return () => ctx?.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#F1F4F9] py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading eyebrow="Core Values" title="The four principles behind every NBPPI bag." />
        <div className="mt-10 grid grid-cols-2 gap-4 sm:mt-14 md:grid-cols-4 sm:gap-6">
          {CV_ITEMS.map(({ i: Icon, t, d }, idx) => (
            <div
              key={t}
              ref={(el) => { itemRefs.current[idx] = el; }}
              className="group rounded-xl border border-border bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#0A6A38]/30 hover:shadow-[0_8px_32px_-8px_rgba(10,106,56,0.15)] sm:p-6"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0A6A38]/8 transition-all duration-300 group-hover:bg-[#0A6A38] group-hover:scale-110">
                <Icon className="h-5 w-5 text-[#0A6A38] transition group-hover:text-white" />
              </div>
              <div className="mt-4 font-display text-sm font-bold text-[#0B2D6B] sm:text-base">{t}</div>
              <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground sm:text-sm">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="About NBPPI"
        title={<>Bangladesh's most trusted<br />PP woven manufacturer.</>}
        intro="What began as a single weaving line has grown into a vertically integrated industrial manufacturer trusted across agriculture, food, construction and export markets."
        image={factoryAerial}
        crumbs={[{ label: "Home", to: "/" }, { label: "About" }]}
      />

      <MissionVisionPromise />

      <section className="bg-[#F1F4F9] py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid items-center gap-10 lg:grid-cols-[360px_1fr] lg:gap-16">
            {/* Photo */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <div className="absolute -inset-3 rounded-3xl bg-linear-to-br from-[#0B2D6B]/10 to-[#0A6A38]/10 blur-2xl" />
                <img
                  src={teamEngineer}
                  alt="SM Nayon Mahmood — Chairman, NBPPI"
                  loading="lazy"
                  className="relative h-80 w-64 rounded-2xl object-cover object-top shadow-[0_24px_70px_-16px_rgba(11,45,107,0.28)] sm:h-96 sm:w-72 lg:h-110 lg:w-80"
                />
              </div>
            </div>

            {/* Quote card */}
            <div className="rounded-2xl border border-border bg-white p-8 shadow-[0_4px_24px_-8px_rgba(11,45,107,0.10)] sm:p-10">
              <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.25em] text-[#0A6A38]">
                <span className="h-px w-8 bg-[#0A6A38]" />
                Message From Leadership
              </div>
              <h2 className="mt-4 font-display text-2xl font-bold leading-tight text-[#0B2D6B] sm:text-3xl lg:text-4xl">
                A note from our Chairman.
              </h2>
              <div className="mt-6 border-l-2 border-[#0B2D6B]/20 pl-5">
                <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                  &ldquo;We didn't set out to be the largest. We set out to be the most reliable — the
                  kind of manufacturer whose name on a shipment means the supply chain doesn't need to
                  worry. Two decades later, that principle still defines every line we run.&rdquo;
                </p>
              </div>
              <div className="mt-8 flex items-center gap-4 border-t border-border pt-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0B2D6B]/8">
                  <span className="font-display text-base font-bold text-[#0B2D6B]">SN</span>
                </div>
                <div>
                  <div className="font-display text-base font-bold text-[#0B2D6B]">SM Nayon Mahmood</div>
                  <div className="text-sm text-muted-foreground">Chairman · NBPPI</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CoreValues />

      <JourneyTimeline />
    </PageShell>
  );
}
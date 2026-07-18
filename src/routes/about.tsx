import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import { PageShell } from "@/components/site/page-shell";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import factoryAerial from "@/assets/factory-aerial.jpg";
import teamEngineer from "@/assets/smnayonmahmud.png";
import mdMashiur from "@/assets/md-mashiur-rahman.png";
import {
  Award, Leaf, ShieldCheck, Settings2, Target, Eye,
  HeartHandshake, Lightbulb, Users, Star,
} from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "PP Woven Bag Manufacturer Bangladesh — About NBPPI" },
      { name: "description", content: "North Bengal Poly & Packaging Industries Ltd. (NBPPI) — Bangladesh's leading PP woven bag manufacturer since 2008. ISO 9001:2015 certified. 150+ clients, 22+ export markets. Meet our leadership team and learn our story." },
      { property: "og:title", content: "About NBPPI — Our Story, Mission & Leadership" },
      { property: "og:description", content: "Two decades of engineering excellence in polypropylene woven packaging — NBPPI's story, mission and leadership team based in Rangpur, Bangladesh." },
      { property: "og:url", content: "https://nbppi.com/about" },
      { property: "og:image", content: "https://nbppi.com/og-image.jpg" },
      { property: "og:site_name", content: "NBPPI" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "PP Woven Bag Manufacturer Bangladesh — About NBPPI" },
      { name: "twitter:description", content: "Bangladesh's leading PP woven bag manufacturer since 2008. ISO 9001:2015 certified. 150+ clients, 22+ export markets." },
      { name: "twitter:image", content: "https://nbppi.com/og-image.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://nbppi.com/about" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "North Bengal Poly & Packaging Industries Ltd.",
          alternateName: "NBPPI",
          url: "https://nbppi.com",
          logo: "https://nbppi.com/logoWebsite.png",
          foundingDate: "2008",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Room-807, Level-7, Zaman Court, 45 Dilkusha C/A",
            addressLocality: "Dhaka",
            postalCode: "1000",
            addressCountry: "BD",
          },
          member: [
            { "@type": "Person", name: "S.M. Nayon Mahmood", jobTitle: "Chairman" },
            { "@type": "Person", name: "Md. Mashiur Rahman", jobTitle: "Managing Director" },
          ],
        }),
      },
    ],
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
        cardRefs.current.forEach((card, i) => {
          if (!card) return;
          const fromLeft = i % 2 === 0;
          gsap.fromTo(
            card,
            { opacity: 0, x: fromLeft ? -60 : 60, y: 20 },
            {
              opacity: 1, x: 0, y: 0,
              duration: 0.7, ease: "power3.out",
              scrollTrigger: { trigger: card, start: "top 85%", toggleActions: "play none none none" },
            }
          );
        });
        yearRefs.current.forEach((el) => {
          if (!el) return;
          gsap.fromTo(
            el,
            { scale: 0.5, opacity: 0 },
            {
              scale: 1, opacity: 1,
              duration: 0.5, ease: "back.out(1.7)",
              scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none none" },
            }
          );
        });
        dotRefs.current.forEach((dot) => {
          if (!dot) return;
          gsap.fromTo(
            dot,
            { scale: 0, opacity: 0 },
            {
              scale: 1, opacity: 1,
              duration: 0.4, ease: "elastic.out(1,0.5)",
              scrollTrigger: { trigger: dot, start: "top 88%", toggleActions: "play none none none" },
            }
          );
        });
      }, sectionRef);
    })();
    return () => ctx?.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-background py-20 sm:py-28">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle, #0B2D6B14 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
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

        <div className="relative mt-16 sm:mt-20">
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
                  <div className={`flex flex-1 md:pr-10 lg:pr-14 ${isLeft ? "md:justify-end" : "md:invisible"}`}>
                    {isLeft && (
                      <div
                        ref={(el) => { cardRefs.current[i] = el; }}
                        className="group w-full max-w-sm rounded-2xl border border-border bg-white p-6 shadow-[0_4px_24px_-8px_rgba(11,45,107,0.10)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_-10px_rgba(11,45,107,0.18)] md:w-auto"
                      >
                        <div ref={(el) => { yearRefs.current[i] = el; }} className="inline-flex items-center gap-2 rounded-full bg-[#0B2D6B] px-3 py-1">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#7FE0D4]" />
                          <span className="font-display text-xs font-bold text-white tracking-wider">{y}</span>
                        </div>
                        <h3 className="mt-4 font-display text-lg font-bold text-[#0B2D6B]">{t}</h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{d}</p>
                        <div className="mt-4 h-px w-full bg-gradient-to-r from-[#0A6A38]/30 via-[#0B2D6B]/20 to-transparent group-hover:from-[#0A6A38]/60 transition-all duration-500" />
                      </div>
                    )}
                  </div>

                  <div className="relative z-10 hidden md:flex md:flex-col md:items-center">
                    <div ref={(el) => { dotRefs.current[i] = el; }} className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#0A6A38] bg-white shadow-[0_0_0_5px_rgba(10,106,56,0.12)]">
                      <span className="h-2.5 w-2.5 rounded-full bg-[#0A6A38]" />
                    </div>
                  </div>

                  <div className={`flex flex-1 md:pl-10 lg:pl-14 ${!isLeft ? "md:justify-start" : "md:invisible"}`}>
                    {!isLeft && (
                      <div
                        ref={(el) => { cardRefs.current[i] = el; }}
                        className="group w-full max-w-sm rounded-2xl border border-border bg-white p-6 shadow-[0_4px_24px_-8px_rgba(11,45,107,0.10)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_-10px_rgba(11,45,107,0.18)] md:w-auto"
                      >
                        <div ref={(el) => { yearRefs.current[i] = el; }} className="inline-flex items-center gap-2 rounded-full bg-[#0B2D6B] px-3 py-1">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#7FE0D4]" />
                          <span className="font-display text-xs font-bold text-white tracking-wider">{y}</span>
                        </div>
                        <h3 className="mt-4 font-display text-lg font-bold text-[#0B2D6B]">{t}</h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{d}</p>
                        <div className="mt-4 h-px w-full bg-gradient-to-l from-[#0A6A38]/30 via-[#0B2D6B]/20 to-transparent group-hover:from-[#0A6A38]/60 transition-all duration-500" />
                      </div>
                    )}
                  </div>

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

/* ── Our Purpose ──────────────────────────────────────────────────────── */
function OurPurpose() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-28">
      {/* Subtle dot grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage: "radial-gradient(circle, #0B2D6B0F 1.5px, transparent 1.5px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Top green accent bar */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#0A6A38]/0 via-[#0A6A38] to-[#0A6A38]/0" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">

          {/* Left — label + statement */}
          <div>
            <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.28em] text-[#0A6A38]">
              <span className="h-px w-8 bg-[#0A6A38]" />
              Our Purpose
            </div>
            <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-[#0B2D6B] sm:text-4xl lg:text-5xl">
              Why we exist.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              At North Bengal Poly &amp; Packaging Industries Ltd., manufacturing is more than producing
              packaging — it is about creating value, building trust, and acting responsibly for a
              better future.
            </p>

            {/* Three pillars */}
            <div className="mt-8 grid grid-cols-3 gap-3">
              {[
                { n: "People", d: "Creating value for every stakeholder." },
                { n: "Planet", d: "Protecting the environment we share." },
                { n: "Trust", d: "Earned through every product we make." },
              ].map(({ n, d }) => (
                <div key={n} className="rounded-xl border border-[#0A6A38]/15 bg-[#0A6A38]/4 p-4 text-center">
                  <div className="font-display text-sm font-bold text-[#0A6A38]">{n}</div>
                  <div className="mt-1 text-[10px] leading-snug text-muted-foreground">{d}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — large quote card */}
          <div className="relative">
            {/* Decorative blob */}
            <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-[#0A6A38]/8 blur-3xl" />
            <div className="absolute -bottom-10 -left-10 h-48 w-48 rounded-full bg-[#0B2D6B]/8 blur-3xl" />

            <div className="relative rounded-3xl border border-border bg-gradient-to-br from-[#0B2D6B] to-[#07204E] p-8 shadow-[0_30px_80px_-20px_rgba(11,45,107,0.35)] sm:p-12">
              {/* Large quote mark */}
              <div className="font-display text-8xl font-black leading-none text-[#7FE0D4]/20 sm:text-9xl">&ldquo;</div>
              <p className="mt-2 font-display text-lg font-semibold leading-relaxed text-white sm:text-xl lg:text-2xl">
                We create value for people, protect our planet, and earn trust through every product we deliver.
              </p>
              <div className="mt-8 flex items-center gap-3">
                <div className="h-px flex-1 bg-white/15" />
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#7FE0D4]">
                  North Bengal Poly &amp; Packaging Industries Ltd.
                </span>
                <div className="h-px flex-1 bg-white/15" />
              </div>

              {/* Bottom accent dots */}
              <div className="mt-6 flex justify-center gap-2">
                <span className="h-1.5 w-6 rounded-full bg-[#7FE0D4]" />
                <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
                <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ── Vision & Mission ─────────────────────────────────────────────────── */
function VisionMission() {
  const items = [
    {
      icon: Eye,
      label: "Vision",
      accent: "#0B2D6B",
      bg: "#0B2D6B",
      text: "To become South Asia's most trusted manufacturer of sustainable packaging solutions.",
    },
    {
      icon: Target,
      label: "Mission",
      accent: "#0A6A38",
      bg: "#0A6A38",
      text: "To deliver world-class packaging products through innovation, quality, operational excellence, and responsible manufacturing.",
    },
    {
      icon: HeartHandshake,
      label: "Promise",
      accent: "#1f618d",
      bg: "#1f618d",
      text: "Consistency at scale, certified quality, and partnerships measured in decades — not transactions.",
    },
  ];

  return (
    <section className="bg-[#F1F4F9] py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-5 sm:grid-cols-3 lg:gap-6">
          {items.map(({ icon: Icon, label, accent, bg, text }) => (
            <div
              key={label}
              className="group relative overflow-hidden rounded-2xl border border-border bg-white p-6 shadow-[0_2px_16px_-6px_rgba(11,45,107,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_-10px_rgba(11,45,107,0.16)] sm:p-8"
            >
              <div className="absolute inset-x-0 top-0 h-1 rounded-t-2xl transition-all duration-500 group-hover:h-1.5" style={{ backgroundColor: accent }} />
              <div className="flex h-12 w-12 items-center justify-center rounded-xl" style={{ backgroundColor: accent + "15" }}>
                <Icon className="h-6 w-6" style={{ color: accent }} />
              </div>
              <div className="mt-5 font-display text-lg font-bold" style={{ color: accent }}>{label}</div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">{text}</p>
              <div className="mt-5 h-px w-0 transition-all duration-500 group-hover:w-full" style={{ backgroundColor: accent + "40" }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Leadership Messages ──────────────────────────────────────────────── */
function Leadership() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        {/* Heading */}
        <div className="mb-12 text-center sm:mb-16">
          <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.25em] text-[#0A6A38]">
            <span className="h-px w-8 bg-[#0A6A38]" />
            Message From Leadership
            <span className="h-px w-8 bg-[#0A6A38]" />
          </div>
          <h2 className="mt-4 font-display text-2xl font-bold leading-tight text-[#0B2D6B] sm:text-3xl lg:text-4xl">
            Voices behind NBPPI.
          </h2>
        </div>

        <div className="flex flex-col gap-14">

          {/* ── Chairman ── */}
          <div className="grid items-center gap-10 lg:grid-cols-[360px_1fr] lg:gap-16">
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <div className="absolute -inset-3 rounded-3xl bg-linear-to-br from-[#0B2D6B]/10 to-[#0A6A38]/10 blur-2xl" />
                <img
                  src={teamEngineer}
                  alt="S.M. Nayon Mahmood — Chairman, NBPPI"
                  loading="lazy"
                  className="relative h-80 w-64 rounded-2xl object-cover object-top shadow-[0_24px_70px_-16px_rgba(11,45,107,0.28)] sm:h-96 sm:w-72 lg:h-110 lg:w-80"
                />
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-[#F8F9FB] p-8 shadow-[0_4px_24px_-8px_rgba(11,45,107,0.08)] sm:p-10">
              <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.25em] text-[#0A6A38]">
                <span className="h-px w-8 bg-[#0A6A38]" />
                Chairman's Message
              </div>
              <h3 className="mt-4 font-display text-xl font-bold leading-tight text-[#0B2D6B] sm:text-2xl lg:text-3xl">
                A note from our Chairman.
              </h3>
              <div className="mt-6 space-y-4 border-l-2 border-[#0B2D6B]/20 pl-5">
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  At North Bengal Poly &amp; Packaging Industries Ltd., we believe manufacturing is more
                  than producing packaging — it is about creating value, building trust, and acting
                  responsibly.
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  Our commitment has always been simple: to deliver products of consistent quality,
                  operate with integrity, invest in our people, and embrace sustainable manufacturing
                  practices that contribute to a better future.
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  We do not aspire merely to become the largest manufacturer. We aspire to become one
                  of the most trusted names in the packaging industry — recognized for reliability,
                  innovation, and long-term partnerships.
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  Thank you for being part of our journey — your confidence in us drives everything we do.
                </p>
                <p className="font-display text-sm font-semibold italic text-[#0B2D6B] sm:text-base">
                  &ldquo;Excellence is not our destination — it is our daily standard.&rdquo;
                </p>
              </div>
              <div className="mt-8 flex items-center gap-4 border-t border-border pt-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0B2D6B]/8">
                  <span className="font-display text-base font-bold text-[#0B2D6B]">SN</span>
                </div>
                <div>
                  <div className="font-display text-base font-bold text-[#0B2D6B]">S.M. Nayon Mahmood</div>
                  <div className="text-sm text-muted-foreground">Chairman · NBPPI</div>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-border" />
            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-muted-foreground">Leadership</span>
            <div className="h-px flex-1 bg-border" />
          </div>

          {/* ── Managing Director ── */}
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_360px] lg:gap-16">
            <div className="rounded-2xl border border-border bg-[#F8F9FB] p-8 shadow-[0_4px_24px_-8px_rgba(11,45,107,0.08)] sm:p-10">
              <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.25em] text-[#0A6A38]">
                <span className="h-px w-8 bg-[#0A6A38]" />
                Managing Director's Message
              </div>
              <h3 className="mt-4 font-display text-xl font-bold leading-tight text-[#0B2D6B] sm:text-2xl lg:text-3xl">
                A note from our Managing Director.
              </h3>
              <div className="mt-6 space-y-4 border-l-2 border-[#0A6A38]/30 pl-5">
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  At North Bengal Poly Packaging Industries Ltd, we are committed to creating
                  packaging that protects both products and the environment. By using recyclable and
                  biodegradable raw materials, we deliver sustainable packaging solutions without
                  compromising quality or performance.
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  We believe sustainability is a shared responsibility. Through responsible
                  manufacturing and continuous innovation, we are helping build a cleaner, greener
                  future — one package at a time.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-4 border-t border-border pt-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0A6A38]/8">
                  <span className="font-display text-base font-bold text-[#0A6A38]">MR</span>
                </div>
                <div>
                  <div className="font-display text-base font-bold text-[#0B2D6B]">Md. Mashiur Rahman</div>
                  <div className="text-sm text-muted-foreground">Managing Director · NBPPI</div>
                </div>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute -inset-3 rounded-3xl bg-linear-to-br from-[#0A6A38]/10 to-[#0B2D6B]/10 blur-2xl" />
                <img
                  src={mdMashiur}
                  alt="Md. Mashiur Rahman — Managing Director, NBPPI"
                  loading="lazy"
                  className="relative h-80 w-64 rounded-2xl object-cover object-top shadow-[0_24px_70px_-16px_rgba(11,45,107,0.28)] sm:h-96 sm:w-72 lg:h-110 lg:w-80"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ── Core Values (6 values) ───────────────────────────────────────────── */
const CV_ITEMS = [
  { i: ShieldCheck,     t: "Integrity",            d: "Transparent contracts, honest dealings, and full supply-chain traceability." },
  { i: Award,           t: "Quality",              d: "ISO-aligned QC at every production checkpoint — no compromise." },
  { i: Lightbulb,       t: "Innovation",           d: "Continuous improvement in materials, process and product design." },
  { i: Leaf,            t: "Sustainability",        d: "Recyclable mono-material structures and responsible waste recovery." },
  { i: Star,            t: "Customer Commitment",  d: "Tailored solutions, on-time delivery, and long-term partnerships." },
  { i: Users,           t: "Respect for People",   d: "Investing in our 1,200+ team members and the communities we serve." },
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
          { opacity: 0, y: 28 },
          {
            opacity: 1, y: 0,
            duration: 0.55, ease: "power3.out",
            stagger: 0.08,
            scrollTrigger: { trigger: sectionRef.current, start: "top 82%", toggleActions: "play none none none" },
          }
        );
      }, sectionRef);
    })();
    return () => ctx?.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#F1F4F9] py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading eyebrow="Core Values" title="Six principles behind every NBPPI bag." />
        <div className="mt-10 grid grid-cols-2 gap-4 sm:mt-14 sm:gap-5 md:grid-cols-3 lg:grid-cols-6">
          {CV_ITEMS.map(({ i: Icon, t, d }, idx) => (
            <div
              key={t}
              ref={(el) => { itemRefs.current[idx] = el; }}
              className="group rounded-xl border border-border bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#0A6A38]/30 hover:shadow-[0_8px_32px_-8px_rgba(10,106,56,0.15)]"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0A6A38]/8 transition-all duration-300 group-hover:bg-[#0A6A38] group-hover:scale-110">
                <Icon className="h-5 w-5 text-[#0A6A38] transition group-hover:text-white" />
              </div>
              <div className="mt-4 font-display text-sm font-bold text-[#0B2D6B]">{t}</div>
              <p className="mt-1.5 text-[11px] leading-relaxed text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Our Commitments ──────────────────────────────────────────────────── */
const COMMITMENTS = [
  { i: Award,       t: "Quality Excellence",          d: "Every product meets rigorous quality standards before leaving our facility." },
  { i: Settings2,   t: "On-time Delivery",            d: "Reliable dispatch schedules and container-ready packaging — always on schedule." },
  { i: Leaf,        t: "Environmental Responsibility", d: "Sustainable processes, recyclable materials, and continuous footprint reduction." },
  { i: Users,       t: "Employee Development",         d: "Training, certification, and growth opportunities for every team member." },
  { i: HeartHandshake, t: "Community Growth",         d: "Supporting local livelihoods and contributing to the communities around us." },
];

function OurCommitments() {
  return (
    <section className="bg-background py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Our Commitments"
          title="What we stand behind — every day."
          intro="Five commitments that guide how we operate, how we manufacture, and how we treat the people we work with."
        />
        <div className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-5 lg:grid-cols-5">
          {COMMITMENTS.map(({ i: Icon, t, d }) => (
            <div
              key={t}
              className="group rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#0B2D6B]/20 hover:shadow-[0_8px_32px_-8px_rgba(11,45,107,0.12)]"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0B2D6B]/6 transition-all duration-300 group-hover:bg-[#0B2D6B] group-hover:scale-110">
                <Icon className="h-5 w-5 text-[#0B2D6B] transition group-hover:text-white" />
              </div>
              <div className="mt-4 font-display text-sm font-bold text-[#0B2D6B]">{t}</div>
              <p className="mt-1.5 text-[11px] leading-relaxed text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Who We Are ──────────────────────────────────────────────────────── */
function WhoWeAre() {
  return (
    <section className="bg-background py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.25em] text-[#0A6A38]">
              <span className="h-px w-8 bg-[#0A6A38]" />
              Who We Are
            </div>
            <h2 className="mt-4 font-display text-2xl font-bold leading-tight text-[#0B2D6B] sm:text-3xl lg:text-4xl">
              A vertically integrated packaging manufacturer — built for the world.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              North Bengal Poly &amp; Packaging Industries Ltd. (NBPPI) is one of Bangladesh's leading
              manufacturers of polypropylene woven packaging. Founded in 2008 with a single weaving
              line in Rangpur, we have grown into a fully vertically integrated operation serving
              agriculture, food, feed, chemical, industrial and export markets across 22+ countries.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Our 320,000 sq.ft facility houses every stage of production — from PP extrusion and
              circular weaving to lamination, multi-color printing, quality inspection and
              container-ready dispatch — under a single, monitored roof.
            </p>
          </div>

          {/* Right — stat grid */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { v: "2008", l: "Year Founded" },
              { v: "1,200+", l: "Engineers & Operators" },
              { v: "320,000", l: "Sq.ft Facility" },
              { v: "30,000 MT", l: "Annual Capacity" },
              { v: "22+", l: "Export Markets" },
              { v: "4", l: "Continents Served" },
              { v: "11", l: "Production Stages" },
              { v: "100%", l: "Pre-Shipment QC" },
            ].map(({ v, l }) => (
              <div
                key={l}
                className="rounded-xl border border-border bg-card p-5 transition hover:-translate-y-0.5 hover:shadow-[0_8px_24px_-6px_rgba(11,45,107,0.10)]"
              >
                <div className="font-display text-2xl font-bold text-[#0B2D6B]">{v}</div>
                <div className="mt-1 text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Why Choose North Bengal ──────────────────────────────────────────── */
function WhyChoose() {
  const reasons = [
    { n: "Global Standards", d: "ISO 9001:2015 certified processes with export-grade QC at every stage." },
    { n: "Local Commitment", d: "Headquartered in Bangladesh, deeply invested in local supply chains and communities." },
    { n: "Custom Manufacturing", d: "Every bag engineered to your exact dimensions, GSM, print and lamination spec." },
    { n: "Vertically Integrated", d: "Extrusion to dispatch — every stage under one roof for consistency and speed." },
    { n: "Bulk Capability", d: "Container-scale production with consistent quality across high-volume orders." },
    { n: "Trusted Partnerships", d: "150+ clients across Bangladesh and 22+ export markets — relationships built over decades." },
  ];

  return (
    <section className="relative overflow-hidden bg-[#0B2D6B] py-14 text-white sm:py-20 lg:py-24">
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.28em] text-[#7FE0D4]">
            <span className="h-px w-8 bg-[#7FE0D4]" />
            Why Choose North Bengal
            <span className="h-px w-8 bg-[#7FE0D4]" />
          </div>
          <h2 className="mt-4 font-display text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">
            Global Standards &bull; Local Commitment.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/65">
            We combine world-class manufacturing practices with the agility, relationships and
            cost-efficiency of a locally rooted industrial operation.
          </p>
        </div>

        {/* Reasons grid */}
        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:grid-cols-2 sm:mt-14 lg:grid-cols-3">
          {reasons.map(({ n, d }) => (
            <div key={n} className="group bg-[#0B2D6B] p-6 transition hover:bg-[#0d3a73] sm:p-8">
              <div className="flex h-2 w-8 rounded-full bg-[#7FE0D4] transition-all duration-300 group-hover:w-14" />
              <div className="mt-5 font-display text-base font-bold text-white">{n}</div>
              <p className="mt-2 text-sm leading-relaxed text-white/60">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Page ─────────────────────────────────────────────────────────────── */
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

      {/* 1. Our Purpose */}
      <OurPurpose />

      {/* 2. Vision / Mission / Promise */}
      <VisionMission />

      {/* 3. Leadership Messages */}
      <Leadership />

      {/* 4. Who We Are */}
      <WhoWeAre />

      {/* 5. Core Values */}
      <CoreValues />

      {/* 6. Our Commitments */}
      <OurCommitments />

      {/* 7. Why Choose North Bengal */}
      <WhyChoose />

      {/* 8. Journey Timeline */}
      <JourneyTimeline />

    </PageShell>
  );
}

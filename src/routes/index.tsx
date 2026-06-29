import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Factory,
  ShieldCheck,
  Leaf,
  Truck,
  Settings2,
  Layers,
  Wrench,
  Award,
  CircleCheck,
  ChevronRight,
  Quote,
  Sprout,
  Wheat,
  FlaskConical,
  HardHat,
  Beef,
  Ship,
  ShoppingBag,
  Landmark,
  Recycle,
  Boxes,
  MessageSquare,
  PencilRuler,
  CheckCircle2,
  PackageCheck,
  Rocket,
} from "lucide-react";
import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";
import { FloatingActions } from "@/components/site/floating";
import { SectionHeading } from "@/components/site/section-heading";
import { HeroSlider } from "@/components/site/hero-slider";
import { PRODUCTS, INDUSTRIES, CLIENTS, TRUST_BAR } from "@/lib/site-data";
import heroFactory from "@/assets/hero-factory.jpg";
import factoryAerial from "@/assets/factory-aerial.jpg";
import qualityLab from "@/assets/quality-lab.jpg";
import weavingImg from "@/assets/weaving.jpg";
import warehouseImg from "@/assets/warehouse.jpg";
import manufacturingExtrusion from "@/assets/manufacturing-extrusion.jpg";
import productWoven from "@/assets/product-woven.jpg";
import productBopp from "@/assets/product-bopp.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NBPPI — Engineering Stronger Packaging for Tomorrow" },
      {
        name: "description",
        content:
          "North Bengal Poly & Packaging Industries Ltd. manufactures premium polypropylene woven packaging for agriculture, food, construction and industrial sectors worldwide.",
      },
      { property: "og:title", content: "NBPPI — Engineering Stronger Packaging for Tomorrow" },
      {
        property: "og:description",
        content:
          "Premium PP woven, BOPP, laminated and export packaging solutions — engineered in Bangladesh, trusted across 22+ countries.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "North Bengal Poly & Packaging Industries Ltd.",
          alternateName: "NBPPI",
          url: "/",
          industry: "Polypropylene Woven Bag Manufacturing",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Rangpur",
            addressCountry: "BD",
          },
        }),
      },
    ],
  }),
  component: Index,
});

function useCountUp(target: number, duration = 1800, start = false) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf = 0;
    const t0 = performance.now();
    const step = (t: number) => {
      const p = Math.min(1, (t - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.floor(eased * target));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, start]);
  return value;
}

function useInView<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    if (!ref.current || seen) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setSeen(true);
      },
      { threshold: 0.25 },
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, [seen]);
  return { ref, seen };
}

function Stat({ value, suffix, label }: { value: number; suffix?: string; label: string }) {
  const { ref, seen } = useInView<HTMLDivElement>();
  const n = useCountUp(value, 1600, seen);
  return (
    <div ref={ref} className="border-l border-white/15 pl-5">
      <div className="font-display text-4xl font-bold tracking-tight text-white md:text-5xl">
        {n.toLocaleString()}
        {suffix}
      </div>
      <div className="mt-2 text-xs font-medium uppercase tracking-[0.18em] text-white/60">
        {label}
      </div>
    </div>
  );
}

function Hero() {
  return <HeroSlider />;
}

function TrustBar() {
  const sectionRef = useRef<HTMLElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx: { revert: () => void } | null = null;
    (async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      ctx = gsap.context(() => {
        // Stagger items up from below
        gsap.fromTo(
          itemRefs.current.filter(Boolean),
          { opacity: 0, y: 28, scale: 0.94 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.55,
            ease: "power3.out",
            stagger: 0.08,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          }
        );
        // Shimmer line sweeps across
        if (lineRef.current) {
          gsap.fromTo(
            lineRef.current,
            { scaleX: 0, transformOrigin: "left center" },
            {
              scaleX: 1,
              duration: 0.9,
              ease: "power2.inOut",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 88%",
                toggleActions: "play none none none",
              },
            }
          );
        }
      }, sectionRef);
    })();
    return () => ctx?.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden border-y border-border bg-white">
      {/* animated bottom accent line */}
      <div
        ref={lineRef}
        className="absolute bottom-0 left-0 h-0.5 w-full bg-linear-to-r from-[#0A6A38]/60 via-[#0B2D6B]/40 to-[#0A6A38]/60"
      />

      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-border md:grid-cols-3 lg:grid-cols-6">
        {TRUST_BAR.map((t, i) => (
          <div
            key={t}
            ref={(el) => { itemRefs.current[i] = el; }}
            className="group flex flex-col items-center justify-center gap-2 px-3 py-5 text-center sm:px-6 sm:py-6"
          >
            {/* Icon with ring */}
            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#0A6A38]/20 bg-[#0A6A38]/6 transition-all duration-300 group-hover:border-[#0A6A38]/50 group-hover:bg-[#0A6A38]/12 group-hover:scale-110">
              <CircleCheck className="h-4 w-4 text-[#0A6A38]" />
            </div>
            {/* Label */}
            <span className="text-[11px] font-semibold leading-snug text-[#0B2D6B] transition-colors duration-200 group-hover:text-[#0A6A38] sm:text-xs">
              {t}
            </span>
            {/* Active dot */}
            <span className="h-1 w-1 rounded-full bg-[#0A6A38]/40 transition-all duration-300 group-hover:bg-[#0A6A38] group-hover:w-4" />
          </div>
        ))}
      </div>
    </section>
  );
}

function OurPurpose() {
  return (
    <section className="relative overflow-hidden bg-white py-14 sm:py-20 lg:py-24">
      {/* Dot grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage: "radial-gradient(circle, #0B2D6B0F 1.5px, transparent 1.5px)",
          backgroundSize: "28px 28px",
        }}
      />
      {/* Top accent */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#0A6A38]/0 via-[#0A6A38] to-[#0A6A38]/0" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">

          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.28em] text-[#0A6A38]">
              <span className="h-px w-8 bg-[#0A6A38]" />
              Our Purpose
            </div>
            <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-[#0B2D6B] sm:text-4xl lg:text-5xl">
              Why we exist.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              At North Bengal Poly &amp; Packaging Industries Ltd., manufacturing is more than
              producing packaging — it is about creating value, building trust, and acting
              responsibly for a better future.
            </p>
            {/* Three pillars */}
            <div className="mt-8 grid grid-cols-3 gap-3">
              {[
                { n: "People", d: "Creating value for every stakeholder." },
                { n: "Planet", d: "Protecting the environment we share." },
                { n: "Trust", d: "Earned through every product we make." },
              ].map(({ n, d }) => (
                <div key={n} className="rounded-xl border border-[#0A6A38]/15 bg-[#0A6A38]/5 p-4 text-center">
                  <div className="font-display text-sm font-bold text-[#0A6A38]">{n}</div>
                  <div className="mt-1 text-[10px] leading-snug text-muted-foreground">{d}</div>
                </div>
              ))}
            </div>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#0B2D6B] hover:text-[#0A6A38]"
            >
              Learn more about us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Right — quote card */}
          <div className="relative">
            <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-[#0A6A38]/8 blur-3xl" />
            <div className="absolute -bottom-10 -left-10 h-48 w-48 rounded-full bg-[#0B2D6B]/8 blur-3xl" />
            <div className="relative rounded-3xl border border-border bg-gradient-to-br from-[#0B2D6B] to-[#07204E] p-8 shadow-[0_30px_80px_-20px_rgba(11,45,107,0.35)] sm:p-12">
              <div className="font-display text-8xl font-black leading-none text-[#7FE0D4]/20 sm:text-9xl">&ldquo;</div>
              <p className="mt-2 font-display text-lg font-semibold leading-relaxed text-white sm:text-xl lg:text-2xl">
                We create value for people, protect our planet, and earn trust through every product we deliver.
              </p>
              <div className="mt-8 flex items-center gap-3">
                <div className="h-px flex-1 bg-white/15" />
                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#7FE0D4]">
                  Brand Philosophy · NBPPI
                </span>
                <div className="h-px flex-1 bg-white/15" />
              </div>
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

function About() {
  const values = [
    { icon: Settings2, t: "Engineering", d: "Precision-engineered specs across every product line." },
    { icon: Award, t: "Quality", d: "ISO-aligned QC at every stage of production." },
    { icon: ShieldCheck, t: "Integrity", d: "Transparent contracts, traceable supply chains." },
    { icon: Leaf, t: "Sustainability", d: "Recyclable mono-material, energy-efficient lines." },
  ];
  return (
    <section id="about" className="bg-background py-16 md:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="About NBPPI"
              title={
                <>
                  Multinational-scale <span className="text-[#0A6A38]">industrial</span> packaging
                  manufacturing.
                </>
              }
              intro="From a single weaving line in 2008 to one of the region's most advanced polypropylene operations, NBPPI engineers durable, food-grade and export-ready bags for the world's most demanding supply chains."
            />
            <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-6 lg:mt-10">
              {values.map(({ icon: Icon, t, d }) => (
                <div
                  key={t}
                  className="rounded-xl border border-border bg-card p-4 transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-card)] sm:p-5"
                >
                  <Icon className="h-5 w-5 text-[#0A6A38] sm:h-6 sm:w-6" />
                  <div className="mt-3 font-display text-sm font-semibold text-[#0B2D6B] sm:mt-4 sm:text-base">
                    {t}
                  </div>
                  <div className="mt-1 text-xs leading-relaxed text-muted-foreground sm:mt-1.5 sm:text-sm">{d}</div>
                </div>
              ))}
            </div>
            <Link
              to="/about"
              className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-[#0B2D6B] hover:text-[#0A6A38]"
            >
              Read our full story <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-2xl shadow-[var(--shadow-elevated)]">
              <img
                src={factoryAerial}
                alt="NBPPI complex"
                width={1600}
                height={1000}
                loading="lazy"
                className="h-56 w-full object-cover transition-transform duration-[1.4s] hover:scale-105 sm:h-80 md:h-105 lg:h-130"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0B2D6B]/85 via-[#0B2D6B]/30 to-transparent p-8 text-white">
                <div className="flex flex-wrap items-end justify-between gap-6">
                  <div>
                    <div className="text-xs uppercase tracking-[0.2em] text-white/60">
                      Headquarters &amp; Plant
                    </div>
                    <div className="mt-2 font-display text-2xl font-semibold">
                      Rangpur Industrial Zone, Bangladesh
                    </div>
                  </div>
                  <div className="text-right text-sm text-white/75">
                    <div>320,000 sq.ft facility</div>
                    <div>1,200+ engineers &amp; operators</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 grid grid-cols-3 divide-x divide-border rounded-xl border border-border bg-card">
              {[
                ["2008", "Founded"],
                ["2015", "Export Begins"],
                ["2023", "Sustainability Line"],
              ].map(([y, l]) => (
                <div key={y} className="p-6 text-center">
                  <div className="font-display text-2xl font-bold text-[#0B2D6B]">{y}</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    {l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  const items = [
    { icon: Wrench, t: "Custom Manufacturing", d: "Every bag engineered to your dimensions, weight, print and lamination spec." },
    { icon: Factory, t: "Flexible Production", d: "Trial runs to bulk programmes — scaled to your order volume and timeline." },
    { icon: Layers, t: "Premium Printing", d: "Multi-color flexo and BOPP printing with Pantone-matched brand fidelity." },
    { icon: ShieldCheck, t: "Strict Quality Control", d: "GSM, burst, load and print checks at every production stage." },
    { icon: Boxes, t: "Bulk Order Capability", d: "Container-scale production with consistent quality across large lots." },
    { icon: Truck, t: "Reliable Delivery", d: "On-time dispatch across Bangladesh — customer-centric service end to end." },
  ];
  return (
    <section className="relative bg-[#0B2D6B] py-16 text-white md:py-24 lg:py-28">
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-6 sm:gap-8">
          <SectionHeading
            dark
            eyebrow="Why Choose Us"
            title={
              <>
                Built for scale.
                <br /> Engineered for trust.
              </>
            }
          />
          <p className="max-w-md text-base leading-relaxed text-white/70">
            Vertically integrated extrusion, weaving, lamination, printing and QC — under a single
            industrial roof.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:mt-14 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {items.map(({ icon: Icon, t, d }) => (
            <div key={t} className="group relative bg-[#0B2D6B] p-4 transition hover:bg-[#0d3a73] sm:p-6 lg:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#0A6A38]/15 text-[#7FE0D4] transition group-hover:bg-[#0A6A38] group-hover:text-white">
                <Icon className="h-6 w-6" />
              </div>
              <div className="mt-6 font-display text-lg font-semibold">{t}</div>
              <div className="mt-2 text-sm leading-relaxed text-white/65">{d}</div>
              <ArrowUpRight className="absolute right-6 top-6 h-5 w-5 text-white/0 transition group-hover:text-white/60" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductsPreview() {
  return (
    <section id="products" className="bg-background py-16 md:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-6 sm:gap-8">
          <SectionHeading
            eyebrow="Our Products"
            title={
              <>
                Industrial packaging,
                <br /> engineered to spec.
              </>
            }
          />
          <Link
            to="/products"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-[#0B2D6B] hover:text-[#0A6A38]"
          >
            View full catalogue
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        <div className="mt-10 grid gap-5 sm:gap-8 sm:mt-14 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {PRODUCTS.slice(0, 6).map((p) => (
            <article
              key={p.slug}
              className="group overflow-hidden rounded-2xl border border-border bg-card transition hover:-translate-y-1 hover:shadow-[var(--shadow-elevated)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
                />
                <div className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#0B2D6B] backdrop-blur">
                  {p.category}
                </div>
              </div>
              <div className="p-7">
                <h3 className="font-display text-xl font-semibold text-[#0B2D6B]">{p.name}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{p.short}</p>
                <div className="mt-6 flex items-center justify-between border-t border-border pt-5">
                  <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                    {p.applications.length} applications
                  </span>
                  <Link
                    to="/products"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0A6A38] transition group-hover:gap-2.5"
                  >
                    Read more <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const INDUSTRY_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Sprout, Wheat, FlaskConical, HardHat, Leaf, Beef, Ship, ShoppingBag, Landmark,
};

function Industries() {
  return (
    <section className="bg-[#F1F4F9] py-16 md:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-6 sm:gap-8">
          <SectionHeading
            eyebrow="Industries We Serve"
            title={
              <>
                Packaging power for
                <br />
                every supply chain.
              </>
            }
          />
          <Link
            to="/industries"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-[#0B2D6B] hover:text-[#0A6A38]"
          >
            All industries
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-14 sm:gap-4 md:grid-cols-2 lg:mt-16 lg:grid-cols-5">
          {INDUSTRIES.map((i) => {
            const Icon = INDUSTRY_ICONS[i.icon] ?? Sprout;
            return (
              <div
                key={i.name}
                className="group rounded-xl border border-border bg-white p-6 transition hover:-translate-y-1 hover:border-[#0A6A38]/40 hover:shadow-[var(--shadow-card)]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#0B2D6B]/5 text-[#0B2D6B] transition group-hover:bg-[#0A6A38] group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="mt-5 font-display text-base font-semibold text-[#0B2D6B]">
                  {i.name}
                </div>
                <div className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                  {i.desc}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Sustainability() {
  return (
    <section
      id="sustainability"
      className="relative overflow-hidden bg-gradient-to-br from-[#083F23] via-[#0B2D6B] to-[#07204E] py-16 text-white md:py-24 lg:py-28"
    >
      <div className="absolute -right-32 top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full bg-[#0A6A38]/20 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 lg:gap-16 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <SectionHeading
              dark
              eyebrow="Sustainability"
              title={
                <>
                  Responsible production.
                  <br />
                  <span className="text-[#7FE0D4]">Recyclable by design.</span>
                </>
              }
              intro="Energy-efficient extrusion, waste-stream recovery and 100% recyclable polypropylene — aligning industrial packaging with a circular future."
            />
            <Link
              to="/sustainability"
              className="mt-10 inline-flex items-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-semibold text-[#0B2D6B] transition hover:bg-[#D9DEE8]"
            >
              Sustainability programme <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="lg:col-span-6">
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              {[
                { i: Recycle, t: "100% Recyclable", d: "Mono-material PP supports closed-loop recycling." },
                { i: Leaf, t: "Lower Footprint", d: "Solar-assisted operations, high-efficiency motors." },
                { i: Boxes, t: "Waste Recovery", d: "Trims and rejects re-granulated for non-food use." },
                { i: ShieldCheck, t: "Compliant", d: "Aligned with BSCI, Sedex and REACH guidelines." },
              ].map(({ i: Icon, t, d }) => (
                <div key={t} className="bg-[#0B2D6B]/70 p-7 transition hover:bg-[#0B2D6B]/95">
                  <Icon className="h-7 w-7 text-[#7FE0D4]" />
                  <div className="mt-5 font-display text-lg font-semibold">{t}</div>
                  <div className="mt-1.5 text-sm leading-relaxed text-white/65">{d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ClientsMarquee() {
  const row = [...CLIENTS, ...CLIENTS];
  return (
    <section className="border-y border-border bg-white py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading eyebrow="Our Clients" title="Trusted by industry leaders." />
          <span className="text-sm text-muted-foreground">
            150+ business clients across Bangladesh and 22+ export markets
          </span>
        </div>
      </div>
      <div className="relative mt-12 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-white to-transparent" />
        <div className="flex w-max animate-marquee gap-16 px-6">
          {row.map((c, i) => (
            <div
              key={`${c}-${i}`}
              className="flex h-16 items-center justify-center rounded-md border border-border bg-white px-10 font-display text-lg font-bold tracking-wider text-[#0B2D6B]/70 transition hover:text-[#0B2D6B]"
            >
              {c.toUpperCase()}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const TESTIMONIALS = [
  {
    q: "NBPPI has been the backbone of our packaging supply for nearly a decade. We've scaled from 3 containers a quarter to 12 — their consistency at that volume is genuinely rare in this market.",
    n: "Md. Rafiqul Islam",
    role: "Head of Procurement",
    c: "Aman Feed Ltd., Dhaka",
    industry: "Feed Manufacturing",
    stat: "10 years · 12 containers/quarter",
  },
  {
    q: "We switched to NBPPI's BOPP laminated bags for our premium rice export line in 2023. Our UK distributor immediately commented that our packaging was now competitive with Thai product. That's not a small thing.",
    n: "S.M. Tanvir Ahmed",
    role: "Export Manager",
    c: "Golden Harvest Agro, Narayanganj",
    industry: "Agriculture & Rice Export",
    stat: "Since 2023 · UK & UAE markets",
  },
  {
    q: "Zero quality complaints across 18 container shipments to the GCC. For a cement manufacturer, packaging failure means product failure — NBPPI understands that and it shows in every batch.",
    n: "Khalid Al-Rashidi",
    role: "Supply Chain Director",
    c: "Gulf Construction Supplies, UAE",
    industry: "Cement & Construction",
    stat: "18 containers · 0 complaints",
  },
  {
    q: "Their export documentation team is genuinely outstanding. Our LC discrepancy rate dropped from 8% to under 1% after we moved to NBPPI. That alone saves us more than the price difference.",
    n: "Amara Diallo",
    role: "Procurement Manager",
    c: "West Africa Trading Co., Nigeria",
    industry: "Industrial Distribution",
    stat: "LC discrepancy rate: < 1%",
  },
  {
    q: "We needed food-grade PE-lined bags with a specific GSM and MVTR for our processed food export. NBPPI's technical team walked us through the specification, provided pre-production samples, and hit every target on the first production run.",
    n: "Nurul Huda",
    role: "Operations Director",
    c: "Bengal Foods Processing, Chittagong",
    industry: "Food Processing",
    stat: "First-run approval · food-grade certified",
  },
];

function Testimonials() {
  const [active, setActive] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const autoRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = (idx: number) => {
    setActive((idx + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  useEffect(() => {
    autoRef.current = setTimeout(() => goTo(active + 1), 4000);
    return () => { if (autoRef.current) clearTimeout(autoRef.current); };
  }, [active]);

  useEffect(() => {
    if (!cardRef.current) return;
    (async () => {
      const gsap = (await import("gsap")).default;
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.45, ease: "power3.out" }
      );
    })();
  }, [active]);

  const t = TESTIMONIALS[active];

  return (
    <section className="bg-[#0B2D6B] py-16 text-white md:py-24 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeading dark eyebrow="Testimonials" title="What our clients say." align="center" />

        <div
          ref={cardRef}
          className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur sm:mt-14 sm:p-10"
        >
          <div className="flex items-center justify-between">
            <Quote className="h-8 w-8 text-[#7FE0D4]" />
            <span className="rounded-full border border-[#7FE0D4]/30 bg-[#7FE0D4]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#7FE0D4]">
              {t.industry}
            </span>
          </div>
          <p className="mt-6 text-base leading-relaxed text-white/85 sm:text-lg">{t.q}</p>
          {t.stat && (
            <div className="mt-5 inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#0A6A38]" />
              <span className="text-[11px] font-semibold text-white/60">{t.stat}</span>
            </div>
          )}
          <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
            <div>
              <div className="font-display text-sm font-semibold text-white">{t.n}</div>
              <div className="mt-0.5 text-[11px] text-[#7FE0D4]">{t.role}</div>
              <div className="mt-0.5 text-xs text-white/45">{t.c}</div>
            </div>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === active ? "w-6 bg-[#7FE0D4]" : "w-2 bg-white/25 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-5 flex justify-center gap-3">
          <button
            onClick={() => goTo(active - 1)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/60 transition hover:border-white/40 hover:bg-white/10 hover:text-white"
          >
            <ChevronRight className="h-4 w-4 rotate-180" />
          </button>
          <button
            onClick={() => goTo(active + 1)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/60 transition hover:border-white/40 hover:bg-white/10 hover:text-white"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

function CtaStrip() {
  return (
    <section className="bg-background py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="overflow-hidden rounded-2xl bg-gradient-to-r from-[#0B2D6B] via-[#0d3a73] to-[#123E87] p-7 text-white sm:rounded-3xl sm:p-10 md:p-16">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-10">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#7FE0D4]">
                <span className="h-px w-8 bg-[#7FE0D4]" />
                Ready to scale your packaging?
              </div>
              <h3 className="mt-4 font-display text-2xl font-bold leading-tight sm:text-3xl md:text-4xl lg:text-5xl">
                Get a tailored industrial quotation in 24 hours.
              </h3>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Link
                to="/quote"
                className="inline-flex items-center gap-2 rounded-[14px] bg-[linear-gradient(135deg,#F4C542_0%,#D9A520_50%,#B8860B_100%)] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_15px_45px_-10px_rgba(217,165,32,0.55)] transition hover:brightness-110"
              >
                Request Quote <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Talk to sales
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ManufacturingTeaser() {
  return (
    <section id="manufacturing" className="bg-[#F1F4F9] py-16 md:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Manufacturing"
          title="From polymer pellet to palletized container."
          intro="A fully integrated production line — every stage engineered, monitored and quality-checked under one roof."
        />
        <div className="mt-10 grid gap-6 lg:mt-12 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <div className="overflow-hidden rounded-2xl shadow-[var(--shadow-card)]">
              <img src={manufacturingExtrusion} alt="" loading="lazy" className="h-48 w-full object-cover lg:h-full" />
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="grid grid-cols-3 gap-3 sm:gap-4 md:grid-cols-3">
              {[
                ["Extrusion", weavingImg],
                ["Weaving", productWoven],
                ["Lamination", productBopp],
                ["Printing", productBopp],
                ["Quality", qualityLab],
                ["Warehousing", warehouseImg],
              ].map(([t, img]) => (
                <div key={t} className="group relative overflow-hidden rounded-xl">
                  <img src={img} alt="" loading="lazy" className="h-24 w-full object-cover transition-transform duration-700 group-hover:scale-110 sm:h-32 md:h-36" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B2D6B]/85 to-transparent" />
                  <div className="absolute bottom-3 left-3 font-display text-sm font-semibold text-white">{t}</div>
                </div>
              ))}
            </div>
            <Link
              to="/manufacturing"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#0B2D6B] hover:text-[#0A6A38]"
            >
              View full manufacturing process <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function CustomManufacturing() {
  const steps = [
    { i: MessageSquare, t: "Customer Requirement", d: "Share your specs — dimensions, weight, print, lamination." },
    { i: PencilRuler, t: "Design Consultation", d: "Our engineers translate your brief into a manufacturable spec." },
    { i: CheckCircle2, t: "Sample Approval", d: "Production-grade samples for sign-off before bulk." },
    { i: Factory, t: "Manufacturing", d: "Dedicated production runs on calibrated lines." },
    { i: ShieldCheck, t: "Quality Inspection", d: "Multi-point QC: GSM, burst, print and stitch checks." },
    { i: PackageCheck, t: "Delivery", d: "Bundled, palletised and dispatched on schedule." },
  ];
  return (
    <section className="bg-background py-16 md:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 lg:gap-14 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="Custom Manufacturing"
              title={
                <>
                  Built around <span className="text-[#0A6A38]">your requirements.</span>
                </>
              }
              intro="Every business has unique packaging needs. At NBPPI we manufacture custom PP woven bags based on each client's specifications — dimensions, weight capacity, lamination, printing, colors, branding, stitching style and packaging requirements."
            />
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-border bg-card p-6 text-sm leading-relaxed text-muted-foreground">
              <span className="font-semibold text-[#0B2D6B]">OEM &amp; B2B partners only.</span>{" "}
              From feed mills and rice mills to seed companies and agri brands — NBPPI is engineered
              as a long-term manufacturing partner, not a generic supplier.
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border/60 sm:mt-14 md:grid-cols-2 lg:mt-16 lg:grid-cols-6">
          {steps.map(({ i: Icon, t, d }, idx) => (
            <div key={t} className="relative bg-card p-5 transition hover:bg-[#F1F4F9] sm:p-7">
              <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#0A6A38]">
                Step {String(idx + 1).padStart(2, "0")}
              </div>
              <Icon className="mt-4 h-7 w-7 text-[#0B2D6B]" />
              <div className="mt-4 font-display text-sm font-semibold text-[#0B2D6B]">{t}</div>
              <div className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{d}</div>
              {idx < steps.length - 1 && (
                <ArrowRight className="absolute right-3 top-1/2 hidden h-4 w-4 -translate-y-1/2 text-[#0B2D6B]/30 lg:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FutureExpansion() {
  return (
    <section className="bg-background py-14 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="overflow-hidden rounded-2xl border border-border bg-[#F1F4F9] sm:rounded-3xl">
          <div className="grid items-center gap-8 p-7 sm:p-10 md:grid-cols-2 md:p-16 md:gap-10">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-[#0A6A38]/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#0A6A38]">
                <Rocket className="h-3.5 w-3.5" /> Growing Capabilities
              </div>
              <h3 className="mt-4 font-display text-2xl font-bold leading-tight text-[#0B2D6B] sm:text-3xl md:text-4xl">
                On the roadmap: high-strength bags for cement &amp; construction.
              </h3>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
                Our future expansion roadmap includes the development of high-strength woven bags
                for the cement and construction industries as production capacity continues to grow.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                ["2026", "Capacity Expansion"],
                ["2026", "Cement Bag R&D"],
                ["2027", "Construction Line"],
                ["Future", "Export Programmes"],
              ].map(([y, l]) => (
                <div key={l} className="rounded-xl border border-border bg-white p-5">
                  <div className="font-display text-xl font-bold text-[#0B2D6B]">{y}</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    {l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader transparentOnTop />
      <main>
        <Hero />
        <TrustBar />
        <OurPurpose />
        <About />
        <CustomManufacturing />
        <WhyChooseUs />
        <ProductsPreview />
        <ManufacturingTeaser />
        <Industries />
        <Sustainability />
        <FutureExpansion />
        <ClientsMarquee />
        <Testimonials />
        <CtaStrip />
      </main>
      <SiteFooter />
      <FloatingActions />
    </div>
  );
}
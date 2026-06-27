import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  Globe,
  Linkedin,
  Facebook,
  Factory,
  ShieldCheck,
  Leaf,
  Truck,
  Settings2,
  Boxes,
  Layers,
  Recycle,
  Wrench,
  Award,
  CircleCheck,
  ChevronRight,
  Quote,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import heroFactory from "@/assets/hero-factory.jpg";
import productWoven from "@/assets/product-woven.jpg";
import productBopp from "@/assets/product-bopp.jpg";
import manufacturingExtrusion from "@/assets/manufacturing-extrusion.jpg";
import qualityLab from "@/assets/quality-lab.jpg";
import factoryAerial from "@/assets/factory-aerial.jpg";
import weavingImg from "@/assets/weaving.jpg";
import warehouseImg from "@/assets/warehouse.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NBPPI — North Bengal Poly & Packaging Industries Ltd." },
      {
        name: "description",
        content:
          "Engineering high-performance polypropylene woven bags and industrial packaging for agriculture, food, chemical, cement and feed sectors worldwide.",
      },
      { property: "og:title", content: "NBPPI — Engineering Stronger Packaging Solutions" },
      {
        property: "og:description",
        content:
          "A premier PP woven bag manufacturer delivering precision packaging at industrial scale for Bangladesh and global export markets.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
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

const NAV = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Products", "#products"],
  ["Manufacturing", "#manufacturing"],
  ["Quality", "#quality"],
  ["Sustainability", "#sustainability"],
  ["Gallery", "#gallery"],
  ["Contact", "#contact"],
] as const;

function TopBar() {
  return (
    <div className="hidden border-b border-white/10 bg-[#081A30] text-white/80 lg:block">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-xs">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2">
            <Phone className="h-3.5 w-3.5" /> +880 1700 000 000
          </span>
          <span className="flex items-center gap-2">
            <Mail className="h-3.5 w-3.5" /> info@nbppi.com
          </span>
          <span className="flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5" /> Rangpur Industrial Zone, Bangladesh
          </span>
          <span className="flex items-center gap-2">
            <Clock className="h-3.5 w-3.5" /> Sun–Thu · 9:00–18:00
          </span>
        </div>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-1.5 transition hover:text-white">
            <Globe className="h-3.5 w-3.5" /> EN
          </button>
          <span className="h-3 w-px bg-white/20" />
          <Linkedin className="h-3.5 w-3.5 cursor-pointer transition hover:text-white" />
          <Facebook className="h-3.5 w-3.5 cursor-pointer transition hover:text-white" />
        </div>
      </div>
    </div>
  );
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className="sticky top-0 z-50">
      <TopBar />
      <div
        className={`backdrop-blur-md transition-all duration-300 ${
          scrolled
            ? "border-b border-border bg-background/85 shadow-sm"
            : "border-b border-transparent bg-[#0B2341]/95 lg:bg-[#0B2341]"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#home" className="flex items-center gap-3">
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-md font-display text-sm font-bold ${
                scrolled ? "bg-[#0B2341] text-white" : "bg-white text-[#0B2341]"
              }`}
            >
              NB
            </div>
            <div className="leading-tight">
              <div
                className={`font-display text-sm font-bold ${
                  scrolled ? "text-[#0B2341]" : "text-white"
                }`}
              >
                NBPPI
              </div>
              <div
                className={`text-[10px] uppercase tracking-[0.18em] ${
                  scrolled ? "text-muted-foreground" : "text-white/60"
                }`}
              >
                Poly &amp; Packaging Ind. Ltd.
              </div>
            </div>
          </a>
          <nav className="hidden items-center gap-1 lg:flex">
            {NAV.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className={`relative rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  scrolled
                    ? "text-foreground/80 hover:text-[#0B2341]"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-md bg-[#145DA0] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0f4a82]"
          >
            Request Quote
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden bg-[#0B2341] text-white">
      <div className="absolute inset-0">
        <img
          src={heroFactory}
          alt="NBPPI manufacturing facility"
          width={1920}
          height={1280}
          className="h-full w-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B2341] via-[#0B2341]/85 to-[#0B2341]/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0B2341]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-16 px-6 pb-28 pt-24 md:pt-32 lg:grid-cols-12 lg:pb-36 lg:pt-40">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-white/80 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-[#1E8E5A]" />
            Industrial Packaging · Est. 2008
          </div>
          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            Engineering stronger
            <br />
            <span className="text-[#D6DCE5]">packaging solutions.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
            North Bengal Poly &amp; Packaging Industries Ltd. delivers high-performance
            polypropylene woven bags for agriculture, food, chemical, cement, feed and industrial
            applications — manufactured at scale for Bangladesh and 20+ export markets.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#products"
              className="group inline-flex items-center gap-2 rounded-md bg-white px-6 py-3.5 text-sm font-semibold text-[#0B2341] transition hover:bg-[#D6DCE5]"
            >
              Explore Products
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-md border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
            >
              Request Quotation
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="relative rounded-2xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-md">
            <div className="text-xs font-medium uppercase tracking-[0.2em] text-white/50">
              Production at a glance
            </div>
            <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-8">
              <Stat value={17} suffix="+" label="Years of Excellence" />
              <Stat value={36000} suffix=" MT" label="Annual Capacity" />
              <Stat value={850} suffix="+" label="Clients Served" />
              <Stat value={22} suffix="" label="Countries Exported" />
            </div>
            <div className="mt-8 flex items-center justify-between rounded-xl border border-white/10 bg-[#081A30] px-4 py-3 text-xs text-white/70">
              <span className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-[#1E8E5A]" />
                ISO 9001 · BSCI · Sedex
              </span>
              <span>Certified Manufacturer</span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-5 text-xs uppercase tracking-[0.18em] text-white/45">
          <span>Trusted by industry leaders</span>
          <div className="flex flex-wrap items-center gap-x-10 gap-y-3 text-white/55">
            {["BRAC", "Pran Group", "Akij Group", "ACI", "Square", "Bashundhara"].map((b) => (
              <span key={b} className="font-display text-sm font-semibold tracking-wider">
                {b.toUpperCase()}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  dark = false,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
  align?: "left" | "center";
  dark?: boolean;
}) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <div
        className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] ${
          dark ? "text-[#7FB1E8]" : "text-[#145DA0]"
        }`}
      >
        <span
          className={`h-px w-8 ${dark ? "bg-[#7FB1E8]" : "bg-[#145DA0]"}`}
        />
        {eyebrow}
      </div>
      <h2
        className={`mt-5 font-display text-4xl font-bold leading-[1.1] tracking-tight md:text-5xl ${
          dark ? "text-white" : "text-[#0B2341]"
        }`}
      >
        {title}
      </h2>
      {intro ? (
        <p
          className={`mt-5 text-base leading-relaxed md:text-lg ${
            dark ? "text-white/70" : "text-muted-foreground"
          }`}
        >
          {intro}
        </p>
      ) : null}
    </div>
  );
}

function About() {
  const values = [
    { icon: ShieldCheck, t: "Integrity", d: "Transparent contracts and traceable supply chains." },
    { icon: Award, t: "Quality", d: "ISO-aligned QC at every stage of production." },
    { icon: Leaf, t: "Sustainability", d: "Recyclable materials and energy-efficient lines." },
    { icon: Settings2, t: "Innovation", d: "Continuous investment in modern machinery." },
  ];
  return (
    <section id="about" className="bg-background py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="About NBPPI"
              title={
                <>
                  A multinational scale of <span className="text-[#145DA0]">industrial</span>{" "}
                  packaging manufacturing.
                </>
              }
              intro="From a single weaving line in 2008 to one of the region's most advanced polypropylene packaging operations, NBPPI engineers durable, food-grade and export-ready bags for the world's most demanding supply chains."
            />
            <div className="mt-10 grid grid-cols-2 gap-6">
              {values.map(({ icon: Icon, t, d }) => (
                <div
                  key={t}
                  className="rounded-xl border border-border bg-card p-5 transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-card)]"
                >
                  <Icon className="h-6 w-6 text-[#145DA0]" />
                  <div className="mt-4 font-display text-base font-semibold text-[#0B2341]">
                    {t}
                  </div>
                  <div className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{d}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-2xl shadow-[var(--shadow-elevated)]">
              <img
                src={factoryAerial}
                alt="NBPPI manufacturing complex"
                width={1600}
                height={1000}
                loading="lazy"
                className="h-[420px] w-full object-cover transition-transform duration-[1.4s] hover:scale-105 md:h-[520px]"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0B2341]/85 via-[#0B2341]/30 to-transparent p-8">
                <div className="flex flex-wrap items-end justify-between gap-6 text-white">
                  <div>
                    <div className="text-xs uppercase tracking-[0.2em] text-white/60">
                      Headquarters &amp; Plant
                    </div>
                    <div className="mt-2 font-display text-2xl font-semibold">
                      Rangpur Industrial Zone, BD
                    </div>
                  </div>
                  <div className="text-right text-sm text-white/75">
                    <div>Total area · 320,000 sq.ft</div>
                    <div>Workforce · 1,200+ engineers &amp; operators</div>
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
                  <div className="font-display text-2xl font-bold text-[#0B2341]">{y}</div>
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
    { icon: Factory, t: "Advanced Manufacturing", d: "Starlinger & Lohia weaving lines with automated quality monitoring." },
    { icon: Layers, t: "Premium Raw Materials", d: "Virgin polypropylene granules from certified petrochemical partners." },
    { icon: Wrench, t: "Custom Engineering", d: "Bespoke GSM, denier, sizing and lamination for every industrial use." },
    { icon: ShieldCheck, t: "Quality Assurance", d: "100% pre-shipment inspection and full traceability." },
    { icon: Truck, t: "Global Logistics", d: "FCL/LCL export to 22+ countries with on-time delivery SLAs." },
    { icon: CircleCheck, t: "Compliant & Certified", d: "ISO 9001, BSCI, Sedex and food-grade compliance." },
  ];
  return (
    <section className="relative bg-[#0B2341] py-28 text-white">
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeading
            dark
            eyebrow="Why Choose Us"
            title={
              <>
                Built for scale. <br />
                Engineered for trust.
              </>
            }
          />
          <p className="max-w-md text-base leading-relaxed text-white/70">
            Every NBPPI bag is the result of integrated extrusion, weaving, lamination, printing and
            QC — under a single, vertically operated industrial roof.
          </p>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 md:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, t, d }) => (
            <div
              key={t}
              className="group relative bg-[#0B2341] p-8 transition hover:bg-[#0f2c52]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#145DA0]/15 text-[#7FB1E8] transition group-hover:bg-[#145DA0] group-hover:text-white">
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

const PRODUCTS = [
  {
    img: productWoven,
    cat: "Core Range",
    t: "PP Woven Bags",
    d: "Standard polypropylene woven sacks engineered for high tensile loads, available 5–100 kg.",
  },
  {
    img: productBopp,
    cat: "Premium Print",
    t: "BOPP Laminated Bags",
    d: "High-definition multi-color BOPP printed bags for premium retail and brand presence.",
  },
  {
    img: warehouseImg,
    cat: "Agri & Food",
    t: "Rice, Flour & Sugar Bags",
    d: "Food-grade certified bags with anti-slip weave and moisture-resistant lamination.",
  },
  {
    img: weavingImg,
    cat: "Industrial",
    t: "Cement & Chemical Bags",
    d: "Heavy-duty UV-stabilized sacks for cement, fertilizer, minerals and bulk chemicals.",
  },
  {
    img: manufacturingExtrusion,
    cat: "Specialty",
    t: "Feed & Seed Bags",
    d: "Breathable, anti-static woven structures designed for livestock feed and seed storage.",
  },
  {
    img: factoryAerial,
    cat: "Export",
    t: "Bulk & Custom Packaging",
    d: "FIBC, container liners and fully bespoke industrial packaging for export programs.",
  },
];

function Products() {
  return (
    <section id="products" className="bg-background py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeading
            eyebrow="Products"
            title={
              <>
                Industrial packaging,
                <br />
                engineered to specification.
              </>
            }
          />
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-[#145DA0] hover:text-[#0B2341]"
          >
            View full catalogue
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((p) => (
            <article
              key={p.t}
              className="group overflow-hidden rounded-2xl border border-border bg-card transition hover:-translate-y-1 hover:shadow-[var(--shadow-elevated)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={p.img}
                  alt={p.t}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
                />
                <div className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#0B2341] backdrop-blur">
                  {p.cat}
                </div>
              </div>
              <div className="p-7">
                <h3 className="font-display text-xl font-semibold text-[#0B2341]">{p.t}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
                <div className="mt-6 flex items-center justify-between border-t border-border pt-5">
                  <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                    Datasheet
                  </span>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#145DA0] transition group-hover:gap-2.5"
                  >
                    Read more <ChevronRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const STEPS = [
  ["01", "Raw Material", "Certified virgin PP granules sourced from global petrochemical partners."],
  ["02", "Extrusion", "Tape extrusion calibrated to precise denier for tensile and stretch specs."],
  ["03", "Weaving", "Circular looms produce uniform-density fabric tubes at industrial scale."],
  ["04", "Lamination", "Optional BOPP / PE lamination for moisture, UV and printability."],
  ["05", "Printing", "Up to 8-color flexographic and BOPP print with brand-grade color matching."],
  ["06", "Cutting & Stitching", "Automated cutting and reinforced stitching for load-rated seams."],
  ["07", "Quality Inspection", "Tensile, drop, dimension and print QC under ISO-aligned protocols."],
  ["08", "Packaging & Dispatch", "Export-ready palletization and same-week container loading."],
];

function Manufacturing() {
  return (
    <section id="manufacturing" className="bg-[#F1F4F9] py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Manufacturing Process"
          title={
            <>
              From polymer pellet to
              <br />
              palletized container.
            </>
          }
          intro="A fully integrated production line — every stage engineered, monitored and quality-checked under one roof."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map(([n, t, d]) => (
            <div
              key={n}
              className="group relative overflow-hidden rounded-xl border border-border bg-white p-6 transition hover:-translate-y-1 hover:border-[#145DA0]/40 hover:shadow-[var(--shadow-card)]"
            >
              <div className="font-display text-5xl font-bold text-[#D6DCE5] transition group-hover:text-[#145DA0]/40">
                {n}
              </div>
              <div className="mt-4 font-display text-lg font-semibold text-[#0B2341]">{t}</div>
              <div className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</div>
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#145DA0] transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Quality() {
  return (
    <section id="quality" className="bg-background py-28">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center">
        <div className="relative">
          <div className="overflow-hidden rounded-2xl shadow-[var(--shadow-elevated)]">
            <img
              src={qualityLab}
              alt="Quality control laboratory"
              width={1200}
              height={900}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-8 -right-4 hidden w-64 rounded-xl border border-border bg-white p-5 shadow-[var(--shadow-elevated)] md:block">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#1E8E5A]/10 text-[#1E8E5A]">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <div className="font-display text-sm font-semibold text-[#0B2341]">
                  99.7% Pass Rate
                </div>
                <div className="text-xs text-muted-foreground">Pre-shipment QC</div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <SectionHeading
            eyebrow="Quality Control"
            title="Engineered to the specification. Verified at every stage."
            intro="An in-house testing laboratory runs tensile, elongation, GSM, denier, drop and printability tests against ISO and customer-defined parameters."
          />
          <div className="mt-10 space-y-5">
            {[
              ["Tensile & Strength Testing", "Warp / weft tensile, seam strength and burst pressure validation."],
              ["Dimensional Accuracy", "Calibrated GSM, denier and bag-size verification per production batch."],
              ["Print & Color QC", "Spectrophotometer-based color matching to brand standards."],
              ["Pre-Shipment Inspection", "100% visual + AQL sampling before container loading."],
            ].map(([t, d]) => (
              <div key={t} className="flex gap-4">
                <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[#145DA0]/10 text-[#145DA0]">
                  <CircleCheck className="h-4 w-4" />
                </div>
                <div>
                  <div className="font-display text-base font-semibold text-[#0B2341]">{t}</div>
                  <div className="text-sm leading-relaxed text-muted-foreground">{d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Sustainability() {
  return (
    <section
      id="sustainability"
      className="relative overflow-hidden bg-gradient-to-br from-[#0F2C1F] via-[#0B2341] to-[#08172A] py-28 text-white"
    >
      <div className="absolute -right-32 top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full bg-[#1E8E5A]/15 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <SectionHeading
              dark
              eyebrow="Sustainability"
              title={
                <>
                  Responsible production.
                  <br />
                  <span className="text-[#7FE0AC]">Recyclable by design.</span>
                </>
              }
              intro="NBPPI invests in energy-efficient extrusion, waste-stream recovery and 100% recyclable polypropylene structures — aligning industrial packaging with a circular future."
            />
          </div>
          <div className="lg:col-span-6">
            <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:grid-cols-2">
              {[
                { i: Recycle, t: "100% Recyclable", d: "Mono-material PP construction supports closed-loop recycling." },
                { i: Leaf, t: "Lower Footprint", d: "Solar-assisted operations and high-efficiency motors." },
                { i: Boxes, t: "Waste Recovery", d: "Edge trims and rejects re-granulated into non-food applications." },
                { i: ShieldCheck, t: "Compliant", d: "Aligned with BSCI, Sedex and REACH guidelines." },
              ].map(({ i: Icon, t, d }) => (
                <div
                  key={t}
                  className="bg-[#0B2341]/70 p-7 transition hover:bg-[#0B2341]/95"
                >
                  <Icon className="h-7 w-7 text-[#7FE0AC]" />
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

function Gallery() {
  const tiles = [
    { src: heroFactory, h: "row-span-2", alt: "Weaving line" },
    { src: weavingImg, h: "", alt: "Loom close-up" },
    { src: manufacturingExtrusion, h: "", alt: "Extrusion line" },
    { src: warehouseImg, h: "", alt: "Finished goods warehouse" },
    { src: productWoven, h: "row-span-2", alt: "PP woven bags" },
    { src: factoryAerial, h: "", alt: "Factory aerial" },
    { src: qualityLab, h: "", alt: "QC laboratory" },
    { src: productBopp, h: "", alt: "BOPP printed bag" },
  ];
  return (
    <section id="gallery" className="bg-background py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeading
            eyebrow="Inside The Plant"
            title="A visual tour of NBPPI operations."
          />
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-[#145DA0] hover:text-[#0B2341]"
          >
            Schedule a factory visit
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <div className="mt-16 grid auto-rows-[180px] grid-cols-2 gap-3 md:auto-rows-[220px] md:grid-cols-4">
          {tiles.map((t, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-xl bg-muted ${t.h}`}
            >
              <img
                src={t.src}
                alt={t.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1.4s] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2341]/70 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
              <div className="absolute bottom-3 left-4 text-xs font-medium uppercase tracking-[0.18em] text-white opacity-0 transition group-hover:opacity-100">
                {t.alt}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const items = [
    {
      q: "NBPPI has been a backbone of our packaging supply for nearly a decade — their consistency at scale is what differentiates them in this industry.",
      n: "Procurement Director",
      c: "Leading FMCG Group, Dhaka",
    },
    {
      q: "From custom BOPP print to on-time export documentation, the NBPPI team operates with the discipline of a multinational manufacturer.",
      n: "Import Manager",
      c: "Agri Exporter, East Africa",
    },
    {
      q: "Zero quality complaints across 14 container shipments. That speaks louder than any certificate.",
      n: "Supply Chain Lead",
      c: "Cement Manufacturer, GCC",
    },
  ];
  return (
    <section className="bg-[#0B2341] py-28 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          dark
          eyebrow="Clients & Testimonials"
          title="Trusted across industries and continents."
        />
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {items.map((t, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur transition hover:border-white/20 hover:bg-white/[0.06]"
            >
              <Quote className="h-7 w-7 text-[#7FB1E8]" />
              <p className="mt-6 text-base leading-relaxed text-white/85">{t.q}</p>
              <div className="mt-8 border-t border-white/10 pt-5">
                <div className="font-display text-sm font-semibold">{t.n}</div>
                <div className="text-xs text-white/55">{t.c}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-background py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-[#0B2341] to-[#11366B] text-white shadow-[var(--shadow-elevated)]">
          <div className="grid gap-0 lg:grid-cols-12">
            <div className="p-10 lg:col-span-5 lg:p-14">
              <SectionHeading
                dark
                eyebrow="Get In Touch"
                title="Let's engineer your packaging program."
              />
              <p className="mt-5 text-white/70">
                Tell us about your application, volume and timeline. Our industrial sales team
                typically responds within 24 business hours.
              </p>
              <div className="mt-10 space-y-5 text-sm">
                {[
                  { i: MapPin, l: "Head Office", v: "Rangpur Industrial Zone, North Bengal, Bangladesh" },
                  { i: Phone, l: "Sales Hotline", v: "+880 1700 000 000 · +880 2 555 0000" },
                  { i: Mail, l: "Email", v: "sales@nbppi.com · export@nbppi.com" },
                  { i: Clock, l: "Working Hours", v: "Sunday – Thursday · 9:00 AM – 6:00 PM (BST)" },
                ].map(({ i: Icon, l, v }) => (
                  <div key={l} className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10">
                      <Icon className="h-4.5 w-4.5 text-[#7FB1E8]" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-[0.18em] text-white/50">{l}</div>
                      <div className="mt-1 text-white/90">{v}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-10 text-foreground lg:col-span-7 lg:p-14">
              <div className="font-display text-2xl font-bold text-[#0B2341]">
                Request a Quotation
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                All fields are required. We'll get back to you with a tailored proposal.
              </p>
              <form className="mt-8 grid gap-5 sm:grid-cols-2">
                {[
                  { l: "Full Name", t: "text", p: "Your name" },
                  { l: "Company", t: "text", p: "Company name" },
                  { l: "Email", t: "email", p: "you@company.com" },
                  { l: "Phone", t: "tel", p: "+880 ..." },
                ].map((f) => (
                  <label key={f.l} className="block">
                    <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#0B2341]">
                      {f.l}
                    </span>
                    <input
                      type={f.t}
                      placeholder={f.p}
                      className="mt-2 w-full rounded-md border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-[#145DA0] focus:ring-2 focus:ring-[#145DA0]/20"
                    />
                  </label>
                ))}
                <label className="block sm:col-span-2">
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#0B2341]">
                    Product Interest
                  </span>
                  <select className="mt-2 w-full rounded-md border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-[#145DA0] focus:ring-2 focus:ring-[#145DA0]/20">
                    <option>PP Woven Bags</option>
                    <option>BOPP Laminated Bags</option>
                    <option>Cement / Chemical Bags</option>
                    <option>Custom Industrial Packaging</option>
                  </select>
                </label>
                <label className="block sm:col-span-2">
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#0B2341]">
                    Project Details
                  </span>
                  <textarea
                    rows={4}
                    placeholder="Quantity, specifications, target markets, timeline..."
                    className="mt-2 w-full rounded-md border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-[#145DA0] focus:ring-2 focus:ring-[#145DA0]/20"
                  />
                </label>
                <Button
                  type="button"
                  className="mt-2 h-12 bg-[#0B2341] px-8 text-sm font-semibold hover:bg-[#145DA0] sm:col-span-2 sm:justify-self-start"
                >
                  Submit Inquiry
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const cols = [
    { t: "Company", l: ["About NBPPI", "Leadership", "Careers", "News & Insights", "CSR"] },
    { t: "Products", l: ["PP Woven Bags", "BOPP Laminated", "Cement Bags", "Food Grade", "Custom Packaging"] },
    { t: "Resources", l: ["Brochures", "Certifications", "Sustainability Report", "Quality Policy", "Datasheets"] },
  ];
  return (
    <footer className="bg-[#060F1F] pt-20 text-white/70">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-md bg-white font-display text-sm font-bold text-[#0B2341]">
                NB
              </div>
              <div className="leading-tight">
                <div className="font-display text-base font-bold text-white">NBPPI</div>
                <div className="text-[10px] uppercase tracking-[0.18em] text-white/50">
                  Poly &amp; Packaging Industries Ltd.
                </div>
              </div>
            </div>
            <p className="mt-6 max-w-md text-sm leading-relaxed">
              North Bengal Poly &amp; Packaging Industries Ltd. is a vertically integrated
              manufacturer of polypropylene woven bags serving agriculture, food, chemical, cement,
              feed and industrial sectors across 22+ countries.
            </p>
            <div className="mt-8 flex max-w-md items-center gap-2 rounded-lg border border-white/10 bg-white/5 p-1.5">
              <input
                placeholder="Subscribe to NBPPI updates"
                className="flex-1 bg-transparent px-3 py-2 text-sm placeholder:text-white/40 focus:outline-none"
              />
              <button className="rounded-md bg-[#145DA0] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#0f4a82]">
                Subscribe
              </button>
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.t} className="lg:col-span-2">
              <div className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-white">
                {c.t}
              </div>
              <ul className="mt-5 space-y-3 text-sm">
                {c.l.map((i) => (
                  <li key={i}>
                    <a href="#" className="transition hover:text-white">
                      {i}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="lg:col-span-1">
            <div className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-white">
              Follow
            </div>
            <div className="mt-5 flex gap-3">
              <a className="flex h-9 w-9 items-center justify-center rounded-md border border-white/10 transition hover:bg-white/10">
                <Linkedin className="h-4 w-4" />
              </a>
              <a className="flex h-9 w-9 items-center justify-center rounded-md border border-white/10 transition hover:bg-white/10">
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 py-6 text-xs text-white/50">
          <div>© {new Date().getFullYear()} North Bengal Poly &amp; Packaging Industries Ltd. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FloatingActions() {
  return (
    <a
      href="#contact"
      aria-label="Chat with sales"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#1E8E5A] text-white shadow-[0_15px_40px_-10px_rgba(30,142,90,0.6)] transition hover:scale-110"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <WhyChooseUs />
        <Products />
        <Manufacturing />
        <Quality />
        <Sustainability />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}

import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Award,
  Package,
  Users,
  Globe2,
  ShieldCheck,
  Leaf,
  Mouse,
} from "lucide-react";
import heroFactory from "@/assets/hero-factory.jpg";
import factoryAerial from "@/assets/factory-aerial.jpg";
import warehouseImg from "@/assets/warehouse.jpg";
import weavingImg from "@/assets/weaving.jpg";
import manufacturingExtrusion from "@/assets/manufacturing-extrusion.jpg";
import bagPoultry from "@/assets/hero-bag-poultry.jpg";
import bagFish from "@/assets/hero-bag-fish.jpg";
import bagCattle from "@/assets/hero-bag-cattle.jpg";
import bagRice from "@/assets/hero-bag-rice.jpg";
import bagLaminated from "@/assets/hero-bag-laminated.jpg";
import bagPlain from "@/assets/hero-bag-plain.jpg";
import bagLiner from "@/assets/hero-bag-liner.jpg";
import bagGusseted from "@/assets/hero-bag-gusseted.jpg";

type Slide = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  product: string;
  background: string;
  badges: string[];
};

const SLIDES: Slide[] = [
  {
    id: "poultry",
    name: "Printed Poultry Feed Bags",
    tagline: "Custom Printed PP Woven Packaging",
    description:
      "Durable, brand-grade printed sacks engineered for poultry feed manufacturers — built to protect product integrity across the supply chain.",
    product: bagPoultry,
    background: weavingImg,
    badges: ["Custom Printing", "Heavy Duty", "Brand-Grade Flexo"],
  },
  {
    id: "fish",
    name: "Fish Feed Bags",
    tagline: "Moisture-Resistant Aquaculture Packaging",
    description:
      "Laminated and lined woven bags formulated for the moisture, humidity and handling stress of the aquaculture industry.",
    product: bagFish,
    background: manufacturingExtrusion,
    badges: ["Moisture Resistant", "Laminated", "Export Quality"],
  },
  {
    id: "cattle",
    name: "Cattle Feed Bags",
    tagline: "Heavy-Duty Woven Feed Sacks",
    description:
      "Reinforced woven sacks with multi-color flexo printing — built to carry premium cattle feed brands from mill to farm.",
    product: bagCattle,
    background: warehouseImg,
    badges: ["High GSM", "Reinforced Stitching", "Multi-Color Print"],
  },
  {
    id: "rice",
    name: "Premium BOPP Rice Bags",
    tagline: "Photo-Grade Retail Packaging",
    description:
      "Up to 8-color BOPP printed bags with a glass-like sheen — engineered to elevate premium rice and export retail programmes.",
    product: bagRice,
    background: factoryAerial,
    badges: ["8-Color BOPP", "Retail Finish", "Scratch Resistant"],
  },
  {
    id: "laminated",
    name: "Laminated PP Woven Bags",
    tagline: "Water-Resistant Industrial Packaging",
    description:
      "BOPP-laminated woven sacks for fertilizer, construction materials and industrial powders — built for outdoor stockpiling.",
    product: bagLaminated,
    background: heroFactory,
    badges: ["BOPP Lamination", "UV Stable", "Water Resistant"],
  },
  {
    id: "plain",
    name: "Unlaminated PP Woven Bags",
    tagline: "Breathable Agricultural Packaging",
    description:
      "Lightweight breathable woven sacks engineered for ventilated storage of potatoes, onions, vegetables and coarse grain.",
    product: bagPlain,
    background: warehouseImg,
    badges: ["Breathable", "Lightweight", "Reusable"],
  },
  {
    id: "liner",
    name: "PP Bags with Inner Liner",
    tagline: "Sealed Barrier for Fine Powders",
    description:
      "Polyethylene inner liners create a sealed moisture barrier — ideal for flour, sugar, salt and fine food powders.",
    product: bagLiner,
    background: manufacturingExtrusion,
    badges: ["Food Grade", "Leak Proof", "Moisture Barrier"],
  },
  {
    id: "gusseted",
    name: "Gusseted Bulk Bags",
    tagline: "Warehouse-Optimised Side Gusset Sacks",
    description:
      "Engineered side-gusset geometry maximises pallet density and stacking stability for bulk grain and feed operations.",
    product: bagGusseted,
    background: factoryAerial,
    badges: ["Pallet Stable", "High Capacity", "Reinforced Seams"],
  },
];

const DURATION_MS = 6000;

export function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number>(performance.now());
  const heroRef = useRef<HTMLElement | null>(null);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  const count = SLIDES.length;
  const current = SLIDES[index];

  const go = (next: number) => {
    setIndex(((next % count) + count) % count);
    startRef.current = performance.now();
    setProgress(0);
  };

  useEffect(() => {
    if (paused) return;
    startRef.current = performance.now();
    const tick = (t: number) => {
      const elapsed = t - startRef.current;
      const p = Math.min(1, elapsed / DURATION_MS);
      setProgress(p);
      if (p >= 1) {
        setIndex((i) => (i + 1) % count);
        startRef.current = performance.now();
        setProgress(0);
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [paused, count, index]);

  // Preload upcoming product images for smooth transitions
  useEffect(() => {
    const next = SLIDES[(index + 1) % count];
    const img = new Image();
    img.src = next.product;
  }, [index, count]);

  const onMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setParallax({ x, y });
  };

  // Swipe support
  const touchStartX = useRef<number | null>(null);
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 50) go(index + (dx < 0 ? 1 : -1));
    touchStartX.current = null;
  };

  const slides = useMemo(() => SLIDES, []);

  return (
    <section
      id="home"
      ref={heroRef}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => {
        setPaused(false);
        setParallax({ x: 0, y: 0 });
      }}
      onMouseMove={onMouseMove}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      className="relative isolate min-h-[100svh] overflow-hidden bg-[#0A1B33] text-white"
      aria-roledescription="carousel"
      aria-label="NBPPI product showcase"
    >
      {/* Factory backgrounds (cross-fade + Ken Burns) */}
      <div className="absolute inset-0">
        {slides.map((s, i) => (
          <div
            key={s.id}
            aria-hidden={i !== index}
            className={`absolute inset-0 transition-opacity duration-[1200ms] ease-out ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={s.background}
              alt=""
              className={`h-full w-full object-cover ${
                i === index ? "animate-[kenburns_12s_ease-out_forwards]" : ""
              }`}
              loading={i === 0 ? "eager" : "lazy"}
              fetchPriority={i === 0 ? "high" : "auto"}
            />
          </div>
        ))}
        {/* Dark cinematic overlays */}
        <div className="absolute inset-0 bg-[#0A1B33]/75" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1B33]/60 via-[#0A1B33]/40 to-[#0A1B33]" />
      </div>

      {/* Side nav arrows */}
      <button
        type="button"
        aria-label="Previous slide"
        onClick={() => go(index - 1)}
        className="absolute left-4 top-1/2 z-30 hidden h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/25 bg-white/5 text-white/90 backdrop-blur transition hover:border-white/60 hover:bg-white/10 md:grid lg:left-8"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={() => go(index + 1)}
        className="absolute right-4 top-1/2 z-30 hidden h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/25 bg-white/5 text-white/90 backdrop-blur transition hover:border-white/60 hover:bg-white/10 md:grid lg:right-8"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Centered product + headline stage */}
      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 pt-24 md:pt-28 lg:pt-32">
        <div className="relative h-[58vh] min-h-[440px] w-full max-w-[760px]">
          {/* Product stack — large centered */}
          <div
            className="absolute inset-0"
            style={{
              transform: `translate3d(${parallax.x * -10}px, ${parallax.y * -10}px, 0)`,
              transition: "transform 500ms ease-out",
            }}
          >
            {slides.map((s, i) => (
              <div
                key={s.id}
                aria-hidden={i !== index}
                className={`absolute inset-0 flex items-end justify-center transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  i === index
                    ? "translate-x-0 opacity-100"
                    : i < index
                      ? "-translate-x-16 opacity-0"
                      : "translate-x-16 opacity-0"
                }`}
              >
                <img
                  src={s.product}
                  alt={s.name}
                  draggable={false}
                  loading={i === 0 ? "eager" : "lazy"}
                  fetchPriority={i === 0 ? "high" : "auto"}
                  className={`h-full w-auto max-w-full select-none object-contain drop-shadow-[0_40px_60px_rgba(0,0,0,0.7)] ${
                    i === index ? "animate-[floatY_6s_ease-in-out_infinite]" : ""
                  }`}
                />
              </div>
            ))}
          </div>

          {/* Headline overlay centered on product */}
          <div
            key={current.id}
            className="pointer-events-none absolute inset-x-0 top-[18%] z-10 flex flex-col items-center px-4 text-center"
          >
            <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-white drop-shadow-[0_6px_20px_rgba(0,0,0,0.6)] animate-[fadeUp_800ms_ease-out_both] md:text-5xl lg:text-6xl">
              {current.name}
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/85 drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)] animate-[fadeUp_900ms_180ms_ease-out_both] md:text-base">
              {current.description}
            </p>
            <div className="pointer-events-auto mt-8 flex flex-wrap items-center justify-center gap-3 animate-[fadeUp_900ms_320ms_ease-out_both]">
              <Link
                to="/products"
                className="group inline-flex items-center gap-2 rounded-md bg-[#145DA0] px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_40px_-10px_rgba(20,93,160,0.8)] transition hover:bg-[#176fbf]"
              >
                Explore Products
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/quote"
                className="group inline-flex items-center gap-2 rounded-md border border-white/40 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
              >
                Request a Quote
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Slide counter + progress */}
        <div className="mt-2 flex w-full max-w-md items-center gap-4 text-xs font-medium uppercase tracking-[0.22em] text-white/70">
          <span className="tabular-nums text-white">{String(index + 1).padStart(2, "0")}</span>
          <span className="tabular-nums">/ {String(count).padStart(2, "0")}</span>
          <div className="relative h-px flex-1 bg-white/20">
            <div
              className="absolute inset-y-0 left-0 bg-white transition-[width] duration-150"
              style={{ width: `${progress * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Scroll down hint */}
      <div className="absolute right-6 bottom-[260px] z-20 hidden flex-col items-center gap-2 text-[10px] font-medium uppercase tracking-[0.2em] text-white/70 lg:flex">
        <span>Scroll Down</span>
        <Mouse className="h-5 w-5" />
      </div>

      {/* Thumbnail strip */}
      <div className="relative z-20 mt-10 px-4">
        <div className="mx-auto flex max-w-7xl items-end justify-center gap-3 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {slides.map((s, i) => {
            const active = i === index;
            return (
              <button
                key={s.id}
                type="button"
                aria-label={`Show ${s.name}`}
                aria-current={active}
                onClick={() => go(i)}
                className="group flex shrink-0 flex-col items-center gap-2"
              >
                <div
                  className={`relative h-[88px] w-[120px] overflow-hidden rounded-md border transition-all duration-300 ${
                    active
                      ? "border-white shadow-[0_0_0_2px_rgba(255,255,255,0.2),0_15px_40px_-10px_rgba(0,0,0,0.6)]"
                      : "border-white/15 opacity-60 group-hover:opacity-100 group-hover:border-white/40"
                  }`}
                >
                  <img
                    src={s.product}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1B33]/70 via-transparent to-transparent" />
                </div>
                <div
                  className={`max-w-[120px] truncate text-[11px] font-semibold transition ${
                    active ? "text-white" : "text-white/60 group-hover:text-white/90"
                  }`}
                >
                  {s.name.replace(/Bags?$/, "").trim()} Bags
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Stats bar */}
      <div className="relative z-20 mt-8 border-t border-white/10 bg-[#06122A]/85 backdrop-blur">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden md:grid-cols-3 lg:grid-cols-6">
          {[
            { icon: Award, value: "20+", label: "Years of Experience" },
            { icon: Package, value: "50M+", label: "Bags Manufactured" },
            { icon: Users, value: "150+", label: "Happy Clients" },
            { icon: Globe2, value: "15+", label: "Countries Served" },
            { icon: ShieldCheck, value: "100%", label: "Quality Assurance" },
            { icon: Leaf, value: "Sustainable", label: "Eco-Friendly Solutions" },
          ].map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="flex items-center gap-4 bg-[#06122A] px-6 py-5 transition hover:bg-[#0A1B33]"
            >
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/15 bg-white/[0.04] text-[#7FE0D4]">
                <Icon className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <div className="font-display text-lg font-bold leading-none text-white">
                  {value}
                </div>
                <div className="mt-1 truncate text-[11px] font-medium uppercase tracking-wider text-white/55">
                  {label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";
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
      className="relative isolate min-h-[100svh] overflow-hidden bg-[#061F40] text-white"
      aria-roledescription="carousel"
      aria-label="NBPPI product showcase"
    >
      {/* Backgrounds (cross-fade with Ken Burns) */}
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
        {/* Dark navy overlay */}
        <div className="absolute inset-0 bg-[#061F40]/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#061F40] via-[#061F40]/85 to-[#061F40]/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#061F40]" />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 pb-40 pt-24 md:pt-32 lg:grid-cols-12 lg:gap-8 lg:pb-44 lg:pt-36">
        {/* Left content */}
        <div className="lg:col-span-6 xl:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-white/80 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-[#2A9D8F]" />
            Premium PP Woven Packaging
          </div>

          {/* Animated slide content (re-mounts on index change via key) */}
          <div key={current.id} className="mt-7">
            <div className="text-xs font-medium uppercase tracking-[0.22em] text-[#7FE0D4] animate-[fadeUp_700ms_ease-out_both]">
              {current.tagline}
            </div>
            <h1 className="mt-4 font-display text-4xl font-bold leading-[1.04] tracking-tight text-white animate-[fadeUp_800ms_120ms_ease-out_both] md:text-6xl lg:text-[4.5rem]">
              {current.name}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 animate-[fadeUp_900ms_220ms_ease-out_both] md:text-lg">
              {current.description}
            </p>

            <div className="mt-9 flex flex-wrap gap-3 animate-[fadeUp_900ms_320ms_ease-out_both]">
              <Link
                to="/products"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-md bg-white px-6 py-3.5 text-sm font-semibold text-[#082B59] shadow-[0_10px_40px_-10px_rgba(127,224,212,0.5)] transition hover:bg-[#D6DCE5]"
              >
                Explore Products
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/quote"
                className="group inline-flex items-center gap-2 rounded-md border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
              >
                Request a Quote
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-2.5 animate-[fadeUp_900ms_420ms_ease-out_both]">
              {current.badges.map((b) => (
                <span
                  key={b}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.06] px-3 py-1.5 text-xs font-medium text-white/85 backdrop-blur"
                >
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#7FE0D4]" />
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right: product stage */}
        <div className="lg:col-span-6 xl:col-span-5">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[520px]">
            {/* Soft glow */}
            <div className="absolute inset-x-10 bottom-6 top-10 rounded-[40%] bg-[#2A9D8F]/25 blur-3xl" />
            {/* Specification badges */}
            <div className="pointer-events-none absolute -left-4 top-12 z-20 hidden rounded-xl border border-white/15 bg-white/[0.08] px-3.5 py-2.5 text-xs font-semibold text-white backdrop-blur-md animate-[fadeRight_900ms_500ms_ease-out_both] md:block">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-[#7FE0D4]" /> Custom Printing
              </div>
            </div>
            <div className="pointer-events-none absolute -right-2 top-1/3 z-20 hidden rounded-xl border border-white/15 bg-white/[0.08] px-3.5 py-2.5 text-xs font-semibold text-white backdrop-blur-md animate-[fadeLeft_900ms_650ms_ease-out_both] md:block">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-[#7FE0D4]" /> Export Quality
              </div>
            </div>
            <div className="pointer-events-none absolute -left-2 bottom-16 z-20 hidden rounded-xl border border-white/15 bg-white/[0.08] px-3.5 py-2.5 text-xs font-semibold text-white backdrop-blur-md animate-[fadeRight_900ms_800ms_ease-out_both] md:block">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-[#7FE0D4]" /> Heavy Duty
              </div>
            </div>

            {/* Product stack — only active visible, others preloaded but hidden */}
            <div
              className="relative h-full w-full"
              style={{
                transform: `translate3d(${parallax.x * -14}px, ${parallax.y * -14}px, 0)`,
                transition: "transform 400ms ease-out",
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
                        ? "-translate-x-12 opacity-0"
                        : "translate-x-12 opacity-0"
                  }`}
                >
                  <img
                    src={s.product}
                    alt={s.name}
                    width={1024}
                    height={1280}
                    loading={i === 0 ? "eager" : "lazy"}
                    fetchPriority={i === 0 ? "high" : "auto"}
                    draggable={false}
                    className={`h-full w-auto max-w-full select-none object-contain drop-shadow-[0_30px_50px_rgba(0,0,0,0.55)] ${
                      i === index ? "animate-[floatY_6s_ease-in-out_infinite]" : ""
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Controls + thumbnails dock */}
      <div className="absolute inset-x-0 bottom-0 z-30">
        <div className="mx-auto max-w-7xl px-6 pb-6">
          {/* Progress + arrows */}
          <div className="flex items-center justify-between gap-4 pb-4">
            <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-white/65">
              <span className="tabular-nums text-white">{String(index + 1).padStart(2, "0")}</span>
              <span className="h-px w-10 bg-white/30" />
              <span className="tabular-nums">{String(count).padStart(2, "0")}</span>
            </div>
            <div className="hidden flex-1 px-6 md:block">
              <div className="relative h-px w-full bg-white/15">
                <div
                  className="absolute inset-y-0 left-0 bg-[#7FE0D4] transition-[width] duration-150"
                  style={{ width: `${progress * 100}%` }}
                />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                aria-label="Previous slide"
                onClick={() => go(index - 1)}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-white/5 text-white backdrop-blur transition hover:border-white/40 hover:bg-white/10 hover:-translate-x-0.5"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                aria-label="Next slide"
                onClick={() => go(index + 1)}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-white/5 text-white backdrop-blur transition hover:border-white/40 hover:bg-white/10 hover:translate-x-0.5"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Thumbnails */}
          <div className="relative">
            <div className="-mx-2 flex gap-2 overflow-x-auto px-2 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {slides.map((s, i) => {
                const active = i === index;
                return (
                  <button
                    key={s.id}
                    type="button"
                    aria-label={`Show ${s.name}`}
                    aria-current={active}
                    onClick={() => go(i)}
                    className={`group relative shrink-0 overflow-hidden rounded-xl border transition-all duration-300 ${
                      active
                        ? "h-20 w-28 border-[#7FE0D4] shadow-[0_0_0_3px_rgba(127,224,212,0.18),0_10px_30px_-10px_rgba(127,224,212,0.6)] scale-[1.04]"
                        : "h-20 w-24 border-white/15 bg-white/[0.04] opacity-70 hover:opacity-100 hover:border-white/30"
                    }`}
                  >
                    <img
                      src={s.product}
                      alt=""
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#061F40]/80 via-[#061F40]/10 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 truncate px-2 py-1 text-left text-[10px] font-semibold text-white/90">
                      {s.name.split(" ").slice(0, 2).join(" ")}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
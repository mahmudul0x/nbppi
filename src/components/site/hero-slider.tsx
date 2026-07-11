import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { RecycleBadge } from "@/components/site/recycle-badge";
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
import bagLiner from "@/assets/hero-bag-liner.jpg";
import bagGusseted from "@/assets/hero-bag-gusseted.jpg";
import bagSeed from "@/assets/hero-bag-seed.jpg";
import bagAnimalFeed from "@/assets/hero-bag-animalfeed.jpg";
import bagBopp from "@/assets/hero-bag-bopp.jpg";
import bagPrinted from "@/assets/hero-bag-printed.jpg";
import bagIndustrial from "@/assets/hero-bag-industrial.jpg";

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
    id: "export",
    name: "Export-Ready PP Packaging",
    tagline: "North Bengal Poly & Packaging Industries Ltd.",
    description:
      "From our factory floor to ports worldwide — woven polypropylene packaging manufactured at container scale, with strict quality control and on-time shipment for buyers at home and abroad.",
    product: factoryAerial,
    background: factoryAerial,
    badges: ["Container-Scale Volumes", "Export Quality", "On-Time Shipment"],
  },
  {
    id: "printed",
    name: "Printed PP Woven Bags",
    tagline: "Custom PP Woven Bag Manufacturer",
    description:
      "Tailor-made woven polypropylene packaging engineered to your branding, size, weight capacity, lamination and stitching specification — for agriculture, food, feed, industrial and retail brands.",
    product: bagPrinted,
    background: weavingImg,
    badges: ["Fully Custom", "OEM Manufacturing", "Bulk Capable"],
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
  {
    id: "bopp",
    name: "BOPP Laminated Bags",
    tagline: "Retail-Grade Premium Packaging",
    description:
      "Photo-grade BOPP laminated bags with a luxurious gloss finish — engineered for premium rice, pet food, branded food products and export retail programmes.",
    product: bagBopp,
    background: factoryAerial,
    badges: ["Photo-Grade Print", "Luxury Finish", "Retail Ready"],
  },
  {
    id: "seed",
    name: "Custom Seed Bags",
    tagline: "Brand-Grade Packaging for Seed Companies",
    description:
      "High-impact printed woven bags designed for branded seed lines — protecting germination quality across distribution and retail.",
    product: bagSeed,
    background: warehouseImg,
    badges: ["Custom Branding", "Premium Print", "Tamper-Resistant"],
  },
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
    id: "animalfeed",
    name: "Animal Feed Bags",
    tagline: "Custom Packaging for the Feed Industry",
    description:
      "Heavy-duty woven sacks engineered for animal feed manufacturers — calibrated GSM, reinforced stitching and brand-grade printing built for mill-to-farm logistics.",
    product: bagAnimalFeed,
    background: factoryAerial,
    badges: ["Heavy Duty", "Multi-Color Print", "Reinforced Seams"],
  },
  {
    id: "industrial",
    name: "Custom Industrial Packaging Bags",
    tagline: "Engineered Bulk Packaging Solutions",
    description:
      "Custom-engineered woven packaging for chemical powders, granules and bulk industrial materials — built to OEM specification and container-scale volumes.",
    product: bagIndustrial,
    background: manufacturingExtrusion,
    badges: ["OEM Spec", "Heavy Load", "Bulk Production"],
  },
];

const DURATION_MS = 5000;

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
      className="relative isolate h-[100svh] w-full overflow-hidden bg-[#0B2D6B] text-white"
      aria-roledescription="carousel"
      aria-label="NBPPI product showcase"
    >
      {/* Full-bleed product backgrounds (cross-fade + Ken Burns) */}
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
              src={s.product}
              alt=""
              className={`h-full w-full object-cover ${
                i === index ? "animate-[kenburns_12s_ease-out_forwards]" : ""
              }`}
              loading={i === 0 ? "eager" : "lazy"}
              fetchPriority={i === 0 ? "high" : "auto"}
            />
          </div>
        ))}
        {/* Cinematic navy → green brand overlay for text legibility */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(11,45,107,0.78) 0%, rgba(11,45,107,0.55) 50%, rgba(10,106,56,0.65) 100%)",
          }}
        />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-b from-transparent to-[#07204E]/80" />
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

      {/* Centered hero content */}
      <div className="relative z-20 flex h-full w-full items-center justify-center px-6">
        <div
          key={current.id}
          className="flex max-w-4xl flex-col items-center text-center"
        >
          <div className="text-[11px] font-semibold uppercase tracking-[0.32em] text-white/80 animate-[fadeUp_700ms_ease-out_both]">
            We build Trust Through Every Layer.
          </div>
          <h1 className="mt-5 font-display text-4xl font-bold uppercase leading-[1.02] tracking-tight text-white drop-shadow-[0_8px_30px_rgba(0,0,0,0.7)] animate-[fadeUp_800ms_120ms_ease-out_both] md:text-6xl lg:text-7xl">
            {current.name}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 drop-shadow-[0_2px_12px_rgba(0,0,0,0.7)] animate-[fadeUp_900ms_240ms_ease-out_both] md:text-lg">
            {current.description}
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3 animate-[scale-in_600ms_400ms_ease-out_both]">
            <Link
              to="/products"
              className="group inline-flex items-center gap-2 rounded-[14px] bg-[#0B2D6B] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_15px_45px_-10px_rgba(11,45,107,0.85)] transition hover:bg-[#123E87]"
            >
              Explore Products
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/quote"
              className="group inline-flex items-center gap-2 rounded-[14px] bg-[linear-gradient(135deg,#F4C542_0%,#D9A520_50%,#B8860B_100%)] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_15px_45px_-10px_rgba(217,165,32,0.55)] transition hover:brightness-110"
            >
              Request Quote
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
          <div className="mt-6 animate-[fadeUp_900ms_520ms_ease-out_both]">
            <RecycleBadge tone="dark" label="100% Recyclable PP" to="/sustainability" />
          </div>
        </div>
      </div>

      {/* Dot indicators */}
      <div className="absolute inset-x-0 bottom-8 z-30 flex items-center justify-center gap-2">
        {slides.map((s, i) => (
          <button
            key={s.id}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === index}
            onClick={() => go(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === index ? "w-10 bg-white" : "w-2.5 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
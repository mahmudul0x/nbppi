import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/page-shell";
import { PageHero } from "@/components/site/page-hero";
import heroFactory from "@/assets/hero-factory.jpg";
import weavingImg from "@/assets/weaving.jpg";
import manufacturingExtrusion from "@/assets/manufacturing-extrusion.jpg";
import warehouseImg from "@/assets/warehouse.jpg";
import productWoven from "@/assets/product-woven.jpg";
import productBopp from "@/assets/product-bopp.jpg";
import factoryAerial from "@/assets/factory-aerial.jpg";
import qualityLab from "@/assets/quality-lab.jpg";
import teamEngineer from "@/assets/team-engineer.jpg";
import industryAgri from "@/assets/industry-agri.jpg";
import industryExport from "@/assets/industry-export.jpg";
import industryCement from "@/assets/industry-cement.jpg";
import heroBagBopp from "@/assets/hero-bag-bopp.jpg";
import heroBagLaminated from "@/assets/hero-bag-laminated.jpg";
import heroBagPrinted from "@/assets/hero-bag-printed.jpg";
import heroBagRice from "@/assets/hero-bag-rice.jpg";
import heroBagFish from "@/assets/hero-bag-fish.jpg";
import heroBagPoultry from "@/assets/hero-bag-poultry.jpg";
import heroBagCattle from "@/assets/hero-bag-cattle.jpg";
import heroBagSeed from "@/assets/hero-bag-seed.jpg";
import heroBagGusseted from "@/assets/hero-bag-gusseted.jpg";
import heroBagLiner from "@/assets/hero-bag-liner.jpg";
import heroBagIndustrial from "@/assets/hero-bag-industrial.jpg";
import heroBagAnimalfeed from "@/assets/hero-bag-animalfeed.jpg";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Photo & Video Gallery — NBPPI" },
      { name: "description", content: "An inside look at NBPPI's factory, warehouse, production lines and finished goods." },
      { property: "og:title", content: "Factory & Product Gallery — NBPPI" },
      { property: "og:description", content: "Photos from inside NBPPI's manufacturing plant — extrusion, weaving, warehouse and finished PP woven and leno mesh bag products." },
      { property: "og:url", content: "https://northbengalpoly.com/gallery" },
      { property: "og:image", content: "https://northbengalpoly.com/og-image.jpg" },
      { property: "og:site_name", content: "NBPPI" },
    ],
    links: [{ rel: "canonical", href: "https://northbengalpoly.com/gallery" }],
  }),
  component: GalleryPage,
});

const CATEGORIES = ["All", "Machinery", "Production", "Products", "Warehouse", "Factory", "Industries"] as const;
type Category = (typeof CATEGORIES)[number];

// Real photos from the NBPPI plant, keyed by file name in src/assets/gallery
const REAL = import.meta.glob<string>("../assets/gallery/*.jpg", { eager: true, import: "default" });
const real = (file: string) => REAL[`../assets/gallery/${file}.jpg`];

const REAL_TILES: { file: string; h: string; caption: string; cat: Category }[] = [
  { file: "08-circular-loom-hall",        h: "row-span-2", caption: "Circular loom hall — woven tubular fabric production",   cat: "Machinery" },
  { file: "25-extrusion-line-overview",   h: "",           caption: "PP tape extrusion line",                                  cat: "Machinery" },
  { file: "29-creel-tapes",               h: "",           caption: "Creel stand feeding PP tapes to the looms",               cat: "Machinery" },
  { file: "27-circular-loom-tall",        h: "row-span-2", caption: "Circular loom in operation",                              cat: "Machinery" },
  { file: "09-tape-extrusion-line",       h: "",           caption: "Tape extrusion and stretching unit",                      cat: "Machinery" },
  { file: "17-extrusion-line-operator",   h: "",           caption: "Operator monitoring the extrusion line",                  cat: "Machinery" },
  { file: "16-winder-bobbins-visit",      h: "",           caption: "Tape winders loaded with bobbins",                        cat: "Machinery" },
  { file: "18-winder-bobbins-operator",   h: "",           caption: "Winding section — tape bobbins ready for weaving",        cat: "Machinery" },
  { file: "19-extrusion-line-floor",      h: "",           caption: "Extrusion line on the production floor",                  cat: "Machinery" },
  { file: "15-extrusion-line-visit",      h: "",           caption: "Visit to the tape extrusion line",                        cat: "Machinery" },
  { file: "20-winder-bobbins-row",        h: "",           caption: "Row of automatic tape winders",                           cat: "Machinery" },
  { file: "21-extruder-hopper",           h: "",           caption: "Extruder and raw-material hopper",                        cat: "Machinery" },
  { file: "23-creel-stand",               h: "",           caption: "Creel stands in the weaving section",                     cat: "Machinery" },
  { file: "07-woven-fabric-red-loom",     h: "row-span-2", caption: "Red woven fabric coming off the loom",                    cat: "Production" },
  { file: "10-woven-fabric-red-roll",     h: "row-span-2", caption: "Woven fabric being taken up on the roll",                 cat: "Production" },
  { file: "02-mesh-bags-red-bundle",      h: "",           caption: "Red leno mesh bags — bundled for dispatch",               cat: "Products" },
  { file: "01-mesh-bags-yellow-stack",    h: "row-span-2", caption: "Leno mesh bags — stacked and ready",                      cat: "Products" },
  { file: "05-mesh-bags-red-on-bales",    h: "",           caption: "Red leno mesh bags",                                      cat: "Products" },
  { file: "26-mesh-bag-yellow-green",     h: "",           caption: "Yellow leno mesh bag with green border",                  cat: "Products" },
  { file: "06-mesh-bag-red-closeup",      h: "row-span-2", caption: "Leno mesh bag — close-up of the open weave",              cat: "Products" },
  { file: "12-mesh-bag-orange",           h: "",           caption: "Orange leno mesh bag",                                    cat: "Products" },
  { file: "22-mesh-bag-yellow",           h: "",           caption: "Yellow leno mesh bag",                                    cat: "Products" },
  { file: "03-printed-rice-bag-golden-key", h: "",         caption: "Printed PP woven rice bag",                               cat: "Products" },
  { file: "04-printed-rice-bag-vk-gold",  h: "row-span-2", caption: "Printed rice bag artwork",                                cat: "Products" },
  { file: "33-warehouse-stock-2",         h: "",           caption: "Finished bales in the warehouse",                         cat: "Warehouse" },
  { file: "30-bales-packed",              h: "",           caption: "Packed and labelled bales",                               cat: "Warehouse" },
  { file: "31-bags-stacked",              h: "row-span-2", caption: "Finished bags stacked for baling",                        cat: "Warehouse" },
  { file: "32-warehouse-stock-1",         h: "",           caption: "Warehouse stock",                                         cat: "Warehouse" },
  { file: "34-warehouse-stock-3",         h: "",           caption: "Bales ready for dispatch",                                cat: "Warehouse" },
  { file: "24-warehouse-bales-3",         h: "",           caption: "Finished goods storage",                                  cat: "Warehouse" },
  { file: "11-warehouse-bales",           h: "",           caption: "Bales in the finished goods store",                       cat: "Warehouse" },
  { file: "14-warehouse-bales-2",         h: "",           caption: "Baled bags awaiting shipment",                            cat: "Warehouse" },
  { file: "13-warehouse-loading",         h: "",           caption: "Handling stock in the warehouse",                         cat: "Warehouse" },
  { file: "28-warehouse-liner-rolls",     h: "",           caption: "Packed liner rolls",                                      cat: "Warehouse" },
];

const TILES: { src: string; h: string; alt: string; caption: string; cat: Category }[] = [
  ...REAL_TILES.map((t) => ({ src: real(t.file), h: t.h, alt: t.caption, caption: t.caption, cat: t.cat })),
  { src: heroFactory,          h: "row-span-2", alt: "Main factory floor",          caption: "Main production floor — Rangpur Industrial Zone",       cat: "Factory" },
  { src: factoryAerial,        h: "",           alt: "Aerial view of the NBPPI factory with export trucks loading", caption: "Aerial view of the NBPPI complex — export loading in progress", cat: "Factory" },
  { src: weavingImg,           h: "",           alt: "Circular weaving looms",       caption: "Starlinger circular weaving looms in operation",        cat: "Factory" },
  { src: manufacturingExtrusion, h: "row-span-2", alt: "Extrusion line",            caption: "PP tape extrusion — converting granules to woven tape",  cat: "Factory" },
  { src: qualityLab,           h: "",           alt: "In-house QC laboratory",       caption: "In-house quality control laboratory — tensile & GSM testing", cat: "Factory" },
  { src: warehouseImg,         h: "",           alt: "Finished goods warehouse",     caption: "Finished goods warehouse — palletised and container-ready", cat: "Factory" },
  { src: teamEngineer,         h: "",           alt: "Production engineer",          caption: "Production engineer on the manufacturing floor",        cat: "Factory" },
  { src: productWoven,         h: "row-span-2", alt: "Plain PP woven bags",          caption: "Plain PP woven bags — 25 kg, 50 kg bulk grades",        cat: "Products" },
  { src: productBopp,          h: "",           alt: "BOPP laminated bags",          caption: "BOPP laminated bags — premium retail print quality",    cat: "Products" },
  { src: heroBagBopp,          h: "",           alt: "BOPP bag close-up",            caption: "BOPP bag — photo-grade surface finish",                 cat: "Products" },
  { src: heroBagLaminated,     h: "",           alt: "Laminated PP woven bag",       caption: "Laminated PP woven bag — moisture barrier coating",     cat: "Products" },
  { src: heroBagPrinted,       h: "row-span-2", alt: "8-color printed bag",          caption: "8-color flexographic printed bag — custom brand design", cat: "Products" },
  { src: heroBagRice,          h: "",           alt: "Rice packaging bag",           caption: "Premium rice packaging — BOPP laminated retail grade",  cat: "Products" },
  { src: heroBagGusseted,      h: "",           alt: "Gusseted woven bag",           caption: "Gusseted bags — expanded side-wall for bulk filling",   cat: "Products" },
  { src: heroBagLiner,         h: "",           alt: "PP bag with inner liner",      caption: "PP woven bag with PE inner liner — food-grade barrier", cat: "Products" },
  { src: heroBagFish,          h: "row-span-2", alt: "Fish feed packaging",          caption: "Fish feed packaging — moisture-resistant laminated bag", cat: "Products" },
  { src: heroBagPoultry,       h: "",           alt: "Poultry feed bag",             caption: "Poultry feed bag — high-volume printed run",            cat: "Products" },
  { src: heroBagCattle,        h: "",           alt: "Cattle feed bag",              caption: "Cattle feed bag — reinforced seam, 50 kg fill",         cat: "Products" },
  { src: heroBagSeed,          h: "",           alt: "Seed packaging bag",           caption: "Seed packaging — breathable plain PP woven",            cat: "Products" },
  { src: heroBagAnimalfeed,    h: "",           alt: "Animal feed packaging",        caption: "Animal feed packaging — branded 25 kg bag",             cat: "Products" },
  { src: heroBagIndustrial,    h: "",           alt: "Industrial bulk bag",          caption: "Industrial bulk bag — OEM unbranded high-volume",       cat: "Products" },
  { src: industryAgri,         h: "row-span-2", alt: "Agriculture sector",           caption: "Agriculture & grain — NBPPI bags in field use",         cat: "Industries" },
  { src: industryCement,       h: "",           alt: "Cement industry packaging",    caption: "Construction sector — cement and building materials",   cat: "Industries" },
  { src: industryExport,       h: "",           alt: "Export shipping containers",   caption: "Export logistics — FCL container loading at Chittagong", cat: "Industries" },
];

function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const filtered = activeCategory === "All" ? TILES : TILES.filter((t) => t.cat === activeCategory);

  const prev = () => setOpenIdx((i) => (i !== null && i > 0 ? i - 1 : filtered.length - 1));
  const next = () => setOpenIdx((i) => (i !== null && i < filtered.length - 1 ? i + 1 : 0));

  return (
    <PageShell>
      <PageHero
        eyebrow="Inside the NBPPI plant"
        title={<>Photo & Video Gallery</>}
        intro={`A visual tour through our factory, products and industries — ${TILES.length} photos.`}
        image={heroFactory}
        crumbs={[{ label: "Home", to: "/" }, { label: "Photo Gallery" }]}
      />

      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          {/* Category filter */}
          <div className="mb-8 flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-4 py-1.5 text-sm font-semibold transition ${
                  activeCategory === cat
                    ? "bg-[#0B2D6B] text-white"
                    : "border border-border bg-white text-[#0B2D6B] hover:border-[#0B2D6B]/40"
                }`}
              >
                {cat}
                <span className="ml-1.5 text-xs opacity-60">
                  {cat === "All" ? TILES.length : TILES.filter((t) => t.cat === cat).length}
                </span>
              </button>
            ))}
          </div>

          {/* Masonry grid */}
          <div className="grid auto-rows-[180px] grid-cols-2 gap-3 md:auto-rows-[220px] md:grid-cols-4">
            {filtered.map((t, i) => (
              <button
                key={t.src + i}
                onClick={() => setOpenIdx(i)}
                className={`group relative overflow-hidden rounded-xl bg-muted ${t.h}`}
              >
                <img
                  src={t.src}
                  alt={t.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1.4s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#0B2D6B]/75 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
                <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 transition group-hover:opacity-100">
                  <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#7FE0D4]">{t.cat}</div>
                  <div className="mt-0.5 text-xs font-medium text-white">{t.caption}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {openIdx !== null && (
        <div
          className="fixed inset-0 z-60 flex items-center justify-center bg-[#07204E]/97 p-4"
          onClick={() => setOpenIdx(null)}
        >
          {/* Close */}
          <button
            aria-label="Close"
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
            onClick={() => setOpenIdx(null)}
          >
            <X className="h-5 w-5" />
          </button>

          {/* Prev */}
          <button
            aria-label="Previous"
            className="absolute left-4 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
            onClick={(e) => { e.stopPropagation(); prev(); }}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* Image */}
          <div className="flex flex-col items-center gap-4" onClick={(e) => e.stopPropagation()}>
            <img
              src={filtered[openIdx].src}
              alt={filtered[openIdx].alt}
              className="max-h-[78vh] max-w-[85vw] rounded-xl object-contain shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]"
            />
            <div className="text-center">
              <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#7FE0D4]">{filtered[openIdx].cat}</div>
              <div className="mt-1 text-sm text-white/80">{filtered[openIdx].caption}</div>
              <div className="mt-1 text-xs text-white/35">{openIdx + 1} / {filtered.length}</div>
            </div>
          </div>

          {/* Next */}
          <button
            aria-label="Next"
            className="absolute right-4 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
            onClick={(e) => { e.stopPropagation(); next(); }}
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}
    </PageShell>
  );
}
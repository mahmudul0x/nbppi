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
import { useState } from "react";
import { X } from "lucide-react";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — NBPPI" },
      { name: "description", content: "An inside look at NBPPI's factory, warehouse, production lines and finished goods." },
      { property: "og:title", content: "Gallery — NBPPI" },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

const TILES = [
  { src: heroFactory, h: "row-span-2", alt: "Weaving line" },
  { src: weavingImg, h: "", alt: "Loom close-up" },
  { src: manufacturingExtrusion, h: "", alt: "Extrusion line" },
  { src: warehouseImg, h: "row-span-2", alt: "Warehouse" },
  { src: productWoven, h: "", alt: "PP woven bags" },
  { src: factoryAerial, h: "", alt: "Aerial view" },
  { src: qualityLab, h: "", alt: "Quality lab" },
  { src: productBopp, h: "row-span-2", alt: "BOPP printed bag" },
  { src: teamEngineer, h: "", alt: "Engineer on floor" },
  { src: industryAgri, h: "", alt: "Agriculture" },
  { src: industryCement, h: "", alt: "Cement plant" },
  { src: industryExport, h: "", alt: "Export shipping" },
];

function GalleryPage() {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <PageShell>
      <PageHero
        eyebrow="Gallery"
        title={<>Inside the NBPPI plant.</>}
        intro="A visual tour through extrusion, weaving, lamination, printing, warehousing and dispatch."
        image={heroFactory}
        crumbs={[{ label: "Home", to: "/" }, { label: "Gallery" }]}
      />
      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid auto-rows-[180px] grid-cols-2 gap-3 md:auto-rows-[240px] md:grid-cols-4">
            {TILES.map((t, i) => (
              <button
                key={i}
                onClick={() => setOpen(t.src)}
                className={`group relative overflow-hidden rounded-xl bg-muted ${t.h}`}
              >
                <img src={t.src} alt={t.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1.4s] group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#082B59]/70 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
                <div className="absolute bottom-3 left-4 text-xs font-medium uppercase tracking-[0.18em] text-white opacity-0 transition group-hover:opacity-100">
                  {t.alt}
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {open ? (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-[#04132A]/95 p-6" onClick={() => setOpen(null)}>
          <button aria-label="Close" className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20">
            <X className="h-5 w-5" />
          </button>
          <img src={open} alt="" className="max-h-[88vh] max-w-[92vw] rounded-xl object-contain" />
        </div>
      ) : null}
    </PageShell>
  );
}
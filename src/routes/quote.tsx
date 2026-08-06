import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/page-shell";
import { PageHero } from "@/components/site/page-hero";
import warehouseImg from "@/assets/warehouse.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight, CircleCheck } from "lucide-react";

export const Route = createFileRoute("/quote")({
  head: () => ({
    meta: [
      { title: "Request Quote — NBPPI" },
      { name: "description", content: "Request a tailored quotation for PP woven, BOPP, laminated, lined or gusseted bags — typically returned within 24 business hours." },
      { property: "og:title", content: "Request a Quote — NBPPI PP Woven Bags" },
      { property: "og:description", content: "Request a tailored quote for PP woven, BOPP laminated, printed or lined bags. Custom sizes, GSM and print specifications. Response within 24 hours." },
      { property: "og:url", content: "https://northbengalpoly.com/quote" },
      { property: "og:image", content: "https://northbengalpoly.com/og-image.jpg" },
      { property: "og:site_name", content: "NBPPI" },
    ],
    links: [{ rel: "canonical", href: "https://northbengalpoly.com/quote" }],
  }),
  component: QuotePage,
});

function QuotePage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Request A Quote"
        title={<>Get a tailored industrial<br /> quotation in 24 hours.</>}
        intro="Share your specification, quantity and target market — our industrial sales team will respond with a structured proposal within one business day."
        image={warehouseImg}
        crumbs={[{ label: "Home", to: "/" }, { label: "Request Quote" }]}
      />

      <section className="bg-background py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-3">
          <aside className="lg:col-span-1">
            <div className="rounded-2xl border border-border bg-card p-7">
              <div className="font-display text-lg font-semibold text-[#0B2D6B]">What you'll get</div>
              <ul className="mt-5 space-y-4 text-sm">
                {[
                  "Tailored technical proposal with spec sheet",
                  "Per-unit and per-container pricing",
                  "Lead-time and production schedule",
                  "Lamination, printing and customization options",
                  "Export documentation guidance",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3 text-muted-foreground">
                    <CircleCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#0A6A38]" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 rounded-xl bg-[#0B2D6B] p-5 text-white">
                <div className="text-xs uppercase tracking-[0.18em] text-white/60">Direct line</div>
                <div className="mt-2 font-display text-lg font-bold">+880 1301 771919</div>
                <div className="text-sm text-white/70">sales@northbengalpoly.com</div>
              </div>
            </div>
          </aside>

          <div className="lg:col-span-2">
            <form className="rounded-2xl border border-border bg-card p-8 md:p-10">
              <div className="font-display text-2xl font-bold text-[#0B2D6B]">B2B Quotation Request</div>
              <p className="mt-2 text-sm text-muted-foreground">All fields required unless marked optional.</p>
              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                {[
                  { l: "Company Name", t: "text" },
                  { l: "Contact Person", t: "text" },
                  { l: "Email", t: "email" },
                  { l: "Phone / WhatsApp", t: "tel" },
                  { l: "Country", t: "text" },
                  { l: "Export Destination (optional)", t: "text" },
                ].map((f) => (
                  <label key={f.l} className="block">
                    <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#0B2D6B]">{f.l}</span>
                    <input type={f.t} className="mt-2 w-full rounded-md border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-[#0A6A38] focus:ring-2 focus:ring-[#0A6A38]/20" />
                  </label>
                ))}
                <label className="block">
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#0B2D6B]">Product Type</span>
                  <select className="mt-2 w-full rounded-md border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-[#0A6A38] focus:ring-2 focus:ring-[#0A6A38]/20">
                    <option>Plain PP Woven Bags</option>
                    <option>Laminated (Coated) Bags</option>
                    <option>PP Bags with Inner Liners</option>
                    <option>BOPP Laminated Bags</option>
                    <option>Gusseted Bags</option>
                    <option>Custom / Other</option>
                  </select>
                </label>
                <label className="block">
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#0B2D6B]">Quantity (pcs)</span>
                  <input type="number" min={1000} placeholder="e.g. 100000" className="mt-2 w-full rounded-md border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-[#0A6A38] focus:ring-2 focus:ring-[#0A6A38]/20" />
                </label>
                <label className="block">
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#0B2D6B]">Printing</span>
                  <select className="mt-2 w-full rounded-md border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-[#0A6A38] focus:ring-2 focus:ring-[#0A6A38]/20">
                    <option>None</option>
                    <option>1–2 Color Flexo</option>
                    <option>Up to 4 Color</option>
                    <option>Premium BOPP (8 color)</option>
                  </select>
                </label>
                <label className="block">
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#0B2D6B]">Lamination</span>
                  <select className="mt-2 w-full rounded-md border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-[#0A6A38] focus:ring-2 focus:ring-[#0A6A38]/20">
                    <option>None</option>
                    <option>PP Lamination</option>
                    <option>BOPP Lamination</option>
                    <option>Inner PE Liner</option>
                  </select>
                </label>
                <label className="block sm:col-span-2">
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#0B2D6B]">Project Details</span>
                  <textarea rows={5} placeholder="Specifications, GSM, denier, bag size, timeline..." className="mt-2 w-full rounded-md border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-[#0A6A38] focus:ring-2 focus:ring-[#0A6A38]/20" />
                </label>
                <label className="block sm:col-span-2">
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#0B2D6B]">Attachment (optional)</span>
                  <input type="file" className="mt-2 w-full rounded-md border border-dashed border-border bg-background px-4 py-3 text-sm" />
                </label>
                <Button type="button" className="mt-2 h-12 bg-[#0B2D6B] px-8 text-sm font-semibold hover:bg-[#123E87] sm:col-span-2 sm:justify-self-start">
                  Submit Quotation Request <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
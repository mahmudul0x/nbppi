import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/page-shell";
import productBopp from "@/assets/product-bopp.jpg";
import { ArrowLeft, Clock, Calendar } from "lucide-react";

export const Route = createFileRoute("/blog/bopp-lamination")({
  head: () => ({
    meta: [
      { title: "Why BOPP lamination is winning premium retail — NBPPI Blog" },
      { name: "description", content: "BOPP laminated woven bags are replacing standard flexo bags across premium retail in Bangladesh and export markets. Learn why rice, pet food and flour brands are switching — print specs, cost comparison and supplier checklist." },
      { property: "og:title", content: "Why BOPP lamination is winning premium retail" },
      { property: "og:description", content: "From rice to pet food — premium brands are turning to BOPP-laminated woven bags for photo-grade shelf graphics. A deep dive into print specs and market trends." },
      { property: "og:url", content: "https://nbppi.com/blog/bopp-lamination" },
      { property: "og:image", content: "https://nbppi.com/og-image.jpg" },
      { property: "og:type", content: "article" },
      { property: "og:site_name", content: "NBPPI" },
      { property: "article:published_time", content: "2026-06-02" },
      { property: "article:section", content: "Insights" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Why BOPP lamination is winning premium retail" },
      { name: "twitter:description", content: "Rice, pet food and flour brands are switching to BOPP-laminated woven bags for photo-grade shelf presence. Print specs and cost comparison." },
      { name: "twitter:image", content: "https://nbppi.com/og-image.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://nbppi.com/blog/bopp-lamination" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Why BOPP lamination is winning premium retail",
          description: "From rice to pet food — premium brands are turning to BOPP-laminated woven bags for shelf-grade graphics.",
          datePublished: "2026-06-02",
          dateModified: "2026-06-02",
          image: { "@type": "ImageObject", url: "https://nbppi.com/og-image.jpg", width: 1200, height: 630 },
          author: { "@type": "Person", name: "NBPPI Editorial Team", url: "https://nbppi.com/about" },
          publisher: { "@type": "Organization", name: "NBPPI", logo: { "@type": "ImageObject", url: "https://nbppi.com/logoWebsite.png" } },
          url: "https://nbppi.com/blog/bopp-lamination",
          articleSection: "Insights",
          keywords: "BOPP laminated bags, premium retail packaging, woven bag printing, Bangladesh bag manufacturer",
        }),
      },
    ],
  }),
  component: ArticlePage,
});

function ArticlePage() {
  return (
    <PageShell>
      {/* Hero */}
      <div className="relative h-105 overflow-hidden sm:h-125 lg:h-140">
        <img src={productBopp} alt="BOPP laminated bags" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-linear-to-t from-[#07204E]/90 via-[#07204E]/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 px-4 pb-10 sm:px-6">
          <div className="mx-auto max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#1f618d] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-white">
              Insights
            </div>
            <h1 className="mt-4 font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Why BOPP lamination is winning premium retail
            </h1>
            <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-white/60">
              <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" /> Jun 02, 2026</span>
              <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> 5 min read</span>
              <span>By NBPPI Editorial Team</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <section className="bg-[#F1F4F9] py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-[#0B2D6B] hover:text-[#0A6A38]">
            <ArrowLeft className="h-4 w-4" /> Back to Blog
          </Link>

          <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-white shadow-[0_4px_24px_-8px_rgba(11,45,107,0.08)]">
            <div className="prose prose-slate max-w-none px-8 py-10 sm:px-12">

              <p className="lead text-lg font-medium text-[#0B2D6B]">
                From rice to pet food — premium brands are turning to BOPP-laminated woven bags for shelf-grade graphics. Here's what's driving the switch and what buyers need to know.
              </p>

              <h2>The Retail Packaging Shift</h2>
              <p>
                Walk through any modern supermarket in Dhaka, Dubai, or Kuala Lumpur and you'll notice something: the era of plain, text-only woven bags is ending. Brand owners — from premium aromatic rice mills to specialty pet food companies — are demanding packaging that communicates quality on the shelf, not just in the warehouse.
              </p>
              <p>
                The technology enabling this shift is Biaxially Oriented Polypropylene (BOPP) lamination — a process that bonds a thin, print-optimized BOPP film to the outer surface of a woven PP bag, creating a surface capable of photographic-quality graphics at industrial scale.
              </p>

              <h2>What Makes BOPP Different</h2>
              <p>
                Standard woven PP bags are printed directly onto the fabric using flexographic printing — a process well-suited for logos, text, and simple spot color designs. Flexographic printing on woven PP typically achieves 4–6 color output with line screen resolutions of 60–85 LPI.
              </p>
              <p>
                BOPP lamination works differently. A pre-printed BOPP film — produced using high-resolution rotogravure or flexo printing at 120–150 LPI — is thermally bonded to the woven substrate. The result is a bag with the structural strength of woven PP and the visual quality of a printed film package.
              </p>

              <div className="not-prose my-6 grid grid-cols-2 gap-4">
                {[
                  { label: "Print Resolution", standard: "60–85 LPI", bopp: "120–150 LPI" },
                  { label: "Color Range", standard: "Up to 6", bopp: "Up to 10" },
                  { label: "Surface Finish", standard: "Matte fabric", bopp: "Gloss / Matte / Satin" },
                  { label: "Photo Reproduction", standard: "Limited", bopp: "Photo-grade" },
                ].map(({ label, standard, bopp }) => (
                  <div key={label} className="rounded-xl border border-border bg-[#F8F9FB] p-4">
                    <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">{label}</div>
                    <div className="mt-2 flex items-center justify-between gap-2">
                      <div className="text-center">
                        <div className="text-xs text-muted-foreground">Standard</div>
                        <div className="font-display text-sm font-bold text-[#0B2D6B]">{standard}</div>
                      </div>
                      <div className="h-px flex-1 border-t border-dashed border-border" />
                      <div className="text-center">
                        <div className="text-xs text-[#0A6A38]">BOPP</div>
                        <div className="font-display text-sm font-bold text-[#0A6A38]">{bopp}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <h2>Industries Making the Switch</h2>

              <h3>Premium Rice & Aromatic Grains</h3>
              <p>
                Bangladesh's premium rice export sector — particularly aromatic varieties like Kataribhog and Chinigura — has been one of the fastest adopters of BOPP packaging. When a 5 kg retail rice bag sits on a shelf in a UK Asian grocery or a UAE hypermarket next to Thai Jasmine and Indian Basmati, print quality becomes a direct proxy for product quality in the consumer's mind.
              </p>

              <h3>Pet Food & Specialty Animal Feed</h3>
              <p>
                Premium pet food brands require packaging that communicates nutritional information clearly, reproduces photographs of animals accurately, and withstands extended shelf exposure without print fade. BOPP lamination handles all three — and increasingly, pet food brands operating in South Asia are specifying BOPP as a baseline requirement.
              </p>

              <h3>Flour & Specialty Food Products</h3>
              <p>
                Premium flour brands, spice companies, and specialty food processors use BOPP bags to differentiate retail SKUs from bulk commodity grades. A 10 kg premium flour bag with full-bleed imagery and gloss lamination commands a meaningfully different retail position than an equivalent product in standard woven PP.
              </p>

              <blockquote>
                <p>"When we switched our export rice bags to BOPP, our UK distributor told us for the first time that the packaging was 'competitive' with Thai product. That's not a small thing."</p>
                <cite>— Export Manager, Premium Rice Processor, Rangpur</cite>
              </blockquote>

              <h2>Specifying BOPP: What Buyers Need to Know</h2>

              <h3>Minimum Order Quantities</h3>
              <p>
                BOPP laminated bags require film printing plates or cylinders, which involve a one-time setup cost. MOQs are typically higher than standard flexo-printed bags — generally 5,000 pieces minimum per design, though this varies by bag size and complexity.
              </p>

              <h3>Artwork Requirements</h3>
              <p>
                BOPP artwork should be supplied in AI, PDF (print-ready) or TIFF format at minimum 300 DPI at final size. Pantone color references should be specified for brand-critical colors. Our pre-press team provides press proofs before production approval.
              </p>

              <h3>Lead Times</h3>
              <p>
                Standard BOPP production lead time is 18–25 working days from artwork approval, slightly longer than standard flexo-printed bags due to the film printing and lamination stages. For repeat orders with existing artwork, lead times reduce to 12–18 working days.
              </p>

              <h2>NBPPI's BOPP Capability</h2>
              <p>
                Our BOPP line handles bags from 1 kg to 50 kg, with gloss, matte, and satin surface finish options. We run both rotogravure and flexographic film printing depending on run length and graphic complexity. All BOPP bags are available with optional PE inner liners for moisture-sensitive products.
              </p>

            </div>
          </div>

          {/* CTA */}
          <div className="mt-8 rounded-2xl bg-[#0B2D6B] p-8">
            <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
              <div>
                <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#7FE0D4]">Ready to upgrade?</div>
                <h3 className="mt-1 font-display text-lg font-bold text-white">Get a BOPP sample pack sent to you.</h3>
                <p className="mt-1 text-sm text-white/55">Share your artwork or brief — we'll show you what's possible.</p>
              </div>
              <Link to="/quote" className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-[#0A6A38] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#22887b]">
                Request Sample
              </Link>
            </div>
          </div>

          <div className="mt-8">
            <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-[#0B2D6B] hover:text-[#0A6A38]">
              <ArrowLeft className="h-4 w-4" /> All Articles
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

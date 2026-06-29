import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell } from "@/components/site/page-shell";
import { ArrowRight, ChevronDown, MessageSquare } from "lucide-react";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "PP Woven Bag FAQ — MOQ, Custom Print, Export & Pricing | NBPPI" },
      { name: "description", content: "Frequently asked questions about NBPPI's polypropylene woven bags — minimum order quantity (MOQ), custom printing options, export documentation, lead times, sample policy, payment terms and certifications." },
      { property: "og:title", content: "Frequently Asked Questions — NBPPI" },
      { property: "og:description", content: "Answers to common questions about NBPPI's PP woven bags — MOQ, custom printing, lead times, export documentation, samples and payment terms." },
      { property: "og:url", content: "https://nbppi.com/faq" },
      { property: "og:image", content: "https://nbppi.com/og-image.jpg" },
      { property: "og:site_name", content: "NBPPI" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "PP Woven Bag FAQ — MOQ, Custom Print, Export | NBPPI" },
      { name: "twitter:description", content: "MOQ, lead times, custom print options, export documentation, payment terms and certifications — all your questions answered." },
      { name: "twitter:image", content: "https://nbppi.com/og-image.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://nbppi.com/faq" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "What is the minimum order quantity (MOQ)?",
              acceptedAnswer: { "@type": "Answer", text: "Our standard MOQ is 10,000 pieces per design/size. For trial or sample orders, we can accommodate smaller quantities." },
            },
            {
              "@type": "Question",
              name: "Can you print custom designs on the bags?",
              acceptedAnswer: { "@type": "Answer", text: "Yes. We offer up to 8-colour flexographic printing and BOPP laminated bags with rotogravure-quality graphics." },
            },
            {
              "@type": "Question",
              name: "What is the typical lead time for an order?",
              acceptedAnswer: { "@type": "Answer", text: "Standard lead time is 21–28 days from order confirmation and deposit. Rush orders may be possible — contact our team." },
            },
            {
              "@type": "Question",
              name: "Do you export internationally?",
              acceptedAnswer: { "@type": "Answer", text: "Yes. NBPPI exports to 22+ countries across South Asia, the Middle East, Africa and Europe. We support LC and open account payment terms." },
            },
            {
              "@type": "Question",
              name: "What certifications does NBPPI hold?",
              acceptedAnswer: { "@type": "Answer", text: "NBPPI holds ISO 9001:2015, BSTI, BIDA, EPB Export Registration Certificate, DIFE Factory License, DoE Environment Clearance and Fire License." },
            },
          ],
        }),
      },
    ],
  }),
  component: FaqPage,
});

const FAQS = [
  {
    category: "Orders & MOQ",
    items: [
      {
        q: "What is the minimum order quantity (MOQ)?",
        a: "Our standard MOQ is 10,000 pieces per design/size. For trial or sample orders, we can accommodate smaller quantities — please contact our sales team to discuss your specific requirements.",
      },
      {
        q: "Can I place a trial order before committing to bulk?",
        a: "Yes. We encourage trial runs so you can evaluate quality, print accuracy and fit before placing a full production order. Our sales team will guide you through the sampling and trial process.",
      },
      {
        q: "What is the lead time for production?",
        a: "Standard lead time is 15–25 working days from order confirmation and artwork approval. Lead times may vary based on order volume, complexity and current production schedule. Export orders may require additional time for documentation.",
      },
      {
        q: "What are your payment terms?",
        a: "We typically work on 50% advance with balance before shipment for new clients. Established partners may qualify for Letter of Credit (LC) or open account terms. Please discuss payment arrangements with our sales team during the quotation stage.",
      },
    ],
  },
  {
    category: "Products & Customization",
    items: [
      {
        q: "Can I get custom printed bags with my branding?",
        a: "Absolutely. Custom printing is our core offering. We support up to 8-color flexographic printing and full BOPP photo-grade printing with Pantone-matched brand colors, logos, product information and variable text. Please share your artwork in AI, PDF or EPS format.",
      },
      {
        q: "What bag sizes and GSM options are available?",
        a: "We manufacture bags in GSM range of 50–120. Standard sizes include 25 kg, 40 kg and 50 kg, with custom dimensions available on request. We can adjust width, length, gusset, handle and valve options based on your specification.",
      },
      {
        q: "Do you offer laminated and lined bags?",
        a: "Yes. We offer BOPP lamination (inside and/or outside), PE inner liners for food-grade and fine powder applications, and two-side lamination for maximum moisture protection. Our team can recommend the right specification for your product.",
      },
      {
        q: "Can I request a sample before placing an order?",
        a: "Yes. We provide production-grade samples for sign-off before bulk manufacturing begins. Sample charges may apply and are typically credited against the first production order. Please submit a quote request or contact us directly.",
      },
      {
        q: "What products do you manufacture?",
        a: "We manufacture Printed PP Woven Bags, Plain/Unlaminated PP Woven Bags, Laminated (Coated) Bags, PP Bags with Inner PE Liners, BOPP Laminated Bags and Gusseted Bags — across agriculture, food, feed, chemical, industrial and retail applications.",
      },
    ],
  },
  {
    category: "Quality & Certifications",
    items: [
      {
        q: "What quality certifications does NBPPI hold?",
        a: "NBPPI holds ISO 9001:2015 certification, BSTI certification, BIDA registration, Factory License (DIFE), Environmental Clearance (DoE), Fire Safety Clearance, Export Registration Certificate (ERC) and Import Registration Certificate (IRC), among other mandatory government licenses.",
      },
      {
        q: "How do you ensure product quality?",
        a: "We operate a dedicated in-house QC laboratory running 8 testing checkpoints on every batch: Fabric GSM, Burst Strength, Load Capacity, Moisture Resistance, Color Consistency (spectrophotometer ΔE), Print Accuracy, Dimensional Accuracy and Final Inspection (AQL 2.5). All results are documented and available on request.",
      },
      {
        q: "Can you provide certified copies of your licenses and certificates?",
        a: "Yes. Our compliance team can provide certified copies of all active licenses and certificates within 24 hours — for RFQ support, supplier audits, LC documentation or buyer due diligence. Contact us via the Quality page or email info@nbppi.com.",
      },
    ],
  },
  {
    category: "Export & Shipping",
    items: [
      {
        q: "Which countries do you export to?",
        a: "We currently export to 22+ countries across Asia, Africa, the Middle East and Europe. Key markets include countries across South and Southeast Asia, East Africa and the GCC region. Please contact our export team for specific market availability.",
      },
      {
        q: "Do you handle export documentation?",
        a: "Yes. We handle full export documentation including commercial invoice, packing list, bill of lading, certificate of origin and any buyer-specific compliance documents. Our export team is experienced with LC and open account shipments.",
      },
      {
        q: "What shipping options do you offer?",
        a: "We ship FCL (Full Container Load) and LCL (Less than Container Load) via major Bangladeshi ports. We work with established freight forwarders and can coordinate door-to-port or FOB shipments based on your terms.",
      },
    ],
  },
  {
    category: "General",
    items: [
      {
        q: "Where is NBPPI located?",
        a: "Our manufacturing plant is located in Rangpur Industrial Zone, Bangladesh. Our head office is at House 12, Road 4, Banani, Dhaka 1213, Bangladesh.",
      },
      {
        q: "How do I get a quotation?",
        a: "You can request a quotation through our online quote form, by emailing sales@nbppi.com or by calling +880 1700 000 000. Please provide your product type, quantity, dimensions, print requirements and destination — and we will respond within 24 business hours.",
      },
      {
        q: "Do you work with both local and international buyers?",
        a: "Yes. We serve 150+ business clients across Bangladesh and export to 22+ international markets. Whether you are a local feed mill, rice brand, agri company or an international buyer, our team is equipped to support your packaging requirements.",
      },
    ],
  },
];

function AccordionItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border last:border-0">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-start justify-between gap-6 px-6 py-5 text-left transition hover:bg-[#F8F9FB] sm:px-8"
      >
        <span className="font-display text-sm font-semibold text-[#0B2D6B] sm:text-base">{q}</span>
        <ChevronDown
          className={`mt-0.5 h-5 w-5 shrink-0 text-[#0A6A38] transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="px-6 pb-6 sm:px-8">
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">{a}</p>
        </div>
      )}
    </div>
  );
}

function FaqPage() {
  return (
    <PageShell>
      {/* Hero */}
      <div className="relative overflow-hidden bg-[#0B2D6B] py-14 text-white sm:py-20 lg:py-24">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6">
          <div className="flex items-center gap-2 text-xs text-white/50">
            <Link to="/" className="hover:text-white/80">Home</Link>
            <span>/</span>
            <span className="text-white/80">FAQ</span>
          </div>
          <div className="mt-6">
            <div className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#7FE0D4]">
              Frequently Asked Questions
            </div>
            <h1 className="mt-3 font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Everything you need to know.
            </h1>
            <p className="mt-4 max-w-xl text-base text-white/65">
              Questions about orders, products, quality, export and more — answered by our team.
              Can't find what you're looking for? Contact us directly.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/quote"
              className="inline-flex items-center gap-2 rounded-lg bg-[linear-gradient(135deg,#F4C542_0%,#D9A520_50%,#B8860B_100%)] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_20px_-8px_rgba(217,165,32,0.55)] transition hover:brightness-110"
            >
              Request Quote <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="https://wa.me/8801700000000"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/8 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/15"
            >
              <MessageSquare className="h-4 w-4 text-[#7FE0D4]" /> WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* FAQ Content */}
      <section className="bg-[#F1F4F9] py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="space-y-8">
            {FAQS.map((cat) => (
              <div key={cat.category}>
                {/* Category label */}
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#0A6A38]" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#0A6A38]">
                    {cat.category}
                  </span>
                  <div className="h-px flex-1 bg-border" />
                </div>

                {/* Accordion */}
                <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-[0_2px_12px_-4px_rgba(11,45,107,0.08)]">
                  {cat.items.map((item) => (
                    <AccordionItem key={item.q} q={item.q} a={item.a} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Still have questions */}
          <div className="mt-12 overflow-hidden rounded-2xl bg-[#0B2D6B] p-8 text-white sm:p-10">
            <div className="grid gap-6 sm:grid-cols-2 sm:items-center">
              <div>
                <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#7FE0D4]">
                  Still have questions?
                </div>
                <h3 className="mt-2 font-display text-xl font-bold text-white sm:text-2xl">
                  Our team responds within 24 hours.
                </h3>
                <p className="mt-2 text-sm text-white/60">
                  Reach out via email, phone or WhatsApp — we're happy to help.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 sm:justify-end">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#0A6A38] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#22887b]"
                >
                  Contact Us <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/quote"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/8 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

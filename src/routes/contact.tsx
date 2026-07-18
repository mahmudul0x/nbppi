import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell } from "@/components/site/page-shell";
import factoryAerial from "@/assets/factory-aerial.jpg";
import {
  Phone, Mail, MapPin, Clock, ArrowRight, MessageSquare, ChevronRight,
} from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact NBPPI — Sales, Export & Enquiries" },
      { name: "description", content: "Contact NBPPI's sales and export teams. Head office at Zaman Court, Dilkusha, Dhaka and zonal office in Bogura, Bangladesh. Respond within 24 business hours." },
      { property: "og:title", content: "Contact NBPPI — Sales, Export & Enquiries" },
      { property: "og:description", content: "Contact NBPPI's sales and export team. Head office in Dhaka (Dilkusha) and zonal office in Bogura. Respond within 24 business hours." },
      { property: "og:url", content: "https://northbengalpoly.com/contact" },
      { property: "og:image", content: "https://northbengalpoly.com/og-image.jpg" },
      { property: "og:site_name", content: "NBPPI" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Contact NBPPI — Sales, Export & Enquiries" },
      { name: "twitter:description", content: "Contact NBPPI's sales and export team. Head office Dhaka (Dilkusha), zonal office Bogura. Response within 24 hours." },
      { name: "twitter:image", content: "https://northbengalpoly.com/og-image.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://northbengalpoly.com/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "North Bengal Poly & Packaging Industries Ltd.",
          alternateName: "NBPPI",
          url: "https://northbengalpoly.com",
          logo: "https://northbengalpoly.com/logoWebsite.png",
          image: "https://northbengalpoly.com/og-image.jpg",
          email: "sales@northbengalpoly.com",
          telephone: "+8801714570179",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Room-807, Level-7, Zaman Court, 45 Dilkusha C/A",
            addressLocality: "Dhaka",
            postalCode: "1000",
            addressCountry: "BD",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: "23.7276",
            longitude: "90.4159",
          },
          openingHoursSpecification: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
            opens: "09:00",
            closes: "18:00",
          },
          priceRange: "$$",
          currenciesAccepted: "BDT, USD",
          paymentAccepted: "LC, TT, Open Account",
        }),
      },
    ],
  }),
  component: ContactPage,
});


const OFFICES = [
  {
    type: "Head Office",
    address: "Room-807, Level-7, Zaman Court, 45 Dilkusha C/A",
    city: "Dhaka-1000, Bangladesh",
    phone: "+880 1714 570179",
    email: "info@northbengalpoly.com",
  },
  {
    type: "Zonal Office",
    address: "Sydney Tower, 3rd Floor, Court House Street, Joleshoritola",
    city: "Bogura-5800, Bangladesh",
    phone: "+880 1714 570179",
    email: "info@northbengalpoly.com",
  },
];

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <PageShell>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <div className="relative overflow-hidden bg-[#0B2D6B]">
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <img
          src={factoryAerial}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-10"
        />
        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:py-28">
          <div className="flex items-center gap-2 text-xs text-white/50">
            <Link to="/" className="hover:text-white/80">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-white/80">Contact</span>
          </div>
          <div className="mt-6 max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/70">
              <span className="h-1.5 w-1.5 rounded-full bg-[#0A6A38]" />
              Response within 24 business hours
            </div>
            <h1 className="mt-4 font-display text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
              Let's talk packaging.
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/65">
              Sales enquiries, export documentation, partnership discussions or careers — our team is ready to help.
            </p>
          </div>

          {/* Quick contact chips */}
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="tel:+8801714570179"
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/8 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white/15"
            >
              <Phone className="h-4 w-4 text-[#7FE0D4]" />
              +880 1714 570179
            </a>
            <a
              href="mailto:sales@northbengalpoly.com"
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/8 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white/15"
            >
              <Mail className="h-4 w-4 text-[#7FE0D4]" />
              sales@northbengalpoly.com
            </a>
            <a
              href="https://wa.me/8801714570179"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/8 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white/15"
            >
              <MessageSquare className="h-4 w-4 text-[#7FE0D4]" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* ── Main content ──────────────────────────────────────────────────── */}
      <section className="bg-[#F1F4F9] py-10 sm:py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-6 sm:gap-8 lg:grid-cols-12">

            {/* ── Left: Offices + Hours ──────────────────────────────────── */}
            <div className="lg:col-span-4 space-y-5">

              {/* Office cards */}
              {OFFICES.map((o) => (
                <div key={o.type} className="rounded-2xl border border-border bg-white p-6 shadow-[0_2px_12px_-4px_rgba(11,45,107,0.08)]">
                  <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#0A6A38]">
                    {o.type}
                  </div>
                  <div className="mt-3 flex items-start gap-2.5">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#0B2D6B]/40" />
                    <div>
                      <div className="text-sm font-semibold text-[#0B2D6B]">{o.address}</div>
                      <div className="text-sm text-muted-foreground">{o.city}</div>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center gap-3">
                    <Phone className="h-4 w-4 shrink-0 text-[#0B2D6B]/40" />
                    <a href={`tel:${o.phone.replace(/\s/g, "")}`} className="text-sm text-[#0B2D6B] hover:text-[#0A6A38]">
                      {o.phone}
                    </a>
                  </div>
                  <div className="mt-2 flex items-center gap-3">
                    <Mail className="h-4 w-4 shrink-0 text-[#0B2D6B]/40" />
                    <a href={`mailto:${o.email}`} className="text-sm text-[#0B2D6B] hover:text-[#0A6A38]">
                      {o.email}
                    </a>
                  </div>
                </div>
              ))}

              {/* Working hours */}
              <div className="rounded-2xl border border-border bg-white p-6 shadow-[0_2px_12px_-4px_rgba(11,45,107,0.08)]">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-[#0A6A38]" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#0A6A38]">Working Hours</span>
                </div>
                <div className="mt-4 space-y-2.5">
                  {[
                    ["Sunday – Thursday", "9:00 AM – 6:00 PM"],
                    ["Friday",            "Closed"],
                    ["Saturday",          "9:00 AM – 2:00 PM"],
                  ].map(([day, hrs]) => (
                    <div key={day} className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">{day}</span>
                      <span className={`font-semibold ${hrs === "Closed" ? "text-rose-500" : "text-[#0B2D6B]"}`}>
                        {hrs}
                      </span>
                    </div>
                  ))}
                  <div className="border-t border-border pt-2.5 text-xs text-muted-foreground">
                    All times Bangladesh Standard Time (BST, UTC+6)
                  </div>
                </div>
              </div>

            </div>

            {/* ── Right: Inquiry form ────────────────────────────────────── */}
            <div className="lg:col-span-8">
              <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-[0_2px_12px_-4px_rgba(11,45,107,0.08)]">

                {/* Form body */}
                <div className="p-4 sm:p-6 lg:p-8">
                  {submitted ? (
                    <div className="flex flex-col items-center justify-center py-16 text-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0A6A38]/10">
                        <svg className="h-8 w-8 text-[#0A6A38]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="mt-5 font-display text-xl font-bold text-[#0B2D6B]">Message received</h3>
                      <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                        Thank you for reaching out. Our team will respond within 24 business hours.
                      </p>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="mt-6 text-sm font-semibold text-[#0A6A38] hover:underline"
                      >
                        Send another message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid gap-5 sm:grid-cols-2">
                        {[
                          { label: "Full Name",    type: "text",  placeholder: "Your full name",    required: true },
                          { label: "Company",      type: "text",  placeholder: "Company name",      required: true },
                          { label: "Email Address",type: "email", placeholder: "you@company.com",   required: true },
                          { label: "Phone / WhatsApp", type: "tel", placeholder: "+880 1714 570179", required: false },
                        ].map((f) => (
                          <label key={f.label} className="block">
                            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#0B2D6B]">
                              {f.label}
                              {f.required && <span className="ml-0.5 text-[#0A6A38]">*</span>}
                            </span>
                            <input
                              type={f.type}
                              placeholder={f.placeholder}
                              required={f.required}
                              className="mt-2 w-full rounded-lg border border-border bg-[#F8F9FB] px-4 py-3 text-sm placeholder:text-muted-foreground/60 outline-none transition focus:border-[#0A6A38] focus:bg-white focus:ring-2 focus:ring-[#0A6A38]/15"
                            />
                          </label>
                        ))}
                      </div>

                      {/* Country + Product interest */}
                      <div className="grid gap-5 sm:grid-cols-2">
                        <label className="block">
                          <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#0B2D6B]">Country</span>
                          <input
                            type="text"
                            placeholder="Your country"
                            className="mt-2 w-full rounded-lg border border-border bg-[#F8F9FB] px-4 py-3 text-sm placeholder:text-muted-foreground/60 outline-none transition focus:border-[#0A6A38] focus:bg-white focus:ring-2 focus:ring-[#0A6A38]/15"
                          />
                        </label>
                        <label className="block">
                          <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#0B2D6B]">Product Interest</span>
                          <select className="mt-2 w-full rounded-lg border border-border bg-[#F8F9FB] px-4 py-3 text-sm text-foreground outline-none transition focus:border-[#0A6A38] focus:bg-white focus:ring-2 focus:ring-[#0A6A38]/15">
                            <option value="">Select a product</option>
                            <option>Printed PP Woven Bags</option>
                            <option>Plain PP Woven Bags</option>
                            <option>Laminated Bags</option>
                            <option>PP Bags with Inner Liner</option>
                            <option>BOPP Laminated Bags</option>
                            <option>Gusseted Bags</option>
                            <option>Multiple / Not sure</option>
                          </select>
                        </label>
                      </div>

                      <label className="block">
                        <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#0B2D6B]">
                          Message <span className="text-[#0A6A38]">*</span>
                        </span>
                        <textarea
                          rows={4}
                          required
                          placeholder="Describe your requirement — quantity, dimensions, printing, delivery timeline..."
                          className="mt-2 w-full resize-none rounded-lg border border-border bg-[#F8F9FB] px-4 py-3 text-sm placeholder:text-muted-foreground/60 outline-none transition focus:border-[#0A6A38] focus:bg-white focus:ring-2 focus:ring-[#0A6A38]/15"
                        />
                      </label>

                      <div className="flex flex-col gap-4 border-t border-border pt-5 sm:flex-row sm:items-center sm:justify-between">
                        <p className="text-xs text-muted-foreground">
                          <span className="text-[#0A6A38]">*</span> Required fields. We respond within 24 business hours.
                        </p>
                        <button
                          type="submit"
                          className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#0B2D6B] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#123E87] active:scale-[0.98]"
                        >
                          Send Message
                          <ArrowRight className="h-4 w-4" />
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Map ───────────────────────────────────────────────────────────── */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 sm:pb-20">
          <div className="overflow-hidden rounded-2xl border border-border shadow-[0_4px_24px_-8px_rgba(11,45,107,0.12)]">
            <div className="flex items-center justify-between border-b border-border bg-white px-6 py-4">
              <div className="flex items-center gap-2.5">
                <MapPin className="h-4 w-4 text-[#0A6A38]" />
                <span className="font-display text-sm font-semibold text-[#0B2D6B]">
                  NBPPI — Zaman Court, Dilkusha C/A, Dhaka-1000, Bangladesh
                </span>
              </div>
              <a
                href="https://maps.google.com/?q=Zaman+Court,+Dilkusha,+Dhaka-1000,+Bangladesh"
                target="_blank"
                rel="noreferrer"
                className="text-xs font-semibold text-[#0A6A38] hover:underline"
              >
                Open in Maps →
              </a>
            </div>
            <iframe
              title="NBPPI head office location"
              src="https://www.google.com/maps?q=Zaman+Court,+Dilkusha,+Dhaka-1000,+Bangladesh&output=embed"
              className="h-100 w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </PageShell>
  );
}

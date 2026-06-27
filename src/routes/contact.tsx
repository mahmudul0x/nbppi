import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/page-shell";
import { PageHero } from "@/components/site/page-hero";
import factoryAerial from "@/assets/factory-aerial.jpg";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — NBPPI" },
      { name: "description", content: "Get in touch with NBPPI's sales and export teams. Head office in Dhaka, plant in Rangpur Industrial Zone, Bangladesh." },
      { property: "og:title", content: "Contact — NBPPI" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Contact"
        title={<>Talk to NBPPI.</>}
        intro="Sales, export, careers or partnership enquiries — our team responds within 24 business hours."
        image={factoryAerial}
        crumbs={[{ label: "Home", to: "/" }, { label: "Contact" }]}
      />

      <section className="bg-background py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-3">
          {[
            { i: MapPin, t: "Head Office", v: "House 12, Road 4, Banani\nDhaka 1213, Bangladesh" },
            { i: MapPin, t: "Manufacturing Plant", v: "Rangpur Industrial Zone\nNorth Bengal, Bangladesh" },
            { i: Clock, t: "Working Hours", v: "Sunday – Thursday\n9:00 AM – 6:00 PM (BST)" },
            { i: Phone, t: "Sales", v: "+880 1700 000 000\n+880 2 555 0000" },
            { i: Mail, t: "Email", v: "sales@nbppi.com\nexport@nbppi.com" },
            { i: Phone, t: "WhatsApp", v: "+880 1700 000 000\n24/7 quote line" },
          ].map(({ i: Icon, t, v }) => (
            <div key={t} className="rounded-2xl border border-border bg-card p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#2A9D8F]/10 text-[#2A9D8F]">
                <Icon className="h-5 w-5" />
              </div>
              <div className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">{t}</div>
              <div className="mt-2 whitespace-pre-line font-display text-base font-semibold text-[#082B59]">{v}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#F1F4F9] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 overflow-hidden rounded-3xl border border-border bg-white shadow-[var(--shadow-card)] lg:grid-cols-2">
            <div className="p-10 lg:p-14">
              <div className="font-display text-3xl font-bold text-[#082B59]">Quick inquiry</div>
              <p className="mt-2 text-sm text-muted-foreground">Drop us a message — we'll route it to the right team within 24h.</p>
              <form className="mt-8 grid gap-5 sm:grid-cols-2">
                {[
                  { l: "Full Name", t: "text" },
                  { l: "Company", t: "text" },
                  { l: "Email", t: "email" },
                  { l: "Phone", t: "tel" },
                ].map((f) => (
                  <label key={f.l} className="block">
                    <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#082B59]">{f.l}</span>
                    <input type={f.t} className="mt-2 w-full rounded-md border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-[#2A9D8F] focus:ring-2 focus:ring-[#2A9D8F]/20" />
                  </label>
                ))}
                <label className="block sm:col-span-2">
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#082B59]">Message</span>
                  <textarea rows={4} className="mt-2 w-full rounded-md border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-[#2A9D8F] focus:ring-2 focus:ring-[#2A9D8F]/20" />
                </label>
                <Button type="button" className="mt-2 h-12 bg-[#082B59] px-8 text-sm font-semibold hover:bg-[#145DA0] sm:col-span-2 sm:justify-self-start">
                  Send message <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </form>
            </div>
            <div className="relative min-h-[420px] bg-[#082B59]">
              <iframe
                title="NBPPI location"
                src="https://www.google.com/maps?q=Rangpur,Bangladesh&output=embed"
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
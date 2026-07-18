import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/page-shell";
import { ShieldCheck, Mail, Phone } from "lucide-react";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — NBPPI" },
      { name: "description", content: "Privacy Policy of North Bengal Poly & Packaging Industries Ltd. — how we collect, use and protect your information." },
      { property: "og:title", content: "Privacy Policy — NBPPI" },
      { property: "og:description", content: "Privacy Policy of North Bengal Poly & Packaging Industries Ltd. — how we collect, use and protect your personal information." },
      { property: "og:url", content: "https://nbppi.com/privacy" },
      { property: "og:site_name", content: "NBPPI" },
    ],
    links: [{ rel: "canonical", href: "https://nbppi.com/privacy" }],
  }),
  component: PrivacyPage,
});

const SECTIONS = [
  {
    title: "1. Information We Collect",
    body: [
      "When you use our website, submit an enquiry form or request a quotation, we may collect the following information:",
      "• Full name, company name, job title",
      "• Email address, phone number, WhatsApp number",
      "• Country of residence or business",
      "• Product interest and project requirements",
      "• Technical specifications submitted via our quote form",
      "• Browser type, IP address and pages visited (via analytics)",
    ],
  },
  {
    title: "2. How We Use Your Information",
    body: [
      "We use the information we collect for the following purposes:",
      "• To respond to your enquiries and provide quotations",
      "• To process B2B orders and manage business relationships",
      "• To send product updates, brochures or relevant communications (only with your consent)",
      "• To improve our website and services based on usage patterns",
      "• To comply with legal and regulatory obligations",
    ],
  },
  {
    title: "3. Information Sharing",
    body: [
      "We do not sell, rent or trade your personal information to third parties. We may share your information only in the following circumstances:",
      "• With our internal sales, export and production teams to process your enquiry",
      "• With trusted service providers who assist us in operating our website or business (under strict confidentiality agreements)",
      "• Where required by applicable law, government authority or legal process",
    ],
  },
  {
    title: "4. Data Retention",
    body: [
      "We retain your personal information for as long as necessary to fulfil the purposes outlined in this policy, or as required by law. Business enquiry records are typically retained for a period of five (5) years in line with standard commercial practice.",
    ],
  },
  {
    title: "5. Cookies & Analytics",
    body: [
      "Our website may use cookies and similar tracking technologies to enhance your browsing experience and collect usage data. You may disable cookies through your browser settings, although this may affect the functionality of certain parts of the site.",
      "We may use third-party analytics services (such as Google Analytics) to understand how visitors interact with our website. These services collect anonymised data and are governed by their own privacy policies.",
    ],
  },
  {
    title: "6. Data Security",
    body: [
      "We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, disclosure, alteration or destruction. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.",
    ],
  },
  {
    title: "7. Your Rights",
    body: [
      "You have the right to:",
      "• Access the personal information we hold about you",
      "• Request correction of inaccurate or incomplete data",
      "• Request deletion of your personal data (subject to legal obligations)",
      "• Withdraw consent for marketing communications at any time",
      "To exercise any of these rights, please contact us using the details provided below.",
    ],
  },
  {
    title: "8. Third-Party Links",
    body: [
      "Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites and encourage you to review their privacy policies independently.",
    ],
  },
  {
    title: "9. Changes to This Policy",
    body: [
      "We reserve the right to update this Privacy Policy at any time. Changes will be posted on this page with a revised effective date. We encourage you to review this policy periodically.",
    ],
  },
  {
    title: "10. Contact Us",
    body: [
      "If you have any questions or concerns regarding this Privacy Policy, please contact us:",
      "North Bengal Poly & Packaging Industries Ltd.",
      "Head Office: Room-807, Level-7, Zaman Court, 45 Dilkusha C/A, Dhaka-1000, Bangladesh",
      "Email: info@nbppi.com",
      "Phone: +880 1714 570179",
    ],
  },
];

function PrivacyPage() {
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
            <span className="text-white/80">Privacy Policy</span>
          </div>
          <div className="mt-6 flex items-start gap-5">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#0A6A38]/20">
              <ShieldCheck className="h-7 w-7 text-[#7FE0D4]" />
            </div>
            <div>
              <div className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#7FE0D4]">Legal</div>
              <h1 className="mt-1 font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                Privacy Policy
              </h1>
              <p className="mt-3 text-base text-white/65">
                North Bengal Poly &amp; Packaging Industries Ltd.
              </p>
            </div>
          </div>
          <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-xs text-white/60">
            <span className="h-1.5 w-1.5 rounded-full bg-[#7FE0D4]" />
            Effective Date: 1 January 2025 &nbsp;·&nbsp; Last Updated: 29 June 2026
          </div>
        </div>
      </div>

      {/* Content */}
      <section className="bg-[#F1F4F9] py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-[0_4px_24px_-8px_rgba(11,45,107,0.08)]">

            {/* Intro */}
            <div className="border-b border-border bg-[#F8F9FB] px-8 py-7 sm:px-10">
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                This Privacy Policy explains how North Bengal Poly &amp; Packaging Industries Ltd.
                (&ldquo;NBPPI&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo; or &ldquo;our&rdquo;)
                collects, uses and protects information obtained through our website and business
                enquiries. By using our website, you agree to the terms of this policy.
              </p>
            </div>

            {/* Sections */}
            <div className="divide-y divide-border">
              {SECTIONS.map((s) => (
                <div key={s.title} className="px-8 py-7 sm:px-10">
                  <h2 className="font-display text-base font-bold text-[#0B2D6B] sm:text-lg">
                    {s.title}
                  </h2>
                  <div className="mt-4 space-y-2">
                    {s.body.map((line, i) => (
                      <p
                        key={i}
                        className={`text-sm leading-relaxed sm:text-base ${
                          line.startsWith("•")
                            ? "pl-4 text-muted-foreground"
                            : "text-muted-foreground"
                        }`}
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Contact strip */}
            <div className="border-t border-border bg-[#0B2D6B] px-8 py-7 sm:px-10">
              <div className="flex flex-wrap items-center gap-6">
                <div className="text-sm font-semibold text-white">Privacy enquiries:</div>
                <a href="mailto:info@nbppi.com" className="inline-flex items-center gap-2 text-sm text-[#7FE0D4] hover:underline">
                  <Mail className="h-4 w-4" /> info@nbppi.com
                </a>
                <a href="tel:+8801714570179" className="inline-flex items-center gap-2 text-sm text-[#7FE0D4] hover:underline">
                  <Phone className="h-4 w-4" /> +880 1714 570179
                </a>
              </div>
            </div>

          </div>

          {/* Back link */}
          <div className="mt-8 flex items-center justify-between text-sm">
            <Link to="/" className="font-semibold text-[#0B2D6B] hover:text-[#0A6A38]">
              ← Back to Home
            </Link>
            <Link to="/terms" className="font-semibold text-[#0B2D6B] hover:text-[#0A6A38]">
              Terms of Use →
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

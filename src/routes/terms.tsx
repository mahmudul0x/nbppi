import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/page-shell";
import { FileText, Mail, Phone } from "lucide-react";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Use — NBPPI" },
      { name: "description", content: "Terms of Use for the North Bengal Poly & Packaging Industries Ltd. website — your rights and responsibilities when using our site." },
      { property: "og:title", content: "Terms of Use — NBPPI" },
      { property: "og:description", content: "Terms of Use for the NBPPI website — your rights and responsibilities when using northbengalpoly.com." },
      { property: "og:url", content: "https://northbengalpoly.com/terms" },
      { property: "og:site_name", content: "NBPPI" },
    ],
    links: [{ rel: "canonical", href: "https://northbengalpoly.com/terms" }],
  }),
  component: TermsPage,
});

const SECTIONS = [
  {
    title: "1. Acceptance of Terms",
    body: [
      "By accessing or using the NBPPI website (www.northbengalpoly.com), you agree to be bound by these Terms of Use and all applicable laws and regulations. If you do not agree with any part of these terms, you must not use this website.",
    ],
  },
  {
    title: "2. Use of the Website",
    body: [
      "This website is intended for business and commercial enquiry purposes. You agree to use this website only for lawful purposes and in a manner that does not infringe the rights of others or restrict their use of the website.",
      "You must not:",
      "• Use the site in any way that violates applicable local, national or international laws or regulations",
      "• Transmit unsolicited commercial communications (spam)",
      "• Attempt to gain unauthorised access to any part of the website or its related systems",
      "• Introduce viruses, malware or any other harmful material",
    ],
  },
  {
    title: "3. Intellectual Property",
    body: [
      "All content on this website — including but not limited to text, graphics, logos, product images, icons, design elements and software — is the property of North Bengal Poly & Packaging Industries Ltd. and is protected by applicable intellectual property laws.",
      "You may not reproduce, distribute, modify, create derivative works from, or commercially exploit any content from this website without our prior written permission.",
    ],
  },
  {
    title: "4. Product Information & Accuracy",
    body: [
      "We make every effort to ensure that product descriptions, specifications, certifications and other information on this website are accurate and up to date. However, NBPPI does not warrant that product information is complete, current or error-free.",
      "Actual product specifications are confirmed at the time of quotation and order placement. All specifications are subject to our standard manufacturing tolerances.",
    ],
  },
  {
    title: "5. Quotations & Orders",
    body: [
      "Enquiries and quotation requests submitted through this website do not constitute a binding contract or purchase order. A binding agreement is only formed upon receipt of a formal written purchase order and our written order confirmation.",
      "Pricing, lead times and availability are subject to change and are confirmed at the time of order acceptance.",
    ],
  },
  {
    title: "6. Limitation of Liability",
    body: [
      "To the fullest extent permitted by law, NBPPI shall not be liable for any indirect, incidental, special, consequential or punitive damages arising from your use of, or inability to use, this website or its content.",
      "NBPPI does not accept liability for any loss or damage caused by viruses or other technologically harmful material transmitted through use of this website.",
    ],
  },
  {
    title: "7. Third-Party Links",
    body: [
      "This website may contain links to third-party websites for your convenience. NBPPI does not endorse or take responsibility for the content, privacy practices or accuracy of any third-party site. Accessing linked sites is at your own risk.",
    ],
  },
  {
    title: "8. Disclaimer of Warranties",
    body: [
      "This website is provided on an 'as is' and 'as available' basis without any representations or warranties, express or implied. NBPPI makes no warranties as to the accuracy, completeness or suitability of the information on this website for any particular purpose.",
    ],
  },
  {
    title: "9. Governing Law",
    body: [
      "These Terms of Use shall be governed by and construed in accordance with the laws of the People's Republic of Bangladesh. Any disputes arising in connection with these terms shall be subject to the exclusive jurisdiction of the courts of Bangladesh.",
    ],
  },
  {
    title: "10. Changes to These Terms",
    body: [
      "NBPPI reserves the right to revise these Terms of Use at any time. Changes will be effective immediately upon posting to this page. Your continued use of the website following any changes constitutes your acceptance of the updated terms.",
    ],
  },
  {
    title: "11. Contact Us",
    body: [
      "For any questions regarding these Terms of Use, please contact:",
      "North Bengal Poly & Packaging Industries Ltd.",
      "Head Office: Room-807, Level-7, Zaman Court, 45 Dilkusha C/A, Dhaka-1000, Bangladesh",
      "Email: info@northbengalpoly.com",
      "Phone: +880 1301 771919",
    ],
  },
];

function TermsPage() {
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
            <span className="text-white/80">Terms of Use</span>
          </div>
          <div className="mt-6 flex items-start gap-5">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#0A6A38]/20">
              <FileText className="h-7 w-7 text-[#7FE0D4]" />
            </div>
            <div>
              <div className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#7FE0D4]">Legal</div>
              <h1 className="mt-1 font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                Terms of Use
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
                Please read these Terms of Use carefully before using the website of North Bengal
                Poly &amp; Packaging Industries Ltd. (&ldquo;NBPPI&rdquo;). These terms govern your
                access to and use of our website and the information, products and services available
                through it.
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
                <div className="text-sm font-semibold text-white">Legal enquiries:</div>
                <a href="mailto:info@northbengalpoly.com" className="inline-flex items-center gap-2 text-sm text-[#7FE0D4] hover:underline">
                  <Mail className="h-4 w-4" /> info@northbengalpoly.com
                </a>
                <a href="tel:+8801301771919" className="inline-flex items-center gap-2 text-sm text-[#7FE0D4] hover:underline">
                  <Phone className="h-4 w-4" /> +880 1301 771919
                </a>
              </div>
            </div>

          </div>

          {/* Back link */}
          <div className="mt-8 flex items-center justify-between text-sm">
            <Link to="/" className="font-semibold text-[#0B2D6B] hover:text-[#0A6A38]">
              ← Back to Home
            </Link>
            <Link to="/privacy" className="font-semibold text-[#0B2D6B] hover:text-[#0A6A38]">
              Privacy Policy →
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

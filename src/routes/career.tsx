import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/page-shell";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import teamEngineer from "@/assets/team-engineer.jpg";
import { ArrowRight, GraduationCap, HeartPulse, Trophy, Users } from "lucide-react";

export const Route = createFileRoute("/career")({
  head: () => ({
    meta: [
      { title: "Careers — NBPPI" },
      { name: "description", content: "Build a career in industrial manufacturing with NBPPI — open roles across engineering, operations, QC and export." },
      { property: "og:title", content: "Careers at NBPPI — Join Our Team" },
      { property: "og:description", content: "Build a career in industrial manufacturing with NBPPI — open roles in engineering, production, QC, export and administration at our Rangpur plant." },
      { property: "og:url", content: "https://nbppi.com/career" },
      { property: "og:image", content: "https://nbppi.com/og-image.jpg" },
      { property: "og:site_name", content: "NBPPI" },
    ],
    links: [{ rel: "canonical", href: "https://nbppi.com/career" }],
  }),
  component: CareerPage,
});

const JOBS = [
  { t: "Production Engineer (Extrusion)", d: "Rangpur · Full-time", x: "5+ yrs" },
  { t: "QC Lab Specialist", d: "Rangpur · Full-time", x: "3+ yrs" },
  { t: "Export Sales Executive", d: "Dhaka · Full-time", x: "4+ yrs" },
  { t: "Mechanical Maintenance Lead", d: "Rangpur · Full-time", x: "7+ yrs" },
  { t: "Sustainability Analyst", d: "Dhaka · Full-time", x: "3+ yrs" },
];

function CareerPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Career"
        title={<>Build a career in industrial<br /> manufacturing — at scale.</>}
        intro="NBPPI is hiring engineers, operators, QC specialists and export professionals. Join a team that's shaping the future of polypropylene packaging."
        image={teamEngineer}
        crumbs={[{ label: "Home", to: "/" }, { label: "Career" }]}
      />

      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="Why NBPPI" title="The benefits of joining our team." />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { i: GraduationCap, t: "Continuous Learning", d: "On-the-job training and external certification support." },
              { i: HeartPulse, t: "Health & Wellbeing", d: "Comprehensive medical and family insurance." },
              { i: Trophy, t: "Performance Bonus", d: "Recognition programmes tied to measurable impact." },
              { i: Users, t: "Inclusive Culture", d: "1,200+ teammates across engineering, ops and export." },
            ].map(({ i: Icon, t, d }) => (
              <div key={t} className="rounded-xl border border-border bg-card p-6">
                <Icon className="h-6 w-6 text-[#0A6A38]" />
                <div className="mt-5 font-display text-base font-semibold text-[#0B2D6B]">{t}</div>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F1F4F9] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="Open Roles" title="Current openings." />
          <div className="mt-12 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-white">
            {JOBS.map((j) => (
              <div key={j.t} className="grid grid-cols-12 items-center gap-4 px-6 py-6 transition hover:bg-muted/40">
                <div className="col-span-12 md:col-span-6">
                  <div className="font-display text-lg font-semibold text-[#0B2D6B]">{j.t}</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">{j.d}</div>
                </div>
                <div className="col-span-6 md:col-span-3 text-sm text-muted-foreground">Experience · {j.x}</div>
                <div className="col-span-6 md:col-span-3 md:text-right">
                  <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-[#0B2D6B] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#123E87]">
                    Apply <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
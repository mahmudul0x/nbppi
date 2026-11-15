import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/page-shell";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import heroImg from "@/assets/gallery/17-extrusion-line-operator.jpg";
import {
  ArrowRight, Briefcase, ClipboardCheck, Cog, FileText, GraduationCap, HardHat,
  Handshake, Mail, MessageSquare, Search, ShieldCheck, TrendingUp, Users, Wrench,
} from "lucide-react";

export const Route = createFileRoute("/career")({
  head: () => ({
    meta: [
      { title: "Careers — NBPPI" },
      { name: "description", content: "Build a career in PP woven bag manufacturing with North Bengal Poly & Packaging Industries Ltd. See open positions and send us your CV." },
      { property: "og:title", content: "Careers at NBPPI — Join Our Team" },
      { property: "og:description", content: "Join North Bengal Poly & Packaging Industries Ltd. — careers in production, quality, maintenance, sales and administration." },
      { property: "og:url", content: "https://northbengalpoly.com/career" },
      { property: "og:image", content: "https://northbengalpoly.com/og-image.jpg" },
      { property: "og:site_name", content: "NBPPI" },
    ],
    links: [{ rel: "canonical", href: "https://northbengalpoly.com/career" }],
  }),
  component: CareerPage,
});

const CAREER_EMAIL = "info@northbengalpoly.com";

const applyLink = (position: string) =>
  `mailto:${CAREER_EMAIL}?subject=${encodeURIComponent(`Job Application — ${position}`)}`;

// Add open positions here; the page shows a "no openings" note while this is empty
const JOBS: { title: string; department: string; location: string; type: string; experience: string; deadline?: string }[] = [];

const WHY = [
  { i: GraduationCap, t: "Learn on the job", d: "Hands-on training on extrusion, weaving, lamination and printing lines." },
  { i: ShieldCheck, t: "Safe workplace", d: "Safety gear, clear procedures and a disciplined production floor." },
  { i: TrendingUp, t: "Room to grow", d: "Good work is noticed — operators and staff can grow into larger roles." },
  { i: Users, t: "Team that supports you", d: "Work alongside experienced engineers and supervisors every day." },
];

const DEPARTMENTS = [
  { i: Cog, t: "Production", d: "Machine operators, line supervisors, production engineers." },
  { i: ClipboardCheck, t: "Quality Control", d: "QC inspectors and lab staff for GSM, strength and print checks." },
  { i: Wrench, t: "Maintenance", d: "Mechanical and electrical technicians for plant machinery." },
  { i: Handshake, t: "Sales & Marketing", d: "Sales executives and customer relationship roles." },
  { i: Briefcase, t: "Admin & Accounts", d: "HR, accounts, store and office administration." },
  { i: HardHat, t: "Store & Logistics", d: "Raw material store, finished goods and dispatch." },
];

const STEPS = [
  { i: FileText, t: "Send your CV", d: "Email your CV with the position name in the subject line." },
  { i: Search, t: "Screening", d: "Our team reviews your CV and shortlists suitable candidates." },
  { i: MessageSquare, t: "Interview", d: "Shortlisted candidates are called for an interview or practical test." },
  { i: Handshake, t: "Offer & joining", d: "Selected candidates receive an offer and joining instructions." },
];

function CareerPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Career"
        title={<>Build your career<br /> with NBPPI.</>}
        intro="We are always looking for hardworking, skilled people to join our production, quality, maintenance, sales and office teams."
        image={heroImg}
        crumbs={[{ label: "Home", to: "/" }, { label: "Career" }]}
      />

      {/* Why join */}
      <section className="bg-background py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading eyebrow="Why NBPPI" title="Why work with us." />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {WHY.map(({ i: Icon, t, d }) => (
              <div key={t} className="rounded-xl border border-border bg-card p-6">
                <Icon className="h-6 w-6 text-[#0A6A38]" />
                <div className="mt-5 font-display text-base font-semibold text-[#0B2D6B]">{t}</div>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open positions */}
      <section id="openings" className="bg-[#F1F4F9] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading eyebrow="Open Positions" title="Current openings." />
          {JOBS.length > 0 ? (
            <div className="mt-12 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-white">
              {JOBS.map((j) => (
                <div key={j.title} className="grid grid-cols-12 items-center gap-4 px-6 py-6 transition hover:bg-muted/40">
                  <div className="col-span-12 md:col-span-6">
                    <div className="font-display text-lg font-semibold text-[#0B2D6B]">{j.title}</div>
                    <div className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                      {j.department} · {j.location} · {j.type}
                    </div>
                  </div>
                  <div className="col-span-6 text-sm text-muted-foreground md:col-span-3">
                    Experience · {j.experience}
                    {j.deadline && <div className="mt-0.5 text-xs">Apply by {j.deadline}</div>}
                  </div>
                  <div className="col-span-6 md:col-span-3 md:text-right">
                    <a href={applyLink(j.title)} className="inline-flex items-center gap-2 rounded-md bg-[#0B2D6B] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#123E87]">
                      Apply <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="mt-12 rounded-2xl border border-border bg-white px-6 py-10 text-center sm:px-10">
              <Briefcase className="mx-auto h-8 w-8 text-[#0A6A38]" />
              <div className="mt-4 font-display text-lg font-semibold text-[#0B2D6B]">No open positions right now</div>
              <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
                New openings will be posted here. You can still send us your CV — we keep it on file and contact you when a suitable role opens.
              </p>
              <a href={applyLink("General Application")} className="mt-6 inline-flex items-center gap-2 rounded-md bg-[#0B2D6B] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#123E87]">
                Send your CV <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          )}
        </div>
      </section>

      {/* Departments */}
      <section className="bg-background py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading eyebrow="Where you can work" title="Our teams." />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {DEPARTMENTS.map(({ i: Icon, t, d }) => (
              <div key={t} className="flex gap-4 rounded-xl border border-border bg-card p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#F1F4F9]">
                  <Icon className="h-5 w-5 text-[#0B2D6B]" />
                </div>
                <div>
                  <div className="font-display text-base font-semibold text-[#0B2D6B]">{t}</div>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring process */}
      <section className="bg-[#F1F4F9] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading eyebrow="How to apply" title="Our hiring process." />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map(({ i: Icon, t, d }, n) => (
              <div key={t} className="rounded-xl border border-border bg-white p-6">
                <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#0A6A38]">Step {String(n + 1).padStart(2, "0")}</div>
                <Icon className="mt-4 h-6 w-6 text-[#0B2D6B]" />
                <div className="mt-4 font-display text-base font-semibold text-[#0B2D6B]">{t}</div>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col items-start justify-between gap-6 rounded-2xl bg-[#0B2D6B] p-8 text-white sm:p-12 md:flex-row md:items-center">
            <div>
              <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#7FE0D4]">Join our team</div>
              <h2 className="mt-3 font-display text-2xl font-semibold sm:text-3xl">Ready to work with us?</h2>
              <p className="mt-2 text-sm text-white/70">
                Email your CV to <span className="font-semibold text-white">{CAREER_EMAIL}</span> with the position name in the subject.
              </p>
            </div>
            <a href={applyLink("General Application")} className="inline-flex shrink-0 items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-[#0B2D6B] transition hover:bg-white/90">
              <Mail className="h-4 w-4" /> Email your CV
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

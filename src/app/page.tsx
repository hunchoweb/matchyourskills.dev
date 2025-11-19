"use client";

import Image from "next/image";
import { HeroSection } from "@/components/HeroSection";
import { ShimmerButton } from "@/components/ShimmerButton";

const steps = [
  {
    title: "Submit & review",
    headline: "Share your details and current CV link.",
    description:
      "We check that we can work with your document and confirm the focus areas for the job search.",
    badge: "Step 01",
  },
  {
    title: "Payment & kickoff",
    headline: "Receive a secure Paystack link.",
    description:
      "Once you confirm payment (24–72 hour window starts here) we spin up sourcing and the CV polish queue.",
    badge: "Step 02",
  },
  {
    title: "CV enhancements",
    headline: "We sharpen achievements and keyword density.",
    description:
      "Expect recruiter-friendly bullet refinements and formatting tweaks aligned to the roles we’re targeting.",
    badge: "Step 03",
  },
  {
    title: "25 LinkedIn matches",
    headline: "You get a curated list with hiring signals.",
    description:
      "Each role includes why it fits, application links, and any warm-intro prompts we spotted.",
    badge: "Step 04",
  },
];

const faqs = [
  {
    question: "What exactly does this service provide?",
    answer:
      "We review your CV, refine it if needed, and match it with 25+ fresh job openings that fit your skills, experience, and preferred role. Expect a downloadable CV plus a Google Sheet with links ready for applications.",
  },
  {
    question: "How long does it take to receive my results?",
    answer:
      "Delivery happens within 24–72 hours after payment confirmation so you can start applying immediately.",
  },
  {
    question: "Where do you find the job opportunities?",
    answer:
      "We curate directly from LinkedIn job postings, focusing on fresh, active roles that align with your stated criteria.",
  },
  {
    question: "Can I submit more than one job role?",
    answer:
      "We recommend focusing on one role so the CV polish and matched jobs stay hyper-relevant. Additional roles can be scoped as a separate add-on.",
  },
  {
    question: "What happens after I submit my CV?",
    answer:
      "We review to ensure it fits the role you selected. If it’s a match, we notify you and send the Paystack link to proceed.",
  },
  {
    question: "What if my CV is not a good fit?",
    answer:
      "We’ll reach out with recommendations or request extra details before moving forward if major adjustments are needed.",
  },
  {
    question: "How do I make payment?",
    answer:
      "Payments run through a secure Paystack link. Once confirmed, we immediately start processing your request.",
  },
  {
    question: "How will I receive my CV and job matches?",
    answer:
      "You’ll receive an editable Google Docs CV (downloadable as PDF) plus a Google Sheet listing all 25+ matches with direct application URLs.",
  },
  {
    question: "Will you apply for the jobs on my behalf?",
    answer:
      "No. We equip you with everything needed—optimized CV plus organized job links—so you can apply personally.",
  },
  {
    question: "Do you store my information?",
    answer:
      "We only use your details to deliver the service and communicate about your order. Your data isn’t shared with third parties.",
  },
];

const pricing = [
  {
    name: "CV + 25 Matches",
    price: "₦20,000",
    cadence: "one-time",
    idealFor: "Best for getting a refreshed CV plus 25 LinkedIn roles in days.",
    perks: [
      "Professional CV markup (PDF + DOC)",
      "25 curated LinkedIn roles with hiring signals",
      "Delivery window: 24–72 hours after payment",
    ],
  },
  {
    name: "Pipeline Retainer",
    price: "₦40,000",
    cadence: "per month",
    idealFor: "Keep sourcing momentum and recurring CV tweaks each week.",
    perks: [
      "Bi-weekly CV refresh & keyword tuning",
      "Ongoing LinkedIn role monitoring + alerts",
      "Priority inbox support & cover note prompts",
    ],
    featured: true,
  },
];

export default function HomePage() {
  const currentYear = new Date().getFullYear();
  const leadFormUrl =
    "https://faseni.app.n8n.cloud/form/a921a37b-377c-4870-b900-66bcb6006815";

  const openLeadForm = () => {
    window.open(leadFormUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black text-slate-100">
      <header
        id="top"
        className="border-b border-white/10 bg-slate-900/70 backdrop-blur-xl"
      >
        <div className="flex w-full items-center justify-between px-6 py-5 sm:px-10 lg:px-16">
          <a href="#top" className="flex items-center">
            <Image
              src="/images/matchyourskills_logo.png"
              width={160}
              height={48}
              alt="Match Your Skills logo"
              priority
              className="h-12 w-auto object-contain"
            />
          </a>
          <nav className="hidden items-center gap-6 text-sm font-semibold text-slate-200 sm:flex">
            <a
              href="#how-it-works"
              className="transition hover:text-primary-300"
            >
              How it works
            </a>
            <a href="#pricing" className="transition hover:text-primary-300">
              Pricing
            </a>
            <a
              href={leadFormUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-primary-500 px-4 py-2 text-white shadow-lg shadow-primary-500/30 transition hover:bg-primary-400"
            >
              Get started
            </a>
          </nav>
        </div>
      </header>
      <main className="min-h-screen">
        <div className="flex w-full flex-col gap-20 px-4 py-16 sm:px-12">
          <HeroSection
            className="border border-white/10 bg-slate-900/60 shadow-[0_30px_120px_rgba(2,6,23,0.6)]"
            title="MatchYourSkills.Dev"
            subtitle={{
              regular: "Get matched with the right jobs",
              gradient: "fast.",
            }}
            description="Stop spraying random applications. We professionally refine your CV and deliver 25+ handpicked LinkedIn roles that align with your goals within 24–72 hours after payment confirmation."
            ctaText="Get started"
            ctaHref={leadFormUrl}
            ctaTarget="_blank"
            bottomImage={{
              light: "/images/hero.jpg",
              dark: "/images/hero.jpg",
            }}
            gridOptions={{
              angle: 55,
              cellSize: 55,
              opacity: 0.3,
              lightLineColor: "rgba(148,163,184,0.4)",
              darkLineColor: "rgba(71,85,105,0.3)",
            }}
          />

          <section className="rounded-[32px] border border-white/10 bg-slate-950/70 p-10 text-center shadow-[0_20px_80px_rgba(2,6,23,0.6)] sm:p-14">
            <h2 className="text-4xl font-semibold text-white sm:text-5xl">
              Try our platform today!
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-300">
              Lend More Interview with 25+ Customized CVs for Each Job Posting
              from ₦20,000
            </p>
            <div className="mt-8 flex justify-center">
              <ShimmerButton
                onClick={openLeadForm}
                className="px-6 py-3 text-base font-semibold text-white"
                background="linear-gradient(135deg,#0ea5e9,#6366f1)"
                shimmerColor="#f8fafc"
                shimmerDuration="4s"
                borderRadius="999px"
              >
                Get started today
              </ShimmerButton>
            </div>
          </section>

          <section
            className="space-y-10 rounded-[32px] border border-white/10 bg-gradient-to-br from-slate-900/80 via-slate-900/50 to-slate-900/80 p-8 shadow-[0_25px_100px_rgba(2,6,23,0.7)] sm:p-12"
            id="how-it-works"
          >
            <div className="flex flex-col gap-3 text-center">
              <span className="section-title">How it works</span>
              <h2 className="text-3xl font-semibold text-white">
                From intake to delivery in 4 steps
              </h2>
              <p className="mx-auto max-w-3xl text-base text-slate-300">
                Every stage mirrors the brief from your boss: we validate your
                CV, confirm payment, enhance your document, and deliver 25
                targeted LinkedIn roles—complete with why each one is a match.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {steps.map((step) => (
                <article
                  key={step.title}
                  className="flex flex-col gap-4 rounded-[28px] border border-white/10 bg-white/5 p-6 text-slate-100 shadow-lg shadow-black/30"
                >
                  <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-200">
                    {step.badge}
                  </span>
                  <h3 className="text-xl font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="text-lg text-slate-200">{step.headline}</p>
                  <p className="text-sm text-slate-300">{step.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section
            className="space-y-10 rounded-[32px] border border-white/10 bg-slate-950/70 p-8 shadow-[0_25px_100px_rgba(2,6,23,0.7)] sm:p-12"
            id="pricing"
          >
            <div className="flex flex-col gap-3 text-center">
              <span className="section-title">Service options</span>
              <h2 className="text-3xl font-semibold text-white">
                Choose the level of support you need
              </h2>
              <p className="mx-auto max-w-2xl text-base text-slate-300">
                Go all-in on the flagship “CV + 25 matches” sprint or keep us on
                retainer for ongoing sourcing. Each option keeps the current
                layout but adjusts the level of support.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {pricing.map((plan) => (
                <article
                  key={plan.name}
                  className={`rounded-3xl border p-6 ${
                    plan.featured
                      ? "border-primary-400/60 bg-primary-500/10 shadow-[0_25px_60px_rgba(14,165,233,0.25)]"
                      : "border-white/10 bg-white/5"
                  }`}
                >
                  <div className="flex items-baseline justify-between">
                    <div>
                      <h3 className="text-2xl font-semibold text-white">
                        {plan.name}
                      </h3>
                      <p className="text-sm text-slate-200">{plan.idealFor}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-3xl font-semibold text-white">
                        {plan.price}
                      </p>
                      <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                        {plan.cadence}
                      </p>
                    </div>
                  </div>
                  <ul className="mt-6 space-y-3 text-sm text-slate-200">
                    {plan.perks.map((perk) => (
                      <li key={perk} className="flex items-start gap-3">
                        <span className="mt-1 h-2.5 w-2.5 rounded-full bg-primary-400" />
                        {perk}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={leadFormUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-4 py-3 text-sm font-semibold ${
                      plan.featured
                        ? "bg-primary-500 text-white shadow-lg shadow-primary-400/40"
                        : "border border-white/20 text-white hover:border-primary-200"
                    }`}
                  >
                    Start with {plan.name}
                  </a>
                </article>
              ))}
            </div>
          </section>

          <section
            className="space-y-8 rounded-[32px] border border-white/10 bg-slate-950/70 p-10 shadow-[0_25px_80px_rgba(2,6,23,0.7)]"
            id="faq"
          >
            <div className="flex flex-col gap-3 text-center">
              <span className="section-title">FAQ</span>
              <h2 className="text-3xl font-semibold text-white">
                Frequently asked questions
              </h2>
              <p className="mx-auto max-w-3xl text-base text-slate-300">
                Everything clients ask before booking the CV refresh plus 25 job
                match bundle—covered in one place.
              </p>
            </div>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="rounded-3xl border border-white/10 bg-white/5 px-6 py-4 text-slate-100"
                >
                  <summary className="cursor-pointer text-base font-semibold text-white">
                    {faq.question}
                  </summary>
                  <p className="mt-2 text-sm text-slate-300">{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>
        </div>
      </main>
      <footer className="border-t border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="flex w-full flex-col gap-6 px-6 py-10 text-slate-300 sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-16">
          <a href="#top" className="flex items-center">
            <Image
              src="/images/matchyourskills_logo.png"
              width={180}
              height={54}
              alt="Match Your Skills logo"
              className="h-12 w-auto object-contain"
            />
          </a>
          <div className="flex flex-col gap-2 text-sm sm:text-right">
            <div className="flex flex-wrap gap-4 sm:justify-end">
              <a href="#how-it-works" className="hover:text-primary-300">
                Process
              </a>
              <a href="#pricing" className="hover:text-primary-300">
                Plans
              </a>
              <a
                href={leadFormUrl}
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary-300"
              >
                Contact
              </a>
            </div>
            <p className="text-xs text-slate-400">
              © {currentYear} MatchYourSkills. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

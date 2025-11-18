"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";

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

const benefits = [
  {
    label: "Save time & avoid guesswork",
    copy: "We do the LinkedIn sweep for you and discard noise so you only see roles that match your skills, level, and location filters.",
  },
  {
    label: "Increase interview invites",
    copy: "A professionally refined CV highlights measurable wins and speaks the language recruiters search for.",
  },
  {
    label: "Fast delivery window",
    copy: "Receive your refreshed CV plus 25 active job opportunities within 24–72 hours once payment is confirmed.",
  },
];

const faqs = [
  {
    question: "How do you find the 25 job matches?",
    answer:
      "We monitor public LinkedIn listings and filter by your target role, seniority, preferred markets, and hiring signals such as recent recruiter activity.",
  },
  {
    question: "How long until I receive everything?",
    answer:
      "Delivery happens within 24–72 hours after you confirm payment and reply to the confirmation email so we know to begin processing.",
  },
  {
    question: "What if my CV needs a full rewrite?",
    answer:
      "If the document needs deeper surgery, we’ll flag it during review, share recommendations, and outline any extra scope before proceeding.",
  },
  {
    question: "Is payment required before you start?",
    answer:
      "We review first to ensure fit. Once we green-light the request you’ll get a Paystack link. Work begins only after payment confirmation.",
  },
  {
    question: "Do you share or sell my data?",
    answer:
      "No. Your data is used strictly for the CV review, job matching, payment processing, and necessary service updates.",
  },
  {
    question: "How do I request deletion?",
    answer:
      "Email support@jobsearchpro.example with the subject “Delete my data” and we’ll erase your submission from our systems.",
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
  const [status, setStatus] = useState<"idle" | "sent">("idle");
  const currentYear = new Date().getFullYear();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sent");
    event.currentTarget.reset();
    setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-white">
      <header
        id="top"
        className="border-b border-white/70 bg-white/80 backdrop-blur-lg"
      >
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-5 sm:px-0">
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
          <nav className="hidden items-center gap-6 text-sm font-semibold text-slate-600 sm:flex">
            <a
              href="#how-it-works"
              className="transition hover:text-primary-600"
            >
              How it works
            </a>
            <a href="#pricing" className="transition hover:text-primary-600">
              Pricing
            </a>
            <a
              href="#intake-form"
              className="rounded-full bg-primary-600 px-4 py-2 text-white shadow-lg shadow-primary-600/20 transition hover:bg-primary-500"
            >
              Get started
            </a>
          </nav>
        </div>
      </header>
      <main className="min-h-screen">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-20 px-2 py-16 sm:px-0">
          <section className="grid gap-8 rounded-[32px] border border-white/60 bg-white/90 p-10 shadow-card backdrop-blur-xl sm:grid-cols-[1.2fr_0.8fr] ">
            <div className="flex flex-col gap-5">
              <h1 className="text-4xl font-semibold  text-slate-900 sm:text-5xl">
                GET MATCHED WITH THE RIGHT JOBS FAST.
              </h1>
              <p className="text-lg text-slate-600 my-5">
                Stop spraying random applications. We professionally refine your
                CV and deliver{" "}
                <strong className="font-semibold text-slate-900">
                  25 handpicked LinkedIn roles
                </strong>{" "}
                that align with your goals within{" "}
                <strong className="font-semibold text-slate-900">
                  24–72 hours
                </strong>{" "}
                after payment confirmation.
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-slate-500">
                <div className="rounded-full border border-slate-200 px-4 py-2">
                  Recruiter-ready CV polish
                </div>
                <div className="rounded-full border border-slate-200 px-4 py-2">
                  25 LinkedIn matches
                </div>
                <div className="rounded-full border border-slate-200 px-4 py-2">
                  Delivery in 24–72 hours
                </div>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="#intake-form"
                  className="rounded-full bg-primary-600 px-6 py-3 text-center text-base font-semibold text-white shadow-lg shadow-primary-600/30 transition hover:bg-primary-500"
                >
                  Get started
                </a>
                <a
                  className="rounded-full border border-slate-200 px-6 py-3 text-center text-base font-semibold text-slate-900 hover:border-slate-300"
                  href="#faq"
                >
                  Read the FAQ
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-6 rounded-3xl border border-slate-100 bg-slate-50/60 p-7">
              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-500">
                  What you receive
                </p>
                <ul className="mt-4 space-y-3 text-sm text-slate-600">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-primary-500" />
                    Professional CV review & enhancement (PDF + DOC)
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-400" />
                    Curated list of 25 active LinkedIn roles with context
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-amber-400" />
                    Email support plus follow-up guidance on intros
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="space-y-10" id="benefits">
            <div className="flex flex-col gap-3 text-center">
              <span className="section-title">Why people book</span>
              <h2 className="text-3xl font-semibold text-slate-900">
                Save time, boost replies, ship deliverables fast
              </h2>
              <p className="mx-auto max-w-3xl text-base text-slate-600">
                Less time chasing listings, more recruiters replying, and a
                delivery window measured in days once you’re approved.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {benefits.map((benefit) => (
                <article
                  key={benefit.label}
                  className="flex flex-col gap-3 rounded-3xl border border-slate-100 bg-white p-6 text-left shadow-sm"
                >
                  <p className="text-xl font-semibold text-slate-900">
                    {benefit.label}
                  </p>
                  <p className="text-sm text-slate-600">{benefit.copy}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="space-y-10" id="how-it-works">
            <div className="flex flex-col gap-3 text-center">
              <span className="section-title">How it works</span>
              <h2 className="text-3xl font-semibold text-slate-900">
                From intake to delivery in 4 steps
              </h2>
              <p className="mx-auto max-w-3xl text-base text-slate-600">
                Every stage mirrors the brief from your boss: we validate your
                CV, confirm payment, enhance your document, and deliver 25
                targeted LinkedIn roles—complete with why each one is a match.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {steps.map((step) => (
                <article
                  key={step.title}
                  className="flex flex-col gap-4 rounded-3xl border border-slate-100 bg-white p-6 shadow-sm"
                >
                  <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                    {step.badge}
                  </span>
                  <h3 className="text-xl font-semibold text-slate-900">
                    {step.title}
                  </h3>
                  <p className="text-lg text-slate-700">{step.headline}</p>
                  <p className="text-sm text-slate-500">{step.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="space-y-10" id="pricing">
            <div className="flex flex-col gap-3 text-center">
              <span className="section-title">Service options</span>
              <h2 className="text-3xl font-semibold text-slate-900">
                Choose the level of support you need
              </h2>
              <p className="mx-auto max-w-2xl text-base text-slate-600">
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
                      ? "border-primary-500 bg-primary-50 shadow-card"
                      : "border-slate-100 bg-white"
                  }`}
                >
                  <div className="flex items-baseline justify-between">
                    <div>
                      <h3 className="text-2xl font-semibold text-slate-900">
                        {plan.name}
                      </h3>
                      <p className="text-sm text-slate-500">{plan.idealFor}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-3xl font-semibold text-slate-900">
                        {plan.price}
                      </p>
                      <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                        {plan.cadence}
                      </p>
                    </div>
                  </div>
                  <ul className="mt-6 space-y-3 text-sm text-slate-600">
                    {plan.perks.map((perk) => (
                      <li key={perk} className="flex items-start gap-3">
                        <span className="mt-1 h-2.5 w-2.5 rounded-full bg-primary-500" />
                        {perk}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#intake-form"
                    className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-4 py-3 text-sm font-semibold ${
                      plan.featured
                        ? "bg-primary-600 text-white shadow-lg shadow-primary-600/40"
                        : "border border-slate-200 text-slate-900 hover:border-primary-200"
                    }`}
                  >
                    Start with {plan.name}
                  </a>
                </article>
              ))}
            </div>
          </section>

          <section
            id="intake-form"
            className="grid gap-8 rounded-[32px] border border-slate-100 bg-white p-10 shadow-card lg:grid-cols-[1.1fr_0.9fr]"
          >
            <div className="flex flex-col gap-4">
              <span className="section-title">Start your match</span>
              <h2 className="text-3xl font-semibold text-slate-900">
                Tell us where to focus the search.
              </h2>
              <p className="text-base text-slate-600">
                Drop your target role, locations, CV link, and any guardrails.
                We’ll review within one business day, confirm we can help, and
                send the Paystack link. Delivery of your refreshed CV + 25 job
                matches lands within 24–72 hours after payment.
              </p>
              <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50/60 p-4 text-sm text-slate-600">
                <p className="font-semibold text-slate-900">
                  What happens next?
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>We audit your CV and send a readiness checklist.</li>
                  <li>Automation queue spins up and sources roles.</li>
                  <li>
                    You receive your first matched batch + tailored CV pack.
                  </li>
                </ul>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="flex flex-col gap-2 text-sm font-semibold text-slate-700">
                  Full name
                  <input
                    required
                    type="text"
                    name="name"
                    className="rounded-2xl border border-slate-200 px-4 py-3 text-base font-normal text-slate-900 focus:border-primary-400 focus:outline-none"
                    placeholder="e.g. Dara Ajayi"
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm font-semibold text-slate-700">
                  Email
                  <input
                    required
                    type="email"
                    name="email"
                    className="rounded-2xl border border-slate-200 px-4 py-3 text-base text-slate-900 focus:border-primary-400 focus:outline-none"
                    placeholder="you@email.com"
                  />
                </label>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="flex flex-col gap-2 text-sm font-semibold text-slate-700">
                  LinkedIn or portfolio
                  <input
                    required
                    name="portfolio"
                    className="rounded-2xl border border-slate-200 px-4 py-3 text-base text-slate-900 focus:border-primary-400 focus:outline-none"
                    placeholder="https://"
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm font-semibold text-slate-700">
                  CV link (Google Drive, Notion, etc.)
                  <input
                    required
                    name="cvLink"
                    className="rounded-2xl border border-slate-200 px-4 py-3 text-base text-slate-900 focus:border-primary-400 focus:outline-none"
                    placeholder="https://"
                  />
                </label>
              </div>
              <label className="flex flex-col gap-2 text-sm font-semibold text-slate-700">
                Target role & seniority
                <input
                  required
                  name="role"
                  className="rounded-2xl border border-slate-200 px-4 py-3 text-base text-slate-900 focus:border-primary-400 focus:outline-none"
                  placeholder="Product Manager, Lead level"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm font-semibold text-slate-700">
                Ideal locations or remote preference
                <input
                  name="location"
                  className="rounded-2xl border border-slate-200 px-4 py-3 text-base text-slate-900 focus:border-primary-400 focus:outline-none"
                  placeholder="Lagos, London, Remote-first"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm font-semibold text-slate-700">
                Anything else we should know?
                <textarea
                  name="notes"
                  rows={4}
                  className="rounded-2xl border border-slate-200 px-4 py-3 text-base text-slate-900 focus:border-primary-400 focus:outline-none"
                  placeholder="Salary guardrails, timeline, companies you love, etc."
                />
              </label>
              <label className="flex items-start gap-3 rounded-2xl border border-slate-200 p-4 text-sm font-semibold text-slate-700">
                <input
                  required
                  type="checkbox"
                  name="consent"
                  className="mt-1 h-4 w-4 rounded border-slate-300 accent-primary-600"
                />
                <span className="font-normal text-slate-600">
                  I consent to MatchYourSkills storing and using my information
                  to review my CV, match LinkedIn opportunities, process
                  payments, and contact me about this service. I understand I
                  can request deletion at any time.
                </span>
              </label>
              <button
                type="submit"
                className="w-full rounded-full bg-primary-600 py-3 text-base font-semibold text-white shadow-lg shadow-primary-600/30 transition hover:bg-primary-500"
              >
                Send my information
              </button>
              {status === "sent" && (
                <p className="text-center text-sm font-semibold text-emerald-600">
                  Thanks! We received your details. Watch your inbox for the
                  review confirmation + secure payment link.
                </p>
              )}
              <p className="text-center text-xs text-slate-500">
                Need clarifications first?{" "}
                <a className="font-semibold text-primary-600" href="#faq">
                  Read the FAQ
                </a>
                .
              </p>
            </form>
          </section>

          <section
            className="space-y-8 rounded-[32px] border border-slate-100 bg-white p-10 shadow-card"
            id="faq"
          >
            <div className="flex flex-col gap-3 text-center">
              <span className="section-title">FAQ</span>
              <h2 className="text-3xl font-semibold text-slate-900">
                Frequently asked questions
              </h2>
              <p className="mx-auto max-w-3xl text-base text-slate-600">
                Everything clients ask before booking the CV refresh plus 25 job
                match bundle—covered in one place.
              </p>
            </div>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="rounded-3xl border border-slate-100 bg-slate-50/60 px-6 py-4"
                >
                  <summary className="cursor-pointer text-base font-semibold text-slate-900">
                    {faq.question}
                  </summary>
                  <p className="mt-2 text-sm text-slate-600">{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>
        </div>
      </main>
      <footer className="border-t border-white/70 bg-white/80 backdrop-blur-lg">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-0">
          <a href="#top" className="flex items-center">
            <Image
              src="/images/matchyourskills_logo.png"
              width={180}
              height={54}
              alt="Match Your Skills logo"
              className="h-12 w-auto object-contain"
            />
          </a>
          <div className="flex flex-col gap-2 text-sm text-slate-600 sm:text-right">
            <div className="flex flex-wrap gap-4 sm:justify-end">
              <a href="#how-it-works" className="hover:text-primary-600">
                Process
              </a>
              <a href="#pricing" className="hover:text-primary-600">
                Plans
              </a>
              <a
                href="#intake-form"
                className="hover:text-primary-600"
              >
                Contact
              </a>
            </div>
            <p className="text-xs text-slate-500">
              © {currentYear} MatchYourSkills. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

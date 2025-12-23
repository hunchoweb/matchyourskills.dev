"use client";

import Image from "next/image";
import { useState } from "react";
import { HeroSection } from "@/components/HeroSection";
import { ShimmerButton } from "@/components/ShimmerButton";

const steps = [
  {
    title: "Submit Your CV",
    headline: "Upload your CV through our secure form.",
    description:
      "Tell us the job role you’re targeting, and our team will begin the initial review immediately.",
    badge: "Step 01",
  },
  {
    title: "We Review & Confirm",
    headline:
      "Our experts assess your CV and match it to your desired job role.",
    description:
      "If it’s fit to proceed, we’ll contact you with the next steps and timelines.",
    badge: "Step 02",
  },
  {
    title: "Make Payment & Receive Results",
    headline:
      "Once payment is completed, we finalize your CV and deliver curated opportunities.",
    description:
      "Expect 25 fresh, relevant job matches tailored to your profile within 24–72 hours.",
    badge: "Step 03",
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

const privacyHighlights = [
  {
    title: "Why we collect data",
    body: "We only gather the details you submit when requesting the CV refresh or job match service. This lets us review your experience, tailor sourcing, and send deliverables.",
  },
  {
    title: "How we use it",
    body: "Your CV, contact info, and role preferences help us refine your document and build the 25-job shortlist. We never sell or share this information with third parties.",
  },
  {
    title: "Storage & retention",
    body: "Files stay in encrypted cloud storage with access restricted to core team members. We keep your data for up to 90 days to support revisions, then purge it automatically.",
  },
  {
    title: "Your control",
    body: "Want updates deleted sooner or need a copy of what we hold? Email support@matchyourskills.dev and we’ll respond within two business days.",
  },
];

export default function HomePage() {
  const [activeModal, setActiveModal] = useState<"privacy" | "contact" | null>(
    null
  );

  const currentYear = new Date().getFullYear();
  const leadFormUrl =
    "https://dafwaysystems.app.n8n.cloud/form/a921a37b-377c-4870-b900-66bcb6006815";
  const supportEmail = "dafwaysystems@gmail.com";

  const closeModal = () => {
    setActiveModal(null);
  };

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
            <div className="relative h-10 w-32 sm:h-12 sm:w-44">
              <Image
                src="/images/logo_white.png"
                alt="Match Your Skills logo"
                priority
                fill
                className="object-contain"
                sizes="(max-width: 640px) 8rem, 11rem"
              />
            </div>
          </a>
          <nav className="hidden items-center gap-6 text-sm font-semibold text-slate-200 sm:flex">
            <a
              href="#how-it-works"
              className="transition hover:text-primary-300"
            >
              How it works
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
            title="MatchMySkills.Dev"
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
              Land More Interview with 25+ Customized CVs for Each Job Posting
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
                From intake to delivery in 3 steps
              </h2>
              <p className="mx-auto max-w-3xl text-base text-slate-300">
                Every stage mirrors the brief from your boss: we validate your
                CV, confirm payment, enhance your document, and deliver 25
                targeted LinkedIn roles, complete with why each one is a match.
              </p>
            </div>
            <div className="grid gap-12 md:grid-cols-3">
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
                  {/* <p className="text-lg text-slate-200">{step.headline}</p> */}
                  <p className="text-sm text-slate-300">{step.description}</p>
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
            <div className="relative h-10 w-32 sm:h-12 sm:w-44">
              <Image
                src="/images/logo_white.png"
                alt="Match Your Skills logo"
                fill
                className="object-contain"
                sizes="(max-width: 640px) 8rem, 11rem"
              />
            </div>
          </a>
          <div className="flex flex-col gap-2 text-sm sm:text-right">
            <div className="flex flex-wrap gap-4 sm:justify-end">
              <button
                type="button"
                onClick={() => setActiveModal("privacy")}
                className="hover:text-primary-300"
              >
                Privacy
              </button>
              <button
                type="button"
                onClick={() => setActiveModal("contact")}
                className="hover:text-primary-300"
              >
                Contact
              </button>
            </div>
            <p className="text-xs text-slate-400">
              © {currentYear} MatchYourSkills. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
      {activeModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-8"
          role="dialog"
          aria-modal="true"
          onClick={closeModal}
        >
          <div
            className="w-full max-w-2xl rounded-[32px] border border-white/10 bg-slate-950/90 p-8 shadow-[0_25px_80px_rgba(2,6,23,0.8)]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-6">
              <div>
                <span className="section-title">
                  {activeModal === "privacy" ? "Privacy" : "Contact"}
                </span>
                <h3 className="mt-2 text-3xl font-semibold text-white">
                  {activeModal === "privacy"
                    ? "How we protect your data"
                    : "Contact MatchYourSkills"}
                </h3>
              </div>
              <button
                type="button"
                onClick={closeModal}
                className="rounded-full border border-white/20 px-3 py-1 text-sm text-slate-300 hover:border-primary-300 hover:text-white"
                aria-label="Close modal"
              >
                Close
              </button>
            </div>
            {activeModal === "privacy" ? (
              <div className="mt-6 space-y-4 text-sm text-slate-300">
                {privacyHighlights.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4"
                  >
                    <h4 className="text-base font-semibold text-white">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-slate-300">{item.body}</p>
                  </article>
                ))}
              </div>
            ) : (
              <div className="mt-6 space-y-4 text-center">
                <a
                  href={`mailto:${supportEmail}`}
                  className="block rounded-2xl border border-primary-400/30 bg-primary-500/5 px-6 py-4 text-xl font-semibold text-white shadow-[0_10px_40px_rgba(14,165,233,0.25)] hover:border-primary-300"
                >
                  {supportEmail}
                </a>
              </div>
            )}
          </div>
        </div>
      )}
      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/2348064579783"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_40px_rgba(37,211,102,0.4)] transition-all duration-300 hover:scale-110 hover:shadow-[0_15px_60px_rgba(37,211,102,0.6)] active:scale-95 group animate-in fade-in slide-in-from-bottom-10"
        aria-label="Chat on WhatsApp"
      >
        <svg
          className="h-9 w-9"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
        {/* Tooltip */}
        <div className="absolute right-full mr-5 hidden group-hover:block pointer-events-none">
          <div className="relative rounded-xl bg-slate-900/90 px-4 py-2 text-sm font-semibold text-white shadow-2xl backdrop-blur-md border border-white/10 whitespace-nowrap animate-in fade-in zoom-in-95 duration-200">
            Chat with us
            <div className="absolute -right-1 top-1/2 -translate-y-1/2 border-y-[6px] border-y-transparent border-l-[6px] border-l-slate-900/90" />
          </div>
        </div>
      </a>
    </div>
  );
}

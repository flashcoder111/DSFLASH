import type { Metadata } from "next";
import Link from "next/link";
import { Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact DSFlashHub",
  description:
    "Report a pricing error, suggest a correction, or ask about DSFlashHub content. We answer email within a few business days.",
  alternates: {
    canonical: "/contact"
  }
};

export default function ContactPage() {
  return (
    <>
      <section className="market-grid border-b border-white/10 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="inline-flex items-center gap-2 rounded-lg border border-cyan-300/30 bg-cyan-300/10 px-3 py-2 text-xs font-bold uppercase tracking-[0.14em] text-cyan-100">
            <Mail className="h-4 w-4" />
            Contact
          </p>
          <h1 className="mt-6 max-w-4xl text-4xl font-semibold text-white sm:text-6xl">
            Contact DSFlashHub
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-400">
            The fastest way to reach us is email. Pricing corrections get
            priority.
          </p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-lg border border-white/10 bg-[#0d141c] p-6">
            <h2 className="text-xl font-semibold text-white">Email</h2>
            <p className="mt-3 text-sm leading-7 text-slate-400">
              For corrections, questions, or feedback:
            </p>
            <a
              href="mailto:hello@deepseekv4flash.com"
              className="mt-3 inline-flex items-center gap-2 text-lg font-semibold text-cyan-200"
            >
              <Mail className="h-5 w-5" />
              hello@deepseekv4flash.com
            </a>
            <p className="mt-4 text-sm leading-7 text-slate-400">
              We usually reply within a few business days. If you are reporting
              a wrong number, include the page URL and a link to the source you
              checked against — that lets us verify and fix it in one pass.
            </p>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-white/10 bg-[#0d141c] p-5">
              <h2 className="text-base font-semibold text-white">
                Found a pricing error?
              </h2>
              <p className="mt-2 text-sm leading-7 text-slate-400">
                Tell us which page, which number, and what the official source
                says. Corrections are published as dated news items.
              </p>
            </div>
            <div className="rounded-lg border border-white/10 bg-[#0d141c] p-5">
              <h2 className="text-base font-semibold text-white">
                Want a topic covered?
              </h2>
              <p className="mt-2 text-sm leading-7 text-slate-400">
                Suggest a guide or comparison you need. Setup and migration
                topics with a clear deadline get scheduled first.
              </p>
            </div>
          </div>

          <p className="mt-8 text-sm leading-7 text-slate-400">
            Note: DSFlashHub is an independent site. We cannot help with
            DeepSeek account issues, API key problems, or billing disputes —
            for those, contact DeepSeek through their official channels. See
            our{" "}
            <Link href="/about" className="font-semibold text-cyan-200">
              About page
            </Link>{" "}
            for the full independence disclosure.
          </p>
        </div>
      </section>
    </>
  );
}

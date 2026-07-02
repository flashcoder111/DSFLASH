import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "DeepSeek V4 Flash vs GPT-5.4: Price & Task Comparison",
  description:
    "Flash costs $0.14/$0.28 per 1M tokens vs GPT-5.4's $2.50/$15 — an 18–54× gap. Where the cheap model holds up, and the three cases where GPT earns its price.",
  alternates: {
    canonical: "/compare/deepseek-v4-flash-vs-gpt-5-4"
  }
};

const priceRows = [
  {
    metric: "Input / 1M tokens",
    flash: "$0.14",
    gpt: "$2.50",
    gap: "18× cheaper"
  },
  {
    metric: "Cached input / 1M",
    flash: "$0.028",
    gpt: "$0.25",
    gap: "9× cheaper"
  },
  {
    metric: "Output / 1M tokens",
    flash: "$0.28",
    gpt: "$15",
    gap: "54× cheaper"
  },
  {
    metric: "Context window",
    flash: "1M tokens",
    gpt: "Short / long tiers",
    gap: "Flash: single tier"
  },
  {
    metric: "Open weights",
    flash: "Yes (MIT)",
    gpt: "No",
    gap: "Flash self-hostable"
  }
];

const faqs = [
  {
    q: "Is DeepSeek V4 Flash really 50× cheaper than GPT-5.4?",
    a: "On output tokens, yes: $0.28 vs $15 per 1M is a 54× gap at official rates. On input it's 18× ($0.14 vs $2.50). Blended cost depends on your input/output ratio — for typical chat traffic with 4:1 input:output, Flash lands roughly 25–30× cheaper per request."
  },
  {
    q: "When should I pay for GPT-5.4 instead?",
    a: "Three cases: when a customer contractually requires GPT output, when your task sits at the frontier of reasoning difficulty and Flash's pass rate measurably drops, and when you depend on OpenAI-ecosystem features that have no DeepSeek equivalent. Otherwise the price gap is hard to argue with for routine traffic."
  },
  {
    q: "Can I use both in one system?",
    a: "That's the pattern we'd recommend: route routine traffic to Flash, and add a GPT-5.4 (or Claude) audit lane that samples a small percentage of outputs to catch quality drift. You keep frontier-model quality control at a few percent of frontier-model cost."
  },
  {
    q: "Do the same prompts work on both?",
    a: "Both speak the OpenAI API format, so code-level compatibility is trivial. Prompt-level behavior differs — Flash defaults to non-thinking mode, so prompts relying on implicit deliberation may need Flash's thinking mode enabled, which affects latency and token counts."
  }
];

export default function FlashVsGptPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "DeepSeek V4 Flash vs GPT-5.4",
        description:
          "Price and task comparison between DeepSeek V4 Flash and OpenAI GPT-5.4.",
        datePublished: "2026-07-02",
        dateModified: "2026-07-02",
        url: `${siteConfig.url}/compare/deepseek-v4-flash-vs-gpt-5-4`,
        author: {
          "@type": "Organization",
          name: siteConfig.name,
          url: siteConfig.url
        }
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a }
        }))
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="market-grid border-b border-white/10 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/compare"
            className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-200"
          >
            <ArrowLeft className="h-4 w-4" />
            All comparisons
          </Link>
          <h1 className="mt-6 text-3xl font-semibold text-white sm:text-5xl">
            DeepSeek V4 Flash vs GPT-5.4: is 54× cheaper output good enough?
          </h1>
          <p className="mt-5 text-base leading-8 text-slate-400">
            The verdict first: for high-volume, mid-difficulty work — agent
            turns, summarization, retrieval answers, batch code fixes — Flash
            wins on economics and the quality gap rarely justifies the premium.
            GPT-5.4 earns its price on frontier reasoning, customer
            requirements, and ecosystem lock-in. Here are the numbers behind
            that.
          </p>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-semibold text-white">
            The price table
          </h2>
          <div className="mt-6 overflow-x-auto rounded-lg border border-white/10">
            <table className="w-full min-w-[560px] text-left text-sm">
              <thead className="bg-white/[0.04] text-xs uppercase tracking-wider text-slate-300">
                <tr>
                  <th className="px-4 py-3">Metric</th>
                  <th className="px-4 py-3">V4 Flash</th>
                  <th className="px-4 py-3">GPT-5.4</th>
                  <th className="px-4 py-3">Gap</th>
                </tr>
              </thead>
              <tbody>
                {priceRows.map((row) => (
                  <tr
                    key={row.metric}
                    className="border-t border-white/10 text-slate-300"
                  >
                    <td className="px-4 py-3 font-medium text-white">
                      {row.metric}
                    </td>
                    <td className="px-4 py-3 text-cyan-100">{row.flash}</td>
                    <td className="px-4 py-3">{row.gpt}</td>
                    <td className="px-4 py-3">{row.gap}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm leading-7 text-slate-400">
            Official list prices as of 2026-07-02. GPT-5.4 uses prompt-length
            pricing tiers; the figures above are the standard tier.
          </p>

          <h2 className="mt-12 text-2xl font-semibold text-white">
            What does the 54× gap buy you in practice?
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-300">
            Translate it to workload terms. A support-bot handling one million
            conversations a month (2K input, 500 output tokens each) costs
            roughly $420 on Flash and about $12,500 on GPT-5.4. That
            difference funds an engineer. The honest question is not
            &quot;which model is better&quot; — GPT-5.4 is the stronger model —
            but &quot;is it 30× better on your task&quot;, and for routine
            traffic the measured answer is usually no.
          </p>
          <p className="mt-4 text-base leading-8 text-slate-300">
            Where the gap narrows: multi-step reasoning chains, subtle
            instruction-following under long context, and tasks where one bad
            output is expensive. There, GPT-5.4&apos;s higher per-task pass
            rate can beat Flash&apos;s lower per-token price, because failed
            tasks cost retries, review time, or customers.
          </p>

          <h2 className="mt-12 text-2xl font-semibold text-white">
            The routing pattern that uses both
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-300">
            Default to Flash; sample-audit with GPT. Send routine traffic to
            deepseek-v4-flash, and route a small random sample of outputs (1–5%)
            through GPT-5.4 for automated comparison. Escalate task categories
            where the audit shows a persistent quality gap. This is the same
            escalation logic we describe for{" "}
            <Link href="/flash-vs-pro" className="font-semibold text-cyan-200">
              Flash vs Pro
            </Link>{" "}
            — Pro is simply the cheaper first stop on the escalation ladder.
          </p>

          <h2 className="mt-12 text-2xl font-semibold text-white">
            Frequently asked questions
          </h2>
          <div className="mt-6 grid gap-4">
            {faqs.map((faq) => (
              <article
                key={faq.q}
                className="rounded-lg border border-white/10 bg-[#0d141c] p-5"
              >
                <h3 className="text-lg font-semibold text-white">{faq.q}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {faq.a}
                </p>
              </article>
            ))}
          </div>

          <p className="mt-10 text-xs text-slate-500">
            Last verified: 2026-07-02 against official DeepSeek and OpenAI
            pricing pages. Example workload costs are arithmetic from list
            prices, not measured bills.
          </p>
        </div>
      </section>
    </>
  );
}

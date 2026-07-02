import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "DeepSeek V4 Flash vs Claude: Sonnet & Opus Compared",
  description:
    "Flash at $0.14/$0.28 vs Claude Sonnet at $3/$15 and Opus at $5/$25 per 1M tokens. The cost-vs-review-quality split, and a practical routing rule for using both.",
  alternates: {
    canonical: "/compare/deepseek-v4-flash-vs-claude"
  }
};

const priceRows = [
  {
    metric: "Input / 1M tokens",
    flash: "$0.14",
    sonnet: "$3",
    opus: "$5"
  },
  {
    metric: "Cached input / 1M",
    flash: "$0.028",
    sonnet: "$0.30",
    opus: "$0.50"
  },
  {
    metric: "Output / 1M tokens",
    flash: "$0.28",
    sonnet: "$15",
    opus: "$25"
  },
  {
    metric: "Context window",
    flash: "1M tokens",
    sonnet: "1M tokens",
    opus: "1M tokens"
  },
  {
    metric: "Open weights",
    flash: "Yes (MIT)",
    sonnet: "No",
    opus: "No"
  }
];

const faqs = [
  {
    q: "How much cheaper is V4 Flash than Claude?",
    a: "Against Sonnet 4.6: 21× cheaper on input ($0.14 vs $3) and 54× on output ($0.28 vs $15). Against Opus: 36× on input and 89× on output. All figures are official list prices per 1M tokens as of July 2026."
  },
  {
    q: "What is Claude actually better at?",
    a: "Anthropic's models have a strong reputation in code review, long-document analysis, nuanced writing, and agentic coding workflows. If your workload is 'review this PR for subtle bugs' or 'analyze this 200-page contract', Claude's per-task quality often justifies the premium. If it's 'summarize these 10,000 tickets', it usually doesn't."
  },
  {
    q: "Can Flash replace Claude in an agent stack like OpenClaw?",
    a: "For routine agent turns — planning, tool narration, summaries — yes, and that swap is exactly where Flash's economics shine. For the agent's hardest steps (self-review, high-risk code changes), keeping a Claude escalation route is the conservative pattern. Our OpenClaw guide shows the split configuration."
  },
  {
    q: "Which should a solo developer pick?",
    a: "If budget dominates, start with Flash — at $0.42 per million tokens in+out, experimentation is effectively free, and you can add a premium model later for the tasks where you measure Flash falling short. Starting expensive and optimizing later is the harder direction."
  }
];

export default function FlashVsClaudePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "DeepSeek V4 Flash vs Claude Sonnet and Opus",
        description:
          "Price and task comparison between DeepSeek V4 Flash and Anthropic's Claude Sonnet 4.6 and Opus 4.7.",
        datePublished: "2026-07-02",
        dateModified: "2026-07-02",
        url: `${siteConfig.url}/compare/deepseek-v4-flash-vs-claude`,
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
            DeepSeek V4 Flash vs Claude: volume work vs review work
          </h1>
          <p className="mt-5 text-base leading-8 text-slate-400">
            The verdict first: these two rarely compete for the same request.
            Flash is built to make high-volume traffic nearly free; Claude
            (Sonnet 4.6 and Opus 4.7) is built for work where one careful
            answer is worth dollars, not fractions of a cent. The interesting
            question is where to draw the line in a system that uses both.
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
                  <th className="px-4 py-3">Claude Sonnet 4.6</th>
                  <th className="px-4 py-3">Claude Opus 4.7</th>
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
                    <td className="px-4 py-3">{row.sonnet}</td>
                    <td className="px-4 py-3">{row.opus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm leading-7 text-slate-400">
            Official list prices as of 2026-07-02, per 1M tokens.
          </p>

          <h2 className="mt-12 text-2xl font-semibold text-white">
            Where does each model earn its price?
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-300">
            Flash&apos;s territory is anything you do thousands of times:
            retrieval answers, ticket summarization, batch code explanation,
            agent tool-call narration, translation passes. At $0.28/M output,
            the cost of an individual request rounds to zero, which changes
            what you can afford to build — features like &quot;summarize every
            thread automatically&quot; stop being budget questions.
          </p>
          <p className="mt-4 text-base leading-8 text-slate-300">
            Claude&apos;s territory is judgment work. Code review that catches
            the subtle race condition, contract analysis, editing that
            preserves an author&apos;s voice, multi-hour agentic coding
            sessions. Anthropic prices Opus like a senior reviewer because
            teams use it as one. Sonnet at $3/$15 is the pragmatic middle —
            most Claude-quality work at 60% of the flagship&apos;s input
            price.
          </p>

          <h2 className="mt-12 text-2xl font-semibold text-white">
            A routing rule you can steal
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-300">
            Classify each task by the cost of a wrong answer. Under a cent
            (a bad summary gets regenerated): Flash. Worth minutes of human
            time (a misleading code explanation): Flash with a Pro or Sonnet
            audit sample. Worth hours or reputational damage (production code
            review, customer-facing analysis): Sonnet or Opus directly. In an
            OpenClaw stack, this maps to Flash as the default route with
            Claude as an explicit escalation lane — the full configuration is
            in our{" "}
            <Link
              href="/openclaw-deepseek-flash"
              className="font-semibold text-cyan-200"
            >
              OpenClaw integration guide
            </Link>
            .
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
            Last verified: 2026-07-02 against official DeepSeek and Anthropic
            pricing pages. Task-fit descriptions reflect vendor positioning and
            community consensus, not our own benchmark runs — those are coming
            to the benchmarks page.
          </p>
        </div>
      </section>
    </>
  );
}

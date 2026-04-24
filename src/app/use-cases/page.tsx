import type { Metadata } from "next";
import { Boxes, SearchCheck } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "DeepSeek V4 Flash Use Cases",
  description:
    "Use cases for DeepSeek V4 Flash across OpenClaw agents, search, retrieval, summarization, code assistance, and batch analysis.",
  alternates: {
    canonical: "/use-cases"
  }
};

const useCases = [
  {
    title: "OpenClaw agent turns",
    description:
      "Default routing for routine planning, tool narration, intermediate summaries, and user-facing agent responses."
  },
  {
    title: "Search and retrieval answers",
    description:
      "Low-cost generated answers over retrieved context where prompt cache design can repeat stable wrappers."
  },
  {
    title: "Batch summarization",
    description:
      "High-volume document, changelog, and feed summarization where output cost determines monthly budget."
  },
  {
    title: "Code explanation",
    description:
      "Routine code walkthroughs, test explanation, and patch summaries before escalating difficult failures to Pro."
  },
  {
    title: "Comparison articles",
    description:
      "DeepSeek-first pages that compare GPT, Claude, Gemini, and Grok only when the comparison strengthens the Flash story."
  },
  {
    title: "Migration checks",
    description:
      "Replace older generic DeepSeek aliases with explicit V4 Flash defaults and controlled Pro fallback."
  }
];

export default function UseCasesPage() {
  return (
    <>
      <section className="market-grid border-b border-white/10 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="inline-flex items-center gap-2 rounded-lg border border-cyan-300/30 bg-cyan-300/10 px-3 py-2 text-xs font-bold uppercase tracking-[0.14em] text-cyan-100">
            <Boxes className="h-4 w-4" />
            Use cases
          </p>
          <h1 className="mt-6 max-w-4xl text-4xl font-semibold text-white sm:text-6xl">
            DeepSeek V4 Flash use cases
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-400">
            A Flash-first site needs more than a pricing table. These use cases
            give crawlers and readers clear pages around production traffic,
            OpenClaw agents, and comparison content.
          </p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Workloads"
            title="Where Flash should appear first"
            description="Use these entries as the internal-link targets for comparison, pricing, and OpenClaw pages."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {useCases.map((item) => (
              <article
                key={item.title}
                className="rounded-lg border border-white/10 bg-[#0d141c] p-5"
              >
                <SearchCheck className="h-6 w-6 text-cyan-200" />
                <h2 className="mt-4 text-xl font-semibold text-white">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

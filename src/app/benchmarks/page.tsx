import type { Metadata } from "next";
import { ClipboardCheck, TestTube2 } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "DeepSeek V4 Flash Benchmark Checklist",
  description:
    "A practical benchmark checklist for comparing DeepSeek V4 Flash with V4 Pro, GPT, Claude, Gemini, and Grok on real workloads.",
  alternates: {
    canonical: "/benchmarks"
  }
};

const benchmarkRows = [
  {
    workload: "OpenClaw agent planning",
    primary: "V4 Flash",
    compareWith: "V4 Pro, GPT",
    measure: "Completion rate, retries, cost per solved task"
  },
  {
    workload: "Retrieval answer generation",
    primary: "V4 Flash",
    compareWith: "Claude, GPT",
    measure: "Citation accuracy, unsupported claims, cache-hit ratio"
  },
  {
    workload: "Code explanation batches",
    primary: "V4 Flash",
    compareWith: "V4 Pro, Claude",
    measure: "Developer acceptance, follow-up turns, token cost"
  },
  {
    workload: "Multimodal or Google workflow",
    primary: "Gemini",
    compareWith: "V4 Flash for text-only steps",
    measure: "Modality coverage, handoff cost, latency"
  },
  {
    workload: "Realtime xAI ecosystem work",
    primary: "Grok",
    compareWith: "V4 Flash for non-realtime tasks",
    measure: "Freshness need, tool result quality, routing overhead"
  }
];

const checklist = [
  "Benchmark the actual OpenClaw prompt stack, not a generic chat prompt.",
  "Track cache-hit ratio separately from raw input-token volume.",
  "Score retry cost and failed-turn cost, not only first-response price.",
  "Include a Pro escalation lane so Flash is tested as the default, not the only model.",
  "Record provider-specific strengths honestly — a benchmark that can't lose isn't a benchmark."
];

export default function BenchmarksPage() {
  return (
    <>
      <section className="market-grid border-b border-white/10 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="inline-flex items-center gap-2 rounded-lg border border-cyan-300/30 bg-cyan-300/10 px-3 py-2 text-xs font-bold uppercase tracking-[0.14em] text-cyan-100">
            <TestTube2 className="h-4 w-4" />
            Benchmarks
          </p>
          <h1 className="mt-6 max-w-4xl text-4xl font-semibold text-white sm:text-6xl">
            How to benchmark DeepSeek V4 Flash on your real workload
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-400">
            Public leaderboards won&apos;t tell you whether Flash survives
            your prompt stack. This checklist tests it under realistic agent
            and production traffic — measuring cost per completed task, not
            just tokens.
          </p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Evaluation matrix"
            title="What should each workload be tested against?"
            description="One row per workload: the model to test, the comparison reference, and the metric that decides."
          />
          <div className="mt-10 overflow-x-auto rounded-lg border border-white/10 bg-[#0d141c]">
            <table className="price-table min-w-[920px]">
              <thead>
                <tr>
                  <th>Workload</th>
                  <th>Primary model</th>
                  <th>Compare with</th>
                  <th>Measure</th>
                </tr>
              </thead>
              <tbody>
                {benchmarkRows.map((row) => (
                  <tr key={row.workload}>
                    <td className="font-semibold text-white">{row.workload}</td>
                    <td>{row.primary}</td>
                    <td>{row.compareWith}</td>
                    <td>{row.measure}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section-band px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Checklist"
            title="What to record"
            description="Cost is only one column. For OpenClaw and agent workflows, repeated prompts, retries, and escalations decide the real cost."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {checklist.map((item) => (
              <article
                key={item}
                className="rounded-lg border border-white/10 bg-[#0d141c] p-5"
              >
                <ClipboardCheck className="h-6 w-6 text-green-200" />
                <p className="mt-4 text-sm leading-7 text-slate-300">{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

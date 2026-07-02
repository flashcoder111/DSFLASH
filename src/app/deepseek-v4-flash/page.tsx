import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Gauge, ShieldCheck, Zap } from "lucide-react";
import PricingTable from "@/components/PricingTable";
import SectionHeading from "@/components/SectionHeading";
import {
  deepSeekSpecs,
  flashHighlights,
  pricingModels,
  routePlaybook
} from "@/lib/site-data";

export const metadata: Metadata = {
  title: "DeepSeek V4 Flash: $0.14/M Input, 1M Context — Specs",
  description:
    "V4 Flash specs and pricing: $0.14/M input ($0.028 cache-hit), $0.28/M output, 1M context, 284B/13B MoE. When Flash is enough — and when to escalate to Pro.",
  alternates: {
    canonical: "/deepseek-v4-flash"
  }
};

const flash = pricingModels.find((model) => model.model === "V4 Flash")!;

export default function DeepSeekV4FlashPage() {
  return (
    <>
      <section className="market-grid border-b border-white/10 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="inline-flex items-center gap-2 rounded-lg border border-cyan-300/30 bg-cyan-300/10 px-3 py-2 text-xs font-bold uppercase tracking-[0.14em] text-cyan-100">
            <Zap className="h-4 w-4" />
            Flash first
          </p>
          <h1 className="mt-6 max-w-4xl text-4xl font-semibold text-white sm:text-6xl">
            DeepSeek V4 Flash: $0.14/M input, 1M context — the full guide
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-400">
            V4 Flash is DeepSeek&apos;s volume model: $0.14/M input ($0.028 on
            cache hits), $0.28/M output, a 1M-token context window, and open
            MIT-licensed weights. Here are the specs, the routing rules, and
            the escalation triggers for when a task needs V4 Pro instead.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/openclaw-deepseek-flash"
              className="inline-flex items-center gap-2 rounded-lg bg-cyan-300 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-200"
            >
              OpenClaw adaptation
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/flash-vs-pro"
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10"
            >
              Flash vs Pro
              <Gauge className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Pricing"
            title="What does V4 Flash cost?"
            description="$0.14/M input, $0.028/M cache-hit input, $0.28/M output. The cache-hit rate is the number to engineer around: stable prompts cut repeated input cost 5×."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {flashHighlights.map((item) => (
              <article
                key={item.title}
                className="rounded-lg border border-white/10 bg-[#0d141c] p-5"
              >
                <ShieldCheck className="h-6 w-6 text-green-200" />
                <p className="mt-4 text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
                  {item.title}
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-white">
                  {item.value}
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-band px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Model details"
            title="V4 Flash specs at a glance"
            description="Every figure below traces to the DeepSeek API docs or the Hugging Face model card. Flash is the default; Pro is the exception."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {deepSeekSpecs.map((spec) => (
              <article
                key={spec.label}
                className="rounded-lg border border-white/10 bg-[#0d141c] p-5"
              >
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-cyan-200">
                  {spec.label}
                </p>
                <h2 className="mt-2 text-xl font-semibold text-white">
                  {spec.value}
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {spec.detail}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Routing"
            title="Which tasks should run on Flash?"
            description={`Current Flash row: ${flash.note}`}
          />
          <div className="mt-10 overflow-x-auto rounded-lg border border-white/10 bg-[#0d141c]">
            <table className="price-table min-w-[860px]">
              <thead>
                <tr>
                  <th>Task</th>
                  <th>Default model</th>
                  <th>Escalation</th>
                  <th>Metric</th>
                </tr>
              </thead>
              <tbody>
                {routePlaybook.map((row) => (
                  <tr key={row.task}>
                    <td className="font-semibold text-white">{row.task}</td>
                    <td>{row.defaultModel}</td>
                    <td>{row.escalation}</td>
                    <td>{row.metric}</td>
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
            eyebrow="Full table"
            title="How Flash compares with GPT, Claude, Gemini, and Grok"
            description="The site can compare GPT, Claude, Gemini, and Grok, but the DeepSeek column should lead with V4 Flash."
          />
          <div className="mt-10">
            <PricingTable />
          </div>
        </div>
      </section>
    </>
  );
}

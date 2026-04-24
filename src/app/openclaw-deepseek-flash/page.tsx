import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Braces, GitBranch, PlugZap, ShieldCheck } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { openClawAdapterPoints, routePlaybook } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "DeepSeek V4 Flash for OpenClaw",
  description:
    "Standalone guide for adapting OpenClaw workflows to DeepSeek V4 Flash with prompt cache design, escalation rules, and fallback comparisons.",
  alternates: {
    canonical: "/openclaw-deepseek-flash"
  }
};

const adapterChecklist = [
  "Set deepseek-v4-flash as the routine model for OpenClaw agent turns.",
  "Keep tool schemas and system prompts stable to improve cache-hit economics.",
  "Define an explicit V4 Pro escalation trigger instead of upgrading every request.",
  "Audit only sampled outputs with GPT, Claude, Gemini, or Grok when the workflow needs it."
];

export default function OpenClawDeepSeekFlashPage() {
  return (
    <>
      <section className="market-grid border-b border-white/10 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="inline-flex items-center gap-2 rounded-lg border border-green-300/30 bg-green-300/10 px-3 py-2 text-xs font-bold uppercase tracking-[0.14em] text-green-100">
            <PlugZap className="h-4 w-4" />
            Dedicated adaptation
          </p>
          <h1 className="mt-6 max-w-4xl text-4xl font-semibold text-white sm:text-6xl">
            DeepSeek V4 Flash for OpenClaw
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-400">
            This page is the strongest standalone statement on the site:
            OpenClaw should not be treated as a generic compatibility bullet.
            It gets a Flash-first routing model, cache strategy, and escalation
            policy.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/api-routing"
              className="inline-flex items-center gap-2 rounded-lg bg-green-300 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-green-200"
            >
              API routing playbook
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/benchmarks"
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10"
            >
              Benchmark checklist
              <GitBranch className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Implementation checklist"
            title="Make OpenClaw visibly Flash-adapted"
            description="The content should read like a specific adapter page, not a generic DeepSeek page with OpenClaw inserted once."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {adapterChecklist.map((item) => (
              <article
                key={item}
                className="rounded-lg border border-white/10 bg-[#0d141c] p-5"
              >
                <ShieldCheck className="h-6 w-6 text-green-200" />
                <p className="mt-4 text-sm leading-7 text-slate-300">{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-band px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Adapter map"
            title="OpenClaw layer by layer"
            description="Each layer has one practical routing recommendation and one reason tied back to V4 Flash economics."
          />
          <div className="mt-10 overflow-x-auto rounded-lg border border-white/10 bg-[#0d141c]">
            <table className="price-table min-w-[900px]">
              <thead>
                <tr>
                  <th>Layer</th>
                  <th>Recommendation</th>
                  <th>Why it matters</th>
                </tr>
              </thead>
              <tbody>
                {openClawAdapterPoints.map((point) => (
                  <tr key={point.layer}>
                    <td className="font-semibold text-white">{point.layer}</td>
                    <td>{point.recommendation}</td>
                    <td>{point.reason}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Routing matrix"
            title="OpenClaw traffic split"
            description="Use this table to explain which OpenClaw tasks should stay on V4 Flash and which tasks deserve escalation."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {routePlaybook.map((row) => (
              <article
                key={row.task}
                className="rounded-lg border border-white/10 bg-[#0d141c] p-5"
              >
                <Braces className="h-6 w-6 text-cyan-200" />
                <p className="mt-4 text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
                  {row.task}
                </p>
                <h2 className="mt-2 text-xl font-semibold text-white">
                  {row.defaultModel}
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  Escalation: {row.escalation}. Track: {row.metric}.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

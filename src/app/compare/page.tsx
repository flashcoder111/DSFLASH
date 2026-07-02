import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowDownRight,
  ArrowRight,
  CheckCircle2,
  GitCompareArrows
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { comparisonMatrix, comparisonUseCases } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "DeepSeek V4 vs GPT, Claude, Gemini & Grok (2026)",
  description:
    "Five model families, one price-and-fit table: DeepSeek V4 Flash from $0.14/M vs GPT-5.4, Claude, Gemini 3.1, and Grok 4.20 — with per-workload picks.",
  alternates: {
    canonical: "/compare"
  }
};

const deepDives = [
  {
    href: "/compare/deepseek-v4-flash-vs-gpt-5-4",
    title: "Flash vs GPT-5.4",
    description: "Is 54× cheaper output good enough? The numbers behind the gap."
  },
  {
    href: "/compare/deepseek-v4-flash-vs-claude",
    title: "Flash vs Claude Sonnet & Opus",
    description: "Volume work vs review work — and a routing rule for using both."
  },
  {
    href: "/flash-vs-pro",
    title: "Flash vs Pro",
    description: "Same family, 12× price gap. Task-level escalation triggers."
  }
];

export default function ComparePage() {
  return (
    <>
      <section className="market-grid border-b border-white/10 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="inline-flex items-center gap-2 rounded-lg border border-cyan-300/30 bg-cyan-300/10 px-3 py-2 text-xs font-bold uppercase tracking-[0.14em] text-cyan-100">
            <GitCompareArrows className="h-4 w-4" />
            Model comparison
          </p>
          <h1 className="mt-6 max-w-4xl text-4xl font-semibold text-white sm:text-6xl">
            DeepSeek V4 vs GPT, Claude, Gemini, and Grok: who wins what?
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-400">
            Five model families, five different jobs. DeepSeek V4 Flash wins
            on cost ($0.14/M input), GPT-5.4 is the frontier baseline, Claude
            leads review-quality work, Gemini owns multimodal, and Grok covers
            realtime/xAI workflows. The matrix below turns that into routing
            decisions.
          </p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Decision matrix"
            title="Which model family fits which job?"
            description="One card per family: what it's best at, which variant to pick, and the price signal that matters."
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-5">
            {comparisonMatrix.map((item) => (
              <article
                key={item.family}
                className="rounded-lg border border-white/10 bg-[#0d141c] p-5"
              >
                <ArrowDownRight className="h-6 w-6 text-cyan-200" />
                <p className="mt-4 text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
                  {item.family}
                </p>
                <h2 className="mt-2 text-lg font-semibold text-white">
                  {item.bestFor}
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.recommended}
                </p>
                <p className="mt-3 rounded-lg bg-white/[0.04] p-3 text-sm font-semibold text-amber-100">
                  {item.priceSignal}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-band px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Use cases"
            title="Four workloads, four winners"
            description="Production routing works best when the default model, the upgrade model, and the audit model have separate, explicit jobs."
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {comparisonUseCases.map((item) => (
              <article
                key={item.title}
                className="rounded-lg border border-white/10 bg-[#0d141c] p-5"
              >
                <CheckCircle2 className="h-6 w-6 text-green-200" />
                <p className="mt-4 text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
                  {item.title}
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-white">
                  {item.winner}
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.reason}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-x-auto rounded-lg border border-white/10 bg-[#0d141c]">
          <table className="price-table min-w-[940px]">
            <thead>
              <tr>
                <th>Family</th>
                <th>Best for</th>
                <th>Recommended route</th>
                <th>Price signal</th>
                <th>Caveat</th>
              </tr>
            </thead>
            <tbody>
              {comparisonMatrix.map((item) => (
                <tr key={item.family}>
                  <td className="font-semibold text-white">{item.family}</td>
                  <td>{item.bestFor}</td>
                  <td>{item.recommended}</td>
                  <td>{item.priceSignal}</td>
                  <td>{item.caveat}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Deep dives"
            title="Head-to-head comparisons"
            description="Two-model matchups with full price tables, workload math, and FAQ answers."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {deepDives.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group rounded-lg border border-white/10 bg-[#0d141c] p-5 transition hover:border-cyan-300/40"
              >
                <h3 className="text-lg font-semibold text-white group-hover:text-cyan-200">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-cyan-200">
                  Read the comparison
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

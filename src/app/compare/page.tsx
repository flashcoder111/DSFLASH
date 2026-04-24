import type { Metadata } from "next";
import { ArrowDownRight, CheckCircle2, GitCompareArrows } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { comparisonMatrix, comparisonUseCases } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "DeepSeek V4 vs GPT, Claude, Gemini, and Grok",
  description:
    "A practical comparison of DeepSeek V4, GPT, Claude, Gemini, and Grok across pricing, routing, strengths, and caveats.",
  alternates: {
    canonical: "/compare"
  }
};

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
            DeepSeek V4 vs GPT, Claude, Gemini, and Grok
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-400">
            The comparison is organized by model family. DeepSeek is the
            V4 Flash and OpenClaw route, GPT is the broad frontier baseline,
            Claude is the enterprise review route, Gemini is the
            multimodal/Google route, and Grok is the realtime/xAI route.
          </p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Decision matrix"
            title="One row per model family, Flash first"
            description="This removes duplicate cheapest-row cards while making DeepSeek V4 Flash the primary DeepSeek route and OpenClaw adaptation target."
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
            title="Practical routing recommendations"
            description="Turn the comparison table into production routing rules: default model, upgrade model, and audit model should have separate jobs."
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
    </>
  );
}

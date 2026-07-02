import type { Metadata } from "next";
import { AlertTriangle, Database, Layers, WalletCards } from "lucide-react";
import PriceCalculator from "@/components/PriceCalculator";
import PricingTable from "@/components/PricingTable";
import SectionHeading from "@/components/SectionHeading";
import { blendedCost, formatUsd, pricingModels } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "DeepSeek V4 API Pricing: Official Rates (July 2026)",
  description:
    "DeepSeek V4 Flash: $0.14/M input, $0.28/M output. V4 Pro: $1.74/$3.48. Full price table vs GPT, Claude, Gemini, Grok — plus an interactive cost calculator.",
  alternates: {
    canonical: "/pricing"
  }
};

const scenarios = [
  {
    name: "Search and summary workload",
    input: 80,
    output: 12,
    cache: 0.45
  },
  {
    name: "Code-agent monthly traffic",
    input: 300,
    output: 90,
    cache: 0.25
  },
  {
    name: "Enterprise long-context knowledge base",
    input: 900,
    output: 160,
    cache: 0.6
  }
];

export default function PricingPage() {
  const flash = pricingModels[0];
  const pro = pricingModels[1];

  return (
    <>
      <section className="market-grid border-b border-white/10 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="inline-flex items-center gap-2 rounded-lg border border-green-300/30 bg-green-300/10 px-3 py-2 text-xs font-bold uppercase tracking-[0.14em] text-green-100">
            <WalletCards className="h-4 w-4" />
            Pricing intelligence
          </p>
          <h1 className="mt-6 max-w-4xl text-4xl font-semibold text-white sm:text-6xl">
            DeepSeek V4 API pricing: official rates and cost calculator
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-400">
            All prices per 1M tokens in USD, verified against the official
            pricing page. V4 Flash: $0.14 input, $0.028 cache-hit input, $0.28
            output. V4 Pro: $1.74 input, $0.145 cache-hit, $3.48 output. One
            common mix-up to avoid: the $12/M output figure circulating in
            comparison tables belongs to Gemini 3.1 Pro Preview, not DeepSeek.
          </p>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <PricingTable />
        </div>
      </section>

      <section className="section-band px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <PriceCalculator />
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Budget routes"
            title="Three practical monthly budget scenarios"
            description="These examples compare Flash and Pro with fixed token volumes. Real systems also need retry cost, tool-call cost, safety filters, and cache hit assumptions."
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {scenarios.map((scenario) => {
              const flashCost = blendedCost(
                flash,
                scenario.input,
                scenario.output,
                scenario.cache
              );
              const proCost = blendedCost(
                pro,
                scenario.input,
                scenario.output,
                scenario.cache
              );

              return (
                <article
                  key={scenario.name}
                  className="rounded-lg border border-white/10 bg-[#0d141c] p-5"
                >
                  <Database className="h-6 w-6 text-cyan-200" />
                  <h3 className="mt-4 text-xl font-semibold text-white">
                    {scenario.name}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-400">
                    {scenario.input}M input / {scenario.output}M output /{" "}
                    {(scenario.cache * 100).toFixed(0)}% cache hit
                  </p>
                  <div className="mt-5 grid gap-3">
                    <div className="rounded-lg bg-white/[0.04] p-4">
                      <p className="text-xs uppercase tracking-[0.12em] text-slate-500">
                        V4 Flash
                      </p>
                      <p className="mt-1 text-2xl font-semibold text-green-200">
                        {formatUsd(flashCost)}
                      </p>
                    </div>
                    <div className="rounded-lg bg-white/[0.04] p-4">
                      <p className="text-xs uppercase tracking-[0.12em] text-slate-500">
                        V4 Pro
                      </p>
                      <p className="mt-1 text-2xl font-semibold text-amber-200">
                        {formatUsd(proCost)}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-band px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 lg:grid-cols-2">
          <div className="rounded-lg border border-white/10 bg-[#0d141c] p-5">
            <Layers className="h-6 w-6 text-cyan-200" />
            <h2 className="mt-4 text-2xl font-semibold text-white">
              Recommended routing policy
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-400">
              Use V4 Flash for 70% to 90% of routine traffic. Upgrade hard,
              high-value, low-frequency requests to V4 Pro. OpenClaw agent
              traffic should start on Flash, with GPT, Claude, Gemini, or Grok
              kept as explicit comparison or fallback routes.
            </p>
          </div>
          <div className="rounded-lg border border-amber-300/20 bg-amber-300/[0.08] p-5">
            <AlertTriangle className="h-6 w-6 text-amber-200" />
            <h2 className="mt-4 text-2xl font-semibold text-white">
              Pricing pages are not contracts
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Provider pricing can change. Before production launch, re-check
              official pricing, rate limits, region availability, and model
              aliases, then keep those values configurable.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

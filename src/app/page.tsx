import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  DollarSign,
  ExternalLink,
  Gauge,
  Radio,
  ShieldCheck
} from "lucide-react";
import PricingTable from "@/components/PricingTable";
import SectionHeading from "@/components/SectionHeading";
import {
  comparisonUseCases,
  contentPages,
  deepSeekSpecs,
  flashHighlights,
  formatUsd,
  newsItems,
  openClawAdapterPoints,
  pricingModels,
  sourceLinks
} from "@/lib/site-data";

export const metadata: Metadata = {
  title: "DeepSeek V4 Flash: Pricing, Guides & News (2026)",
  description:
    "DeepSeek V4 Flash costs $0.14/M input, $0.28/M output. Pricing tables, local setup guides, OpenClaw integration, and model comparisons with official sources.",
  alternates: {
    canonical: "/"
  }
};

const deepSeekRows = pricingModels.filter((model) => model.provider === "DeepSeek");
const flashModel = deepSeekRows.find((model) => model.model === "V4 Flash")!;

function Hero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-white/10">
      <Image
        src="/deepseek-v4-market-map.png"
        alt="DeepSeek V4 pricing market map"
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-20 h-full w-full object-cover opacity-70"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(8,11,16,0.94),rgba(8,11,16,0.78)_48%,rgba(8,11,16,0.92))]" />
      <div className="market-grid">
        <div className="mx-auto grid min-h-[70svh] max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div className="max-w-4xl">
            <p className="inline-flex items-center gap-2 rounded-lg border border-cyan-300/30 bg-cyan-300/10 px-3 py-2 text-xs font-bold uppercase tracking-[0.14em] text-cyan-100">
              <Radio className="h-4 w-4" />
              DeepSeek V4 Flash + OpenClaw adaptation
            </p>
            <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-normal text-white sm:text-6xl lg:text-7xl">
              DeepSeek V4 Flash: pricing, setup guides, and OpenClaw integration
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              V4 Flash runs API traffic at $0.14/M input and $0.28/M output —
              18–54× below frontier-model prices. This site tracks what it
              costs, how to run it (API, Ollama, or OpenClaw), and where it
              beats GPT, Claude, Gemini, and Grok. Every number links to its
              official source.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/deepseek-v4-flash"
                className="inline-flex items-center gap-2 rounded-lg bg-cyan-300 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-200"
              >
                View Flash guide
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/openclaw-deepseek-flash"
                className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10"
              >
                OpenClaw adapter
                <BarChart3 className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {[flashModel].map((model) => (
              <div
                key={model.model}
                className="rounded-lg border border-cyan-300/25 bg-[#0d141c]/90 p-5 backdrop-blur"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
                      {model.model}
                    </p>
                    <p className="mt-2 text-3xl font-semibold text-white">
                      {formatUsd(model.output)}
                      <span className="text-sm font-normal text-slate-400">
                        {" "}
                        / output M
                      </span>
                    </p>
                  </div>
                  <DollarSign className="h-6 w-6 text-green-200" />
                </div>
                <div className="mt-5 grid grid-cols-3 gap-2 text-sm">
                  <div className="rounded-lg bg-white/[0.04] p-3">
                    <p className="text-slate-500">Input</p>
                    <p className="mt-1 font-semibold text-cyan-100">
                      {formatUsd(model.input)}
                    </p>
                  </div>
                  <div className="rounded-lg bg-white/[0.04] p-3">
                    <p className="text-slate-500">Cache</p>
                    <p className="mt-1 font-semibold text-green-100">
                      {model.cachedInput ? formatUsd(model.cachedInput) : "N/A"}
                    </p>
                  </div>
                  <div className="rounded-lg bg-white/[0.04] p-3">
                    <p className="text-slate-500">Context</p>
                    <p className="mt-1 font-semibold text-amber-100">
                      {model.context}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            <div className="rounded-lg border border-green-300/20 bg-[#0d141c]/90 p-5 backdrop-blur">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
                    OpenClaw adapter
                  </p>
                  <p className="mt-2 text-3xl font-semibold text-white">
                    Flash-first
                  </p>
                </div>
                <ShieldCheck className="h-6 w-6 text-green-200" />
              </div>
              <div className="mt-5 grid gap-2 text-sm">
                {openClawAdapterPoints.slice(0, 3).map((point) => (
                  <div key={point.layer} className="rounded-lg bg-white/[0.04] p-3">
                    <p className="font-semibold text-cyan-100">{point.layer}</p>
                    <p className="mt-1 text-slate-400">{point.recommendation}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SnapshotCards() {
  const icons = [Gauge, DollarSign, ShieldCheck];

  return (
    <section className="section-band px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
        {flashHighlights.map((card, index) => {
          const Icon = icons[index % icons.length];

          return (
            <div
              key={card.title}
              className="rounded-lg border border-white/10 bg-[#0d141c] p-5"
            >
              <Icon className="h-6 w-6 text-cyan-200" />
              <p className="mt-4 text-sm font-semibold text-slate-300">
                {card.title}
              </p>
              <p className="mt-2 text-2xl font-semibold text-white">
                {card.value}
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                {card.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <SnapshotCards />

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Guides & references"
            title="What do you need to do with V4 Flash?"
            description="Setup, migration, routing, and comparison pages — each one answers a specific question, from the July 24 alias retirement to running Flash on your own GPUs."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {contentPages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="rounded-lg border border-white/10 bg-[#0d141c] p-5 transition hover:border-cyan-300/40 hover:bg-[#101923]"
              >
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-cyan-200">
                  {page.category}
                </p>
                <h2 className="mt-3 text-lg font-semibold text-white">
                  {page.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {page.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Pricing"
            title="What does V4 Flash cost next to GPT, Claude, Gemini, and Grok?"
            description="Official list prices per 1M tokens, including the cache-hit rates that cut repeated-context input cost 5×. Sources linked in every row."
          />
          <div className="mt-10">
            <PricingTable />
          </div>
        </div>
      </section>

      <section className="section-band px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Which model when"
            title="Which model wins each workload?"
            description="Four common workloads, one recommendation each — based on price-per-task and each family's documented strengths."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {comparisonUseCases.map((item) => (
              <article
                key={item.title}
                className="rounded-lg border border-white/10 bg-[#0d141c] p-5"
              >
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
                  {item.title}
                </p>
                <h3 className="mt-3 text-xl font-semibold text-white">
                  {item.winner}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.reason}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-cyan-200">
              V4 snapshot
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white">
              V4 is a Flash-led family with a Pro escalation path
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-400">
              DeepSeek ships Flash and Pro as one generation with the same 1M
              context. In practice Flash carries the volume — agent turns,
              batch workloads, high-frequency content operations — while Pro
              picks up long reasoning and review at 12× the output price.
            </p>
            <Link
              href="/flash-vs-pro"
              className="mt-6 inline-flex items-center gap-2 rounded-lg border border-cyan-300/30 px-4 py-3 text-sm font-bold text-cyan-100 transition hover:bg-cyan-300/10"
            >
              View Flash vs Pro
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {deepSeekSpecs.slice(0, 6).map((spec) => (
              <div
                key={spec.label}
                className="rounded-lg border border-white/10 bg-[#0d141c] p-4"
              >
                <CheckCircle2 className="h-5 w-5 text-green-200" />
                <p className="mt-3 text-sm text-slate-500">{spec.label}</p>
                <p className="mt-1 font-semibold text-white">{spec.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-band px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Latest news"
            title="What changed recently — and what it costs you"
            description="Dated updates that move API budgets: price changes, the July 24 alias retirement, and ecosystem support. Every item links to its primary source."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {newsItems.slice(0, 3).map((item) => (
              <article
                key={item.slug}
                className="rounded-lg border border-white/10 bg-[#0d141c] p-5"
              >
                <p className="flex items-center justify-between gap-3 text-xs text-slate-500">
                  <span>{item.date}</span>
                  <span className="rounded-md bg-white/[0.05] px-2 py-1 text-cyan-100">
                    {item.tag}
                  </span>
                </p>
                <h3 className="mt-4 text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.summary}
                </p>
                <Link
                  href={`/news/${item.slug}`}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-cyan-200"
                >
                  Read more
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-lg border border-white/10 bg-[#0d141c] p-5">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
            Source ledger
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            {sourceLinks.map((source) => (
              <a
                key={source.href}
                href={source.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white"
              >
                {source.label}
                <ExternalLink className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

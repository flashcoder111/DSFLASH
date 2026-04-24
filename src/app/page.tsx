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
  title: "DeepSeek V4 Flash & OpenClaw Intelligence",
  description:
    "Track DeepSeek V4 Flash pricing, OpenClaw adaptation, model comparisons, and practical API routing.",
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
              DeepSeek V4 Flash and OpenClaw adapter hub
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Make V4 Flash the lead DeepSeek route, document its OpenClaw
              adaptation separately, and keep Pro, GPT, Claude, Gemini, and Grok
              as explicit comparison or escalation choices.
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
            eyebrow="Content cluster"
            title="More indexable pages around Flash and OpenClaw"
            description="The site now has a larger page set: Flash guide, OpenClaw adaptation, routing, comparison, benchmarks, use cases, and migration pages."
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
            eyebrow="Flash first"
            title="Start with Flash, then route exceptions"
            description="DeepSeek V4 matters because Flash gives the site a clear low-cost default route. Pro remains documented, but the main story should be Flash performance, cache economics, and OpenClaw adaptation."
          />
          <div className="mt-10">
            <PricingTable />
          </div>
        </div>
      </section>

      <section className="section-band px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Comparison logic"
            title="Compare around Flash, not around Pro"
            description="The comparison set still separates DeepSeek, GPT, Claude, Gemini, and Grok, but the DeepSeek row now treats V4 Flash as the default product route."
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
              DeepSeek documents Flash and Pro under the same generation, but
              this site should lead with Flash because it is the practical route
              for OpenClaw agent turns, batch workloads, and high-volume content
              operations.
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
            title="DeepSeek V4 news timeline"
            description="Pricing, open weights, API migration, and model comparison updates with traceable sources."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {newsItems.map((item) => (
              <article
                key={item.title}
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
                  href={item.href}
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

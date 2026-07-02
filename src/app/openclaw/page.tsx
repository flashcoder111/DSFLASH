import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, PlugZap, Workflow } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { contentPages, openClawAdapterPoints } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "OpenClaw + DeepSeek V4 Flash: Setup & Routing Hub",
  description:
    "Run OpenClaw agents on DeepSeek V4 Flash at $0.14/$0.28 per 1M tokens: default routing, prompt cache design, and escalation rules — with setup guides.",
  alternates: {
    canonical: "/openclaw"
  }
};

export default function OpenClawPage() {
  const openClawPages = contentPages.filter((page) =>
    page.href.includes("openclaw")
  );

  return (
    <>
      <section className="market-grid border-b border-white/10 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="inline-flex items-center gap-2 rounded-lg border border-green-300/30 bg-green-300/10 px-3 py-2 text-xs font-bold uppercase tracking-[0.14em] text-green-100">
            <PlugZap className="h-4 w-4" />
            OpenClaw adaptation
          </p>
          <h1 className="mt-6 max-w-4xl text-4xl font-semibold text-white sm:text-6xl">
            Run OpenClaw on DeepSeek V4 Flash: routing, cache, and cost
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-400">
            OpenClaw agents make hundreds of model calls a day — planning
            turns, tool narration, retrieval wrappers. Routing those calls to
            V4 Flash at $0.14/$0.28 per 1M tokens keeps an always-on agent
            affordable, and the fastest setup is one line:{" "}
            <code className="rounded bg-white/10 px-1.5 py-0.5 text-sm text-cyan-100">
              ollama launch openclaw --model deepseek-v4-flash:cloud
            </code>
            . This hub covers the routing rules, cache design, and escalation
            policy.
          </p>
          <Link
            href="/openclaw-deepseek-flash"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-green-300 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-green-200"
          >
            Read the adapter page
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Adapter rules"
            title="The four layers of an OpenClaw model configuration"
            description="Default route, escalation trigger, cache design, and audit lane — set these four explicitly and your agent's cost per day becomes predictable."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {openClawAdapterPoints.map((point) => (
              <article
                key={point.layer}
                className="rounded-lg border border-white/10 bg-[#0d141c] p-5"
              >
                <Workflow className="h-6 w-6 text-cyan-200" />
                <p className="mt-4 text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
                  {point.layer}
                </p>
                <h2 className="mt-2 text-xl font-semibold text-white">
                  {point.recommendation}
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {point.reason}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-band px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Related pages"
            title="Related OpenClaw guides"
            description="These pages create enough crawlable surface for OpenClaw and Flash together."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {openClawPages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="rounded-lg border border-white/10 bg-[#0d141c] p-5 transition hover:border-green-300/40 hover:bg-[#101923]"
              >
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-green-200">
                  {page.category}
                </p>
                <h2 className="mt-3 text-xl font-semibold text-white">
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
    </>
  );
}

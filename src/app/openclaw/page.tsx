import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, PlugZap, Workflow } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { contentPages, openClawAdapterPoints } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "OpenClaw Adaptation Hub",
  description:
    "OpenClaw adaptation hub for DeepSeek V4 Flash routing, cache strategy, escalation policy, and comparison boundaries.",
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
            OpenClaw should be paired with DeepSeek V4 Flash first
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-400">
            This hub separates the OpenClaw story from generic model comparison.
            The site should explain how OpenClaw routine agent turns, tool
            narration, retrieval wrappers, and prompt cache design can default to
            V4 Flash before escalating to Pro or another provider.
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
            title="Four OpenClaw adaptation layers"
            description="These rules give OpenClaw a stronger standalone role instead of leaving it as a passing mention on a comparison page."
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
            title="OpenClaw content cluster"
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

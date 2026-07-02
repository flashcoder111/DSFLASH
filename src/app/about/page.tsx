import type { Metadata } from "next";
import Link from "next/link";
import { Info } from "lucide-react";
import { siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About DSFlashHub",
  description:
    "Who runs DSFlashHub, how we verify DeepSeek V4 pricing and specs, and why this site is not affiliated with DeepSeek or OpenClaw.",
  alternates: {
    canonical: "/about"
  }
};

export default function AboutPage() {
  return (
    <>
      <section className="market-grid border-b border-white/10 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="inline-flex items-center gap-2 rounded-lg border border-cyan-300/30 bg-cyan-300/10 px-3 py-2 text-xs font-bold uppercase tracking-[0.14em] text-cyan-100">
            <Info className="h-4 w-4" />
            About
          </p>
          <h1 className="mt-6 max-w-4xl text-4xl font-semibold text-white sm:text-6xl">
            About DSFlashHub
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-400">
            An independent reference site for developers who route production
            traffic through DeepSeek V4 Flash.
          </p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-semibold text-white">
            What this site does
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-300">
            DSFlashHub tracks the practical side of DeepSeek V4 Flash: what it
            costs on the official API and on third-party providers, how to run
            it locally, how to wire it into OpenClaw agent workflows, and how it
            compares with GPT, Claude, Gemini, and Grok on real workloads. The
            site exists because this information is scattered across API docs,
            model cards, provider dashboards, and community threads — and
            because pricing mistakes in circulating comparison tables cost
            teams real money.
          </p>

          <h2 className="mt-12 text-2xl font-semibold text-white">
            How we verify what we publish
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-300">
            Every price and specification on this site is paired with a link to
            its primary source — the official DeepSeek API pricing page, the
            Hugging Face model card, or the provider&apos;s own pricing table —
            and carries a &quot;last verified&quot; date. When we publish
            hands-on material such as setup guides or cost measurements, we
            state what we ran, on what hardware, and when. When we cite
            community-sourced numbers we have not reproduced ourselves, we
            label them as such. If we get something wrong, we publish a
            correction as a dated news item rather than silently editing it.
          </p>

          <h2 className="mt-12 text-2xl font-semibold text-white">
            Who runs it
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-300">
            DSFlashHub is written and maintained by an independent developer
            who uses DeepSeek and OpenClaw tooling in day-to-day work. The
            fastest way to reach the site is{" "}
            <a
              href="mailto:hello@deepseekv4flash.com"
              className="font-semibold text-cyan-200"
            >
              hello@deepseekv4flash.com
            </a>{" "}
            or the{" "}
            <Link href="/contact" className="font-semibold text-cyan-200">
              contact page
            </Link>
            .
          </p>

          <div className="mt-12 rounded-lg border border-amber-300/30 bg-amber-300/5 p-6">
            <h2 className="text-xl font-semibold text-white">
              Independence disclosure
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              DSFlashHub is an independent publication and is NOT affiliated
              with, endorsed by, or sponsored by DeepSeek (Hangzhou DeepSeek
              AI), OpenAI, Anthropic, Google, xAI, or the OpenClaw project.
              &quot;DeepSeek&quot; and all other product names are trademarks
              of their respective owners and are used here for identification
              and comparison purposes only. This site does not sell API keys,
              model access, or any commercial product.
            </p>
          </div>

          <p className="mt-10 text-xs text-slate-500">
            Last verified: {siteConfig.lastVerified}
          </p>
        </div>
      </section>
    </>
  );
}

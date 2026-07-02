import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { guidePages } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "DeepSeek V4 Flash Guides: Setup, Migration & API",
  description:
    "Hands-on guides for DeepSeek V4 Flash: run it locally with Ollama, migrate off deepseek-chat before July 24, and wire up the API in three languages.",
  alternates: {
    canonical: "/guides"
  }
};

const decisionRows = [
  {
    goal: "Call Flash from an app today",
    route: "Official API (OpenAI-compatible)",
    cost: "$0.14 in / $0.28 out per 1M tokens",
    guide: "/guides/deepseek-v4-flash-api-quickstart"
  },
  {
    goal: "Run Flash on your own hardware",
    route: "Ollama + GGUF quantization",
    cost: "33 GB+ VRAM, one-time hardware",
    guide: "/guides/run-deepseek-v4-flash-locally"
  },
  {
    goal: "Fix code that calls deepseek-chat",
    route: "Model ID migration (deadline 2026-07-24)",
    cost: "Usually a one-line change",
    guide: "/guides/deepseek-chat-migration"
  },
  {
    goal: "Pick between Flash and a frontier model",
    route: "Task-based comparison",
    cost: "Depends on quality bar",
    guide: "/compare/deepseek-v4-flash-vs-gpt-5-4"
  }
];

export default function GuidesPage() {
  return (
    <>
      <section className="market-grid border-b border-white/10 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="inline-flex items-center gap-2 rounded-lg border border-cyan-300/30 bg-cyan-300/10 px-3 py-2 text-xs font-bold uppercase tracking-[0.14em] text-cyan-100">
            <BookOpen className="h-4 w-4" />
            Guides
          </p>
          <h1 className="mt-6 max-w-4xl text-4xl font-semibold text-white sm:text-6xl">
            DeepSeek V4 Flash guides: pick your route in 30 seconds
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-400">
            Three ways to use V4 Flash — hosted API, local Ollama, or a
            third-party provider — and the migration work the July 24 alias
            retirement forces on older code. Start with the table, then open
            the guide that matches your situation.
          </p>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-semibold text-white">
            Which route fits your situation?
          </h2>
          <div className="mt-6 overflow-x-auto rounded-lg border border-white/10">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead className="bg-white/[0.04] text-xs uppercase tracking-wider text-slate-300">
                <tr>
                  <th className="px-4 py-3">Your goal</th>
                  <th className="px-4 py-3">Best route</th>
                  <th className="px-4 py-3">Cost signal</th>
                  <th className="px-4 py-3">Guide</th>
                </tr>
              </thead>
              <tbody>
                {decisionRows.map((row) => (
                  <tr
                    key={row.goal}
                    className="border-t border-white/10 text-slate-300"
                  >
                    <td className="px-4 py-3 font-medium text-white">
                      {row.goal}
                    </td>
                    <td className="px-4 py-3">{row.route}</td>
                    <td className="px-4 py-3">{row.cost}</td>
                    <td className="px-4 py-3">
                      <Link
                        href={row.guide}
                        className="inline-flex items-center gap-1 font-semibold text-cyan-200"
                      >
                        Open
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2">
          {guidePages.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="group rounded-lg border border-white/10 bg-[#0d141c] p-5 transition hover:border-cyan-300/40"
            >
              <span className="rounded-md bg-white/[0.05] px-2 py-1 text-xs text-cyan-100">
                {guide.tag}
              </span>
              <h2 className="mt-4 text-xl font-semibold text-white group-hover:text-cyan-200">
                {guide.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                {guide.description}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

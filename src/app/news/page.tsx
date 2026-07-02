import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Newspaper } from "lucide-react";
import { newsItems } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "DeepSeek V4 News & Updates (July 2026)",
  description:
    "Tracked changes that affect your DeepSeek V4 budget: pricing moves, the July 24 alias retirement, open-weight releases, and ecosystem updates.",
  alternates: {
    canonical: "/news"
  }
};

export default function NewsPage() {
  return (
    <>
      <section className="market-grid border-b border-white/10 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="inline-flex items-center gap-2 rounded-lg border border-cyan-300/30 bg-cyan-300/10 px-3 py-2 text-xs font-bold uppercase tracking-[0.14em] text-cyan-100">
            <Newspaper className="h-4 w-4" />
            News
          </p>
          <h1 className="mt-6 max-w-4xl text-4xl font-semibold text-white sm:text-6xl">
            DeepSeek V4 news: what changed and what it costs you
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-400">
            We track the updates that move API budgets and break integrations:
            price changes, model retirements, open-weight releases, and tooling
            support. Every item links to its primary source.
          </p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-5xl gap-4">
          {newsItems.map((item) => (
            <article
              key={item.slug}
              className="rounded-lg border border-white/10 bg-[#0d141c] p-5"
            >
              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
                <span>{item.date}</span>
                <span className="rounded-md bg-white/[0.05] px-2 py-1 text-cyan-100">
                  {item.tag}
                </span>
              </div>
              <h2 className="mt-4 text-2xl font-semibold text-white">
                <Link
                  href={`/news/${item.slug}`}
                  className="transition hover:text-cyan-200"
                >
                  {item.title}
                </Link>
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                {item.summary}
              </p>
              <Link
                href={`/news/${item.slug}`}
                className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-cyan-200"
              >
                Read the full note
                <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

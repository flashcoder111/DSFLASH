import type { Metadata } from "next";
import Link from "next/link";
import { importedDeepSeekNews } from "@/lib/deepseek-imported-news";
import { newsItems } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "DeepSeek News, Guides & Updates",
  description:
    "Independent DeepSeek coverage: model releases, API changes, pricing, developer guides and ecosystem updates, ordered by date.",
  alternates: { canonical: "/deepseek" }
};

export default function DeepSeekPage() {
  const updates = [...newsItems, ...importedDeepSeekNews].sort(
    (left, right) => Date.parse(right.date) - Date.parse(left.date)
  );

  return (
    <div className="page-container">
      <header className="page-intro">
        <p className="eyebrow">DeepSeek desk</p>
        <h1>DeepSeek news, guides and practical updates.</h1>
        <p>
          A date-ordered index of DeepSeek coverage across releases, API
          changes, pricing, local deployment and the surrounding developer
          ecosystem. This archive now includes {updates.length} articles,
          including a migrated editorial collection from our sister site,
          deepseekv4pro.com. Each entry preserves its original publication
          link and primary source.
        </p>
      </header>

      <section className="article-list" aria-label="DeepSeek news">
        {updates.map((item) => (
          <article className="article-list-item" key={item.slug}>
            <div>
              <p className="eyebrow">{item.tag}</p>
              <h2>
                <Link href={`/deepseek/${item.slug}`}>{item.title}</Link>
              </h2>
              <p>{item.summary}</p>
            </div>
            <div className="article-list-item__meta">
              <span>{new Date(`${item.date}T00:00:00Z`).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" })}</span>
              <span>{"originalUrl" in item ? "Migrated article" : "Primary source"}</span>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}

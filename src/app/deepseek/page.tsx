import type { Metadata } from "next";
import Link from "next/link";
import { importedDeepSeekNews } from "@/lib/deepseek-imported-news";
import { newsItems } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "DeepSeek News & Developer Updates",
  description:
    "Explore dated DeepSeek coverage of model releases, API and pricing announcements, and developer tools.",
  alternates: { canonical: "/deepseek" }
};

export default function DeepSeekPage() {
  const updates = [...newsItems, ...importedDeepSeekNews].sort(
    (left, right) => Date.parse(right.date) - Date.parse(left.date)
  );
  const topics = [
    { title: "Model releases", slug: "deepseek-v4-pro-0813-official-api-release", description: "Release reports and model announcements." },
    { title: "API & pricing", slug: "deepseek-v4-api-pricing-increase-0817", description: "Dated API and pricing announcements." },
    { title: "Developer tools", slug: "deepseek-harness-github-npm-api-key-developer-preview", description: "Developer tools and integration coverage." }
  ];

  return (
    <div className="page-container">
      <header className="page-intro">
        <p className="eyebrow">DeepSeek desk</p>
        <h1>DeepSeek news and developer updates.</h1>
        <p>
          Explore our coverage of DeepSeek model releases, API changes,
          pricing announcements and developer tools. Articles are dated;
          older reports may not reflect current availability or prices.
        </p>
      </header>

      <nav className="deepseek-topics" aria-label="Explore DeepSeek coverage">
        <h2>Explore the coverage</h2>
        <div className="deepseek-topics__links">
          {topics.map((topic) => {
            const article = updates.find((item) => item.slug === topic.slug);
            if (!article) return null;
            return <div key={topic.slug}>
              <h3>{topic.title}</h3>
              <p>{topic.description}</p>
              <Link href={`/deepseek/${article.slug}`}>{article.title}</Link>
              <span>{new Date(`${article.date}T00:00:00Z`).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" })}</span>
            </div>;
          })}
        </div>
        <a className="deepseek-topics__all" href="#all-updates">Browse all {updates.length} updates ↓</a>
      </nav>

      <section className="deepseek-archive" id="all-updates" aria-labelledby="all-updates-heading">
        <h2 id="all-updates-heading">All updates</h2>
        <p>Listed by publication date. The archive includes articles migrated from our related publication, DeepSeek V4 Pro, with their original publication links preserved.</p>
      <div className="article-list">
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
      </div>
      </section>
    </div>
  );
}

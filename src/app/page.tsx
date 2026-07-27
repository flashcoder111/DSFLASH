import Link from "next/link";
import type { Metadata } from "next";
import ArticleCard from "@/components/article-card";
import LatestArticlesCarousel from "@/components/LatestArticlesCarousel";
import { articles, researchNotes, topics } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "Open models, clearly sourced",
  description: "Independent reporting and practical research on open AI models, releases, topics, and comparisons.",
  alternates: { canonical: "/" }
};

export default function Home() {
  const latestArticles = [...articles].sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
  const featuredArticles = latestArticles.slice(0, 3);
  const latest = latestArticles.slice(3);

  return (
    <div className="page-container">
      <section className="home-intro">
        <p className="eyebrow">Independent community discussion</p>
        <h1>Open models,<br />clearly discussed.</h1>
        <p className="home-intro__copy">An independent, unofficial community for discussing open-source and open-weight AI. We are not affiliated with, endorsed by, or speaking for any model provider, research lab, project or platform.</p>
        <p className="home-intro__disclaimer">Editorial analysis is for general information only. Verify technical, licensing, legal and product decisions against original sources and the relevant provider documentation.</p>
        <div className="topic-row" aria-label="Featured topics">
          {topics.map((topic) => <Link href={`/topics/${topic.slug}`} key={topic.slug}>{topic.name}</Link>)}
        </div>
      </section>

      <LatestArticlesCarousel articles={featuredArticles} />

      <section>
        <div className="section-heading">
        <div><p className="eyebrow">Latest articles</p><h2>What we are tracking now</h2></div>
          <Link href="/topics">Browse topics →</Link>
        </div>
        <div className="article-grid">
          {latest.slice(0, 6).map((article) => <ArticleCard article={article} key={article.slug} />)}
        </div>
      </section>

      <section className="notes">
        <h2>Latest research notes</h2>
        {researchNotes.map((note, index) => (
          <div className="note-row" key={note}>
            <strong>{note}</strong>
            <span>{["July 22, 2026", "July 15, 2026", "July 8, 2026", "July 1, 2026", "June 25, 2026"][index]}</span>
            <span>{[5, 4, 3, 4, 2][index]} sources</span>
          </div>
        ))}
        <Link className="notes__link" href="/topics">Browse all topics →</Link>
      </section>
    </div>
  );
}

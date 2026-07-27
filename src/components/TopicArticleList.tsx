"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { Article } from "@/lib/blog-data";

type SortDirection = "asc" | "desc";

export default function TopicArticleList({ articles }: { articles: Article[] }) {
  const [direction, setDirection] = useState<SortDirection>("desc");
  const sortedArticles = useMemo(() => [...articles].sort((a, b) => {
    const comparison = Date.parse(a.date) - Date.parse(b.date);
    return direction === "asc" ? comparison : -comparison;
  }), [articles, direction]);
  const arrow = direction === "asc" ? "↑" : "↓";

  return <>
    <div className="topic-toolbar" aria-label="Sort topic articles">
      <p>{articles.length} published {articles.length === 1 ? "article" : "articles"}</p>
      <button type="button" className="topic-sort" onClick={() => setDirection((current) => current === "asc" ? "desc" : "asc")} aria-label={`Sort by date, currently ${direction === "asc" ? "ascending" : "descending"}`}>
        <span>Sort by date</span><span className="topic-sort__arrow" aria-hidden="true">{arrow}</span><span className="sr-only">, {direction === "asc" ? "ascending" : "descending"}</span>
      </button>
    </div>
    <section className="article-list">{sortedArticles.map((article) => <article className="article-list-item" key={article.slug}><div><p className="eyebrow">{article.topic}</p><h2><Link href={`/articles/${article.slug}`}>{article.title}</Link></h2><p>{article.dek}</p></div><div className="article-list-item__meta"><time>{article.date}</time><span>{article.sourceCount} source{article.sourceCount === 1 ? "" : "s"}</span></div></article>)}</section>
  </>;
}

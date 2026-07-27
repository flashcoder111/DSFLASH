"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { Article } from "@/lib/blog-data";
import ArticleVisual from "@/components/article-visual";

export default function LatestArticlesCarousel({ articles }: { articles: Article[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const timer = window.setInterval(() => setActiveIndex((current) => (current + 1) % articles.length), 7000);
    return () => window.clearInterval(timer);
  }, [articles.length]);
  const article = articles[activeIndex];
  const selectArticle = (index: number) => setActiveIndex(index);

  return <article className="featured latest-carousel" aria-label="Latest articles carousel">
    <Link href={`/articles/${article.slug}`} className="latest-carousel__visual" aria-label={`Read ${article.title}`}>
      {article.imageSrc ? <img className="latest-carousel__image" src={article.imageSrc} alt={article.imageAlt ?? ""} /> : <ArticleVisual variant={article.visual} label="Latest article" />}
    </Link>
    <div className="featured__content">
      <p className="eyebrow">{article.topic}</p>
      <h2><Link href={`/articles/${article.slug}`}>{article.title}</Link></h2>
      <p className="featured__meta">{article.date} <span>•</span> {article.sourceCount} sources reviewed</p>
      <p className="featured__dek">{article.dek}</p>
      <div className="latest-carousel__controls">
        <button type="button" onClick={() => selectArticle((activeIndex + articles.length - 1) % articles.length)} aria-label="Show previous article">←</button>
        <div className="latest-carousel__dots" aria-label="Choose a latest article">{articles.map((item, index) => <button key={item.slug} className={index === activeIndex ? "is-active" : ""} type="button" onClick={() => selectArticle(index)} aria-label={`Show article ${index + 1}: ${item.title}`} aria-current={index === activeIndex ? "true" : undefined} />)}</div>
        <button type="button" onClick={() => selectArticle((activeIndex + 1) % articles.length)} aria-label="Show next article">→</button>
      </div>
    </div>
  </article>;
}

import Link from "next/link";
import type { Article } from "@/lib/blog-data";
import ArticleVisual from "@/components/article-visual";

export default function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="article-card">
      <Link href={`/articles/${article.slug}`} className="article-card__visual-link" aria-label={`Read ${article.title}`}>
        {article.imageSrc ? <img className="article-card__image" src={article.imageSrc} alt={article.imageAlt ?? ""} /> : <ArticleVisual variant={article.visual} label={article.topic} />}
      </Link>
      <div className="article-card__body">
        <p className="eyebrow">{article.topic}</p>
        <h2><Link href={`/articles/${article.slug}`}>{article.title}</Link></h2>
        <p className="article-card__meta">{article.date} <span>•</span> {article.sourceCount} source{article.sourceCount === 1 ? "" : "s"}</p>
        <p className="article-card__dek">{article.dek}</p>
      </div>
    </article>
  );
}

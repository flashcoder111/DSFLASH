import Link from "next/link";
import type { Article } from "@/lib/blog-data";

export default function ArticleListItem({ article }: { article: Article }) {
  return (
    <article className="article-list-item">
      <div>
        <p className="eyebrow">{article.topic}</p>
        <h2><Link href={`/articles/${article.slug}`}>{article.title}</Link></h2>
        <p>{article.dek}</p>
      </div>
      <div className="article-list-item__meta">
        <time>{article.date}</time>
        <span>{article.sourceCount} source{article.sourceCount === 1 ? "" : "s"}</span>
      </div>
    </article>
  );
}

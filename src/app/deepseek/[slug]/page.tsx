import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/blog-data";
import { importedDeepSeekNews } from "@/lib/deepseek-imported-news";
import { newsItems } from "@/lib/site-data";

type DeepSeekArticleProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return [...newsItems, ...importedDeepSeekNews].map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: DeepSeekArticleProps): Promise<Metadata> {
  const { slug } = await params;
  const migratedItem = importedDeepSeekNews.find((entry) => entry.slug === slug);
  const item = migratedItem ?? newsItems.find((entry) => entry.slug === slug);
  const articleImageSrc = migratedItem ? `/images/deepseek-news/${migratedItem.slug}.png` : undefined;

  if (!item) return { title: "DeepSeek article not found" };

  return {
    title: item.title,
    description: item.summary,
    alternates: { canonical: `/deepseek/${item.slug}` },
    openGraph: {
      type: "article",
      title: item.title,
      description: item.summary,
      publishedTime: item.date,
      images: articleImageSrc ? [{ url: articleImageSrc, alt: `Source-page image for ${item.title}` }] : undefined
    }
  };
}

export default async function DeepSeekArticlePage({ params }: DeepSeekArticleProps) {
  const { slug } = await params;
  const migratedItem = importedDeepSeekNews.find((entry) => entry.slug === slug);
  const item = migratedItem ?? newsItems.find((entry) => entry.slug === slug);

  if (!item) notFound();
  const articleImageSrc = migratedItem ? `/images/deepseek-news/${migratedItem.slug}.png` : undefined;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: item.title,
    description: item.summary,
    datePublished: item.date,
    dateModified: item.date,
    mainEntityOfPage: `${siteConfig.url}/deepseek/${item.slug}`,
    author: { "@type": "Organization", name: siteConfig.name },
    publisher: { "@type": "Organization", name: siteConfig.name }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <header className="article-header">
        <div className="article-container">
          <Link className="eyebrow" href="/deepseek">DeepSeek desk</Link>
          <h1>{item.title}</h1>
          <p className="article-header__dek">{item.summary}</p>
          <p className="article-header__meta">
            {new Date(`${item.date}T00:00:00Z`).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" })} <span>·</span> {item.tag}
          </p>
        </div>
      </header>
      {articleImageSrc ? <div className="article-container article-hero-visual"><img className="article-hero-image" src={articleImageSrc} alt={`Source-page image for ${item.title}`} /></div> : null}
      <article className="article-container article-body">
        {migratedItem ? (
          <p className="article-body__origin">
            Migrated with permission from <a href={migratedItem.originalUrl} target="_blank" rel="noreferrer">DeepSeek V4 Pro</a>, a related editorial property operated by our team.
          </p>
        ) : null}
        {item.body.map((paragraph) => <p key={paragraph.slice(0, 72)}>{paragraph}</p>)}
        <section className="sources" aria-label="Article sources">
          <h2>Sources and publication record</h2>
          <p>Source material is linked for readers who want to verify the underlying announcement or documentation.</p>
          <ul>
            {migratedItem ? (
              <li>
                <a href={migratedItem.originalUrl} target="_blank" rel="noreferrer">
                  Original publication: DeepSeek V4 Pro <ArrowUpRight aria-hidden="true" />
                </a>
              </li>
            ) : null}
            {item.sourceHref ? (
              <li>
                <a href={item.sourceHref} target="_blank" rel="noreferrer">
                  {item.sourceLabel ?? item.sourceHref} <ArrowUpRight aria-hidden="true" />
                </a>
              </li>
            ) : null}
          </ul>
        </section>
      </article>
    </>
  );
}

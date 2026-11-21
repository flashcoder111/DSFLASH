import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ArticleListItem from "@/components/article-list-item";
import ArticleVisual from "@/components/article-visual";
import { articles, getArticle, siteConfig } from "@/lib/blog-data";
import type { ArticleBlock } from "@/lib/blog-data";

function ArticleBlockView({ block }: { block: ArticleBlock }) {
  switch (block.kind) {
    case "p":
      return <p>{block.text}</p>;
    case "ul":
      return <ul>{block.items.map((item) => <li key={item}>{item}</li>)}</ul>;
    case "table":
      return <div className="comparison-table-wrap"><table className="comparison-table">
        <thead><tr>{block.head.map((cell) => <th key={cell}>{cell}</th>)}</tr></thead>
        <tbody>{block.rows.map((row) => <tr key={row.join(" | ")}>{row.map((cell) => <td key={cell}>{cell}</td>)}</tr>)}</tbody>
      </table></div>;
    case "image":
      return <figure><img src={block.src} alt={block.alt} loading="lazy" />{block.caption ? <figcaption>{block.caption}</figcaption> : null}</figure>;
    case "cta":
      return <p>{block.pre}<Link href={block.href}>{block.label}</Link>{block.post}</p>;
  }
}

export function generateStaticParams() { return articles.map((article) => ({ slug: article.slug })); }

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  return params.then(({ slug }) => {
    const article = getArticle(slug);
    return article ? { title: article.title, description: article.dek, alternates: { canonical: `/articles/${article.slug}` }, openGraph: { type: "article", publishedTime: article.date, modifiedTime: article.updated, title: article.title, description: article.dek, images: article.imageSrc ? [{ url: article.imageSrc, alt: article.imageAlt }] : undefined } } : {};
  });
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();
  const related = articles.filter((item) => item.slug !== article.slug && (item.topicSlug === article.topicSlug || item.modelSlugs?.some((model) => article.modelSlugs?.includes(model)))).slice(0, 2);
  const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: article.title, description: article.dek, datePublished: article.date, dateModified: article.updated, author: article.author ? { "@type": "Person", name: article.author } : undefined, mainEntityOfPage: `${siteConfig.url}/articles/${article.slug}`, publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url } };
  const heroClassName = `article-hero-visual${article.imageFramed ? " article-hero-visual--framed" : ""}`;

  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <div className="article-container">
      <header className="article-header">
        <p className="eyebrow">{article.topic}</p>
        <h1>{article.title}</h1>
        {article.author ? <p className="article-header__byline">By <strong>{article.author}</strong></p> : null}
        {article.hideDek ? null : <p className="article-header__dek">{article.dek}</p>}
        <p className="article-header__meta">Published {article.date} · Last checked {article.updated}{article.sourceCount > 0 ? ` · ${article.sourceCount} sources reviewed` : ""}</p>
      </header>
      {article.tldr?.length ? <section className="article-tldr">
        <h2>TL;DR</h2>
        <ul>{article.tldr.map((item) => <li key={item}>{item}</li>)}</ul>
      </section> : null}
      {article.imageSrc ? <figure className={heroClassName}>
        <img className={`article-hero-image${article.imageAspect === "portrait" ? " article-hero-image--portrait" : ""}`} src={article.imageSrc} alt={article.imageAlt ?? ""} />
        {article.imageCaption ? <figcaption>{article.imageCaption}</figcaption> : null}
      </figure> : <div className={heroClassName}><ArticleVisual variant={article.visual} label="Editorial research" /></div>}
      <article className="article-body">
        {article.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        {article.secondaryImageSrc ? <figure className="article-hero-visual"><img className="article-hero-image" src={article.secondaryImageSrc} alt={article.secondaryImageAlt ?? ""} /><figcaption>DSFlashHub editorial illustration.</figcaption></figure> : null}
        {article.sections?.map((section) => <section className="article-section" key={section.heading}>
          <h2>{section.heading}</h2>
          {section.blocks
            ? section.blocks.map((block, index) => <ArticleBlockView block={block} key={`${section.heading}-${index}`} />)
            : section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </section>)}
      </article>
      {article.sources.length > 0 && <section className="sources">
        <h2>Sources</h2>
        <p>{article.sourcesAsText ? "These are the materials reviewed for the factual claims on this page." : "These are the materials reviewed for the factual claims on this page. Links open the original source."}</p>
        <ul>{article.sources.map((source) => <li key={source.href}>{article.sourcesAsText ? source.label : <a href={source.href} target="_blank" rel="noreferrer">{source.label}</a>}<span>{source.type}</span></li>)}</ul>
      </section>}
      {related.length > 0 && <section className="notes"><h2>Related reading</h2><div className="article-list">{related.map((item) => <ArticleListItem article={item} key={item.slug} />)}</div></section>}
    </div>
  </>;
}

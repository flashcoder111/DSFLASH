import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ArticleListItem from "@/components/article-list-item";
import { articlesForModel, getModel, models } from "@/lib/blog-data";

export function generateStaticParams() { return models.map((model) => ({ slug: model.slug })); }
export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { return params.then(({ slug }) => { const model = getModel(slug); return model ? { title: model.name, description: model.description, alternates: { canonical: `/models/${model.slug}` } } : {}; }); }

export default async function ModelDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const model = getModel(slug);
  if (!model) notFound();
  const related = articlesForModel(slug);
  return <div className="page-container"><header className="page-intro"><p className="eyebrow">{model.access} model</p><h1>{model.name}</h1><p>{model.description}</p></header><dl className="facts"><div><dt>Organization</dt><dd>{model.organization}</dd></div><div><dt>Official source</dt><dd><a href={model.officialUrl} target="_blank" rel="noreferrer">Visit source ↗</a></dd></div><div><dt>Last checked</dt><dd>{model.verifiedAt}</dd></div><div><dt>License</dt><dd>{model.license ?? "Not verified"}</dd></div></dl><section className="article-list">{related.length ? related.map((article) => <ArticleListItem article={article} key={article.slug} />) : <p className="policy-content">Editorial coverage is being prepared from primary sources.</p>}</section></div>;
}

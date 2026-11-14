import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { comparisons } from "@/lib/blog-data";
import ComparisonNavigation from "@/components/ComparisonNavigation";
import ComparisonReviewGuide from "@/components/ComparisonReviewGuide";

export function generateStaticParams() { return comparisons.map((comparison) => ({ slug: comparison.slug })); }

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  return params.then(({ slug }) => {
    const comparison = comparisons.find((item) => item.slug === slug);
    return comparison ? { title: comparison.title, description: comparison.dek, alternates: { canonical: `/compare/${comparison.slug}` }, openGraph: { title: comparison.title, description: comparison.dek, images: comparison.imageSrc ? [{ url: comparison.imageSrc, alt: comparison.imageAlt }] : undefined } } : {};
  });
}

export default async function ComparisonPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const comparison = comparisons.find((item) => item.slug === slug);
  if (!comparison) notFound();
  const columnLabels: Record<string, [string, string]> = { "claude-code-vs-codex": ["Codex", "Claude Code"], "openclaw-vs-hermes": ["OpenClaw", "Hermes"], "vllm-vs-sglang": ["vLLM", "SGLang"] };
  const [left, right] = columnLabels[slug] ?? ["First approach", "Second approach"];
  return <div className="article-container"><header className="article-header"><p className="eyebrow">{comparison.label}</p><h1>{comparison.title}</h1><p className="article-header__dek">{comparison.dek}</p><p className="article-header__meta">Original comparison: {comparison.date} · Editorial update: November 14, 2026</p></header>{comparison.imageSrc && <div className="article-hero-visual"><img className="article-hero-image" src={comparison.imageSrc} alt={comparison.imageAlt ?? ""} /></div>}<article className="article-body">{comparison.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</article><section className="comparison-table-wrap"><table className="comparison-table"><thead><tr><th>Dimension</th><th>{left}</th><th>{right}</th><th>How to read it</th></tr></thead><tbody>{comparison.rows.map((row) => <tr key={row.dimension}><td>{row.dimension}</td><td>{row.left}</td><td>{row.right}</td><td>{row.note}</td></tr>)}</tbody></table></section><ComparisonReviewGuide href={`/compare/${slug}`} /><ComparisonNavigation href={`/compare/${slug}`} /></div>;
}

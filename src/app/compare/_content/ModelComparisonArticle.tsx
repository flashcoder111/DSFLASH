import type { ReactNode } from "react";
import Link from "next/link";
import ComparisonNavigation from "@/components/ComparisonNavigation";
import { siteConfig } from "@/lib/blog-data";
import { modelComparisonDate, modelComparisonDateLabel, type ModelComparison } from "@/lib/model-comparisons";
import GeminiNeonComparison from "./gemini-4-neon";
import GptSolComparison from "./gpt-6-2-sol";
import GptAstraComparison from "./gpt-6-2-astra";
import QwenMaxComparison from "./qwen4-max";

const comparisonBodies = {
  "deepseek-v4-1-flash-vs-gemini-4-neon": <GeminiNeonComparison />,
  "deepseek-v4-1-flash-vs-gpt-6-2-sol": <GptSolComparison />,
  "deepseek-v4-1-flash-vs-gpt-6-2-astra": <GptAstraComparison />,
  "deepseek-v4-1-flash-vs-qwen4-max": <QwenMaxComparison />
} satisfies Record<ModelComparison["slug"], ReactNode>;

export default function ModelComparisonArticle({ comparison }: { comparison: ModelComparison }) {
  const publisher = { "@type": "Organization", name: siteConfig.name, url: siteConfig.url };
  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: comparison.title,
    description: comparison.description,
    dateModified: modelComparisonDate,
    mainEntityOfPage: `${siteConfig.url}${comparison.href}`,
    author: publisher,
    publisher
  };

  return (
    <article className="article-container comparison-feature expanded-comparison">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article).replace(/</g, "\\u003c") }} />
      <header className="article-header">
        <Link href="/compare" className="comparison-feature__back">All comparisons</Link>
        <h1>{comparison.title}</h1>
        <p className="article-header__dek">{comparison.description}</p>
        <p className="article-header__meta">By {siteConfig.name} · Updated <time dateTime={modelComparisonDate}>{modelComparisonDateLabel}</time></p>
      </header>
      {comparisonBodies[comparison.slug]}
      <ComparisonNavigation href={comparison.href} />
    </article>
  );
}

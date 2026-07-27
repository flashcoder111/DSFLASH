import type { Metadata } from "next";
import Link from "next/link";
import { modelsForAccess } from "@/lib/blog-data";

export const metadata: Metadata = { title: "Closed-Source Models", description: "Source-checked coverage of proprietary model families available through hosted APIs.", alternates: { canonical: "/global-models" } };

export default function GlobalModelsPage() {
  const models = modelsForAccess("Closed Source");
  return <div className="page-container"><header className="page-intro"><p className="eyebrow">OpenRouter-informed model coverage</p><h1>Closed-Source Models</h1><p>Proprietary frontier model families available through hosted APIs. This view separates API access from releases that can be downloaded and self-hosted.</p></header><section className="directory-grid">{models.map((model) => <article className="directory-card" key={model.slug}><Link href={`/models/${model.slug}`}><p className="eyebrow">{model.organization}</p><h2>{model.name}</h2><p>{model.description}</p></Link></article>)}</section></div>;
}

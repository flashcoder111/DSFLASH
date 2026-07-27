import type { Metadata } from "next";
import Link from "next/link";
import { modelsForAccess } from "@/lib/blog-data";

export const metadata: Metadata = { title: "Open-Source Models", description: "Source-checked coverage of open-source and open-weight model families.", alternates: { canonical: "/china-models" } };

export default function ChinaModelsPage() {
  const models = modelsForAccess("Open Source");
  return <div className="page-container"><header className="page-intro"><p className="eyebrow">OpenRouter-informed model coverage</p><h1>Open-Source Models</h1><p>Open-weight and open-source model families that developers actively compare for local and hosted use. Availability and licensing are checked against each model’s primary source.</p></header><section className="directory-grid">{models.map((model) => <article className="directory-card" key={model.slug}><Link href={`/models/${model.slug}`}><p className="eyebrow">{model.organization}</p><h2>{model.name}</h2><p>{model.description}</p></Link></article>)}</section></div>;
}

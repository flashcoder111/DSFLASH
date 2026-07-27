import type { Metadata } from "next";
import Link from "next/link";
import { models, modelsForAccess } from "@/lib/blog-data";

export const metadata: Metadata = { title: "Model Library", description: "Source-checked model and organization pages.", alternates: { canonical: "/models" } };

export default function ModelsPage() {
  return <div className="page-container"><header className="page-intro"><p className="eyebrow">Model Library</p><h1>Model pages that<br />show their work.</h1><p>Each entry starts with official material, a last-checked date, and a clear boundary between confirmed facts and editorial context.</p><div className="topic-row"><Link href="/china-models">Open-Source Models ({modelsForAccess("Open Source").length})</Link><Link href="/global-models">Closed-Source Models ({modelsForAccess("Closed Source").length})</Link></div></header><section className="directory-grid">{models.map((model) => <article className="directory-card" key={model.slug}><Link href={`/models/${model.slug}`}><p className="eyebrow">{model.access} · {model.organization}</p><h2>{model.name}</h2><p>{model.description}</p></Link></article>)}</section></div>;
}

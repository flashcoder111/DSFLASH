import type { Metadata } from "next";
import Link from "next/link";
import { comparisons } from "@/lib/blog-data";

export const metadata: Metadata = { title: "Model Comparisons", description: "Source-led comparisons that distinguish documented specifications from interpretation.", alternates: { canonical: "/compare" } };

export default function ComparePage() {
  const items = comparisons;
  return <div className="page-container"><header className="page-intro"><p className="eyebrow">Model Comparisons</p><h1>Compare the evidence,<br />not the hype.</h1><p>Our comparisons begin with scope and sources. If two claims use different measurements, the page says so rather than manufacturing a winner.</p></header><section className="article-list">{items.map((item) => <article className="article-list-item" key={item.slug}><div><p className="eyebrow">{item.label}</p><h2><Link href={`/compare/${item.slug}`}>{item.title}</Link></h2><p>{item.dek}</p></div><div className="article-list-item__meta"><span>Source-led</span><span>Updated {item.date}</span></div></article>)}</section></div>;
}

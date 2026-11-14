import type { Metadata } from "next";
import Link from "next/link";
import { comparisonDirectory } from "@/lib/comparison-directory";

export const metadata: Metadata = {
  title: "AI Model & Developer Tool Comparisons",
  description: "Explore AI model, coding agent and inference tool comparisons, with scope, dates and evidence clearly identified.",
  alternates: { canonical: "/compare" }
};

export default function ComparePage() {
  const models = comparisonDirectory.filter((item) => item.category === "model");
  const tools = comparisonDirectory.filter((item) => item.category === "tools");
  return <div className="page-container">
    <header className="page-intro compare-intro">
      <h1>AI comparisons, grounded in evidence.</h1>
      <p>Compare models and developer tools by the questions that matter: capabilities, cost, access and fit for your work. Every comparison identifies its scope and date.</p>
      <nav className="compare-jump" aria-label="Comparison categories">
        <a href="#model-comparisons">Model comparisons</a><a href="#tool-comparisons">Tools and infrastructure</a><a href="#how-we-compare">How we compare</a>
      </nav>
    </header>
    <section className="comparison-directory" id="model-comparisons" aria-labelledby="model-heading">
      <h2 id="model-heading">Model comparisons</h2>
      <p>Compare DeepSeek with other models, or explore comparisons across model families. Check each article&apos;s scope and date before making a decision.</p>
      <div className="article-list">{models.map((item) => <article className="article-list-item" key={item.href}>
        <div><p className="eyebrow">Model comparison</p><h3><Link href={item.href}>{item.title}</Link></h3><p>{item.description}</p></div>
        <div className="article-list-item__meta"><span>Documentation review</span><span>Updated {item.date}</span></div>
      </article>)}</div>
    </section>
    <section className="comparison-directory" id="tool-comparisons" aria-labelledby="tool-heading">
      <h2 id="tool-heading">Tools and infrastructure</h2>
      <p>These earlier comparisons cover workflows and serving approaches. Check the date and current documentation before making a decision.</p>
      <div className="article-list">{tools.map((item) => <article className="article-list-item" key={item.href}>
        <div><p className="eyebrow">{item.label}</p><h3><Link href={item.href}>{item.title}</Link></h3><p>{item.description}</p></div>
        <div className="article-list-item__meta"><span>Source-led</span><span>Updated {item.date}</span></div>
      </article>)}</div>
    </section>
    <section className="comparison-method" id="how-we-compare" aria-labelledby="method-heading">
      <h2 id="method-heading">How we compare</h2>
      <p>A useful comparison starts with a real decision and names the versions and conditions being compared. Our approach is to distinguish provider claims from independent measurements and our own tests, and identify gaps when equivalent data is unavailable. Older articles may not yet meet this standard.</p>
      <p>Prices, availability and capabilities can change. Read each article’s date and scope, and check current provider terms before relying on it.</p>
    </section>
  </div>;
}

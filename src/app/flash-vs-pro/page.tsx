import type { Metadata } from "next";
import Link from "next/link";
import ComparisonNavigation from "@/components/ComparisonNavigation";

export const metadata: Metadata = {
  title: "DeepSeek Flash vs Pro: Model Changes and API Costs",
  description: "Compare DeepSeek's current Flash and V4 Pro API routes, peak and off-peak prices, capabilities and an example cost calculation.",
  alternates: { canonical: "/flash-vs-pro" }
};

const rows = [
  ["API model name", "deepseek-flash", "deepseek-v4-pro"],
  ["Model version", "V4.1 Flash 1017", "V4 Pro 0813"],
  ["Context / maximum output", "1M / 384K tokens", "1M / 384K tokens"],
  ["Vision input", "Supported", "Not supported"],
  ["Input, cache miss · off-peak / peak", "$0.15 / $0.30", "$0.66 / $1.32"],
  ["Input, cache hit · off-peak / peak", "$0.003 / $0.006", "$0.022 / $0.044"],
  ["Output · off-peak / peak", "$0.60 / $1.20", "$1.98 / $3.96"]
];

export default function FlashVsProPage() {
  return <article className="article-container comparison-feature">
    <header className="article-header">
      <Link href="/compare" className="comparison-feature__back">All comparisons</Link>
      <h1>DeepSeek Flash vs Pro: model changes and API costs</h1>
      <p className="article-header__dek">The original V4 Flash has been retired. For a current API comparison, DeepSeek lists V4.1 Flash 1017 under <code>deepseek-flash</code> and V4 Pro 0813 under <code>deepseek-v4-pro</code>. Flash supports vision input; the listed Pro route does not. Choose based on your tasks and actual costs, not price alone.</p>
      <p className="article-header__meta">Provider documentation checked November 14, 2026 · No independent performance test</p>
    </header>

    <section className="comparison-feature__section">
      <h2>Which models does this page compare?</h2>
      <p>This page previously compared the older V4 Flash with V4 Pro. DeepSeek now routes requests using the legacy <code>deepseek-v4-flash</code> name to V4.1 Flash. A result obtained using that alias today is therefore not a fresh test of the retired model. The comparison below concerns DeepSeek&apos;s direct API, not a third-party subscription or a self-hosted deployment.</p>
      <p>DeepSeek lists both routes with a 1M-token context window and a maximum output of 384K tokens. These are limits, not a promise that every combination of maximum input and maximum output fits into one request. The provider&apos;s current documentation and account limits remain the final reference for a production deployment.</p>
    </section>

    <section className="comparison-feature__section">
      <h2>What differs in the direct API?</h2>
      <p>Prices are USD per million tokens, checked November 14, 2026. Cache-hit input, cache-miss input and output are separate billable categories. Rates can change.</p>
      <div className="comparison-table-wrap"><table className="comparison-table"><thead><tr><th scope="col">Dimension</th><th scope="col">Flash</th><th scope="col">Pro</th></tr></thead><tbody>{rows.map(([label, flash, pro]) => <tr key={label}><th scope="row">{label}</th><td>{flash}</td><td>{pro}</td></tr>)}</tbody></table></div>
      <p>DeepSeek defines peak hours as 01:00–04:00 and 06:00–10:00 UTC on weekdays, excluding Chinese public holidays; other hours are off-peak. Check the provider&apos;s current rules and any contract terms before scheduling workloads around that distinction.</p>
    </section>

    <section className="comparison-feature__section">
      <h2>How much might one request cost?</h2>
      <p>For an illustrative request with 10,000 cache-miss input tokens and 2,000 output tokens, assuming no tool fees or retries, the calculation is:</p>
      <ul><li>Flash off-peak: 0.01 × $0.15 + 0.002 × $0.60 = <strong>$0.0027</strong>.</li><li>Pro off-peak: 0.01 × $0.66 + 0.002 × $1.98 = <strong>$0.01056</strong>.</li><li>Flash peak: 0.01 × $0.30 + 0.002 × $1.20 = <strong>$0.0054</strong>.</li><li>Pro peak: 0.01 × $1.32 + 0.002 × $3.96 = <strong>$0.02112</strong>.</li></ul>
      <p>These figures are arithmetic examples rather than measured invoices. Cache hits, changed output length, additional tools, failed calls, taxes and contractual terms can alter the result. Equal token counts also do not prove equal task completion or equal quality.</p>
    </section>

    <section className="comparison-feature__section">
      <h2>How should a team choose?</h2>
      <p>Start with the requirements that are known: if the direct request needs image input, the provider&apos;s listed vision support is a meaningful distinction. For text tasks, test both routes against the same representative inputs and acceptance criteria; pricing alone cannot establish which one is sufficiently reliable.</p>
      <ol><li>Pin the model names, test date, prompts, tools and output limits.</li><li>Run a representative set of tasks and record failures, retries and human corrections.</li><li>Compare cost per accepted result and latency, not just a price per token.</li><li>Review the decision when models, prices or your workload change.</li></ol>
      <p>This is a proposed evaluation method. We have not run a controlled head-to-head quality, latency or reliability test for this page, so it does not claim a universal winner.</p>
    </section>
    <ComparisonNavigation href="/flash-vs-pro" />
  </article>;
}

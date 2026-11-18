import Link from "next/link";
import ComparisonNavigation from "@/components/ComparisonNavigation";
import { siteConfig } from "@/lib/blog-data";
import { flashRates, gpt62ComparisonDate, gpt62ComparisonDateLabel, type Gpt62Comparison } from "@/lib/gpt-6-2-comparisons";

const rate = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 3 });
const cost = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 4 });
const count = new Intl.NumberFormat("en-US");

export default function Gpt62ComparisonArticle({ comparison }: { comparison: Gpt62Comparison }) {
  const { href, title, model, modelId, rates, example } = comparison;
  const publisher = { "@type": "Organization", name: siteConfig.name, url: siteConfig.url };
  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: comparison.description,
    dateModified: gpt62ComparisonDate,
    mainEntityOfPage: `${siteConfig.url}${href}`,
    author: publisher,
    publisher
  };
  const priceRows = [
    { label: "Uncached input", flash: `${rate.format(flashRates.offPeak.input)} / ${rate.format(flashRates.peak.input)}`, gpt: rate.format(rates.input) },
    { label: "Cached input read", flash: `${rate.format(flashRates.offPeak.cachedInput)} / ${rate.format(flashRates.peak.cachedInput)}`, gpt: rate.format(rates.cachedInput) },
    { label: "Output", flash: `${rate.format(flashRates.offPeak.output)} / ${rate.format(flashRates.peak.output)}`, gpt: rate.format(rates.output) },
    { label: "Cache write, 30 min / 12 hr", flash: "No separate rate listed", gpt: `${rate.format(rates.cacheWrite30m)} / ${rate.format(rates.cacheWrite12h)}` }
  ];
  const requestCost = (prices: { input: number; output: number }) =>
    cost.format((example.input * prices.input + example.output * prices.output) / 1_000_000);

  return <article className="article-container comparison-feature">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article).replace(/</g, "\\u003c") }} />
    <header className="article-header">
      <Link href="/compare" className="comparison-feature__back">All comparisons</Link>
      <h1>{title}</h1>
      <p className="article-header__dek">{comparison.summary}</p>
      <p className="article-header__meta">By {siteConfig.name} · Updated <time dateTime={gpt62ComparisonDate}>{gpt62ComparisonDateLabel}</time></p>
    </header>

    <section className="comparison-feature__section">
      <h2>How do the models differ?</h2>
      <p>Flash and {model} both accept text and images and return text. The deployment choice is different. DeepSeek publishes weights for Flash 1017 under the MIT license, and OpenAI offers {model} as a hosted model.</p>
      <div className="comparison-table-wrap" role="region" aria-label="Model specifications" tabIndex={0}>
        <table className="comparison-table">
          <thead><tr><th scope="col">Specification</th><th scope="col">DeepSeek V4.1 Flash</th><th scope="col">{model}</th></tr></thead>
          <tbody>
            <tr><th scope="row">Direct API model ID</th><td><code>deepseek-flash</code> (1017 revision)</td><td><code>{modelId}</code></td></tr>
            <tr><th scope="row">Context window</th><td>1M tokens</td><td>1,050,000 tokens</td></tr>
            <tr><th scope="row">Maximum output</th><td>384K tokens</td><td>128,000 tokens</td></tr>
            <tr><th scope="row">Modalities</th><td>Text and image input. Text output.</td><td>Text and image input. Text output.</td></tr>
            <tr><th scope="row">Reasoning</th><td>Thinking and non-thinking modes</td><td>Low through max. Reasoning is required.</td></tr>
            <tr><th scope="row">Deployment</th><td>Direct API and MIT-licensed weights</td><td>Hosted access through OpenAI</td></tr>
          </tbody>
        </table>
      </div>
      <p>OpenAI caps input at 922,000 tokens for {model}. On DeepSeek&apos;s Chat Completions API, Flash defaults to 8K output tokens with thinking off, 64K with thinking on, or 128K at max effort when you omit <code>max_tokens</code>. For a long coding session, reserve some context for tool results and room in the output budget for reasoning as well as the answer.</p>
      <p>DeepSeek&apos;s release announcement describes Flash as a mixture-of-experts model with a causal encoder-decoder. It activates 8 billion parameters for input and 16 billion for output. If you&apos;re evaluating self-hosting, estimate what it takes to load the weights and run inference at the concurrency you need. The API prices below cover hosted requests.</p>
      <p>In Codex, {model} is available through OpenAI&apos;s model picker. Flash uses a separately configured DeepSeek API provider. If you are building a tool-calling integration directly against OpenAI, use the Responses API for {model}. Match the available tools and reasoning settings before comparing the outputs of the two setups.</p>
    </section>

    <section className="comparison-feature__section">
      <h2>{comparison.taskTitle}</h2>
      {comparison.task.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
      <p className="comparison-feature__pricing">If Flash fits this kind of work, compare DeepSeek subscription prices and usage allowances on our <Link href="/pricing">Pricing page</Link>.</p>
    </section>

    <section className="comparison-feature__section">
      <h2>How much does each API cost?</h2>
      <p>USD per million tokens. The Flash column shows off-peak and peak rates. The OpenAI column shows Standard short-context rates for requests with up to 272,000 input tokens. Codex and third-party subscription allowances follow their own plan terms.</p>
      <div className="comparison-table-wrap" role="region" aria-label="Direct API token prices" tabIndex={0}>
        <table className="comparison-table">
          <thead><tr><th scope="col">Token type</th><th scope="col">Flash off-peak / peak</th><th scope="col">{model} Standard</th></tr></thead>
          <tbody>{priceRows.map(({ label, flash, gpt }) => <tr key={label}><th scope="row">{label}</th><td>{flash}</td><td>{gpt}</td></tr>)}</tbody>
        </table>
      </div>
      <p>DeepSeek&apos;s peak periods are 01:00 to 04:00 and 06:00 to 10:00 UTC on weekdays, excluding Chinese public holidays. For requests above 272,000 input tokens, OpenAI doubles input and cache rates and charges 1.5 times the Standard short-context output rate across the full request.</p>
      <h3>{example.label}</h3>
      <p>For {count.format(example.input)} uncached input tokens and {count.format(example.output)} billed output tokens, the token charge would be <strong>{requestCost(flashRates.offPeak)}</strong> for Flash off-peak, <strong>{requestCost(flashRates.peak)}</strong> for Flash peak, or <strong>{requestCost(rates)}</strong> for {model} at Standard rates.</p>
      <p>The example assumes one API request per model, with fixed token counts and uncached input. It excludes tools, retries, taxes, and review. Take the output count from the API usage response. A short answer can still include a sizable charge for generated tokens that the user never sees.</p>
      <h3>{comparison.costsTitle}</h3>
      {comparison.costs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
    </section>

    <section className="comparison-feature__section">
      <h2>What did the published coding benchmark measure?</h2>
      <p>On Artificial Analysis&apos;s FrontierCode-AA 2.0 evaluation, DeepSeek V4.1 Flash 1017 scored <strong>28.5%</strong> and {model} scored <strong>{comparison.frontierCode}%</strong> at their respective max reasoning settings. Artificial Analysis uses the Stirrup harness and grades 132 tasks involving changes to real repositories. The percentages are average rubric scores. Each model&apos;s max setting can use a different reasoning budget.</p>
      <p>{comparison.benchmarkReading}</p>
      <p>The scores come from the published evaluation. We did not run a separate head-to-head benchmark.</p>
    </section>

    <section className="comparison-feature__section">
      <h2>{comparison.workflowTitle}</h2>
      <ol>{comparison.workflow.map(({ title, text }) => <li key={title}><strong>{title}.</strong> {text}</li>)}</ol>
    </section>

    <ComparisonNavigation href={href} />
  </article>;
}

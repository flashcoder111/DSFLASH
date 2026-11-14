import Link from "next/link";
import ComparisonNavigation from "@/components/ComparisonNavigation";

type Props = { provider: "claude" | "gpt" };

export default function ModelComparisonArticle({ provider }: Props) {
  const isClaude = provider === "claude";
  const href = isClaude ? "/compare/deepseek-v4-flash-vs-claude" : "/compare/deepseek-v4-flash-vs-gpt-5-4";
  const title = isClaude ? "DeepSeek Flash vs Claude: API costs and choosing a model" : "DeepSeek Flash vs GPT-5.4: API costs and choosing a model";
  const rows = isClaude ? [
    ["Model / API ID", "V4.1 Flash 1017 / deepseek-flash", "Sonnet 4.6 / claude-sonnet-4-6", "Opus 4.7 / claude-opus-4-7"],
    ["Uncached input", "$0.15 off-peak / $0.30 peak", "$3", "$5"],
    ["Cached input / read", "$0.003 off-peak / $0.006 peak", "$0.30", "$0.50"],
    ["Output", "$0.60 off-peak / $1.20 peak", "$15", "$25"]
  ] : [
    ["Model / API ID", "V4.1 Flash 1017 / deepseek-flash", "GPT-5.4 / gpt-5.4"],
    ["Uncached input", "$0.15 off-peak / $0.30 peak", "$2.50"],
    ["Cached input", "$0.003 off-peak / $0.006 peak", "$0.25"],
    ["Output", "$0.60 off-peak / $1.20 peak", "$15"]
  ];
  return <article className="article-container comparison-feature">
    <header className="article-header">
      <Link href="/compare" className="comparison-feature__back">All comparisons</Link>
      <h1>{title}</h1>
      <p className="article-header__dek">For a direct API cost comparison, identify the exact model, request size and billing conditions first. DeepSeek&apos;s current Flash API route and {isClaude ? "Claude Sonnet 4.6 and Opus 4.7" : "GPT-5.4"} have different prices and operating conditions. We have not run a controlled quality comparison, so price alone does not establish which is better for your task.</p>
      <p className="article-header__meta">Provider documentation checked November 14, 2026 · No independent performance test</p>
    </header>
    <section className="comparison-feature__section">
      <h2>What is being compared?</h2>
      <p>This page previously compared the original DeepSeek V4 Flash with {isClaude ? "Claude Sonnet 4.6 and Opus 4.7" : "GPT-5.4"}. DeepSeek retired that Flash model and now routes the old <code>deepseek-v4-flash</code> API name to V4.1 Flash. The updated table uses the current <code>deepseek-flash</code> route; it does not imply that the retired and replacement models produced the same results.</p>
      <p>These figures concern direct provider APIs. They are not ChatGPT or Claude subscription prices, a third-party coding plan, or the cost of self-hosting. Access, available features, taxes and contract terms can differ by provider and customer.</p>
    </section>
    <section className="comparison-feature__section">
      <h2>How do the API token rates compare?</h2>
      <p>USD per million tokens, checked November 14, 2026. DeepSeek lists different peak and off-peak rates. {isClaude ? "Claude cache creation is billed separately from cache reads; the table shows cache-read prices, not cache-write prices." : "GPT-5.4 charges higher rates when input exceeds 272,000 tokens; the table shows its standard tier."} Prices and model availability can change.</p>
      <div className="comparison-table-wrap"><table className="comparison-table"><thead><tr><th scope="col">Rate or model</th><th scope="col">DeepSeek Flash</th><th scope="col">{isClaude ? "Claude Sonnet 4.6" : "GPT-5.4"}</th>{isClaude && <th scope="col">Claude Opus 4.7</th>}</tr></thead><tbody>{rows.map((row) => <tr key={row[0]}>{row.map((cell, index) => index === 0 ? <th scope="row" key={index}>{cell}</th> : <td key={index}>{cell}</td>)}</tr>)}</tbody></table></div>
      <p>DeepSeek&apos;s peak periods are 01:00–04:00 and 06:00–10:00 UTC on weekdays, excluding Chinese public holidays. Outside those periods the listed off-peak rates apply. {isClaude ? "For Sonnet 4.6, Anthropic lists cache writes at $3.75 per million input tokens for five minutes or $6 for one hour; different models and cache settings can have different terms." : "OpenAI lists a 1,050,000-token context window and 128,000 maximum output tokens for GPT-5.4; a context window is not an unconditional promise that both maxima fit simultaneously."}</p>
    </section>
    <section className="comparison-feature__section">
      <h2>What does an example request cost?</h2>
      <p>Assume 10,000 uncached input tokens and 2,000 output tokens per request, no cache hits, no tool fees and no retries. The calculations use DeepSeek&apos;s off-peak and the other provider&apos;s standard direct API rates:</p>
      <ul><li>DeepSeek Flash: 0.01 × $0.15 + 0.002 × $0.60 = <strong>$0.0027</strong>.</li>{isClaude ? <><li>Claude Sonnet 4.6: 0.01 × $3 + 0.002 × $15 = <strong>$0.06</strong>.</li><li>Claude Opus 4.7: 0.01 × $5 + 0.002 × $25 = <strong>$0.10</strong>.</li></> : <li>GPT-5.4: 0.01 × $2.50 + 0.002 × $15 = <strong>$0.055</strong>.</li>}</ul>
      <p>This is an arithmetic example, not a measured bill. At DeepSeek peak rates the Flash example is $0.0054. Different tokenizers or responses can produce different token counts for the same task. Cache writes, tools, retries, taxes, provider changes and human review are excluded.</p>
    </section>
    <section className="comparison-feature__section">
      <h2>How should you compare quality for your own work?</h2>
      <p>For a code review, use the same repository revision, issue description, tools and acceptance tests. For document analysis, use the same source material and check whether conclusions are supported by the supplied text. For tool use, log the calls and whether the final task was actually completed.</p>
      <ol><li>Record model ID, date, prompts, context, tools and reasoning settings.</li><li>Use a representative task set and the same grading rules, including failures and partial successes.</li><li>Measure latency and cost per accepted result, including retries and human correction time.</li><li>Repeat enough tasks to understand variability and avoid extrapolating from one example.</li></ol>
      <p>We have not run this comparative experiment. Vendor capabilities, price and context-window specifications are useful starting points, but none demonstrates a universal quality winner or the best price for your workload.</p>
    </section>
    <ComparisonNavigation href={href} />
  </article>;
}

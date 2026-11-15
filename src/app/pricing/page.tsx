import type { Metadata } from "next";
import Link from "next/link";
import {
  billingPeriods,
  catalogDate,
  checkoutUrl,
  periodOrder,
  plans,
  providerUrl
} from "./catalog";
import PlanPicker from "./plan-picker";
import styles from "./pricing.module.css";

const title = "DeepSeek Flash API Pricing & Subscription Plans";
const description =
  "Compare DeepSeek V4.1 Flash and V4 Pro API subscription plans, purchase periods and usage limits. Choose a plan and check out on DeepSeekSub.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/pricing" },
  openGraph: { type: "website", url: "/pricing", title, description }
};

export default function PricingPage() {
  return (
    <div className={`page-container ${styles.pricing}`}>
      <header className={styles.hero}>
        <p className="eyebrow">API subscriptions · Provided by DeepSeekSub</p>
        <h1>DeepSeek Flash API<br />subscription plans</h1>
        <p className={styles.heroDescription}>
          Use DeepSeek V4.1 Flash and V4 Pro in your coding tools, agents and apps.
          Compare plan prices and usage allowances for your workload.
        </p>
        <div className={styles.actions}>
          <a href="#plans" className={`${styles.button} ${styles.primaryButton}`}>
            Compare plans <span aria-hidden="true">↓</span>
          </a>
          <a href={`${providerUrl}/account/`} className={`${styles.button} ${styles.secondaryButton}`}>
            DeepSeekSub dashboard <span aria-hidden="true">↗</span>
          </a>
        </div>
        <p className={styles.mutedNote}>Choose your plan here, then sign in and pay on deepseeksub.com.</p>
      </header>

      <section className={styles.section} id="plans" aria-labelledby="plans-title">
        <h2 id="plans-title">Compare DeepSeek API plans</h2>
        <p className={styles.intro}>
          All four plans include Flash and Pro. Choose a billing period and the
          point allowances that fit your busiest sessions and typical week.
        </p>
        <PlanPicker />
        <p className={styles.mutedNote}>
          1M means one million plan points. Flash uses 1 point per token and
          V4 Pro uses 3.5. Rate and concurrency limits apply to every plan.
        </p>
        <p className={styles.mutedNote}>
          Prices checked <time dateTime={catalogDate}>November 16, 2026</time>.
          DeepSeekSub confirms the final price and availability at checkout.
          {" "}<a href={`${providerUrl}/subscription/`}>View current plans on DeepSeekSub ↗</a>
        </p>
        <details className={styles.details}>
          <summary>Compare all purchase options</summary>
          <div className={styles.tableScroll} role="region" aria-label="All plan prices in USD" tabIndex={0}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th scope="col">Plan</th>
                  {periodOrder.map((period) => (
                    <th scope="col" key={period}>
                      {period === "yearly" ? "Yearly total" : billingPeriods[period].label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {plans.map((plan) => (
                  <tr key={plan.product}>
                    <th scope="row">{plan.name}</th>
                    {periodOrder.map((period) => (
                      <td key={period}>
                        <a
                          href={checkoutUrl(plan.product, period)}
                          aria-label={`Buy ${plan.name} · ${billingPeriods[period].label} for ${plan.prices[period]} USD`}
                        >
                          {plan.prices[period]} <span aria-hidden="true">↗</span>
                        </a>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </details>
      </section>

      <section className={styles.section} aria-labelledby="steps-title">
        <h2 id="steps-title">From plan selection to your first request</h2>
        <ol className={styles.contentGrid}>
          <li>
            <h3>Choose your plan</h3>
            <p>Compare your peak five-hour usage and weekly total, then select a billing period.</p>
          </li>
          <li>
            <h3>Check out on DeepSeekSub</h3>
            <p>Buy opens the selected plan on DeepSeekSub. Sign in there and review your purchase before paying.</p>
          </li>
          <li>
            <h3>Connect your coding tool</h3>
            <p>Create an API key in your DeepSeekSub account, configure your client and send a short test request.</p>
          </li>
        </ol>
      </section>

      <section className={`${styles.section} ${styles.setup}`} aria-labelledby="setup-title">
        <div>
          <h2 id="setup-title">Connect to the DeepSeek Flash API</h2>
          <p className={styles.intro}>
            For an OpenAI-compatible client, add DeepSeekSub as a custom provider
            using the base URL and model IDs shown here. Keep the API key in your
            client’s credential store or environment.
          </p>
          <div className={styles.textLinks}>
            <a href={`${providerUrl}/docs/models/`}>API formats and models ↗</a>
            <a href={`${providerUrl}/account/keys/`}>Create an API key ↗</a>
          </div>
        </div>
        <dl className={styles.connection}>
          <div><dt>Base URL</dt><dd><code>https://api.deepseeksub.com/v1</code></dd></div>
          <div><dt>Flash model ID</dt><dd><code>deepseek-flash</code></dd></div>
          <div><dt>Pro model ID</dt><dd><code>deepseek-v4-pro</code></dd></div>
        </dl>
      </section>

      <section className={styles.section} aria-labelledby="workflows-title">
        <h2 id="workflows-title">Choose a plan for your workload</h2>
        <div className={styles.contentGrid}>
          <article>
            <h3>Coding and debugging</h3>
            <p>Base and Max cover different usage levels for interactive coding. Use your longest coding sessions to compare their five-hour allowances.</p>
            <Link href="/flash-vs-pro">Compare Flash and Pro →</Link>
          </article>
          <article>
            <h3>OpenClaw and agent workflows</h3>
            <p>Repeated tool calls and longer context can raise usage quickly. Check both allowance windows before running parallel agents.</p>
            <Link href="/openclaw-deepseek-flash">Read the OpenClaw guide →</Link>
          </article>
          <article>
            <h3>Pay-as-you-go comparison</h3>
            <p>If you use the API sporadically, estimate what your input, cached input and output would cost at per-token rates.</p>
            <Link href="/api-pricing">See per-token pricing →</Link>
          </article>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="faq-title">
        <h2 id="faq-title">Before you subscribe</h2>
        <div className={styles.faq}>
          <details className={styles.details}>
            <summary>Where do I buy and manage my DeepSeek API plan?</summary>
            <p>DeepSeekSub is the independent provider of these plans. Its checkout handles sign-in and payment. Use the <a href={`${providerUrl}/account/`}>DeepSeekSub dashboard</a> for your subscription, billing and API keys.</p>
          </details>
          <details className={styles.details}>
            <summary>How do the five-hour and seven-day allowances work?</summary>
            <p>Usage counts against both applicable point allowances. Ultra has an 8,400M seven-day allowance along with rate and concurrency limits. Your DeepSeekSub account shows usage and reset times. See <a href={`${providerUrl}/docs/usage-limits/`}>usage limits</a> for details.</p>
          </details>
          <details className={styles.details}>
            <summary>What happens when I reach a usage limit?</summary>
            <p>Plan usage can resume when the applicable allowance resets. If your key uses Auto mode and you have enabled credit fallback, eligible requests can use your separate API credit balance.</p>
          </details>
          <details className={styles.details}>
            <summary>How do renewal and cancellation work?</summary>
            <p>A one-time purchase covers one calendar month and ends automatically. Monthly and yearly subscriptions renew until canceled. See DeepSeekSub’s <a href={`${providerUrl}/refunds/`}>cancellation and refund terms</a>.</p>
          </details>
        </div>
        <div className={styles.textLinks}>
          <a href={`${providerUrl}/terms/`}>DeepSeekSub terms ↗</a>
          <a href={`${providerUrl}/docs/usage-limits/`}>Usage limits ↗</a>
        </div>
      </section>
    </div>
  );
}

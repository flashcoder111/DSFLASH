"use client";

import { useState } from "react";
import {
  billingPeriods,
  checkoutUrl,
  periodOrder,
  plans,
  type BillingPeriod
} from "./catalog";
import styles from "./pricing.module.css";

export default function PlanPicker() {
  const [period, setPeriod] = useState<BillingPeriod>("monthly");
  const billing = billingPeriods[period];

  return (
    <>
      <fieldset className={styles.periods} aria-describedby="billing-description">
        <legend className="sr-only">Billing period</legend>
        {periodOrder.map((option) => (
          <label key={option}>
            <input
              className="sr-only"
              type="radio"
              name="billing-period"
              value={option}
              checked={option === period}
              onChange={() => setPeriod(option)}
            />
            <span>{billingPeriods[option].label}</span>
          </label>
        ))}
      </fieldset>
      <p id="billing-description" className={styles.billingNote} aria-live="polite">
        {billing.description}
      </p>

      <div className={styles.planGrid}>
        {plans.map((plan) => (
          <article
            className={plan.highlighted ? `${styles.plan} ${styles.featuredPlan}` : styles.plan}
            key={plan.product}
          >
            <div className={styles.planName}>
              <h3>{plan.name}</h3>
              {plan.highlighted && <span>Recommended</span>}
            </div>
            <p className={styles.planDescription}>{plan.description}</p>
            <p className={styles.price}>
              <strong>{plan.prices[period]}</strong> <span>{billing.unit}</span>
            </p>
            <p className={styles.currency}>USD · {billing.label}</p>
            <dl className={styles.limits}>
              <div><dt>Per 5 hours</dt><dd>{plan.fiveHours}</dd></div>
              <div><dt>Per 7 days</dt><dd>{plan.sevenDays}</dd></div>
            </dl>
            <ul className={styles.features}>
              <li>DeepSeek V4.1 Flash</li>
              <li>DeepSeek V4 Pro</li>
              <li>API keys and usage dashboard</li>
            </ul>
            <a
              className={`${styles.button} ${plan.highlighted ? styles.primaryButton : styles.secondaryButton}`}
              href={checkoutUrl(plan.product, period)}
              aria-label={`Buy ${plan.name} · ${billing.label} on DeepSeekSub`}
            >
              Buy {plan.name} <span aria-hidden="true">↗</span>
            </a>
            <p className={styles.checkoutNote}>Checkout on deepseeksub.com</p>
          </article>
        ))}
      </div>
    </>
  );
}

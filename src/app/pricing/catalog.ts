export const providerUrl = "https://deepseeksub.com";

// Public DeepSeekSub catalog, checked on 2026-11-16.
export const catalogDate = "2026-11-16";

export const billingPeriods = {
  "one-time": {
    label: "One-time",
    unit: "once",
    description: "One calendar month of access. No automatic renewal."
  },
  monthly: {
    label: "Monthly",
    unit: "/ month",
    description: "Renews monthly until canceled."
  },
  yearly: {
    label: "Yearly",
    unit: "/ year",
    description: "The full annual price is charged upfront. Renews yearly until canceled."
  }
} as const;

export type BillingPeriod = keyof typeof billingPeriods;

export const periodOrder: BillingPeriod[] = ["one-time", "monthly", "yearly"];

export const plans = [
  {
    product: "dssub-pro",
    name: "Base",
    description: "For trying DeepSeek in your editor or running occasional tasks.",
    fiveHours: "60M",
    sevenDays: "400M",
    prices: { "one-time": "$29.90", monthly: "$19.90", yearly: "$179" },
    highlighted: false
  },
  {
    product: "dssub-max",
    name: "Max",
    description: "For daily coding, debugging and agent sessions.",
    fiveHours: "150M",
    sevenDays: "1,000M",
    prices: { "one-time": "$59.90", monthly: "$39.90", yearly: "$359" },
    highlighted: true
  },
  {
    product: "dssub-pro-max",
    name: "Pro Max",
    description: "For longer agent runs and more frequent use of V4 Pro.",
    fiveHours: "400M",
    sevenDays: "2,800M",
    prices: { "one-time": "$119.90", monthly: "$79.90", yearly: "$719" },
    highlighted: false
  },
  {
    product: "dssub-ultra",
    name: "Ultra",
    description: "For sustained workloads and larger bursts of activity.",
    fiveHours: "No cap",
    sevenDays: "8,400M",
    prices: { "one-time": "$499.00", monthly: "$329.00", yearly: "$2,990" },
    highlighted: false
  }
];

export function checkoutUrl(product: string, period: BillingPeriod) {
  return `${providerUrl}/checkout/?product=${product}-${period}`;
}

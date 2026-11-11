import type { Metadata } from "next";
import PolicyPage from "@/components/policy-page";

export const metadata: Metadata = {
  title: "Coding Plans",
  description: "Information about upcoming DeepSeek and multi-model coding plans.",
  alternates: { canonical: "/plans" }
};

export default function PlansPage() {
  return <PolicyPage eyebrow="Coding plans" title="Coding plans" lead="Our articles are free to read. Paid coding plans are planned for purchase directly on this site, but checkout is not yet available.">
    <h2>DeepSeek Coding Plans</h2>
    <p>Plans are intended to provide DeepSeek model access for coding workflows. Prices, billing periods, supported models, usage limits and availability will be shown here before purchases open.</p>
    <h2>Multi-Model Coding Plans</h2>
    <p>Plans are intended to provide access to more than one model for coding workflows. The included models, prices, billing periods, shared usage limits and availability will be published before purchases open.</p>
    <h2>Pricing and purchases</h2>
    <p>Plan pricing is being finalized. No orders or payments can be placed on this site yet. The API prices in our <a href="/pricing">provider pricing guide</a> are reference rates, not prices for our coding plans.</p>
    <p>Before any purchase, we will display the applicable price, renewal terms, product restrictions, delivery method and cancellation details. See our <a href="/terms">Terms of Service</a> for the proposed refund and cancellation terms.</p>
    <h2>Questions</h2>
    <p>For questions about coding plans, email <a href="mailto:hello@deepseekv4flash.com">hello@deepseekv4flash.com</a>. Please do not send passwords, API keys or payment-card details.</p>
  </PolicyPage>;
}

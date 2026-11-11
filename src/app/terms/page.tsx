import type { Metadata } from "next";
import PolicyPage from "@/components/policy-page";

export const metadata: Metadata = { title: "Terms of Service", description: "Terms of service for Open Source Model Blog and its digital products.", alternates: { canonical: "/terms" } };

export default function TermsPage() {
  return <PolicyPage eyebrow="Terms" title="Terms of Service" lead="Last updated November 11, 2026. These terms apply to your use of deepseekv4flash.com and any products offered through this site.">
    <h2>Our service and contact</h2>
    <p>Open Source Model Blog is an independent publication covering AI models and developer tools. Reading the public articles is free. We plan to offer paid digital model access and coding plans directly on this site; purchasing is not yet available. We are not affiliated with or endorsed by DeepSeek or other model providers. For product, billing or editorial questions, contact <a href="mailto:hello@deepseekv4flash.com">hello@deepseekv4flash.com</a>.</p>
    <h2>Using the site</h2>
    <p>By using the site, you agree to these terms. Do not interfere with the service, attempt unauthorized access, distribute malicious code, impersonate others, or use the service unlawfully. If an account is offered, keep its credentials secure and notify us of unauthorized access. We may restrict access to address abuse or security risks, subject to applicable law.</p>
    <h2>Paid products and pricing</h2>
    <p>Public editorial content is free and does not involve a purchase or refund. Coding plans are paid products. Pricing, billing periods, access limits and checkout will be published on our <a href="/plans">coding plans page</a> before sales begin. No payment is collected until a purchase is available and you choose to complete it.</p>
    <h2>Products and purchases</h2>
    <p>Before purchase, review the product description and checkout summary for the price, currency, taxes where applicable, access period, delivery method, endpoint, usage limits and any restrictions. Products may provide managed gateway access or a provider credential, depending on the offer. A purchase does not transfer an account with a model provider unless expressly stated. Product availability and upstream services may change.</p>
    <p>Digital access or credentials are delivered electronically after payment confirmation using the method stated at checkout. If an order is not delivered or access does not work as described, contact us with the order reference. Do not send passwords, API keys or full payment-card details.</p>
    <h2>Payments, renewal and cancellation</h2>
    <p>The checkout identifies the payment provider and seller for the transaction and any applicable provider terms. If an automatically renewing plan is offered, the price and billing interval will be shown before you agree to it. Renewal continues at the agreed interval until cancelled. Use the cancellation method shown in your purchase information or contact us if you need help. Cancellation stops future renewals; it does not by itself request a refund.</p>
    <h2>Refunds</h2>
    <p>For an annual coding plan, if you stop using it after a few months, you may request a refund of the remaining balance; months already used are charged at the monthly subscription rate. For other purchases, discretionary refunds are generally unavailable after access has been delivered and activated, subject to the terms shown at purchase and your mandatory legal rights. Digital delivery alone does not waive a statutory right of withdrawal, refund or remedy. Any required notice and express confirmation for a withdrawal exception must be obtained separately.</p>
    <p>To request a refund or report a duplicate payment, an undelivered order or an access problem, email us with the order reference. We review requests against the relevant payment and delivery records and work through the original payment provider where applicable.</p>
    <h2>Acceptable use and intellectual property</h2>
    <p>Use purchased access in accordance with the product restrictions and applicable upstream provider terms. Do not resell, redistribute or share credentials without authorization. Original writing and diagrams on this site may not be republished in full without prior written permission unless otherwise stated. Third-party names, logos and materials remain subject to their owners’ rights and terms.</p>
    <h2>Violations and termination</h2>
    <p>If you breach these terms, including by republishing protected content without permission, misusing credentials or interfering with the service, we may request that you stop the activity, remove or restrict access, or suspend or terminate the relevant service as appropriate and permitted by law. We may seek other remedies available under applicable law. Mandatory consumer rights and remedies remain unaffected.</p>
    <h2>Editorial information and external links</h2>
    <p>Editorial content is provided for general information, not as legal, investment or other professional advice. Model specifications, pricing and availability can change; verify material decisions against the relevant provider documentation. External sites and separately operated products have their own terms and privacy practices.</p>
    <h2>Disclaimer and liability</h2>
    <p>To the extent permitted by law, the site and its informational content are provided without guarantees of uninterrupted availability or accuracy. We are not liable for indirect or consequential losses arising from use of the service to the extent such limitations are permitted by law. Nothing in these terms excludes rights, remedies or liabilities that cannot lawfully be excluded.</p>
    <h2>Changes and disputes</h2>
    <p>We may update these terms and will revise the date above. Where required, we will provide additional notice or obtain acceptance before material changes take effect. Changes do not retrospectively alter an existing purchase’s agreed price, access period or mandatory legal rights. Contact us to seek a resolution; this does not prevent you from exercising legal rights or bringing a claim in a court with jurisdiction.</p>
  </PolicyPage>;
}

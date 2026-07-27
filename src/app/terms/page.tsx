import type { Metadata } from "next";
import PolicyPage from "@/components/policy-page";

export const metadata: Metadata = { title: "Terms", description: "Terms of use for Open Source Model Blog.", alternates: { canonical: "/terms" } };

export default function TermsPage() {
  return <PolicyPage eyebrow="Terms" title="Terms of use" lead="Last updated July 27, 2026. This publication provides editorial information and links to original sources; it is not an API provider, investment adviser, legal adviser or model vendor.">
    <h2>Editorial information</h2>
    <p>Model specifications, availability, pricing, benchmarks and research results can change. Content is provided for general information. Before making a technical, commercial, legal or product decision, verify it against the relevant provider documentation and your own requirements.</p>
    <h2>Intellectual property and attribution</h2>
    <p>Original sources, provider documentation, logos, screenshots and other third-party materials remain subject to their owners’ terms. Our editorial summaries do not transfer ownership or grant permission to reuse third-party material. Unless otherwise stated, original writing and diagrams on this site may not be republished in full without prior written permission.</p>
    <h2>External links and products</h2>
    <p>This site may link to external documentation, repositories and separately operated products. A link does not constitute an endorsement, and we are not responsible for the availability, content, privacy practices or transactions of external sites.</p>
    <h2>Changes to this site</h2>
    <p>We may update, correct, remove or reorganize content and these terms as the site changes. The date above indicates the most recent policy revision.</p>
    <h2>Contact</h2>
    <p>Questions about these terms can be sent to <a href="mailto:hello@deepseekflash.com">hello@deepseekflash.com</a>.</p>
  </PolicyPage>;
}

import type { Metadata } from "next";
import PolicyPage from "@/components/policy-page";

export const metadata: Metadata = { title: "Privacy Policy", description: "Privacy policy for Open Source Model Blog and its digital products.", alternates: { canonical: "/privacy" } };

export default function PrivacyPage() {
  return <PolicyPage eyebrow="Privacy" title="Privacy Policy" lead="Last updated November 11, 2026. This policy explains how information may be handled when you visit deepseekv4flash.com, contact us or purchase a product offered through the site.">
    <h2>Contact and responsibility</h2>
    <p>The operator of Open Source Model Blog is responsible for personal information it processes for this site. For privacy questions, complaints or requests, email <a href="mailto:hello@deepseekv4flash.com">hello@deepseekv4flash.com</a>. Payment providers and upstream model providers may also process information under their own notices.</p>
    <h2>Information we process</h2>
    <p>Our hosting or security providers may process IP address, browser type, referring page, requested URL and request time to deliver and protect the site. If you email us, we receive your email address, message and any information you choose to provide.</p>
    <p>If you purchase a product, the information involved may include your email address, order reference, product, amount, currency, payment and delivery status, and billing or renewal details. The checkout provider handles payment details under its own privacy notice. If account features are offered, account and authentication information may also be processed to provide access and secure the account.</p>
    <p>If a purchased product sends your prompts or other inputs to a model provider or intermediary, that provider processes the submitted content to generate a response. The product’s access method and the provider’s applicable terms govern that processing; we do not promise that every upstream provider retains no data.</p>
    <h2>How information is used and shared</h2>
    <p>Information is used as needed to operate and secure the site, respond to enquiries, process and deliver purchases, manage billing and support, prevent fraud, and comply with legal obligations. We may share necessary information with service providers that support hosting, email, payment, authentication or product delivery, and with authorities when legally required. We do not sell personal information.</p>
    <p>Where applicable law requires a legal basis, we rely on the basis appropriate to the activity, such as performing a contract, complying with a legal obligation, legitimate interests, or consent. Optional processing that requires consent will not be treated as authorized simply because you use the site.</p>
    <h2>Cookies and analytics</h2>
    <p>The public site does not require advertising or analytics cookies to be read. If analytics, advertising, checkout or other services using cookies or similar technologies are enabled, we will update this policy and provide notices and choices where required. Third-party services may use their own technologies under their policies.</p>
    <h2>Retention and security</h2>
    <p>We retain information for the time reasonably necessary for the purpose for which it was collected, including providing support and maintaining records, unless a longer period is needed for legal obligations, disputes or claims. Retention depends on the type of information, its purpose and applicable requirements. We use reasonable measures to protect information, but no transmission or storage method can be guaranteed completely secure.</p>
    <h2>Your choices and rights</h2>
    <p>Depending on applicable law, you may request access to or a copy of your information, correction, deletion, restriction or objection to processing, portability, an explanation of processing, or withdrawal of consent. To make a request, email us at the address above. We may need proportionate information to verify your identity. If a request cannot be fulfilled, we will explain why where required. You may also complain to a competent authority or seek a legal remedy.</p>
    <h2>International processing and external services</h2>
    <p>Our service providers may process information outside your country. Where applicable law requires specific disclosures, safeguards or separate consent for an international transfer, we will provide or obtain them before the transfer. External sites, payment providers and model providers have their own privacy notices; please review those relevant to your transaction or product.</p>
    <h2>Changes to this policy</h2>
    <p>We may update this policy and will change the date above. We will provide additional notice or obtain consent for material changes where required by law. Continued use alone does not replace consent where separate consent is required.</p>
  </PolicyPage>;
}

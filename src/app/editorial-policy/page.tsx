import type { Metadata } from "next";
import PolicyPage from "@/components/policy-page";

export const metadata: Metadata = { title: "Editorial & Sources Policy", description: "How Open Source Model Blog handles sources, corrections and updates.", alternates: { canonical: "/editorial-policy" } };

export default function EditorialPolicyPage() {
  return <PolicyPage eyebrow="Editorial policy" title="Sources are part of the article." lead="Every material claim should be traceable to source material that a reader can inspect.">
    <h2>Source hierarchy</h2>
    <p>We prioritise official announcements, API documentation, model cards, repositories and research papers. Public benchmark data and reputable reporting may add context when their methodology, authorship and limitations are clear.</p>
    <h2>Reporting, analysis and commercial links</h2>
    <p>When an article relies on reporting rather than a provider statement, it says so. Social posts, forums and other publications may suggest a topic, but are not presented as independently verified reporting without supporting evidence. Product links are clearly separated in the footer and do not determine article conclusions.</p>
    <h2>Corrections and updates</h2>
    <p>We add publication or last-checked dates to time-sensitive material where appropriate. A material correction changes the page and its source record. Availability, prices and benchmark claims are revisited when a relevant primary source changes.</p>
    <h2>Images and excerpts</h2>
    <p>We use original diagrams, assets we have permission to use, or official assets under their stated terms. We do not treat an image being publicly visible on social media, a forum or another publication as permission to reuse it.</p>
    <h2>Contact</h2>
    <p>To report an error or ask a sourcing question, email <a href="mailto:hello@deepseekflash.com">hello@deepseekflash.com</a> with the page URL and supporting source.</p>
  </PolicyPage>;
}

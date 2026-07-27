import type { Metadata } from "next";
import PolicyPage from "@/components/policy-page";

export const metadata: Metadata = {
  title: "About",
  description: "About Open Source Model Blog and its independent editorial approach.",
  alternates: { canonical: "/about" }
};

export default function AboutPage() {
  return <PolicyPage eyebrow="About" title="Independent reporting for the open-model ecosystem." lead="Open Source Model Blog is an independently operated editorial publication covering open-source and open-weight AI models, developer tooling and the evidence behind them.">
    <h2>What we cover</h2>
    <p>We cover model releases, documentation updates, research directions, developer tools and practical comparisons. The aim is to help readers understand what changed, what is documented and what remains uncertain—not to reproduce every announcement.</p>
    <h2>Editorial independence</h2>
    <p>This site is not affiliated with, endorsed by or speaking for any model provider, research lab, repository or platform. Editorial conclusions are made independently. Links to separately operated products are clearly presented as product links and do not determine article conclusions.</p>
    <h2>How we work</h2>
    <p>We start with primary materials such as official announcements, documentation, model cards, repositories and papers. Third-party evaluations and reporting are identified as such. Community discussion may suggest a topic, but it is not presented as independently verified reporting without supporting evidence.</p>
    <h2>Corrections and contact</h2>
    <p>For a factual correction, rights question or general editorial enquiry, email <a href="mailto:hello@deepseekflash.com">hello@deepseekflash.com</a>. Please include the relevant page URL and source material where possible.</p>
  </PolicyPage>;
}

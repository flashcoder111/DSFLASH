import type { Metadata } from "next";
import Link from "next/link";
import { Scale } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms of use for DSFlashHub: informational content only, no warranties, pricing subject to official sources, and intellectual property notes.",
  alternates: {
    canonical: "/terms"
  }
};

const sections = [
  {
    title: "1. What this site is",
    paragraphs: [
      "DSFlashHub (deepseekv4flash.com) publishes reference information about AI language models: pricing, specifications, setup guides, and comparisons. By using this site you accept these terms. If you do not accept them, do not use the site."
    ]
  },
  {
    title: "2. Informational content only",
    paragraphs: [
      "All content is provided for general information. It is not professional, legal, financial, or procurement advice. Model prices, specifications, availability, and behavior change frequently and are controlled by their respective vendors — always verify against the official source (linked on each page) before making purchasing or engineering decisions.",
      "Guides describe procedures that worked in the stated environment on the stated date. Running them on your systems is at your own risk; test in a non-production environment first."
    ]
  },
  {
    title: "3. No warranties",
    paragraphs: [
      "The site is provided \"as is\" and \"as available\", without warranties of any kind, express or implied, including accuracy, completeness, fitness for a particular purpose, and non-infringement. We correct errors when we find them or when readers report them, but we cannot guarantee any page is error-free at the moment you read it.",
      "To the maximum extent permitted by law, DSFlashHub and its operator are not liable for any damages arising from the use of, or inability to use, this site or the information on it."
    ]
  },
  {
    title: "4. External links",
    paragraphs: [
      "Pages link to third-party sites (official documentation, model cards, provider pricing pages, community resources). We do not control those sites and are not responsible for their content, availability, or policies."
    ]
  },
  {
    title: "5. Intellectual property",
    paragraphs: [
      "Original text, tables, and graphics on this site belong to DSFlashHub. You may quote reasonable excerpts with attribution and a link to the source page. Wholesale reproduction of pages requires written permission.",
      "\"DeepSeek\", \"OpenClaw\", \"GPT\", \"Claude\", \"Gemini\", \"Grok\" and all other product names are trademarks of their respective owners. They are used on this site for identification and comparison purposes only. DSFlashHub is not affiliated with, endorsed by, or sponsored by any of these companies or projects."
    ]
  },
  {
    title: "6. Advertising",
    paragraphs: [
      "This site may display third-party advertising (including Google AdSense). Advertisers are responsible for their own ad content. The presence of an advertisement is not an endorsement by DSFlashHub. See the Privacy Policy for how advertising cookies work."
    ]
  },
  {
    title: "7. Changes",
    paragraphs: [
      "We may update these terms as the site evolves. The current version is always at this URL with its last-updated date shown below. Continued use of the site after changes means you accept the updated terms."
    ]
  }
];

export default function TermsPage() {
  return (
    <>
      <section className="market-grid border-b border-white/10 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="inline-flex items-center gap-2 rounded-lg border border-cyan-300/30 bg-cyan-300/10 px-3 py-2 text-xs font-bold uppercase tracking-[0.14em] text-cyan-100">
            <Scale className="h-4 w-4" />
            Terms
          </p>
          <h1 className="mt-6 max-w-4xl text-4xl font-semibold text-white sm:text-6xl">
            Terms of Use
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-400">
            Plain-language terms for using DSFlashHub.
          </p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          {sections.map((section) => (
            <div key={section.title} className="mt-10 first:mt-0">
              <h2 className="text-2xl font-semibold text-white">
                {section.title}
              </h2>
              {section.paragraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 40)}
                  className="mt-4 text-base leading-8 text-slate-300"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          ))}

          <p className="mt-12 text-sm leading-7 text-slate-400">
            Questions? Use the{" "}
            <Link href="/contact" className="font-semibold text-cyan-200">
              contact page
            </Link>
            .
          </p>
          <p className="mt-4 text-xs text-slate-500">
            Last updated: 2026-07-02
          </p>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "What data DSFlashHub collects, how cookies and advertising (including Google AdSense) work on this site, and your privacy rights.",
  alternates: {
    canonical: "/privacy"
  }
};

const sections = [
  {
    title: "What we collect",
    paragraphs: [
      "DSFlashHub is a static content site. We do not require accounts, and we do not ask for personal information to read any page.",
      "Hosting infrastructure (Vercel) processes standard server logs — IP address, user agent, requested URL, and timestamp — to serve pages and protect against abuse. We may use privacy-focused, aggregate analytics to understand which pages are read; these analytics do not build individual visitor profiles.",
      "If you email us at hello@deepseekv4flash.com, we receive your email address and message content. We use it only to reply, and we do not add you to any mailing list."
    ]
  },
  {
    title: "Cookies and advertising",
    paragraphs: [
      "This site may display advertising served by Google AdSense. Third-party vendors, including Google, use cookies to serve ads based on your prior visits to this website or other websites. Google's use of advertising cookies (including the DoubleClick cookie) enables it and its partners to serve ads based on your visits to this site and/or other sites on the Internet.",
      "You may opt out of personalized advertising by visiting Google's Ads Settings at https://adssettings.google.com. Alternatively, you can opt out of some third-party vendors' use of cookies for personalized advertising at https://www.aboutads.info.",
      "Where required by law (including the EEA and UK), we display a consent banner before any advertising cookies are set, and ads are only personalized if you consent. You can change or withdraw your consent at any time through the banner's settings link."
    ]
  },
  {
    title: "Your rights (GDPR / CCPA)",
    paragraphs: [
      "If you are in the European Economic Area or the United Kingdom, you have the right to access, correct, delete, or restrict processing of your personal data, and the right to object to processing based on legitimate interest.",
      "If you are a California resident, you have the right to know what personal information is collected about you, to request its deletion, and to opt out of its sale. We do not sell personal information.",
      "To exercise any of these rights, email hello@deepseekv4flash.com. We respond within the timeframes required by applicable law."
    ]
  },
  {
    title: "Data retention and third parties",
    paragraphs: [
      "Server logs are retained by our hosting provider according to their standard retention schedule and are not separately archived by us. Contact emails are kept only as long as needed to resolve the conversation.",
      "We link to external sites (official documentation, model cards, provider pricing pages). This policy does not cover those sites; check their own privacy policies.",
      "Current third-party services used by this site: Vercel (hosting and infrastructure), and — once advertising is enabled — Google AdSense (advertising). We will update this list if it changes."
    ]
  },
  {
    title: "Changes to this policy",
    paragraphs: [
      "We may update this policy as the site's functionality changes (for example, when advertising goes live). Material changes are announced as a dated news item, and this page always shows its last-updated date below."
    ]
  }
];

export default function PrivacyPage() {
  return (
    <>
      <section className="market-grid border-b border-white/10 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="inline-flex items-center gap-2 rounded-lg border border-cyan-300/30 bg-cyan-300/10 px-3 py-2 text-xs font-bold uppercase tracking-[0.14em] text-cyan-100">
            <ShieldCheck className="h-4 w-4" />
            Privacy
          </p>
          <h1 className="mt-6 max-w-4xl text-4xl font-semibold text-white sm:text-6xl">
            Privacy Policy
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-400">
            The short version: no accounts, no tracking profiles, no data
            sales. Here is the full version.
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
            Questions about this policy? Use the{" "}
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

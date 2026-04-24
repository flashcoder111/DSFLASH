import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Languages } from "lucide-react";
import PricingTable from "@/components/PricingTable";
import SectionHeading from "@/components/SectionHeading";
import {
  localeSamples,
  siteConfig,
  type LocaleSample
} from "@/lib/site-data";

type LocalePageProps = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return Object.keys(localeSamples).map((locale) => ({ locale }));
}

export async function generateMetadata({
  params
}: LocalePageProps): Promise<Metadata> {
  const { locale } = await params;
  const content = localeSamples[locale as LocaleSample] ?? localeSamples.zh;

  return {
    title: `${content.title} | ${content.label}`,
    description: content.description,
    alternates: {
      canonical: `/${locale}`
    }
  };
}

export default async function LocalizedSamplePage({ params }: LocalePageProps) {
  const { locale } = await params;
  const content = localeSamples[locale as LocaleSample] ?? localeSamples.zh;

  return (
    <>
      <section className="market-grid border-b border-white/10 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="inline-flex items-center gap-2 rounded-lg border border-cyan-300/30 bg-cyan-300/10 px-3 py-2 text-xs font-bold uppercase tracking-[0.14em] text-cyan-100">
            <Languages className="h-4 w-4" />
            {content.label} sample
          </p>
          <h1 className="mt-6 max-w-4xl text-4xl font-semibold text-white sm:text-6xl">
            {content.title}
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-400">
            {content.description}
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-cyan-300 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-200"
          >
            {content.cta}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Localized structure sample"
            title={siteConfig.title}
            description="This sample proves the project can host localized pages while keeping English as the canonical default content language."
          />
          <div className="mt-10">
            <PricingTable />
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { newsItems, siteConfig } from "@/lib/site-data";

type NewsPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return newsItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params
}: NewsPageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = newsItems.find((entry) => entry.slug === slug);

  if (!item) {
    return { title: "News item not found" };
  }

  return {
    title: item.title,
    description: item.summary,
    alternates: {
      canonical: `/news/${item.slug}`
    },
    openGraph: {
      type: "article",
      title: item.title,
      description: item.summary,
      publishedTime: item.date
    }
  };
}

export default async function NewsArticlePage({ params }: NewsPageProps) {
  const { slug } = await params;
  const item = newsItems.find((entry) => entry.slug === slug);

  if (!item) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: item.title,
    description: item.summary,
    datePublished: item.date,
    dateModified: item.date,
    url: `${siteConfig.url}/news/${item.slug}`,
    author: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="market-grid border-b border-white/10 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-200"
          >
            <ArrowLeft className="h-4 w-4" />
            All news
          </Link>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-slate-500">
            <span>{item.date}</span>
            <span className="rounded-md bg-white/[0.05] px-2 py-1 text-cyan-100">
              {item.tag}
            </span>
          </div>
          <h1 className="mt-4 text-3xl font-semibold text-white sm:text-5xl">
            {item.title}
          </h1>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          {item.body.map((paragraph) => (
            <p
              key={paragraph.slice(0, 40)}
              className="mt-6 text-base leading-8 text-slate-300 first:mt-0"
            >
              {paragraph}
            </p>
          ))}

          {item.sourceHref ? (
            <div className="mt-10 rounded-lg border border-white/10 bg-[#0d141c] p-5">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-300">
                Primary source
              </div>
              <a
                href={item.sourceHref}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-cyan-200"
              >
                {item.sourceLabel ?? item.sourceHref}
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          ) : null}

          <p className="mt-10 text-xs text-slate-500">
            Last verified: {item.date} · Numbers are checked against the linked
            primary source on the publication date.
          </p>
        </div>
      </section>
    </>
  );
}

import type { MetadataRoute } from "next";
import { articles, comparisons, models, siteConfig, topics } from "@/lib/blog-data";
import { importedDeepSeekNews } from "@/lib/deepseek-imported-news";
import { newsItems } from "@/lib/site-data";

function sitemapDate(value: string): string | undefined {
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const written = /^(\w+) (\d{1,2}), (\d{4})$/.exec(value);
  const iso = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);
  const year = Number(written ? written[3] : iso?.[1]);
  const month = written ? months.indexOf(written[1]) + 1 : Number(iso?.[2]);
  const day = Number(written ? written[2] : iso?.[3]);
  if (!year || month < 1 || month > 12 || !day) return undefined;
  const date = new Date(Date.UTC(year, month - 1, day));
  if (date.getUTCFullYear() !== year || date.getUTCMonth() !== month - 1 || date.getUTCDate() !== day) return undefined;
  return date.toISOString().slice(0, 10);
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/china-models", "/global-models", "/github-radar", "/topics", "/models", "/compare", "/deepseek", "/about", "/contact", "/plans", "/editorial-policy", "/privacy", "/terms"];
  return [
    ...staticRoutes.map((route) => ({ url: `${siteConfig.url}${route}` })),
    ...topics.map((topic) => ({ url: `${siteConfig.url}/topics/${topic.slug}` })),
    ...models.map((model) => ({ url: `${siteConfig.url}/models/${model.slug}` })),
    ...comparisons.map((comparison) => ({ url: `${siteConfig.url}/compare/${comparison.slug}`, lastModified: sitemapDate(comparison.date) })),
    ...articles.map((article) => ({ url: `${siteConfig.url}/articles/${article.slug}`, lastModified: sitemapDate(article.updated) })),
    ...[...newsItems, ...importedDeepSeekNews].map((item) => ({ url: `${siteConfig.url}/deepseek/${item.slug}`, lastModified: sitemapDate(item.date) }))
  ];
}

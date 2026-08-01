import type { MetadataRoute } from "next";
import { articles, models, siteConfig, topics } from "@/lib/blog-data";
import { importedDeepSeekNews } from "@/lib/deepseek-imported-news";
import { newsItems } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/china-models", "/global-models", "/github-radar", "/topics", "/models", "/compare", "/compare/kimi-k3-vs-qwen35", "/deepseek", "/about", "/editorial-policy", "/privacy", "/terms"];
  return [
    ...staticRoutes.map((route) => ({ url: `${siteConfig.url}${route}`, lastModified: "2026-07-24", changeFrequency: route === "" ? "daily" as const : "weekly" as const, priority: route === "" ? 1 : 0.7 })),
    ...topics.map((topic) => ({ url: `${siteConfig.url}/topics/${topic.slug}`, lastModified: "2026-07-24", changeFrequency: "weekly" as const, priority: 0.7 })),
    ...models.map((model) => ({ url: `${siteConfig.url}/models/${model.slug}`, lastModified: "2026-07-24", changeFrequency: "weekly" as const, priority: 0.7 })),
    ...articles.map((article) => ({ url: `${siteConfig.url}/articles/${article.slug}`, lastModified: article.updated, changeFrequency: "weekly" as const, priority: 0.8 })),
    ...[...newsItems, ...importedDeepSeekNews].map((item) => ({ url: `${siteConfig.url}/deepseek/${item.slug}`, lastModified: item.date, changeFrequency: "weekly" as const, priority: 0.8 }))
  ];
}

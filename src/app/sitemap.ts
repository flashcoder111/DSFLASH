import type { MetadataRoute } from "next";
import { guidePages, newsItems, siteConfig } from "@/lib/site-data";

const staticRoutes = [
  "",
  "/deepseek-v4-flash",
  "/openclaw",
  "/openclaw-deepseek-flash",
  "/flash-vs-pro",
  "/api-routing",
  "/benchmarks",
  "/pricing",
  "/compare",
  "/models",
  "/news",
  "/guides",
  "/faq",
  "/about",
  "/contact",
  "/privacy",
  "/terms",
  "/zh",
  "/ja"
];

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    ...staticRoutes,
    ...guidePages.map((page) => page.href),
    ...newsItems.map((item) => `/news/${item.slug}`)
  ];

  const unique = Array.from(new Set(routes));

  return unique.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: siteConfig.lastVerified,
    changeFrequency:
      route === "" || route === "/news" ? ("daily" as const) : ("weekly" as const),
    priority: route === "" ? 1 : 0.8
  }));
}

import type { MetadataRoute } from "next";
import { contentPages, siteConfig } from "@/lib/site-data";

const routes = [
  "",
  "/pricing",
  "/compare",
  "/models",
  "/news",
  "/faq",
  "/zh",
  "/ja",
  ...contentPages.map((page) => page.href)
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: siteConfig.lastVerified,
    changeFrequency: route === "" || route === "/news" ? "daily" : "weekly",
    priority: route === "" ? 1 : 0.8
  }));
}

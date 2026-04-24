import type { Metadata, Viewport } from "next";
import SiteFrame from "@/components/SiteFrame";
import { siteConfig } from "@/lib/site-data";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.title} | ${siteConfig.name}`,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  keywords: [
    "DeepSeek V4",
    "DeepSeek V4 Flash",
    "DeepSeek V4 Flash pricing",
    "DeepSeek V4 Flash OpenClaw",
    "OpenClaw DeepSeek",
    "OpenClaw adapter",
    "DeepSeek V4 Pro",
    "DeepSeek V4 vs GPT",
    "DeepSeek V4 vs Claude",
    "DeepSeek V4 vs Gemini",
    "AI model price comparison",
    "LLM pricing 2026"
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  openGraph: {
    type: "website",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.title} | ${siteConfig.name}`,
    description: siteConfig.description,
    images: [
      {
        url: "/deepseek-v4-market-map.png",
        width: 1600,
        height: 900,
        alt: "DeepSeek V4 price and model comparison market map"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.title} | ${siteConfig.name}`,
    description: siteConfig.description,
    images: ["/deepseek-v4-market-map.png"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#080b10"
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      description: siteConfig.description
    },
    {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url
    }
  ]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SiteFrame>{children}</SiteFrame>
      </body>
    </html>
  );
}

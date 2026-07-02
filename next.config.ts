import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true
  },
  async redirects() {
    return [
      {
        source: "/use-cases",
        destination: "/guides",
        permanent: true
      },
      {
        source: "/migration",
        destination: "/guides/deepseek-chat-migration",
        permanent: true
      }
    ];
  }
};

export default nextConfig;

import type { Metadata } from "next";
import RadarList from "@/components/RadarList";
import { radarItems } from "@/lib/blog-data";

export const metadata: Metadata = { title: "GitHub Radar", description: "A reviewed radar for open-model repositories, inference projects, and agent infrastructure.", alternates: { canonical: "/github-radar" } };

export default function GitHubRadarPage() {
  return <div className="page-container"><header className="page-intro"><p className="eyebrow">Open Source Radar</p><h1>GitHub Radar</h1><p>A reviewed watchlist for repositories that matter to the open-model ecosystem. Star counts and repository update times make it easy to compare the projects readers are watching.</p></header><RadarList items={radarItems} /></div>;
}

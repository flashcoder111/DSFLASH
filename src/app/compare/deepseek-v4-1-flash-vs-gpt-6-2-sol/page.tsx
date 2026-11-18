import type { Metadata } from "next";
import Gpt62ComparisonArticle from "@/components/Gpt62ComparisonArticle";
import { gpt62ComparisonDate, gpt62Comparisons } from "@/lib/gpt-6-2-comparisons";

const comparison = gpt62Comparisons.sol;

export const metadata: Metadata = {
  title: comparison.title,
  description: comparison.description,
  alternates: { canonical: comparison.href },
  openGraph: { type: "article", url: comparison.href, title: comparison.title, description: comparison.description, modifiedTime: gpt62ComparisonDate }
};

export default function FlashVsGpt62SolPage() {
  return <Gpt62ComparisonArticle comparison={comparison} />;
}

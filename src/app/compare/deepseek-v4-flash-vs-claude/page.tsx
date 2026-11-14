import type { Metadata } from "next";
import ModelComparisonArticle from "@/components/ModelComparisonArticle";

export const metadata: Metadata = {
  title: "DeepSeek Flash vs Claude: API Costs and Choosing a Model",
  description: "Compare DeepSeek Flash with Claude Sonnet 4.6 and Opus 4.7 direct API rates, billing conditions and evaluation methods.",
  alternates: { canonical: "/compare/deepseek-v4-flash-vs-claude" }
};

export default function FlashVsClaudePage() {
  return <ModelComparisonArticle provider="claude" />;
}

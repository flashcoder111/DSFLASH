import type { Metadata } from "next";
import ModelComparisonArticle from "@/components/ModelComparisonArticle";

export const metadata: Metadata = {
  title: "DeepSeek Flash vs GPT-5.4: API Costs and Choosing a Model",
  description: "Compare DeepSeek Flash and GPT-5.4 direct API rates, billing conditions and evaluation methods.",
  alternates: { canonical: "/compare/deepseek-v4-flash-vs-gpt-5-4" }
};

export default function FlashVsGptPage() {
  return <ModelComparisonArticle provider="gpt" />;
}

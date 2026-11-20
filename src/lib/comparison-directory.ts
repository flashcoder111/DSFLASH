import { comparisons } from "@/lib/blog-data";
import { modelComparisonDateLabel, modelComparisons } from "@/lib/model-comparisons";

export const comparisonDirectory = [
  ...modelComparisons.map(({ href, title, description }) => ({ href, title, description, category: "model" as const, date: modelComparisonDateLabel, label: "Documentation and benchmark review" })),
  { href: "/flash-vs-pro", title: "DeepSeek Flash vs Pro: model changes and API costs", description: "A current direct-API comparison of model changes, capabilities and token pricing.", category: "model" as const, date: "November 14, 2026" },
  { href: "/compare/deepseek-v4-flash-vs-claude", title: "DeepSeek Flash vs Claude: API costs and choosing a model", description: "Compare Flash with Sonnet 4.6 and Opus 4.7 using direct-API rates and an evaluation framework.", category: "model" as const, date: "November 14, 2026" },
  { href: "/compare/deepseek-v4-flash-vs-gpt-5-4", title: "DeepSeek Flash vs GPT-5.4: API costs and choosing a model", description: "Compare direct-API rates, billing conditions and task evaluation methods.", category: "model" as const, date: "November 14, 2026" },
  ...comparisons.map((item) => ({ href: `/compare/${item.slug}`, title: item.title, description: item.dek, category: "tools" as const, date: "November 14, 2026", label: item.label }))
];

export function comparisonNeighbors(href: string) {
  const index = comparisonDirectory.findIndex((item) => item.href === href);
  return index < 0 ? null : { previous: comparisonDirectory[index - 1], next: comparisonDirectory[index + 1] };
}

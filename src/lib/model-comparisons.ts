export const modelComparisonDate = "2026-11-20";
export const modelComparisonDateLabel = "November 20, 2026";

export const modelComparisons = ([
  {
    slug: "deepseek-v4-1-flash-vs-gemini-4-neon",
    title: "DeepSeek V4.1 Flash vs Gemini 4 Neon: Cost, multimodal input and coding",
    description: "A practical comparison of two hosted models for teams working with code, long documents and media.",
    model: "gemini"
  },
  {
    slug: "deepseek-v4-1-flash-vs-gpt-6-2-sol",
    title: "DeepSeek V4.1 Flash vs GPT-6.2 Sol: API cost, coding and context",
    description: "A guide to everyday model selection, including cache charges and long-context pricing.",
    model: "gpt"
  },
  {
    slug: "deepseek-v4-1-flash-vs-gpt-6-2-astra",
    title: "DeepSeek V4.1 Flash vs GPT-6.2 Astra: Is the premium worth it?",
    description: "A cost and evaluation guide for complex coding, long-running agents and high-stakes review.",
    model: "gpt"
  },
  {
    slug: "deepseek-v4-1-flash-vs-qwen4-max",
    title: "DeepSeek V4.1 Flash vs Qwen4-Max: Pricing, video and coding compared",
    description: "Compare the production Qwen4-Max API with DeepSeek Flash using the regions and billing terms that matter.",
    model: "qwen"
  }
] as const).map((item) => ({ ...item, href: `/compare/${item.slug}` }));

export type ModelComparison = (typeof modelComparisons)[number];

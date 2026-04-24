export const siteConfig = {
  name: "DSFlashHub",
  title: "DeepSeek V4 Flash & OpenClaw Intelligence",
  url: "https://dsflashhub.com",
  description:
    "A DeepSeek V4 Flash information hub focused on pricing, OpenClaw adaptation, model comparisons, and practical routing decisions.",
  lastVerified: "2026-04-25"
};

export type PricingModel = {
  provider: "DeepSeek" | "OpenAI" | "Anthropic" | "Google" | "xAI";
  model: string;
  family: "DeepSeek V4" | "GPT" | "Claude" | "Gemini" | "Grok";
  tier: "Cost baseline" | "Frontier" | "Enterprise" | "Multimodal" | "Realtime";
  input: number;
  cachedInput: number | null;
  output: number;
  context: string;
  note: string;
  source: string;
};

export const pricingModels: PricingModel[] = [
  {
    provider: "DeepSeek",
    model: "V4 Flash",
    family: "DeepSeek V4",
    tier: "Cost baseline",
    input: 0.14,
    cachedInput: 0.028,
    output: 0.28,
    context: "1M",
    note: "Primary DSFlashHub route for OpenClaw adaptation, search, summarization, batch code assistance, and routine agent traffic.",
    source: "DeepSeek API Docs"
  },
  {
    provider: "DeepSeek",
    model: "V4 Pro",
    family: "DeepSeek V4",
    tier: "Frontier",
    input: 1.74,
    cachedInput: 0.145,
    output: 3.48,
    context: "1M",
    note: "Official V4 Pro rate: $0.145 cache hit, $1.74 cache miss input, $3.48 output per 1M tokens. Use it as an escalation route, not the default story.",
    source: "DeepSeek API Docs"
  },
  {
    provider: "OpenAI",
    model: "GPT-5.4",
    family: "GPT",
    tier: "Frontier",
    input: 2.5,
    cachedInput: 0.25,
    output: 15,
    context: "Short / long tiers",
    note: "Strong closed-model quality baseline. Use it when you need broad ecosystem compatibility or client-requested GPT output.",
    source: "OpenAI Pricing"
  },
  {
    provider: "Anthropic",
    model: "Claude Opus 4.7 / 4.6",
    family: "Claude",
    tier: "Enterprise",
    input: 5,
    cachedInput: 0.5,
    output: 25,
    context: "1M",
    note: "Enterprise-grade review, analysis, and code-agent reference route. Expensive enough to reserve for high-value tasks.",
    source: "Anthropic Pricing"
  },
  {
    provider: "Anthropic",
    model: "Claude Sonnet 4.6",
    family: "Claude",
    tier: "Enterprise",
    input: 3,
    cachedInput: 0.3,
    output: 15,
    context: "1M",
    note: "Claude's more practical default route when a team wants Anthropic behavior without Opus-level spend.",
    source: "Anthropic Pricing"
  },
  {
    provider: "Google",
    model: "Gemini 3.1 Pro Preview",
    family: "Gemini",
    tier: "Multimodal",
    input: 2,
    cachedInput: 0.2,
    output: 12,
    context: "1M",
    note: "$12/M is Gemini output pricing, not DeepSeek V4 Pro pricing. Best used as a multimodal and Google-ecosystem comparison point.",
    source: "Google AI Pricing"
  },
  {
    provider: "xAI",
    model: "Grok 4.20",
    family: "Grok",
    tier: "Realtime",
    input: 2,
    cachedInput: null,
    output: 6,
    context: "2M",
    note: "Useful reference for realtime, agentic, and large-context Grok workflows. xAI pricing tables are dynamic, so verify in the xAI console before launch.",
    source: "xAI Models and Pricing"
  }
];

export const deepSeekSpecs = [
  {
    label: "API model IDs",
    value: "deepseek-v4-flash / deepseek-v4-pro",
    detail:
      "Use deepseek-v4-flash as the default model ID in the DSFlashHub content stack; reserve deepseek-v4-pro for explicit escalation."
  },
  {
    label: "Context length",
    value: "1M tokens",
    detail: "V4 Flash and V4 Pro both publish a 1M-token context window."
  },
  {
    label: "Max output",
    value: "384K tokens",
    detail: "The model card lists a 384K maximum output length."
  },
  {
    label: "Reasoning modes",
    value: "Non-think / Think / Think Max",
    detail:
      "Both Flash and Pro expose non-thinking and thinking modes; Think Max is reserved for the hardest reasoning cases."
  },
  {
    label: "Open weights",
    value: "MIT licensed weights",
    detail:
      "The Hugging Face model card lists open weights and links to the V4 technical report."
  },
  {
    label: "Architecture",
    value: "MoE + hybrid attention",
    detail:
      "V4 Pro is listed as 1.6T total / 49B active; V4 Flash is listed as 284B total / 13B active."
  }
];

export const comparisonMatrix = [
  {
    family: "DeepSeek V4",
    bestFor: "Flash-first production routing and OpenClaw adaptation",
    recommended: "V4 Flash as the primary route; V4 Pro only for hard escalation",
    priceSignal: "Flash $0.14 input, $0.028 cache hit, $0.28 output per 1M tokens",
    caveat:
      "Do not make Pro the headline. Flash is the product story; Pro is an upgrade path."
  },
  {
    family: "GPT",
    bestFor: "General frontier baseline and GPT-compatible customer requirements",
    recommended: "GPT-5.4",
    priceSignal: "$2.50 input, $15 output per 1M tokens",
    caveat:
      "Good quality baseline, but not the cheapest default route for high-volume text workloads."
  },
  {
    family: "Claude",
    bestFor: "Enterprise review, writing, and code-agent workflows",
    recommended: "Claude Sonnet for default Anthropic routing; Opus for top-end review",
    priceSignal: "Sonnet $3/$15; Opus $5/$25 per 1M input/output",
    caveat:
      "Separate Claude's enterprise behavior from DeepSeek's cost advantage when building routing rules."
  },
  {
    family: "Gemini",
    bestFor: "Multimodal analysis, Google ecosystem work, and long-context checks",
    recommended: "Gemini 3.1 Pro Preview",
    priceSignal: "$2 input, $12 output per 1M tokens in the standard tier",
    caveat:
      "Prompt length tiers can change the effective price; check the Google table for >200K prompts."
  },
  {
    family: "Grok",
    bestFor: "Realtime, agentic, and xAI ecosystem workflows",
    recommended: "Grok 4.20",
    priceSignal: "$2 input, $6 output per 1M tokens as a current public reference",
    caveat:
      "xAI's pricing table is loaded dynamically; verify account-specific pricing before production use."
  }
];

export const comparisonUseCases = [
  {
    title: "OpenClaw default agent traffic",
    winner: "DeepSeek V4 Flash",
    reason:
      "At $0.14/M input and $0.28/M output, Flash is the route to adapt for OpenClaw's routine planning, summaries, search, and tool-call narration."
  },
  {
    title: "Hard reasoning and code review",
    winner: "DeepSeek V4 Pro + Claude/GPT audit",
    reason:
      "Use V4 Pro for low-cost hard tasks, then sample with Claude Opus or GPT-5.4 when quality risk is high."
  },
  {
    title: "Multimodal product analysis",
    winner: "Gemini 3.1 Pro Preview",
    reason:
      "Gemini remains the stronger comparison point when image, video, and Google ecosystem features matter."
  },
  {
    title: "Realtime and agentic workflows",
    winner: "Grok 4.20",
    reason:
      "Grok belongs in the comparison set when teams care about realtime behavior, agentic tool calling, or xAI ecosystem fit."
  }
];

export const newsItems = [
  {
    title: "DSFlashHub shifts the main story to V4 Flash and OpenClaw adaptation",
    date: "2026-04-25",
    tag: "Editorial",
    summary:
      "The content cluster now treats V4 Flash as the primary product route and OpenClaw as a dedicated integration lane, with Pro documented as an escalation model.",
    href: "/openclaw-deepseek-flash"
  },
  {
    title: "DeepSeek V4 pricing page now lists Flash and Pro routes",
    date: "2026-04-24",
    tag: "Pricing",
    summary:
      "The official page separates cache hit, cache miss input, and output pricing for V4 Flash and V4 Pro. It also warns that older deepseek-chat and deepseek-reasoner aliases will eventually be deprecated.",
    href: "https://api-docs.deepseek.com/quick_start/pricing/"
  },
  {
    title: "DeepSeek V4 Flash and Pro weights are listed on Hugging Face",
    date: "2026-04-24",
    tag: "Release",
    summary:
      "The model card describes V4 as a preview release and lists Pro at 1.6T total / 49B active and Flash at 284B total / 13B active, both with 1M context.",
    href: "https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro"
  },
  {
    title: "Pricing correction: $12/M belongs to Gemini output, not DeepSeek Pro",
    date: "2026-04-24",
    tag: "Correction",
    summary:
      "DeepSeek V4 Pro is currently listed at $1.74/M input and $3.48/M output. Gemini 3.1 Pro Preview is the row with a $12/M standard output price.",
    href: "/pricing"
  }
];

export const sourceLinks = [
  {
    label: "DeepSeek API pricing",
    href: "https://api-docs.deepseek.com/quick_start/pricing/"
  },
  {
    label: "DeepSeek V4 model card",
    href: "https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro"
  },
  {
    label: "OpenClaw model docs",
    href: "https://docs.openclaw.ai/models"
  },
  {
    label: "OpenAI API pricing",
    href: "https://developers.openai.com/api/docs/pricing"
  },
  {
    label: "Anthropic API pricing",
    href: "https://platform.claude.com/docs/en/about-claude/pricing"
  },
  {
    label: "Gemini API pricing",
    href: "https://ai.google.dev/gemini-api/docs/pricing"
  },
  {
    label: "xAI models and pricing",
    href: "https://docs.x.ai/docs/models/"
  }
];

export const contentPages = [
  {
    href: "/deepseek-v4-flash",
    label: "V4 Flash",
    category: "Flash",
    title: "DeepSeek V4 Flash guide",
    description:
      "A dedicated guide for V4 Flash pricing, context, cache behavior, and why it should be the default DSFlashHub story."
  },
  {
    href: "/openclaw",
    label: "OpenClaw",
    category: "OpenClaw",
    title: "OpenClaw adaptation hub",
    description:
      "The OpenClaw landing page for DeepSeek V4 Flash positioning, adapter boundaries, routing policy, and integration notes."
  },
  {
    href: "/openclaw-deepseek-flash",
    label: "Flash + OpenClaw",
    category: "OpenClaw",
    title: "DeepSeek V4 Flash for OpenClaw",
    description:
      "A stronger standalone adaptation page for pairing OpenClaw workflows with DeepSeek V4 Flash as the default model route."
  },
  {
    href: "/flash-vs-pro",
    label: "Flash vs Pro",
    category: "Routing",
    title: "DeepSeek V4 Flash vs Pro",
    description:
      "A routing comparison that keeps Flash as the main production model and defines exactly when Pro should be used."
  },
  {
    href: "/api-routing",
    label: "API routing",
    category: "Routing",
    title: "DeepSeek V4 Flash API routing playbook",
    description:
      "Production routing rules for cache hits, retry policy, task classification, OpenClaw agent traffic, and fallback models."
  },
  {
    href: "/benchmarks",
    label: "Benchmarks",
    category: "Evaluation",
    title: "DeepSeek V4 Flash benchmark checklist",
    description:
      "A practical evaluation checklist for comparing Flash with GPT, Claude, Gemini, Grok, and Pro on real workloads."
  },
  {
    href: "/use-cases",
    label: "Use cases",
    category: "Use cases",
    title: "DeepSeek V4 Flash use cases",
    description:
      "Indexable use-case pages for search, summarization, code assistance, retrieval, OpenClaw agents, and batch analysis."
  },
  {
    href: "/migration",
    label: "Migration",
    category: "Migration",
    title: "Migrate to DeepSeek V4 Flash",
    description:
      "Migration notes for moving old DeepSeek aliases and generic chat routes toward explicit V4 Flash and Pro model IDs."
  }
];

export const flashHighlights = [
  {
    title: "Flash is the primary route",
    value: "$0.14 / $0.28",
    description:
      "Use V4 Flash as the default model for OpenClaw agent traffic, search, summaries, retrieval responses, and high-volume API jobs."
  },
  {
    title: "Cache hits matter",
    value: "$0.028",
    description:
      "Cache-hit input pricing makes repeated OpenClaw planning context and retrieval scaffolds much cheaper when prompts are structured consistently."
  },
  {
    title: "Pro is escalation only",
    value: "$1.74 / $3.48",
    description:
      "V4 Pro remains useful, but DSFlashHub should present it as a hard-task fallback rather than the lead product route."
  }
];

export const openClawAdapterPoints = [
  {
    layer: "Default model route",
    recommendation: "Map routine OpenClaw chat, planning, and tool narration to deepseek-v4-flash.",
    reason:
      "This keeps high-frequency agent turns on the lowest DeepSeek V4 route while preserving the same model-family positioning."
  },
  {
    layer: "Escalation policy",
    recommendation: "Escalate to deepseek-v4-pro only for long reasoning, failed self-checks, or high-risk review.",
    reason:
      "Pro should improve difficult tasks without turning every OpenClaw request into a premium request."
  },
  {
    layer: "Prompt cache design",
    recommendation: "Keep OpenClaw system prompts, tool schemas, and retrieval wrappers stable across runs.",
    reason:
      "Stable prompt scaffolding is the direct path to cache-hit economics on repeated agent workflows."
  },
  {
    layer: "Comparison fallback",
    recommendation: "Keep GPT, Claude, Gemini, and Grok as explicit audit or customer-required routes.",
    reason:
      "The comparison layer should support routing decisions without weakening the Flash-first message."
  }
];

export const routePlaybook = [
  {
    task: "OpenClaw routine agent turns",
    defaultModel: "DeepSeek V4 Flash",
    escalation: "V4 Pro after repeated failed checks",
    metric: "Task completion cost, latency, retry rate"
  },
  {
    task: "Search and retrieval answers",
    defaultModel: "DeepSeek V4 Flash",
    escalation: "Claude/GPT sample audit for regulated pages",
    metric: "Citation quality, hallucination rate, cache hit ratio"
  },
  {
    task: "Code explanation and batch fixes",
    defaultModel: "DeepSeek V4 Flash",
    escalation: "V4 Pro for complex debugging plans",
    metric: "Accepted patch rate, follow-up turns, token cost"
  },
  {
    task: "Long-form strategy or policy review",
    defaultModel: "V4 Pro or Claude/GPT audit",
    escalation: "Human review",
    metric: "Review accuracy, missed risks, edit distance"
  }
];

export const localeSamples = {
  zh: {
    label: "中文",
    title: "DeepSeek V4 Flash 与 OpenClaw 适配资讯站",
    description:
      "这是多语言范例页。默认站点以英文为标准，中文页面保留相同的信息架构：Flash 价格、OpenClaw 适配、模型对比、发布动态和来源核对。",
    cta: "查看英文主页"
  },
  ja: {
    label: "日本語",
    title: "DeepSeek V4 Flash と OpenClaw 対応ハブ",
    description:
      "これは多言語サンプルページです。標準ページは英語で、Flash 価格、OpenClaw 対応、比較、ニュース、ソース確認の構造を各言語に展開できます。",
    cta: "英語ホームへ"
  }
} as const;

export type LocaleSample = keyof typeof localeSamples;

export function blendedCost(
  model: PricingModel,
  inputTokensInMillions: number,
  outputTokensInMillions: number,
  cacheHitRatio: number
) {
  const cachedRate = model.cachedInput ?? model.input;
  const blendedInputRate =
    model.input * (1 - cacheHitRatio) + cachedRate * cacheHitRatio;

  return (
    blendedInputRate * inputTokensInMillions +
    model.output * outputTokensInMillions
  );
}

export function formatUsd(value: number) {
  if (value < 1) {
    return `$${value.toFixed(3).replace(/0+$/, "").replace(/\.$/, "")}`;
  }

  return `$${value.toLocaleString("en-US", {
    maximumFractionDigits: 2
  })}`;
}

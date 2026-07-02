export const siteConfig = {
  name: "DSFlashHub",
  title: "DeepSeek V4 Flash Hub: Pricing, Guides & News",
  url: "https://deepseekv4flash.com",
  description:
    "DeepSeek V4 Flash pricing, local setup guides, OpenClaw integration, and model comparisons. Verified against official sources, updated weekly.",
  lastVerified: "2026-07-02"
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
    note: "The cheapest V4 route. Use it as your default for agent traffic, search, summarization, and batch code tasks.",
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
    note: "Official rate: $0.145 cache-hit, $1.74 cache-miss input, $3.48 output per 1M. Worth it for long reasoning and high-risk review, not routine traffic.",
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
    note: "Strong closed-model baseline. Pick it when you need broad ecosystem compatibility or a client asks for GPT output.",
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
    note: "Enterprise-grade review, analysis, and code-agent reference. Reserve it for tasks where a quality failure is expensive.",
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
    note: "The practical Anthropic default when you want Claude behavior without Opus-level spend.",
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
    note: "Note: $12/M is Gemini's output price, not DeepSeek V4 Pro's. Strongest for image, video, and Google-ecosystem work.",
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
    note: "Reference point for realtime and large-context agentic workflows. xAI pricing is dynamic; verify in the console before launch.",
    source: "xAI Models and Pricing"
  }
];

export const deepSeekSpecs = [
  {
    label: "API model IDs",
    value: "deepseek-v4-flash / deepseek-v4-pro",
    detail:
      "Set deepseek-v4-flash as your default model ID and call deepseek-v4-pro only on explicit escalation. Legacy aliases deepseek-chat and deepseek-reasoner retire on 2026-07-24."
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
      "Both Flash and Pro expose non-thinking and thinking modes; Think Max targets the hardest reasoning cases."
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
    bestFor: "Cost-first production routing and OpenClaw agent traffic",
    recommended: "V4 Flash by default; V4 Pro for hard escalation",
    priceSignal: "Flash $0.14 input, $0.028 cache hit, $0.28 output per 1M tokens",
    caveat:
      "Route by task, not by brand: Flash covers routine traffic, Pro picks up long reasoning and review."
  },
  {
    family: "GPT",
    bestFor: "General frontier baseline and GPT-compatible customer requirements",
    recommended: "GPT-5.4",
    priceSignal: "$2.50 input, $15 output per 1M tokens",
    caveat:
      "A solid quality baseline, but not the cheapest default for high-volume text workloads."
  },
  {
    family: "Claude",
    bestFor: "Enterprise review, writing, and code-agent workflows",
    recommended: "Claude Sonnet for default Anthropic routing; Opus for top-end review",
    priceSignal: "Sonnet $3/$15; Opus $5/$25 per 1M input/output",
    caveat:
      "Keep Claude's review strength and DeepSeek's cost advantage as separate routing rules rather than an either/or choice."
  },
  {
    family: "Gemini",
    bestFor: "Multimodal analysis, Google ecosystem work, and long-context checks",
    recommended: "Gemini 3.1 Pro Preview",
    priceSignal: "$2 input, $12 output per 1M tokens in the standard tier",
    caveat:
      "Prompt length tiers change the effective price; check the Google table for >200K prompts."
  },
  {
    family: "Grok",
    bestFor: "Realtime, agentic, and xAI ecosystem workflows",
    recommended: "Grok 4.20",
    priceSignal: "$2 input, $6 output per 1M tokens as a current public reference",
    caveat:
      "xAI's pricing table loads dynamically; verify account-specific pricing before production use."
  }
];

export const comparisonUseCases = [
  {
    title: "OpenClaw default agent traffic",
    winner: "DeepSeek V4 Flash",
    reason:
      "At $0.14/M input and $0.28/M output, Flash is the natural default for OpenClaw's routine planning, summaries, search, and tool-call narration."
  },
  {
    title: "Hard reasoning and code review",
    winner: "DeepSeek V4 Pro + Claude/GPT audit",
    reason:
      "Run V4 Pro for low-cost hard tasks, then sample-audit with Claude Opus or GPT-5.4 when quality risk is high."
  },
  {
    title: "Multimodal product analysis",
    winner: "Gemini 3.1 Pro Preview",
    reason:
      "Gemini is the stronger pick when image, video, and Google ecosystem features matter."
  },
  {
    title: "Realtime and agentic workflows",
    winner: "Grok 4.20",
    reason:
      "Grok fits teams that care about realtime behavior, agentic tool calling, or xAI ecosystem integration."
  }
];

export type NewsItem = {
  slug: string;
  title: string;
  date: string;
  tag: string;
  summary: string;
  body: string[];
  sourceLabel?: string;
  sourceHref?: string;
};

export const newsItems: NewsItem[] = [
  {
    slug: "deepseek-chat-retirement-countdown",
    title:
      "deepseek-chat and deepseek-reasoner retire on July 24 — check your model IDs now",
    date: "2026-07-02",
    tag: "API",
    summary:
      "DeepSeek's hosted API drops the legacy deepseek-chat and deepseek-reasoner aliases on 2026-07-24 at 15:59 UTC. After that, both IDs route to deepseek-v4-flash.",
    body: [
      "If your codebase still calls deepseek-chat or deepseek-reasoner, you have until 2026-07-24 15:59 UTC before those aliases stop meaning what you think they mean. After the cutoff, both legacy IDs route to deepseek-v4-flash.",
      "For most chat workloads this is a silent upgrade: Flash is cheaper than the old V3-era pricing and supports a 1M-token context. The risk sits with deepseek-reasoner users. If your pipeline depends on long chain-of-thought output, being silently routed to Flash's default non-thinking mode can change results without an error message. Move those calls to deepseek-v4-pro, or set Flash's thinking mode explicitly.",
      "The fix is usually a one-line change: keep your base URL, swap the model string. Our migration checklist covers the ID mapping table, SDK snippets, and the three failure modes we'd test for before the deadline."
    ],
    sourceLabel: "DeepSeek API pricing page",
    sourceHref: "https://api-docs.deepseek.com/quick_start/pricing/"
  },
  {
    slug: "ollama-adds-deepseek-v4-flash",
    title: "Ollama adds DeepSeek V4 Flash, including a one-line OpenClaw launch",
    date: "2026-07-02",
    tag: "Ecosystem",
    summary:
      "The official Ollama library now lists deepseek-v4-flash, and OpenClaw users can wire it up with a single launch command.",
    body: [
      "The official Ollama library now carries deepseek-v4-flash, which makes local and cloud-proxied experiments much less painful than hand-rolling GGUF downloads.",
      "The detail that matters for agent users: OpenClaw can be launched directly against the model with `ollama launch openclaw --model deepseek-v4-flash:cloud`. That one line replaces a manual gateway configuration and is currently the fastest way to test Flash as an OpenClaw default route.",
      "Local runs still have real hardware requirements — quantized builds start around 33 GB of VRAM. Our local setup guide breaks down the three hardware tiers and which quantization to pick for each."
    ],
    sourceLabel: "Ollama model library",
    sourceHref: "https://ollama.com/library/deepseek-v4-flash"
  },
  {
    slug: "deepseek-v4-may-june-2026-recap",
    title: "What changed for DeepSeek V4 in May and June 2026",
    date: "2026-07-02",
    tag: "Recap",
    summary:
      "Provider prices settled near $0.09–0.14 input, the July 24 alias retirement was confirmed, and the tooling ecosystem caught up.",
    body: [
      "Two months of smaller announcements add up. Here is what actually changed for V4 users since the April release, in order of budget impact.",
      "First, third-party pricing settled below the official rate: OpenRouter now lists V4 Flash at $0.089/M input and $0.18/M output against DeepSeek's own $0.14/$0.28. If you don't need first-party features like cache-hit billing, the proxy route is roughly 35% cheaper on input.",
      "Second, the July 24 retirement date for deepseek-chat and deepseek-reasoner was confirmed, turning a vague deprecation warning into a hard deadline.",
      "Third, tooling caught up: Ollama added V4 Flash to its official library, GGUF quantizations stabilized, and IDE integrations (Cursor, Cline, VS Code extensions) added V4 model IDs to their defaults. The practical effect: running Flash locally or in an agent stack no longer requires custom glue code."
    ],
    sourceLabel: "OpenRouter model page",
    sourceHref: "https://openrouter.ai/deepseek/deepseek-v4-flash"
  },
  {
    slug: "deepseek-v4-pricing-page-lists-flash-and-pro",
    title: "DeepSeek's pricing page now lists Flash and Pro as separate routes",
    date: "2026-04-24",
    tag: "Pricing",
    summary:
      "The official page separates cache-hit, cache-miss input, and output pricing for V4 Flash and V4 Pro, and warns that older aliases will be deprecated.",
    body: [
      "DeepSeek's official pricing page now shows V4 Flash and V4 Pro side by side, each with three numbers: cache-hit input, cache-miss input, and output per 1M tokens.",
      "Flash lands at $0.028 / $0.14 / $0.28 and Pro at $0.145 / $1.74 / $3.48. The 5× gap between cache-hit and cache-miss input is the detail worth engineering around: stable system prompts and tool schemas directly cut your input bill.",
      "The same page warns that the older deepseek-chat and deepseek-reasoner aliases will eventually be deprecated — a warning that has since become a hard date: 2026-07-24."
    ],
    sourceLabel: "DeepSeek API pricing page",
    sourceHref: "https://api-docs.deepseek.com/quick_start/pricing/"
  },
  {
    slug: "deepseek-v4-weights-on-hugging-face",
    title: "DeepSeek V4 Flash and Pro weights are listed on Hugging Face",
    date: "2026-04-24",
    tag: "Release",
    summary:
      "The model card describes V4 as a preview release: Pro at 1.6T total / 49B active, Flash at 284B total / 13B active, both with 1M context.",
    body: [
      "DeepSeek published open weights for both V4 models on Hugging Face under an MIT license, continuing the open-weights pattern from V3 and R1.",
      "The specs that matter for self-hosting: V4 Pro is a 1.6T-parameter MoE with 49B active parameters; V4 Flash is 284B total with 13B active. Both list a 1M-token context window and a 384K max output.",
      "At 284B total parameters, Flash is 'small' only by comparison — full-precision weights need roughly 170 GB of memory, and even aggressive quantization keeps you above 30 GB of VRAM. See our local setup guide for the tier-by-tier breakdown."
    ],
    sourceLabel: "DeepSeek V4 model card",
    sourceHref: "https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro"
  },
  {
    slug: "gemini-output-price-correction",
    title: "Pricing correction: $12/M belongs to Gemini output, not DeepSeek Pro",
    date: "2026-04-24",
    tag: "Correction",
    summary:
      "DeepSeek V4 Pro is listed at $1.74/M input and $3.48/M output. The $12/M figure circulating in some comparisons is Gemini 3.1 Pro Preview's output price.",
    body: [
      "Several early V4 comparison tables mixed up two numbers, so for the record: DeepSeek V4 Pro's official output price is $3.48 per 1M tokens. The $12/M figure belongs to Gemini 3.1 Pro Preview's standard output tier.",
      "The confusion matters because it inflates Pro's apparent cost by 3.4×, which changes routing math. At real prices, Pro is a viable escalation model for hard tasks; at the mistaken $12/M it would look like a luxury option.",
      "We keep every number on this site paired with its official source link — if you spot a mismatch, the source table on the pricing page is the fastest way to check."
    ],
    sourceLabel: "DeepSeek API pricing page",
    sourceHref: "https://api-docs.deepseek.com/quick_start/pricing/"
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
    label: "Ollama: deepseek-v4-flash",
    href: "https://ollama.com/library/deepseek-v4-flash"
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
      "Full specs, official pricing, cache-hit economics, and when Flash is enough — with escalation triggers for Pro."
  },
  {
    href: "/openclaw",
    label: "OpenClaw",
    category: "OpenClaw",
    title: "OpenClaw adaptation hub",
    description:
      "How to run OpenClaw on DeepSeek V4 Flash: model routing, adapter boundaries, and integration notes."
  },
  {
    href: "/openclaw-deepseek-flash",
    label: "Flash + OpenClaw",
    category: "OpenClaw",
    title: "DeepSeek V4 Flash for OpenClaw",
    description:
      "Set Flash as your OpenClaw default route: configuration, cache design, and escalation policy."
  },
  {
    href: "/flash-vs-pro",
    label: "Flash vs Pro",
    category: "Routing",
    title: "DeepSeek V4 Flash vs Pro",
    description:
      "When is 12× the output price worth it? Task-by-task routing rules with concrete escalation triggers."
  },
  {
    href: "/api-routing",
    label: "API routing",
    category: "Routing",
    title: "DeepSeek V4 Flash API routing playbook",
    description:
      "Production routing rules: cache hits, retry policy, task classification, agent traffic, and fallback models."
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
    href: "/guides/run-deepseek-v4-flash-locally",
    label: "Run locally",
    category: "Guides",
    title: "Run DeepSeek V4 Flash locally",
    description:
      "Ollama setup, GGUF quantization picks, and the three VRAM tiers — from 33 GB quantized to 170 GB full precision."
  },
  {
    href: "/guides/deepseek-chat-migration",
    label: "Migration",
    category: "Guides",
    title: "deepseek-chat retirement: migration checklist",
    description:
      "Legacy aliases retire on 2026-07-24. The ID mapping table, SDK changes, and failure modes to test before the deadline."
  }
];

export const guidePages = [
  {
    href: "/guides/deepseek-chat-migration",
    title: "deepseek-chat retires July 24: migration checklist",
    description:
      "Legacy IDs route to V4 Flash after 2026-07-24. Map your model IDs, update SDK calls, and test three failure modes.",
    tag: "Deadline"
  },
  {
    href: "/guides/run-deepseek-v4-flash-locally",
    title: "Run DeepSeek V4 Flash locally: Ollama + VRAM requirements",
    description:
      "Three hardware tiers (33 GB quantized / 80 GB FP8 / 170 GB full), Ollama commands, and GGUF quantization picks.",
    tag: "Local"
  },
  {
    href: "/guides/deepseek-v4-flash-api-quickstart",
    title: "DeepSeek V4 Flash API quickstart",
    description:
      "OpenAI-compatible setup in Python, TypeScript, and curl — plus cache-hit billing and the error codes you'll actually see.",
    tag: "API"
  },
  {
    href: "/compare/deepseek-v4-flash-vs-gpt-5-4",
    title: "DeepSeek V4 Flash vs GPT-5.4",
    description:
      "18–54× cheaper on paper. Where Flash actually holds up against GPT-5.4, and where it doesn't.",
    tag: "Compare"
  },
  {
    href: "/compare/deepseek-v4-flash-vs-claude",
    title: "DeepSeek V4 Flash vs Claude Sonnet & Opus",
    description:
      "Cost-first routing against Anthropic's review strength: prices, use cases, and a practical split.",
    tag: "Compare"
  }
];

export const legalPages = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Use" }
];

export const flashHighlights = [
  {
    title: "Flash is the default route",
    value: "$0.14 / $0.28",
    description:
      "Input and output per 1M tokens. Cheap enough to be the default for agent traffic, search, summaries, retrieval, and high-volume API jobs."
  },
  {
    title: "Cache hits cut input cost 5×",
    value: "$0.028",
    description:
      "Cache-hit input pricing rewards stable prompts: keep system prompts, tool schemas, and retrieval wrappers identical across runs and repeated context gets billed at 1/5 the rate."
  },
  {
    title: "Pro is for escalation",
    value: "$1.74 / $3.48",
    description:
      "V4 Pro earns its 12× output premium on long reasoning chains and high-risk review — put it behind an escalation rule, not in your default route."
  }
];

export const openClawAdapterPoints = [
  {
    layer: "Default model route",
    recommendation:
      "Map routine OpenClaw chat, planning, and tool narration to deepseek-v4-flash.",
    reason:
      "High-frequency agent turns stay on the lowest-cost V4 route without changing model families mid-conversation."
  },
  {
    layer: "Escalation policy",
    recommendation:
      "Escalate to deepseek-v4-pro only for long reasoning, failed self-checks, or high-risk review.",
    reason:
      "Pro improves hard tasks without turning every OpenClaw request into a premium request."
  },
  {
    layer: "Prompt cache design",
    recommendation:
      "Keep OpenClaw system prompts, tool schemas, and retrieval wrappers stable across runs.",
    reason:
      "Stable prompt scaffolding is the direct path to $0.028/M cache-hit billing on repeated agent workflows."
  },
  {
    layer: "Comparison fallback",
    recommendation:
      "Keep GPT, Claude, Gemini, and Grok as explicit audit or customer-required routes.",
    reason:
      "An audit lane catches Flash quality drift early without inflating your default per-token cost."
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
    title: "DeepSeek V4 Flash 中文站：价格、教程与模型对比",
    description:
      "追踪 DeepSeek V4 Flash 的官方价格与第三方价格、本地部署教程、OpenClaw 接入方法，以及与 GPT、Claude、Gemini 的实用对比。所有数字均标注官方来源与核实日期。",
    cta: "查看英文完整版"
  },
  ja: {
    label: "日本語",
    title: "DeepSeek V4 Flash 日本語ハブ：料金・導入ガイド・比較",
    description:
      "DeepSeek V4 Flash の公式料金とプロバイダー料金、ローカル導入手順、OpenClaw 連携、GPT・Claude・Gemini との比較をまとめています。すべての数値に公式ソースと確認日を記載。",
    cta: "英語版フルサイトへ"
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

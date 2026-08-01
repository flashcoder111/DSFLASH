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
  imageSrc?: string;
  imageAlt?: string;
  imageCaption?: string;
  sections?: { heading: string; paragraphs: string[] }[];
  sources?: { label: string; href: string }[];
  sourceLabel?: string;
  sourceHref?: string;
};

export const newsItems: NewsItem[] = [
  {
    slug: "deepseek-v4-flash-0731-public-beta-benchmarks-cost",
    title: "DeepSeek V4 Flash Is Official: Stronger Agent Performance at the Same Price",
    date: "2026-07-31",
    tag: "Official",
    summary:
      "DeepSeek V4 Flash 0731 is now in public beta with stronger agent-focused performance claims. Independent analysis also places the release on a more competitive intelligence-versus-cost curve.",
    imageSrc: "/images/deepseek-news/deepseek-v4-flash-0731-benchmark-comparison.jpeg",
    imageAlt:
      "DeepSeek's vendor-reported agent and coding benchmark comparison for V4 Flash 0731, Flash Preview, V4 Pro Preview, GLM-5.2, and Opus-4.8.",
    imageCaption:
      "DeepSeek's vendor-reported comparison. The company says public code-agent tests used a specified DeepSeek Harness configuration; two DSBench results are internal test sets.",
    body: [
      "DeepSeek-V4-Flash-0731 is now the official public-beta release of Flash. The API model name remains deepseek-v4-flash, so existing users can access the new version without changing the calling pattern. The update applies to the Flash API only: V4 Pro and DeepSeek's App and Web models have not changed."
    ],
    sections: [
      {
        heading: "Official benchmarks show a larger agent jump",
        paragraphs: [
          "DeepSeek's release materials focus on agent and coding work. The company reports higher scores than both V4 Flash Preview and V4 Pro Preview across nine listed benchmarks, including Terminal Bench 2.1, DeepSWE, Toolathlon-Verified, and Agents' Last Exam. Those results make the new release look like more than a routine model refresh.",
          "They are still DeepSeek's own numbers, not an independent ranking. For public code-agent tasks, DeepSeek used its upcoming DeepSeek Harness in a specified minimal-mode configuration. DSBench-FullStack and DSBench-Hard are internal test sets. That makes the table useful evidence of the provider's progress, but not a substitute for testing a team's own repositories, tools, latency requirements, and review process."
        ]
      },
      {
        heading: "Independent analysis points in the same direction",
        paragraphs: [
          "Artificial Analysis places V4 Flash 0731 at 50 on its Intelligence Index: 10 points above the April V4 Flash release and six points ahead of V4 Pro on that index. It also reports a GDPval-AA v2 score of 1559, up from 1189 for the previous Flash model. These figures use Artificial Analysis's own methodology and should be kept distinct from DeepSeek's benchmark table, but they support the same conclusion: 0731 is a material update for agentic work."
        ]
      },
      {
        heading: "Same pricing, same underlying model",
        paragraphs: [
          "Artificial Analysis lists the 0731 release at $0.14 per million input tokens and $0.28 per million output tokens on DeepSeek's first-party API, with cache-hit input at $0.0028 per million tokens. It estimates a lower cost per task than GPT-5.6 Luna Max at comparable measured intelligence, while noting that cache behavior and provider pricing affect the comparison.",
          "DeepSeek says V4 Flash 0731 keeps the same architecture and size as V4 Flash Preview, with the gains coming from further post-training. It also keeps the same one-million-token context window. For current API users, this is a performance update to an existing integration, not a migration to a new model family or API surface."
        ]
      },
      {
        heading: "What API users should test next",
        paragraphs: [
          "DeepSeek now documents native Responses API support and a Codex integration path for V4 Flash, but Codex is a supporting feature rather than the main story of this release. The practical next step is to keep the deepseek-v4-flash model ID, run a representative coding or tool-use workflow, and compare task completion, retry rate, latency, cache-hit rate, and cost against the previous baseline."
        ]
      }
    ],
    sources: [
      {
        label: "DeepSeek API change log: V4 Flash update",
        href: "https://api-docs.deepseek.com/updates/"
      },
      {
        label: "Artificial Analysis: DeepSeek V4 Flash 0731 evaluation",
        href: "https://x.com/artificialanlys/status/2083123180869496865?s=46"
      },
      {
        label: "DeepSeek Codex integration guide",
        href: "https://api-docs.deepseek.com/quick_start/agent_integrations/codex/"
      }
    ]
  },
  {
    slug: "why-deepseek-v4-flash-is-cheap-moe-architecture",
    title:
      "Why DeepSeek V4 Flash costs cents: the architecture behind the price",
    date: "2026-07-10",
    tag: "Architecture",
    summary:
      "Flash lists at $0.14 per million input tokens because it does far less arithmetic per token than its 284B size suggests. A walk through the three design choices — sparse experts, latent attention, and disk-backed caching — that put that number on the page.",
    body: [
      "A price of $0.14 per million input tokens reads like a loss leader until you look at what DeepSeek actually spends to answer a request. Flash is not cheap because someone upstream is eating the cost. It is cheap because the model does a fraction of the arithmetic its parameter count implies, and because the two line items that usually dominate an inference bill — attention memory and repeated context — have been engineered down well below the industry norm. Once you see where the money goes, the sticker price stops looking like a promotion and starts looking like an honest reflection of serving cost.",
      "Start with the parameter count, because it is the most misread number on the spec sheet. Flash is a 284-billion-parameter model, but only about 13 billion of those parameters activate on any given token. That gap is the entire trick. DeepSeek builds Mixture-of-Experts networks: instead of one dense feed-forward block that every token flows through, each layer holds a large bank of smaller expert blocks, and a small routing network selects a handful of them per token. The experts it skips cost nothing to compute for that token. So you get the representational capacity of a very large model while paying, per token, for something closer to a 13B one. The output price of $0.28 per million is what a 13B active footprint looks like when it is served efficiently.",
      "This is not a one-off experiment. DeepSeek has been compounding the same idea across releases. V2 introduced the sparse layout at 236B total and 21B active; V3 scaled it to 671B total and 37B active and trained on 14.8 trillion tokens for a reported $5.576M in compute — roughly 2.788 million H800 GPU-hours at spot rates. That figure raised eyebrows precisely because it was an order of magnitude under what a dense model of comparable quality would have cost to train. Flash is the distilled, latency-tuned member of that lineage: smaller active footprint, same architectural DNA.",
      "The second lever is attention, and it matters more than most cost breakdowns admit. Standard transformers cache a full key and value tensor for every attention head at every position; that KV cache is what lets the model attend to earlier tokens without recomputing them. It is also what fills GPU memory and caps how many requests a card can serve at once. DeepSeek's Multi-head Latent Attention compresses those keys and values into a shared low-rank latent space and caches the compact latent instead — roughly a tenfold reduction in KV memory. A card that can hold ten concurrent conversations under standard attention can hold far more under MLA, and throughput per GPU is most of what determines the floor on a per-token price.",
      "Sparse routing has a well-known failure mode: if the router keeps favoring the same few experts, the rest go undertrained and effective capacity collapses. The usual fix is an auxiliary loss that punishes imbalance, but that loss fights the main training objective and tends to cost a little quality. DeepSeek's models balance expert load without leaning on that auxiliary term, which is part of why a sparse model this cheap does not feel like a downgrade on ordinary chat and coding work. You are not paying a quality tax for the low price on the majority of requests — you are paying it only at the long tail, which is exactly where the routing guidance on this site tells you to escalate.",
      "Training efficiency feeds serving price more directly than it seems. The same discipline that produced the V3 training number — FP8 mixed precision to halve memory bandwidth, the DualPipe schedule to keep pipeline bubbles small, a multi-token prediction objective to squeeze more signal from each token — is the discipline that lets DeepSeek run inference at margins where $0.14 input is sustainable rather than promotional. Providers that trained a comparable model the expensive way have to recover that spend somewhere, and the API price is usually where.",
      "Now connect the architecture to the one number that most affects your bill: the cache-hit rate. Because MLA makes the KV cache small, DeepSeek can afford to store request prefixes on a distributed disk array and replay them instead of recomputing. When the front of your prompt matches a recent request byte for byte, those tokens bill at the cache-hit rate of $0.028 per million rather than the $0.14 cache-miss rate — a 5x cut you earn simply by keeping your system prompt and tool definitions stable. That discount is not a billing gimmick bolted on top; it is a direct consequence of the attention design. A model with a full-size KV cache could not cache prefixes this cheaply.",
      "The active-parameter framing also explains the Flash-versus-Pro gap without any hand-waving. Pro activates about 49B parameters per token against Flash's 13B, and its output price of $3.48 per million is roughly what that heavier activation costs to serve. You are not paying 12x more for a brand; you are paying for nearly four times the compute per token plus the accuracy that buys on genuinely hard problems. Framed that way, the routing question answers itself: send the volume to Flash, reserve Pro's activated compute for the tasks that measurably need it.",
      "One caveat worth stating plainly, because it is where the cheapness stops. The low price lives on DeepSeek's serving side, not in the weights themselves. Flash is small only by comparison — 284B parameters in full precision is around 170 GB of memory, and even aggressive quantization keeps you above 30 GB of VRAM. Self-hosting does not inherit the API's economics; it inherits the hardware bill instead. If you are weighing local inference, the local setup guide breaks the memory tiers down before you commit to a GPU order.",
      "The practical takeaway is that Flash's price is legible. It is cheap for reasons you can point at — sparse activation, latent attention, prefix caching, and a training pipeline built for efficiency rather than headlines — which means you can engineer around those reasons instead of hoping the price holds. Keep your prompt prefixes stable to bank the cache discount, route by task difficulty rather than by habit, and treat Pro as the escalation valve it was priced to be. The architecture is already working in your favor; the job is to stop accidentally working against it."
    ],
    sourceLabel: "DeepSeek-V3 Technical Report (arXiv)",
    sourceHref: "https://arxiv.org/abs/2412.19437"
  },
  {
    slug: "building-agents-deepseek-v4-flash-cost-control",
    title:
      "Building agents on DeepSeek V4 Flash without lighting money on fire",
    date: "2026-07-10",
    tag: "Agents",
    summary:
      "Agents are the workload that turns a cheap model into an expensive invoice, because the loop re-sends everything on every turn. The token math of an agent loop, the caching that fixes it, and the routing and retry policy that keep a Flash agent honest.",
    body: [
      "A single chat call to Flash costs a rounding error. An agent does not make a single call. It makes a chain of them, and on every step it re-sends the system prompt, the full tool schema, and a conversation history that grows with each turn. That structure is why teams stand up an agent on the cheapest model they can find and still open the console to a bill they did not expect. The model was never the problem; the loop was. This is how to build on Flash so the loop stays cheap.",
      "Do the token math once and it changes how you design. Suppose your agent carries a 6,000-token system prompt and 4,000 tokens of tool definitions — modest for a real tool-using agent — plus a history that climbs from near zero to 30,000 tokens over a twelve-step task. Naively, the input you send across those twelve turns runs to a few hundred thousand tokens for a single task, almost all of it the same prefix repeated. At the $0.14 cache-miss rate that is real money at volume. At the $0.028 cache-hit rate it is a fifth of that. The difference between a viable agent product and a leaky one is often just whether that repeated prefix is landing as a cache hit.",
      "So caching is not a nice-to-have for agents; it is the primary cost lever. DeepSeek's cache keys on the prefix of your request, matched from the very first token, and the match has to be exact. The design consequence is simple: put everything stable at the front — system prompt first, then tool definitions, then durable context — and let the volatile parts trail at the end. The API reports prompt_cache_hit_tokens and prompt_cache_miss_tokens in each response's usage block, so you do not have to guess whether your layout is working. Log that ratio per turn from day one; it is the single most useful number for an agent's unit economics.",
      "Most cache misses on agents are self-inflicted, and they cluster in a few habits. Injecting a timestamp or a per-request UUID near the top of the system prompt busts the prefix on every call. So does serializing tool definitions in a non-deterministic order, or letting a JSON library reorder keys between requests. Anything that changes the leading bytes of the prompt throws away the discount for that entire turn. The fix is boring and effective: freeze the prefix, make serialization deterministic, and move anything that must change — the current time, the user turn, retrieved snippets — to the tail of the message array where it cannot poison the cache.",
      "Put concrete numbers on a realistic turn. Take an agent step with 100,000 tokens of cached input and 10,000 tokens of output. On a warm cache that is about 100,000 at $0.028 plus 10,000 at $0.28 per million — roughly $0.0028 for input and $0.0028 for output, call it $0.0056 for the step. The same step cold, at the $0.14 miss rate, is closer to $0.017. Run ten thousand of those a day and the warm path saves you well over a hundred dollars daily on one prompt pattern alone. That is the whole argument for treating cache discipline as an engineering requirement rather than an optimization to revisit later.",
      "Notice which side of the ledger dominates once the cache is warm. Cache-hit input is $0.028 per million; output is $0.28 — a full 10x more. That means the expensive agents are the ones that talk too much: models that narrate every step, dump verbose reasoning into the transcript, or return sprawling JSON when a terse structure would do. Constrain output aggressively. Ask for compact structured responses, cap reasoning length on the steps that do not need it, and keep intermediate tool results out of the model's output path when a summary will carry the loop forward. Output tokens are where an agent's bill actually accumulates.",
      "Routing is the next lever, and the rule is the same one the rest of this site keeps arriving at: Flash by default, Pro on escalation. Classify the step before you spend on it. Planning, tool selection, extraction, summarization, and the great majority of intermediate reasoning are Flash work. Reserve Pro's heavier activation for the steps that measurably fail on Flash — a hard refactor, a subtle multi-constraint judgment, a final answer whose cost of being wrong is high. The Flash-versus-Pro routing page has the task-by-task triggers; the point for an agent is that escalation should be a decision the loop makes deliberately, not a default you pay for on every step.",
      "Reliability quietly doubles token costs if you ignore it, because a retry re-sends the whole prompt. DeepSeek's API is prepaid, and under load you will see 429 rate limits and the occasional 500 or 503. A retry policy that fires blindly can turn one paid request into three, and the tokens bill each time. Back off with jitter, cap retries, and if uptime matters, keep a fallback route ready — OpenRouter lists Flash around $0.089 input and $0.18 output, and for an agent that loses money to failed calls during peak hours, a more robust route can be cheaper in practice than the nominally lower first-party price. Measure failed-request cost, not just headline price.",
      "On the tooling side, OpenClaw makes the default-route decision concrete. You can point it straight at the model with a single launch line — 'ollama launch openclaw --model deepseek-v4-flash:cloud' — which replaces a hand-built gateway config and is currently the fastest way to run Flash as an agent's default. Set your escalation policy at the adapter boundary so the switch to Pro happens in one place rather than scattered through your prompt logic, and design your cache layout there too, so the stable prefix is guaranteed identical on every turn the adapter emits.",
      "One deadline belongs on an agent team's radar specifically. If any part of your stack still calls the legacy deepseek-reasoner alias for its chain-of-thought steps, that ID retires on 2026-07-24 and afterward routes to Flash's default non-thinking mode — which can change an agent's behavior silently, with no error to catch. Move those calls to an explicit Flash thinking mode or to Pro before the cutoff. The migration checklist has the ID mapping and the failure modes worth testing.",
      "None of this is exotic. Freeze your prefix, measure the cache-hit ratio, keep output short, route by difficulty, and retry like you are paying for it — because you are. Do those five things and Flash's price holds all the way from a demo to production traffic. Skip them and you will rediscover, one invoice at a time, that the model was never what made agents expensive."
    ],
    sourceLabel: "DeepSeek Context Caching guide",
    sourceHref: "https://api-docs.deepseek.com/guides/kv_cache/"
  },
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

export const siteConfig = {
  name: "Open Source Model Blog",
  title: "Open models, clearly sourced",
  url: "https://deepseekv4flash.com",
  description:
    "Independent reporting and practical research on open AI models, releases, topics, and comparisons."
} as const;

export type Source = {
  label: string;
  href: string;
  type: "Official release" | "Documentation" | "Code repository" | "Research paper" | "Reporting";
};

export type Article = {
  slug: string;
  title: string;
  dek: string;
  topic: string;
  topicSlug: string;
  date: string;
  updated: string;
  sourceCount: number;
  visual: "network" | "context" | "loop" | "release" | "report" | "world";
  body: string[];
  sections?: { heading: string; paragraphs: string[] }[];
  sources: Source[];
  modelSlugs?: string[];
  imageSrc?: string;
  imageAlt?: string;
  imageCaption?: string;
  imageFramed?: boolean;
  imageAspect?: "landscape" | "portrait";
};

export type Topic = {
  slug: string;
  name: string;
  description: string;
};

export type Model = {
  slug: string;
  name: string;
  organization: string;
  access: "Open Source" | "Closed Source";
  description: string;
  officialUrl: string;
  verifiedAt: string;
  license?: string;
};

export type RadarItem = {
  name: string;
  category: string;
  description: string;
  href: string;
  license: string;
  stars: number;
  updatedAt: string;
};

export type Comparison = {
  slug: string;
  label: string;
  title: string;
  dek: string;
  date: string;
  imageSrc?: string;
  imageAlt?: string;
  body: string[];
  rows: { dimension: string; left: string; right: string; note: string }[];
  sources: Source[];
};

export const topics: Topic[] = [
  {
    slug: "personal-agents",
    name: "Personal Agents",
    description: "Self-hosted, persistent agents that connect models, tools, memory and the places people already work."
  },
  {
    slug: "coding-agents",
    name: "Coding Agents",
    description: "How Codex, Claude Code and open coding agents turn repository context, tools and verification into software work."
  },
  {
    slug: "codex",
    name: "Codex",
    description: "Source-led workflows for using Codex to understand, change, review and verify software in real repositories."
  },
  {
    slug: "claude-code",
    name: "Claude Code",
    description: "How Claude Code uses project context, tools, skills and review loops for dependable engineering work."
  },
  {
    slug: "ai-for-science",
    name: "AI for Science",
    description: "Where AI changes scientific discovery—and the evidence, datasets and experimental validation that still matter."
  },
  {
    slug: "world-models",
    name: "World Models",
    description: "Models and research that represent, simulate, or predict environments for agents."
  },
  {
    slug: "ai-agents",
    name: "AI Agents",
    description: "Tool use, agent systems, evaluation, deployment, and the model releases that shape them."
  },
  {
    slug: "loops",
    name: "Loops",
    description: "Looped and recurrent model architectures, iterative refinement, and adaptive compute."
  },
  {
    slug: "ai-coding",
    name: "AI Coding",
    description: "Open models, coding workflows, and the evaluation methods behind them."
  },
  {
    slug: "long-context",
    name: "Long Context",
    description: "Context windows, retrieval, memory, and the practical trade-offs of long inputs."
  }
];

export const models: Model[] = [
  {
    slug: "deepseek",
    name: "DeepSeek R1 & V3",
    organization: "DeepSeek",
    access: "Open Source",
    description: "Open-weight reasoning and general-purpose model releases used widely for local and hosted inference.",
    officialUrl: "https://github.com/deepseek-ai/DeepSeek-R1",
    verifiedAt: "July 27, 2026",
    license: "MIT"
  },
  {
    slug: "qwen",
    name: "Qwen3",
    organization: "Alibaba",
    access: "Open Source",
    description: "A multilingual open-weight family spanning dense, MoE, reasoning and vision-language variants.",
    officialUrl: "https://github.com/QwenLM/Qwen3",
    verifiedAt: "July 27, 2026",
    license: "Apache-2.0"
  },
  {
    slug: "llama",
    name: "Llama 4",
    organization: "Meta",
    access: "Open Source",
    description: "Meta’s multimodal open-weight Llama family, offered in Scout and Maverick variants.",
    officialUrl: "https://www.llama.com/",
    verifiedAt: "July 27, 2026",
    license: "Llama Community License"
  },
  {
    slug: "mistral-small",
    name: "Mistral Small 3.1",
    organization: "Mistral AI",
    access: "Open Source",
    description: "A compact multimodal open model for practical local deployment and self-hosted applications.",
    officialUrl: "https://huggingface.co/mistralai/Mistral-Small-3.1-24B-Instruct-2503",
    verifiedAt: "July 27, 2026",
    license: "Apache-2.0"
  },
  {
    slug: "gemma",
    name: "Gemma 3",
    organization: "Google",
    access: "Open Source",
    description: "Google’s lightweight open-weight family for text and vision tasks across a range of sizes.",
    officialUrl: "https://ai.google.dev/gemma",
    verifiedAt: "July 27, 2026",
    license: "Gemma Terms of Use"
  },
  {
    slug: "gpt-oss",
    name: "gpt-oss",
    organization: "OpenAI",
    access: "Open Source",
    description: "Open-weight reasoning models designed for local or hosted deployment, including 20B and 120B variants.",
    officialUrl: "https://huggingface.co/openai/gpt-oss-120b",
    verifiedAt: "July 27, 2026",
    license: "Apache-2.0"
  },
  {
    slug: "olmo",
    name: "OLMo 2",
    organization: "Ai2",
    access: "Open Source",
    description: "Fully open language models accompanied by transparent training data, code and evaluation materials.",
    officialUrl: "https://allenai.org/olmo",
    verifiedAt: "July 27, 2026",
    license: "Apache-2.0"
  },
  {
    slug: "phi",
    name: "Phi-4",
    organization: "Microsoft",
    access: "Open Source",
    description: "Microsoft’s small-model family, oriented toward efficient reasoning and on-device or constrained deployments.",
    officialUrl: "https://huggingface.co/microsoft/phi-4",
    verifiedAt: "July 27, 2026",
    license: "MIT"
  },
  {
    slug: "nemotron",
    name: "Nemotron",
    organization: "NVIDIA",
    access: "Open Source",
    description: "NVIDIA’s open-weight model line for reasoning, agentic workloads and efficient inference.",
    officialUrl: "https://build.nvidia.com/explore/discover",
    verifiedAt: "July 27, 2026",
    license: "See individual model cards"
  },
  {
    slug: "kimi-k2",
    name: "Kimi K2",
    organization: "Moonshot AI",
    access: "Open Source",
    description: "An open-weight mixture-of-experts model family focused on coding, tool use and agentic work.",
    officialUrl: "https://huggingface.co/moonshotai/Kimi-K2-Instruct",
    verifiedAt: "July 27, 2026",
    license: "Modified MIT"
  },
  {
    slug: "kimi",
    name: "Kimi K3",
    organization: "Moonshot AI",
    access: "Closed Source",
    description: "Moonshot AI’s proprietary long-context model family for agentic and multimodal API workloads.",
    officialUrl: "https://www.kimi.com/",
    verifiedAt: "July 27, 2026",
    license: "Proprietary API"
  },
  {
    slug: "claude",
    name: "Claude",
    organization: "Anthropic",
    access: "Closed Source",
    description: "Anthropic’s frontier API model family, including Claude Opus, Sonnet and Haiku.",
    officialUrl: "https://www.anthropic.com/claude",
    verifiedAt: "July 27, 2026",
    license: "Proprietary API"
  },
  {
    slug: "gpt",
    name: "GPT-5",
    organization: "OpenAI",
    access: "Closed Source",
    description: "OpenAI’s proprietary frontier GPT family for general reasoning, coding and multimodal work.",
    officialUrl: "https://openai.com/",
    verifiedAt: "July 27, 2026",
    license: "Proprietary API"
  },
  {
    slug: "gemini",
    name: "Gemini 2.5",
    organization: "Google",
    access: "Closed Source",
    description: "Google’s proprietary multimodal models, available in Pro, Flash and Flash-Lite service tiers.",
    officialUrl: "https://deepmind.google/models/gemini/",
    verifiedAt: "July 27, 2026",
    license: "Proprietary API"
  },
  {
    slug: "grok",
    name: "Grok 4",
    organization: "xAI",
    access: "Closed Source",
    description: "xAI’s proprietary frontier model family for reasoning, coding and real-time information tasks.",
    officialUrl: "https://x.ai/grok",
    verifiedAt: "July 27, 2026",
    license: "Proprietary API"
  },
  {
    slug: "mistral-large",
    name: "Mistral Large",
    organization: "Mistral AI",
    access: "Closed Source",
    description: "Mistral’s flagship proprietary API model for general-purpose and enterprise workloads.",
    officialUrl: "https://mistral.ai/products/la-plateforme",
    verifiedAt: "July 27, 2026",
    license: "Proprietary API"
  },
  {
    slug: "command-a",
    name: "Command A",
    organization: "Cohere",
    access: "Closed Source",
    description: "Cohere’s enterprise-focused model line for retrieval, tools and business workflows.",
    officialUrl: "https://cohere.com/command",
    verifiedAt: "July 27, 2026",
    license: "Proprietary API"
  },
  {
    slug: "nova",
    name: "Amazon Nova",
    organization: "Amazon",
    access: "Closed Source",
    description: "Amazon’s proprietary multimodal foundation-model family available through Bedrock.",
    officialUrl: "https://aws.amazon.com/ai/generative-ai/nova/",
    verifiedAt: "July 27, 2026",
    license: "Proprietary API"
  },
  {
    slug: "perplexity-sonar",
    name: "Sonar",
    organization: "Perplexity",
    access: "Closed Source",
    description: "Perplexity’s proprietary answer-engine model family with web-grounded API capabilities.",
    officialUrl: "https://docs.perplexity.ai/",
    verifiedAt: "July 27, 2026",
    license: "Proprietary API"
  }
];

export const radarItems: RadarItem[] = [
  {
    name: "Ollama",
    category: "Local inference",
    description: "A local runtime for downloading, serving and testing a broad set of open models.",
    href: "https://github.com/ollama/ollama",
    license: "MIT",
    stars: 176961,
    updatedAt: "2026-07-27T05:41:58Z"
  },
  {
    name: "Transformers",
    category: "Model framework",
    description: "Hugging Face’s model-definition library for training and inference across text, vision and audio.",
    href: "https://github.com/huggingface/transformers",
    license: "Apache-2.0",
    stars: 163019,
    updatedAt: "2026-07-27T05:32:31Z"
  },
  {
    name: "Open WebUI",
    category: "AI interface",
    description: "A self-hosted interface for working with Ollama and OpenAI-compatible model APIs.",
    href: "https://github.com/open-webui/open-webui",
    license: "License not listed",
    stars: 146861,
    updatedAt: "2026-07-27T05:41:52Z"
  },
  {
    name: "LangChain",
    category: "Agent framework",
    description: "A widely used platform for building applications and agent workflows around language models.",
    href: "https://github.com/langchain-ai/langchain",
    license: "MIT",
    stars: 142645,
    updatedAt: "2026-07-27T05:22:39Z"
  },
  {
    name: "ComfyUI",
    category: "Generative media",
    description: "A node-based graphical interface and backend for modular diffusion-model workflows.",
    href: "https://github.com/Comfy-Org/ComfyUI",
    license: "GPL-3.0",
    stars: 122414,
    updatedAt: "2026-07-27T05:31:44Z"
  },
  {
    name: "llama.cpp",
    category: "Local inference",
    description: "A compact C/C++ implementation for efficient local LLM inference across many devices.",
    href: "https://github.com/ggml-org/llama.cpp",
    license: "MIT",
    stars: 121705,
    updatedAt: "2026-07-27T05:35:49Z"
  },
  {
    name: "vLLM",
    category: "Inference serving",
    description: "A high-throughput, memory-efficient serving engine for large language and multimodal models.",
    href: "https://github.com/vllm-project/vllm",
    license: "Apache-2.0",
    stars: 87263,
    updatedAt: "2026-07-27T05:33:28Z"
  },
  {
    name: "LLaMA-Factory",
    category: "Fine-tuning",
    description: "A unified toolkit for fine-tuning and evaluating a broad range of language and vision-language models.",
    href: "https://github.com/hiyouga/LLaMA-Factory",
    license: "Apache-2.0",
    stars: 73533,
    updatedAt: "2026-07-27T05:30:35Z"
  },
  {
    name: "AutoGen",
    category: "Agent framework",
    description: "Microsoft’s framework for programming multi-agent applications and tool-driven workflows.",
    href: "https://github.com/microsoft/autogen",
    license: "CC-BY-4.0",
    stars: 60014,
    updatedAt: "2026-07-27T05:39:03Z"
  },
  {
    name: "SGLang",
    category: "Inference serving",
    description: "A high-performance serving framework for large language and multimodal models.",
    href: "https://github.com/sgl-project/sglang",
    license: "Apache-2.0",
    stars: 30776,
    updatedAt: "2026-07-27T05:10:40Z"
  },
  {
    name: "MLX",
    category: "Apple silicon",
    description: "Apple’s array framework for machine learning research and efficient on-device model work.",
    href: "https://github.com/ml-explore/mlx",
    license: "MIT",
    stars: 27721,
    updatedAt: "2026-07-27T05:37:20Z"
  },
  {
    name: "Text Generation Inference",
    category: "Inference serving",
    description: "Hugging Face’s production text-generation server for deploying large language models.",
    href: "https://github.com/huggingface/text-generation-inference",
    license: "Apache-2.0",
    stars: 10881,
    updatedAt: "2026-07-26T20:53:33Z"
  },
  {
    name: "RAGFlow",
    category: "RAG & agents",
    description: "A retrieval-augmented generation engine that combines document retrieval with agent capabilities.",
    href: "https://github.com/infiniflow/ragflow",
    license: "Apache-2.0",
    stars: 86091,
    updatedAt: "2026-07-27T06:31:13Z"
  },
  {
    name: "OpenHands",
    category: "AI coding agents",
    description: "An open platform for AI-driven software development workflows.",
    href: "https://github.com/OpenHands/OpenHands",
    license: "License not listed",
    stars: 82232,
    updatedAt: "2026-07-27T06:29:27Z"
  },
  {
    name: "CrewAI",
    category: "Agent framework",
    description: "A framework for orchestrating collaborative role-based AI agents.",
    href: "https://github.com/crewAIInc/crewAI",
    license: "MIT",
    stars: 56197,
    updatedAt: "2026-07-27T06:29:47Z"
  },
  {
    name: "LlamaIndex",
    category: "RAG & data",
    description: "A framework for document agents, retrieval workflows and connecting LLMs to data.",
    href: "https://github.com/run-llama/llama_index",
    license: "MIT",
    stars: 51135,
    updatedAt: "2026-07-27T05:23:54Z"
  },
  {
    name: "Milvus",
    category: "Vector database",
    description: "A cloud-native vector database for scalable approximate-nearest-neighbour search.",
    href: "https://github.com/milvus-io/milvus",
    license: "Apache-2.0",
    stars: 45386,
    updatedAt: "2026-07-27T05:20:43Z"
  },
  {
    name: "DeepSpeed",
    category: "Training & inference",
    description: "A distributed deep-learning optimization library for efficient training and inference.",
    href: "https://github.com/deepspeedai/DeepSpeed",
    license: "Apache-2.0",
    stars: 42817,
    updatedAt: "2026-07-27T05:46:03Z"
  },
  {
    name: "LangGraph",
    category: "Agent framework",
    description: "A library for building resilient, stateful agent workflows.",
    href: "https://github.com/langchain-ai/langgraph",
    license: "MIT",
    stars: 38218,
    updatedAt: "2026-07-27T06:27:53Z"
  },
  {
    name: "Qdrant",
    category: "Vector database",
    description: "A high-performance vector database and search engine for AI applications.",
    href: "https://github.com/qdrant/qdrant",
    license: "Apache-2.0",
    stars: 33601,
    updatedAt: "2026-07-27T02:55:08Z"
  },
  {
    name: "Langfuse",
    category: "Observability",
    description: "An open AI-engineering platform for LLM evaluation, observability and prompt management.",
    href: "https://github.com/langfuse/langfuse",
    license: "License not listed",
    stars: 31918,
    updatedAt: "2026-07-27T06:11:04Z"
  },
  {
    name: "Chroma",
    category: "Vector database",
    description: "Open search infrastructure for building AI applications around embeddings and retrieval.",
    href: "https://github.com/chroma-core/chroma",
    license: "Apache-2.0",
    stars: 28886,
    updatedAt: "2026-07-27T03:48:13Z"
  },
  {
    name: "Semantic Kernel",
    category: "Agent framework",
    description: "Microsoft’s SDK for integrating LLMs, memory and tool use into applications.",
    href: "https://github.com/microsoft/semantic-kernel",
    license: "MIT",
    stars: 28376,
    updatedAt: "2026-07-27T00:05:42Z"
  },
  {
    name: "Haystack",
    category: "RAG & agents",
    description: "A modular orchestration framework for production-ready retrieval and agent pipelines.",
    href: "https://github.com/deepset-ai/haystack",
    license: "Apache-2.0",
    stars: 26021,
    updatedAt: "2026-07-27T06:17:09Z"
  },
  {
    name: "Promptfoo",
    category: "Testing & safety",
    description: "A CLI and CI toolkit for testing prompts, agents and RAG systems.",
    href: "https://github.com/promptfoo/promptfoo",
    license: "MIT",
    stars: 23638,
    updatedAt: "2026-07-27T06:24:07Z"
  },
  {
    name: "PEFT",
    category: "Fine-tuning",
    description: "Hugging Face’s parameter-efficient fine-tuning library for adapting foundation models.",
    href: "https://github.com/huggingface/peft",
    license: "Apache-2.0",
    stars: 21455,
    updatedAt: "2026-07-26T17:21:27Z"
  },
  {
    name: "TRL",
    category: "Fine-tuning",
    description: "A library for training transformer language models with reinforcement learning.",
    href: "https://github.com/huggingface/trl",
    license: "Apache-2.0",
    stars: 18942,
    updatedAt: "2026-07-27T05:58:13Z"
  },
  {
    name: "PydanticAI",
    category: "Agent framework",
    description: "A type-safe Python framework for building production AI agents.",
    href: "https://github.com/pydantic/pydantic-ai",
    license: "MIT",
    stars: 18825,
    updatedAt: "2026-07-27T04:14:50Z"
  },
  {
    name: "TensorRT-LLM",
    category: "Inference serving",
    description: "NVIDIA’s optimized runtime and APIs for efficient LLM inference on its GPUs.",
    href: "https://github.com/NVIDIA/TensorRT-LLM",
    license: "License not listed",
    stars: 14225,
    updatedAt: "2026-07-27T05:48:27Z"
  },
  {
    name: "LitGPT",
    category: "Training & inference",
    description: "A collection of high-performance LLM recipes for pretraining, fine-tuning and deployment.",
    href: "https://github.com/Lightning-AI/litgpt",
    license: "Apache-2.0",
    stars: 13583,
    updatedAt: "2026-07-27T05:48:32Z"
  },
  {
    name: "LM Evaluation Harness",
    category: "Evaluation",
    description: "A framework for few-shot evaluation of language models.",
    href: "https://github.com/EleutherAI/lm-evaluation-harness",
    license: "MIT",
    stars: 13423,
    updatedAt: "2026-07-27T05:31:49Z"
  },
  {
    name: "OpenLLM",
    category: "Inference serving",
    description: "A server for exposing open-source models through OpenAI-compatible cloud APIs.",
    href: "https://github.com/bentoml/OpenLLM",
    license: "Apache-2.0",
    stars: 12400,
    updatedAt: "2026-07-26T12:22:49Z"
  },
  {
    name: "Axolotl",
    category: "Fine-tuning",
    description: "A streamlined toolkit for fine-tuning language and vision-language models.",
    href: "https://github.com/axolotl-ai-cloud/axolotl",
    license: "Apache-2.0",
    stars: 12263,
    updatedAt: "2026-07-27T05:23:46Z"
  },
  {
    name: "Triton Inference Server",
    category: "Inference serving",
    description: "NVIDIA’s optimized cloud and edge serving platform for a range of model frameworks.",
    href: "https://github.com/triton-inference-server/server",
    license: "BSD-3-Clause",
    stars: 10870,
    updatedAt: "2026-07-27T05:55:37Z"
  },
  {
    name: "Phoenix",
    category: "Observability",
    description: "An open platform for AI observability and evaluation.",
    href: "https://github.com/Arize-ai/phoenix",
    license: "License not listed",
    stars: 10756,
    updatedAt: "2026-07-27T05:26:46Z"
  },
  {
    name: "OpenCompass",
    category: "Evaluation",
    description: "An LLM evaluation platform spanning models and more than one hundred datasets.",
    href: "https://github.com/open-compass/opencompass",
    license: "Apache-2.0",
    stars: 7237,
    updatedAt: "2026-07-27T05:58:17Z"
  },
  {
    name: "KServe",
    category: "Deployment",
    description: "A Kubernetes-based platform for scalable generative and predictive AI inference.",
    href: "https://github.com/kserve/kserve",
    license: "Apache-2.0",
    stars: 5733,
    updatedAt: "2026-07-27T02:05:03Z"
  }
];

export const comparisons: Comparison[] = [
  {
    slug: "claude-code-vs-codex",
    label: "Coding agent comparison",
    title: "Claude Code vs Codex: Choose the workflow, not a universal winner",
    dek: "A source-led comparison of the project-context, tool and verification patterns each product documents for software work.",
    date: "July 27, 2026",
    body: [
      "Both products can work with code, tools and project context. The decision should begin with the engineering surface your team already trusts: where durable instructions live, how tools are constrained, how work is delegated and how a patch is verified before it lands.",
      "Codex documents project guidance, reusable skills and live integrations as separate layers. Claude Code documents project instructions, skills, MCP and subagents as complementary extensions around an agentic tool loop. Neither set of documents supports treating autonomous code changes as a substitute for review.",
      "Run a controlled trial on one real issue. Give each system the same acceptance criteria, constrain its write scope, require a test command and assess the resulting review burden. The useful answer is the workflow that gives your team the clearest evidence when a change is correct—and the fastest path back when it is not."
    ],
    rows: [
      { dimension: "Durable project context", left: "AGENTS.md and project-level customization can hold repository guidance and reusable workflows.", right: "Project instructions and memory files can preserve repository conventions across sessions.", note: "Keep durable rules separate from one-off task prompts." },
      { dimension: "Extensibility", left: "Skills, plugins and MCP connect repeatable workflows and external systems.", right: "Skills, MCP, hooks and subagents extend the base tool loop.", note: "Add only the integrations that a team can audit and maintain." },
      { dimension: "Best evaluation", left: "A scoped change with explicit verification steps and a reviewable patch.", right: "A scoped change with an explored codebase, test evidence and reviewable patch.", note: "Compare review burden and correctness, not a generic benchmark." }
    ],
    sources: [
      { label: "Codex prompting guidance", href: "https://developers.openai.com/codex/prompting", type: "Documentation" },
      { label: "Codex customization", href: "https://developers.openai.com/codex/concepts/customization", type: "Documentation" },
      { label: "Claude Code features overview", href: "https://code.claude.com/docs/en/features-overview", type: "Documentation" }
    ]
  },
  {
    slug: "openclaw-vs-hermes",
    label: "Personal agent comparison",
    title: "OpenClaw vs Hermes: Gateway control or an evolving personal workspace?",
    dek: "Two open personal-agent approaches that make different choices about messaging, memory and long-running work.",
    date: "July 26, 2026",
    body: [
      "OpenClaw and Hermes both aim to make an agent available beyond a single chat session. Their documented designs place emphasis in different areas: OpenClaw centres a self-hosted gateway and agent workspace contract, while Hermes foregrounds persistent memory, self-improving skills and isolated subagents.",
      "That makes the security question concrete. A multi-channel gateway needs careful sender pairing, allowlists and workspace isolation. A learning-oriented personal workspace needs a clear memory policy, reset path and human review of the skills it retains. In either case, more autonomy increases the importance of a narrow initial deployment.",
      "Choose by operational fit. If channel routing and controlled workspaces are the initial problem, evaluate the gateway boundary first. If repeated personal workflows and accumulated procedural knowledge are the goal, test memory and skill governance first. Do not broaden tool access until you can explain the failure and recovery path."
    ],
    rows: [
      { dimension: "Primary system shape", left: "Self-hosted gateway connecting channels, sessions and agent workspaces.", right: "Persistent personal agent with memory, skills and isolated subagents.", note: "Both require an explicit owner for identity and access policy." },
      { dimension: "Context boundary", left: "Workspace files and per-agent session storage define the operating context.", right: "Persistent memory and agent-created skills build continuity over time.", note: "Treat stored context as operational data, not harmless chat history." },
      { dimension: "Safe first trial", left: "One channel, a restricted sender list and a narrow tool allowlist.", right: "One repeatable task, isolated tools and a clear reset or review path.", note: "Expand only after a human can audit the agent’s work." }
    ],
    sources: [
      { label: "OpenClaw documentation", href: "https://docs.openclaw.ai/", type: "Documentation" },
      { label: "OpenClaw agent runtime", href: "https://docs.openclaw.ai/concepts/agent", type: "Documentation" },
      { label: "Hermes Agent repository", href: "https://github.com/NousResearch/hermes-agent", type: "Code repository" }
    ]
  },
  {
    slug: "vllm-vs-sglang",
    label: "Inference serving comparison",
    title: "vLLM vs SGLang: Start with the serving workload",
    dek: "A deployment-oriented comparison for teams choosing an open-model serving layer, without reducing the decision to a single throughput chart.",
    date: "July 22, 2026",
    body: [
      "vLLM and SGLang are both high-performance serving projects, but the practical choice depends on the workload you intend to operate. A simple chat endpoint, a high-concurrency retrieval pipeline and an agent with structured multi-step generation can stress different parts of a serving stack.",
      "The projects’ own descriptions make a sensible starting point: vLLM focuses on high-throughput, memory-efficient model serving, while SGLang positions itself as a serving framework for language and multimodal models. Those claims are not a substitute for a production test on your model, hardware, context length and traffic shape.",
      "Benchmark the whole request path. Include tokenization, queueing, caching, tool-call patterns, observability and failure recovery—not merely generated tokens per second. The correct choice is the one your team can run, instrument and update reliably after the first benchmark chart has stopped being interesting."
    ],
    rows: [
      { dimension: "Documented focus", left: "High-throughput and memory-efficient serving for LLMs.", right: "High-performance serving for language and multimodal models.", note: "Read project documentation for the current supported models and deployment modes." },
      { dimension: "What to benchmark", left: "Your model, request mix, context length, concurrency and hardware.", right: "Your model, request mix, context length, concurrency and hardware.", note: "A public benchmark is a hypothesis, not an operating decision." },
      { dimension: "Operational test", left: "Measure observability, upgrade path and failure recovery alongside latency.", right: "Measure observability, upgrade path and failure recovery alongside latency.", note: "The serving layer becomes part of your application’s reliability surface." }
    ],
    sources: [
      { label: "vLLM repository", href: "https://github.com/vllm-project/vllm", type: "Code repository" },
      { label: "SGLang repository", href: "https://github.com/sgl-project/sglang", type: "Code repository" }
    ]
  }
];

export const articles: Article[] = [
  {
    slug: "meta-muse-glimmer-kv-cache-local-agents",
    title: "Meta’s Muse Glimmer: A 30B Open Model Built for Local Agents",
    dek: "Muse Glimmer is Meta’s 30B multimodal open model for local agent work. Its unusually lean KV cache is the part worth watching when a task runs long.",
    topic: "AI Agents",
    topicSlug: "ai-agents",
    date: "August 12, 2026",
    updated: "August 12, 2026",
    sourceCount: 4,
    visual: "context",
    imageSrc: "/images/articles/meta-muse-glimmer-architecture-and-benchmarks.jpg",
    imageAlt: "Sebastian Raschka’s overview of the Meta Muse Glimmer 30B architecture, long-context throughput, memory use, and Artificial Analysis Agentic Index position.",
    imageCaption: "Architecture, throughput and ranking graphic by Sebastian Raschka, shared in the source post. The graphic is reproduced without changes; its benchmark results should be read with the stated environment and caveats.",
    imageFramed: true,
    modelSlugs: ["llama"],
    body: [
      "Most coverage of Muse Glimmer will start with its benchmarks. Fair enough: Meta has released a 30B multimodal model aimed at coding and agent tasks. But one line in the configuration is more interesting than most of the score tables. It has 32 query heads and just two key/value heads.",
      "That does not shrink the model weights. It changes the memory a runtime keeps adding as a task grows. Anyone who has watched a local agent chew through terminal logs, screenshots and tool outputs will recognise why that is worth paying attention to."
    ],
    sections: [
      {
        heading: "Three local layers, then one global layer",
        paragraphs: [
          "Meta’s model card describes Muse Glimmer as a dense 29.6B-parameter causal transformer with a perception encoder for text-and-image input. It has 52 language-model layers and a 131,072-token context length. Its attention pattern repeats three local sliding-window layers followed by one full-attention layer; the local window is 2,048 tokens.",
          "So most layers work on nearby context, while every fourth layer can look across the wider history. It is a practical compromise, and the released configuration makes it easy to check without relying on a marketing diagram."
        ]
      },
      {
        heading: "Two KV heads make the cache unusually lean",
        paragraphs: [
          "The published configuration lists 32 query heads, 2 key/value heads and a head dimension of 128. At BF16 precision, 52 layers, two KV heads and separate key-and-value storage come to about 52 KiB of KV cache for every token in one sequence. That is a calculation from the released configuration, not a provider benchmark.",
          "The catch is that cache size is only one part of the memory bill. Quantization, runtime, batch size, image inputs and the amount of context kept around all matter. Still, this configuration means the cached attention state grows more slowly than it would with many more KV heads."
        ]
      },
      {
        heading: "Long agent sessions are the real test",
        paragraphs: [
          "Agent work is where cache growth becomes annoying. A coding or research session can pull in long tool outputs, screenshots, files and many rounds of planning. Once the cache hits the hardware limit, the advertised context window stops being useful. You shorten history, summarise more aggressively or switch models.",
          "Meta says its roughly 4-bit language-model weights can fit under 20 GB, leaving room in a 24 GB or 32 GB setup for the cache, image encoder and speculative-decoding drafter. That is Meta’s deployment claim, not a promise for every client or agent framework. But it explains what the company is optimising for."
        ]
      },
      {
        heading: "Read the benchmark chart with care",
        paragraphs: [
          "Sebastian Raschka’s post puts the architecture beside an Ollama benchmark on DGX Spark and a screenshot of the Artificial Analysis Agentic Index. It is a useful picture of the trade-off. It is also one machine, one runtime and a particular set of prompt lengths, not a universal speed ranking.",
          "The quality table needs the same caution. Meta reports strong results against Qwen3.6 27B and Gemma 4 31B on several agent and coding tests. The independent index shown in the post puts Muse Glimmer below Qwen3.6 27B. Before choosing a model, run the quantization, runtime, context length and tool workflow you actually plan to use."
        ]
      },
      {
        heading: "Open weights make the details checkable",
        paragraphs: [
          "Muse Glimmer is under Apache 2.0, and Meta has published BF16 weights, GGUF quantizations and ExecuTorch builds. That gives developers something better than guesses: inspect the configuration, run a representative long task, then measure memory alongside quality and latency.",
          "A smaller KV cache will not make Muse Glimmer the right model for every agent. It may, however, let a longer task fit on the hardware you already have. That is more useful than a single leaderboard score."
        ]
      }
    ],
    sources: [
      { label: "Meta Muse Glimmer 30B model card", href: "https://huggingface.co/meta-models/Muse-Glimmer-30B", type: "Official release" },
      { label: "Meta Muse Glimmer 30B published configuration", href: "https://huggingface.co/meta-models/Muse-Glimmer-30B/blob/main/config.json", type: "Documentation" },
      { label: "Sebastian Raschka’s architecture and benchmark analysis", href: "https://x.com/rasbt/status/2087180773497421926?s=20", type: "Reporting" },
      { label: "Artificial Analysis: Muse Glimmer model page", href: "https://artificialanalysis.ai/models/muse-glimmer", type: "Reporting" }
    ]
  },
  {
    slug: "agent-harness-loops-graphs-production-systems",
    title: "Agent Harness, Loops, and Graphs: Three Jobs Production AI Systems Should Not Confuse",
    dek: "A practical way to tell whether an agent needs a safer runtime, a better feedback loop, or explicit workflow control.",
    topic: "AI Agents",
    topicSlug: "ai-agents",
    date: "July 27, 2026",
    updated: "July 27, 2026",
    sourceCount: 4,
    visual: "loop",
    imageSrc: "/images/articles/ai-agent-harness-langgraph-graph-api.png",
    imageAlt: "LangGraph Graph API overview showing how agent workflow graphs define state, nodes, and edges.",
    body: [
      "The words get mixed together because a working agent usually contains all three. It has a place to run, it keeps taking actions until it reaches some stopping point, and it may hand work from one step to another. The trouble starts when a team tries to solve the wrong problem. A brittle tool permission policy will not be repaired by drawing a prettier workflow. A missing review step will not be fixed by adding more memory.",
      "Start with the harness. This is everything around the model that makes a task possible and bounded: its tools, files, durable instructions, session state, model routing, permissions, logs and sandbox. If an agent can draft a useful answer but cannot reliably find the right repository, retain the right state, or explain which tool changed something, the harness is the weak point. The first repair is usually mundane: narrow the tool allowlist, separate stable instructions from task notes, and keep an audit trail that a human can read.",
      "A loop is a different job. It is the pattern in which the system proposes an action, sees the result, and decides what to try next. Coding agents use this constantly: inspect a failure, change a file, run a test, then either stop or investigate again. A loop is valuable only when it has evidence to react to and a reason to end. " +
        "‘Try again’ is not a design. A useful loop names the check, records the result, sets a budget, and says who or what can declare the task finished.",
      "Graphs answer a third question: which work is allowed to happen next? A graph makes the route visible. One node may classify an incoming request, another may gather evidence, two may run in parallel, and a later node may wait for both before preparing a final answer. Official GraphFlow and LangGraph documentation describe this in concrete terms: nodes perform work, state carries what has happened, and edges determine the next step or steps. That explicitness is useful when order, branching, handoffs or human approval matter.",
      "The distinction pays off during debugging. If the agent loses a customer’s preference between sessions, look at persistent state and the harness. If it finds the right file but stops before it checks the test result, add a bounded verification loop. If it sometimes sends a sensitive request to the wrong specialist, or needs research and calculation to finish before a decision, make the routing visible in a graph. These are not rival architectures. A graph normally runs inside a harness, and a loop often lives inside one of the graph’s nodes.",
      "There is also a cost to making everything a graph. A simple request-response task does not become safer merely because it has ten named nodes. Microsoft’s GraphFlow guidance makes the same practical point: use structured flow when you need deterministic order, conditional branching or a multi-step process with cycles; keep an ad-hoc exchange simple when that control is unnecessary. The diagram should explain a real operating constraint, not decorate a product demo.",
      "For a first production agent, choose one consequential task and write down three things before choosing a framework. What resources may the agent touch? What observation tells it that its last action helped? Which transitions require an explicit rule or a human decision? The answers usually reveal the missing layer. That is a more useful starting point than asking whether the system needs to be ‘more autonomous.’",
      "This article is an independent synthesis. It was prompted by a July 25 post from beamnxw, which described a three-layer way of thinking about agent engineering. We reviewed the linked original post, its author’s public Chinese-language mirror, and official workflow documentation; we did not reproduce the original text or illustration."
    ],
    sources: [
      { label: "beamnxw on X: AI Agent three engineering layers", href: "https://x.com/beamnxw/status/2081022966645535079?s=20", type: "Reporting" },
      { label: "beamnxw: AI Agent三层工程：框架、循环与图", href: "https://learnblockchain.cn/article/27063", type: "Reporting" },
      { label: "LangGraph Graph API overview", href: "https://docs.langchain.com/oss/python/langgraph/graph-api", type: "Documentation" },
      { label: "Microsoft AutoGen GraphFlow documentation", href: "https://microsoft.github.io/autogen/stable/user-guide/agentchat-user-guide/graph-flow.html", type: "Documentation" }
    ]
  },
  {
    slug: "openclaw-hermes-personal-ai-agents",
    title: "OpenClaw and Hermes: Two Designs for a Personal AI Agent",
    dek: "The meaningful choice is not which agent sounds more autonomous. It is whether you need a message-routing gateway, a self-improving workspace, or both—and how you will contain the risks.",
    topic: "Personal Agents",
    topicSlug: "personal-agents",
    date: "July 27, 2026",
    updated: "July 27, 2026",
    sourceCount: 3,
    visual: "network",
    imageSrc: "/images/articles/openclaw-hermes-personal-ai-agent.png",
    imageAlt: "OpenClaw documentation cover image for a self-hosted personal AI agent gateway.",
    body: [
      "Personal agents are becoming less like a single chat window and more like a small operating layer: they receive requests where people already communicate, hold context across sessions, call tools, and return a result. That is why the comparison between OpenClaw and Hermes is more useful when framed as systems design. The hard part is not producing a reply; it is deciding where identity, permissions, memory and long-running work should live.",
      "OpenClaw is built around a self-hosted gateway that can connect multiple messaging channels to one agent system. Its documentation makes the workspace contract unusually explicit: agent instructions, tools, identity and memory are files under a controlled working directory, while sessions and routing are part of the platform. That separation is valuable for teams who want to inspect the boundary between an incoming message, a workspace and an action before letting the agent run continuously.",
      "Hermes emphasizes a different loop: persistent memory, skills that can be created or refined through use, and isolated subagents for focused work. That can make an agent feel less disposable across repeated tasks, but it also raises the bar for governance. A system that learns preferences and accumulates operational knowledge needs a clear reset path, durable audit trail and a decision about which memories may influence future work.",
      "The practical starting point is deliberately modest. Pick one channel, one workspace, a narrow allowlist of tools and a task that can be independently checked. Measure not only whether the agent finishes, but whether a human can reconstruct why it acted, what context it used and how to reverse an error. A personal agent earns broader access through that evidence, not through a longer list of integrations."
    ],
    sources: [
      { label: "OpenClaw documentation", href: "https://docs.openclaw.ai/", type: "Documentation" },
      { label: "OpenClaw agent runtime", href: "https://docs.openclaw.ai/concepts/agent", type: "Documentation" },
      { label: "Hermes Agent repository", href: "https://github.com/NousResearch/hermes-agent", type: "Code repository" }
    ]
  },
  {
    slug: "workbuddy-chinese-models-ai-agents",
    title: "What WorkBuddy Reveals About Chinese Models in Agent Workflows",
    dek: "For readers outside China, the useful signal is not a leaderboard position. It is how a workplace agent combines model routing, tool execution and a familiar office workflow into one product surface.",
    topic: "AI Agents",
    topicSlug: "ai-agents",
    date: "July 26, 2026",
    updated: "July 27, 2026",
    sourceCount: 2,
    visual: "report",
    imageSrc: "/images/articles/workbuddy-chinese-ai-agent-model-configuration.png",
    imageAlt: "Tencent WorkBuddy model configuration interface for workplace AI agent workflows.",
    body: [
      "Chinese model releases are often discussed abroad as a price-performance story. That misses a more operational development: products such as Tencent WorkBuddy package the model choice, task planning, tool use and deliverable into a workplace flow that does not ask the user to assemble an agent stack from scratch. The relevant question is therefore not simply which model sits underneath, but how the product distributes responsibility between the model, orchestration layer and human reviewer.",
      "WorkBuddy describes a natural-language workbench that decomposes complex requests, invokes tools and can coordinate multiple agents. Its enterprise model documentation also shows a practical routing posture: users can select built-in models, connect third-party providers, run a local model through Ollama, or configure a custom API. That is a meaningful design decision because it avoids making a single model vendor the permanent definition of the product.",
      "For international teams, this is a useful pattern to watch. Agent adoption is easier when the output is an ordinary work artifact—a report, brief, chart or draft—not an abstract demonstration of autonomy. The orchestration layer must still make intermediate evidence inspectable: where the data came from, which model produced each step, and where a human is expected to approve a transition.",
      "The adoption test is straightforward. Give the system a bounded research-to-report task, require citations in the final artifact, and compare the time saved against the time spent correcting unsupported claims. If the system can route among models without losing traceability, it is more resilient than a product whose main value is a one-time model advantage."
    ],
    sources: [
      { label: "Tencent WorkBuddy product page", href: "https://www.workbuddy.cn/", type: "Official release" },
      { label: "WorkBuddy Enterprise model configuration", href: "https://cloud.tencent.com/document/product/1831/134445", type: "Documentation" }
    ]
  },
  {
    slug: "claude-code-codex-workflow-design",
    title: "Codex and Claude Code: The Workflow Design Matters More Than the Label",
    dek: "Coding agents become reliable when repository instructions, scoped tools and verification form one loop. The product name tells you much less than the workflow you put around it.",
    topic: "Coding Agents",
    topicSlug: "coding-agents",
    date: "July 25, 2026",
    updated: "July 27, 2026",
    sourceCount: 3,
    visual: "context",
    imageSrc: "/images/articles/claude-code-codex-workflow-design.png",
    imageAlt: "Claude Code documentation graphic about extending a coding-agent workflow with project context, skills, and tools.",
    body: [
      "A coding agent is most useful when it can move from an intent to a checked change without concealing the path between the two. Both Codex and Claude Code expose the ingredients of that loop: repository context, command-line or editor tools, durable project guidance and ways to split work. The important comparison is therefore not a generic capability score. It is whether a team can turn those ingredients into a reviewable engineering practice.",
      "Codex’s official guidance emphasizes naming the desired behavior, pointing to the relevant code or reproduction, preserving constraints and stating how to verify the result. Its customization model separates project guidance, reusable skills and live integrations so a team can choose the smallest durable surface for each rule. That is useful when a repository has conventions that should survive beyond one chat session.",
      "Claude Code documents a similar agentic loop around tools, project instructions, skills, MCP and subagents. Its advice to explore before implementing and to give the agent something concrete to verify is especially important for large codebases. The difference between a productive run and a noisy one is usually whether the agent has a clear success condition, not whether it received a more elaborate prompt.",
      "A high-value evaluation should use one real issue from your own codebase. Require a written plan, a narrow patch, the exact test command and a concise account of what remains uncertain. Compare the review burden, not merely how quickly files changed. The stronger workflow is the one that makes it easiest for a human to accept, reject or revise the work with confidence."
    ],
    sources: [
      { label: "Codex prompting guidance", href: "https://developers.openai.com/codex/prompting", type: "Documentation" },
      { label: "Codex customization", href: "https://developers.openai.com/codex/concepts/customization", type: "Documentation" },
      { label: "Claude Code features overview", href: "https://code.claude.com/docs/en/features-overview", type: "Documentation" }
    ]
  },
  {
    slug: "context-engineering-for-ai-agents",
    title: "Context Engineering Is the Real Interface for an AI Agent",
    dek: "Memory, repository instructions and tool permissions are not housekeeping. They decide what an agent can know, what it may do, and whether its work remains reviewable after the conversation ends.",
    topic: "AI Agents",
    topicSlug: "ai-agents",
    date: "July 23, 2026",
    updated: "July 27, 2026",
    sourceCount: 3,
    visual: "context",
    imageSrc: "/images/articles/ai-agent-context-engineering-runtime.png",
    imageAlt: "OpenClaw agent runtime documentation graphic showing the layers of an AI agent workspace.",
    body: [
      "People often describe context engineering as a prompt-writing technique. For agents, it is closer to interface design. Every persistent instruction, workspace file, memory record and tool policy changes the evidence the system sees before it acts. If those layers are mixed together, an agent can appear capable while remaining impossible to audit or safely correct.",
      "OpenClaw’s workspace contract is a useful concrete example: separate files express operating instructions, tool notes, identity, user preferences and memory. Codex similarly distinguishes durable repository guidance from reusable skills and live tool integrations. These boundaries matter because a one-off request should not silently become a permanent rule, and a preference should not grant authority to run a tool.",
      "The failure mode is predictable. Teams feed every document, old chat and operational note into a large context window, then assume the agent has become more informed. In practice, stale or conflicting information can become harder to notice. Better systems keep a compact operating context, retrieve task-specific evidence deliberately and require the agent to say which source justified a consequential step.",
      "Start with a context inventory: what must be true for every task, what belongs only to this repository, what is personal preference, and what may be fetched on demand. Then add a verification checkpoint before outward actions such as publishing, deleting or changing access. This makes an agent less theatrical, but much more useful in real work."
    ],
    sources: [
      { label: "OpenClaw agent runtime", href: "https://docs.openclaw.ai/concepts/agent", type: "Documentation" },
      { label: "Codex customization", href: "https://developers.openai.com/codex/concepts/customization", type: "Documentation" },
      { label: "Claude Code memory", href: "https://code.claude.com/docs/en/memory", type: "Documentation" }
    ]
  },
  {
    slug: "codex-repository-workflow-verification",
    title: "A Reliable Codex Task Has Four Artifacts: Scope, Context, Patch, Verification",
    dek: "The best way to use a coding agent is not to ask for more initiative. It is to make the change, its constraints and its proof of correctness easy to inspect.",
    topic: "Codex",
    topicSlug: "codex",
    date: "July 24, 2026",
    updated: "July 27, 2026",
    sourceCount: 2,
    visual: "report",
    imageSrc: "/images/agent-harness-loop-workflow-graph-editorial-illustration.png",
    imageAlt: "Editorial illustration of an AI-agent workflow with harness, loop, and graph stages.",
    body: [
      "Codex is most useful when a software task can be expressed as an engineering contract rather than a vague wish. That contract has four artifacts: a scope that says what should change, repository context that makes local conventions visible, a patch that can be reviewed, and a verification step that can fail. Omitting any one of them makes a result harder to trust, even if the code looks plausible at first glance.",
      "The official prompting guidance points in this direction: identify the desired behavior, name relevant files or reproduction steps, preserve constraints and state how the result should be verified. This is not prompt ornament. It gives the agent an observable target and tells a reviewer what evidence to expect when the work is done.",
      "Durable context should be deliberately small. Repository guidance belongs in a project instruction file; repeatable procedures belong in a skill; live data belongs behind a connector or tool. A request like 'fix the checkout' should not silently become a permanent rule for every task, and a temporary workaround should not be mistaken for a repository convention.",
      "The practical test is to hand Codex a bug that has a known reproduction. Ask for a short plan, a scoped patch, the exact test command and a candid note about what was not tested. If those four artifacts are present, a teammate can make an informed review decision. If they are not, the apparent speed of the first edit is usually a false economy."
    ],
    sources: [
      { label: "Codex prompting guidance", href: "https://developers.openai.com/codex/prompting", type: "Documentation" },
      { label: "Codex customization", href: "https://developers.openai.com/codex/concepts/customization", type: "Documentation" }
    ]
  },
  {
    slug: "claude-code-context-tools-review-loop",
    title: "Claude Code Is Most Valuable When Context and Review Stay Separate",
    dek: "A practical guide to treating project instructions, memory, tools and human review as distinct layers instead of one growing prompt.",
    topic: "Claude Code",
    topicSlug: "claude-code",
    date: "July 22, 2026",
    updated: "July 27, 2026",
    sourceCount: 2,
    visual: "context",
    imageSrc: "/images/ai-agent-context-engineering-workspace.png",
    imageAlt: "AI agent workspace illustration showing context, tools, and review steps.",
    body: [
      "Claude Code can inspect a codebase, use tools and work through a multi-step task. That ability is only dependable when the information it receives is separated by purpose. Project instructions should express stable conventions; task prompts should express the change at hand; memory should preserve useful context without becoming an unbounded archive; and tools should be granted only where they are needed.",
      "The product documentation describes an agentic loop in which tool results inform the next action, and it points to skills, MCP, hooks and subagents as extensions rather than substitutes for that loop. This matters because a long list of integrations can create the impression of capability while making it unclear which tool produced a particular conclusion or changed a file.",
      "For large repositories, the most valuable habit is to explore before implementing. Ask the agent to identify the relevant files and tests, state its plan, and surface assumptions before it edits. Then give it a narrow verification target. This reduces the common failure mode in which a locally coherent patch breaks a convention that lived elsewhere in the codebase.",
      "A review-ready Claude Code workflow leaves an evidence trail: what context was used, which commands ran, what changed and what remains uncertain. That is more useful than a claim of autonomy. It lets a team adopt agent assistance without giving up the engineering judgement that protects production systems."
    ],
    sources: [
      { label: "Claude Code features overview", href: "https://code.claude.com/docs/en/features-overview", type: "Documentation" },
      { label: "Claude Code memory", href: "https://code.claude.com/docs/en/memory", type: "Documentation" }
    ]
  },
  {
    slug: "ai-for-science-alphafold-evidence-loop",
    title: "AI for Science Starts With an Evidence Loop, Not a Demo",
    dek: "AlphaFold 3 illustrates both the promise of scientific AI and the discipline required to move from a model output to a scientific claim.",
    topic: "AI for Science",
    topicSlug: "ai-for-science",
    date: "July 20, 2026",
    updated: "July 27, 2026",
    sourceCount: 3,
    visual: "world",
    imageSrc: "/images/articles/alphafold-3-biomolecular-interactions.png",
    imageAlt: "AlphaFold 3 research figure showing predicted biomolecular interactions.",
    body: [
      "AI for science should be judged differently from an ordinary product feature. A compelling output is not the end of the workflow; it is a candidate explanation, structure or experiment that must be connected to data provenance, uncertainty and independent validation. The most valuable systems shorten the cycle between a scientific question and a testable next step, rather than simply generating a more persuasive visual.",
      "AlphaFold 3 is a useful case study because the published work addresses biomolecular interactions while the released inference pipeline makes concrete operational demands. The project documentation distinguishes the code, model parameters, data pipeline and input formats. Those details matter: a result depends on how sequences, ligands, templates and other evidence entered the system, not just on the final predicted structure.",
      "This is why scientific teams need to preserve a chain of evidence. Record the input version, the model and parameter version, the preprocessing choices, the confidence signals and the experiment that would challenge the result. A prediction can prioritize work, but it should not inherit the status of an empirical finding merely because it is presented with scientific vocabulary.",
      "The best first application is a narrow bottleneck with an existing validation loop: ranking candidates for an assay, organizing literature evidence, or proposing a small set of testable hypotheses. Measure whether the system improves the quality or speed of the next experiment. That is the standard that matters—not whether an AI system can produce a dramatic standalone result."
    ],
    sources: [
      { label: "AlphaFold 3 research paper", href: "https://doi.org/10.1038/s41586-024-07487-w", type: "Research paper" },
      { label: "AlphaFold 3 inference pipeline", href: "https://github.com/google-deepmind/alphafold3", type: "Code repository" },
      { label: "AlphaFold 3 input documentation", href: "https://github.com/google-deepmind/alphafold3/blob/main/docs/input.md", type: "Documentation" }
    ]
  },
  {
    slug: "kimi-k3-what-moonshot-has-announced",
    title: "Kimi K3: What Moonshot Has Announced So Far",
    dek: "A source-first reading of Moonshot’s Kimi K3 announcement, documentation, and the questions that still need the technical report.",
    topic: "Model releases",
    topicSlug: "ai-agents",
    date: "July 16, 2026",
    updated: "July 24, 2026",
    sourceCount: 2,
    visual: "network",
    imageSrc: "/images/articles/kimi-k3-open-world-model-capability.png",
    imageAlt: "Kimi K3 launch-blog example of an open-world interactive experience generated by the model.",
    modelSlugs: ["kimi"],
    body: [
      "Moonshot describes Kimi K3 as a 2.8 trillion-parameter model with native visual capabilities and a one-million-token context window. Its announcement also says that the model uses Kimi Delta Attention and Attention Residuals. Those are the company’s descriptions; they should be read alongside the technical report when it is published.",
      "For developers, the useful first questions are narrower than a launch claim: which model identifier is available, what the API documentation lists for pricing and modes, and when the published weights and additional evaluation details are due. The official announcement and quickstart are the sources for those details.",
      "This page is intentionally limited to information Moonshot has made public. It does not turn provider benchmarks into independent rankings, and it does not infer deployment requirements that have not been documented."
    ],
    sources: [
      { label: "Kimi K3 Tech Blog", href: "https://www.kimi.com/blog/kimi-k3", type: "Official release" },
      { label: "Kimi K3 Quickstart", href: "https://platform.kimi.ai/docs/guide/kimi-k3-quickstart", type: "Documentation" }
    ]
  },
  {
    slug: "qwen35-native-multimodal-agents-explained",
    title: "Qwen3.5: Native Multimodal Agents, Explained",
    dek: "What Alibaba has released, what its architecture claims mean in practice, and which details belong to provider-reported evaluation.",
    topic: "Model releases",
    topicSlug: "ai-agents",
    date: "February 16, 2026",
    updated: "July 24, 2026",
    sourceCount: 2,
    visual: "context",
    imageSrc: "/images/articles/qwen-3-5-native-multimodal-agents.png",
    imageAlt: "Qwen3.5 launch visual for native multimodal agent capabilities.",
    modelSlugs: ["qwen"],
    body: [
      "Alibaba introduced Qwen3.5 as an open-weight, natively multimodal model family. Its launch materials describe a 397B-parameter mixture-of-experts model with 17B activated parameters per forward pass, alongside reasoning, coding, agent and multimodal claims.",
      "The release matters because it frames efficiency and multimodal agent work as one system-design question. That is different from treating a vision model as a bolt-on feature, but the practical trade-offs still depend on the exact model size, serving stack and workload.",
      "Provider-reported benchmarks are useful context, not an independent league table. The official release and repository should remain linked whenever a specification or availability claim is discussed."
    ],
    sources: [
      { label: "Qwen3.5 official release", href: "https://www.alibabacloud.com/blog/qwen3-5-towards-native-multimodal-agents_602894", type: "Official release" },
      { label: "Qwen3.5 repository", href: "https://github.com/QwenLM/Qwen3.5", type: "Code repository" }
    ]
  },
  {
    slug: "qwen-agentworld-language-world-models",
    title: "Qwen-AgentWorld and the Rise of Language World Models",
    dek: "A practical guide to the term “language world model” through Qwen-AgentWorld’s open release and technical report.",
    topic: "World Models",
    topicSlug: "world-models",
    date: "June 24, 2026",
    updated: "July 24, 2026",
    sourceCount: 2,
    visual: "world",
    imageSrc: "/images/articles/qwen-agentworld-language-world-model.png",
    imageAlt: "Qwen-AgentWorld GitHub project preview for language world models and general agents.",
    modelSlugs: ["qwen"],
    body: [
      "Qwen-AgentWorld is presented by its authors as a language world model for general agents. The project focuses on modeling agent environments across tool-oriented domains rather than only producing a final text response.",
      "The practical distinction is useful but not universal: “world model” is an active research term with multiple definitions. A source-first article should explain the authors’ stated objective, training setup and evaluation scope without treating one release as the field’s final definition.",
      "Its official repository, technical report and released evaluation materials are the appropriate places to verify capabilities, model sizes and licensing details."
    ],
    sources: [
      { label: "Qwen-AgentWorld repository", href: "https://github.com/QwenLM/Qwen-AgentWorld", type: "Code repository" },
      { label: "Qwen-AgentWorld technical report", href: "https://arxiv.org/abs/2606.24597", type: "Research paper" }
    ]
  },
  {
    slug: "what-is-a-looped-transformer",
    title: "What Is a Looped Transformer? Loopie and LoopFormer in Context",
    dek: "Why repeated computation and shared depth are back in the conversation—and why paper status matters when reading the claims.",
    topic: "Loops",
    topicSlug: "loops",
    date: "July 20, 2026",
    updated: "July 24, 2026",
    sourceCount: 2,
    visual: "loop",
    imageSrc: "/images/articles/loopformer-looped-transformer-architecture.png",
    imageAlt: "LoopFormer architecture figure illustrating recurrent transformer computation.",
    body: [
      "Looped transformers reuse computation across steps or depth. The appeal is an adjustable trade-off between parameter count, inference compute and iterative refinement—but the design also changes optimization and evaluation questions.",
      "Loopie and LoopFormer are useful entry points because they make distinct claims about scaling and variable compute. They are research materials, not product documentation, and their reported results should be read with their methods and publication status in view.",
      "A careful explainer separates architecture ideas from deployment recommendations and avoids treating a single benchmark result as a general measure of model quality."
    ],
    sources: [
      { label: "Loopie preprint", href: "https://arxiv.org/abs/2607.16051", type: "Research paper" },
      { label: "LoopFormer project page", href: "https://loopformer.github.io/", type: "Research paper" }
    ]
  },
  {
    slug: "gpt-56-july-release-availability",
    title: "GPT-5.6: OpenAI’s July Release, Availability and Product Changes",
    dek: "A concise source list for OpenAI’s July GPT-5.6 release and the product-specific availability details readers should verify.",
    topic: "Model releases",
    topicSlug: "ai-agents",
    date: "July 9, 2026",
    updated: "July 24, 2026",
    sourceCount: 2,
    visual: "release",
    imageSrc: "/images/articles/gpt-5-6-sol-terra-luna-model-family.png",
    imageAlt: "Illustration of the GPT-5.6 Sol, Terra, and Luna model family.",
    modelSlugs: ["openai"],
    body: [
      "OpenAI’s July announcement describes the GPT-5.6 family and its product rollout. Availability, plan access and product behavior can change during staged releases, so the announcement should be read with the release notes rather than as a permanent compatibility matrix.",
      "For comparison coverage, this is a closed-model reference point rather than an open-model entry. The site should be explicit about that difference instead of treating all model releases as interchangeable.",
      "The best update path is to retain the official release and release-notes URLs in the article record, then revise the page when availability materially changes."
    ],
    sources: [
      { label: "GPT-5.6 release", href: "https://openai.com/index/gpt-5-6/", type: "Official release" },
      { label: "OpenAI model release notes", href: "https://help.openai.com/en/articles/9624314-model-release-notes", type: "Documentation" }
    ]
  },
  {
    slug: "anthropic-economic-index-connector",
    title: "What Anthropic’s Economic Index Connector Can—and Cannot—Show",
    dek: "The connector makes Anthropic’s usage data easier to query. It does not turn that dataset into a complete view of the labor market.",
    topic: "AI Agents",
    topicSlug: "ai-agents",
    date: "July 22, 2026",
    updated: "July 24, 2026",
    sourceCount: 1,
    visual: "context",
    imageSrc: "/images/articles/anthropic-economic-index-connector.png",
    imageAlt: "Anthropic Economic Index connector announcement illustration.",
    modelSlugs: ["anthropic"],
    body: [
      "Anthropic’s announcement describes a connector that lets Claude users explore the Anthropic Economic Index. The company also states a crucial limitation: the index reflects patterns in Claude usage, not the labor market as a whole.",
      "That limitation should be the starting point for coverage. A useful article can explain the interface, underlying dataset and possible questions without making broader employment claims the source does not support.",
      "Where a company provides both a product announcement and a methodological caveat, the article should preserve both—not only the launch claim."
    ],
    sources: [
      { label: "Anthropic Economic Index connector", href: "https://www.anthropic.com/news/anthropic-economic-index-connector", type: "Official release" }
    ]
  },
  {
    slug: "deepseek-reported-four-hour-investor-meeting",
    title: "DeepSeek’s Reported Four-Hour Investor Meeting: What Is Verifiable",
    dek: "A reporting-based review that separates news coverage from an official DeepSeek announcement or confirmed meeting transcript.",
    topic: "Industry reporting",
    topicSlug: "ai-agents",
    date: "July 23, 2026",
    updated: "July 24, 2026",
    sourceCount: 2,
    visual: "report",
    imageSrc: "/images/articles/deepseek-liang-wenfeng-investor-meeting.jpg",
    imageAlt: "DeepSeek image accompanying reporting on its reported investor meeting.",
    modelSlugs: ["deepseek"],
    body: [
      "News reports have described a four-hour DeepSeek investor meeting and attributed comments to founder Liang Wenfeng. This is reporting, not an official company release or a primary meeting record published by DeepSeek.",
      "That distinction shapes the entire article: reported details must be attributed to the reporting outlet, and claims that cannot be independently verified should not be turned into a model roadmap or company policy statement.",
      "The page will be updated or narrowed if DeepSeek publishes a direct statement, a verifiable transcript or a correction that changes the available evidence."
    ],
    sources: [
      { label: "Reuters reporting, republished", href: "https://kelofm.com/2026/07/23/founder-says-deepseek-prioritises-agi-over-profit-likely-to-keep-top-models-open-source-yicai-reports/", type: "Reporting" },
      { label: "Bloomberg Law reporting", href: "https://news.bloomberglaw.com/capital-markets/deepseek-champions-chinas-bid-to-flood-the-world-with-cheap-ai", type: "Reporting" }
    ]
  },
  {
    slug: "baidu-reported-2026-okrs-ai-commercialization",
    title: "Baidu’s Reported 2026 OKRs: Signals for AI Commercialization",
    dek: "A clearly attributed reading of reporting on Baidu’s internal OKRs and what it may indicate about AI commercialization priorities.",
    topic: "Industry reporting",
    topicSlug: "ai-agents",
    date: "July 21, 2026",
    updated: "July 24, 2026",
    sourceCount: 1,
    visual: "report",
    imageSrc: "/images/articles/baidu-ai-commercialization-2026-okrs.jpg",
    imageAlt: "Baidu image accompanying reporting on its 2026 AI commercialization priorities.",
    body: [
      "Reporting on Baidu’s 2026 OKRs describes a greater emphasis on commercial outcomes after earlier AI reorganization. The underlying OKR document is not presented as a public company announcement in the source used here.",
      "That makes this a reported industry analysis, not a company fact sheet. The article should attribute the claims, avoid extending them to unannounced model plans, and be revised if Baidu publishes primary material.",
      "The editorial value is in explaining why internal operating signals can matter for AI product strategy—not in reproducing a leaked document."
    ],
    sources: [
      { label: "36Kr reporting on Baidu’s 2026 OKRs", href: "https://36kr.com/p/3677431731774085", type: "Reporting" }
    ]
  }
];

export const researchNotes = [
  "A source checklist for provider-reported benchmarks",
  "Why model availability pages need a last-checked date",
  "How to read an open-weight release without assuming a license",
  "What makes a useful model comparison table",
  "When a research paper should not become a deployment guide"
];

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export function getTopic(slug: string) {
  return topics.find((topic) => topic.slug === slug);
}

export function getModel(slug: string) {
  return models.find((model) => model.slug === slug);
}

export function articlesForTopic(slug: string) {
  return articles.filter((article) => article.topicSlug === slug).sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
}

export function articlesForModel(slug: string) {
  return articles.filter((article) => article.modelSlugs?.includes(slug));
}

export function modelsForAccess(access: Model["access"]) {
  return models.filter((model) => model.access === access);
}

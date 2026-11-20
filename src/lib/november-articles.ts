import type { Article } from "./blog-data";

export const novemberArticles: Article[] = [
  {
    "slug": "minimax-h3-image-open-weights-4k-license",
    "title": "MiniMax H3-Image: What Its 4K Open-Weight Release Means for Creators and Developers",
    "dek": "A closer look at the image model’s speed claims, editing workflow, hardware footprint and unusually restrictive community license.",
    "topic": "AI Agents",
    "topicSlug": "ai-agents",
    "date": "November 11, 2026",
    "updated": "November 11, 2026",
    "sourceCount": 3,
    "visual": "release",
    "imageSrc": "/images/articles/minimax-h3-image-open-weights-4k-license-overview.svg",
    "imageAlt": "From prompt to high-resolution image",
    "imageCaption": "DSFlashHub editorial illustration.",
    "secondaryImageSrc": "/images/articles/minimax-h3-image-open-weights-4k-license-workflow.svg",
    "secondaryImageAlt": "Workflow diagram",
    "sourcesAsText": true,
    "modelSlugs": [],
    "body": [
      "The short answer: H3-Image is an open-weight image generation and editing model announced by MiniMax in November 2026. Its appeal is high-resolution output and reference-based editing; its practical constraints are a substantial deployment footprint and a license that limits where and how the model may be used.",
      "MiniMax’s November 11 announcement describes a model that generates images from text, works with reference images and edits existing pictures. The company says it can produce a 4096 × 4096 image in under 10 seconds and accept up to 16 reference images. These are provider claims, not measurements from our own tests; speed depends on the serving system and the way latency is measured."
    ],
    "sections": [
      {
        "heading": "Why 4K changes the workflow",
        "paragraphs": [
          "A 4096 × 4096 image contains about 16.8 million pixels. That gives designers more material for cropping, print layouts and detailed compositions than a smaller image, but resolution alone does not guarantee correct text, accurate products or consistent faces. A plausible image can still contain small errors that become obvious when printed or viewed at full size.",
          "The model card describes an effective working range of roughly 4–20 megapixels and identifies around 16 megapixels as a sweet spot. Its examples include portrait, landscape and widescreen sizes. That matters because a real campaign rarely needs every image as a square: the intended crop and subject placement should be part of the brief."
        ]
      },
      {
        "heading": "One model, three useful ways to work",
        "paragraphs": [
          "Text-to-image starts with a description. Reference-based generation uses supplied images as visual context. Editing starts from existing images and asks the model to change selected aspects. For an editorial team, these are different jobs: concept exploration rewards variety, while product editing requires fidelity to an existing object and its brand details.",
          "The documentation says reference images are numbered in upload order, so prompts can identify individual pictures. That is useful for combining a style reference with a separate subject reference, but it also makes the order of uploads part of the experiment. Save the prompt, references, order, dimensions and seed when comparing outputs."
        ]
      },
      {
        "heading": "The prompt is part of the system",
        "paragraphs": [
          "The model card says the model expects a detailed English description. MiniMax’s hosted API expands short prompts using a separate context component; it also offers an optional local prompt-expansion model. Consequently, a short prompt in the hosted product and the same words sent directly to a local server are not necessarily equivalent inputs. Compare the final expanded prompts before attributing a difference to model weights.",
          "The documented local interface uses six inference steps and does not support negative prompts in that workflow. Those restrictions matter if you are migrating a pipeline built around a different diffusion model. Rebuild your presets and test them; do not assume a familiar set of controls will transfer unchanged."
        ]
      },
      {
        "heading": "Local deployment: the download is only the beginning",
        "paragraphs": [
          "H3-Image model package — 68.65 GB — Includes the principal image model and associated components.",
          "Separate H3 text encoder — 66.7 GB — Downloaded separately unless already present.",
          "Optional prompt expander — 17.9 GB — Additional component; not required for every workflow.",
          "These are published file sizes, not minimum GPU memory requirements. Runtime memory also depends on precision, image dimensions, batching, framework, offloading and concurrency. The model card lists SGLang, vLLM-Omni, Diffusers and ComfyUI, and points to hardware-specific guidance for NVIDIA and AMD accelerators. Check a current recipe for your exact hardware rather than assuming that a downloadable model fits on a consumer GPU."
        ]
      },
      {
        "heading": "Read the license before building a product",
        "paragraphs": [
          "H3-Image uses a custom community license, not MIT or Apache 2.0. The version reviewed defines its applicable territory as worldwide excluding the European Union, United Kingdom, South Korea and United States. Its restrictions also cover use of outputs outside that territory. MiniMax invites parties in excluded territories to seek separate permission.",
          "The agreement also requires prior written authorization for providing a hosted service to third parties, or when the licensee and/or affiliates exceed the stated $1 million annualized-revenue threshold. There are additional distribution, user-facing and acceptable-use requirements. This describes the published model license, not necessarily the terms of a separately contracted hosted API. Product teams should read the full current terms and clarify their own intended use before deployment."
        ]
      },
      {
        "heading": "A practical evaluation plan",
        "paragraphs": [
          "Choose ten representative briefs: product fidelity, typography, visual consistency, reference adherence and editorial concepts.",
          "Run each at the intended aspect ratio and resolution, keeping the final prompt and reference order.",
          "Measure end-to-end wait time, including prompt expansion and queueing, rather than generation alone.",
          "Review full-resolution output for invented product details, text errors and unwanted edits.",
          "Calculate cost per accepted image, including rejected variants and any review or retouching.",
          "H3-Image is worth investigating if high-resolution generation and reference control are central to the workflow. Its strongest claimed speed and quality advantages remain to be independently reproduced, while its license and system footprint are already material factors in the decision."
        ]
      }
    ],
    "sources": [
      {
        "label": "MiniMax H3-Image announcement",
        "href": "https://www.minimax.io/blog/minimax-h3-image",
        "type": "Official release"
      },
      {
        "label": "MiniMax H3-Image model card",
        "href": "https://huggingface.co/MiniMaxAI/MiniMax-H3-Image",
        "type": "Documentation"
      },
      {
        "label": "MiniMax H3-Image community license",
        "href": "https://huggingface.co/MiniMaxAI/MiniMax-H3-Image/blob/main/LICENSE",
        "type": "Documentation"
      }
    ]
  },
  {
    "slug": "longcat-2-5-open-weights-multimodal-agent",
    "title": "LongCat-2.5 Open Weights: What Meituan’s Multimodal Agent Model Means for Developers",
    "dek": "A practical guide to the model’s architecture, coding evaluations, MIT license and the infrastructure questions behind self-hosting.",
    "topic": "AI Agents",
    "topicSlug": "ai-agents",
    "date": "November 11, 2026",
    "updated": "November 11, 2026",
    "sourceCount": 3,
    "visual": "release",
    "imageSrc": "/images/articles/longcat-2-5-open-weights-multimodal-agent-overview.svg",
    "imageAlt": "A large model for longer tasks",
    "imageCaption": "DSFlashHub editorial illustration.",
    "secondaryImageSrc": "/images/articles/longcat-2-5-open-weights-multimodal-agent-workflow.svg",
    "secondaryImageAlt": "Workflow diagram",
    "sourcesAsText": true,
    "modelSlugs": [
      "deepseek"
    ],
    "body": [
      "The short answer: Meituan’s LongCat-2.5 combines image understanding with agent-oriented language and coding capabilities. Its weights are available under the MIT license, but a permissive license does not make a 1.6-trillion-parameter model inexpensive to serve.",
      "The public release of weights on LongCat’s Hugging Face repository is the key event: teams can inspect the model card and assess self-hosting rather than relying exclusively on a hosted interface. A release tracker records the weights announcement on November 9, 2026, separate from the earlier model/API release."
    ],
    "sections": [
      {
        "heading": "What LongCat-2.5 is designed to do",
        "paragraphs": [
          "Meituan describes LongCat-2.5 as a native multimodal mixture-of-experts model aimed at long-horizon agent tasks: jobs in which a model must interpret a request, make multiple tool calls, inspect results and continue toward a goal. The model card reports 1.6 trillion total parameters, about 48 billion activated per token, and support for visual understanding as well as agentic coding.",
          "That design is relevant to tasks such as analyzing an unfamiliar codebase, following a visual specification or building a multi-file prototype. The model alone does not perform those workflows: it needs a harness that supplies tools, manages context, handles errors and decides which actions require human approval."
        ]
      },
      {
        "heading": "What mixture of experts does—and does not—save",
        "paragraphs": [
          "In an MoE system, only selected parts of the network are active for a given token. The 48B active figure helps explain computation per token, but the much larger total parameter count still matters for storage, memory placement and communication between devices. It is therefore misleading to plan deployment as if this were an ordinary 48B dense model.",
          "LongCat’s card describes W4A4 quantization for expert weights and activations and reports improved throughput in its own tested configuration. Quantization can reduce some serving costs, but its quality and speed effects depend on hardware, kernels, precision and workload. Those reported improvements should not be treated as a guarantee for another deployment."
        ]
      },
      {
        "heading": "How to read the benchmark table",
        "paragraphs": [
          "Meituan reports 88.4 on Terminal-Bench v2.1, 38.5 on Terminal-Bench v4.0 and 64.6 on DeepSWE v1.1. The model card presents these as vendor-reported results and notes that some competitor scores were drawn from public reports or leaderboards. The numbers have different task sets and evaluation conditions; they should not be averaged into an overall ranking.",
          "A coding-agent result reflects the whole setup: prompt, tools, test environment, allowed attempts, time budget and model. Before choosing a model on the strength of a score, inspect the footnotes and ask whether the setup resembles your repository and acceptance tests. A high score on a short benchmark does not prove that a model can safely maintain a production system for hours."
        ]
      },
      {
        "heading": "MIT helps, but deployment still needs planning",
        "paragraphs": [
          "The repository states that the weights are under the MIT license. The model card also says the license does not grant rights to Meituan trademarks or patents. Review the actual license and any separate terms for tools, services and datasets used around the model.",
          "For NPU deployment, the card points to SGLang-FluentLLM. A working implementation depends on support for the exact model architecture, quantization and accelerator stack; availability of weights alone does not establish support on a particular NVIDIA GPU or consumer machine. Ask for a validated serving recipe before committing infrastructure budget.",
          "Try a hosted service — Model version, data handling, rates, rate limits and tool-call support.",
          "Self-host — Supported hardware, total memory across devices, network bandwidth, throughput and operations staffing.",
          "Use for coding agents — Sandbox permissions, test coverage, review gates and behavior on failed tool calls."
        ]
      },
      {
        "heading": "How to compare it with DeepSeek Flash",
        "paragraphs": [
          "Start with a shared set of actual tasks rather than a single vendor chart. For example, use ten small bug fixes, five multi-file changes and five image-to-interface tasks. Give both systems the same repository snapshot, tools, time limits and review criteria. Record accepted changes, test failures, human correction time, total tokens and cost. If different harnesses are necessary, report that difference rather than calling the result a pure model comparison.",
          "Measure reliability as well as best-case output. Did the agent recover after an incomplete tool call? Did it invent an API? Did it run tests and accurately report their result? A slower agent that produces reviewable changes on the first attempt can be cheaper per accepted task than a faster one that requires several retries."
        ]
      },
      {
        "heading": "Who should pay attention?",
        "paragraphs": [
          "LongCat-2.5 is a meaningful candidate for teams exploring open-weight agent infrastructure, especially where MIT licensing is attractive and accelerator capacity already exists. Smaller teams should first verify whether a suitable hosted route is available and whether the model improves their own task outcomes enough to justify integration. We have not independently run the model or verified any particular deployment."
        ]
      }
    ],
    "sources": [
      {
        "label": "LongCat-2.5 model card",
        "href": "https://huggingface.co/meituan-longcat/LongCat-2.5",
        "type": "Documentation"
      },
      {
        "label": "LongCat-2.5 MIT license",
        "href": "https://huggingface.co/meituan-longcat/LongCat-2.5/blob/main/LICENSE",
        "type": "Documentation"
      },
      {
        "label": "The Model Gap release timeline",
        "href": "https://themodelgap.com/new-ai-models",
        "type": "Reporting"
      }
    ]
  },
  {
    "slug": "kimi-k3-1-pro-open-weights-deployment",
    "title": "Kimi K3.1 Pro Open Weights: Performance, Hardware Requirements and License Explained",
    "dek": "The model was introduced in October. Its November weight release raises a different question: who can realistically run and evaluate it?",
    "topic": "Coding Agents",
    "topicSlug": "coding-agents",
    "date": "November 11, 2026",
    "updated": "November 11, 2026",
    "sourceCount": 4,
    "visual": "release",
    "imageSrc": "/images/articles/kimi-k3-1-pro-open-weights-deployment-overview.svg",
    "imageAlt": "From frontier model to downloadable weights",
    "imageCaption": "DSFlashHub editorial illustration.",
    "secondaryImageSrc": "/images/articles/kimi-k3-1-pro-open-weights-deployment-workflow.svg",
    "secondaryImageAlt": "Deployment diagram",
    "sourcesAsText": true,
    "modelSlugs": [
      "kimi",
      "deepseek"
    ],
    "body": [
      "The short answer: Kimi K3.1 Pro’s weights are public, but local control comes with a large infrastructure bill and a custom license. Moonshot’s benchmark results are promising for coding and agent tasks, yet they do not establish that every deployment will reproduce the hosted experience.",
      "Moonshot introduced Kimi K3.1 Pro on October 23, 2026. The more recent event is the publication of the model weights in early November. Its official model card describes a multimodal mixture-of-experts model with a 1,048,576-token context window, text and image inputs, 2.8 trillion total parameters and 104 billion activated per token."
    ],
    "sections": [
      {
        "heading": "What changed when the weights became public?",
        "paragraphs": [
          "With an API, a provider operates the model and controls serving. With downloadable weights, an organization can examine the published artifact and, subject to its license, operate it on its own infrastructure. That can support control over deployment, data handling and customization. It also transfers responsibility for hardware, updates, access controls, monitoring and incident response to the operator.",
          "A November 6 examination of the repository reported approximately 1.56 TB of weight files across 96 shards. Treat that as a published file-footprint observation, not a minimum VRAM specification. Actual memory depends on the inference implementation, model placement, runtime buffers, context length and concurrent requests."
        ]
      },
      {
        "heading": "Why 104B active does not mean 104B to store",
        "paragraphs": [
          "The model uses a mixture-of-experts architecture: a subset of experts is selected per token. That reduces the amount of computation relative to activating all 2.8 trillion parameters at once, but the rest of the weights still need a storage and access strategy. Distributed serving also adds networking and scheduling overhead.",
          "Moonshot lists MXFP4 weights and MXFP8 activations and points to vLLM, SGLang and TokenSpeed recipes. A lower-bit representation can reduce the footprint, but it does not turn this into a model that will automatically fit a typical desktop. Before purchasing hardware, validate the current recipe, the total device memory required, interconnect, expected throughput and the maximum context at your target concurrency."
        ]
      },
      {
        "heading": "What the benchmarks actually show",
        "paragraphs": [
          "In Moonshot’s model card, K3.1 Pro scores 65.7 on Terminal-Bench 4.0 and 75.5 on DeepSWE v1.1. In the same table, the reported DeepSeek V4.1 Flash 1017 numbers are 42.3 and 77.0 respectively. This illustrates why a single winner is a poor summary: results depend on the task, and the lead changes across benchmarks.",
          "These figures are presented by Moonshot, not measured by us. Its footnotes say the Terminal-Bench comparison uses Kimi with Claude Code while the DeepSeek score comes from DeepSeek’s release materials. Kimi’s default reported setting uses maximum reasoning effort unless otherwise stated. Before comparing costs or claiming superiority, check the harness, version, tools, attempts and inference budget for each result."
        ]
      },
      {
        "heading": "A million-token window is not free memory",
        "paragraphs": [
          "The advertised context window is a ceiling, not a recommendation to send a million tokens on every request. Longer inputs can increase prefill time, cache use and serving cost; actual behavior depends on the provider and configuration. A useful evaluation asks whether the model can find and use relevant information across a realistic long document, not merely whether a request is accepted.",
          "For a codebase agent, test a large repository with known questions and changes. Record retrieval accuracy, time to first useful output, total runtime and how often the agent relies on stale or irrelevant files. Compare full-context approaches with retrieval or targeted file access using the same acceptance criteria."
        ]
      },
      {
        "heading": "License and commercial use",
        "paragraphs": [
          "The weights use the Kimi K3.1 Pro License, a custom agreement. It should not be assumed to carry the same permissions as MIT or Apache 2.0. An independent release tracker identifies a separate-agreement condition for certain large model-access providers. Read the current agreement and its definitions for your business model; the availability of an API and permission to redistribute weights are separate questions."
        ]
      },
      {
        "heading": "When to use hosted access and when to self-host",
        "paragraphs": [
          "Faster to start; provider handles infrastructure. — More control over serving and data flows, with operational responsibility.",
          "Usage pricing and provider limits shape the economics. — Hardware, networking, utilization and staffing drive the economics.",
          "Check version stability, retention and tool support. — Check the license, validated recipes, performance and monitoring.",
          "For most first evaluations, a hosted endpoint is the cheaper way to learn whether K3.1 Pro improves a specific workflow. Self-hosting becomes more compelling when sustained demand, deployment control or customization justify the fixed investment. The break-even point depends on utilization and operational cost, not model size alone."
        ]
      },
      {
        "heading": "A fair pilot against DeepSeek Flash",
        "paragraphs": [
          "Select tasks that reflect real work: repository changes, visual specification interpretation and long-document questions. Keep tools, inputs, time limits and grading consistent. Record task success, human review time, model and tool costs, latency, and failure recovery. Run repeated trials where possible; a single impressive demo is not a reliable estimate of production performance.",
          "Kimi K3.1 Pro’s weight release gives capable teams another option for building their own agent stack. Whether it is the right option remains an engineering and economics question that has to be answered against the actual workload."
        ]
      }
    ],
    "sources": [
      {
        "label": "Kimi K3.1 Pro model card",
        "href": "https://huggingface.co/moonshotai/Kimi-K3.1-Pro",
        "type": "Documentation"
      },
      {
        "label": "Kimi K3.1 Pro license",
        "href": "https://huggingface.co/moonshotai/Kimi-K3.1-Pro/blob/main/LICENSE",
        "type": "Documentation"
      },
      {
        "label": "Traictory weight-file analysis",
        "href": "https://traictory.com/news/2026-11-06-kimi-k31-pro-open-weights",
        "type": "Reporting"
      },
      {
        "label": "Silicon AI News release tracker",
        "href": "https://siliconainews.com/tracker/ai-model-releases?kind=open-weights",
        "type": "Reporting"
      }
    ]
  },
  {
    "slug": "deepseek-v4-flash-full-suite-api",
    "title": "Search, OCR, and TTS Used to Mean Three Vendors. On deepseek-flash They Are Three Parameters.",
    "dek": "Search, file parsing, link reading, safety checks and voice endpoints now run inside one deepseek-flash request. What the server handles, where the cost goes, and what to test before launch.",
    "topic": "AI Agents",
    "topicSlug": "ai-agents",
    "date": "November 20, 2026",
    "updated": "November 20, 2026",
    "sourceCount": 0,
    "visual": "release",
    "author": "Cameron Voss",
    "tldr": [
      "V4.1-Flash, the model ID deepseek-flash, now accepts tool parameters on Messages, Responses and Chat Completions.",
      "Web search, deep-thinking search, file input, link reading and safety checks all run server-side inside one request.",
      "Search, Fetch, OCR, ASR and TTS are also available as standalone endpoints for teams with their own orchestration.",
      "Billing is the token cost plus a per-call fee for each tool use, so search depth is the variable to watch.",
      "A lightweight open-source client is published for testing the whole stack."
    ],
    "imageSrc": "/images/articles/deepseek-v4-flash-full-suite-api-overview.svg",
    "imageAlt": "Diagram of a DeepSeek V4.1-Flash API request reaching web search, link reading, file input, deep-thinking search and safety checks",
    "imageCaption": "One parameter per capability. The client sends a single request and gets a finished answer.",
    "imageFramed": true,
    "imageAspect": "landscape",
    "modelSlugs": ["deepseek"],
    "body": [
      "DeepSeek's chat product has always done more than answer questions. It searches, opens pages, reads uploaded documents, understands speech and filters risky replies. Building the same thing yourself used to mean wiring several vendors together and keeping the handoffs straight in your own code. That work has moved into the model call.",
      "V4.1-Flash, the model developers address as deepseek-flash, now accepts a set of optional tools on the Messages, Responses and Chat Completions endpoints. Switch one on and DeepSeek runs the tool, folds the result into the prompt and returns a final answer. You send one request and receive one response."
    ],
    "sections": [
      {
        "heading": "Search, files, links and a safety flag",
        "blocks": [
          { "kind": "p", "text": "Five capabilities sit on the standard endpoint:" },
          {
            "kind": "ul",
            "items": [
              "Web search. With deepseek_web_search enabled in normal mode, the model decides when a question needs outside information, queries a web or image index, and answers with citations attached.",
              "Deep-thinking search. The same switch, used in thinking mode, lets the model search and read pages in the middle of a multi-step reasoning pass. It can revise a search after seeing the first result instead of committing to one query.",
              "File input. PDFs, Office documents and images are accepted. DeepSeek extracts plain text or parses layout, including mixed text and images, then puts the result into context.",
              "Link reading. Turn on deepseek_read_url and any URL in the user's message gets fetched and used as context.",
              "Safety checks. A screening parameter reviews input and output and returns a refusal marker when content trips a rule."
            ]
          },
          { "kind": "p", "text": "The loop between those steps is not yours to manage. Tool choice, the calls, and the context assembly all run on DeepSeek's side. That removes a familiar class of bug from retrieval pipelines: state lost between hops, tool output dropped because an intermediate step timed out, context order scrambled by a queue." },
          { "kind": "p", "text": "The trade-off is visibility. You receive the answer, not a transcript of every lookup. Log the parameters you send and the citations you get back. Treat what happens between them as an operated black box, and design your error handling around that assumption." },
          {
            "kind": "image",
            "src": "/images/articles/deepseek-v4-flash-full-suite-api-request-flow.svg",
            "alt": "Request flow diagram showing a user message, API request, server-side tool router, context assembly and an answer with citations",
            "caption": "The caller sees five stages. Stages three and four repeat internally as the model works."
          }
        ]
      },
      {
        "heading": "Two search behaviors in one parameter",
        "blocks": [
          { "kind": "p", "text": "In normal mode, search behaves like a lookup. The model notices a gap, runs a query, and writes an answer with references. This is the mode to use for product descriptions, current events and questions with a factual answer somewhere on the open web." },
          { "kind": "p", "text": "In thinking mode, search becomes part of the reasoning process. The model can start from a broad query, read what comes back, and narrow the next one. For research questions, that produces better coverage than a single search, at the cost of more tool calls and more time before the first token arrives." },
          { "kind": "p", "text": "Streaming matters here. A thinking response that spends six seconds on lookups looks broken in a non-streaming client. Show progress, or at least a typing state, and put a ceiling on how many steps a single turn may take." }
        ]
      },
      {
        "heading": "Standalone endpoints for teams that already own the loop",
        "blocks": [
          { "kind": "p", "text": "The same infrastructure is sold separately as Search, Fetch, OCR, ASR and TTS. That matters for two kinds of teams. If you already run an agent framework with your own tool router, you can call Search and Fetch directly and keep control of the sequence. If you are building a voice product, OCR, ASR and TTS cover the pieces that usually come from three different vendors." },
          { "kind": "cta", "pre": "If you are weighing whether to keep an existing OCR or TTS contract, our ", "label": "pricing page", "href": "/pricing", "post": " lists what each plan allowance covers, which makes the comparison concrete." },
          {
            "kind": "image",
            "src": "/images/articles/deepseek-v4-flash-standalone-apis-search-fetch-ocr-asr-tts.svg",
            "alt": "Five standalone DeepSeek endpoints: Search, Fetch, OCR, ASR and TTS, with a short description of each",
            "caption": "Each endpoint works on its own. Together they rebuild most of the assistant experience."
          }
        ]
      },
      {
        "heading": "A working client you can clone",
        "blocks": [
          { "kind": "p", "text": "DeepSeek published a lightweight front-end demo that uses the new endpoints and imports an existing chat history. The hosted build and the source are published under the deepseek-ai organization on GitHub, in a repository named chat-demo." },
          { "kind": "p", "text": "Read it before you design your own client. It shows the request shape for each capability and a workable split between the interface and the server. Most of the value is in the parts that are boring: how uploads are passed, how citations are rendered, how a refusal is displayed without confusing the user." }
        ]
      },
      {
        "heading": "How the bill is built",
        "blocks": [
          { "kind": "p", "text": "Token pricing works as before. Tool use adds a second charge, billed per call. A conversation that stays inside its context is a token calculation. A conversation that researches is also paying for every page it opened." },
          {
            "kind": "table",
            "head": ["Charge", "What triggers it", "Where it grows"],
            "rows": [
              ["Input tokens", "Prompt, conversation history, parsed file text, fetched pages", "Long documents and multi-turn chats"],
              ["Output tokens", "Reasoning steps and the final answer", "Thinking mode on hard questions"],
              ["Tool calls", "Each search, fetch, OCR, ASR or TTS call", "Agent loops that keep looking things up"]
            ]
          },
          {
            "kind": "image",
            "src": "/images/articles/deepseek-v4-flash-api-cost-token-vs-tool-call.svg",
            "alt": "Cost diagram showing token charges and per-call tool charges combining into the total cost of one request",
            "caption": "Two layers, one invoice. Tool fees sit on top of the token rate."
          },
          { "kind": "p", "text": "Instrument the tool calls, not only the token counter. Search depth is the variable that surprises teams: a thinking-mode turn on a broad question can run several paid lookups before it writes anything. Cache pages you fetch more than once. Set a step budget per conversation and log when it is hit." },
          { "kind": "cta", "pre": "Before you commit a budget, the current V4.1 Flash and V4 Pro subscription plans and their usage allowances are compared on our ", "label": "pricing page", "href": "/pricing", "post": "." }
        ]
      },
      {
        "heading": "Before you put it in front of users",
        "blocks": [
          {
            "kind": "ul",
            "items": [
              "Turn on the safety parameter if the app is public. It gives you a baseline filter, not a finished compliance program. Content review, model registration and AI labeling obligations stay with you where they apply.",
              "Measure latency per stage. Search and file parsing add time before the first token, and the difference shows up in perceived quality more than in benchmarks.",
              "Test with the documents your users actually upload. Scans, tables and two-column PDFs are where extraction fails quietly.",
              "Keep a fallback for tool failures. A search that returns nothing should not turn into an empty answer."
            ]
          }
        ]
      },
      {
        "heading": "What this changes for builders",
        "blocks": [
          { "kind": "p", "text": "The distance between an idea and a working assistant is shorter. A team that wants search plus document reading no longer needs three vendors and a queue to keep them in order. That work is now a parameter, and the effort moves up a level: interface, permissions, retention, and the parts of the experience that are actually yours." },
          { "kind": "p", "text": "What it does not do is make the product decisions. Choosing when to search, when to read a file, and when to admit the answer is not in the context is still design work. The API removes the plumbing around those choices. It does not make them." }
        ]
      }
    ],
    "sources": []
  }
];

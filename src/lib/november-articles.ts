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
  },
  {
    "slug": "deepseek-kimi-glm-qwen-flagship-comparison",
    "title": "DeepSeek, Kimi, GLM, and Qwen All Ship 1M Context. The Contest Is Now the Bill per Finished Task.",
    "dek": "What DeepSeek V4.1 Flash, Kimi K3.1 Pro, GLM-5.3 and Qwen3.8-Max optimize for, what the vendor numbers leave out, and how to shortlist by workload.",
    "topic": "AI Agents",
    "topicSlug": "ai-agents",
    "date": "November 21, 2026",
    "updated": "November 21, 2026",
    "sourceCount": 0,
    "visual": "report",
    "author": "Cameron Voss",
    "hideDek": true,
    "tldr": [
      "DeepSeek V4.1 Flash, Kimi K3.1 Pro, GLM-5.3 and Qwen3.8-Max all carry 1M-token context. Context stopped being a differentiator.",
      "DeepSeek optimises cost per token: 552B total parameters, 8B active on input, 16B on output, KV cache cut to a quarter of the previous generation.",
      "Kimi optimises long-horizon work: 65.7% on Terminal-Bench 4.0, priced at $2 in and $10 out per million tokens.",
      "GLM-5.3 took its gains from post-training on the same base as 5.2; the Flash sibling cuts attention compute about 3x.",
      "Qwen3.8-Max pairs a 2.4T open-weight MoE with image and video understanding aimed at enterprise workflows.",
      "None of the published numbers share test conditions. Read them as direction, not as a leaderboard."
    ],
    "imageSrc": "/images/articles/deepseek-kimi-glm-qwen-flagship-llm-comparison-overview.svg",
    "imageAlt": "Overview of four Chinese flagship LLMs: DeepSeek V4.1 Flash, Kimi K3.1 Pro, GLM-5.3 and Qwen3.8-Max, with parameter counts and strategic focus above a shared 1M-token context baseline",
    "imageCaption": "Four flagships, four bets. The shared baseline is 1M-token context and sparse, MoE-style compute.",
    "imageFramed": true,
    "imageAspect": "landscape",
    "modelSlugs": ["deepseek", "kimi", "qwen"],
    "body": [
      "The spec war between Chinese labs has settled into a shared floor: trillion-parameter-class bodies, million-token context windows, agent-grade tool calling. What separates the fall 2026 flagships is no longer on the spec sheet. It is in what each vendor spent its training and engineering budget on.",
      "I went through the four models the labs are actually pushing right now: DeepSeek V4.1 Flash (updated October 17), Kimi K3.1 Pro (released October 23), Zhipu's GLM-5.3 and Alibaba's Qwen3.8-Max. Here is what each one is good at, what the vendors claim, and where I would push back."
    ],
    "sections": [
      {
        "heading": "The shared spec sheet",
        "blocks": [
          { "kind": "table", "head": ["Model", "Total parameters", "Active parameters", "Context"], "rows": [
            ["DeepSeek V4.1 Flash", "552B", "8B on input, 16B on output", "1M"],
            ["Kimi K3.1 Pro", "3T class", "Not disclosed", "1M"],
            ["GLM-5.3", "Not disclosed", "Not disclosed", "1M"],
            ["Qwen3.8-Max", "2.4T", "About 95B", "1M"]
          ] },
          { "kind": "p", "text": "Two things are worth understanding before quoting any of these numbers. First, total parameters are not the compute bill. These are mixture-of-experts models: each token passes a router and wakes up only a slice of the experts. Qwen3.8-Max carries 2.4T parameters and activates roughly 95B per token. DeepSeek goes further with an asymmetric split, 8B active while reading input and 16B while generating output." },
          { "kind": "image", "src": "/images/articles/moe-total-vs-active-parameters-explained.svg", "alt": "Mixture-of-experts diagram: one token passes a router that selects a small highlighted subset of experts from the full pool, and only that subset computes on the token", "caption": "Total parameters describe capacity. Active parameters describe what a single token actually costs." },
          { "kind": "p", "text": "Second, a 1M-token context window is a capacity claim, not a performance claim. What matters in production is whether the model still finds the clause on page 400, keeps the original goal in mind at step 80 of a task, and connects facts across two documents. Context length tells you the size of the desk, not how organised the worker is." }
        ]
      },
      {
        "heading": "DeepSeek V4.1 Flash: built around the cost of intelligence",
        "blocks": [
          { "kind": "p", "text": "If I had to summarise DeepSeek's strategy in one word it would be efficiency. V4.1 Flash does not chase the biggest body in the room. It uses an asymmetric encoder-decoder design where reading and writing get different compute budgets, because they are genuinely different jobs. Encoding a long context is parallel work. Generating output is sequential, token-by-token work. Giving both stages the same active parameter count wastes one of them." },
          { "kind": "image", "src": "/images/articles/deepseek-v4-flash-asymmetric-input-output-architecture.svg", "alt": "Diagram of DeepSeek V4.1 Flash stages: context enters an input stage with 8B active parameters, then an output stage with 16B active parameters, producing an answer or tool call, with KV cache HBM at one quarter and SSD at one eighth of the previous generation", "caption": "Reading and writing get separate compute budgets. The cache reductions are what long agent sessions feel." },
          { "kind": "p", "text": "The other half of the story is memory. Agent sessions accumulate history across many tool calls, and that history lives in the KV cache. DeepSeek reports V4.1 Flash needs a quarter of the previous generation's HBM for that cache and an eighth of the SSD storage. For teams running long sessions, that is the difference between a cache that fits in memory and one that spills." },
          { "kind": "p", "text": "The October 17 update targeted agent work specifically: 77.0 on DeepSWE v1.1, 42.3 on Terminal-Bench 4.0, 68.2 on NL2Repo-Bench and 60.5 on Automation-Bench. The vendor also claims the update cut task runtime and output tokens at the same time, which is the claim I care about most. Better scores are common. Smaller bills per finished task are not." },
          { "kind": "p", "text": "This is the model to shortlist when the workload is high-concurrency: code analysis at scale, long-document processing, agent tool calling, any product where the API invoice is a line in your unit economics." },
          { "kind": "cta", "pre": "If per-token economics drive your stack, our ", "label": "pricing page", "href": "/pricing", "post": " lists the current plans and their usage allowances, so you can cost a real workload before committing." }
        ]
      },
      {
        "heading": "Kimi K3.1 Pro: built around the whole task",
        "blocks": [
          { "kind": "p", "text": "Kimi is asking a different question. Not \"how cheaply can we answer\" but \"can the model finish the job\". K3.1 Pro is a post-trained version of K3 with a heavier reinforcement-learning pass, aimed at code, 3D creation, financial research and long-horizon agent tasks." },
          { "kind": "image", "src": "/images/articles/long-horizon-agent-plan-execute-feedback-loop.svg", "alt": "Agent loop diagram: read the requirement and codebase, plan steps, write code and call tools, run tests and read the environment, check the result, then deliver on pass or revise the plan on fail", "caption": "The loop is the product. Feedback changes the next action, not the model weights." },
          { "kind": "p", "text": "The published numbers: 65.7% on Terminal-Bench 4.0. 61.2% on Kimi's internal Code Bench 3.0 long-horizon suite, up from 55.95% for K3. 92.7% on BenchCAD with tools, where the model rebuilds a 3D model as CAD code from multi-view renders. 64.4 on OfficeQA Pro v2, a test of retrieval and multi-step numeric reasoning over real financial documents." },
          { "kind": "p", "text": "Two caveats before you build on those. Some of the scores come from Kimi's own evaluations rather than independent runs. And the API is priced at $2 per million input tokens and $10 per million output, which puts it in a different cost tier from DeepSeek Flash. You are paying for completion, not for tokens. The full weights followed in early November, published under a custom Kimi K3.1 Pro License. It is a separate agreement, not MIT or Apache 2.0, so read the current terms before planning self-hosting or redistribution." },
          { "kind": "p", "text": "Where it fits: work that has stages and a deliverable. A model that reads the repo, writes a plan, edits code, runs tests and fixes its own failures. That loop, not the raw coding score, is what K3.1 Pro is selling." }
        ]
      },
      {
        "heading": "GLM-5.3: built around the engineering loop",
        "blocks": [
          { "kind": "p", "text": "Zhipu's interesting claim is not a score, it is a method. GLM-5.3 shares its base model with GLM-5.2. The gains come from post-training: reinforcement learning inside automatically generated task environments built from real engineering problems, with tests deciding whether the model actually finished the work. On the vendor's internal Z.ai Code Bench, coding performance is up 50% over 5.2. On DeepSWE v1.1 the score moved from 46.2 to 66.9." },
          { "kind": "p", "text": "That is a useful data point for anyone planning a model roadmap. A meaningful jump without a new pretraining run." },
          { "kind": "p", "text": "The Flash sibling, GLM-5.3-Flash, covers the cost-sensitive side: 320B total parameters, 18B active, mixing sparse attention for wide retrieval with linear attention for cheap local dependencies. Zhipu reports about 3x less attention compute and about 4.4x less KV cache than GLM-5.3, plus native image, video and file input. Flagship for depth, Flash for throughput. It is a clean two-product layout." }
        ]
      },
      {
        "heading": "Qwen3.8-Max: built around the platform",
        "blocks": [
          { "kind": "p", "text": "Alibaba is playing the widest hand. Qwen3.8-Max is a 2.4T-parameter MoE with hybrid attention, taking text, image and video input, with function calling and multi-tool orchestration aimed at real workflows rather than chat." },
          { "kind": "p", "text": "The demonstration the vendor keeps repeating is a 16-day run in which the model built a self-evolving agent framework from scratch: generating code, testing, previewing, reading its own logs, iterating, and eventually publishing the result as an open-source project. One internal case study is not a guarantee that your task runs for 16 days. Treat it as a statement of direction." },
          { "kind": "p", "text": "The more concrete point is the weights. The 2.4T Qwen3.8 weights are open and deployable through vLLM or SGLang. Open at that size does not mean laptop-friendly: serving it takes multi-node accelerated compute. The value of open weights here is control, meaning your infrastructure, your optimisations, your fine-tunes." }
        ]
      },
      {
        "heading": "Picking by workload",
        "blocks": [
          { "kind": "p", "text": "Put the four side by side and it becomes clear they are not competing on the same axis." },
          { "kind": "table", "head": ["Dimension", "DeepSeek", "Kimi", "GLM", "Qwen"], "rows": [
            ["Core strength", "Inference efficiency, cost", "Long-horizon agents", "Engineering and coding", "Multimodal and ecosystem"],
            ["Multimodal", "Vision", "Vision plus 3D workflows", "Native on Flash", "Image and video"],
            ["Context", "1M", "1M", "1M", "1M"],
            ["Cost posture", "Low cost", "Capability first", "Low cost on Flash", "Tiered product line"]
          ] },
          { "kind": "ul", "items": [
            "Cost-sensitive, high-concurrency serving: DeepSeek. The bill per finished task is the product.",
            "Multi-stage projects with a deliverable: Kimi. Goal retention across many tool calls is what you are buying.",
            "Terminal-heavy software engineering: GLM. The training environments were built around exactly this loop.",
            "Multimodal input and self-hosted enterprise deployment: Qwen. Open weights plus image and video coverage."
          ] },
          { "kind": "image", "src": "/images/articles/flagship-llm-selection-guide-by-workload.svg", "alt": "Selection guide table mapping four workloads to model focus and verification points: DeepSeek for low cost and high concurrency, Kimi for complex agent work, GLM for software engineering, Qwen for multimodal enterprise deployment", "caption": "Start from the workload. The model follows." },
          { "kind": "p", "text": "One warning about everything above. These numbers do not share test conditions. Different model versions, reasoning settings, tool scaffolds and harnesses sit behind them. A table like this is a map of where to start testing, not a ranking of who won." }
        ]
      },
      {
        "heading": "The competition moved",
        "blocks": [
          { "kind": "p", "text": "Two years ago the contest was parameter counts and benchmark scores. The fall 2026 flagships compete on post-training, task environments, inference memory and cost per finished task. The labs are no longer selling a smarter answer. They are selling finished work: the report, the repository, the model file, the pipeline that runs without a human in the loop." },
          { "kind": "p", "text": "That shift changes how to choose. The best model is not the one that wins the most rows in a table. It is the one whose bet matches your workload, verified on your own tasks, at a cost your unit economics can carry." }
        ]
      }
    ],
    "sources": []
  },
  {
    "slug": "deepseek-app-api-suite-unit-costs",
    "title": "DeepSeek Search API Pricing Shift: It’s Not Simply a Price Cut",
    "dek": "DeepSeek's 13 November App API release and end-of-month search billing change, priced out: what each unit costs, what a RAG answer costs, and where token billing crosses the old per-call fee.",
    "topic": "AI Agents",
    "topicSlug": "ai-agents",
    "date": "November 26, 2026",
    "updated": "November 26, 2026",
    "sourceCount": 0,
    "visual": "report",
    "author": "Cameron Voss",
    "hideDek": true,
    "tldr": [
      "On 13 November, DeepSeek exposed the app stack as API endpoints: Search, Fetch, OCR, ASR, TTS, file input and safety checks.",
      "List prices: Search and Fetch $0.75 per 1,000 calls, OCR $0.225 per 1,000 pages, ASR $0.058 per audio hour, TTS $0.225 per 10,000 characters.",
      "At the end of November, server-side search moves from a per-call fee to input-token billing. A 500-token result costs about $0.00007, close to a tenth of the old fee per query.",
      "The two search prices cross at roughly 5,400 tokens of injected results per query, about 11 results at 500 tokens each.",
      "In a worked example, an in-model search answer costs $0.27 to $0.90 per 1,000 answers; calling the standalone Search API costs $1.02 to $1.65."
    ],
    "imageSrc": "/images/articles/deepseek-app-api-suite-unit-cost-overview.svg",
    "imageAlt": "Five DeepSeek App API capabilities with their billing units: Search and Fetch at $0.75 per 1,000 calls, OCR at $0.225 per 1,000 pages, ASR at $0.058 per hour and TTS at $0.225 per 10,000 characters",
    "imageCaption": "Five capabilities, five billing units. The end-of-November change rewrites how the search meter works.",
    "imageFramed": true,
    "imageAspect": "landscape",
    "modelSlugs": [
      "deepseek"
    ],
    "body": [
      "On 13 November, DeepSeek exposed the capabilities behind its chat app as API endpoints. Web search, URL reading, file input, safety screening, OCR, speech recognition and speech synthesis became things you can call directly, or switch on inside a model request. At the end of the month, the company also changes how server-side search is billed: from a flat fee per search to the input tokens that the search results occupy.",
      "Both changes are easy to describe. The second one is easy to misread as a price cut. It is not. It changes what you meter, and the bill moves in both directions depending on how much text your searches bring back."
    ],
    "sections": [
      {
        "heading": "Five capabilities, five billing units",
        "blocks": [
          {
            "kind": "p",
            "text": "The price list is short. Search costs $0.75 per 1,000 calls. Fetch, which reads a URL and returns its content, costs the same. OCR and file parsing cost $0.225 per 1,000 pages. Speech recognition costs $0.058 per audio hour. Speech synthesis costs $0.225 per 10,000 characters."
          },
          {
            "kind": "p",
            "text": "The units are the first thing to notice. Only Search and Fetch are priced per call. OCR is priced per page, ASR per hour and TTS per character block. Comparing the headline numbers without converting them is how budgets go wrong."
          },
          {
            "kind": "image",
            "src": "/images/articles/deepseek-app-api-cost-per-1000-operations.svg",
            "alt": "Log-scale horizontal bar chart of DeepSeek App API list prices per 1,000 billing units, from OCR at $0.225 to TTS at $225",
            "caption": "The log axis keeps a 1,000x spread on one chart: $0.225 at the low end, $225 at the high end.",
            "wide": true
          },
          {
            "kind": "p",
            "text": "Converted to 1,000 billing units, the spread runs from $0.225 for 1,000 OCR pages to $225 for 1,000 TTS blocks. Search and Fetch sit at $0.75. The voice endpoints look cheap per unit and become large line items once volume is measured in hours and characters: 1,000 hours of audio is $58, and a product that synthesizes 1 million characters pays $22.50. Neither number is alarming on its own. Both are easy to miss when the invoice arrives."
          }
        ]
      },
      {
        "heading": "What one retrieved answer costs",
        "blocks": [
          {
            "kind": "p",
            "text": "A unit price does not tell you what a RAG answer costs. I built a small model of a single query with a short list of assumptions: an 800-token prompt, a 300-token answer, 500 tokens per search result, and Flash at $0.14 per million input tokens and $0.28 per million output tokens. For the self-hosted case I added $1 per 1,000 queries for index hosting. That last figure is a planning assumption, not a vendor price."
          },
          {
            "kind": "image",
            "src": "/images/articles/deepseek-rag-answer-cost-by-search-architecture.svg",
            "alt": "Stacked bar chart comparing the cost per 1,000 RAG answers for direct Search API, in-model deepseek_web_search and self-hosted search at 1, 5 and 10 results",
            "caption": "Cost per 1,000 answered queries. The search fee is fixed; the token cost grows with the number of results. The self-hosted index cost is an assumption, not a list price.",
            "wide": true
          },
          {
            "kind": "p",
            "text": "Per 1,000 answers, the in-model route, with deepseek_web_search enabled on the request, costs $0.27 with one result, $0.55 with five and $0.90 with ten. Calling the standalone Search API and passing the results to Flash costs $1.02, $1.30 and $1.65. The gap is the search fee: $0.75 per 1,000 queries, unchanged by result count, so it takes a larger share of a short answer and a smaller share of a long one."
          },
          {
            "kind": "p",
            "text": "Self-hosted search lands at $1.27, $1.55 and $1.90 with the assumed hosting cost. That makes it the most expensive route at these volumes. The comparison is incomplete on purpose: it prices the marginal cost of a query, not the fixed cost of building an index, and not the quality difference between your index and a web-scale one. Self-hosting can win on control, privacy or a narrow corpus. It rarely wins on the first invoice."
          }
        ]
      },
      {
        "heading": "The crossover at the end of November",
        "blocks": [
          {
            "kind": "p",
            "text": "Under the old rule, a server-side search cost $0.75 per 1,000 queries regardless of how much text came back. Under the new rule, the same search costs whatever its results weigh in input tokens. At the $0.14 cache-miss rate, the two prices meet at about 5,400 tokens per query."
          },
          {
            "kind": "image",
            "src": "/images/articles/deepseek-server-side-search-billing-crossover.svg",
            "alt": "Line chart showing the old flat $0.75 per 1,000 search queries crossing the new input-token billing at about 5,357 tokens per query",
            "caption": "Old per-call billing stays flat. Token billing rises with the content injected. They cross near 5,400 tokens per query.",
            "wide": true
          },
          {
            "kind": "p",
            "text": "At 500 tokens per result, that is roughly 11 results. Below that line, token billing is cheaper. At 1,500 tokens the bill is about $0.21 per 1,000 queries, 72% less than the old fee. Above it, the old per-call price would have been cheaper. At 10,000 tokens the new bill is $1.40 per 1,000 queries, close to double the old rate."
          },
          {
            "kind": "p",
            "text": "The cache-hit rate moves the crossing point past 26,000 tokens, but fresh search results rarely arrive as prefix cache hits. Planning at the cache-miss rate is the safer choice."
          },
          {
            "kind": "p",
            "text": "The pattern is simple: short searches get cheaper, deep research gets more expensive. If your prompts already carry a fixed result cap, the new pricing probably helps. If the model decides how many pages to read, add the token count to the same dashboard as the search count."
          }
        ]
      },
      {
        "heading": "Turning the table into a budget",
        "blocks": [
          {
            "kind": "p",
            "text": "Three numbers from your own logs carry most of the estimate: tool calls per answered request, tokens injected per call, and the share of requests that search at all. Multiply them out with the rates above and the result is a budget rather than an example."
          },
          {
            "kind": "ul",
            "items": [
              "Cap results per search. Ten is a design choice; it is also a pricing choice.",
              "Cache pages you fetch more than once. Paying twice for the same URL is avoidable in every architecture here.",
              "Track tokens per query, not searches per query. After the switch, length is the variable that moves the bill.",
              "Keep OCR and ASR as separate line items. They are cheap per unit and easy to forget at volume."
            ]
          },
          {
            "kind": "p",
            "text": "The suite is convenient because one vendor covers search, reading, documents and voice. The trade-off is that the invoice has five different meters, and each one moves for a different reason. The token meters move with verbosity. The page and hour meters move with intake. The search meter now moves with the length of what comes back."
          },
          {
            "kind": "cta",
            "pre": "If you want to compare these per-unit prices with the plans on this site, the ",
            "label": "pricing page",
            "href": "/pricing",
            "post": " lists the current allowances and what each plan includes."
          },
          {
            "kind": "p",
            "text": "For a first estimate, the numbers above are enough. For a real one, replace my 500-token result and 300-token answer with yours. The rates are published. The workload is the part only you can measure."
          }
        ]
      }
    ],
    "sources": []
  },
  {
    "slug": "cost-per-effective-token-1m-context",
    "title": "Cost Per Effective Token: What a 1M Context Window Actually Costs",
    "dek": "A 1M context window is a capacity limit, not a bill. MathArena and cost-per-task data show why tokens per finished job, not list price, decide what you pay.",
    "topic": "Long Context",
    "topicSlug": "long-context",
    "date": "November 27, 2026",
    "updated": "November 27, 2026",
    "sourceCount": 0,
    "visual": "report",
    "author": "Cameron Voss",
    "hideDek": true,
    "tldr": [
      "A 1M context window is a capacity limit, not a bill. You pay for tokens a task consumes, not tokens it could hold.",
      "On the MathArena June 2026 set, two models listed at the same $10 / $50 per 1M tokens cost $0.67 and $5.86 per question, an 8.7x gap driven by 12,636 versus 117,076 output tokens.",
      "DeepSeek-V4.1-Flash (Max) scored 57.64% at $0.037 per question with 61,911 output tokens on that set.",
      "On a modeled multi-file coding task, DeepSeek V4.1 Flash costs $0.10 per task; 57 models span $0.03 to $4.85 for the same job.",
      "The lever is tokens per finished task. Keep the prompt prefix stable, cap output, and measure on your own workload."
    ],
    "imageSrc": "/images/articles/deepseek-1m-context-effective-token-usage.svg",
    "imageAlt": "Log scale comparison of a 1,000,000 token context window against actual output tokens of 12,636 to 136,104 for four models on the MathArena June 2026 set",
    "imageCaption": "A 1M window is a ceiling. The measured output tokens on a single question sit far below it.",
    "imageFramed": true,
    "imageAspect": "landscape",
    "modelSlugs": ["deepseek"],
    "body": [],
    "sections": [
      {
        "heading": "What does a 1M context window actually cost?",
        "blocks": [
          { "kind": "p", "text": "Nothing by itself. The window tells you how much text the model can hold at once, and the bill follows the tokens a task actually pushes through the meter. On DeepSeek's first-party API, a full million tokens of fresh input would come to $0.14. If every one of those tokens hit the cache, the same input would come to $0.028. Output is metered on its own at $0.28 per million." },
          { "kind": "p", "text": "Real jobs rarely fill the window. A coding agent re-reads its system prompt and tool definitions on every turn, and when that prefix stays stable the tokens bill at the cache-hit rate. The modeled multi-file task in the tracker below assumes 1.5M input tokens with 90% served from cache, plus 40K output tokens in a single pass. Most of that bill comes from output and from the tenth of input that misses the cache, not from the size of the window. You can buy a bigger window, but you cannot get a discount on tokens you never send." }
        ]
      },
      {
        "heading": "Why do two models with the same list price bill differently?",
        "blocks": [
          { "kind": "p", "text": "The rate is per token, and each model burns a different number of tokens to finish the same question." },
          { "kind": "p", "text": "MathArena's June 2026 set makes this easy to see. GPT-6 Astra (max) and Claude-Fable-5.1 (max) both sit at $10 per million input tokens and $50 per million output tokens. Astra scored 94.42% per question at a cost of $0.67 and wrote 12,636 output tokens. Fable 5.1 scored 90.97% at $5.86 and wrote 117,076 output tokens. That is 8.7x the spend for a slightly lower score, and the longer answers explain nearly all of it." },
          { "kind": "image", "src": "/images/articles/matharena-june-2026-accuracy-cost-output-tokens.webp", "alt": "MathArena ArXivMath June 2026 ranking table listing accuracy, cost per question and output tokens for 25 models", "caption": "The original ranking: accuracy, cost per question and output tokens side by side. DeepSeek-V4.1-Flash (Max) appears at rank 16.", "wide": true },
          { "kind": "p", "text": "DeepSeek-V4.1-Flash (Max) scored 57.64% at $0.037 per question with 61,911 output tokens on the same set. The older DeepSeek-v4-Flash (Max) scored 43.75% at $0.038 with 136,104 tokens. The two DeepSeek rows cost almost the same, yet one writes less than half the output and scores higher. That difference is what an effective-token number is meant to catch." }
        ]
      },
      {
        "heading": "How many tokens does a finished task actually burn?",
        "blocks": [
          { "kind": "p", "text": "The useful number is the cost of one completed job, not the cost of one prompt." },
          { "kind": "p", "text": "The cost-per-task tracker models a multi-file coding change as 1.5M input tokens (90% cached), 40K output tokens, one pass. It prices 57 models on that identical job. Hy4 flash finishes at $0.03 and GPT-6 Astra at $4.85, a 188x spread for the same work. DeepSeek V4.1 Flash comes in at $0.10 with a coding score of 30.6. GPT-6.1 Terra is $0.42 for a score of 47.6. Claude Fable 5.2 is $3.07 for 53.1." },
          { "kind": "image", "src": "/images/articles/deepseek-cost-per-task-coding-score-scatter.svg", "alt": "Scatter plot of coding score against modeled cost per task on a log scale, with DeepSeek V4.1 Flash at 30.6 score and 0.10 dollars per task", "caption": "Each dot is one finished task. The further right and lower a model sits, the more score it buys per dollar.", "wide": true },
          { "kind": "p", "text": "Task shape moves the ranking. DeepSeek V4.1 Flash is $0.02 for a one-file edit, $0.10 for a multi-file change and $0.20 for an agentic run. Those shifts never appear on a per-token rate card, so a rate card alone will not tell you what a workflow costs." },
          { "kind": "table", "head": ["Model", "One-file edit", "Multi-file change", "Agentic task", "Coding score"], "rows": [
            ["DeepSeek V4.1 Flash", "$0.02", "$0.10", "$0.20", "30.6"],
            ["GPT-6.1 Terra", "$0.08", "$0.42", "$0.83", "47.6"],
            ["Claude Fable 5.2", "$0.58", "$3.07", "$6.14", "53.1"],
            ["GPT-6 Astra", "$0.82", "$4.85", "$9.70", "49.1"]
          ] },
          { "kind": "cta", "pre": "To see what the current rates look like on this site, the ", "label": "pricing page", "href": "/pricing", "post": " lists the plans and allowances." }
        ]
      },
      {
        "heading": "How do you compare models without a benchmark degree?",
        "blocks": [
          { "kind": "p", "text": "Put cost, quality and speed on the same plane and pick a point you can live with." },
          { "kind": "p", "text": "That plane is the cost-intelligence frontier. For one task type, performance, speed and cost per finished job form a boundary you cannot improve on all at once, and every model choice sits somewhere on it. You can fix the spend per task and see which model scores highest, or fix the score and see which model charges least. A model at $4.85 and a model at $0.10 can land in the same accuracy band. Once you plot every candidate on cost against quality, any point well below the line can be dropped, since another model there is both cheaper and stronger." },
          { "kind": "p", "text": "The frontier belongs to the task, not the product. A model on the frontier for complex visual reasoning can sit far from it on ticket sorting. Draw it per task type instead of once per model family." }
        ]
      },
      {
        "heading": "How do you cut the cost per effective token?",
        "blocks": [
          { "kind": "p", "text": "Look at what the meter sees before you swap the model on the API call." },
          { "kind": "ul", "items": [
            "Keep the system prompt and tool schema byte-for-byte stable. Cache hits on DeepSeek bill at $0.028 per million instead of $0.14, which cuts repeated input by 5x.",
            "Cap output length. Output runs at $0.28 per million, ten times the cache-hit input rate, and verbose reasoning lands on the invoice.",
            "Count retries. If a job needs 1.5 attempts on average to pass, the effective cost is 1.5x the single-pass figure.",
            "Measure all of it on your own tasks for 4 to 8 weeks, because model releases move the frontier faster than a yearly contract can follow."
          ] },
          { "kind": "p", "text": "Data notes: MathArena ArXivMath June 2026 set (checked 23 September 2026); Capital & Compute cost-per-task tracker (rates as of 21 November 2026); AI Master cost-intelligence frontier (29 October 2026). Figures come from third-party evaluations; your bill depends on your own workload." }
        ]
      }
    ],
    "sources": []
  }
];

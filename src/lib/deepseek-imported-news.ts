export type ImportedDeepSeekNews = {
  slug: string;
  title: string;
  date: string;
  tag: string;
  summary: string;
  body: string[];
  originalUrl: string;
  sourceLabel: string;
  sourceHref: string;
};

// Editorial articles migrated with permission from deepseekv4pro.com.
export const importedDeepSeekNews: ImportedDeepSeekNews[] = [
  {
    "slug": "deepseek-july14-official-chat-samples-baseline",
    "title": "DeepSeek's current docs now expose a first-party starter trio for curl, Node.js, and Python chat calls, giving V4 Pro users a cleaner official baseline than older alias snippets",
    "date": "2026-07-14",
    "tag": "Official",
    "summary": "Checked on July 14, 2026: DeepSeek's official docs sitemap currently lists dedicated chat_curl, chat_nodejs, and chat_python sample pages, and all three use the current https://api.deepseek.com endpoint plus deepseek-v4-pro instead of older alias-first snippets.",
    "body": [
      "Checked on July 14, 2026: DeepSeek's official docs sitemap currently lists dedicated chat_curl, chat_nodejs, and chat_python sample pages, and all three use the current https://api.deepseek.com endpoint plus deepseek-v4-pro instead of older alias-first snippets.",
      "What we verified on July 14, 2026",
      "DeepSeek's official docs sitemap currently lists three baseline chat sample pages: chat_curl, chat_nodejs, and chat_python.",
      "The curl sample uses the production chat completions endpoint directly: https://api.deepseek.com/chat/completions.",
      "The Node.js and Python samples both use the OpenAI SDK shape against the same DeepSeek base URL, which is useful because many community snippets still drift between provider-specific wrappers and older alias examples.",
      "All three starter samples use deepseek-v4-pro as the model name, not deepseek-chat or deepseek-reasoner.",
      "The samples also keep the current thinking-mode pattern visible: high reasoning effort and an explicit thinking payload rather than a legacy minimal example.",
      "This is starter-docs coverage only. It does not create any new plan card, stock promise, pricing change, or purchasable inventory claim in this repo."
    ],
    "originalUrl": "https://deepseekv4pro.com/news/deepseek-july14-official-chat-samples-baseline",
    "sourceLabel": "Primary source linked by the original article",
    "sourceHref": "https://api-docs.deepseek.com/api_samples/chat_nodejs"
  },
  {
    "slug": "deepseek-july13-prompt-library-ai-tools-hub",
    "title": "DeepSeek Links Prompt Library to Official AI Tool Setup",
    "date": "2026-07-13",
    "tag": "Official",
    "summary": "Checked on July 13, 2026: DeepSeek's official docs sitemap currently lists both a top-level Prompt Library page and an Integrate with AI Tools guide covering Claude Code, OpenCode, and OpenClaw, giving developers a first-party docs path from prompt exploration to concrete tool configuration.",
    "body": [
      "Checked on July 13, 2026: DeepSeek's official docs sitemap currently lists both a top-level Prompt Library page and an Integrate with AI Tools guide covering Claude Code, OpenCode, and OpenClaw, giving developers a first-party docs path from prompt exploration to concrete tool configuration.",
      "What we verified on July 13, 2026",
      "DeepSeek's official docs sitemap currently lists a top-level Prompt Library page under api-docs.deepseek.com/prompt-library.",
      "The Prompt Library page is clearly first-party documentation, even though the visible heading still appears in Chinese inside the English docs shell.",
      "The same official docs sitemap also lists an Integrate with AI Tools guide under api-docs.deepseek.com/guides/coding_agents.",
      "That AI Tools hub currently covers three named DeepSeek-backed coding paths: Claude Code, OpenCode, and OpenClaw.",
      "The Claude Code section remains concrete rather than generic: it publishes the Anthropic base URL, Pro and Flash environment-variable pins, and the subagent-model split.",
      "The OpenCode and OpenClaw sections stay operational too: OpenCode uses /connect with DeepSeek selected as provider, while OpenClaw keeps the QuickStart flow and manual V4 model entry."
    ],
    "originalUrl": "https://deepseekv4pro.com/news/deepseek-july13-prompt-library-ai-tools-hub",
    "sourceLabel": "Primary source linked by the original article",
    "sourceHref": "https://api-docs.deepseek.com/guides/coding_agents/"
  },
  {
    "slug": "deepseek-july8-thinking-mode-streaming-non-streaming-samples",
    "title": "DeepSeek Adds Streaming and Non-Streaming Thinking Samples",
    "date": "2026-07-08",
    "tag": "Official",
    "summary": "Checked on July 8, 2026: DeepSeek's official docs sitemap currently lists dedicated thinking-mode sample pages for both non-streaming and streaming chat completions, clarifying when reasoning_content is just captured, when it is ignored in ordinary follow-up turns, and how delta.reasoning_content should be accumulated separately from visible answer text.",
    "body": [
      "Checked on July 8, 2026: DeepSeek's official docs sitemap currently lists dedicated thinking-mode sample pages for both non-streaming and streaming chat completions, clarifying when reasoning_content is just captured, when it is ignored in ordinary follow-up turns, and how delta.reasoning_content should be accumulated separately from visible answer text.",
      "What we verified on July 8, 2026",
      "DeepSeek's official docs sitemap currently lists dedicated non-streaming and streaming thinking-mode sample pages.",
      "The non-streaming sample shows a plain two-turn OpenAI-compatible flow: capture reasoning_content and final content, append the assistant message, then send a second user turn.",
      "The same non-streaming page explicitly notes that earlier reasoning_content will be ignored by the API in that ordinary follow-up case, which is an important boundary for teams that over-engineer replay behavior.",
      "The streaming sample shows delta.reasoning_content and delta.content arriving separately, and its code accumulates them into different buffers before constructing the next-turn assistant state.",
      "This is protocol and support coverage only. It does not create any new plan card, stock promise, or pricing change in this repo."
    ],
    "originalUrl": "https://deepseekv4pro.com/news/deepseek-july8-thinking-mode-streaming-non-streaming-samples",
    "sourceLabel": "Primary source linked by the original article",
    "sourceHref": "https://api-docs.deepseek.com/api_samples/thinking_mode_api_example_streaming"
  },
  {
    "slug": "deepseek-july6-thinking-mode-tool-call-samples",
    "title": "DeepSeek Publishes Thinking-Mode Tool-Call Samples",
    "date": "2026-07-06",
    "tag": "Official",
    "summary": "Checked on July 6, 2026: DeepSeek's official docs currently expose both a Python thinking-mode tool-call sample and a separate output transcript page, giving developers a first-party reference for tool schemas, chained calls, blank content turns, and reasoning_content replay behavior.",
    "body": [
      "Checked on July 6, 2026: DeepSeek's official docs currently expose both a Python thinking-mode tool-call sample and a separate output transcript page, giving developers a first-party reference for tool schemas, chained calls, blank content turns, and reasoning_content replay behavior.",
      "What we verified on July 6, 2026",
      "DeepSeek's official docs sitemap currently includes a dedicated Python thinking-mode tool-call sample page.",
      "The same official docs surface also includes a separate tool-call output transcript page, which exposes how reasoning_content, content, and tool_calls evolve across multiple turns.",
      "The sample uses a chained pattern rather than a one-shot demo: the model first calls get_date, then uses that result to call get_weather, then answers the user.",
      "The output transcript shows that content can be empty during a valid tool-call turn, which is an important debugging boundary for agent runtimes that incorrectly expect a final answer on every assistant message.",
      "This is support and protocol coverage only. It does not create any new plan card, stock promise, or pricing change in this repo."
    ],
    "originalUrl": "https://deepseekv4pro.com/news/deepseek-july6-thinking-mode-tool-call-samples",
    "sourceLabel": "Primary source linked by the original article",
    "sourceHref": "https://api-docs.deepseek.com/api_samples/thinking_mode_api_example_tool_call"
  },
  {
    "slug": "deepseek-july5-legacy-model-alias-retirement-warning",
    "title": "DeepSeek Retires Legacy Model Aliases on July 24, 2026",
    "date": "2026-07-05",
    "tag": "Official",
    "summary": "Checked on July 5, 2026: DeepSeek's official homepage still anchors the official @deepseek_ai X presence, but the strongest current first-party developer signal is in the API docs and changelog, which both keep the July 24, 2026 retirement warning for deepseek-chat and deepseek-reasoner while pointing users to explicit deepseek-v4-flash and deepseek-v4-pro model names.",
    "body": [
      "Checked on July 5, 2026: DeepSeek's official homepage still anchors the official @deepseek_ai X presence, but the strongest current first-party developer signal is in the API docs and changelog, which both keep the July 24, 2026 retirement warning for deepseek-chat and deepseek-reasoner while pointing users to explicit deepseek-v4-flash and deepseek-v4-pro model names.",
      "The stronger current first-party signal is that DeepSeek's official API docs still place the same concrete retirement warning in two prominent places: the API quick-start and the change log both say deepseek-chat and deepseek-reasoner will be discontinued on July 24, 2026 at 15:59 UTC.",
      "What we verified on July 5, 2026",
      "DeepSeek's official homepage still anchors the official X account through the V4 Preview banner, confirming @deepseek_ai remains the first-source account surface even when the direct timeline is hard to crawl.",
      "DeepSeek's official API quick-start still warns that deepseek-chat and deepseek-reasoner will be deprecated on July 24, 2026 at 15:59 UTC.",
      "DeepSeek's official change log repeats the same retirement date and clarifies the transition mapping: deepseek-chat currently points to V4 Flash non-thinking mode, and deepseek-reasoner currently points to V4 Flash thinking mode.",
      "The same official change log keeps deepseek-v4-pro and deepseek-v4-flash as the current explicit model names, which makes alias cleanup a real operations task rather than a cosmetic docs update.",
      "This is migration and support coverage only. It does not create any new plan card, stock promise, or pricing-page inventory change in this repo."
    ],
    "originalUrl": "https://deepseekv4pro.com/news/deepseek-july5-legacy-model-alias-retirement-warning",
    "sourceLabel": "DeepSeek English homepage",
    "sourceHref": "https://www.deepseek.com/en/"
  },
  {
    "slug": "deepseek-july2-claude-code-codex-integration-watch",
    "title": "Codex Supports DeepSeek Through Third-Party Model Providers",
    "date": "2026-07-02",
    "tag": "Official",
    "summary": "Checked on July 2, 2026: OpenAI's Codex docs now document custom model providers through model_provider, model_providers, base_url, and env_key. That means DeepSeek can be framed as a third-party Codex route: use our DeepSeek access, point Codex at the configured DeepSeek provider, and keep the known Responses API, profile, Desktop picker, and V4 thinking-mode checks in place.",
    "body": [
      "Checked on July 2, 2026: OpenAI's Codex docs now document custom model providers through model_provider, model_providers, base_url, and env_key. That means DeepSeek can be framed as a third-party Codex route: use our DeepSeek access, point Codex at the configured DeepSeek provider, and keep the known Responses API, profile, Desktop picker, and V4 thinking-mode checks in place.",
      "What changed after the June Claude Code item",
      "Claude Code is no longer the messy part of the story. DeepSeek's own docs give teams a direct Anthropic-compatible route: point Claude Code at https://api.deepseek.com/anthropic, use deepseek-v4-pro[1m] for the main lane, keep deepseek-v4-flash for subagents, and set the effort level to max.",
      "That is still worth a fresh update because the same DeepSeek page now carries three practical details that older community snippets often miss: Web Search can run through DeepSeek, Claude-style model names can map to V4 Pro or V4 Flash, and search-triggered summarization costs extra model tokens. This is a setup contract, not just a screenshot walkthrough.",
      "Codex now has a third-party provider path",
      "Codex now supports third-party access through custom model providers. OpenAI's own Codex configuration docs show the shape: define a provider with base_url and env_key, then point model_provider at it. The configuration reference also says provider settings belong in the user-level ~/.codex/config.toml, because project-local config cannot redirect provider or auth settings.",
      "For this site, the cleaner wording is: use DeepSeek as the third-party Codex provider. If a reader already has our DeepSeek access, they do not need a separate Codex-specific DeepSeek product. They configure Codex with the DeepSeek base URL and key from their access details, then select the DeepSeek V4 model name that matches the task.",
      "A minimal user-level shape looks like this:",
      "model = \"deepseek-v4-pro\"\nmodel_provider = \"deepseek\"",
      "[model_providers.deepseek]\nname = \"DeepSeek\"\nbase_url = \"<your DeepSeek access base URL>\"\nenv_key = \"DEEPSEEK_API_KEY\"\nwire_api = \"responses\"\n```",
      "The exact base URL depends on the access route. A direct official key, a dashboard-delivered key, or a compatibility gateway may expose slightly different base URLs. The idea is the same: Codex talks to a custom provider, and the DeepSeek key or route supplies the model.",
      "Checks still worth keeping",
      "Third-party support does not remove every operational edge. Keep these checks in the article so readers know what to verify instead of assuming the model picker proves the route is correct.",
      "DeepSeek thinking mode can fail in multi-turn Codex sessions if reasoning_content is not passed back after tool-use turns.",
      "Codex Desktop has separate reports around custom-provider model catalogs and picker visibility, especially when users expect GUI switching instead of manual config.toml edits.",
      "A June report says Codex CLI 0.14.0 ignored --profile and custom model_providers in one setup, falling back to OpenAI instead of the configured DeepSeek-shaped provider.",
      "Another report says Codex auto-review can send codex-auto-review to a custom DeepSeek provider, which DeepSeek rejects because it only recognizes its own V4 model names.",
      "Those are implementation checks, not a reason to avoid the route. The honest headline is now simpler: Claude Code has a DeepSeek-documented Anthropic path, and Codex has an OpenAI-documented third-party provider path. Use our DeepSeek access for the DeepSeek side, then verify that Codex is actually sending traffic to that provider."
    ],
    "originalUrl": "https://deepseekv4pro.com/news/deepseek-july2-claude-code-codex-integration-watch",
    "sourceLabel": "DeepSeek official Claude Code integration guide",
    "sourceHref": "https://api-docs.deepseek.com/quick_start/agent_integrations/claude_code"
  },
  {
    "slug": "deepseek-july2-model-list-balance-reference",
    "title": "DeepSeek Adds Models and User Balance API References",
    "date": "2026-07-02",
    "tag": "Official",
    "summary": "Checked on July 2, 2026: DeepSeek's official API reference documents a GET /models endpoint that currently examples only deepseek-v4-flash and deepseek-v4-pro, plus a GET /user/balance endpoint with is_available, currency, granted balance, and topped-up balance fields for direct budget checks.",
    "body": [
      "Checked on July 2, 2026: DeepSeek's official API reference documents a GET /models endpoint that currently examples only deepseek-v4-flash and deepseek-v4-pro, plus a GET /user/balance endpoint with is_available, currency, granted balance, and topped-up balance fields for direct budget checks.",
      "What we verified on July 2, 2026",
      "DeepSeek's official GET /models reference says the endpoint lists currently available models and its example response currently shows deepseek-v4-flash and deepseek-v4-pro owned by deepseek.",
      "The same page tells readers to check Models & Pricing for supported models, which means the model-list endpoint is a runtime discovery surface, while the pricing page remains the public contract for rates and support framing.",
      "DeepSeek's official GET /user/balance reference exposes a direct account-budget check with is_available plus balance_infos entries for currency, total_balance, granted_balance, and topped_up_balance.",
      "The balance example currently documents CNY and USD as the possible currency values, which matters for teams reconciling promotional credits versus paid top-ups.",
      "This is developer-account infrastructure guidance, not storefront inventory guidance: it does not create any new /pricing card, stock promise, or plan migration in this repo."
    ],
    "originalUrl": "https://deepseekv4pro.com/news/deepseek-july2-model-list-balance-reference",
    "sourceLabel": "Primary source linked by the original article",
    "sourceHref": "https://api-docs.deepseek.com/api/list-models"
  },
  {
    "slug": "deepseek-june30-token-usage-offline-tokenizer",
    "title": "DeepSeek Publishes Token Heuristics and Offline Tokenizer",
    "date": "2026-06-30",
    "tag": "Official",
    "summary": "Checked on June 30, 2026: DeepSeek's official Token & Token Usage page says tokens are the billing unit, gives rough heuristics of about 0.3 token per English character and 0.6 token per Chinese character, and links a deepseek_tokenizer.zip package for offline token estimation while still treating API usage output as the real source of truth.",
    "body": [
      "Checked on June 30, 2026: DeepSeek's official Token & Token Usage page says tokens are the billing unit, gives rough heuristics of about 0.3 token per English character and 0.6 token per Chinese character, and links a deepseek_tokenizer.zip package for offline token estimation while still treating API usage output as the real source of truth.",
      "What we verified on June 30, 2026",
      "DeepSeek's official Token & Token Usage page defines tokens as the basic unit for both text representation and billing.",
      "The same page publishes simple estimation heuristics: about 0.3 token per English character and about 0.6 token per Chinese character.",
      "DeepSeek also warns that conversion ratios vary by model tokenization, so the real count for any request should come from the API's returned usage data rather than from the rough heuristic alone.",
      "The page now links an offline package named deepseek_tokenizer.zip for local input/output token estimation outside the live API response path.",
      "This is practical infrastructure guidance rather than storefront guidance: it helps developers estimate spend and prompt size, but it does not create any new /pricing inventory or plan card."
    ],
    "originalUrl": "https://deepseekv4pro.com/news/deepseek-june30-token-usage-offline-tokenizer",
    "sourceLabel": "Primary source linked by the original article",
    "sourceHref": "https://api-docs.deepseek.com/quick_start/token_usage"
  },
  {
    "slug": "deepseek-june29-tool-calls-strict-schema-beta",
    "title": "DeepSeek Tool Calls Docs Define Strict Beta Schema Rules",
    "date": "2026-06-29",
    "tag": "Official",
    "summary": "Checked on June 29, 2026: DeepSeek's official Tool Calls guide documents OpenAI-compatible function calling, a Beta-only strict mode for exact schema matching, concrete supported and unsupported JSON Schema rules, and a required tool role replay pattern after execution.",
    "body": [
      "Checked on June 29, 2026: DeepSeek's official Tool Calls guide documents OpenAI-compatible function calling, a Beta-only strict mode for exact schema matching, concrete supported and unsupported JSON Schema rules, and a required tool role replay pattern after execution.",
      "What we verified on June 29, 2026",
      "DeepSeek's official Tool Calls guide now documents a full OpenAI-compatible function-calling contract for chat completions, including tools definitions and tool_calls output in assistant responses.",
      "The same page adds a stricter beta path: you can set strict: true on a function schema for more precise argument matching, but the docs mark that mode as Beta and require the Beta base URL.",
      "DeepSeek publishes a concrete schema support boundary for strict mode: supported types are string, number, integer, boolean, object, array, enum, and anyOf.",
      "The same strict-mode note also lists unsupported schema features such as minLength, maxLength, pattern, format, minimum, maximum, multipleOf, patternProperties, and array bounds like minItems and maxItems.",
      "The replay contract after execution is concrete: callers should append the assistant message that contains the tool call, then append a tool role message with the returned result before asking the model for the next turn."
    ],
    "originalUrl": "https://deepseekv4pro.com/news/deepseek-june29-tool-calls-strict-schema-beta",
    "sourceLabel": "Primary source linked by the original article",
    "sourceHref": "https://api-docs.deepseek.com/guides/function_calling"
  },
  {
    "slug": "deepseek-june28-v4-pricing-concurrency-contract",
    "title": "DeepSeek V4 API Limits: Context, Pricing and Concurrency",
    "date": "2026-06-28",
    "tag": "Official",
    "summary": "Checked on June 28, 2026: DeepSeek's official Models & Pricing and Rate Limit pages currently show a 1M context window, 384K max output, per-1M token pricing, and account-level concurrency limits of 2500 for DeepSeek V4 Flash and 500 for DeepSeek V4 Pro, with 429s when that cap is exceeded.",
    "body": [
      "Checked on June 28, 2026: DeepSeek's official Models & Pricing and Rate Limit pages currently show a 1M context window, 384K max output, per-1M token pricing, and account-level concurrency limits of 2500 for DeepSeek V4 Flash and 500 for DeepSeek V4 Pro, with 429s when that cap is exceeded.",
      "What we verified on June 28, 2026",
      "DeepSeek's official Models & Pricing page currently shows a shared V4 surface with a 1M context length and 384K maximum output for both deepseek-v4-flash and deepseek-v4-pro.",
      "The same official page bills in units of per 1M tokens and currently lists deepseek-v4-flash at $0.0028 input cache hit, $0.14 input cache miss, and $0.28 output, while deepseek-v4-pro is listed at $0.003625, $0.435, and $0.87 respectively.",
      "DeepSeek's official rate-limit page currently treats concurrency as an account-level cap, not a per-key loophole: deepseek-v4-flash is listed at 2500 concurrent requests and deepseek-v4-pro at 500.",
      "The official rate-limit contract is explicit about failure mode: once the concurrency limit is exceeded, requests receive HTTP 429 rather than silently queueing forever.",
      "DeepSeek also documents a capacity-expansion path with no additional cost, but only through a business-needs request workflow. That is a request path, not a guarantee of automatic higher limits.",
      "The pricing page still warns that product prices may vary, so this item should be read as a current docs snapshot rather than a promise that rates never change."
    ],
    "originalUrl": "https://deepseekv4pro.com/news/deepseek-june28-v4-pricing-concurrency-contract",
    "sourceLabel": "Primary source linked by the original article",
    "sourceHref": "https://api-docs.deepseek.com/quick_start/pricing"
  },
  {
    "slug": "deepseek-june27-stateless-chat-history-docs",
    "title": "DeepSeek Chat Completions Require Full History Replay",
    "date": "2026-06-27",
    "tag": "Official",
    "summary": "Checked on June 27, 2026: DeepSeek's official multi-round conversation guide says /chat/completions does not store context server-side, so each follow-up call must resend the prior conversation history, including earlier assistant output, before the next user turn.",
    "body": [
      "Checked on June 27, 2026: DeepSeek's official multi-round conversation guide says /chat/completions does not store context server-side, so each follow-up call must resend the prior conversation history, including earlier assistant output, before the next user turn.",
      "What we verified on June 27, 2026",
      "DeepSeek's official multi-round conversation guide says /chat/completions is stateless: the server does not keep prior turn context for you.",
      "The official fix is explicit rather than implied: each later request must concatenate all previous conversation history and send it back to the API.",
      "DeepSeek's own example appends the assistant response from round one before sending round two, then adds the next user question after that.",
      "The published sample still uses the ordinary OpenAI-compatible route with base_url=https://api.deepseek.com and model=deepseek-v4-pro, which means this is not a special SDK-only edge case.",
      "The guide makes the support boundary clearer for production apps: if a follow-up answer looks forgetful, the first debugging target is usually the caller's messages replay, not a hidden DeepSeek memory failure."
    ],
    "originalUrl": "https://deepseekv4pro.com/news/deepseek-june27-stateless-chat-history-docs",
    "sourceLabel": "Primary source linked by the original article",
    "sourceHref": "https://api-docs.deepseek.com/guides/multi_round_chat"
  },
  {
    "slug": "deepseek-june26-workbuddy-codebuddy-official-integration",
    "title": "DeepSeek Adds WorkBuddy and CodeBuddy Model Configuration",
    "date": "2026-06-26",
    "tag": "Official",
    "summary": "Checked on June 26, 2026: DeepSeek's official WorkBuddy or CodeBuddy page now documents exact user-level and project-level models.json paths, https://api.deepseek.com/v1/chat/completions as the endpoint, a UTF-8 without BOM requirement, and a restart-first troubleshooting flow for V4 Pro and V4 Flash.",
    "body": [
      "Checked on June 26, 2026: DeepSeek's official WorkBuddy or CodeBuddy page now documents exact user-level and project-level models.json paths, https://api.deepseek.com/v1/chat/completions as the endpoint, a UTF-8 without BOM requirement, and a restart-first troubleshooting flow for V4 Pro and V4 Flash.",
      "What we verified on June 26, 2026",
      "DeepSeek now has an official WorkBuddy or CodeBuddy integration page inside the agent-integrations section of the API docs.",
      "The page publishes exact local file locations instead of leaving desktop users to guess: a user-level C:\\Users\\<your-username>\\.codebuddy\\models.json path and a project-level <your-project>\\.codebuddy\\models.json path.",
      "DeepSeek gives a concrete endpoint contract for both V4 models: https://api.deepseek.com/v1/chat/completions with deepseek-v4-pro and deepseek-v4-flash exposed through the local model list.",
      "The docs also add a surprisingly specific failure guard: save models.json as UTF-8 without BOM, because some desktop versions may fail to read local model files when a BOM header is present.",
      "The official troubleshooting order is operationally useful: fully restart WorkBuddy or CodeBuddy, then verify the API key with a direct curl call before assuming the UI or model selector is broken."
    ],
    "originalUrl": "https://deepseekv4pro.com/news/deepseek-june26-workbuddy-codebuddy-official-integration",
    "sourceLabel": "Primary source linked by the original article",
    "sourceHref": "https://api-docs.deepseek.com/quick_start/agent_integrations/workbuddy"
  },
  {
    "slug": "deepseek-june25-anthropic-model-mapping-fallback",
    "title": "DeepSeek Clarifies Claude Model Mapping and Flash Fallback",
    "date": "2026-06-25",
    "tag": "Official",
    "summary": "Checked on June 25, 2026: DeepSeek's official Anthropic API page says claude-opus* maps to V4 Pro, claude-haiku* and claude-sonnet* map to V4 Flash, unsupported model names automatically fall back to Flash, and the mapping can help bypass Claude Desktop developer-mode model-name restrictions.",
    "body": [
      "Checked on June 25, 2026: DeepSeek's official Anthropic API page says claude-opus* maps to V4 Pro, claude-haiku* and claude-sonnet* map to V4 Flash, unsupported model names automatically fall back to Flash, and the mapping can help bypass Claude Desktop developer-mode model-name restrictions.",
      "What we verified on June 25, 2026",
      "DeepSeek's official Anthropic API guide publishes an explicit Claude-name mapping rule: claude-opus* routes to deepseek-v4-pro, while claude-haiku* and claude-sonnet* route to deepseek-v4-flash.",
      "The same official page warns that unsupported model names are not rejected hard by default. DeepSeek says the Anthropic API backend will automatically map an unsupported model name to deepseek-v4-flash.",
      "DeepSeek also frames this mapping as useful inside the new Claude Desktop app's developer mode: the docs say that by changing only the base URL and API key, users can bypass the app's model-name restrictions and still connect to DeepSeek models.",
      "The official endpoint contract remains simple: https://api.deepseek.com/anthropic with Anthropic-style clients, rather than inventing a separate DeepSeek-only SDK surface for this workflow."
    ],
    "originalUrl": "https://deepseekv4pro.com/news/deepseek-june25-anthropic-model-mapping-fallback",
    "sourceLabel": "Primary source linked by the original article",
    "sourceHref": "https://api-docs.deepseek.com/guides/anthropic_api"
  },
  {
    "slug": "deepseek-june24-copilot-cli-official-integration",
    "title": "DeepSeek Documents GitHub Copilot CLI BYOK Setup",
    "date": "2026-06-24",
    "tag": "Official",
    "summary": "Checked on June 24, 2026: DeepSeek's official GitHub Copilot CLI page says teams should use the Anthropic-compatible endpoint, warns that the OpenAI provider triggers a 400 reasoning-content error, sets explicit token ceilings for deepseek-v4-pro, and clarifies that offline mode still sends prompts to DeepSeek.",
    "body": [
      "Checked on June 24, 2026: DeepSeek's official GitHub Copilot CLI page says teams should use the Anthropic-compatible endpoint, warns that the OpenAI provider triggers a 400 reasoning-content error, sets explicit token ceilings for deepseek-v4-pro, and clarifies that offline mode still sends prompts to DeepSeek.",
      "What we verified on June 24, 2026",
      "DeepSeek now has an official GitHub Copilot CLI integration page inside the agent-integrations section of the API docs.",
      "The page publishes a strict provider rule: use anthropic as the provider type and point Copilot CLI to https://api.deepseek.com/anthropic.",
      "DeepSeek documents the actual failure mode behind a common setup error: the openai provider type triggers a 400 error that says The reasoning_content in the thinking mode must be passed back to the API. because Copilot CLI's OpenAI integration does not echo reasoning_content back on later requests.",
      "The official page also publishes explicit token ceilings for the custom DeepSeek route: 840000 max prompt tokens and 128000 max output tokens for deepseek-v4-pro.",
      "DeepSeek adds an operational boundary around offline mode: COPILOT_OFFLINE=true only blocks GitHub API calls, while prompts still go to api.deepseek.com."
    ],
    "originalUrl": "https://deepseekv4pro.com/news/deepseek-june24-copilot-cli-official-integration",
    "sourceLabel": "Primary source linked by the original article",
    "sourceHref": "https://api-docs.deepseek.com/quick_start/agent_integrations/copilot_cli"
  },
  {
    "slug": "deepseek-june23-claude-code-official-integration",
    "title": "DeepSeek Publishes Official Claude Code Integration Guide",
    "date": "2026-06-23",
    "tag": "Official",
    "summary": "Checked on June 23, 2026: DeepSeek's official Claude Code page now documents the Anthropic-compatible environment contract, native Web Search support, and an explicit mapping where Claude-style model names route to DeepSeek V4 Pro or Flash.",
    "body": [
      "Checked on June 23, 2026: DeepSeek's official Claude Code page now documents the Anthropic-compatible environment contract, native Web Search support, and an explicit mapping where Claude-style model names route to DeepSeek V4 Pro or Flash.",
      "What we verified on June 23, 2026",
      "DeepSeek now has an official Claude Code integration page inside the agent-integrations section of the API docs.",
      "The official environment contract is concrete: DeepSeek publishes ANTHROPIC_BASE_URL=https://api.deepseek.com/anthropic, uses deepseek-v4-pro[1m] for the main Claude route, keeps deepseek-v4-flash on the lighter lane, and exposes CLAUDE_CODE_EFFORT_LEVEL=max.",
      "DeepSeek explicitly says Web Search is natively supported in Claude Code and that search-triggered summarization creates additional model-token cost.",
      "The same page publishes a model-mapping rule for Claude-style names: claude-opus* maps to DeepSeek V4 Pro, while claude-haiku* and claude-sonnet* map to DeepSeek V4 Flash.",
      "DeepSeek also says this mapping can help with the new Claude Desktop app's developer-mode model-name restrictions, which turns a community workaround pattern into a partially official routing story."
    ],
    "originalUrl": "https://deepseekv4pro.com/news/deepseek-june23-claude-code-official-integration",
    "sourceLabel": "Primary source linked by the original article",
    "sourceHref": "https://api-docs.deepseek.com/quick_start/agent_integrations/claude_code"
  },
  {
    "slug": "deepseek-june22-openclaw-official-integration",
    "title": "DeepSeek Publishes Official OpenClaw Integration Guide",
    "date": "2026-06-22",
    "tag": "Official",
    "summary": "Checked on June 22, 2026: DeepSeek's official OpenClaw page now documents openclaw onboard --install-daemon, QuickStart provider selection, manual entry of deepseek-v4-pro or deepseek-v4-flash, and follow-up launch routes through the dashboard, TUI, or terminal.",
    "body": [
      "Checked on June 22, 2026: DeepSeek's official OpenClaw page now documents openclaw onboard --install-daemon, QuickStart provider selection, manual entry of deepseek-v4-pro or deepseek-v4-flash, and follow-up launch routes through the dashboard, TUI, or terminal.",
      "What we verified on June 22, 2026",
      "DeepSeek now has an official OpenClaw integration page inside the agent-integrations section of the API docs.",
      "The migration path is concrete instead of guess-based: existing users are told to run openclaw onboard --install-daemon to re-enter setup and switch the provider to DeepSeek.",
      "DeepSeek's prompt flow is unusually specific: confirm the personal-by-default warning, choose QuickStart, select DeepSeek as the provider, paste a DeepSeek API key, and then manually enter deepseek-v4-pro or deepseek-v4-flash as the default model.",
      "The same page keeps the operational launch routes explicit: users can continue from openclaw dashboard, openclaw tui, or openclaw terminal after setup.",
      "DeepSeek also frames OpenClaw as a message-connected agent surface with Feishu and WeChat support plus Skills, which makes it broader than a terminal-only coding wrapper."
    ],
    "originalUrl": "https://deepseekv4pro.com/news/deepseek-june22-openclaw-official-integration",
    "sourceLabel": "Primary source linked by the original article",
    "sourceHref": "https://api-docs.deepseek.com/quick_start/agent_integrations/openclaw"
  },
  {
    "slug": "deepseek-june20-reasonix-official-integration",
    "title": "DeepSeek Publishes Official Reasonix Integration Guide",
    "date": "2026-06-20",
    "tag": "Official",
    "summary": "Checked on June 20, 2026: DeepSeek's official Reasonix integration page now documents npx reasonix code, stores the API key in ~/.reasonix/config.json, defaults to DeepSeek V4 Flash, and exposes /pro plus /preset max for stronger reasoning when needed.",
    "body": [
      "Checked on June 20, 2026: DeepSeek's official Reasonix integration page now documents npx reasonix code, stores the API key in ~/.reasonix/config.json, defaults to DeepSeek V4 Flash, and exposes /pro plus /preset max for stronger reasoning when needed.",
      "What we verified on June 20, 2026",
      "DeepSeek now has an official Reasonix integration page inside the agent-integrations section of the API docs.",
      "The official startup path is direct and repo-scoped: enter the target project and run npx reasonix code.",
      "The page says the first run persists the DeepSeek API key into ~/.reasonix/config.json, which makes the setup path more concrete than a generic env-var-only article.",
      "DeepSeek documents a Flash-first routing pattern: Reasonix defaults to DeepSeek V4 Flash for cheaper iteration.",
      "The same page gives two explicit escalation commands: /pro for the next turn and /preset max for a Pro-heavy whole-session route."
    ],
    "originalUrl": "https://deepseekv4pro.com/news/deepseek-june20-reasonix-official-integration",
    "sourceLabel": "Primary source linked by the original article",
    "sourceHref": "https://api-docs.deepseek.com/quick_start/agent_integrations/reasonix"
  },
  {
    "slug": "deepseek-june18-multimodal-janus-vl2-v4-boundary",
    "title": "DeepSeek Multimodal Models Stay Separate From the V4 API",
    "date": "2026-06-18",
    "tag": "Official",
    "summary": "Checked on June 18, 2026: DeepSeek's official research and GitHub surfaces already include multimodal work through Janus-Pro and DeepSeek-VL2, covering image understanding, OCR, document/chart reasoning, visual grounding, and text-to-image generation. Official V4 API docs still list V4 Pro and V4 Flash as text-first API routes, and DeepSeek's Copilot page says V4 itself is text-only with an optional vision proxy, so this should be framed as DeepSeek's multimodal ecosystem expanding rather than a newly confirmed native V4 Vision API.",
    "body": [
      "Checked on June 18, 2026: DeepSeek's official research and GitHub surfaces already include multimodal work through Janus-Pro and DeepSeek-VL2, covering image understanding, OCR, document/chart reasoning, visual grounding, and text-to-image generation. Official V4 API docs still list V4 Pro and V4 Flash as text-first API routes, and DeepSeek's Copilot page says V4 itself is text-only with an optional vision proxy, so this should be framed as DeepSeek's multimodal ecosystem expanding rather than a newly confirmed native V4 Vision API.",
      "Confirmed multimodal work, with an important V4 boundary",
      "DeepSeek already has a real multimodal line. The safest source-backed wording is not that every DeepSeek V4 API route has suddenly become native vision. The accurate headline is narrower: DeepSeek's official research stack includes multimodal models, while the current public V4 API docs still present Pro and Flash as text-first routes.",
      "That distinction matters for developers and buyers. Janus-Pro and DeepSeek-VL2 are official DeepSeek multimodal releases. They show that DeepSeek is not only a text and coding-model lab. But the public V4 API surface still needs to be described exactly as DeepSeek documents it today.",
      "What is confirmed",
      "Janus-Pro is part of DeepSeek's official Janus series. The Janus repository describes the project as unified multimodal understanding and generation, and its January 27, 2025 release note says Janus-Pro improves both multimodal understanding and visual generation.",
      "DeepSeek-VL2 is an official vision-language model family. Its repository describes MoE vision-language models for visual question answering, OCR, document/table/chart understanding, and visual grounding.",
      "The DeepSeek homepage still links DeepSeek VL under research. That keeps the vision-language line visible from a DeepSeek-owned surface rather than only from third-party commentary.",
      "The current V4 API docs list V4 Pro and V4 Flash through the OpenAI and Anthropic-compatible text interfaces. The V4 release page emphasizes 1M context, reasoning, agent capability, API availability, JSON/tool calling, and model-name migration.",
      "DeepSeek's own GitHub Copilot integration page is explicit about the limitation. It says DeepSeek V4 is text-only, and that image handling in the extension uses another installed Copilot model to describe screenshots before sending text to DeepSeek.",
      "What \"DeepSeek goes multimodal\" should mean today",
      "For readers, this is still important news. The DeepSeek ecosystem now has credible multimodal building blocks:",
      "Janus-Pro points toward unified image understanding and image generation.",
      "DeepSeek-VL2 points toward practical visual understanding: OCR, charts, documents, screenshots, and grounding.",
      "V4 remains the production text/coding/agent backbone documented in the public API.",
      "Copilot-style extensions can bridge screenshots into DeepSeek through a proxy model, but that is not the same as native V4 image input.",
      "So the right product interpretation is: DeepSeek has official multimodal research releases, but teams should not assume a native V4 Vision API model name or image-token pricing until DeepSeek publishes it directly.",
      "Why this matters for developers",
      "Multimodal support changes the kind of workflows DeepSeek can eventually own. Text-only coding models handle code, logs, prompts, API payloads, and documentation. Vision-language models add screenshot review, UI-state debugging, chart interpretation, scanned document QA, visual grounding, and image-backed support triage.",
      "That is the real reason this belongs in the news stream. DeepSeek's V4 story has mostly been about long context, cost, coding, and agent routing. Janus and VL2 show the adjacent capability layer: the model family can move from pure language tasks into visual evidence and, in Janus-Pro's case, image generation.",
      "What not to overclaim",
      "Do not turn this into a stocked-product update. A multimodal research model is not a Coding Plan. It does not create a new purchasable card on /pricing, it does not prove available API-key inventory, and it does not justify adding a new subscription plan.",
      "Also do not invent model names such as deepseek-v4-vision unless DeepSeek publishes that exact route. The current safe API model names remain deepseek-v4-pro and deepseek-v4-flash."
    ],
    "originalUrl": "https://deepseekv4pro.com/news/deepseek-june18-multimodal-janus-vl2-v4-boundary",
    "sourceLabel": "DeepSeek official homepage",
    "sourceHref": "https://www.deepseek.com/"
  },
  {
    "slug": "deepseek-june18-pi-provider-schema",
    "title": "DeepSeek Documents Pi Provider Schema and Reasoning Mapping",
    "date": "2026-06-18",
    "tag": "Official",
    "summary": "Checked on June 18, 2026: DeepSeek's official Pi integration guide now gives a concrete models.json provider block with api.deepseek.com, 1M context metadata, Pro and Flash pricing fields, and a reasoning-effort map that translates Pi's levels to DeepSeek's supported behavior.",
    "body": [
      "Checked on June 18, 2026: DeepSeek's official Pi integration guide now gives a concrete models.json provider block with api.deepseek.com, 1M context metadata, Pro and Flash pricing fields, and a reasoning-effort map that translates Pi's levels to DeepSeek's supported behavior.",
      "What we verified on June 18, 2026",
      "DeepSeek now has an official Pi integration page in its agent-integrations docs.",
      "That page publishes a ready-made models.json provider schema for deepseek-v4-pro and deepseek-v4-flash using https://api.deepseek.com as the base URL.",
      "The same official schema exposes 1M context metadata and 384K max-token metadata for both models inside Pi's provider definition.",
      "DeepSeek also includes explicit pricing fields in the Pi config example: Pro lists input 1.74, output 3.48, and cacheRead 0.145, while Flash lists input 0.14, output 0.28, and cacheRead 0.028.",
      "The compatibility block is DeepSeek-specific rather than generic OpenAI boilerplate: the page sets thinkingFormat to deepseek, requires reasoning content on assistant messages, and maps Pi's reasoning levels to DeepSeek's high and max behavior."
    ],
    "originalUrl": "https://deepseekv4pro.com/news/deepseek-june18-pi-provider-schema",
    "sourceLabel": "Primary source linked by the original article",
    "sourceHref": "https://api-docs.deepseek.com/quick_start/agent_integrations/pi_mono"
  },
  {
    "slug": "deepseek-june11-rate-limit-user-id-docs",
    "title": "DeepSeek Rate Limits Use Account Concurrency and user_id",
    "date": "2026-06-11",
    "tag": "Official",
    "summary": "Checked on June 11, 2026: DeepSeek's official docs now give a cleaner production picture for V4 traffic management, with 500 Pro concurrency, 2500 Flash concurrency, explicit user_id isolation rules, and request keep-alive handling.",
    "body": [
      "Checked on June 11, 2026: DeepSeek's official docs now give a cleaner production picture for V4 traffic management, with 500 Pro concurrency, 2500 Flash concurrency, explicit user_id isolation rules, and request keep-alive handling.",
      "What we verified on June 11, 2026",
      "DeepSeek's official Rate Limit & Isolation page sets account-level concurrency at 500 for deepseek-v4-pro and 2500 for deepseek-v4-flash.",
      "The same official page now explains what user_id does: content-safety isolation, KV-cache isolation, and scheduling isolation under one account.",
      "DeepSeek also documents protocol-specific user_id placement: extra_body.user_id for OpenAI-format calls and metadata.user_id for Anthropic-format calls.",
      "The same page documents the request keep-alive behavior: non-streaming responses can emit empty lines, streaming responses can emit SSE keep-alive comments, and the server closes the connection if inference has not started after 10 minutes.",
      "DeepSeek's English homepage still points its public social anchor to @deepseek_ai, which remains the safest official X confirmation even though the X page itself is not safely crawlable here."
    ],
    "originalUrl": "https://deepseekv4pro.com/news/deepseek-june11-rate-limit-user-id-docs",
    "sourceLabel": "Primary source linked by the original article",
    "sourceHref": "https://api-docs.deepseek.com/quick_start/rate_limit"
  },
  {
    "slug": "deepseek-v4-pro-quarter-price-reset-may24",
    "title": "DeepSeek V4 Pro pricing reset: 75% discount becomes the official quarter-price baseline after May 31",
    "date": "2026-05-24",
    "tag": "Official",
    "summary": "DeepSeek's current pricing page now says V4-Pro API pricing will be officially adjusted to one quarter of the original price after the 75% discount ends on May 31, 2026. Treat this as an official price reset, not a guarantee that prices can never change.",
    "body": [
      "DeepSeek's current pricing page now says V4-Pro API pricing will be officially adjusted to one quarter of the original price after the 75% discount ends on May 31, 2026. Treat this as an official price reset, not a guarantee that prices can never change.",
      "Official pricing update",
      "DeepSeek's pricing page has changed the V4-Pro story from a short promotion into an official post-promotion price reset. The current English and Chinese pages both say the V4-Pro API price will be officially adjusted to 1/4 of the original price after the 75% discount window ends.",
      "The exact cutoff is 2026-05-31 15:59 UTC, or 2026-05-31 23:59 Beijing time.",
      "What is confirmed now",
      "DeepSeek V4 Pro cache-hit input: $0.003625 / 1M tokens",
      "DeepSeek V4 Pro cache-miss input: $0.435 / 1M tokens",
      "DeepSeek V4 Pro output: $0.87 / 1M tokens",
      "DeepSeek V4 Flash remains $0.0028 cache-hit input, $0.14 cache-miss input, and $0.28 output per 1M tokens",
      "What this does not mean",
      "This is not a promise of permanent stock, unlimited access, or a forever price guarantee. DeepSeek's own pricing page still says product prices may vary and that DeepSeek reserves the right to adjust them. The accurate buyer-facing wording is: the 75% V4-Pro discount becomes the official quarter-price baseline after May 31, subject to DeepSeek's future pricing changes.",
      "Site handling",
      "For this hub, the update changes content and comparison copy, but it does not create a new purchasable product. The pricing page should continue to show only stocked one-off Coding Plans, and benchmark or arena support still must not be treated as sellable inventory.",
      "Sources checked",
      "DeepSeek official pricing page",
      "DeepSeek Chinese pricing page",
      "DeepSeek V4 Preview release note"
    ],
    "originalUrl": "https://deepseekv4pro.com/news/deepseek-v4-pro-quarter-price-reset-may24",
    "sourceLabel": "Original article sources",
    "sourceHref": "https://deepseekv4pro.com/news/deepseek-v4-pro-quarter-price-reset-may24"
  },
  {
    "slug": "deepseek-claude-code-may20-model-alias-deprecation",
    "title": "DeepSeek Claude Code Needs V4 Model Pins Before July 24",
    "date": "2026-05-20",
    "tag": "Official",
    "summary": "DeepSeek's official docs now tie Claude-style integrations more clearly to exact V4 model strings, while the main API quick-start warns that deepseek-chat and deepseek-reasoner will be deprecated on July 24, 2026.",
    "body": [
      "DeepSeek's official docs now tie Claude-style integrations more clearly to exact V4 model strings, while the main API quick-start warns that deepseek-chat and deepseek-reasoner will be deprecated on July 24, 2026.",
      "DeepSeek's official Claude Code page still gives the same Anthropic-compatible baseline that this site already recommends, but the broader official API docs now add an important migration warning that older community tutorials can easily miss: deepseek-chat and deepseek-reasoner are scheduled to be deprecated on July 24, 2026.",
      "What changed upstream",
      "The official Claude Code recipe still expects exact V4 strings: ANTHROPIC_MODEL=deepseek-v4-pro[1m], the matching ANTHROPIC_DEFAULT_* pins, CLAUDE_CODE_SUBAGENT_MODEL=deepseek-v4-flash, and CLAUDE_CODE_EFFORT_LEVEL=max.",
      "The official API quick-start now flags legacy aliases with a real date: deepseek-chat and deepseek-reasoner are marked for 2026-07-24 deprecation.",
      "The compatibility mapping is now explicit: the same quick-start says those old names only exist for compatibility and currently map to the non-thinking and thinking modes of deepseek-v4-flash, respectively.",
      "The Anthropic-format warning still matters: DeepSeek's Anthropic API docs say unsupported model names can automatically map to deepseek-v4-flash. That means outdated aliases or altered provider-side names can silently leave a Claude Code or Desktop workflow on Flash when the user expected Pro.",
      "Practical setup guidance",
      "This is not just a naming nit. It changes what a trustworthy DeepSeek-via-Claude setup guide should tell developers to do right now:",
      "1.   Copy the official V4 model strings exactly instead of reusing older deepseek-chat or deepseek-reasoner snippets.\n2.   Treat July 24, 2026 as the migration deadline for any Claude Code, Claude Desktop, Gateway, or settings.json workflow still using those aliases.\n3.   Verify provider-side model usage when testing Desktop mapping or \"Cloud Code\" wording variants, because unsupported names can still fall back to Flash."
    ],
    "originalUrl": "https://deepseekv4pro.com/news/deepseek-claude-code-may20-model-alias-deprecation",
    "sourceLabel": "DeepSeek official Claude Code integration guide",
    "sourceHref": "https://api-docs.deepseek.com/guides/agent_integrations/claude_code"
  }
];


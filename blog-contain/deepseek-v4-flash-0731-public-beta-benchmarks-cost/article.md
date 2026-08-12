---
title: "DeepSeek V4 Flash Is Official: Stronger Agent Performance at the Same Price"
published: 2026-07-31
updated: 2026-07-31
route: /deepseek/deepseek-v4-flash-0731-public-beta-benchmarks-cost
tag: Official
---

DeepSeek-V4-Flash-0731 is now the official public-beta release of Flash. The API model name remains `deepseek-v4-flash`, so existing users can access the new version without changing the calling pattern. The update applies to the Flash API only: V4 Pro and DeepSeek's App and Web models have not changed.

## Official benchmarks show a larger agent jump

DeepSeek's release materials focus on agent and coding work. The company reports higher scores than both V4 Flash Preview and V4 Pro Preview across nine listed benchmarks, including Terminal Bench 2.1, DeepSWE, Toolathlon-Verified, and Agents' Last Exam. Those results make the new release look like more than a routine model refresh.

They are still DeepSeek's own numbers, not an independent ranking. For public code-agent tasks, DeepSeek used its upcoming DeepSeek Harness in a specified minimal-mode configuration. DSBench-FullStack and DSBench-Hard are internal test sets. That makes the table useful evidence of the provider's progress, but not a substitute for testing a team's own repositories, tools, latency requirements, and review process.

## Independent analysis points in the same direction

Artificial Analysis places V4 Flash 0731 at 50 on its Intelligence Index: 10 points above the April V4 Flash release and six points ahead of V4 Pro on that index. It also reports a GDPval-AA v2 score of 1559, up from 1189 for the previous Flash model. These figures use Artificial Analysis's own methodology and should be kept distinct from DeepSeek's benchmark table, but they support the same conclusion: 0731 is a material update for agentic work.

## Same pricing, same underlying model

Artificial Analysis lists the 0731 release at $0.14 per million input tokens and $0.28 per million output tokens on DeepSeek's first-party API, with cache-hit input at $0.0028 per million tokens. It estimates a lower cost per task than GPT-5.6 Luna Max at comparable measured intelligence, while noting that cache behavior and provider pricing affect the comparison.

DeepSeek says V4 Flash 0731 keeps the same architecture and size as V4 Flash Preview, with the gains coming from further post-training. It also keeps the same one-million-token context window. For current API users, this is a performance update to an existing integration, not a migration to a new model family or API surface.

## What API users should test next

DeepSeek now documents native Responses API support and a Codex integration path for V4 Flash, but Codex is a supporting feature rather than the main story of this release. The practical next step is to keep the `deepseek-v4-flash` model ID, run a representative coding or tool-use workflow, and compare task completion, retry rate, latency, cache-hit rate, and cost against the previous baseline.

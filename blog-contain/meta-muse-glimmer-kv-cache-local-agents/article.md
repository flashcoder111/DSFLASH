---
title: "Meta’s Muse Glimmer: A 30B Open Model Built for Local Agents"
published: 2026-08-12
updated: 2026-08-12
route: /articles/meta-muse-glimmer-kv-cache-local-agents
tag: AI Agents
---

Most coverage of Muse Glimmer will start with its benchmarks. Fair enough: Meta has released a 30B multimodal model aimed at coding and agent tasks. But one line in the configuration is more interesting than most of the score tables. It has 32 query heads and just two key/value heads.

That does not shrink the model weights. It changes the memory a runtime keeps adding as a task grows. Anyone who has watched a local agent chew through terminal logs, screenshots and tool outputs will recognise why that is worth paying attention to.

## Three local layers, then one global layer

Meta’s model card describes Muse Glimmer as a dense 29.6B-parameter causal transformer with a perception encoder for text-and-image input. It has 52 language-model layers and a 131,072-token context length. Its attention pattern repeats three local sliding-window layers followed by one full-attention layer; the local window is 2,048 tokens.

So most layers work on nearby context, while every fourth layer can look across the wider history. It is a practical compromise, and the released configuration makes it easy to check without relying on a marketing diagram.

## Two KV heads make the cache unusually lean

The published configuration lists 32 query heads, 2 key/value heads and a head dimension of 128. At BF16 precision, 52 layers, two KV heads and separate key-and-value storage come to about 52 KiB of KV cache for every token in one sequence. That is a calculation from the released configuration, not a provider benchmark.

The catch is that cache size is only one part of the memory bill. Quantization, runtime, batch size, image inputs and the amount of context kept around all matter. Still, this configuration means the cached attention state grows more slowly than it would with many more KV heads.

## Long agent sessions are the real test

Agent work is where cache growth becomes annoying. A coding or research session can pull in long tool outputs, screenshots, files and many rounds of planning. Once the cache hits the hardware limit, the advertised context window stops being useful. You shorten history, summarise more aggressively or switch models.

Meta says its roughly 4-bit language-model weights can fit under 20 GB, leaving room in a 24 GB or 32 GB setup for the cache, image encoder and speculative-decoding drafter. That is Meta’s deployment claim, not a promise for every client or agent framework. But it explains what the company is optimising for.

## Read the benchmark chart with care

Sebastian Raschka’s post puts the architecture beside an Ollama benchmark on DGX Spark and a screenshot of the Artificial Analysis Agentic Index. It is a useful picture of the trade-off. It is also one machine, one runtime and a particular set of prompt lengths, not a universal speed ranking.

The quality table needs the same caution. Meta reports strong results against Qwen3.6 27B and Gemma 4 31B on several agent and coding tests. The independent index shown in the post puts Muse Glimmer below Qwen3.6 27B. Before choosing a model, run the quantization, runtime, context length and tool workflow you actually plan to use.

## Open weights make the details checkable

Muse Glimmer is under Apache 2.0, and Meta has published BF16 weights, GGUF quantizations and ExecuTorch builds. That gives developers something better than guesses: inspect the configuration, run a representative long task, then measure memory alongside quality and latency.

A smaller KV cache will not make Muse Glimmer the right model for every agent. It may, however, let a longer task fit on the hardware you already have. That is more useful than a single leaderboard score.

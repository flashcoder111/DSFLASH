---
title: "DeepSeek V4 Flash Vision Exp Is Live: Multimodal API, Benchmarks and Price"
published: 2026-08-21
updated: 2026-08-21
route: /articles/deepseek-v4-flash-vision-exp-multimodal-api
tag: AI Agents
---

DeepSeek has made DeepSeek-V4-Flash-Vision-Exp available on its API platform. The model is experimental, but it is live: set `model='deepseek-v4-flash-vision-exp'` to call it. The launch is an API release, so it should not be read as confirmation that the same model has arrived in DeepSeek's consumer app or web chat.

The change is straightforward but useful. V4 Flash was a text model; Vision Exp accepts images alongside text. DeepSeek's documentation describes image understanding for tasks such as reading screenshots, analysing charts and describing photographs. For an agent that already works from browser captures, tickets or visual test output, that removes one handoff to a separate vision model. Whether it improves a real workflow still depends on the images, tools and review loop around it.

## What DeepSeek reports on the benchmarks

DeepSeek reports the following results for V4 Flash Vision Exp: Terminal Bench 2.1, 83.9; NL2Repo, 57.7; DeepSWE, 59.3; DSBench-Hard, 63.6; AutomationBench (Public), 25.7; ApexBench (Pass@1), 36.5; Agents' Last Exam, 27.3; Chartography, 64.3 at p0.95 and 63.3 at p1.0; and ZeroBench (Pass@5), 35.0.

Those are provider-reported results, not an independent ranking. DeepSeek says its family was tested on public benchmark Code Agent text tasks with DeepSeek Harness minimal mode, maximum effort, temperature 1.0 and top_p 0.95. It also says the text-only V4 Flash baseline ignores multimodal material in ApexBench and Agents' Last Exam. That matters when reading the visual-agent comparison.

DeepSeek says Vision Exp is on par with the official V4 Flash release on pure-text agent, reasoning and world-knowledge work. It also says the model makes a substantial gain over V4 Flash on benchmarks requiring visual understanding and comes close to Opus-4.8 in multimodal agent capability. Treat that last comparison as DeepSeek's interpretation of its benchmark results, not a general claim that the two models are interchangeable.

## How to call the multimodal API

The documented API model name is `deepseek-v4-flash-vision-exp`. DeepSeek supports image input through its OpenAI-compatible Chat Completions API, its Anthropic-compatible Messages API and its OpenAI-compatible Responses API. The same base URLs remain `https://api.deepseek.com` and `https://api.deepseek.com/anthropic` for the respective API families.

For Chat Completions, image input is sent in a user message as a content block rather than as a plain-string prompt. The Vision guide documents three paths: a base64 data URL, a public external URL, or an uploaded Files API `file_id`. The model accepts JPEG, PNG, GIF and WebP. Images in system or assistant messages are rejected, and other DeepSeek models reject image input.

Files API is useful when an agent needs the same image more than once or when inline payload limits get in the way. The official guide documents `POST /files` uploads and later `file_id` references. A file can be up to 64 MiB, while base64 or external-URL images are limited to 32 MiB. DeepSeek's documentation does not list a separate Files API upload price; image processing is billed through the model's input-token usage.

## Pricing and the practical constraint

The current official pricing table gives Vision Exp the same token rates as V4 Flash: $0.007 per million cached-input tokens, $0.22 per million uncached-input tokens and $0.66 per million output tokens off-peak; peak rates are double. The model also shares V4 Flash's listed 1M-token context window, 384K maximum output and 2,500 concurrency limit. Prices can change, so production estimates should use the live pricing page rather than this article alone.

Images are converted to input tokens and billed with the text. DeepSeek says each image is resized before inference and consumes at most 384 tokens. Large images therefore do not keep increasing token cost indefinitely, although the API still imposes request-size, image-count and dimension limits. That makes the model easier to test with screenshots and UI assets, but it does not make visual-agent work free of payload and latency trade-offs.

## DeepSeek Harness support is already available

DeepSeek Harness v0.1.1-rc.1 adds DeepSeek-V4-Flash-Vision-Exp to the DeepSeek adapter, according to the project's official GitHub release notes. Users who want that adapter route should use v0.1.1-rc.1 or a later compatible release. Harness remains a developer preview, and its release notes warn that compatibility-breaking changes are possible.

The interesting question is not whether a benchmark chart makes a model multimodal. It is whether an agent can actually use visual context to finish a job: inspect a failed UI test, read a chart, trace a screenshot back to the right component, then leave a reviewable change. Vision Exp gives DeepSeek developers a native API option for that experiment. The sensible next step is a small evaluation on the images and tool loop your team already uses.

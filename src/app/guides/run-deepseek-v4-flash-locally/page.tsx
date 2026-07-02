import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Cpu } from "lucide-react";
import { siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Run DeepSeek V4 Flash Locally: Ollama + VRAM Guide",
  description:
    "V4 Flash needs 33 GB VRAM quantized, 80 GB FP8, or ~170 GB full precision. Ollama commands, GGUF quantization picks, and when the API is the smarter buy.",
  alternates: {
    canonical: "/guides/run-deepseek-v4-flash-locally"
  }
};

const hardwareTiers = [
  {
    tier: "Quantized (Q4-class GGUF)",
    memory: "~33 GB VRAM",
    hardware: "1× RTX 6000 Ada, or 2× RTX 4090",
    tradeoff: "Noticeable quality loss on hard reasoning; fine for chat, summarization, and retrieval"
  },
  {
    tier: "FP8",
    memory: "~80 GB",
    hardware: "1× H100 80 GB",
    tradeoff: "Near-full quality; the practical single-card server tier"
  },
  {
    tier: "Full precision + KV cache",
    memory: "~170 GB",
    hardware: "2× H200",
    tradeoff: "Reference quality; only worth it if you're benchmarking or serving at scale"
  }
];

const faqs = [
  {
    q: "How much VRAM does DeepSeek V4 Flash need?",
    a: "Community-reported figures: about 33 GB for heavily quantized GGUF builds (one RTX 6000 Ada or two RTX 4090s), about 80 GB for FP8 on a single H100, and roughly 170 GB for full-precision weights plus KV cache on two H200s. A 284B-parameter MoE is 'light' only relative to V4 Pro."
  },
  {
    q: "Can I run V4 Flash on a MacBook?",
    a: "Realistically, no — even aggressive quantization keeps the working set above what consumer Apple Silicon unified memory handles comfortably at usable speeds. A Mac Studio with 192 GB unified memory can load quantized builds, but throughput reports are modest. For Mac users the API route is the practical answer."
  },
  {
    q: "Which GGUF quantization should I download?",
    a: "Start with the Q4_K_M-class build if you're VRAM-limited: it is the smallest tier that community testers describe as usable for general work. If you have headroom, Q5 or Q8 narrows the quality gap on reasoning tasks. Whatever you pick, run your own prompts through it before trusting it — quantization loss is workload-dependent."
  },
  {
    q: "Is running locally cheaper than the API?",
    a: "Almost never for light use. At $0.14/$0.28 per 1M tokens, $2,000 of GPU hardware buys you several billion API tokens. Local wins when you have strict data-residency requirements, sustained heavy volume, or you need offline access — not as a way to save money on a side project."
  },
  {
    q: "Does Ollama support V4 Flash officially?",
    a: "Yes. The official Ollama library lists deepseek-v4-flash, including a cloud-proxied variant. That also enables the one-line OpenClaw integration: ollama launch openclaw --model deepseek-v4-flash:cloud."
  }
];

export default function RunLocallyGuidePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "Run DeepSeek V4 Flash locally: Ollama setup and VRAM requirements",
        description:
          "Hardware tiers, Ollama commands, and GGUF quantization picks for running DeepSeek V4 Flash on your own machines.",
        datePublished: "2026-07-02",
        dateModified: "2026-07-02",
        url: `${siteConfig.url}/guides/run-deepseek-v4-flash-locally`,
        author: {
          "@type": "Organization",
          name: siteConfig.name,
          url: siteConfig.url
        }
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a }
        }))
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="market-grid border-b border-white/10 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/guides"
            className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-200"
          >
            <ArrowLeft className="h-4 w-4" />
            All guides
          </Link>
          <h1 className="mt-6 text-3xl font-semibold text-white sm:text-5xl">
            Run DeepSeek V4 Flash locally: Ollama setup and VRAM requirements
          </h1>
          <p className="mt-5 text-base leading-8 text-slate-400">
            V4 Flash is a 284B-parameter MoE with 13B active parameters — small
            for its family, large for your GPU. Here is what the three hardware
            tiers actually require, the Ollama commands to get running, and an
            honest note on when the API is the smarter buy.
          </p>
          <div className="mt-6 inline-flex items-center gap-3 rounded-lg border border-cyan-300/30 bg-cyan-300/10 px-4 py-3 text-sm text-cyan-100">
            <Cpu className="h-5 w-5 shrink-0" />
            Short answer: 33 GB VRAM quantized · 80 GB FP8 · ~170 GB full
            precision
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-semibold text-white">
            What hardware do you actually need?
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-300">
            These figures aggregate the model card&apos;s published sizes with
            community deployment reports current as of 2026-07-02. We label
            them as community-sourced because we have not yet reproduced every
            tier on our own hardware — when we do, this table gets replaced
            with our own tokens-per-second numbers.
          </p>

          <div className="mt-6 overflow-x-auto rounded-lg border border-white/10">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead className="bg-white/[0.04] text-xs uppercase tracking-wider text-slate-300">
                <tr>
                  <th className="px-4 py-3">Tier</th>
                  <th className="px-4 py-3">Memory</th>
                  <th className="px-4 py-3">Example hardware</th>
                  <th className="px-4 py-3">Trade-off</th>
                </tr>
              </thead>
              <tbody>
                {hardwareTiers.map((row) => (
                  <tr
                    key={row.tier}
                    className="border-t border-white/10 text-slate-300"
                  >
                    <td className="px-4 py-3 font-medium text-white">
                      {row.tier}
                    </td>
                    <td className="px-4 py-3">{row.memory}</td>
                    <td className="px-4 py-3">{row.hardware}</td>
                    <td className="px-4 py-3">{row.tradeoff}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="mt-12 text-2xl font-semibold text-white">
            Step 1: Install Ollama and pull the model
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-300">
            Ollama is the shortest path from zero to a running model: it
            manages GGUF downloads, layer offloading, and serving behind one
            CLI. V4 Flash is in the official library, so no custom Modelfile is
            needed.
          </p>
          <pre className="mt-4 overflow-x-auto rounded-lg border border-white/10 bg-[#0d141c] p-4 text-sm text-slate-200">
            {`# Install Ollama (Linux; see ollama.com for macOS/Windows)
curl -fsSL https://ollama.com/install.sh | sh

# Pull and run DeepSeek V4 Flash
ollama pull deepseek-v4-flash
ollama run deepseek-v4-flash "Explain KV cache in two sentences."`}
          </pre>
          <p className="mt-4 text-base leading-8 text-slate-300">
            Expect the pull to take a while — quantized weights for a
            284B-parameter model are still tens of gigabytes. If your VRAM is
            below the quantized tier, Ollama will offload layers to system RAM
            and run, but throughput drops sharply; that mode is fine for
            testing prompts, not for serving.
          </p>

          <h2 className="mt-12 text-2xl font-semibold text-white">
            Step 2: Serve it as an OpenAI-compatible endpoint
          </h2>
          <pre className="mt-4 overflow-x-auto rounded-lg border border-white/10 bg-[#0d141c] p-4 text-sm text-slate-200">
            {`# Ollama exposes an OpenAI-compatible server on :11434
ollama serve &

curl http://localhost:11434/v1/chat/completions \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "deepseek-v4-flash",
    "messages": [{"role": "user", "content": "ping"}]
  }'`}
          </pre>
          <p className="mt-4 text-base leading-8 text-slate-300">
            Anything that speaks the OpenAI API — LangChain, the Vercel AI SDK,
            your own client — can now point at localhost. This is also the
            cleanest way to A/B a local quantized build against the hosted API
            with identical client code.
          </p>

          <h2 className="mt-12 text-2xl font-semibold text-white">
            Step 3 (optional): Wire it into OpenClaw
          </h2>
          <pre className="mt-4 overflow-x-auto rounded-lg border border-white/10 bg-[#0d141c] p-4 text-sm text-slate-200">
            {`ollama launch openclaw --model deepseek-v4-flash:cloud`}
          </pre>
          <p className="mt-4 text-base leading-8 text-slate-300">
            The one-liner uses Ollama&apos;s cloud-proxied variant, which
            sidesteps the VRAM question entirely while keeping the same
            interface. For a full agent configuration — routing, escalation to
            Pro, cache design — see the{" "}
            <Link
              href="/openclaw-deepseek-flash"
              className="font-semibold text-cyan-200"
            >
              OpenClaw integration guide
            </Link>
            .
          </p>

          <h2 className="mt-12 text-2xl font-semibold text-white">
            When local is the wrong answer
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-300">
            Run the arithmetic before buying GPUs. At official API rates, one
            million tokens in and out costs $0.42. A single used RTX 6000 Ada
            costs several thousand dollars, plus power and your time. Local
            deployment earns its keep for data-residency requirements,
            sustained heavy volume, latency control, or offline work — and the{" "}
            <Link href="/pricing" className="font-semibold text-cyan-200">
              cost calculator
            </Link>{" "}
            will show you exactly where your break-even sits.
          </p>

          <h2 className="mt-12 text-2xl font-semibold text-white">
            Frequently asked questions
          </h2>
          <div className="mt-6 grid gap-4">
            {faqs.map((faq) => (
              <article
                key={faq.q}
                className="rounded-lg border border-white/10 bg-[#0d141c] p-5"
              >
                <h3 className="text-lg font-semibold text-white">{faq.q}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {faq.a}
                </p>
              </article>
            ))}
          </div>

          <p className="mt-10 text-xs text-slate-500">
            Last verified: 2026-07-02. Hardware figures are community-reported
            deployment numbers; model sizes are from the official Hugging Face
            model card. We will replace these with first-party throughput
            measurements as we complete our own runs.
          </p>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { CircleHelp } from "lucide-react";
import { siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "DeepSeek V4 Flash FAQ: Price, Free Tier & Setup",
  description:
    "Is V4 Flash free? How much does the API cost? Can you run it locally? Quick answers with official sources, updated July 2026.",
  alternates: {
    canonical: "/faq"
  }
};

const faqs = [
  {
    q: "How much does DeepSeek V4 Flash cost?",
    a: "On the official API: $0.14 per 1M input tokens ($0.028 with a cache hit) and $0.28 per 1M output tokens. Third-party providers can be cheaper — OpenRouter has listed it around $0.089/M input and $0.18/M output — at the cost of first-party features like cache-hit billing."
  },
  {
    q: "Is DeepSeek V4 Flash free to use?",
    a: "The API is prepaid, not free, but the chat app at deepseek.com is free to use. For developers, the open weights are MIT-licensed and free to download from Hugging Face — 'free' then means paying for your own hardware, which starts around 33 GB of VRAM for quantized builds."
  },
  {
    q: "Is there a DeepSeek V4 Flash subscription?",
    a: "No. DeepSeek's API uses prepaid pay-per-token billing, not a monthly subscription. If you saw a subscription price mentioned somewhere, it likely refers to a third-party app that wraps the API."
  },
  {
    q: "What are the correct API model IDs?",
    a: "deepseek-v4-flash and deepseek-v4-pro, on the OpenAI-compatible endpoint at https://api.deepseek.com. The legacy aliases deepseek-chat and deepseek-reasoner retire on 2026-07-24 and then route to deepseek-v4-flash."
  },
  {
    q: "When is V4 Flash enough, and when do I need Pro?",
    a: "Flash handles routine traffic — chat, summarization, retrieval answers, batch code tasks — at 1/12 of Pro's output price. Escalate to Pro ($1.74/$3.48 per 1M) for long reasoning chains, repeated self-check failures, or high-risk review. Our Flash vs Pro page has concrete routing triggers."
  },
  {
    q: "Can I run DeepSeek V4 Flash locally?",
    a: "Yes — the weights are open (MIT) and Ollama lists the model officially. Plan for roughly 33 GB of VRAM for quantized GGUF builds, 80 GB for FP8, or ~170 GB for full precision. Our local setup guide covers the tiers and commands."
  },
  {
    q: "How does V4 Flash work with OpenClaw?",
    a: "OpenClaw can use Flash as its default model route — the quickest path is `ollama launch openclaw --model deepseek-v4-flash:cloud`. Routine agent turns run on Flash's low rates while hard tasks escalate to Pro or a frontier model. See our OpenClaw integration guide for the full configuration."
  },
  {
    q: "What is the difference between the $12/M price and DeepSeek's prices?",
    a: "The $12/M figure that circulates in some comparison tables is Gemini 3.1 Pro Preview's output price, not a DeepSeek price. DeepSeek V4 Pro outputs at $3.48/M and Flash at $0.28/M."
  },
  {
    q: "Does this site sell API keys or model access?",
    a: "No. DSFlashHub is an independent information site — we publish pricing, guides, and comparisons with links to official sources, and we are not affiliated with DeepSeek, OpenAI, Anthropic, Google, xAI, or the OpenClaw project."
  }
];

export default function FaqPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    url: `${siteConfig.url}/faq`,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="market-grid border-b border-white/10 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="inline-flex items-center gap-2 rounded-lg border border-cyan-300/30 bg-cyan-300/10 px-3 py-2 text-xs font-bold uppercase tracking-[0.14em] text-cyan-100">
            <CircleHelp className="h-4 w-4" />
            FAQ
          </p>
          <h1 className="mt-6 max-w-4xl text-4xl font-semibold text-white sm:text-6xl">
            DeepSeek V4 Flash FAQ: price, free tier, and setup
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-400">
            The questions readers actually search for, answered with numbers
            and official sources. Every figure was checked on{" "}
            {siteConfig.lastVerified}.
          </p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-4xl gap-4">
          {faqs.map((faq) => (
            <article
              key={faq.q}
              className="rounded-lg border border-white/10 bg-[#0d141c] p-5"
            >
              <h2 className="text-xl font-semibold text-white">{faq.q}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-400">{faq.a}</p>
            </article>
          ))}
          <p className="mt-4 text-sm leading-7 text-slate-400">
            Question not covered? Ask via the{" "}
            <Link href="/contact" className="font-semibold text-cyan-200">
              contact page
            </Link>{" "}
            — setup and migration questions get turned into guides first.
          </p>
        </div>
      </section>
    </>
  );
}

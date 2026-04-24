import type { Metadata } from "next";
import { CircleHelp } from "lucide-react";

export const metadata: Metadata = {
  title: "DeepSeek V4 Flash FAQ",
  description:
    "DeepSeek V4 Flash pricing, OpenClaw adaptation, API aliases, comparison scope, and DSFlashHub independence notes.",
  alternates: {
    canonical: "/faq"
  }
};

const faqs = [
  {
    q: "Is DeepSeek V4 available through API model IDs?",
    a: "DeepSeek's API docs list deepseek-v4-flash and deepseek-v4-pro, with both OpenAI-format and Anthropic-format base URLs. Always re-check official docs before production launch."
  },
  {
    q: "What are the correct DeepSeek V4 Pro prices?",
    a: "The current official V4 Pro row is $0.145/M cache-hit input, $1.74/M cache-miss input, and $3.48/M output. The $12/M output price belongs to Gemini 3.1 Pro Preview, not DeepSeek V4 Pro."
  },
  {
    q: "Why does the site emphasize DeepSeek V4 Flash over Pro?",
    a: "Flash is the route to promote for default production and OpenClaw traffic because it has the stronger cost story: $0.14/M input, $0.028/M cache-hit input, and $0.28/M output. Pro is still useful, but it should be an escalation model."
  },
  {
    q: "What does OpenClaw adaptation mean here?",
    a: "It means the site gives OpenClaw a dedicated model-routing story: routine agent turns use deepseek-v4-flash, prompt and tool scaffolds stay stable for cache hits, and deepseek-v4-pro is used only after clear escalation triggers."
  },
  {
    q: "Should I still use deepseek-chat and deepseek-reasoner?",
    a: "The pricing page says older model names will eventually be deprecated. They currently map to V4 Flash compatibility modes. New integrations should configure V4 model IDs directly."
  },
  {
    q: "Does DSFlashHub sell API keys?",
    a: "No. This is an information and comparison site. It keeps pricing and model comparison separate from any purchasable inventory or commercial claim."
  },
  {
    q: "Why compare DeepSeek with GPT, Claude, Gemini, and Grok?",
    a: "Those families map to different production roles: DeepSeek for cost-first routing, GPT for a broad frontier baseline, Claude for enterprise review, Gemini for multimodal/Google workflows, and Grok for realtime/xAI workflows."
  }
];

export default function FaqPage() {
  return (
    <>
      <section className="market-grid border-b border-white/10 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="inline-flex items-center gap-2 rounded-lg border border-cyan-300/30 bg-cyan-300/10 px-3 py-2 text-xs font-bold uppercase tracking-[0.14em] text-cyan-100">
            <CircleHelp className="h-4 w-4" />
            FAQ
          </p>
          <h1 className="mt-6 max-w-4xl text-4xl font-semibold text-white sm:text-6xl">
            DeepSeek V4 Flash FAQ
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-400">
            Clear answers for Flash-first pricing, OpenClaw adaptation, API
            migration, aliases, model comparison, and site independence.
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
        </div>
      </section>
    </>
  );
}

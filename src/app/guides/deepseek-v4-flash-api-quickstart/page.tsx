import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, TerminalSquare } from "lucide-react";
import { siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "DeepSeek V4 Flash API Quickstart: Python, TS & curl",
  description:
    "Call deepseek-v4-flash through the OpenAI-compatible API in under 5 minutes. Working code in three languages, cache-hit billing explained, error code table.",
  alternates: {
    canonical: "/guides/deepseek-v4-flash-api-quickstart"
  }
};

const errorRows = [
  {
    code: "401",
    meaning: "Invalid or missing API key",
    fix: "Check the Authorization: Bearer header; regenerate the key in the DeepSeek console if needed"
  },
  {
    code: "402",
    meaning: "Insufficient balance",
    fix: "Top up in the console — DeepSeek is prepaid; there is no postpaid overdraft"
  },
  {
    code: "400 (invalid model)",
    meaning: "Wrong or retired model ID",
    fix: "Use deepseek-v4-flash or deepseek-v4-pro; legacy aliases retire 2026-07-24"
  },
  {
    code: "429",
    meaning: "Rate limited",
    fix: "Back off exponentially; batch small requests instead of parallel-spamming"
  },
  {
    code: "500 / 503",
    meaning: "Server busy or down",
    fix: "Retry with jitter; add a fallback route if uptime is critical"
  }
];

const faqs = [
  {
    q: "Do I need a special SDK for DeepSeek?",
    a: "No. The API is OpenAI-compatible: point any OpenAI SDK at https://api.deepseek.com with your DeepSeek key and the deepseek-v4-flash model ID. LangChain, LlamaIndex, and the Vercel AI SDK all work by swapping the base URL."
  },
  {
    q: "How does cache-hit billing work?",
    a: "If the prefix of your prompt matches a recent request (typically your system prompt and tool definitions), that portion bills at $0.028/M instead of $0.14/M — an automatic 5× discount on repeated context. You don't opt in; you earn it by keeping prompt prefixes stable."
  },
  {
    q: "How do I enable thinking mode on Flash?",
    a: "V4 Flash defaults to non-thinking mode. Reasoning modes (Think / Think Max) are enabled per-request via the API's reasoning parameters — check the official docs for the current parameter name, as preview-release APIs change."
  },
  {
    q: "What's the real cost of a typical chat request?",
    a: "A request with 2K input tokens and 500 output tokens costs about $0.00042 — roughly 2,400 requests per dollar. With a warm cache on the input side it drops further. Our pricing calculator lets you model your own traffic mix."
  }
];

const pythonSnippet = `from openai import OpenAI

client = OpenAI(
    api_key="YOUR_DEEPSEEK_KEY",
    base_url="https://api.deepseek.com",
)

response = client.chat.completions.create(
    model="deepseek-v4-flash",
    messages=[
        {"role": "system", "content": "You are a concise assistant."},
        {"role": "user", "content": "Summarize KV caching in 3 bullets."},
    ],
    stream=False,
)

print(response.choices[0].message.content)`;

const tsSnippet = `import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.DEEPSEEK_API_KEY,
  baseURL: "https://api.deepseek.com",
});

const response = await client.chat.completions.create({
  model: "deepseek-v4-flash",
  messages: [
    { role: "system", content: "You are a concise assistant." },
    { role: "user", content: "Summarize KV caching in 3 bullets." },
  ],
});

console.log(response.choices[0].message.content);`;

const curlSnippet = `curl https://api.deepseek.com/chat/completions \\
  -H "Authorization: Bearer $DEEPSEEK_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "deepseek-v4-flash",
    "messages": [
      {"role": "system", "content": "You are a concise assistant."},
      {"role": "user", "content": "Summarize KV caching in 3 bullets."}
    ]
  }'`;

export default function ApiQuickstartPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "DeepSeek V4 Flash API quickstart",
        description:
          "OpenAI-compatible setup for deepseek-v4-flash in Python, TypeScript, and curl, with cache billing and error handling.",
        datePublished: "2026-07-02",
        dateModified: "2026-07-02",
        url: `${siteConfig.url}/guides/deepseek-v4-flash-api-quickstart`,
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
            DeepSeek V4 Flash API quickstart: first call in 5 minutes
          </h1>
          <p className="mt-5 text-base leading-8 text-slate-400">
            The API is OpenAI-compatible, so if you have ever called GPT from
            code, you already know how to call Flash — you change two strings.
            Working snippets in Python, TypeScript, and curl, plus the billing
            detail most teams miss.
          </p>
          <div className="mt-6 inline-flex items-center gap-3 rounded-lg border border-cyan-300/30 bg-cyan-300/10 px-4 py-3 text-sm text-cyan-100">
            <TerminalSquare className="h-5 w-5 shrink-0" />
            base_url = https://api.deepseek.com · model = deepseek-v4-flash
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-semibold text-white">
            Step 1: Get a key
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-300">
            Create an API key in the DeepSeek platform console and load a small
            prepaid balance — the API is prepaid, and a few dollars goes a very
            long way at $0.14/M input. Store the key in an environment
            variable, never in source.
          </p>

          <h2 className="mt-12 text-2xl font-semibold text-white">
            Step 2: Make the first call
          </h2>
          <h3 className="mt-6 text-lg font-semibold text-white">Python</h3>
          <pre className="mt-3 overflow-x-auto rounded-lg border border-white/10 bg-[#0d141c] p-4 text-sm text-slate-200">
            {pythonSnippet}
          </pre>
          <h3 className="mt-6 text-lg font-semibold text-white">TypeScript</h3>
          <pre className="mt-3 overflow-x-auto rounded-lg border border-white/10 bg-[#0d141c] p-4 text-sm text-slate-200">
            {tsSnippet}
          </pre>
          <h3 className="mt-6 text-lg font-semibold text-white">curl</h3>
          <pre className="mt-3 overflow-x-auto rounded-lg border border-white/10 bg-[#0d141c] p-4 text-sm text-slate-200">
            {curlSnippet}
          </pre>

          <h2 className="mt-12 text-2xl font-semibold text-white">
            Step 3: Engineer for cache hits (the 5× discount)
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-300">
            This is the billing detail that separates cheap deployments from
            accidentally expensive ones. Input tokens that match a recently
            seen prompt prefix bill at $0.028/M instead of $0.14/M. In
            practice: put your stable content (system prompt, tool schemas,
            few-shot examples) first and byte-for-byte identical on every
            request, and put the variable content (user message, retrieved
            documents) last. Agent frameworks that regenerate their system
            prompt with a timestamp on every call silently pay 5× more for
            input than they need to.
          </p>

          <h2 className="mt-12 text-2xl font-semibold text-white">
            The error codes you&apos;ll actually see
          </h2>
          <div className="mt-6 overflow-x-auto rounded-lg border border-white/10">
            <table className="w-full min-w-[560px] text-left text-sm">
              <thead className="bg-white/[0.04] text-xs uppercase tracking-wider text-slate-300">
                <tr>
                  <th className="px-4 py-3">Code</th>
                  <th className="px-4 py-3">Meaning</th>
                  <th className="px-4 py-3">Fix</th>
                </tr>
              </thead>
              <tbody>
                {errorRows.map((row) => (
                  <tr
                    key={row.code}
                    className="border-t border-white/10 text-slate-300"
                  >
                    <td className="px-4 py-3 font-mono text-cyan-100">
                      {row.code}
                    </td>
                    <td className="px-4 py-3">{row.meaning}</td>
                    <td className="px-4 py-3">{row.fix}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="mt-12 text-2xl font-semibold text-white">
            Where to go next
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-300">
            If you&apos;re coming from deepseek-chat, the{" "}
            <Link
              href="/guides/deepseek-chat-migration"
              className="font-semibold text-cyan-200"
            >
              migration checklist
            </Link>{" "}
            covers the July 24 deadline. To decide when a request should
            escalate from Flash to Pro, the{" "}
            <Link href="/flash-vs-pro" className="font-semibold text-cyan-200">
              Flash vs Pro routing rules
            </Link>{" "}
            give concrete triggers. And the{" "}
            <Link href="/pricing" className="font-semibold text-cyan-200">
              cost calculator
            </Link>{" "}
            models your monthly bill from your actual traffic mix.
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
            Last verified: 2026-07-02 against the official DeepSeek API
            documentation. Preview-release APIs change; re-check parameter
            names in the official docs before shipping.
          </p>
        </div>
      </section>
    </>
  );
}

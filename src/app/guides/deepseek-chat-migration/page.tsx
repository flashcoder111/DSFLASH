import type { Metadata } from "next";
import Link from "next/link";
import { AlertTriangle, ArrowLeft } from "lucide-react";
import { siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "deepseek-chat Retires July 24: Migration Checklist",
  description:
    "deepseek-chat and deepseek-reasoner stop working as-is on 2026-07-24. The ID mapping table, code changes in Python/TS/curl, and 3 failure modes to test.",
  alternates: {
    canonical: "/guides/deepseek-chat-migration"
  }
};

const idMap = [
  {
    legacy: "deepseek-chat",
    behavior: "Routes to deepseek-v4-flash (non-thinking default)",
    action: "Rename to deepseek-v4-flash explicitly",
    risk: "Low — same behavior, cheaper family"
  },
  {
    legacy: "deepseek-reasoner",
    behavior: "Routes to deepseek-v4-flash, not a reasoning-first model",
    action:
      "Move to deepseek-v4-pro, or set Flash's thinking mode explicitly",
    risk: "High — silent quality change on reasoning workloads"
  }
];

const faqs = [
  {
    q: "What exactly happens on 2026-07-24?",
    a: "At 15:59 UTC, the hosted DeepSeek API retires the legacy deepseek-chat and deepseek-reasoner model IDs. Calls using those names do not error — they are routed to deepseek-v4-flash. Your code keeps running, but on a different model than the one those names originally meant."
  },
  {
    q: "Will my API calls start failing after the deadline?",
    a: "No, and that is the trap. Requests succeed with HTTP 200 but are served by V4 Flash. If you relied on deepseek-reasoner's long chain-of-thought behavior, outputs change without any error to alert you. Rename your model IDs before the date so the change happens on your schedule."
  },
  {
    q: "Do I need to change my base URL or API key?",
    a: "No. The base URL (https://api.deepseek.com) and your existing API key keep working. The migration is a model-name change: swap the model string in your request body or SDK call."
  },
  {
    q: "Is the new pricing higher?",
    a: "For deepseek-chat users the V4 Flash rate is $0.14/M input ($0.028 cache-hit) and $0.28/M output. For deepseek-reasoner users moving to deepseek-v4-pro, the rate is $1.74/M input ($0.145 cache-hit) and $3.48/M output. Check the official pricing page for current numbers before you budget."
  },
  {
    q: "What if I do nothing?",
    a: "Chat workloads mostly get a silent upgrade. Reasoning workloads silently lose their reasoning-first model. Batch pipelines with output-format assertions are where we would expect the first breakage reports — test before July 24, not after."
  }
];

const pythonSnippet = `# Before (legacy alias — retires 2026-07-24)
client.chat.completions.create(
    model="deepseek-chat",
    messages=[{"role": "user", "content": "..."}],
)

# After (explicit V4 model ID)
client.chat.completions.create(
    model="deepseek-v4-flash",
    messages=[{"role": "user", "content": "..."}],
)`;

const tsSnippet = `// Before
const res = await client.chat.completions.create({
  model: "deepseek-reasoner",   // retires 2026-07-24
  messages,
});

// After — reasoning workloads should go to Pro
const res = await client.chat.completions.create({
  model: "deepseek-v4-pro",
  messages,
});`;

const curlSnippet = `curl https://api.deepseek.com/chat/completions \\
  -H "Authorization: Bearer $DEEPSEEK_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "deepseek-v4-flash",
    "messages": [{"role": "user", "content": "ping"}]
  }'`;

export default function MigrationGuidePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline:
          "deepseek-chat retires July 24: the migration checklist",
        description:
          "deepseek-chat and deepseek-reasoner stop working as-is on 2026-07-24. ID mapping, SDK changes, and failure modes to test.",
        datePublished: "2026-07-02",
        dateModified: "2026-07-02",
        url: `${siteConfig.url}/guides/deepseek-chat-migration`,
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
            deepseek-chat retires July 24: the migration checklist
          </h1>
          <p className="mt-5 text-base leading-8 text-slate-400">
            On 2026-07-24 at 15:59 UTC, the legacy deepseek-chat and
            deepseek-reasoner aliases stop meaning what your code thinks they
            mean. Here is the mapping table, the one-line fix, and the three
            failure modes worth testing before the date.
          </p>
          <div className="mt-6 inline-flex items-center gap-3 rounded-lg border border-amber-300/40 bg-amber-300/10 px-4 py-3 text-sm font-semibold text-amber-100">
            <AlertTriangle className="h-5 w-5 shrink-0" />
            Deadline: 2026-07-24 15:59 UTC — after this, both legacy IDs route
            to deepseek-v4-flash.
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-semibold text-white">
            What changes, in one table
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-300">
            DeepSeek is not shutting the API down — it is retiring the old
            names. The danger is that nothing visibly breaks: requests to the
            old IDs keep returning HTTP 200, served by a different model. When
            we checked the official pricing page on 2026-07-02, the deprecation
            note had already carried the hard date for weeks, yet a quick
            GitHub code search still turned up thousands of files hard-coding
            deepseek-chat.
          </p>

          <div className="mt-6 overflow-x-auto rounded-lg border border-white/10">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead className="bg-white/[0.04] text-xs uppercase tracking-wider text-slate-300">
                <tr>
                  <th className="px-4 py-3">Legacy ID</th>
                  <th className="px-4 py-3">After 07-24</th>
                  <th className="px-4 py-3">What you should do</th>
                  <th className="px-4 py-3">Risk</th>
                </tr>
              </thead>
              <tbody>
                {idMap.map((row) => (
                  <tr
                    key={row.legacy}
                    className="border-t border-white/10 text-slate-300"
                  >
                    <td className="px-4 py-3 font-mono text-cyan-100">
                      {row.legacy}
                    </td>
                    <td className="px-4 py-3">{row.behavior}</td>
                    <td className="px-4 py-3">{row.action}</td>
                    <td className="px-4 py-3">{row.risk}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="mt-12 text-2xl font-semibold text-white">
            Step 1: Find every hard-coded legacy ID
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-300">
            Search your codebase, environment files, CI configs, and any
            LangChain / LlamaIndex / Vercel AI SDK configuration for both
            strings. Don&apos;t forget infrastructure: model names hide in
            Helm values, feature-flag payloads, and analytics dashboards.
          </p>
          <pre className="mt-4 overflow-x-auto rounded-lg border border-white/10 bg-[#0d141c] p-4 text-sm text-slate-200">
            {`grep -rn "deepseek-chat\\|deepseek-reasoner" . \\
  --include="*.{py,ts,js,json,yaml,yml,env,toml}"`}
          </pre>

          <h2 className="mt-12 text-2xl font-semibold text-white">
            Step 2: Swap the model string (base URL stays)
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-300">
            The API is OpenAI-compatible and the endpoint does not change, so
            for most codebases this really is a one-line diff per call site.
          </p>
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
            Step 3: Test the three failure modes
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-300">
            Renaming is easy; the regressions hide in behavior. Before the
            deadline, run your existing test prompts against the new IDs and
            check these three areas:
          </p>
          <p className="mt-4 text-base leading-8 text-slate-300">
            <strong className="text-white">
              1. Reasoning depth (deepseek-reasoner users).
            </strong>{" "}
            V4 Flash defaults to non-thinking mode. If your pipeline expects
            chain-of-thought quality, compare outputs on deepseek-v4-pro or on
            Flash with the thinking mode explicitly enabled, and measure your
            task&apos;s actual pass rate rather than eyeballing single answers.
          </p>
          <p className="mt-4 text-base leading-8 text-slate-300">
            <strong className="text-white">2. Output format drift.</strong>{" "}
            Model swaps are where strict JSON parsers go to die. If you assert
            on response structure, re-run your format validation suite against
            the new model ID.
          </p>
          <p className="mt-4 text-base leading-8 text-slate-300">
            <strong className="text-white">3. Cost accounting.</strong> V4
            bills cache-hit input at 1/5 the cache-miss rate ($0.028 vs $0.14
            per 1M on Flash). If your prompts are stable, your input bill may
            drop after migration; if your cost dashboards hard-code old rates,
            update them. Our{" "}
            <Link href="/pricing" className="font-semibold text-cyan-200">
              pricing page and calculator
            </Link>{" "}
            has the current numbers.
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
            Last verified: 2026-07-02 against the official DeepSeek API pricing
            page. Model routing behavior after the deadline is as documented by
            DeepSeek; re-check the{" "}
            <a
              href="https://api-docs.deepseek.com/quick_start/pricing/"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-cyan-200"
            >
              official announcement
            </a>{" "}
            before making production changes.
          </p>
        </div>
      </section>
    </>
  );
}

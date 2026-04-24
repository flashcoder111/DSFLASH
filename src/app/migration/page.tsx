import type { Metadata } from "next";
import { ArrowRightLeft, CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Migrate to DeepSeek V4 Flash",
  description:
    "Migration guide for moving old DeepSeek aliases and generic chat routes to explicit DeepSeek V4 Flash defaults and V4 Pro escalation.",
  alternates: {
    canonical: "/migration"
  }
};

const migrationSteps = [
  {
    title: "Inventory old aliases",
    detail:
      "Find deepseek-chat, deepseek-reasoner, generic chat routes, and provider-agnostic model names that hide the actual DeepSeek route."
  },
  {
    title: "Set Flash as the default",
    detail:
      "Map default traffic to deepseek-v4-flash, especially OpenClaw agent turns, summaries, retrieval answers, and batch text work."
  },
  {
    title: "Define Pro triggers",
    detail:
      "Escalate to deepseek-v4-pro only when Flash fails a quality check or the task clearly requires harder reasoning."
  },
  {
    title: "Separate comparison models",
    detail:
      "Keep GPT, Claude, Gemini, and Grok in named comparison or audit routes instead of mixing their prices into the DeepSeek row."
  },
  {
    title: "Measure after launch",
    detail:
      "Track cache hit ratio, retry rate, task completion, and cost per solved OpenClaw workflow."
  }
];

export default function MigrationPage() {
  return (
    <>
      <section className="market-grid border-b border-white/10 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="inline-flex items-center gap-2 rounded-lg border border-cyan-300/30 bg-cyan-300/10 px-3 py-2 text-xs font-bold uppercase tracking-[0.14em] text-cyan-100">
            <ArrowRightLeft className="h-4 w-4" />
            Migration
          </p>
          <h1 className="mt-6 max-w-4xl text-4xl font-semibold text-white sm:text-6xl">
            Migrate to DeepSeek V4 Flash
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-400">
            The migration page gives the site another practical indexed entry:
            move generic DeepSeek references toward explicit V4 Flash defaults
            and a controlled Pro escalation path.
          </p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            eyebrow="Migration checklist"
            title="Five steps"
            description="These steps keep the site aligned with the Flash-first and OpenClaw-adapted positioning."
          />
          <div className="mt-10 grid gap-4">
            {migrationSteps.map((step, index) => (
              <article
                key={step.title}
                className="rounded-lg border border-white/10 bg-[#0d141c] p-5"
              >
                <div className="flex items-start gap-4">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-cyan-300 text-sm font-black text-slate-950">
                    {index + 1}
                  </span>
                  <div>
                    <h2 className="text-xl font-semibold text-white">
                      {step.title}
                    </h2>
                    <p className="mt-2 text-sm leading-7 text-slate-400">
                      {step.detail}
                    </p>
                  </div>
                  <CheckCircle2 className="ml-auto hidden h-6 w-6 shrink-0 text-green-200 sm:block" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

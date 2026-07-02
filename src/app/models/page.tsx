import type { Metadata } from "next";
import { Code2, Cpu, DatabaseZap, FileJson2, Network, Timer } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { deepSeekSpecs } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "DeepSeek V4 Specs: 1M Context, MoE, Open Weights",
  description:
    "DeepSeek V4 model specs: Flash 284B/13B active, Pro 1.6T/49B active, 1M context, 384K max output, three reasoning modes, MIT-licensed weights.",
  alternates: {
    canonical: "/models"
  }
};

const featureIcons = [Code2, Timer, FileJson2, Network, DatabaseZap, Cpu];

export default function ModelsPage() {
  return (
    <>
      <section className="market-grid border-b border-white/10 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="inline-flex items-center gap-2 rounded-lg border border-cyan-300/30 bg-cyan-300/10 px-3 py-2 text-xs font-bold uppercase tracking-[0.14em] text-cyan-100">
            <Cpu className="h-4 w-4" />
            Model dossier
          </p>
          <h1 className="mt-6 max-w-4xl text-4xl font-semibold text-white sm:text-6xl">
            DeepSeek V4 specs: Flash 284B/13B, Pro 1.6T/49B, 1M context
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-400">
            Source-backed model details only: API IDs, context window, output
            limit, reasoning modes, open-weight license, and architecture.
            Every figure traces to the DeepSeek API docs or the Hugging Face
            model card.
          </p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Official details"
            title="V4 specification snapshot"
            description="DeepSeek API docs and the model card confirm the model IDs, context window, output limit, open-weight status, and parameter-scale positioning."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {deepSeekSpecs.map((spec, index) => {
              const Icon = featureIcons[index % featureIcons.length];

              return (
                <article
                  key={spec.label}
                  className="rounded-lg border border-white/10 bg-[#0d141c] p-5"
                >
                  <Icon className="h-6 w-6 text-cyan-200" />
                  <p className="mt-4 text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
                    {spec.label}
                  </p>
                  <h2 className="mt-2 text-xl font-semibold text-white">
                    {spec.value}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {spec.detail}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-band px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 lg:grid-cols-2">
          <div className="rounded-lg border border-white/10 bg-[#0d141c] p-5">
            <h2 className="text-2xl font-semibold text-white">
              When to use Flash
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-400">
              V4 Flash is the lower-cost route for default chat, OpenClaw agent
              turns, retrieval augmentation, content processing, batch code
              explanation, and lower-risk tool calls.
            </p>
          </div>
          <div className="rounded-lg border border-white/10 bg-[#0d141c] p-5">
            <h2 className="text-2xl font-semibold text-white">
              When to use Pro
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-400">
              V4 Pro is the higher-reasoning route for difficult debugging,
              long-context repository review, incident analysis, and high-value
              reports. At 12× Flash&apos;s output price, reserve it for tasks
              that fail on Flash.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

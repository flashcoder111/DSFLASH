import type { Metadata } from "next";
import { ArrowDownRight, Scale } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { formatUsd, pricingModels } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "DeepSeek V4 Flash vs Pro",
  description:
    "DeepSeek V4 Flash vs Pro routing comparison with pricing, production role, escalation triggers, and OpenClaw guidance.",
  alternates: {
    canonical: "/flash-vs-pro"
  }
};

const rows = [
  {
    label: "Primary role",
    flash: "Default production and OpenClaw route",
    pro: "Escalation route for hard reasoning"
  },
  {
    label: "Best traffic",
    flash: "Routine agent turns, summaries, retrieval, batch code explanation",
    pro: "Complex debugging, high-value review, long reasoning tasks"
  },
  {
    label: "Editorial priority",
    flash: "Lead story",
    pro: "Support story"
  },
  {
    label: "Risk",
    flash: "May need escalation on ambiguous or high-stakes tasks",
    pro: "Can inflate cost if used as the default model"
  }
];

export default function FlashVsProPage() {
  const flash = pricingModels.find((model) => model.model === "V4 Flash")!;
  const pro = pricingModels.find((model) => model.model === "V4 Pro")!;

  return (
    <>
      <section className="market-grid border-b border-white/10 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="inline-flex items-center gap-2 rounded-lg border border-cyan-300/30 bg-cyan-300/10 px-3 py-2 text-xs font-bold uppercase tracking-[0.14em] text-cyan-100">
            <Scale className="h-4 w-4" />
            Routing comparison
          </p>
          <h1 className="mt-6 max-w-4xl text-4xl font-semibold text-white sm:text-6xl">
            DeepSeek V4 Flash vs Pro
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-400">
            The site should not imply that V4 Pro is the main product. Flash is
            the production default and OpenClaw adapter route; Pro is a controlled
            escalation path.
          </p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2">
          {[flash, pro].map((model) => (
            <article
              key={model.model}
              className="rounded-lg border border-white/10 bg-[#0d141c] p-5"
            >
              <ArrowDownRight className="h-6 w-6 text-cyan-200" />
              <p className="mt-4 text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
                {model.model}
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-white">
                {formatUsd(model.input)} input / {formatUsd(model.output)} output
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                Cache-hit input:{" "}
                {model.cachedInput ? formatUsd(model.cachedInput) : "N/A"} per 1M
                tokens. {model.note}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-band px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Decision table"
            title="Flash should win most default traffic"
            description="Use Pro only when the task needs deeper reasoning or when Flash fails a defined quality check."
          />
          <div className="mt-10 overflow-x-auto rounded-lg border border-white/10 bg-[#0d141c]">
            <table className="price-table min-w-[860px]">
              <thead>
                <tr>
                  <th>Question</th>
                  <th>V4 Flash</th>
                  <th>V4 Pro</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.label}>
                    <td className="font-semibold text-white">{row.label}</td>
                    <td>{row.flash}</td>
                    <td>{row.pro}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}

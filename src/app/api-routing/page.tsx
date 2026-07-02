import type { Metadata } from "next";
import { Network, Route } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { openClawAdapterPoints, routePlaybook } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "DeepSeek V4 Flash API Routing Playbook",
  description:
    "Production routing rules for DeepSeek V4 Flash, OpenClaw agent traffic, prompt caching, fallback models, and V4 Pro escalation.",
  alternates: {
    canonical: "/api-routing"
  }
};

export default function ApiRoutingPage() {
  return (
    <>
      <section className="market-grid border-b border-white/10 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="inline-flex items-center gap-2 rounded-lg border border-cyan-300/30 bg-cyan-300/10 px-3 py-2 text-xs font-bold uppercase tracking-[0.14em] text-cyan-100">
            <Route className="h-4 w-4" />
            API routing
          </p>
          <h1 className="mt-6 max-w-4xl text-4xl font-semibold text-white sm:text-6xl">
            DeepSeek V4 Flash API routing playbook
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-400">
            Route by job type, not by brand preference. V4 Flash handles default
            OpenClaw and API traffic; V4 Pro and other providers enter only when a
            clear trigger is met.
          </p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Routing table"
            title="Default model, escalation trigger, and success metric"
            description="One row per traffic type: where it runs by default, when it escalates, and the number that tells you the routing works."
          />
          <div className="mt-10 overflow-x-auto rounded-lg border border-white/10 bg-[#0d141c]">
            <table className="price-table min-w-[900px]">
              <thead>
                <tr>
                  <th>Task</th>
                  <th>Default</th>
                  <th>Escalation</th>
                  <th>Metric</th>
                </tr>
              </thead>
              <tbody>
                {routePlaybook.map((row) => (
                  <tr key={row.task}>
                    <td className="font-semibold text-white">{row.task}</td>
                    <td>{row.defaultModel}</td>
                    <td>{row.escalation}</td>
                    <td>{row.metric}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section-band px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="OpenClaw"
            title="Adapter-aware routing rules"
            description="OpenClaw needs dedicated model-routing language because agent traffic repeats context, tools, and planning scaffolds."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {openClawAdapterPoints.map((point) => (
              <article
                key={point.layer}
                className="rounded-lg border border-white/10 bg-[#0d141c] p-5"
              >
                <Network className="h-6 w-6 text-cyan-200" />
                <p className="mt-4 text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
                  {point.layer}
                </p>
                <h2 className="mt-2 text-xl font-semibold text-white">
                  {point.recommendation}
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {point.reason}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

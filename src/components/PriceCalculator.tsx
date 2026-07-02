"use client";

import { useMemo, useState } from "react";
import { Calculator, RotateCcw } from "lucide-react";
import {
  blendedCost,
  formatUsd,
  pricingModels,
  type PricingModel
} from "@/lib/site-data";

const selectableModels = pricingModels.filter(
  (model) =>
    model.provider === "DeepSeek" ||
    model.model === "GPT-5.4" ||
    model.model.startsWith("Claude") ||
    model.model.startsWith("Gemini") ||
    model.model.startsWith("Grok")
);

function formatModelName(model: PricingModel) {
  return `${model.provider} ${model.model}`;
}

export default function PriceCalculator() {
  const [inputTokens, setInputTokens] = useState(100);
  const [outputTokens, setOutputTokens] = useState(20);
  const [cacheHitRatio, setCacheHitRatio] = useState(30);
  const [modelName, setModelName] = useState(formatModelName(selectableModels[0]));

  const selected = useMemo(
    () =>
      selectableModels.find((model) => formatModelName(model) === modelName) ??
      selectableModels[0],
    [modelName]
  );

  const cost = blendedCost(
    selected,
    inputTokens,
    outputTokens,
    cacheHitRatio / 100
  );

  const flashCost = blendedCost(
    selectableModels[0],
    inputTokens,
    outputTokens,
    cacheHitRatio / 100
  );

  const saving = cost > 0 ? Math.max(0, ((cost - flashCost) / cost) * 100) : 0;

  return (
    <div className="rounded-lg border border-cyan-200/20 bg-[#0d141c] p-5 shadow-2xl shadow-cyan-950/20">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-cyan-200">
            <Calculator className="h-4 w-4" />
            Cost simulator
          </p>
          <h3 className="mt-2 text-2xl font-semibold text-white">
            Monthly token budget simulator
          </h3>
        </div>
        <button
          type="button"
          onClick={() => {
            setInputTokens(100);
            setOutputTokens(20);
            setCacheHitRatio(30);
            setModelName(formatModelName(selectableModels[0]));
          }}
          className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white"
        >
          <RotateCcw className="h-4 w-4" />
          Reset
        </button>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-4">
        <label className="grid gap-2">
          <span className="text-sm text-slate-300">Model</span>
          <select
            value={modelName}
            onChange={(event) => setModelName(event.target.value)}
            className="rounded-lg border border-white/10 bg-[#111b24] px-3 py-3 text-sm text-white outline-none ring-cyan-300/20 focus:ring-4"
          >
            {selectableModels.map((model) => (
              <option key={formatModelName(model)} value={formatModelName(model)}>
                {formatModelName(model)}
              </option>
            ))}
          </select>
        </label>
        <label className="grid gap-2">
          <span className="text-sm text-slate-300">Input tokens / M</span>
          <input
            min={0}
            value={inputTokens}
            onChange={(event) => setInputTokens(Number(event.target.value))}
            type="number"
            className="rounded-lg border border-white/10 bg-[#111b24] px-3 py-3 text-sm text-white outline-none ring-cyan-300/20 focus:ring-4"
          />
        </label>
        <label className="grid gap-2">
          <span className="text-sm text-slate-300">Output tokens / M</span>
          <input
            min={0}
            value={outputTokens}
            onChange={(event) => setOutputTokens(Number(event.target.value))}
            type="number"
            className="rounded-lg border border-white/10 bg-[#111b24] px-3 py-3 text-sm text-white outline-none ring-cyan-300/20 focus:ring-4"
          />
        </label>
        <label className="grid gap-2">
          <span className="text-sm text-slate-300">Cache hit</span>
          <input
            min={0}
            max={100}
            value={cacheHitRatio}
            onChange={(event) => setCacheHitRatio(Number(event.target.value))}
            type="number"
            className="rounded-lg border border-white/10 bg-[#111b24] px-3 py-3 text-sm text-white outline-none ring-cyan-300/20 focus:ring-4"
          />
        </label>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <div className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
          <p className="text-xs uppercase tracking-[0.12em] text-slate-500">
            Selected model
          </p>
          <p className="mt-2 text-2xl font-semibold text-white">
            {formatUsd(cost)}
          </p>
        </div>
        <div className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
          <p className="text-xs uppercase tracking-[0.12em] text-slate-500">
            V4 Flash route
          </p>
          <p className="mt-2 text-2xl font-semibold text-green-200">
            {formatUsd(flashCost)}
          </p>
        </div>
        <div className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
          <p className="text-xs uppercase tracking-[0.12em] text-slate-500">
            Flash saving
          </p>
          <p className="mt-2 text-2xl font-semibold text-amber-200">
            {saving.toFixed(0)}%
          </p>
        </div>
      </div>
    </div>
  );
}

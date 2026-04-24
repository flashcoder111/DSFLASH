import { ArrowUpRight } from "lucide-react";
import { formatUsd, pricingModels } from "@/lib/site-data";

export default function PricingTable() {
  return (
    <div className="overflow-x-auto rounded-lg border border-white/10 bg-[#0d141c]">
      <table className="price-table min-w-[820px]">
        <thead>
          <tr>
            <th>Model</th>
            <th>Input / 1M</th>
            <th>Cached input</th>
            <th>Output / 1M</th>
            <th>Context</th>
            <th>Positioning</th>
          </tr>
        </thead>
        <tbody>
          {pricingModels.map((model) => (
            <tr key={`${model.provider}-${model.model}`}>
              <td>
                <div className="font-semibold text-white">
                  {model.provider} {model.model}
                </div>
                <div className="mt-1 text-xs uppercase tracking-[0.1em] text-slate-500">
                  {model.tier}
                </div>
              </td>
              <td className="font-semibold text-cyan-100">
                {formatUsd(model.input)}
              </td>
              <td className="font-semibold text-green-100">
                {model.cachedInput === null ? "N/A" : formatUsd(model.cachedInput)}
              </td>
              <td className="font-semibold text-amber-100">
                {formatUsd(model.output)}
              </td>
              <td>{model.context}</td>
              <td>
                <p className="max-w-md leading-6 text-slate-400">{model.note}</p>
                <p className="mt-2 inline-flex items-center gap-1 text-xs text-slate-500">
                  {model.source}
                  <ArrowUpRight className="h-3 w-3" />
                </p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

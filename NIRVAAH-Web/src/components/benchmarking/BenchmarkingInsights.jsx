import React from "react";
import { Lightbulb, Sparkles } from "lucide-react";
import { Card, CardBody, CardHeader } from "../ui/Card.jsx";
import { benchmarkActions, benchmarkInsights } from "./benchmarkingData.js";
import { cx } from "../../lib/formatters.js";

const actionTone = {
  blue: "bg-blue-50 text-blue-700",
  green: "bg-emerald-50 text-emerald-700",
  purple: "bg-violet-50 text-violet-700",
};

/**
 * Supporting insights and quick actions for benchmarking decisions.
 */
export function BenchmarkingInsights() {
  return (
    <Card>
      <CardHeader className="flex items-start gap-3">
        <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-[#eef2ff] text-violet-700">
          <Sparkles className="size-5" aria-hidden="true" />
        </span>
        <div>
          <h2 className="text-lg font-black text-[#052b63]">Benchmark Insights</h2>
          <p className="mt-1 text-sm leading-6 text-[#526276]">Short explanations from the selected cohort.</p>
        </div>
      </CardHeader>
      <CardBody className="grid gap-4">
        <div className="grid gap-2">
          {benchmarkInsights.map((insight) => (
            <div className="grid grid-cols-[32px_1fr] gap-3 rounded-lg bg-[#f6f9fc] p-3" key={insight}>
              <span className="grid size-8 place-items-center rounded-md bg-white text-[#075db7]">
                <Lightbulb className="size-4" aria-hidden="true" />
              </span>
              <p className="text-sm font-bold leading-6 text-[#263d59]">{insight}</p>
            </div>
          ))}
        </div>
        <div className="grid gap-3 sm:grid-cols-3 xl:grid-cols-1">
          {benchmarkActions.map(({ icon: Icon, title, description, tone }) => (
            <button
              className="grid min-h-20 grid-cols-[40px_1fr] gap-3 rounded-lg border border-[#d5e1ec] bg-white p-3 text-left transition hover:border-[#075db7] hover:bg-[#f8fbfe]"
              type="button"
              key={title}
            >
              <span className={cx("grid size-10 place-items-center rounded-lg", actionTone[tone])}>
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <span className="min-w-0">
                <strong className="block text-sm font-black text-[#052b63]">{title}</strong>
                <span className="mt-1 block text-xs font-bold text-[#748397]">{description}</span>
              </span>
            </button>
          ))}
        </div>
      </CardBody>
    </Card>
  );
}

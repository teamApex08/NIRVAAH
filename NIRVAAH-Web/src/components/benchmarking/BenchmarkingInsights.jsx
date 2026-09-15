import React from "react";
import { Lightbulb, ShieldCheck } from "lucide-react";
import { Card, CardBody, CardHeader } from "../ui/Card.jsx";
import { benchmarkActions, benchmarkInsights } from "./benchmarkingData.js";
import { cx } from "../../lib/formatters.js";

const actionTone = {
  blue: "border border-[#0b2545]/15 bg-[#f2f5f8] text-[#0b2545]",
  green: "border border-[#15803d]/20 bg-[#ecfdf3] text-[#166534]",
  purple: "border border-[#475569]/20 bg-[#f1f5f9] text-[#334155]",
};

/**
 * Supporting insights and quick actions for benchmarking decisions.
 */
export function BenchmarkingInsights() {
  return (
    <Card>
      <CardHeader className="flex items-start gap-3">
        <span className="grid size-10 shrink-0 place-items-center rounded-md border border-[#0b2545]/15 bg-[#f2f5f8] text-[#0b2545]">
          <ShieldCheck className="size-5" aria-hidden="true" />
        </span>
        <div>
          <h2 className="nirvaah-section-title">Benchmark Insights</h2>
          <p className="mt-1 text-sm leading-6 text-[#526276]">Short explanations from the selected cohort.</p>
        </div>
      </CardHeader>
      <CardBody className="grid gap-4">
        <div className="grid gap-2">
          {benchmarkInsights.map((insight) => (
            <div className="grid grid-cols-[32px_1fr] gap-3 rounded-md border border-[#e2e8f0] bg-[#f8fafc] p-3" key={insight}>
              <span className="grid size-8 place-items-center rounded-md bg-white text-[#0b2545]">
                <Lightbulb className="size-4" aria-hidden="true" />
              </span>
              <p className="text-sm font-bold leading-6 text-[#263d59]">{insight}</p>
            </div>
          ))}
        </div>
        <div className="grid gap-3 sm:grid-cols-3 xl:grid-cols-1">
          {benchmarkActions.map(({ icon: Icon, title, description, tone }) => (
            <button
              className="grid min-h-20 grid-cols-[40px_1fr] gap-3 rounded-md border border-[#c9d6e2] bg-white p-3 text-left transition hover:border-[#d97706] hover:bg-[#fffdf8]"
              type="button"
              key={title}
            >
              <span className={cx("grid size-10 place-items-center rounded-md", actionTone[tone])}>
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <span className="min-w-0">
                <strong className="block text-sm font-black text-[#0b2545]">{title}</strong>
                <span className="mt-1 block text-xs font-bold text-[#748397]">{description}</span>
              </span>
            </button>
          ))}
        </div>
      </CardBody>
    </Card>
  );
}

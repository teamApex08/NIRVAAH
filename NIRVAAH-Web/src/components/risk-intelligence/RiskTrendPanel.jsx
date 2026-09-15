import React from "react";
import { TrendingUp } from "lucide-react";
import { Card, CardBody, CardHeader } from "../ui/Card.jsx";
import { riskTrend } from "./riskIntelligenceData.js";

/**
 * Compact monthly trend chart.
 *
 * The bars are CSS-based to keep the prototype lightweight and responsive
 * until a charting library becomes necessary.
 */
export function RiskTrendPanel() {
  const maxValue = Math.max(...riskTrend.flatMap((point) => [point.critical, point.high]));

  return (
    <Card className="min-w-0">
      <CardHeader className="flex items-start gap-3">
        <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-[#f2f5f8] text-[#0b2545]">
          <TrendingUp className="size-5" aria-hidden="true" />
        </span>
        <div>
          <h2 className="text-lg font-black text-[#0b2545]">Risk Trend</h2>
          <p className="mt-1 text-sm leading-6 text-[#526276]">Critical and high risk projects over recent cycles.</p>
        </div>
      </CardHeader>
      <CardBody>
        <div className="flex h-56 items-end gap-3 overflow-x-auto rounded-md border border-[#e2e8f0] bg-[#f8fafc] p-4">
          {riskTrend.map((point) => (
            <div className="grid min-w-16 flex-1 gap-2" key={point.month}>
              <div className="flex h-40 items-end justify-center gap-1">
                <span
                  className="w-4 rounded-t-md bg-red-500"
                  style={{ height: `${Math.max(12, (point.critical / maxValue) * 100)}%` }}
                  title={`${point.critical} critical projects`}
                />
                <span
                  className="w-4 rounded-t-md bg-orange-400"
                  style={{ height: `${Math.max(12, (point.high / maxValue) * 100)}%` }}
                  title={`${point.high} high risk projects`}
                />
              </div>
              <span className="text-center text-xs font-black text-[#526276]">{point.month}</span>
            </div>
          ))}
        </div>
        <div className="mt-3 flex flex-wrap gap-4 text-sm font-bold text-[#526276]">
          <span className="inline-flex items-center gap-2">
            <i className="size-3 rounded-full bg-red-500" />
            Critical
          </span>
          <span className="inline-flex items-center gap-2">
            <i className="size-3 rounded-full bg-orange-400" />
            High
          </span>
        </div>
      </CardBody>
    </Card>
  );
}

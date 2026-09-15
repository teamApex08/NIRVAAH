import React from "react";
import { ClipboardCheck } from "lucide-react";
import { Card, CardBody, CardHeader } from "../ui/Card.jsx";
import { cx } from "../../lib/formatters.js";
import { riskActions, riskInsights } from "./riskIntelligenceData.js";

const toneClasses = {
  blue: "border border-[#0b2545]/15 bg-[#f2f5f8] text-[#0b2545]",
  green: "border border-[#15803d]/20 bg-[#ecfdf3] text-[#166534]",
  orange: "border border-[#d97706]/20 bg-[#fff7ed] text-[#b45309]",
  purple: "border border-[#475569]/20 bg-[#f1f5f9] text-[#334155]",
};

/**
 * Recommendations and workflow actions.
 */
export function RiskActionsPanel() {
  return (
    <Card className="min-w-0">
      <CardHeader className="flex items-start gap-3">
        <span className="grid size-10 shrink-0 place-items-center rounded-md border border-[#0b2545]/15 bg-[#f2f5f8] text-[#0b2545]">
          <ClipboardCheck className="size-5" aria-hidden="true" />
        </span>
        <div>
          <h2 className="text-lg font-black text-[#0b2545]">Decision Support</h2>
          <p className="mt-1 text-sm leading-6 text-[#526276]">Recommended next steps based on current risk signals.</p>
        </div>
      </CardHeader>
      <CardBody className="grid gap-4">
        <div className="grid gap-2">
          {riskInsights.map((insight) => (
            <p className="rounded-md border border-[#e2e8f0] bg-[#f8fafc] p-3 text-sm font-bold leading-6 text-[#263d59]" key={insight}>
              {insight}
            </p>
          ))}
        </div>
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
          {riskActions.map((action) => {
            const Icon = action.icon;

            return (
              <button
                className="grid min-h-20 grid-cols-[40px_1fr] gap-3 rounded-md border border-[#c9d6e2] bg-white p-3 text-left transition hover:border-[#d97706] hover:bg-[#fffdf8]"
                type="button"
                key={action.title}
              >
                <span className={cx("grid size-10 place-items-center rounded-md", toneClasses[action.tone])}>
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <strong className="block text-sm font-black text-[#0b2545]">{action.title}</strong>
                  <span className="mt-1 block text-xs font-bold leading-5 text-[#748397]">{action.description}</span>
                </span>
              </button>
            );
          })}
        </div>
      </CardBody>
    </Card>
  );
}

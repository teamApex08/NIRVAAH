import React from "react";
import { Card, CardBody, CardHeader } from "../ui/Card.jsx";
import { cx } from "../../lib/formatters.js";
import { reportTypes } from "./reportsExportData.js";

const toneClasses = {
  blue: "border border-[#0b2545]/15 bg-[#f2f5f8] text-[#0b2545]",
  green: "border border-[#15803d]/20 bg-[#ecfdf3] text-[#166534]",
  orange: "border border-[#d97706]/20 bg-[#fff7ed] text-[#b45309]",
  purple: "border border-[#475569]/20 bg-[#f1f5f9] text-[#334155]",
  red: "border border-[#b91c1c]/20 bg-[#fef2f2] text-[#b91c1c]",
};

/**
 * Step 1 of the builder: choose which report template to generate.
 */
export function ReportTypeSelector() {
  return (
    <Card className="min-w-0 border-l-4 border-l-[#15803d]">
      <CardHeader>
        <p className="text-sm font-bold text-[#166534]">1. Select Report Type</p>
        <h2 className="mt-1 text-lg font-black text-[#0b2545]">Choose a starting template</h2>
        <p className="mt-1 text-sm leading-6 text-[#526276]">Pick a predefined report or create a custom view.</p>
      </CardHeader>
      <CardBody>
        <div className="grid gap-3 sm:grid-cols-2 2xl:grid-cols-3">
          {reportTypes.map((report) => {
            const Icon = report.icon;

            return (
              <button
                className={cx(
                  "grid min-h-[132px] min-w-0 content-start gap-3 rounded-md border bg-white p-4 text-left transition",
                  "hover:border-[#d97706] hover:bg-[#fffdf8] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#d97706]/20",
                  report.selected ? "border-[#0b2545] shadow-[0_8px_18px_rgba(11,37,69,0.1)]" : "border-[#c9d6e2]",
                )}
                key={report.title}
                type="button"
              >
                <span className={cx("grid size-11 place-items-center rounded-md", toneClasses[report.tone])}>
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <strong className="block text-sm font-black text-[#0b2545]">{report.title}</strong>
                  <span className="mt-1 block text-sm leading-6 text-[#526276]">{report.description}</span>
                </span>
              </button>
            );
          })}
        </div>
      </CardBody>
    </Card>
  );
}

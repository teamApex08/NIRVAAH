import React from "react";
import { ArrowRight, ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import { Button } from "../ui/Button.jsx";
import { Card, CardBody, CardHeader } from "../ui/Card.jsx";
import { Pill } from "../ui/Pill.jsx";
import { cx } from "../../lib/formatters.js";
import { warningRows } from "./earlyWarningsData.js";
import { ConfidencePill, WarningSeverityPill, WarningStatusPill } from "./WarningPills.jsx";

const headers = [
  "Warning",
  "Project",
  "Severity",
  "Trigger",
  "Evidence / Impact",
  "Status",
  "Detected",
  "Action",
];

/**
 * Main warning queue.
 *
 * The table scrolls inside its panel on small screens because warning review
 * needs many columns to remain visible and readable.
 */
export function WarningQueueTable() {
  return (
    <Card className="overflow-hidden" id="warning-queue">
      <CardHeader className="flex flex-col gap-3 sm:flex-row sm:items-start">
        <div className="mr-auto">
          <h2 className="nirvaah-section-title">Warning Queue</h2>
          <p className="mt-1 text-sm leading-6 text-[#526276]">
            Scan severity, trigger, evidence, impact and current workflow state. Showing 10 of 76 warnings.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Pill tone="red">12 critical</Pill>
          <Button type="button" variant="secondary" className="min-h-9 px-2.5" aria-label="Previous warning page">
            <ChevronLeft className="size-4" aria-hidden="true" />
          </Button>
          <Button type="button" variant="secondary" className="min-h-9 px-2.5" aria-label="Next warning page">
            <ChevronRight className="size-4" aria-hidden="true" />
          </Button>
        </div>
      </CardHeader>
      <CardBody className="p-0">
        <div className="max-w-full overflow-x-auto" style={{ contain: "layout paint" }}>
          <table className="nirvaah-table min-w-[1120px]">
            <thead>
              <tr>
                {headers.map((header) => (
                  <th key={header}>
                    {header}
                  </th>
                ))}
                <th>
                  <span className="sr-only">More actions</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {warningRows.map((warning, index) => (
                <tr
                  className={cx(
                    index === 0 && "is-selected",
                  )}
                  key={warning.id}
                >
                  <td>
                    <span className="block whitespace-nowrap font-black text-[#0b2545]">{warning.id}</span>
                    <span className="mt-1 block text-xs font-semibold text-[#748397]">{warning.type}</span>
                  </td>
                  <td>
                    <strong className="block font-black text-[#10233d]">{warning.project}</strong>
                    <span className="mt-1 block text-xs font-bold text-[#748397]">
                      {warning.ministry} · {warning.state}
                    </span>
                  </td>
                  <td>
                    <WarningSeverityPill severity={warning.severity} />
                    <span className="mt-2 block">
                      <ConfidencePill confidence={warning.confidence} />
                    </span>
                  </td>
                  <td>
                    <span className="font-semibold text-[#263d59]">{warning.evidence}</span>
                  </td>
                  <td>
                    <span className="block font-semibold leading-6 text-[#263d59]">{warning.potentialImpact}</span>
                  </td>
                  <td>
                    <WarningStatusPill status={warning.status} />
                  </td>
                  <td>
                    <span className="block whitespace-nowrap font-semibold text-[#263d59]">{warning.firstDetected}</span>
                    <span className="mt-1 block whitespace-nowrap text-xs font-semibold text-[#748397]">Updated {warning.latestChange}</span>
                  </td>
                  <td>
                    <Button type="button" variant={warning.severity === "Critical" ? "danger" : "quiet"} className="min-h-9 px-3 py-1.5 text-xs">
                      {warning.action}
                      <ArrowRight className="size-3.5" aria-hidden="true" />
                    </Button>
                  </td>
                  <td>
                    <Button type="button" variant="ghost" className="min-h-9 px-2.5" aria-label={`More actions for ${warning.project}`}>
                      <MoreHorizontal className="size-4" aria-hidden="true" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardBody>
    </Card>
  );
}

import React from "react";
import { ChevronDown, ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import { Button } from "../ui/Button.jsx";
import { Card, CardBody, CardHeader } from "../ui/Card.jsx";
import { Pill } from "../ui/Pill.jsx";
import { cx } from "../../lib/formatters.js";
import { warningRows } from "./earlyWarningsData.js";
import { ConfidencePill, WarningSeverityPill, WarningStatusPill } from "./WarningPills.jsx";

const headers = [
  "Warning ID",
  "Project Name",
  "Ministry",
  "State",
  "Severity",
  "Warning Type",
  "Key Evidence",
  "First Detected",
  "Latest Change",
  "Confidence",
  "Status",
  "Action",
];

const columnWidths = ["110px", "170px", "140px", "120px", "105px", "165px", "220px", "120px", "120px", "100px", "115px", "115px", "60px"];

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
          <h2 className="text-lg font-black text-[#052b63]">Warning Queue</h2>
          <p className="mt-1 text-sm leading-6 text-[#526276]">
            Projects requiring review based on detected warning signals. Showing 10 of 76 warnings.
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
          <table className="w-[1560px] max-w-none table-fixed border-collapse text-left">
            <colgroup>
              {/* Widths keep dense review columns readable inside the scroll area. */}
              {columnWidths.map((width, index) => (
                <col key={`${width}-${index}`} style={{ width }} />
              ))}
            </colgroup>
            <thead>
              <tr className="bg-[#edf6ff] text-xs font-black text-[#052b63]">
                {headers.map((header) => (
                  <th className="border-b border-[#d5e1ec] px-4 py-3" key={header}>
                    {header}
                  </th>
                ))}
                <th className="border-b border-[#d5e1ec] px-4 py-3">
                  <span className="sr-only">More actions</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {warningRows.map((warning, index) => (
                // The first row is selected because its full detail appears in the right panel.
                <tr
                  className={cx(
                    "text-sm text-[#263d59] transition hover:bg-[#f8fbfe]",
                    index === 0 && "bg-[#f6fbff] shadow-[inset_4px_0_0_#075db7]",
                  )}
                  key={warning.id}
                >
                  <td className="whitespace-nowrap border-b border-[#e7eff7] px-4 py-3 font-black text-[#075db7]">{warning.id}</td>
                  <td className="border-b border-[#e7eff7] px-4 py-3">
                    <strong className="block font-black text-[#10233d]">{warning.project}</strong>
                    <span className="mt-1 block text-xs font-bold text-[#748397]">{warning.projectId}</span>
                  </td>
                  <td className="border-b border-[#e7eff7] px-4 py-3 font-semibold">{warning.ministry}</td>
                  <td className="border-b border-[#e7eff7] px-4 py-3">{warning.state}</td>
                  <td className="border-b border-[#e7eff7] px-4 py-3">
                    <WarningSeverityPill severity={warning.severity} />
                  </td>
                  <td className="border-b border-[#e7eff7] px-4 py-3">{warning.type}</td>
                  <td className="border-b border-[#e7eff7] px-4 py-3">{warning.evidence}</td>
                  <td className="whitespace-nowrap border-b border-[#e7eff7] px-4 py-3">{warning.firstDetected}</td>
                  <td className="whitespace-nowrap border-b border-[#e7eff7] px-4 py-3">{warning.latestChange}</td>
                  <td className="border-b border-[#e7eff7] px-4 py-3">
                    <ConfidencePill confidence={warning.confidence} />
                  </td>
                  <td className="border-b border-[#e7eff7] px-4 py-3">
                    <WarningStatusPill status={warning.status} />
                  </td>
                  <td className="border-b border-[#e7eff7] px-4 py-3">
                    <Button type="button" className="min-h-9 px-3 py-1.5 text-xs">
                      {warning.action}
                      <ChevronDown className="size-3.5" aria-hidden="true" />
                    </Button>
                  </td>
                  <td className="border-b border-[#e7eff7] px-4 py-3">
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

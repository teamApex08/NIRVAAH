import React from "react";
import { Plus } from "lucide-react";
import { Button } from "../ui/Button.jsx";
import { Card, CardBody, CardHeader } from "../ui/Card.jsx";
import { Pill } from "../ui/Pill.jsx";
import { cx } from "../../lib/formatters.js";
import { scheduledReports } from "./reportsExportData.js";

/**
 * Scheduled report delivery table.
 *
 * Switches are display-only today but use button semantics so they can become
 * interactive controls once scheduling APIs exist.
 */
export function ScheduledReportsTable() {
  return (
    <Card className="min-w-0">
      <CardHeader className="flex flex-col gap-3 sm:flex-row sm:items-start">
        <div className="mr-auto">
          <h2 className="nirvaah-section-title">Scheduled Reports</h2>
          <p className="mt-1 text-sm leading-6 text-[#526276]">Automate report generation and delivery.</p>
        </div>
        <Button type="button" variant="secondary" className="w-full sm:w-auto">
          <Plus className="size-4" aria-hidden="true" />
          Create Schedule
        </Button>
      </CardHeader>
      <CardBody className="p-0">
        <div className="overflow-x-auto">
          <table className="nirvaah-table min-w-[680px]">
            <thead>
              <tr>
                <th>Report Name</th>
                <th>Frequency</th>
                <th>Recipients</th>
                <th>Next Run</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {scheduledReports.map((report) => (
                <tr key={report.name}>
                  <td className="font-black text-[#10233d]">{report.name}</td>
                  <td>{report.frequency}</td>
                  <td>{report.recipients}</td>
                  <td>{report.nextRun}</td>
                  <td>
                    <div className="flex items-center gap-2">
                      <button
                        className={cx(
                          "relative h-6 w-11 rounded-full transition focus:outline-none focus-visible:ring-4 focus-visible:ring-[#d97706]/20",
                          report.enabled ? "bg-emerald-500" : "bg-slate-400",
                        )}
                        type="button"
                        aria-label={`${report.enabled ? "Disable" : "Enable"} ${report.name}`}
                      >
                        <span
                          className={cx(
                            "absolute top-1 size-4 rounded-full bg-white shadow transition",
                            report.enabled ? "left-6" : "left-1",
                          )}
                        />
                      </button>
                      <Pill tone={report.enabled ? "green" : "slate"}>{report.enabled ? "On" : "Off"}</Pill>
                    </div>
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

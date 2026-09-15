import React from "react";
import { Download, MoreHorizontal } from "lucide-react";
import { Button } from "../ui/Button.jsx";
import { Card, CardBody, CardHeader } from "../ui/Card.jsx";
import { Pill } from "../ui/Pill.jsx";
import { recentReports } from "./reportsExportData.js";

const formatTone = {
  Excel: "green",
  PDF: "red",
  PPT: "orange",
};

const statusTone = {
  Ready: "green",
  Archived: "slate",
};

/**
 * Table of recently generated reports.
 *
 * The table scrolls horizontally on narrow screens so all columns stay legible.
 */
export function RecentReportsTable() {
  return (
    <Card className="min-w-0">
      <CardHeader className="flex flex-col gap-3 sm:flex-row sm:items-start">
        <div className="mr-auto">
          <h2 className="nirvaah-section-title">Recent Reports</h2>
          <p className="mt-1 text-sm leading-6 text-[#526276]">Access generated files with purpose, scope, status and format visible.</p>
        </div>
        <Button type="button" variant="ghost" className="w-full sm:w-auto">
          View All
        </Button>
      </CardHeader>
      <CardBody className="p-0">
        <div className="overflow-x-auto">
          <table className="nirvaah-table min-w-[900px]">
            <thead>
              <tr>
                <th>Report</th>
                <th>Purpose</th>
                <th>Date Range / Scope</th>
                <th>Generated</th>
                <th>Status</th>
                <th>Format</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {recentReports.map((report) => (
                <tr key={report.name}>
                  <td className="font-black text-[#10233d]">{report.name}</td>
                  <td>{report.type}</td>
                  <td>{report.filters}</td>
                  <td>
                    <span className="block font-semibold text-[#263d59]">{report.generatedOn}</span>
                    <span className="mt-1 block text-xs font-semibold text-[#748397]">{report.generatedBy}</span>
                  </td>
                  <td>
                    <Pill tone={statusTone[report.status]}>{report.status}</Pill>
                  </td>
                  <td>
                    <Pill tone={formatTone[report.format]}>{report.format}</Pill>
                  </td>
                  <td>
                    <div className="flex items-center gap-1.5">
                      <Button type="button" variant="primary" className="min-h-9 px-3">
                        <Download className="size-4" aria-hidden="true" />
                        Download
                      </Button>
                      <Button type="button" variant="ghost" className="min-h-9 px-2.5" aria-label={`More actions for ${report.name}`}>
                        <MoreHorizontal className="size-4" aria-hidden="true" />
                      </Button>
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

import React from "react";
import { CheckSquare, RefreshCcw, Save } from "lucide-react";
import { Button } from "../ui/Button.jsx";
import { Card, CardBody, CardHeader } from "../ui/Card.jsx";
import { reportFilters, reportMetrics } from "./reportsExportData.js";

/**
 * Step 2 of the builder: choose filters and metrics.
 *
 * Controls are visual-only for now. The field data is separated so wiring this
 * to backend query parameters later remains straightforward.
 */
export function ReportConfigurator() {
  return (
    <Card className="min-w-0 border-l-4 border-l-[#d97706]">
      <CardHeader>
        <p className="text-sm font-bold text-[#b45309]">2. Configure Report</p>
        <h2 className="mt-1 text-lg font-black text-[#0b2545]">Select filters, metrics and time period</h2>
        <p className="mt-1 text-sm leading-6 text-[#526276]">Data available through 21 Aug 2026.</p>
      </CardHeader>
      <CardBody className="grid gap-4">
        <div className="grid gap-3 sm:grid-cols-2">
          {reportFilters.map((filter, index) => (
            <label className={index === 0 || index === 3 ? "grid gap-1.5 sm:col-span-2" : "grid gap-1.5"} key={filter.label}>
              <span className="text-xs font-black uppercase tracking-wide text-[#526276]">{filter.label}</span>
              <select className="nirvaah-field px-3">
                {filter.options.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </label>
          ))}
        </div>

        <section aria-labelledby="metrics-title">
          <div className="flex items-center gap-2">
            <CheckSquare className="size-4 text-[#0b2545]" aria-hidden="true" />
            <h3 className="text-sm font-black text-[#0b2545]" id="metrics-title">
              Metrics to Include
            </h3>
          </div>
          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            {reportMetrics.map((metric) => (
              <label className="flex min-h-9 items-center gap-2 rounded-md border border-[#e2e8f0] bg-[#fffdf8] px-3 text-sm font-semibold text-[#263d59]" key={metric}>
                <input className="size-4 rounded border-[#b8c9da] accent-[#0b2545]" defaultChecked type="checkbox" />
                <span>{metric}</span>
              </label>
            ))}
          </div>
        </section>

        <div className="grid gap-2 pt-1 sm:grid-cols-2">
          <Button type="button" className="w-full">
            <Save className="size-4" aria-hidden="true" />
            Save View
          </Button>
          <Button type="button" variant="secondary" className="w-full">
            <RefreshCcw className="size-4" aria-hidden="true" />
            Reset
          </Button>
        </div>
      </CardBody>
    </Card>
  );
}

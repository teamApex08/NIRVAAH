import React from "react";
import { MetricCard } from "../ui/MetricCard.jsx";
import { reportKpis } from "./reportsExportData.js";

/**
 * Portfolio metrics shown before report creation begins.
 */
export function ReportsKpiStrip() {
  return (
    <section className="grid min-w-0 gap-3 sm:grid-cols-2 xl:grid-cols-4" aria-label="Reporting workspace summary">
      {reportKpis.map((kpi) => (
        <MetricCard key={kpi.label} {...kpi} />
      ))}
    </section>
  );
}

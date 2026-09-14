import React from "react";
import { MetricCard } from "../ui/MetricCard.jsx";
import { warningKpis } from "./earlyWarningsData.js";

/**
 * Summary KPI cards for the warning queue.
 */
export function WarningKpiStrip() {
  return (
    <section className="grid min-w-0 gap-3 sm:grid-cols-2 xl:grid-cols-5" aria-label="Early warning summary">
      {warningKpis.map((kpi) => (
        <MetricCard key={kpi.label} {...kpi} />
      ))}
    </section>
  );
}

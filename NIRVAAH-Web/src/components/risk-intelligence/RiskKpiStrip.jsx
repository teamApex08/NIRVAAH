import React from "react";
import { MetricCard } from "../ui/MetricCard.jsx";
import { riskKpis } from "./riskIntelligenceData.js";

/**
 * Portfolio-wide risk summary cards.
 */
export function RiskKpiStrip() {
  return (
    <section className="grid min-w-0 gap-3 sm:grid-cols-2 xl:grid-cols-5" aria-label="Risk intelligence summary">
      {riskKpis.map((kpi) => (
        <MetricCard key={kpi.label} {...kpi} />
      ))}
    </section>
  );
}

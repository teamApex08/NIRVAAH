import React from "react";
import { MetricCard } from "../ui/MetricCard.jsx";
import { settingsKpis } from "./settingsData.js";

/**
 * High-level account and workspace status cards.
 */
export function SettingsKpiStrip() {
  return (
    <section className="grid min-w-0 gap-3 sm:grid-cols-2 xl:grid-cols-4" aria-label="Settings summary">
      {settingsKpis.map((kpi) => (
        <MetricCard key={kpi.label} {...kpi} />
      ))}
    </section>
  );
}

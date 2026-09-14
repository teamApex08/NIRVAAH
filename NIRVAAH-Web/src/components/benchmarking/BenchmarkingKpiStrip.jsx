import React from "react";
import { MetricCard } from "../ui/MetricCard.jsx";
import { benchmarkKpis } from "./benchmarkingData.js";

/**
 * KPI strip for the active benchmark cohort.
 */
export function BenchmarkingKpiStrip() {
  return (
    <section className="grid min-w-0 gap-3 sm:grid-cols-2 xl:grid-cols-5" aria-label="Benchmarking metrics">
      {benchmarkKpis.map((kpi) => (
        <MetricCard key={kpi.label} {...kpi} />
      ))}
    </section>
  );
}

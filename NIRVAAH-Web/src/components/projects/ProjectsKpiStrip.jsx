import React from "react";
import { MetricCard } from "../ui/MetricCard.jsx";
import { projectKpis } from "./projectsData.js";

/**
 * Portfolio KPI strip for the Projects page.
 */
export function ProjectsKpiStrip() {
  return (
    <section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6" aria-label="Project portfolio metrics">
      {projectKpis.map((kpi) => (
        <MetricCard key={kpi.label} {...kpi} />
      ))}
    </section>
  );
}

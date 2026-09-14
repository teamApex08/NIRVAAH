import React from "react";
import { BenchmarkingFilters } from "../components/benchmarking/BenchmarkingFilters.jsx";
import { BenchmarkingHero } from "../components/benchmarking/BenchmarkingHero.jsx";
import { BenchmarkingInsights } from "../components/benchmarking/BenchmarkingInsights.jsx";
import { BenchmarkingKpiStrip } from "../components/benchmarking/BenchmarkingKpiStrip.jsx";
import { BenchmarkingTabs } from "../components/benchmarking/BenchmarkingTabs.jsx";
import { PeerComparison } from "../components/benchmarking/PeerComparison.jsx";
import { SchedulePerformance } from "../components/benchmarking/SchedulePerformance.jsx";
import { SectorPerformanceChart } from "../components/benchmarking/SectorPerformanceChart.jsx";
import { TopBottomProjects } from "../components/benchmarking/TopBottomProjects.jsx";

/**
 * Route-level page for /nirvaah/benchmarking.
 *
 * The pulled GitHub layout owns the sidebar and top bar. This page only
 * renders the benchmarking workspace that sits inside that layout.
 */
function BenchmarkingPage() {
  return (
    <main className="grid min-w-0 gap-4" aria-labelledby="benchmarking-title">
      <BenchmarkingHero />
      <BenchmarkingTabs />
      <BenchmarkingFilters />
      <BenchmarkingKpiStrip />
      <section className="grid min-w-0 gap-4 2xl:grid-cols-[minmax(0,1.4fr)_minmax(420px,0.9fr)]" aria-label="Benchmark charts">
        <SectorPerformanceChart />
        <SchedulePerformance />
      </section>
      <section className="grid min-w-0 gap-4 xl:grid-cols-[minmax(0,1.2fr)_minmax(420px,0.9fr)]" aria-label="Benchmark comparisons">
        <TopBottomProjects />
        <PeerComparison />
      </section>
      <BenchmarkingInsights />
    </main>
  );
}

export default BenchmarkingPage;

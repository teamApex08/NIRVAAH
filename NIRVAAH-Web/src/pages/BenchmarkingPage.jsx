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
import { DashboardLayout } from "../components/layout/DashboardLayout.jsx";

/**
 * Route-level page for /benchmarking.
 *
 * This page follows the same modular pattern as Projects and Early Warnings:
 * page layout here, reusable panels in components, and dummy content in a
 * page-specific data file.
 */
function BenchmarkingPage() {
  return (
    <DashboardLayout activePath="/benchmarking">
      <main className="grid min-w-0 gap-4 px-4 py-4 pb-24 sm:px-6 lg:px-8 lg:pb-6" aria-labelledby="benchmarking-title">
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
    </DashboardLayout>
  );
}

export default BenchmarkingPage;

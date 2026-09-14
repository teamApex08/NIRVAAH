import React from "react";
import { MetricCard } from "../../../components/ui/MetricCard.jsx";
import { DashboardLayout } from "../../../components/layout/DashboardLayout.jsx";
import { healthKpis } from "../data/commandCentreData.js";
import { AskNirvaah } from "../components/AskNirvaah.jsx";
import { AttentionTable } from "../components/AttentionTable.jsx";
import { CommandFilters } from "../components/CommandFilters.jsx";
import { CommandHero } from "../components/CommandHero.jsx";
import { DecisionInsights } from "../components/DecisionInsights.jsx";
import { FinancialSummary } from "../components/FinancialSummary.jsx";
import { GeographicRisk } from "../components/GeographicRisk.jsx";
import { PortfolioChange } from "../components/PortfolioChange.jsx";
import { PortfolioRisk } from "../components/PortfolioRisk.jsx";
import { RiskByMinistry } from "../components/RiskByMinistry.jsx";

/**
 * Route-level page for /command-centre.
 *
 * This page composes the dashboard from smaller cards and panels. Keeping the
 * layout here, and the content inside components/data files, makes it easier
 * for beginners to locate the part they need to change.
 */
function CommandCentrePage() {
  return (
    <DashboardLayout activePath="/command-centre">
      <main aria-labelledby="command-title">
        <CommandHero />
        <div className="grid gap-4 px-4 py-4 sm:px-6 lg:px-8">
          {/* Summary cards use shared MetricCard so future dashboards match. */}
          <section className="grid gap-3 sm:grid-cols-2 xl:grid-cols-5" aria-label="Portfolio health">
            {healthKpis.map((kpi) => (
              <MetricCard key={kpi.label} {...kpi} />
            ))}
          </section>
          <CommandFilters />
          {/* Main dashboard grid: wide table on the left, supporting panels flow around it. */}
          <section className="grid gap-4 xl:grid-cols-[minmax(0,2fr)_minmax(320px,1fr)]">
            <AttentionTable />
            <PortfolioRisk />
            <PortfolioChange />
            <RiskByMinistry />
            <GeographicRisk />
            <DecisionInsights />
            <FinancialSummary />
            <AskNirvaah />
          </section>
        </div>
      </main>
    </DashboardLayout>
  );
}

export default CommandCentrePage;

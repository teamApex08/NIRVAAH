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

function CommandCentrePage() {
  return (
    <DashboardLayout activePath="/command-centre">
      <main aria-labelledby="command-title">
        <CommandHero />
        <div className="grid gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <section className="grid gap-3 sm:grid-cols-2 xl:grid-cols-5" aria-label="Portfolio health">
            {healthKpis.map((kpi) => (
              <MetricCard key={kpi.label} {...kpi} />
            ))}
          </section>
          <CommandFilters />
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

import { AskNirvaah } from "../components/command-centre/AskNirvaah.jsx";
import { AttentionTable } from "../components/command-centre/AttentionTable.jsx";
import { CommandFilters } from "../components/command-centre/CommandFilters.jsx";
import { CommandHero } from "../components/command-centre/CommandHero.jsx";
import { DecisionInsights } from "../components/command-centre/DecisionInsights.jsx";
import { FinancialSummary } from "../components/command-centre/FinancialSummary.jsx";
import { GeographicRisk } from "../components/command-centre/GeographicRisk.jsx";
import { PortfolioChange } from "../components/command-centre/PortfolioChange.jsx";
import { PortfolioRisk } from "../components/command-centre/PortfolioRisk.jsx";
import { RiskByMinistry } from "../components/command-centre/RiskByMinistry.jsx";
import { healthKpis } from "../components/command-centre/commandCentreData.js";
import { MetricCard } from "../components/ui/MetricCard.jsx";

function CommandCentrePage() {
  return (
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
  );
}

export default CommandCentrePage;

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
    <main className="nirvaah-page" aria-labelledby="command-title">
      <CommandHero />
      <section className="grid gap-3 sm:grid-cols-2 xl:grid-cols-5" aria-label="Portfolio health">
        {healthKpis.map((kpi) => (
          <MetricCard key={kpi.label} {...kpi} />
        ))}
      </section>
      <CommandFilters />
      <section className="grid gap-4 xl:grid-cols-[minmax(0,1.75fr)_minmax(320px,0.85fr)]" aria-label="Command Centre priorities">
        <AttentionTable />
        <div className="grid gap-4">
          <PortfolioRisk />
          <DecisionInsights />
        </div>
      </section>
      <section className="grid gap-4 xl:grid-cols-[minmax(0,1.35fr)_minmax(320px,0.85fr)_minmax(320px,0.85fr)]" aria-label="Supporting portfolio analysis">
          <PortfolioChange />
          <RiskByMinistry />
          <GeographicRisk />
      </section>
      <FinancialSummary />
    </main>
  );
}

export default CommandCentrePage;

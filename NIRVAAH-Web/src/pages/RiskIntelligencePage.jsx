import React from "react";
import { ModelSignalsPanel } from "../components/risk-intelligence/ModelSignalsPanel.jsx";
import { RiskActionsPanel } from "../components/risk-intelligence/RiskActionsPanel.jsx";
import { RiskDriversPanel } from "../components/risk-intelligence/RiskDriversPanel.jsx";
import { RiskFilters } from "../components/risk-intelligence/RiskFilters.jsx";
import { RiskIntelligenceHero } from "../components/risk-intelligence/RiskIntelligenceHero.jsx";
import { RiskKpiStrip } from "../components/risk-intelligence/RiskKpiStrip.jsx";
import { RiskPriorityQueue } from "../components/risk-intelligence/RiskPriorityQueue.jsx";
import { RiskSignalMatrix } from "../components/risk-intelligence/RiskSignalMatrix.jsx";
import { RiskTabs } from "../components/risk-intelligence/RiskTabs.jsx";
import { RiskTrendPanel } from "../components/risk-intelligence/RiskTrendPanel.jsx";

/**
 * Route-level page for /nirvaah/risk-intelligence.
 *
 * The pulled GitHub layout owns the sidebar and top bar. This page composes
 * the risk-analysis workspace from focused reusable components.
 */
function RiskIntelligencePage() {
  return (
    <main className="nirvaah-page" aria-labelledby="risk-intelligence-title">
      <RiskIntelligenceHero />
      <RiskKpiStrip />
      <RiskTabs />
      <RiskFilters />
      <section className="grid min-w-0 gap-4 xl:grid-cols-[minmax(0,1fr)_380px]" aria-label="Risk intelligence workspace">
        <div className="grid min-w-0 gap-4">
          <RiskSignalMatrix />
          <RiskDriversPanel />
          <RiskPriorityQueue />
        </div>
        <div className="grid h-fit min-w-0 gap-4">
          <RiskTrendPanel />
          <ModelSignalsPanel />
          <RiskActionsPanel />
        </div>
      </section>
    </main>
  );
}

export default RiskIntelligencePage;

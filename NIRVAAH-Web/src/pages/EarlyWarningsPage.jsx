import React from "react";
import { DashboardLayout } from "../components/layout/DashboardLayout.jsx";
import { EarlyWarningsAssistant } from "../components/early-warnings/EarlyWarningsAssistant.jsx";
import { EarlyWarningsHero } from "../components/early-warnings/EarlyWarningsHero.jsx";
import { SelectedWarningPanel } from "../components/early-warnings/SelectedWarningPanel.jsx";
import { WarningAnalytics } from "../components/early-warnings/WarningAnalytics.jsx";
import { WarningFilters } from "../components/early-warnings/WarningFilters.jsx";
import { WarningKpiStrip } from "../components/early-warnings/WarningKpiStrip.jsx";
import { WarningQueueTable } from "../components/early-warnings/WarningQueueTable.jsx";
import { WarningQuickActions } from "../components/early-warnings/WarningQuickActions.jsx";
import { WarningSourceStrip } from "../components/early-warnings/WarningSourceStrip.jsx";

/**
 * Route-level page for /early-warnings.
 *
 * The page keeps layout here and moves every working area into a reusable
 * component. This mirrors the Projects architecture and keeps files beginner
 * friendly as the product grows.
 */
function EarlyWarningsPage() {
  return (
    <DashboardLayout activePath="/early-warnings">
      <main className="grid min-w-0 gap-4 px-4 py-4 pb-24 sm:px-6 lg:px-8 lg:pb-6" aria-labelledby="early-warnings-title">
        <EarlyWarningsHero />
        <WarningSourceStrip />
        <WarningKpiStrip />
        <WarningFilters />
        <section className="grid min-w-0 gap-4 xl:grid-cols-[minmax(0,1fr)_360px]" aria-label="Warning review workspace">
          <WarningQueueTable />
          <SelectedWarningPanel />
        </section>
        <WarningAnalytics />
        <WarningQuickActions />
        <EarlyWarningsAssistant />
      </main>
    </DashboardLayout>
  );
}

export default EarlyWarningsPage;

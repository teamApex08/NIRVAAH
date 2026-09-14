import React from "react";
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
 * Route-level page for /nirvaah/early-warnings.
 *
 * The pulled GitHub layout owns the sidebar and top bar. This page only
 * renders the warning review workspace inside that layout.
 */
function EarlyWarningsPage() {
  return (
    <main className="grid min-w-0 gap-4" aria-labelledby="early-warnings-title">
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
  );
}

export default EarlyWarningsPage;

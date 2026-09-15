import React from "react";
import { RecentReportsTable } from "../components/reports-export/RecentReportsTable.jsx";
import { ReportConfigurator } from "../components/reports-export/ReportConfigurator.jsx";
import { ReportPreviewExport } from "../components/reports-export/ReportPreviewExport.jsx";
import { ReportsHero } from "../components/reports-export/ReportsHero.jsx";
import { ReportsKpiStrip } from "../components/reports-export/ReportsKpiStrip.jsx";
import { ReportsTabs } from "../components/reports-export/ReportsTabs.jsx";
import { ReportTypeSelector } from "../components/reports-export/ReportTypeSelector.jsx";
import { ScheduledReportsTable } from "../components/reports-export/ScheduledReportsTable.jsx";

/**
 * Route-level page for /nirvaah/reports.
 *
 * The pulled GitHub layout owns the sidebar and top bar. This file only
 * arranges Reports & Exports sections, while each section lives in its own
 * beginner-friendly component.
 */
function ReportsExportPage() {
  return (
    <main className="nirvaah-page" aria-labelledby="reports-export-title">
      <ReportsHero />
      <ReportsKpiStrip />
      <ReportsTabs />
      <section className="grid min-w-0 gap-4 2xl:grid-cols-[minmax(0,1.2fr)_minmax(340px,0.8fr)_minmax(380px,0.9fr)]" aria-label="Report builder">
        <ReportTypeSelector />
        <ReportConfigurator />
        <ReportPreviewExport />
      </section>
      <section className="grid min-w-0 gap-4 xl:grid-cols-[minmax(0,1.35fr)_minmax(420px,0.9fr)]" aria-label="Report management">
        <RecentReportsTable />
        <ScheduledReportsTable />
      </section>
    </main>
  );
}

export default ReportsExportPage;

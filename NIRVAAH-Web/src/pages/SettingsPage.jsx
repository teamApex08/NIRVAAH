import React from "react";
import { NotificationsPanel } from "../components/settings/NotificationsPanel.jsx";
import { ProfileAccessPanel } from "../components/settings/ProfileAccessPanel.jsx";
import { ReportingDefaultsPanel } from "../components/settings/ReportingDefaultsPanel.jsx";
import { SecurityPanel } from "../components/settings/SecurityPanel.jsx";
import { SettingsHero } from "../components/settings/SettingsHero.jsx";
import { SettingsKpiStrip } from "../components/settings/SettingsKpiStrip.jsx";
import { SettingsTabs } from "../components/settings/SettingsTabs.jsx";
import { TeamAccessTable } from "../components/settings/TeamAccessTable.jsx";

/**
 * Route-level page for /nirvaah/settings.
 *
 * The pulled GitHub layout owns the sidebar and top bar. This page composes
 * the Settings workspace from reusable sections and static component data.
 */
function SettingsPage() {
  return (
    <main className="nirvaah-page" aria-labelledby="settings-title">
      <SettingsHero />
      <SettingsKpiStrip />
      <SettingsTabs />
      <section className="grid min-w-0 gap-4 xl:grid-cols-[minmax(0,1fr)_400px]" aria-label="Settings workspace">
        <div className="grid min-w-0 gap-4">
          <ProfileAccessPanel />
          <NotificationsPanel />
          <ReportingDefaultsPanel />
          <TeamAccessTable />
        </div>
        <SecurityPanel />
      </section>
    </main>
  );
}

export default SettingsPage;

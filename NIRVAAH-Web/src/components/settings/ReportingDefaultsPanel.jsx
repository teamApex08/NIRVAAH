import React from "react";
import { RefreshCw } from "lucide-react";
import { Button } from "../ui/Button.jsx";
import { Card, CardBody, CardHeader } from "../ui/Card.jsx";
import { reportingDefaults, systemPreferences } from "./settingsData.js";
import { SettingToggle } from "./SettingToggle.jsx";

/**
 * Reporting and display defaults.
 *
 * These values shape how pages and exports open for the officer by default.
 */
export function ReportingDefaultsPanel() {
  return (
    <Card className="min-w-0 border-l-4 border-l-[#15803d]">
      <CardHeader className="flex flex-col gap-3 sm:flex-row sm:items-start">
        <div className="mr-auto">
          <h2 className="text-lg font-black text-[#0b2545]">Reporting Defaults</h2>
          <p className="mt-1 text-sm leading-6 text-[#526276]">Set the starting view for dashboards, exports and saved report flows.</p>
        </div>
        <Button type="button" variant="secondary" className="w-full sm:w-auto">
          <RefreshCw className="size-4" aria-hidden="true" />
          Reset Defaults
        </Button>
      </CardHeader>
      <CardBody className="grid gap-4">
        <div className="grid gap-3 sm:grid-cols-2">
          {reportingDefaults.map((item) => (
            <label className="grid gap-1.5" key={item.label}>
              <span className="text-xs font-black uppercase tracking-wide text-[#526276]">{item.label}</span>
              <select className="min-h-11 rounded-md border border-[#cfdcea] bg-white px-3 text-sm font-bold text-[#10233d] outline-none focus:border-[#d97706] focus:ring-4 focus:ring-[#d97706]/15">
                <option>{item.value}</option>
              </select>
            </label>
          ))}
        </div>
        <div className="grid gap-3">
          {systemPreferences.map((preference) => {
            const Icon = preference.icon;

            return (
              <article className="grid grid-cols-[40px_1fr_auto] items-center gap-3 rounded-md border border-[#e2e8f0] bg-[#f8fafc] p-3" key={preference.title}>
                <span className="grid size-10 place-items-center rounded-md bg-[#ecfdf3] text-[#166534]">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <strong className="block text-sm font-black text-[#0b2545]">{preference.title}</strong>
                  <span className="mt-1 block text-xs font-semibold leading-5 text-[#526276]">{preference.description}</span>
                </div>
                <SettingToggle enabled={preference.enabled} label={preference.title} />
              </article>
            );
          })}
        </div>
      </CardBody>
    </Card>
  );
}

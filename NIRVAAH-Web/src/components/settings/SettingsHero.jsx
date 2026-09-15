import React from "react";
import { Save, ShieldCheck } from "lucide-react";
import { Button } from "../ui/Button.jsx";
import { PageHero } from "../ui/PageHero.jsx";

/**
 * Page introduction for Settings.
 *
 * The header keeps the page calm and clear, with one primary save action for
 * future preference updates.
 */
export function SettingsHero() {
  return (
    <PageHero
      eyebrow="Settings"
      title="Workspace Preferences"
      titleId="settings-title"
      description="Manage profile context, alert rules, reporting defaults and security preferences for your NIRVAAH workspace."
      tone="slate"
    >
      <div className="grid gap-2 sm:grid-cols-2 lg:flex">
        <Button type="button" variant="secondary" className="w-full lg:w-auto">
          <ShieldCheck className="size-4" aria-hidden="true" />
          Review Security
        </Button>
        <Button type="button" className="w-full lg:w-auto">
          <Save className="size-4" aria-hidden="true" />
          Save Changes
        </Button>
      </div>
    </PageHero>
  );
}

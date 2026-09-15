import React from "react";
import { CircleHelp } from "lucide-react";
import { Button } from "../ui/Button.jsx";
import { PageHero } from "../ui/PageHero.jsx";

/**
 * Page introduction for Reports & Exports.
 *
 * The reference has a large visual banner. Here we keep the same message in a
 * tighter header so the report builder stays visible without extra scrolling.
 */
export function ReportsHero() {
  return (
    <PageHero
      eyebrow="Reports & Exports"
      title="Reports & Exports"
      titleId="reports-export-title"
      description="Generate, organize and download decision-ready portfolio, project, warning and benchmark reports."
      tone="green"
    >
      <Button type="button" variant="secondary" className="w-full lg:w-auto">
        <CircleHelp className="size-4" aria-hidden="true" />
        Report Guide
      </Button>
    </PageHero>
  );
}

import React from "react";
import { BrainCircuit, ShieldCheck } from "lucide-react";
import { Button } from "../ui/Button.jsx";
import { PageHero } from "../ui/PageHero.jsx";

/**
 * Page introduction for Risk Intelligence.
 *
 * The copy explains that the page is a decision-support workspace, not a black
 * box scorecard, which helps officers trust and interpret the signals.
 */
export function RiskIntelligenceHero() {
  return (
    <PageHero
      eyebrow="Risk Intelligence"
      title="Explainable Risk Intelligence"
      titleId="risk-intelligence-title"
      description="Understand cost, schedule, progress and implementation risks before they become critical delays."
      tone="red"
    >
      <div className="grid gap-2 sm:grid-cols-2 lg:flex">
        <Button type="button" variant="secondary" className="w-full lg:w-auto">
          <ShieldCheck className="size-4" aria-hidden="true" />
          Model Notes
        </Button>
        <Button type="button" className="w-full lg:w-auto">
          <BrainCircuit className="size-4" aria-hidden="true" />
          Run Risk Review
        </Button>
      </div>
    </PageHero>
  );
}

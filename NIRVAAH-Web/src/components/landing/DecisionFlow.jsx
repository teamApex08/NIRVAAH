import React from "react";
import { LandingIcon } from "./LandingIcon.jsx";
import { SectionHeader } from "./SectionHeader.jsx";
import { flowSteps } from "./landingData.js";
import { compactSectionPad, pageShell } from "./landingStyles.js";

/**
 * Explains the product journey from monitoring data to officer action.
 */
export function DecisionFlow() {
  return (
    <section className={`bg-white ${compactSectionPad}`} id="product" aria-labelledby="flow-title">
      <div className={pageShell}>
        <SectionHeader
          id="flow-title"
          title="From Data to Decisions"
          subtitle="Turning infrastructure monitoring data into prioritised, explainable action."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-5" aria-label="Product journey">
          {flowSteps.map((step, index) => (
            <FlowStep key={step.label} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * One card in the product journey.
 *
 * The index is displayed as a two-digit step number.
 */
function FlowStep({ step, index }) {
  return (
    <article className="relative rounded-lg border border-[#d5e1ec] bg-[#f8fbfe] p-5 transition hover:-translate-y-1 hover:shadow-[0_16px_38px_rgba(5,43,99,0.10)]">
      <span className="grid size-11 place-items-center rounded-lg bg-[#e9f3fd] text-[#075db7]">
        <LandingIcon name={step.icon} />
      </span>
      <span className="mt-5 block text-sm font-black text-[#0b8a7a]">0{index + 1}</span>
      <h3 className="mt-2 text-lg font-black text-[#052b63]">{step.label}</h3>
      <p className="mt-2 text-sm leading-6 text-[#526276]">{step.text}</p>
    </article>
  );
}

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
  const stepStyles = [
    "border-t-[#0b2545] bg-[#f8fafc]",
    "border-t-[#15803d] bg-[#fbfffc]",
    "border-t-[#d97706] bg-[#fffdf8]",
    "border-t-[#b91c1c] bg-[#fffafa]",
    "border-t-[#475569] bg-[#f8fafc]",
  ];
  const iconStyles = ["bg-[#f2f5f8] text-[#0b2545]", "bg-[#ecfdf3] text-[#166534]", "bg-[#fff7ed] text-[#b45309]", "bg-[#fef2f2] text-[#b91c1c]", "bg-[#f1f5f9] text-[#334155]"];

  return (
    <article className={`relative rounded-md border border-t-4 border-[#c9d6e2] p-5 transition hover:-translate-y-1 hover:shadow-[0_16px_38px_rgba(5,43,99,0.10)] ${stepStyles[index % stepStyles.length]}`}>
      <span className={`grid size-11 place-items-center rounded-md ${iconStyles[index % iconStyles.length]}`}>
        <LandingIcon name={step.icon} />
      </span>
      <span className="mt-5 block text-sm font-black text-[#b45309]">0{index + 1}</span>
      <h3 className="mt-2 text-lg font-black text-[#0b2545]">{step.label}</h3>
      <p className="mt-2 text-sm leading-6 text-[#526276]">{step.text}</p>
    </article>
  );
}

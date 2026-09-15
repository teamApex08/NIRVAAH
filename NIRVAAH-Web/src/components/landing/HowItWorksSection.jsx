import React from "react";
import { LandingIcon } from "./LandingIcon.jsx";
import { SectionHeader } from "./SectionHeader.jsx";
import { pipeline } from "./landingData.js";
import { pageShell, sectionPad } from "./landingStyles.js";

/**
 * Explains the data-to-intelligence pipeline at a high level.
 */
export function HowItWorksSection() {
  return (
    <section className={`bg-[#f3f6f8] ${sectionPad}`} id="how-it-works" aria-labelledby="workflow-title">
      <div className={pageShell}>
        <SectionHeader
          id="workflow-title"
          title="How Intelligence Is Generated"
          subtitle="From PAIMANA/OCMS project records to explainable decision support."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {pipeline.map((stage, index) => (
            <PipelineStage key={stage.title} stage={stage} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * One stage in the NIRVAAH intelligence pipeline.
 */
function PipelineStage({ stage, index }) {
  const tagClasses = ["bg-[#f2f5f8] text-[#0b2545]", "bg-[#ecfdf3] text-[#166534]", "bg-[#fff7ed] text-[#b45309]", "bg-[#fef2f2] text-[#b91c1c]", "bg-[#f1f5f9] text-[#334155]"];
  const borderClasses = ["border-l-[#0b2545]", "border-l-[#15803d]", "border-l-[#d97706]", "border-l-[#b91c1c]", "border-l-[#475569]"];

  return (
    <article className={`rounded-md border border-l-4 border-[#c9d6e2] bg-white p-5 shadow-sm ${borderClasses[index % borderClasses.length]}`}>
      <span className={`inline-flex rounded-full px-3 py-1 text-xs font-black ${tagClasses[index % tagClasses.length]}`}>
        {stage.step}
      </span>
      <div className={`mt-5 grid size-11 place-items-center rounded-md ${tagClasses[index % tagClasses.length]}`}>
        <LandingIcon name={stage.icon} />
      </div>
      <h3 className="mt-4 text-lg font-black text-[#0b2545]">{stage.title}</h3>
      <p className="mt-2 text-sm leading-6 text-[#526276]">{stage.text}</p>
    </article>
  );
}

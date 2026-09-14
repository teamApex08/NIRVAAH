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
    <section className={`bg-[#f6f9fc] ${sectionPad}`} id="how-it-works" aria-labelledby="workflow-title">
      <div className={pageShell}>
        <SectionHeader
          id="workflow-title"
          title="How Intelligence Is Generated"
          subtitle="From PAIMANA/OCMS project records to explainable decision support."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {pipeline.map((stage) => (
            <PipelineStage key={stage.title} stage={stage} />
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * One stage in the NIRVAAH intelligence pipeline.
 */
function PipelineStage({ stage }) {
  return (
    <article className="rounded-lg border border-[#d5e1ec] bg-white p-5 shadow-sm">
      <span className="inline-flex rounded-full bg-[#edf8f5] px-3 py-1 text-xs font-black text-[#0b8a7a]">
        {stage.step}
      </span>
      <div className="mt-5 grid size-11 place-items-center rounded-lg bg-[#e9f3fd] text-[#075db7]">
        <LandingIcon name={stage.icon} />
      </div>
      <h3 className="mt-4 text-lg font-black text-[#052b63]">{stage.title}</h3>
      <p className="mt-2 text-sm leading-6 text-[#526276]">{stage.text}</p>
    </article>
  );
}

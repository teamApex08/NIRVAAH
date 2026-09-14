import React from "react";
import { LandingIcon } from "./LandingIcon.jsx";
import { SectionHeader } from "./SectionHeader.jsx";
import { outcomes } from "./landingData.js";
import { pageShell, sectionPad } from "./landingStyles.js";

/**
 * Outcome section for product value.
 *
 * It focuses on practical officer benefits instead of marketing-heavy copy.
 */
export function OutcomeSection() {
  return (
    <section className={`bg-white ${sectionPad}`} id="about" aria-labelledby="outcomes-title">
      <div className={pageShell}>
        <SectionHeader id="outcomes-title" title="Why It Matters" subtitle="Designed for better project decisions." />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {outcomes.map((outcome) => (
            <article key={outcome.title} className="rounded-lg border border-[#d5e1ec] bg-[#f8fbfe] p-5">
              <span className="grid size-11 place-items-center rounded-lg bg-white text-[#075db7] shadow-sm">
                <LandingIcon name={outcome.icon} />
              </span>
              <h3 className="mt-4 text-lg font-black text-[#052b63]">{outcome.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#526276]">{outcome.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

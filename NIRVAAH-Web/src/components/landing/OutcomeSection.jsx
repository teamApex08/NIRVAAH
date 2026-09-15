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
          {outcomes.map((outcome, index) => {
            const accents = ["border-l-[#0b2545]", "border-l-[#15803d]", "border-l-[#d97706]", "border-l-[#b91c1c]", "border-l-[#475569]"];
            const icons = ["bg-[#f2f5f8] text-[#0b2545]", "bg-[#ecfdf3] text-[#166534]", "bg-[#fff7ed] text-[#b45309]", "bg-[#fef2f2] text-[#b91c1c]", "bg-[#f1f5f9] text-[#334155]"];

            return (
            <article key={outcome.title} className={`rounded-md border border-l-4 border-[#c9d6e2] bg-[#fbfcfd] p-5 ${accents[index % accents.length]}`}>
              <span className={`grid size-11 place-items-center rounded-md shadow-sm ${icons[index % icons.length]}`}>
                <LandingIcon name={outcome.icon} />
              </span>
              <h3 className="mt-4 text-lg font-black text-[#0b2545]">{outcome.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#526276]">{outcome.text}</p>
            </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import React from "react";
import { LandingIcon } from "./LandingIcon.jsx";
import { SectionHeader } from "./SectionHeader.jsx";
import { capabilities } from "./landingData.js";
import { pageShell, sectionPad } from "./landingStyles.js";

/**
 * Shows the four main intelligence capabilities NIRVAAH provides.
 */
export function CapabilitySection() {
  return (
    <section className={`bg-[#f6f9fc] ${sectionPad}`} aria-labelledby="capabilities-title">
      <div className={pageShell}>
        <SectionHeader
          id="capabilities-title"
          title="Decision Intelligence for Infrastructure Monitoring"
          subtitle="Four connected capabilities: predict, prioritise, explain and decide."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {capabilities.map((card) => (
            <CapabilityCard key={card.title} card={card} />
          ))}
        </div>
        <p className="mt-6 rounded-lg border border-[#d5e1ec] bg-white px-4 py-3 text-center text-sm font-bold text-[#075db7] shadow-sm">
          Evidence-based · Explainable · Transparent · Action-oriented
        </p>
      </div>
    </section>
  );
}

/**
 * Reusable capability card used by CapabilitySection.
 */
function CapabilityCard({ card }) {
  return (
    <article className="rounded-lg border border-[#d5e1ec] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_16px_38px_rgba(5,43,99,0.10)]">
      <span className="grid size-12 place-items-center rounded-lg bg-[#edf8f5] text-[#0b8a7a]">
        <LandingIcon name={card.icon} />
      </span>
      <p className="mt-5 text-sm font-black uppercase text-[#075db7]">{card.eyebrow}</p>
      <h3 className="mt-2 text-xl font-black text-[#052b63]">{card.title}</h3>
      <p className="mt-3 text-sm leading-6 text-[#526276]">{card.text}</p>
    </article>
  );
}

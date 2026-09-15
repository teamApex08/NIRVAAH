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
    <section className={`bg-[#f3f6f8] ${sectionPad}`} aria-labelledby="capabilities-title">
      <div className={pageShell}>
        <SectionHeader
          id="capabilities-title"
          title="Decision Intelligence for Infrastructure Monitoring"
          subtitle="Four connected capabilities: predict, prioritise, explain and decide."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {capabilities.map((card, index) => (
            <CapabilityCard key={card.title} card={card} index={index} />
          ))}
        </div>
        <p className="mt-6 rounded-md border border-[#c9d6e2] bg-white px-4 py-3 text-center text-sm font-bold text-[#0b2545] shadow-sm">
          Evidence-based · Explainable · Transparent · Action-oriented
        </p>
      </div>
    </section>
  );
}

/**
 * Reusable capability card used by CapabilitySection.
 */
function CapabilityCard({ card, index }) {
  const accentClasses = [
    "border-t-[#0b2545] bg-white",
    "border-t-[#15803d] bg-[#fbfffc]",
    "border-t-[#d97706] bg-[#fffdf8]",
    "border-t-[#475569] bg-white",
  ];
  const iconClasses = ["bg-[#f2f5f8] text-[#0b2545]", "bg-[#ecfdf3] text-[#166534]", "bg-[#fff7ed] text-[#b45309]", "bg-[#f1f5f9] text-[#334155]"];

  return (
    <article className={`rounded-md border border-t-4 border-[#c9d6e2] p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#d97706] hover:shadow-[0_16px_38px_rgba(5,43,99,0.10)] ${accentClasses[index % accentClasses.length]}`}>
      <span className={`grid size-12 place-items-center rounded-md ${iconClasses[index % iconClasses.length]}`}>
        <LandingIcon name={card.icon} />
      </span>
      <p className="mt-5 text-sm font-black uppercase text-[#b45309]">{card.eyebrow}</p>
      <h3 className="mt-2 text-xl font-black text-[#0b2545]">{card.title}</h3>
      <p className="mt-3 text-sm leading-6 text-[#526276]">{card.text}</p>
    </article>
  );
}

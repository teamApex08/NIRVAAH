import React from "react";
import { LandingIcon } from "./LandingIcon.jsx";
import { compactSectionPad, pageShell, secondaryButton } from "./landingStyles.js";

/**
 * Trust/context section that explains which project data the prototype uses.
 */
export function DataCredibility() {
  return (
    <section className={`bg-[#f3f6f8] ${compactSectionPad}`} id="data-methods" aria-labelledby="data-title">
      <div className={`${pageShell}`}>
        <div className="grid gap-6 rounded-md border border-l-4 border-[#c9d6e2] border-l-[#15803d] bg-white p-6 shadow-sm lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-[#0b2545]/20 bg-[#f2f5f8] px-3 py-1.5 text-xs font-bold uppercase text-[#0b2545]">
              Data & Methods
            </p>
            <h2 id="data-title" className="text-3xl font-black text-[#0b2545]">
              Built using PAIMANA/OCMS project data
            </h2>
            <p className="mt-3 max-w-3xl text-base leading-7 text-[#526276]">
              Prototype uses publicly available recurring project records with a clear architecture for richer PAIMANA
              integration.
            </p>
          </div>
          <a className={secondaryButton} href="#how-it-works">
            Explore Data & Methods
            <LandingIcon name="arrow" className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

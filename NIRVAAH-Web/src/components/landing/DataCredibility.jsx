import React from "react";
import { LandingIcon } from "./LandingIcon.jsx";
import { compactSectionPad, pageShell, secondaryButton } from "./landingStyles.js";

/**
 * Trust/context section that explains which project data the prototype uses.
 */
export function DataCredibility() {
  return (
    <section className={`bg-[#f6f9fc] ${compactSectionPad}`} id="data-methods" aria-labelledby="data-title">
      <div className={`${pageShell}`}>
        <div className="grid gap-6 rounded-lg border border-[#d5e1ec] bg-white p-6 shadow-sm lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-[#075db7]/20 bg-[#e9f3fd] px-3 py-1.5 text-xs font-bold uppercase text-[#075db7]">
              Data & Methods
            </p>
            <h2 id="data-title" className="text-3xl font-black text-[#052b63]">
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

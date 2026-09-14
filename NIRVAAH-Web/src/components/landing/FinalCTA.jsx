import React from "react";
import { LandingIcon } from "./LandingIcon.jsx";
import { inverseButton, pageShell } from "./landingStyles.js";

/**
 * Final conversion section at the bottom of the page.
 */
export function FinalCTA() {
  return (
    <section className="bg-[#052b63] py-14 text-white sm:py-16">
      <div className={`${pageShell} grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center`}>
        <div>
          <h2 className="text-3xl font-black sm:text-4xl">Turn project data into early action.</h2>
          <p className="mt-3 max-w-3xl text-base leading-7 text-white/[0.78]">
            Identify emerging infrastructure risks, understand their drivers and prioritise intervention.
          </p>
        </div>
        <a className={inverseButton} href="/command-centre">
          Open Intelligence Command Centre
          <LandingIcon name="arrow" className="size-4" />
        </a>
      </div>
    </section>
  );
}

import React from "react";
import { CapabilitySection } from "../components/landing/CapabilitySection.jsx";
import { CommandCentrePreview } from "../components/landing/CommandCentrePreview.jsx";
import { DataCredibility } from "../components/landing/DataCredibility.jsx";
import { DecisionFlow } from "../components/landing/DecisionFlow.jsx";
import { FinalCTA } from "../components/landing/FinalCTA.jsx";
import { HeroSection } from "../components/landing/HeroSection.jsx";
import { HowItWorksSection } from "../components/landing/HowItWorksSection.jsx";
import { LandingFooter } from "../components/landing/LandingFooter.jsx";
import { LandingHeader } from "../components/landing/LandingHeader.jsx";
import { OutcomeSection } from "../components/landing/OutcomeSection.jsx";

/**
 * Route-level page for /.
 *
 * This file intentionally stays thin: all landing-specific sections and dummy
 * data live in src/components/landing so beginners can find page parts quickly.
 */
function LandingPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f6f9fc] text-[#10233d]">
      <a
        className="fixed left-3 top-3 z-[100] -translate-y-24 rounded-md bg-[#052b63] px-3 py-2 text-sm font-bold text-white transition focus:translate-y-0"
        href="#main"
      >
        Skip to main content
      </a>
      <LandingHeader />
      <main id="main">
        <HeroSection />
        <DecisionFlow />
        <CapabilitySection />
        <CommandCentrePreview />
        <HowItWorksSection />
        <OutcomeSection />
        <DataCredibility />
        <FinalCTA />
      </main>
      <LandingFooter />
    </div>
  );
}

export default LandingPage;

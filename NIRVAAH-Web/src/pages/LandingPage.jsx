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


function LandingPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f6f9fc] text-[#10233d]">
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

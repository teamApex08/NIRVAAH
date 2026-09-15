import React from "react";
import { riskTabs } from "./riskIntelligenceData.js";

/**
 * Analysis-mode tabs for the Risk Intelligence workspace.
 */
export function RiskTabs() {
  return (
    <nav className="flex min-w-0 gap-2 overflow-x-auto border-b border-[#d5e1ec]" aria-label="Risk intelligence sections">
      {riskTabs.map((tab, index) => (
        <button
          className={[
            "min-h-11 shrink-0 border-b-2 px-4 text-sm font-black transition",
            index === 0
              ? "border-[#b91c1c] bg-[#fef2f2] text-[#0b2545]"
              : "border-transparent text-[#526276] hover:border-[#b8c9da] hover:text-[#0b2545]",
          ].join(" ")}
          key={tab}
          type="button"
        >
          {tab}
        </button>
      ))}
    </nav>
  );
}

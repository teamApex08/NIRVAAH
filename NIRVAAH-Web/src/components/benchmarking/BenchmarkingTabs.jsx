import React from "react";
import { cx } from "../../lib/formatters.js";
import { benchmarkTabs } from "./benchmarkingData.js";

/**
 * Benchmark view tabs.
 *
 * They are static in the prototype, but keeping them as anchors gives the UI
 * the same feel as a future tabbed workspace.
 */
export function BenchmarkingTabs() {
  return (
    <nav className="flex min-w-0 gap-2 overflow-x-auto border-b border-[#cfdcea] pb-2" aria-label="Benchmark views">
      {benchmarkTabs.map((tab, index) => (
        <a
          className={cx(
            "nirvaah-tab",
            index === 0 && "border-[#d97706] bg-[#fff8ed] text-[#0b2545]",
          )}
          href="#sector-performance"
          aria-current={index === 0 ? "page" : undefined}
          key={tab}
        >
          {tab}
        </a>
      ))}
    </nav>
  );
}

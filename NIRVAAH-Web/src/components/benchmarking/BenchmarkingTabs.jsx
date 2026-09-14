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
            "inline-flex min-h-10 shrink-0 items-center border-b-2 border-transparent px-3 text-sm font-black text-[#526276]",
            index === 0 && "border-[#075db7] text-[#075db7]",
          )}
          href="#sector-performance"
          key={tab}
        >
          {tab}
        </a>
      ))}
    </nav>
  );
}

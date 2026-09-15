import React from "react";
import { reportTabs } from "./reportsExportData.js";
import { cx } from "../../lib/formatters.js";

/**
 * Top-level report workflow tabs.
 *
 * They are static in the prototype. Later, each tab can become an actual
 * filtered view while keeping this same component.
 */
export function ReportsTabs() {
  return (
    <nav className="flex min-w-0 gap-2 overflow-x-auto border-b border-[#d5e1ec]" aria-label="Report sections">
      {reportTabs.map((tab, index) => (
        <button
          className={cx("nirvaah-tab", index === 0 && "border-[#15803d] bg-[#ecfdf3] text-[#0b2545]")}
          aria-current={index === 0 ? "page" : undefined}
          key={tab}
          type="button"
        >
          {tab}
        </button>
      ))}
    </nav>
  );
}

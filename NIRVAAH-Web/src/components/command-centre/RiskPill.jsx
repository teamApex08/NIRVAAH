import React from "react";
import { cx } from "../../lib/formatters.js";

// Maps risk labels to the visual treatment used wherever risk status appears.
const riskStyles = {
  Critical: "bg-red-600 text-white",
  High: "bg-red-50 text-red-700 ring-red-600/20",
  Moderate: "bg-yellow-50 text-yellow-700 ring-yellow-600/20",
  Low: "bg-emerald-50 text-emerald-700 ring-emerald-600/20",
};

/**
 * Status badge for project risk levels.
 */
export function RiskPill({ risk }) {
  return (
    <span className={cx("inline-flex rounded-md px-2.5 py-1 text-xs font-black ring-1 ring-inset", riskStyles[risk])}>
      {risk}
    </span>
  );
}

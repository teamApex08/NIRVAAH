import React from "react";
import { cx } from "../../lib/formatters.js";

// Visual styles for each risk band shown in project rows and detail panels.
const riskStyles = {
  Critical: "bg-red-600 text-white ring-red-600",
  High: "bg-red-50 text-red-700 ring-red-600/20",
  Moderate: "bg-orange-50 text-orange-700 ring-orange-600/20",
  Low: "bg-emerald-50 text-emerald-700 ring-emerald-600/20",
};

/**
 * Small badge for a project's risk level.
 */
export function ProjectRiskPill({ risk }) {
  return (
    <span
      className={cx(
        "inline-flex w-fit rounded-md px-2.5 py-1 text-xs font-black ring-1 ring-inset",
        riskStyles[risk] ?? riskStyles.Moderate,
      )}
    >
      {risk}
    </span>
  );
}

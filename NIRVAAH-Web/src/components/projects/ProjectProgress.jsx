import React from "react";

// Progress bar color is based on project risk, not only percentage complete.
const progressColor = {
  Critical: "bg-red-600",
  High: "bg-orange-500",
  Moderate: "bg-yellow-500",
  Low: "bg-emerald-500",
};

/**
 * Compact physical-progress meter for table rows and project detail.
 */
export function ProjectProgress({ value, risk }) {
  return (
    <span className="grid min-w-28 gap-1">
      <strong className="text-xs font-black text-[#0b2545]">{value}%</strong>
      <span className="h-2 overflow-hidden rounded-full bg-[#dce8f3]">
        <i className={`block h-full rounded-full ${progressColor[risk] ?? progressColor.Moderate}`} style={{ width: `${value}%` }} />
      </span>
    </span>
  );
}

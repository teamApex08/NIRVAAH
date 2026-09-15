import React from "react";
import { cx } from "../../lib/formatters.js";

const severityStyles = {
  Critical: "bg-red-600 text-white ring-red-600",
  High: "bg-red-50 text-red-700 ring-red-600/20",
  Moderate: "bg-orange-50 text-orange-700 ring-orange-600/20",
  Low: "bg-emerald-50 text-emerald-700 ring-emerald-600/20",
};

const statusStyles = {
  New: "bg-red-50 text-red-700 ring-red-600/15",
  "Under Review": "bg-[#f2f5f8] text-[#0b2545] ring-[#0b2545]/15",
  "Action Required": "bg-[#fff7ed] text-[#b45309] ring-[#d97706]/20",
  Acknowledged: "bg-sky-50 text-sky-700 ring-sky-600/15",
  Resolved: "bg-emerald-50 text-emerald-700 ring-emerald-600/15",
};

const confidenceStyles = {
  High: "bg-emerald-50 text-emerald-700 ring-emerald-600/15",
  Medium: "bg-orange-50 text-orange-700 ring-orange-600/15",
  Low: "bg-slate-100 text-slate-600 ring-slate-500/15",
};

/**
 * Warning-specific badges keep risk, status and confidence colors consistent.
 */
export function WarningSeverityPill({ severity }) {
  return (
    <span className={cx("inline-flex w-fit rounded-md px-2.5 py-1 text-xs font-black ring-1 ring-inset", severityStyles[severity])}>
      {severity}
    </span>
  );
}

export function WarningStatusPill({ status }) {
  return (
    <span className={cx("inline-flex w-fit rounded-md px-2.5 py-1 text-xs font-black ring-1 ring-inset", statusStyles[status])}>
      {status}
    </span>
  );
}

export function ConfidencePill({ confidence }) {
  return (
    <span
      className={cx("inline-flex w-fit rounded-md px-2.5 py-1 text-xs font-black ring-1 ring-inset", confidenceStyles[confidence])}
    >
      {confidence}
    </span>
  );
}

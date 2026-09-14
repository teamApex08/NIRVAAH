import React from "react";
import { cx } from "../../lib/formatters.js";

const tones = {
  blue: "bg-[#e9f3fd] text-[#075db7] ring-[#075db7]/15",
  green: "bg-emerald-50 text-emerald-700 ring-emerald-600/15",
  orange: "bg-orange-50 text-orange-700 ring-orange-600/15",
  red: "bg-red-50 text-red-700 ring-red-600/15",
  slate: "bg-slate-100 text-slate-600 ring-slate-500/15",
};

export function Pill({ tone = "blue", className, children }) {
  return (
    <span className={cx("inline-flex w-fit items-center rounded-full px-2.5 py-1 text-xs font-bold ring-1", tones[tone], className)}>
      {children}
    </span>
  );
}

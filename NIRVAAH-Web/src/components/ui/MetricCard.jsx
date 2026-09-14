import React from "react";
import { cx } from "../../lib/formatters.js";

const toneClasses = {
  blue: "bg-blue-50 text-blue-700",
  green: "bg-emerald-50 text-emerald-700",
  orange: "bg-orange-50 text-orange-700",
  red: "bg-red-50 text-red-700",
  purple: "bg-violet-50 text-violet-700",
};

export function MetricCard({ icon: Icon, label, value, note, tone = "blue" }) {
  return (
    <article className="rounded-lg border border-[#d5e1ec] bg-white p-4 shadow-sm">
      <div className="flex items-start gap-3">
        {Icon && (
          <span className={cx("grid size-11 shrink-0 place-items-center rounded-lg", toneClasses[tone])}>
            <Icon className="size-5" aria-hidden="true" />
          </span>
        )}
        <div className="min-w-0">
          <p className="text-xs font-bold text-[#526276]">{label}</p>
          <strong className="mt-1 block text-2xl font-black leading-tight text-[#052b63]">{value}</strong>
          {note && <span className="mt-1 block text-xs font-semibold text-[#748397]">{note}</span>}
        </div>
      </div>
    </article>
  );
}

import React from "react";
import { cx } from "../../lib/formatters.js";

// Tone classes decide the background and text color for each metric icon.
const toneClasses = {
  blue: "border-[#0b2545]/15 bg-[#f2f5f8] text-[#0b2545]",
  green: "border-[#15803d]/20 bg-[#ecfdf3] text-[#166534]",
  orange: "border-[#d97706]/20 bg-[#fff7ed] text-[#b45309]",
  red: "border-[#b91c1c]/20 bg-[#fef2f2] text-[#b91c1c]",
  purple: "border-[#475569]/20 bg-[#f1f5f9] text-[#334155]",
  slate: "border-[#475569]/20 bg-[#f1f5f9] text-[#334155]",
};

const accentClasses = {
  blue: "border-l-[#0b2545]",
  green: "border-l-[#15803d]",
  orange: "border-l-[#d97706]",
  red: "border-l-[#b91c1c]",
  purple: "border-l-[#475569]",
  slate: "border-l-[#475569]",
};

/**
 * KPI card used for dashboard summary numbers.
 *
 * icon is a lucide-react component, label explains the metric, value is the
 * large number, and note gives supporting context.
 */
export function MetricCard({ className, icon: Icon, label, value, note, tone = "blue", priority = "default" }) {
  const isPrimary = priority === "primary";

  return (
    <article
      className={cx(
        "min-w-0 rounded-[8px] border border-l-4 border-[#c9d6e2] bg-white p-4 shadow-[0_1px_2px_rgba(15,23,42,0.04)]",
        isPrimary && "bg-[#fbfcfd]",
        accentClasses[tone],
        className,
      )}
    >
      <div className="flex items-start gap-3">
        {Icon && (
          <span className={cx("grid size-9 shrink-0 place-items-center rounded-[6px] border", toneClasses[tone])}>
            <Icon className="size-5" aria-hidden="true" />
          </span>
        )}
        <div className="min-w-0">
          <p className="text-[11px] font-black uppercase text-[#748397]">{label}</p>
          <strong className={cx("mt-1 block break-words font-black leading-tight text-[#0b2545]", isPrimary ? "text-3xl" : "text-2xl")}>{value}</strong>
          {note && <span className="mt-1 block text-xs font-semibold leading-5 text-[#64748b]">{note}</span>}
        </div>
      </div>
    </article>
  );
}

import React from "react";
import { cx } from "../../lib/formatters.js";

// Small status chips use tone names instead of raw Tailwind classes at call sites.
const tones = {
  blue: "bg-[#f2f5f8] text-[#0b2545] ring-[#0b2545]/15",
  green: "bg-[#ecfdf3] text-[#166534] ring-[#15803d]/18",
  orange: "bg-[#fff7ed] text-[#b45309] ring-[#d97706]/20",
  red: "bg-[#fef2f2] text-[#b91c1c] ring-[#b91c1c]/18",
  slate: "bg-[#f1f5f9] text-[#475569] ring-[#475569]/18",
  purple: "bg-[#f1f5f9] text-[#334155] ring-[#475569]/18",
  neutral: "bg-white text-[#526276] ring-[#c9d6e2]",
};

/**
 * Compact label component for filters, status badges, and metadata.
 */
export function Pill({ tone = "blue", className, children }) {
  return (
    <span className={cx("inline-flex w-fit items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-black leading-none ring-1", tones[tone], className)}>
      {children}
    </span>
  );
}

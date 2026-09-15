import React from "react";
import { quickActions } from "./earlyWarningsData.js";
import { cx } from "../../lib/formatters.js";

const actionTone = {
  blue: "border border-[#0b2545]/15 bg-[#f2f5f8] text-[#0b2545]",
  red: "border border-[#b91c1c]/20 bg-[#fef2f2] text-[#b91c1c]",
  purple: "border border-[#475569]/20 bg-[#f1f5f9] text-[#334155]",
  green: "border border-[#15803d]/20 bg-[#ecfdf3] text-[#166534]",
};

/**
 * Quick actions appear at the bottom so the page keeps review first, actions second.
 */
export function WarningQuickActions() {
  return (
    <section className="grid min-w-0 gap-3 sm:grid-cols-2 xl:grid-cols-4" aria-label="Early warning quick actions">
      {quickActions.map(({ icon: Icon, title, description, tone }) => (
        <button
          className="grid min-h-24 grid-cols-[44px_1fr] gap-3 rounded-md border border-[#c9d6e2] bg-white p-4 text-left shadow-sm transition hover:border-[#d97706] hover:bg-[#fffdf8]"
          type="button"
          key={title}
        >
          <span className={cx("grid size-11 place-items-center rounded-md", actionTone[tone])}>
            <Icon className="size-5" aria-hidden="true" />
          </span>
          <span className="min-w-0">
            <strong className="block text-sm font-black text-[#0b2545]">{title}</strong>
            <span className="mt-1 block text-sm leading-5 text-[#526276]">{description}</span>
          </span>
        </button>
      ))}
    </section>
  );
}

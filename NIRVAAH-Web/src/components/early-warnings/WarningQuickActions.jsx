import React from "react";
import { quickActions } from "./earlyWarningsData.js";
import { cx } from "../../lib/formatters.js";

const actionTone = {
  blue: "bg-blue-50 text-blue-700",
  red: "bg-red-50 text-red-700",
  purple: "bg-violet-50 text-violet-700",
  green: "bg-emerald-50 text-emerald-700",
};

/**
 * Quick actions appear at the bottom so the page keeps review first, actions second.
 */
export function WarningQuickActions() {
  return (
    <section className="grid min-w-0 gap-3 sm:grid-cols-2 xl:grid-cols-4" aria-label="Early warning quick actions">
      {quickActions.map(({ icon: Icon, title, description, tone }) => (
        <button
          className="grid min-h-24 grid-cols-[44px_1fr] gap-3 rounded-lg border border-[#d5e1ec] bg-white p-4 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-[#075db7]"
          type="button"
          key={title}
        >
          <span className={cx("grid size-11 place-items-center rounded-lg", actionTone[tone])}>
            <Icon className="size-5" aria-hidden="true" />
          </span>
          <span className="min-w-0">
            <strong className="block text-sm font-black text-[#052b63]">{title}</strong>
            <span className="mt-1 block text-sm leading-5 text-[#526276]">{description}</span>
          </span>
        </button>
      ))}
    </section>
  );
}

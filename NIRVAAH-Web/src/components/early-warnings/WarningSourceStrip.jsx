import React from "react";
import { warningSourceCards } from "./earlyWarningsData.js";

/**
 * Source strip explains the reporting period and model context for warnings.
 */
export function WarningSourceStrip() {
  return (
    <section className="grid min-w-0 gap-3 sm:grid-cols-2 xl:grid-cols-4" aria-label="Warning data sources">
      {warningSourceCards.map(({ icon: Icon, label, value, note }) => (
        <article className="min-w-0 rounded-lg border border-[#d5e1ec] bg-white p-4 shadow-sm" key={label}>
          <div className="flex items-start gap-3">
            <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-[#f2f5f8] text-[#0b2545]">
              <Icon className="size-5" aria-hidden="true" />
            </span>
            <div className="min-w-0">
              <p className="text-xs font-black uppercase tracking-wide text-[#526276]">{label}</p>
              <strong className="mt-1 block text-sm font-black leading-5 text-[#0b2545]">{value}</strong>
              <span className="mt-1 block text-xs font-semibold leading-5 text-[#748397]">{note}</span>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}

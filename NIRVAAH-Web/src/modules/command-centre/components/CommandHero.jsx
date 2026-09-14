import React from "react";
import { Pill } from "../../../components/ui/Pill.jsx";

/**
 * Top summary area for the Command Centre route.
 *
 * It gives users the reporting context before they scan KPIs and tables.
 */
export function CommandHero() {
  return (
    <section className="grid gap-4 border-b border-[#d5e1ec] bg-[linear-gradient(115deg,#eaf6ff_0%,#f8fbfe_48%,#d9efff_100%)] px-4 py-5 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-center lg:px-8">
      <div>
        <Pill>PAIMANA July 2026 · Risk model v0.3</Pill>
        <h1 id="command-title" className="mt-3 text-3xl font-black leading-tight text-[#052b63] sm:text-4xl">
          Command Centre
        </h1>
        <p className="mt-2 text-base font-bold text-[#075db7] sm:text-lg">Monitor. Analyse. Predict. Enable Action.</p>
        <span className="mt-2 block text-sm font-semibold text-[#526276]">
          National infrastructure portfolio intelligence · Updated 21 Aug 2026
        </span>
      </div>
      {/* Coverage card explains that current prototype risk scoring covers a subset. */}
      <aside className="w-full rounded-lg border border-[#075db7]/20 bg-white/[0.85] p-4 shadow-sm lg:w-64">
        <span className="text-xs font-bold text-[#526276]">Risk Assessment Coverage</span>
        <strong className="mt-1 block text-2xl font-black text-[#052b63]">42 / 1,775</strong>
        <small className="text-xs font-semibold text-[#748397]">2.4% current model coverage</small>
      </aside>
    </section>
  );
}

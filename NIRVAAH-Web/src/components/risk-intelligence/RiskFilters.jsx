import React from "react";
import { Filter, RefreshCcw, Search } from "lucide-react";
import { Button } from "../ui/Button.jsx";
import { riskFilters } from "./riskIntelligenceData.js";

/**
 * Filter controls for risk analysis.
 *
 * Fields are static in the prototype. Keeping them data-driven makes future
 * filter state and backend query parameters easier to add.
 */
export function RiskFilters() {
  return (
    <section className="rounded-md border border-l-4 border-[#c9d6e2] border-l-[#b91c1c] bg-white p-4 shadow-sm" aria-label="Risk intelligence filters">
      <div className="mb-4 flex items-start gap-3">
        <span className="grid size-10 shrink-0 place-items-center rounded-md bg-[#fef2f2] text-[#b91c1c]">
          <Filter className="size-5" aria-hidden="true" />
        </span>
        <div>
          <h2 className="text-lg font-black text-[#0b2545]">Analysis Filters</h2>
          <p className="mt-1 text-sm leading-6 text-[#526276]">Focus risk signals by ministry, sector, geography, severity or signal type.</p>
        </div>
      </div>
      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6">
        {riskFilters.map((filter) => (
          <label className="grid gap-1.5" key={filter.label}>
            <span className="text-xs font-black uppercase tracking-wide text-[#526276]">{filter.label}</span>
            <select className="min-h-11 rounded-md border border-[#cfdcea] bg-white px-3 text-sm font-bold text-[#10233d] outline-none focus:border-[#d97706] focus:ring-4 focus:ring-[#d97706]/15">
              {filter.options.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </label>
        ))}
        <label className="grid gap-1.5 md:col-span-2 xl:col-span-1">
          <span className="text-xs font-black uppercase tracking-wide text-[#526276]">Search</span>
          <span className="grid min-h-11 grid-cols-[auto_1fr] items-center gap-2 rounded-md border border-[#cfdcea] bg-white px-3">
            <Search className="size-4 text-[#748397]" aria-hidden="true" />
            <input
              className="min-w-0 bg-transparent text-sm font-semibold text-[#10233d] outline-none placeholder:text-[#8a98aa]"
              placeholder="Search project or risk driver..."
              type="search"
            />
          </span>
        </label>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        <Button type="button" variant="secondary">
          <RefreshCcw className="size-4" aria-hidden="true" />
          Reset
        </Button>
        <Button type="button">Apply Filters</Button>
      </div>
    </section>
  );
}

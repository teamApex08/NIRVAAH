import React from "react";
import { Bookmark, RotateCcw, SlidersHorizontal } from "lucide-react";
import { Button } from "../ui/Button.jsx";
import { benchmarkFilters } from "./benchmarkingData.js";

/**
 * Cohort filters for benchmarking.
 *
 * These are visual controls today. When backend filtering is added, this
 * component can own the filter state and pass the query upward.
 */
export function BenchmarkingFilters() {
  return (
    <section className="rounded-lg border border-[#d5e1ec] bg-white p-4 shadow-sm" aria-label="Benchmarking filters">
      <div className="mb-4 flex items-start gap-3">
        <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-[#e9f3fd] text-[#075db7]">
          <SlidersHorizontal className="size-5" aria-hidden="true" />
        </span>
        <div>
          <h2 className="text-lg font-black text-[#052b63]">Cohort Filters</h2>
          <p className="mt-1 text-sm leading-6 text-[#526276]">Choose the projects, ministries, states and risk levels to compare.</p>
        </div>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
        {benchmarkFilters.map((filter) => (
          <label className="grid gap-1.5" key={filter.label}>
            <span className="text-xs font-black uppercase tracking-wide text-[#526276]">{filter.label}</span>
            <select className="min-h-11 rounded-md border border-[#cfdcea] bg-white px-3 text-sm font-bold text-[#10233d] outline-none focus:border-[#075db7] focus:ring-4 focus:ring-[#075db7]/15">
              {filter.options.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </label>
        ))}
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        <Button type="button" variant="secondary">
          <RotateCcw className="size-4" aria-hidden="true" />
          Reset
        </Button>
        <Button type="button">Apply Filters</Button>
        <Button type="button" variant="secondary">
          <Bookmark className="size-4" aria-hidden="true" />
          Save View
        </Button>
      </div>
    </section>
  );
}

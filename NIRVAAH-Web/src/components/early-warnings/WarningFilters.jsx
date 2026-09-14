import React from "react";
import { Bookmark, RotateCcw, Search, SlidersHorizontal } from "lucide-react";
import { Button } from "../ui/Button.jsx";
import { warningFilters } from "./earlyWarningsData.js";

/**
 * Filter controls for the warning queue.
 *
 * The fields are visual today. They are grouped here so wiring filter state
 * later will not clutter the route component.
 */
export function WarningFilters() {
  return (
    <section className="rounded-lg border border-[#d5e1ec] bg-white p-4 shadow-sm" aria-label="Warning filters">
      <div className="mb-4 flex items-start gap-3">
        <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-[#e9f3fd] text-[#075db7]">
          <SlidersHorizontal className="size-5" aria-hidden="true" />
        </span>
        <div>
          <h2 className="text-lg font-black text-[#052b63]">Filters</h2>
          <p className="mt-1 text-sm leading-6 text-[#526276]">Find warnings by ministry, severity, status, confidence or project.</p>
        </div>
      </div>
      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        {warningFilters.map((filter) => (
          <label className="grid gap-1.5" key={filter.label}>
            <span className="text-xs font-black uppercase tracking-wide text-[#526276]">{filter.label}</span>
            <select className="min-h-11 rounded-md border border-[#cfdcea] bg-white px-3 text-sm font-bold text-[#10233d] outline-none focus:border-[#075db7] focus:ring-4 focus:ring-[#075db7]/15">
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
              placeholder="Search project, warning ID..."
              type="search"
            />
          </span>
        </label>
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

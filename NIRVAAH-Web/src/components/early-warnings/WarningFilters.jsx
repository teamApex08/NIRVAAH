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
    <section className="nirvaah-panel p-4" aria-label="Warning filters">
      <div className="mb-4 flex items-start gap-3">
        <span className="grid size-10 shrink-0 place-items-center rounded-[6px] bg-[#fff7ed] text-[#b45309]">
          <SlidersHorizontal className="size-5" aria-hidden="true" />
        </span>
        <div>
          <h2 className="nirvaah-section-title">Filter Warning Queue</h2>
          <p className="mt-1 text-sm leading-6 text-[#526276]">Find warnings by ministry, severity, status, confidence or project.</p>
        </div>
      </div>
      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        {warningFilters.map((filter) => (
          <label className="grid gap-1.5" key={filter.label}>
            <span className="text-xs font-black uppercase tracking-wide text-[#526276]">{filter.label}</span>
            <select className="nirvaah-field px-3">
              {filter.options.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </label>
        ))}
        <label className="grid gap-1.5 md:col-span-2 xl:col-span-1">
          <span className="text-xs font-black uppercase tracking-wide text-[#526276]">Search</span>
          <span className="nirvaah-field grid grid-cols-[auto_1fr] items-center gap-2 px-3">
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

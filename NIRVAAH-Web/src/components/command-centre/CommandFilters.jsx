import React from "react";
import { RotateCcw, SlidersHorizontal } from "lucide-react";
import { filters } from "./commandCentreData.js";

/**
 * Filter chip row for narrowing the portfolio.
 *
 * These controls are visual placeholders today. When the backend API is wired,
 * each chip can open a menu and update the dashboard query.
 */
export function CommandFilters() {
  return (
    <section className="flex flex-wrap gap-2" aria-label="Command Centre filters">
      {filters.map((filter) => (
        <button
          className="min-h-9 rounded-full border border-[#d5e1ec] bg-white px-3 text-sm font-bold text-[#052b63] transition hover:bg-[#eef5fb]"
          type="button"
          key={filter}
        >
          {filter}
        </button>
      ))}
      <button
        className="inline-flex min-h-9 items-center gap-2 rounded-full border border-[#d5e1ec] bg-white px-3 text-sm font-bold text-[#052b63] transition hover:bg-[#eef5fb]"
        type="button"
      >
        <SlidersHorizontal className="size-4" aria-hidden="true" />
        More filters
      </button>
      <button
        className="inline-flex min-h-9 items-center gap-2 rounded-full border border-[#d5e1ec] bg-white px-3 text-sm font-bold text-[#052b63] transition hover:bg-[#eef5fb]"
        type="button"
      >
        <RotateCcw className="size-4" aria-hidden="true" />
        Reset
      </button>
    </section>
  );
}

import { RotateCcw, SlidersHorizontal } from "lucide-react";
import { filters } from "./commandCentreData.js";

export function CommandFilters() {
  return (
    <section className="nirvaah-panel flex flex-col gap-3 p-3 lg:flex-row lg:items-center" aria-label="Command Centre filters">
      <div className="min-w-[12rem]">
        <p className="nirvaah-kicker">Portfolio scope</p>
        <strong className="mt-1 block text-sm font-black text-[#0b2545]">July 2026 · All ministries</strong>
      </div>
      <div className="flex min-w-0 flex-1 flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            className="min-h-9 rounded-[6px] border border-[#c9d6e2] bg-white px-3 text-sm font-bold text-[#0b2545] transition hover:border-[#d97706] hover:bg-[#fff8ed]"
            type="button"
            key={filter}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap gap-2 lg:justify-end">
        <button
          className="inline-flex min-h-9 items-center gap-2 rounded-[6px] border border-[#c9d6e2] bg-white px-3 text-sm font-bold text-[#0b2545] transition hover:border-[#d97706] hover:bg-[#fff8ed]"
          type="button"
        >
          <SlidersHorizontal className="size-4" aria-hidden="true" />
          More filters
        </button>
        <button
          className="inline-flex min-h-9 items-center gap-2 rounded-[6px] border border-transparent bg-[#f8fafc] px-3 text-sm font-bold text-[#0b2545] transition hover:border-[#c9d6e2] hover:bg-white"
          type="button"
        >
          <RotateCcw className="size-4" aria-hidden="true" />
          Reset
        </button>
      </div>
    </section>
  );
}

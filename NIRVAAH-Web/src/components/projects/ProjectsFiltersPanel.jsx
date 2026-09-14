import React from "react";
import { RotateCcw, Search, SlidersHorizontal } from "lucide-react";
import { Button } from "../ui/Button.jsx";
import { Card, CardBody, CardHeader } from "../ui/Card.jsx";
import { cx } from "../../lib/formatters.js";
import { projectFilters } from "./projectsData.js";

/**
 * Left-side filter panel for the Projects workspace.
 *
 * Filters are presentational today. Keeping labels and options in
 * projectsData.js makes the UI easy to connect to backend query params later.
 */
export function ProjectsFiltersPanel({ className }) {
  return (
    <Card as="aside" className={cx("h-fit", className)} aria-label="Project filters">
      <CardHeader className="flex items-start gap-3">
        <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-[#e9f3fd] text-[#075db7]">
          <SlidersHorizontal className="size-5" aria-hidden="true" />
        </span>
        <div>
          <h2 className="text-lg font-black text-[#052b63]">Filters</h2>
          <p className="mt-1 text-sm leading-6 text-[#526276]">Narrow projects by ministry, geography, risk and status.</p>
        </div>
      </CardHeader>
      <CardBody className="grid gap-4">
        {projectFilters.map((filter) => (
          <label className="grid gap-1.5" key={filter.label}>
            <span className="text-xs font-black uppercase tracking-wide text-[#526276]">{filter.label}</span>
            {filter.type === "search" ? (
              <span className="grid min-h-11 grid-cols-[auto_1fr] items-center gap-2 rounded-md border border-[#cfdcea] bg-white px-3">
                <Search className="size-4 text-[#748397]" aria-hidden="true" />
                <input
                  className="min-w-0 bg-transparent text-sm font-semibold text-[#10233d] outline-none placeholder:text-[#8a98aa]"
                  placeholder={filter.placeholder}
                  type="search"
                />
              </span>
            ) : (
              <select className="min-h-11 rounded-md border border-[#cfdcea] bg-white px-3 text-sm font-bold text-[#10233d] outline-none focus:border-[#075db7] focus:ring-4 focus:ring-[#075db7]/15">
                {filter.options.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            )}
          </label>
        ))}
        <div className="grid gap-2 pt-1 sm:grid-cols-2 xl:grid-cols-1">
          <Button type="button" className="w-full">
            Apply Filters
          </Button>
          <Button type="button" variant="secondary" className="w-full">
            <RotateCcw className="size-4" aria-hidden="true" />
            Reset
          </Button>
        </div>
      </CardBody>
    </Card>
  );
}

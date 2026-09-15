import React from "react";
import { RotateCcw, Search, SlidersHorizontal } from "lucide-react";
import { Button } from "../ui/Button.jsx";
import { Card, CardBody, CardHeader } from "../ui/Card.jsx";
import { cx } from "../../lib/formatters.js";
import { projectFilters } from "./projectsData.js";

/**
 * Collapsible filter panel for the Projects workspace.
 *
 * Values are owned by the page so selections survive collapsed states and can
 * later be wired into backend query params.
 */
export function ProjectsFiltersPanel({ className, filterValues, id, isOpen, onFilterChange, onResetFilters }) {
  return (
    <section
      className={cx(
        "min-w-0 overflow-hidden transition-[max-height,opacity,transform,margin] duration-300 ease-out",
        isOpen ? "max-h-[900px] translate-y-0 opacity-100" : "pointer-events-none max-h-0 -translate-y-2 opacity-0",
        className,
      )}
      id={id}
      aria-hidden={!isOpen}
    >
      <Card as="aside" aria-label="Project filters">
        <CardHeader className="flex items-start gap-3">
          <span className="grid size-10 shrink-0 place-items-center rounded-[6px] bg-[#ecfdf3] text-[#166534]">
            <SlidersHorizontal className="size-5" aria-hidden="true" />
          </span>
          <div>
            <h2 className="nirvaah-section-title">Find Projects</h2>
            <p className="mt-1 text-sm leading-6 text-[#526276]">Narrow projects by ministry, geography, risk and status.</p>
          </div>
        </CardHeader>
        <CardBody className="grid gap-4">
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
            {projectFilters.map((filter) => (
              <label className="grid gap-1.5" key={filter.label}>
                <span className="text-xs font-black uppercase tracking-wide text-[#526276]">{filter.label}</span>
                {filter.type === "search" ? (
                  <span className="nirvaah-field grid grid-cols-[auto_1fr] items-center gap-2 px-3">
                    <Search className="size-4 text-[#748397]" aria-hidden="true" />
                    <input
                      className="min-w-0 bg-transparent text-sm font-semibold text-[#10233d] outline-none placeholder:text-[#8a98aa]"
                      disabled={!isOpen}
                      onChange={(event) => onFilterChange(filter.label, event.target.value)}
                      placeholder={filter.placeholder}
                      type="search"
                      value={filterValues[filter.label] ?? ""}
                    />
                  </span>
                ) : (
                  <select
                    className="nirvaah-field px-3"
                    disabled={!isOpen}
                    onChange={(event) => onFilterChange(filter.label, event.target.value)}
                    value={filterValues[filter.label] ?? filter.options[0]}
                  >
                    {filter.options.map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>
                )}
              </label>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            <Button type="button" disabled={!isOpen}>
              Apply Filters
            </Button>
            <Button type="button" variant="secondary" disabled={!isOpen} onClick={onResetFilters}>
              <RotateCcw className="size-4" aria-hidden="true" />
              Reset
            </Button>
          </div>
        </CardBody>
      </Card>
    </section>
  );
}

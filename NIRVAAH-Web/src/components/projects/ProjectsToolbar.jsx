import React from "react";
import { Bookmark, Download, Eye, SlidersHorizontal } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../ui/Button.jsx";
import { cx } from "../../lib/formatters.js";
import { projectTabs } from "./projectsData.js";

/**
 * View tabs and quick actions above the Projects workspace.
 */
export function ProjectsToolbar({ activeFilterCount = 0, filtersOpen, filtersPanelId, onToggleFilters }) {
  return (
    <section className="flex min-w-0 flex-col gap-3 border-b border-[#cfdcea] pb-3 xl:flex-row xl:items-end xl:justify-between">
      <nav className="flex gap-2 overflow-x-auto" aria-label="Project views">
        {projectTabs.map((tab, index) => (
          <a
            className={cx(
              "nirvaah-tab",
              index === 0 && "border-[#15803d] bg-[#ecfdf3] text-[#0b2545]",
            )}
            href="#projects-table"
            aria-current={index === 0 ? "page" : undefined}
            key={tab}
          >
            {tab}
          </a>
        ))}
      </nav>
      <div className="flex flex-wrap gap-2">
        <Button type="button" variant="secondary" className="min-h-10">
          <Bookmark className="size-4" aria-hidden="true" />
          Save View
        </Button>
        <Button
          type="button"
          variant={filtersOpen ? "primary" : "secondary"}
          className="min-h-10"
          aria-controls={filtersPanelId}
          aria-expanded={filtersOpen}
          aria-pressed={filtersOpen}
          onClick={onToggleFilters}
        >
          <SlidersHorizontal className="size-4" aria-hidden="true" />
          Filter
          {activeFilterCount > 0 ? (
            <span
              className={cx(
                "grid min-w-5 place-items-center rounded-full px-1.5 py-0.5 text-xs font-black leading-none",
                filtersOpen ? "bg-white text-[#0b2545]" : "bg-[#d97706] text-white",
              )}
              aria-label={`${activeFilterCount} active filters`}
            >
              {activeFilterCount}
            </span>
          ) : null}
        </Button>
        <Button type="button" variant="secondary" className="min-h-10">
          <Download className="size-4" aria-hidden="true" />
          Export
        </Button>
        <Button as={Link} to="/nirvaah/projects/PRJ-2025-014" className="min-h-10">
          <Eye className="size-4" aria-hidden="true" />
          Open Selected
        </Button>
      </div>
    </section>
  );
}

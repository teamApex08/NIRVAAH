import React from "react";
import { Bookmark, Download, Plus } from "lucide-react";
import { Button } from "../ui/Button.jsx";
import { cx } from "../../lib/formatters.js";
import { projectTabs } from "./projectsData.js";

/**
 * View tabs and quick actions above the Projects workspace.
 */
export function ProjectsToolbar() {
  return (
    <section className="flex min-w-0 flex-col gap-3 border-b border-[#cfdcea] pb-3 xl:flex-row xl:items-end xl:justify-between">
      <nav className="flex gap-2 overflow-x-auto" aria-label="Project views">
        {projectTabs.map((tab, index) => (
          <a
            className={cx(
              "inline-flex min-h-10 shrink-0 items-center border-b-2 border-transparent px-3 text-sm font-black text-[#526276]",
              index === 0 && "border-[#075db7] text-[#075db7]",
            )}
            href="#projects-table"
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
        <Button type="button" variant="secondary" className="min-h-10">
          <Download className="size-4" aria-hidden="true" />
          Export
        </Button>
        <Button type="button" className="min-h-10">
          <Plus className="size-4" aria-hidden="true" />
          Add to Watchlist
        </Button>
      </div>
    </section>
  );
}

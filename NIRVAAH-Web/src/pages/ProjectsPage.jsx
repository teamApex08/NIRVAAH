import React, { useMemo, useState } from "react";
import { ProjectPageHeader } from "../components/projects/ProjectPageHeader.jsx";
import { ProjectsFiltersPanel } from "../components/projects/ProjectsFiltersPanel.jsx";
import { ProjectsInsights } from "../components/projects/ProjectsInsights.jsx";
import { ProjectsKpiStrip } from "../components/projects/ProjectsKpiStrip.jsx";
import { ProjectsTable } from "../components/projects/ProjectsTable.jsx";
import { ProjectsToolbar } from "../components/projects/ProjectsToolbar.jsx";
import { SelectedProjectPanel } from "../components/projects/SelectedProjectPanel.jsx";
import { projectFilters } from "../components/projects/projectsData.js";

const filtersPanelId = "projects-filters-panel";

function getFilterDefaultValue(filter) {
  return filter.type === "search" ? "" : filter.options?.[0] ?? "";
}

function getInitialFilterValues() {
  return projectFilters.reduce((values, filter) => {
    values[filter.label] = getFilterDefaultValue(filter);
    return values;
  }, {});
}

/**
 * Route-level page for /nirvaah/projects.
 *
 * The pulled GitHub layout owns the sidebar and top bar. This page composes
 * only the project workspace, while each dashboard region stays reusable.
 */
function ProjectsPage() {
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [filterValues, setFilterValues] = useState(getInitialFilterValues);

  const activeFilterCount = useMemo(
    () =>
      projectFilters.reduce((count, filter) => {
        const defaultValue = getFilterDefaultValue(filter);
        const value = filterValues[filter.label] ?? defaultValue;

        if (filter.type === "search") {
          return value.trim() ? count + 1 : count;
        }

        return value !== defaultValue ? count + 1 : count;
      }, 0),
    [filterValues],
  );

  function updateFilter(label, value) {
    setFilterValues((currentValues) => ({
      ...currentValues,
      [label]: value,
    }));
  }

  function resetFilters() {
    setFilterValues(getInitialFilterValues());
  }

  return (
    <main className="nirvaah-page" aria-labelledby="projects-title">
      <ProjectPageHeader />
      <ProjectsKpiStrip />
      <div className="min-w-0">
        <ProjectsToolbar
          activeFilterCount={activeFilterCount}
          filtersOpen={filtersOpen}
          filtersPanelId={filtersPanelId}
          onToggleFilters={() => setFiltersOpen((isOpen) => !isOpen)}
        />
        <ProjectsFiltersPanel
          className={filtersOpen ? "mt-3" : "mt-0"}
          filterValues={filterValues}
          id={filtersPanelId}
          isOpen={filtersOpen}
          onFilterChange={updateFilter}
          onResetFilters={resetFilters}
        />
      </div>
      <section className="grid min-w-0 gap-4 2xl:grid-cols-[minmax(0,1fr)_360px]" aria-label="Projects workspace">
        <ProjectsTable />
        <SelectedProjectPanel />
      </section>
      <ProjectsInsights />
    </main>
  );
}

export default ProjectsPage;

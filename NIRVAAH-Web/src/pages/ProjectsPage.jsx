import React from "react";
import { DashboardLayout } from "../components/layout/DashboardLayout.jsx";
import { ProjectPageHeader } from "../components/projects/ProjectPageHeader.jsx";
import { ProjectsAssistantPanel } from "../components/projects/ProjectsAssistantPanel.jsx";
import { ProjectsFiltersPanel } from "../components/projects/ProjectsFiltersPanel.jsx";
import { ProjectsInsights } from "../components/projects/ProjectsInsights.jsx";
import { ProjectsKpiStrip } from "../components/projects/ProjectsKpiStrip.jsx";
import { ProjectsTable } from "../components/projects/ProjectsTable.jsx";
import { ProjectsToolbar } from "../components/projects/ProjectsToolbar.jsx";
import { SelectedProjectPanel } from "../components/projects/SelectedProjectPanel.jsx";

/**
 * Route-level page for /projects.
 *
 * The route owns page layout only. Each dashboard region lives in a component
 * and reads demo content from projectsData.js, which keeps the architecture
 * modular and easy for beginners to navigate.
 */
function ProjectsPage() {
  return (
    <DashboardLayout activePath="/projects">
      <main className="grid min-w-0 gap-4 px-4 py-4 pb-24 sm:px-6 lg:px-8 lg:pb-6" aria-labelledby="projects-title">
        <ProjectPageHeader />
        <ProjectsKpiStrip />
        <ProjectsToolbar />
        <section
          className="grid min-w-0 gap-4 xl:grid-cols-[280px_minmax(0,1fr)] min-[1800px]:grid-cols-[280px_minmax(0,1fr)_340px]"
          aria-label="Projects workspace"
        >
          <ProjectsFiltersPanel className="xl:row-span-2 min-[1800px]:row-span-1" />
          <ProjectsTable />
          <SelectedProjectPanel className="xl:col-start-2 min-[1800px]:col-start-auto" />
        </section>
        <section className="grid min-w-0 gap-4 xl:grid-cols-[minmax(0,1fr)_340px]">
          <ProjectsInsights />
          <ProjectsAssistantPanel />
        </section>
      </main>
    </DashboardLayout>
  );
}

export default ProjectsPage;

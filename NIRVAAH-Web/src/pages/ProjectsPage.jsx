import React from "react";
import { DashboardLayout } from "../components/layout/DashboardLayout.jsx";
import { ProjectsEmptyState } from "../components/projects/ProjectsEmptyState.jsx";

/**
 * Placeholder route for /projects.
 *
 * It keeps navigation links working while the full project list/detail module
 * is still being designed.
 */
function ProjectsPage() {
  return (
    <DashboardLayout activePath="/projects">
      <main className="px-4 py-8 sm:px-6 lg:px-8">
        <ProjectsEmptyState />
      </main>
    </DashboardLayout>
  );
}

export default ProjectsPage;

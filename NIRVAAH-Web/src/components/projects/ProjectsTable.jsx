import React from "react";
import { ArrowUpDown, Eye, MoreHorizontal, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../ui/Button.jsx";
import { Card, CardBody, CardHeader } from "../ui/Card.jsx";
import { Pill } from "../ui/Pill.jsx";
import { cx } from "../../lib/formatters.js";
import { ProjectProgress } from "./ProjectProgress.jsx";
import { ProjectRiskPill } from "./ProjectRiskPill.jsx";
import { projects } from "./projectsData.js";

const tableHeaders = [
  "Project",
  "Ministry / Sector",
  "Status",
  "Cost",
  "Schedule",
  "Progress",
  "Risk Score",
  "Warnings",
  "Last Update",
  "Actions",
];

/**
 * Main project list table.
 *
 * Infrastructure data has many important columns, so small screens get a
 * horizontal scroll instead of cramped stacked rows.
 */
export function ProjectsTable({ className }) {
  return (
    <Card className={className} id="projects-table">
      <CardHeader className="flex flex-col gap-3 sm:flex-row sm:items-start">
        <div className="mr-auto">
          <h2 className="nirvaah-section-title">Project Register</h2>
          <p className="mt-1 text-sm leading-6 text-[#526276]">Showing 10 projects sorted by risk score and unresolved warnings.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Pill tone="blue">10 visible</Pill>
          <Pill tone="red">4 high attention</Pill>
        </div>
      </CardHeader>
      <CardBody className="p-0">
        <div className="overflow-x-auto">
          <table className="nirvaah-table min-w-[1120px]">
            <thead>
              <tr>
                {tableHeaders.map((header) => (
                  <th key={header}>
                    <button className="inline-flex items-center gap-1.5 text-left" type="button">
                      {header}
                      {header !== "Actions" && <ArrowUpDown className="size-3.5 text-[#748397]" aria-hidden="true" />}
                    </button>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {projects.map((project, index) => (
                <tr
                  className={cx(
                    index === 0 && "is-selected",
                  )}
                  key={project.id}
                >
                  <td>
                    <strong className="block text-sm font-black text-[#10233d]">{project.name}</strong>
                    <span className="mt-1 block text-xs font-bold text-[#748397]">{project.id}</span>
                  </td>
                  <td>
                    <span className="block font-bold text-[#263d59]">{project.ministry}</span>
                    <span className="mt-1 block text-xs font-semibold text-[#748397]">
                      {project.sector} · {project.state}
                    </span>
                  </td>
                  <td>
                    <Pill tone="slate">{project.status}</Pill>
                  </td>
                  <td>
                    <span className="font-black text-[#0b2545]">{project.costCondition}</span>
                    <span className="mt-1 block text-xs font-semibold text-[#748397]">Revised cost</span>
                  </td>
                  <td>
                    <span className={cx("font-black", project.scheduleCondition === "On track" ? "text-[#166534]" : "text-[#b45309]")}>
                      {project.scheduleCondition}
                    </span>
                    <span className="mt-1 block text-xs font-semibold text-[#748397]">Against plan</span>
                  </td>
                  <td>
                    <ProjectProgress value={project.progress} risk={project.risk} />
                  </td>
                  <td>
                    <span className="mb-1 block text-lg font-black text-[#0b2545]">{project.riskScore}</span>
                    <ProjectRiskPill risk={project.risk} />
                  </td>
                  <td>
                    <Pill tone={project.warnings > 1 ? "red" : project.warnings === 1 ? "orange" : "green"}>
                      {project.warnings} open
                    </Pill>
                  </td>
                  <td>
                    <span className="font-semibold text-[#263d59]">{project.lastUpdate}</span>
                  </td>
                  <td>
                    <div className="flex items-center gap-1.5">
                      <Button as={Link} to={`/nirvaah/projects/${project.id}`} variant="ghost" className="min-h-9 px-2.5" aria-label={`View ${project.name}`}>
                        <Eye className="size-4" aria-hidden="true" />
                      </Button>
                      <Button type="button" variant="ghost" className="min-h-9 px-2.5" aria-label={`Watch ${project.name}`}>
                        <Star className="size-4" aria-hidden="true" />
                      </Button>
                      <Button type="button" variant="ghost" className="min-h-9 px-2.5" aria-label={`More actions for ${project.name}`}>
                        <MoreHorizontal className="size-4" aria-hidden="true" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardBody>
    </Card>
  );
}

import React from "react";
import { ArrowUpDown, Eye, MoreHorizontal, Star } from "lucide-react";
import { Button } from "../ui/Button.jsx";
import { Card, CardBody, CardHeader } from "../ui/Card.jsx";
import { Pill } from "../ui/Pill.jsx";
import { cx } from "../../lib/formatters.js";
import { ProjectProgress } from "./ProjectProgress.jsx";
import { ProjectRiskPill } from "./ProjectRiskPill.jsx";
import { projects } from "./projectsData.js";

const tableHeaders = [
  "#",
  "Project Name / ID",
  "Ministry",
  "State",
  "Sector",
  "Original Cost",
  "Revised Cost",
  "Expenditure",
  "Physical Progress",
  "Risk",
  "Status",
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
          <h2 className="text-lg font-black text-[#052b63]">Projects List</h2>
          <p className="mt-1 text-sm leading-6 text-[#526276]">Showing 10 of 1,775 projects from the current portfolio view.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Pill tone="blue">10 visible</Pill>
          <Pill tone="red">4 high attention</Pill>
        </div>
      </CardHeader>
      <CardBody className="p-0">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[1080px] border-collapse text-left">
            <thead>
              <tr className="bg-[#edf6ff] text-xs font-black text-[#052b63]">
                <th className="border-b border-[#d5e1ec] px-4 py-3">
                  <span className="sr-only">Select project</span>
                </th>
                {tableHeaders.map((header) => (
                  <th className="border-b border-[#d5e1ec] px-4 py-3" key={header}>
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
                // The first row is visually selected because its details appear in the right panel.
                <tr
                  className={cx(
                    "text-sm text-[#263d59] transition hover:bg-[#f8fbfe]",
                    index === 0 && "bg-[#f6fbff] shadow-[inset_4px_0_0_#075db7]",
                  )}
                  key={project.id}
                >
                  <td className="border-b border-[#e7eff7] px-4 py-3">
                    <input className="size-4 rounded border-[#b8c9da] text-[#075db7]" aria-label={`Select ${project.name}`} type="checkbox" />
                  </td>
                  <td className="border-b border-[#e7eff7] px-4 py-3 font-black text-[#526276]">{String(index + 1).padStart(2, "0")}</td>
                  <td className="border-b border-[#e7eff7] px-4 py-3">
                    <strong className="block text-sm font-black text-[#10233d]">{project.name}</strong>
                    <span className="mt-1 block text-xs font-bold text-[#748397]">{project.id}</span>
                  </td>
                  <td className="border-b border-[#e7eff7] px-4 py-3 font-semibold">{project.ministry}</td>
                  <td className="border-b border-[#e7eff7] px-4 py-3">{project.state}</td>
                  <td className="border-b border-[#e7eff7] px-4 py-3">{project.sector}</td>
                  <td className="border-b border-[#e7eff7] px-4 py-3 font-bold">₹{project.originalCost} Cr</td>
                  <td className="border-b border-[#e7eff7] px-4 py-3 font-bold">₹{project.revisedCost} Cr</td>
                  <td className="border-b border-[#e7eff7] px-4 py-3 font-bold">₹{project.expenditure} Cr</td>
                  <td className="border-b border-[#e7eff7] px-4 py-3">
                    <ProjectProgress value={project.progress} risk={project.risk} />
                  </td>
                  <td className="border-b border-[#e7eff7] px-4 py-3">
                    <ProjectRiskPill risk={project.risk} />
                  </td>
                  <td className="border-b border-[#e7eff7] px-4 py-3">
                    <Pill tone="slate">{project.status}</Pill>
                  </td>
                  <td className="border-b border-[#e7eff7] px-4 py-3">
                    <div className="flex items-center gap-1.5">
                      <Button type="button" variant="ghost" className="min-h-9 px-2.5" aria-label={`View ${project.name}`}>
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

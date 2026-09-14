import React from "react";
import { AlertTriangle, Bookmark, CalendarDays, Eye, IndianRupee, MapPin, Route } from "lucide-react";
import { Button } from "../ui/Button.jsx";
import { Card, CardBody, CardHeader } from "../ui/Card.jsx";
import { Pill } from "../ui/Pill.jsx";
import { cx } from "../../lib/formatters.js";
import { ProjectProgress } from "./ProjectProgress.jsx";
import { ProjectRiskPill } from "./ProjectRiskPill.jsx";
import { selectedProject } from "./projectsData.js";

const quickFacts = [
  { icon: IndianRupee, label: "Cost change", value: `₹${selectedProject.originalCost} Cr to ₹${selectedProject.revisedCost} Cr` },
  { icon: CalendarDays, label: "Expected completion", value: selectedProject.completion },
  { icon: MapPin, label: "State", value: selectedProject.state },
];

/**
 * Detail panel for the currently selected project.
 *
 * Later, this component can receive `project` as a prop after table row
 * selection is wired. For now it uses selectedProject from dummy data.
 */
export function SelectedProjectPanel({ className }) {
  return (
    <Card as="aside" className={cx("h-fit", className)} aria-label="Selected project details">
      <CardHeader>
        <div className="flex items-start justify-between gap-3">
          <div>
            <h2 className="text-lg font-black text-[#052b63]">Selected Project</h2>
            <p className="mt-1 text-sm text-[#526276]">{selectedProject.id}</p>
          </div>
          <ProjectRiskPill risk={selectedProject.risk} />
        </div>
      </CardHeader>
      <CardBody className="grid gap-5">
        <div>
          <div className="flex min-h-28 items-end overflow-hidden rounded-lg border border-[#d5e1ec] bg-[#f5f9fd] p-3">
            {/* Decorative route bar gives the detail panel a project/map feel without adding clutter. */}
            <div className="relative h-16 w-full">
              <span className="absolute left-1 top-7 h-2 w-[86%] rounded-full bg-[#c9dceb]" />
              <span className="absolute left-1 top-7 h-2 w-[56%] rounded-full bg-[#075db7]" />
              <span className="absolute left-0 top-5 grid size-6 place-items-center rounded-full bg-[#075db7] text-white">
                <Route className="size-3.5" aria-hidden="true" />
              </span>
              <span className="absolute left-[55%] top-4 grid size-8 place-items-center rounded-full border-4 border-white bg-orange-500 text-white shadow-sm">
                <AlertTriangle className="size-4" aria-hidden="true" />
              </span>
              <span className="absolute right-[10%] top-5 size-6 rounded-full bg-[#9fb7ca]" />
            </div>
          </div>
          <h3 className="mt-4 text-xl font-black leading-7 text-[#052b63]">{selectedProject.name}</h3>
          <p className="mt-1 text-sm font-semibold text-[#526276]">
            {selectedProject.ministry} - {selectedProject.sector}
          </p>
        </div>

        <div className="grid gap-3">
          <div className="flex items-center justify-between gap-4">
            <span className="text-sm font-bold text-[#526276]">Physical Progress</span>
            <ProjectProgress value={selectedProject.progress} risk={selectedProject.risk} />
          </div>
          <div className="flex flex-wrap gap-2">
            <Pill tone="slate">{selectedProject.status}</Pill>
            <Pill tone="blue">PAIMANA linked</Pill>
          </div>
        </div>

        <dl className="grid gap-3">
          {quickFacts.map(({ icon: Icon, label, value }) => (
            <div className="grid grid-cols-[36px_1fr] gap-3 rounded-lg bg-[#f6f9fc] p-3" key={label}>
              <span className="grid size-9 place-items-center rounded-md bg-white text-[#075db7]">
                <Icon className="size-4" aria-hidden="true" />
              </span>
              <div>
                <dt className="text-xs font-black uppercase tracking-wide text-[#748397]">{label}</dt>
                <dd className="mt-1 text-sm font-black text-[#10233d]">{value}</dd>
              </div>
            </div>
          ))}
        </dl>

        <div className="rounded-lg border border-red-100 bg-red-50 p-3">
          <p className="text-xs font-black uppercase tracking-wide text-red-700">Key Risk Reason</p>
          <p className="mt-1 text-sm font-bold leading-6 text-red-800">{selectedProject.keyRiskReason}</p>
        </div>

        <div className="grid gap-2 sm:grid-cols-2 xl:grid-cols-1">
          <Button type="button" className="w-full">
            <Eye className="size-4" aria-hidden="true" />
            View Project
          </Button>
          <Button type="button" variant="secondary" className="w-full">
            <Bookmark className="size-4" aria-hidden="true" />
            Add to Watchlist
          </Button>
        </div>
      </CardBody>
    </Card>
  );
}

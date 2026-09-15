import React from "react";
import { AlertTriangle, Bookmark, CalendarDays, CheckCircle2, Eye, IndianRupee, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../ui/Button.jsx";
import { Card, CardBody, CardHeader } from "../ui/Card.jsx";
import { Pill } from "../ui/Pill.jsx";
import { cx } from "../../lib/formatters.js";
import { ProjectProgress } from "./ProjectProgress.jsx";
import { ProjectRiskPill } from "./ProjectRiskPill.jsx";
import { selectedProject } from "./projectsData.js";

const quickFacts = [
  { icon: IndianRupee, label: "Cost condition", value: selectedProject.costCondition },
  { icon: CalendarDays, label: "Schedule condition", value: `${selectedProject.scheduleCondition} · ${selectedProject.completion}` },
  { icon: MapPin, label: "State", value: selectedProject.state },
];

const intelligenceTabs = ["Overview", "Cost", "Schedule", "Risk"];

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
            <h2 className="nirvaah-section-title">Project Intelligence</h2>
            <p className="mt-1 text-sm text-[#526276]">{selectedProject.id}</p>
          </div>
          <ProjectRiskPill risk={selectedProject.risk} />
        </div>
      </CardHeader>
      <CardBody className="grid gap-4">
        <div>
          <h3 className="text-xl font-black leading-7 text-[#0b2545]">{selectedProject.name}</h3>
          <p className="mt-1 text-sm font-semibold text-[#526276]">
            {selectedProject.ministry} - {selectedProject.sector}
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <Pill tone="slate">{selectedProject.status}</Pill>
            <Pill tone="red">{selectedProject.warnings} open warnings</Pill>
            <Pill tone="blue">Score {selectedProject.riskScore}</Pill>
          </div>
        </div>

        <div className="grid gap-2 rounded-[8px] border border-[#e2e8f0] bg-[#f8fafc] p-3">
          <div className="flex items-center justify-between gap-4">
            <span className="text-sm font-bold text-[#526276]">Physical progress</span>
            <ProjectProgress value={selectedProject.progress} risk={selectedProject.risk} />
          </div>
          <div className="flex items-start gap-2 border-t border-[#e2e8f0] pt-3">
            <AlertTriangle className="mt-0.5 size-4 text-[#b91c1c]" aria-hidden="true" />
            <p className="text-sm font-bold leading-6 text-[#b91c1c]">{selectedProject.keyRiskReason}</p>
          </div>
        </div>

        <nav className="flex gap-1 overflow-x-auto border-b border-[#e2e8f0]" aria-label="Project detail sections">
          {intelligenceTabs.map((tab, index) => (
            <button className="nirvaah-tab" type="button" aria-current={index === 0 ? "page" : undefined} key={tab}>
              {tab}
            </button>
          ))}
        </nav>

        <dl className="grid gap-3">
          {quickFacts.map(({ icon: Icon, label, value }) => (
            <div className="grid grid-cols-[36px_1fr] gap-3 rounded-[6px] border border-[#e2e8f0] bg-white p-3" key={label}>
              <span className="grid size-9 place-items-center rounded-[6px] bg-[#f8fafc] text-[#0b2545]">
                <Icon className="size-4" aria-hidden="true" />
              </span>
              <div>
                <dt className="text-xs font-black uppercase text-[#748397]">{label}</dt>
                <dd className="mt-1 text-sm font-black text-[#10233d]">{value}</dd>
              </div>
            </div>
          ))}
        </dl>

        <div className="rounded-[8px] border border-[#fed7d7] bg-[#fff7f7] p-3">
          <p className="text-xs font-black uppercase text-[#b91c1c]">Current warning</p>
          <p className="mt-1 text-sm font-bold leading-6 text-[#7f1d1d]">{selectedProject.warningSummary}</p>
        </div>

        <div className="grid gap-2">
          <p className="text-xs font-black uppercase text-[#748397]">Evidence</p>
          {selectedProject.evidence.map((item) => (
            <div className="flex gap-2 text-sm font-semibold leading-6 text-[#263d59]" key={item}>
              <CheckCircle2 className="mt-1 size-4 text-[#15803d]" aria-hidden="true" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        <div className="rounded-[8px] border border-[#cfe8d8] bg-[#f6fff8] p-3">
          <p className="text-xs font-black uppercase text-[#166534]">Recommended intervention</p>
          <p className="mt-1 text-sm font-bold leading-6 text-[#14532d]">{selectedProject.recommendedIntervention}</p>
        </div>

        <div className="grid gap-2 sm:grid-cols-2 xl:grid-cols-1">
          <Button as={Link} to={`/nirvaah/projects/${selectedProject.id}`} className="w-full">
            <Eye className="size-4" aria-hidden="true" />
            Open Intelligence View
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

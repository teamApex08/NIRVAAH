import React from "react";
import { ArrowLeft, BellRing, CalendarDays, CheckCircle2, ClipboardCheck, IndianRupee, ShieldAlert } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { selectedProject, projects } from "../components/projects/projectsData.js";
import { ProjectProgress } from "../components/projects/ProjectProgress.jsx";
import { ProjectRiskPill } from "../components/projects/ProjectRiskPill.jsx";
import { Button } from "../components/ui/Button.jsx";
import { Card, CardBody, CardHeader } from "../components/ui/Card.jsx";
import { PageHero } from "../components/ui/PageHero.jsx";
import { Pill } from "../components/ui/Pill.jsx";

const detailTabs = ["Overview", "Cost", "Schedule", "Progress", "Risk", "Milestones", "Warnings", "Benchmarking", "History"];

const milestones = [
  { label: "Latest PAIMANA update", value: "21 Aug 2026", status: "Received" },
  { label: "Recovery plan requested", value: "Pending", status: "Action Required" },
  { label: "Next ministry review", value: "30 Sep 2026", status: "Scheduled" },
];

function findProject(projectId) {
  return projects.find((project) => project.id === projectId) ?? selectedProject;
}

function getProjectEvidence(project) {
  if (project.id === selectedProject.id) {
    return selectedProject.evidence;
  }

  return [
    `${project.costCondition} cost condition against original approved cost.`,
    `${project.scheduleCondition} schedule condition against plan.`,
    `${project.warnings} unresolved warning signal${project.warnings === 1 ? "" : "s"} in the current reporting cycle.`,
  ];
}

function DetailMetric({ label, value, note, children }) {
  return (
    <div className="rounded-[8px] border border-[#e2e8f0] bg-white p-4">
      <p className="text-xs font-black uppercase text-[#748397]">{label}</p>
      <strong className="mt-1 block text-xl font-black leading-tight text-[#0b2545]">{value}</strong>
      {note && <span className="mt-1 block text-xs font-semibold leading-5 text-[#526276]">{note}</span>}
      {children}
    </div>
  );
}

function ProjectDetailPage() {
  const { projectId } = useParams();
  const project = findProject(projectId);
  const evidence = getProjectEvidence(project);
  const recommendedIntervention = project.id === selectedProject.id
    ? selectedProject.recommendedIntervention
    : `Review ${project.name}'s cost, schedule and warning evidence with the implementing agency.`;

  return (
    <main className="nirvaah-page" aria-labelledby="project-detail-title">
      <PageHero
        eyebrow={`Project Detail · ${project.id}`}
        title={project.name}
        titleId="project-detail-title"
        description={`${project.ministry} · ${project.sector} · ${project.state}. Follow the path from status to problem, cause, evidence and recommended action.`}
        tone={project.risk === "Critical" ? "red" : "green"}
      >
        <div className="flex w-full flex-wrap gap-2 lg:justify-end">
          <Button as={Link} to="/nirvaah/projects" variant="secondary">
            <ArrowLeft className="size-4" aria-hidden="true" />
            Back to Projects
          </Button>
          <Button as={Link} to="/nirvaah/early-warnings" variant={project.risk === "Critical" ? "danger" : "primary"}>
            <BellRing className="size-4" aria-hidden="true" />
            Review Warnings
          </Button>
        </div>
      </PageHero>

      <section className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_360px]" aria-label="Project intelligence overview">
        <Card>
          <CardHeader>
            <h2 className="nirvaah-section-title">Operational Snapshot</h2>
            <p className="mt-1 text-sm leading-6 text-[#526276]">The first facts needed before deciding whether to intervene.</p>
          </CardHeader>
          <CardBody className="grid gap-4">
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              <DetailMetric label="Overall risk" value={project.risk} note={`Risk score ${project.riskScore}`}>
                <div className="mt-3">
                  <ProjectRiskPill risk={project.risk} />
                </div>
              </DetailMetric>
              <DetailMetric label="Cost condition" value={project.costCondition} note={`Revised cost ₹${project.revisedCost} Cr`} />
              <DetailMetric label="Schedule condition" value={project.scheduleCondition} note={`Expected completion ${project.completion}`} />
              <DetailMetric label="Warning status" value={`${project.warnings} open`} note={`Last update ${project.lastUpdate}`} />
            </div>

            <div className="rounded-[8px] border border-[#e2e8f0] bg-[#f8fafc] p-4">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs font-black uppercase text-[#748397]">Physical progress</p>
                  <strong className="mt-1 block text-lg font-black text-[#0b2545]">{project.progress}% complete</strong>
                </div>
                <ProjectProgress value={project.progress} risk={project.risk} />
              </div>
            </div>

            <nav className="flex gap-1 overflow-x-auto border-b border-[#e2e8f0]" aria-label="Project detail tabs">
              {detailTabs.map((tab, index) => (
                <button className="nirvaah-tab" type="button" aria-current={index === 0 ? "page" : undefined} key={tab}>
                  {tab}
                </button>
              ))}
            </nav>

            <section className="grid gap-4 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]" aria-label="Problem and evidence">
              <div className="rounded-[8px] border border-[#fed7d7] bg-[#fff7f7] p-4">
                <div className="flex items-start gap-3">
                  <ShieldAlert className="mt-1 size-5 text-[#b91c1c]" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-black uppercase text-[#b91c1c]">Problem</p>
                    <p className="mt-1 text-sm font-bold leading-6 text-[#7f1d1d]">
                      {project.id === selectedProject.id ? selectedProject.warningSummary : project.recommendedAction}
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-[8px] border border-[#cfe8d8] bg-[#f6fff8] p-4">
                <div className="flex items-start gap-3">
                  <ClipboardCheck className="mt-1 size-5 text-[#15803d]" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-black uppercase text-[#166534]">Recommended action</p>
                    <p className="mt-1 text-sm font-bold leading-6 text-[#14532d]">{recommendedIntervention}</p>
                  </div>
                </div>
              </div>
            </section>
          </CardBody>
        </Card>

        <aside className="grid h-fit gap-4">
          <Card>
            <CardHeader>
              <h2 className="nirvaah-section-title">Evidence</h2>
              <p className="mt-1 text-sm leading-6 text-[#526276]">Signals supporting the current risk view.</p>
            </CardHeader>
            <CardBody className="grid gap-3">
              {evidence.map((item) => (
                <div className="flex gap-2 text-sm font-semibold leading-6 text-[#263d59]" key={item}>
                  <CheckCircle2 className="mt-1 size-4 text-[#15803d]" aria-hidden="true" />
                  <span>{item}</span>
                </div>
              ))}
            </CardBody>
          </Card>

          <Card>
            <CardHeader>
              <h2 className="nirvaah-section-title">Milestones</h2>
              <p className="mt-1 text-sm leading-6 text-[#526276]">Next checkpoints for the project review trail.</p>
            </CardHeader>
            <CardBody className="grid gap-3">
              {milestones.map((milestone) => (
                <div className="grid grid-cols-[32px_1fr] gap-3" key={milestone.label}>
                  <span className="grid size-8 place-items-center rounded-[6px] bg-[#f2f5f8] text-[#0b2545]">
                    <CalendarDays className="size-4" aria-hidden="true" />
                  </span>
                  <span>
                    <strong className="block text-sm font-black text-[#0b2545]">{milestone.label}</strong>
                    <span className="mt-1 block text-xs font-semibold text-[#748397]">{milestone.value}</span>
                    <Pill className="mt-2" tone={milestone.status === "Action Required" ? "orange" : "blue"}>
                      {milestone.status}
                    </Pill>
                  </span>
                </div>
              ))}
            </CardBody>
          </Card>
        </aside>
      </section>
    </main>
  );
}

export default ProjectDetailPage;

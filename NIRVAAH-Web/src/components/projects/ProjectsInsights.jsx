import React from "react";
import { cx } from "../../lib/formatters.js";
import { Card, CardBody, CardHeader } from "../ui/Card.jsx";
import { projectInsights } from "./projectsData.js";

const insightTone = {
  red: "bg-[#fef2f2] text-[#b91c1c] ring-[#b91c1c]/15",
  orange: "bg-[#fff7ed] text-[#b45309] ring-[#d97706]/20",
  green: "bg-[#ecfdf3] text-[#166534] ring-[#15803d]/18",
  purple: "bg-[#f1f5f9] text-[#334155] ring-[#475569]/18",
};

/**
 * Bottom insight cards for the currently filtered project list.
 */
export function ProjectsInsights() {
  return (
    <Card aria-label="Project list insights">
      <CardHeader>
        <h2 className="nirvaah-section-title">Current View Insights</h2>
        <p className="mt-1 text-sm leading-6 text-[#526276]">Signals surfaced from the filtered project register.</p>
      </CardHeader>
      <CardBody className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        {projectInsights.map(({ icon: Icon, value, text, tone }) => (
          <article className="grid grid-cols-[40px_1fr] gap-3 border-l-4 border-[#dbe4ec] pl-3" key={text}>
            <span className={cx("grid size-10 place-items-center rounded-[6px] ring-1", insightTone[tone])}>
              <Icon className="size-5" aria-hidden="true" />
            </span>
            <span className="min-w-0">
              <strong className="block text-xl font-black text-[#0b2545]">{value}</strong>
              <span className="mt-1 block text-sm font-semibold leading-6 text-[#526276]">{text}</span>
            </span>
          </article>
        ))}
      </CardBody>
    </Card>
  );
}

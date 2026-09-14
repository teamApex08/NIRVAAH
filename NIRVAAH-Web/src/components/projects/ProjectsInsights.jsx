import React from "react";
import { cx } from "../../lib/formatters.js";
import { projectInsights } from "./projectsData.js";

const insightTone = {
  red: "bg-red-50 text-red-700 ring-red-600/15",
  orange: "bg-orange-50 text-orange-700 ring-orange-600/15",
  green: "bg-emerald-50 text-emerald-700 ring-emerald-600/15",
  purple: "bg-violet-50 text-violet-700 ring-violet-600/15",
};

/**
 * Bottom insight cards for the currently filtered project list.
 */
export function ProjectsInsights() {
  return (
    <section className="grid gap-3 sm:grid-cols-2 2xl:grid-cols-4" aria-label="Project list insights">
      {projectInsights.map(({ icon: Icon, value, text, tone }) => (
        <article className="rounded-lg border border-[#d5e1ec] bg-white p-4 shadow-sm" key={text}>
          <span className={cx("grid size-10 place-items-center rounded-lg ring-1", insightTone[tone])}>
            <Icon className="size-5" aria-hidden="true" />
          </span>
          <strong className="mt-4 block text-2xl font-black text-[#052b63]">{value}</strong>
          <p className="mt-1 text-sm font-semibold leading-6 text-[#526276]">{text}</p>
        </article>
      ))}
    </section>
  );
}

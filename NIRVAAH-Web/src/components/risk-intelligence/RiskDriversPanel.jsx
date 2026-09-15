import React from "react";
import { Card, CardBody, CardHeader } from "../ui/Card.jsx";
import { cx } from "../../lib/formatters.js";
import { riskDrivers } from "./riskIntelligenceData.js";

const toneClasses = {
  blue: "border border-[#0b2545]/15 bg-[#f2f5f8] text-[#0b2545]",
  green: "border border-[#15803d]/20 bg-[#ecfdf3] text-[#166534]",
  orange: "border border-[#d97706]/20 bg-[#fff7ed] text-[#b45309]",
  purple: "border border-[#475569]/20 bg-[#f1f5f9] text-[#334155]",
  red: "border border-[#b91c1c]/20 bg-[#fef2f2] text-[#b91c1c]",
};

/**
 * Driver analysis cards.
 *
 * Each card pairs a percentage with a plain-language reason so users can move
 * from score to cause without reading a dense model explanation.
 */
export function RiskDriversPanel() {
  return (
    <Card className="min-w-0">
      <CardHeader>
        <h2 className="text-lg font-black text-[#0b2545]">Top Risk Drivers</h2>
        <p className="mt-1 text-sm leading-6 text-[#526276]">Most common contributors across high and critical projects.</p>
      </CardHeader>
      <CardBody className="grid gap-3 sm:grid-cols-2">
        {riskDrivers.map((driver) => {
          const Icon = driver.icon;

          return (
            <article className="grid min-h-32 grid-cols-[44px_1fr] gap-3 rounded-md border border-[#e2e8f0] bg-[#f8fafc] p-4" key={driver.title}>
              <span className={cx("grid size-11 place-items-center rounded-md", toneClasses[driver.tone])}>
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <div className="flex flex-wrap items-baseline gap-2">
                  <strong className="text-2xl font-black text-[#0b2545]">{driver.value}</strong>
                  <span className="text-sm font-black text-[#10233d]">{driver.title}</span>
                </div>
                <p className="mt-2 text-sm font-semibold leading-6 text-[#526276]">{driver.description}</p>
              </div>
            </article>
          );
        })}
      </CardBody>
    </Card>
  );
}

import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/Button.jsx";
import { Card, CardBody, CardHeader } from "../ui/Card.jsx";
import { Pill } from "../ui/Pill.jsx";
import { riskQueue } from "./riskIntelligenceData.js";

const levelTone = {
  Critical: "red",
  High: "orange",
  Moderate: "blue",
  Low: "green",
};

/**
 * Prioritized project review queue.
 *
 * This table turns model output into a clear officer workflow by pairing each
 * risk score with the suggested next review step.
 */
export function RiskPriorityQueue() {
  return (
    <Card className="min-w-0 border-l-4 border-l-[#d97706]">
      <CardHeader className="flex flex-col gap-3 sm:flex-row sm:items-start">
        <div className="mr-auto">
          <h2 className="text-lg font-black text-[#0b2545]">Priority Review Queue</h2>
          <p className="mt-1 text-sm leading-6 text-[#526276]">Projects ranked by current NIRVAAH risk score.</p>
        </div>
        <Pill tone="red">4 need review</Pill>
      </CardHeader>
      <CardBody className="p-0">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[860px] border-collapse text-left">
            <thead>
              <tr className="bg-[#f7f2e8] text-xs font-black text-[#0b2545]">
                <th className="border-b border-[#d5e1ec] px-4 py-3">Project</th>
                <th className="border-b border-[#d5e1ec] px-4 py-3">Ministry</th>
                <th className="border-b border-[#d5e1ec] px-4 py-3">State</th>
                <th className="border-b border-[#d5e1ec] px-4 py-3">Score</th>
                <th className="border-b border-[#d5e1ec] px-4 py-3">Level</th>
                <th className="border-b border-[#d5e1ec] px-4 py-3">Primary Risk</th>
                <th className="border-b border-[#d5e1ec] px-4 py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {riskQueue.map((project) => (
                <tr className="text-sm text-[#263d59] transition hover:bg-[#fffdf8]" key={project.id}>
                  <td className="border-b border-[#e7eff7] px-4 py-3">
                    <strong className="block font-black text-[#10233d]">{project.name}</strong>
                    <span className="mt-1 block text-xs font-bold text-[#748397]">{project.id}</span>
                  </td>
                  <td className="border-b border-[#e7eff7] px-4 py-3 font-semibold">{project.ministry}</td>
                  <td className="border-b border-[#e7eff7] px-4 py-3">{project.state}</td>
                  <td className="border-b border-[#e7eff7] px-4 py-3">
                    <strong className="text-lg font-black text-[#0b2545]">{project.score}</strong>
                    <span className="text-xs font-bold text-[#748397]">/100</span>
                  </td>
                  <td className="border-b border-[#e7eff7] px-4 py-3">
                    <Pill tone={levelTone[project.level]}>{project.level}</Pill>
                  </td>
                  <td className="border-b border-[#e7eff7] px-4 py-3">{project.primaryRisk}</td>
                  <td className="border-b border-[#e7eff7] px-4 py-3">
                    <Button type="button" variant="secondary" className="min-h-9 px-3">
                      {project.nextStep}
                      <ArrowRight className="size-4" aria-hidden="true" />
                    </Button>
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

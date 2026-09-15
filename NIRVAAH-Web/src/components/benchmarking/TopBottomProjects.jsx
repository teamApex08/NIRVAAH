import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/Button.jsx";
import { Card, CardBody, CardHeader } from "../ui/Card.jsx";
import { Pill } from "../ui/Pill.jsx";
import { cx } from "../../lib/formatters.js";
import { performerTabs, performingProjects } from "./benchmarkingData.js";

/**
 * Table of outlier projects in the selected benchmark cohort.
 */
export function TopBottomProjects() {
  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <h2 className="text-lg font-black text-[#0b2545]">Top and Bottom Performing Projects</h2>
        <p className="mt-1 text-sm text-[#526276]">Current view sorted by cost escalation.</p>
      </CardHeader>
      <CardBody className="grid gap-4 p-0">
        <div className="flex gap-2 overflow-x-auto px-4 pt-4">
          {performerTabs.map((tab, index) => (
            <button
              className={cx(
                "min-h-9 shrink-0 rounded-md px-3 text-sm font-black transition",
                index === 0 ? "bg-[#d97706] text-white" : "bg-[#f8fafc] text-[#0b2545] hover:bg-[#fff8ed]",
              )}
              type="button"
              key={tab}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="max-w-full overflow-x-auto" style={{ contain: "layout paint" }}>
          <table className="w-[920px] max-w-none table-fixed border-collapse text-left">
            <thead>
              <tr className="bg-[#f7f2e8] text-xs font-black text-[#0b2545]">
                {["#", "Project Name", "Ministry", "State", "Cost Escalation", "Revised Cost", "Status", "Action"].map((header) => (
                  <th className="border-b border-[#d5e1ec] px-4 py-3" key={header}>
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {performingProjects.map((project) => (
                <tr className="text-sm text-[#263d59] transition hover:bg-[#fffdf8]" key={project.rank}>
                  <td className="border-b border-[#e7eff7] px-4 py-3 font-black text-[#0b2545]">{project.rank}</td>
                  <td className="border-b border-[#e7eff7] px-4 py-3 font-black text-[#10233d]">{project.name}</td>
                  <td className="border-b border-[#e7eff7] px-4 py-3">{project.ministry}</td>
                  <td className="border-b border-[#e7eff7] px-4 py-3">{project.state}</td>
                  <td className="border-b border-[#e7eff7] px-4 py-3 font-black text-red-600">{project.escalation}</td>
                  <td className="border-b border-[#e7eff7] px-4 py-3 font-bold">₹{project.revisedCost} Cr</td>
                  <td className="border-b border-[#e7eff7] px-4 py-3">
                    <Pill tone="blue">{project.status}</Pill>
                  </td>
                  <td className="border-b border-[#e7eff7] px-4 py-3">
                    <Button type="button" className="min-h-9 px-3 py-1.5 text-xs">
                      View
                      <ArrowRight className="size-3.5" aria-hidden="true" />
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

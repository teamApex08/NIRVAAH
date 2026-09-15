import React from "react";
import { Plus, Search, UserRoundCheck } from "lucide-react";
import { Button } from "../ui/Button.jsx";
import { Card, CardBody, CardHeader } from "../ui/Card.jsx";
import { Pill } from "../ui/Pill.jsx";
import { cx } from "../../lib/formatters.js";
import { peerComparison } from "./benchmarkingData.js";

/**
 * Peer comparison panel for the selected project.
 */
export function PeerComparison() {
  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <h2 className="text-lg font-black text-[#0b2545]">Peer Comparison</h2>
        <p className="mt-1 text-sm text-[#526276]">Compare a selected project with peer medians.</p>
      </CardHeader>
      <CardBody className="grid gap-4">
        <div className="grid gap-3 xl:grid-cols-[1fr_auto]">
          <label className="grid min-h-11 grid-cols-[auto_1fr] items-center gap-2 rounded-md border border-[#cfdcea] bg-white px-3">
            <Search className="size-4 text-[#748397]" aria-hidden="true" />
            <input className="min-w-0 text-sm outline-none" placeholder="Search and select a project to compare" />
          </label>
          <Button type="button" variant="secondary" className="w-full xl:w-auto">
            Compare
          </Button>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <div className="grid grid-cols-[44px_1fr_auto] gap-3 rounded-md border border-[#e2e8f0] bg-[#f8fafc] p-3">
            <span className="grid size-11 place-items-center rounded-lg bg-[#f2f5f8] text-[#0b2545]">
              <UserRoundCheck className="size-5" aria-hidden="true" />
            </span>
            <span className="min-w-0">
              <span className="block text-xs font-black uppercase tracking-wide text-[#748397]">Selected Project</span>
              <strong className="block text-sm font-black text-[#0b2545]">{peerComparison.selectedProject.name}</strong>
              <span className="block text-xs font-bold text-[#748397]">{peerComparison.selectedProject.id}</span>
            </span>
            <Pill tone="red">{peerComparison.selectedProject.risk}</Pill>
          </div>
          <button
            className="grid min-h-20 grid-cols-[44px_1fr] gap-3 rounded-lg border border-dashed border-[#94a3b8] bg-[#f8fbfe] p-3 text-left transition hover:bg-[#f8fafc]"
            type="button"
          >
            <span className="grid size-11 place-items-center rounded-lg bg-[#f2f5f8] text-[#0b2545]">
              <Plus className="size-5" aria-hidden="true" />
            </span>
            <span>
              <strong className="block text-sm font-black text-[#0b2545]">Add Peer Project</strong>
              <span className="mt-1 block text-xs font-bold text-[#748397]">Select a project to compare</span>
            </span>
          </button>
        </div>

        <div className="flex min-w-0 gap-2 overflow-x-auto">
          {peerComparison.metricTabs.map((tab, index) => (
            <button
              className={cx(
                "min-h-9 shrink-0 border-b-2 border-transparent px-3 text-sm font-black",
                index === 0 && "border-[#d97706] bg-[#fff8ed] text-[#0b2545]",
              )}
              type="button"
              key={tab}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="max-w-full overflow-x-auto" style={{ contain: "layout paint" }}>
          <table className="w-[720px] max-w-none table-fixed border-collapse text-left">
            <thead>
              <tr className="bg-[#f7f2e8] text-xs font-black text-[#0b2545]">
                {["Metric", "Selected Project", "Peer Median", "Difference"].map((header) => (
                  <th className="border-b border-[#d5e1ec] px-4 py-3" key={header}>
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {peerComparison.metrics.map((row) => (
                <tr className="text-sm text-[#263d59]" key={row.metric}>
                  <td className="border-b border-[#e7eff7] px-4 py-3 font-bold">{row.metric}</td>
                  <td className="border-b border-[#e7eff7] px-4 py-3">{row.selected}</td>
                  <td className="border-b border-[#e7eff7] px-4 py-3">{row.peerMedian}</td>
                  <td className="border-b border-[#e7eff7] px-4 py-3 font-black text-red-600">{row.difference}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardBody>
    </Card>
  );
}

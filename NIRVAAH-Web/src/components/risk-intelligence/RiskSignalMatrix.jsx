import React from "react";
import { Card, CardBody, CardHeader } from "../ui/Card.jsx";
import { Pill } from "../ui/Pill.jsx";
import { cx } from "../../lib/formatters.js";
import { riskMatrix } from "./riskIntelligenceData.js";

const statusTone = {
  Critical: "red",
  High: "orange",
  Moderate: "blue",
  Low: "green",
};

function signalColor(value) {
  if (value >= 75) return "bg-red-600";
  if (value >= 60) return "bg-orange-500";
  if (value >= 45) return "bg-[#0b2545]";
  return "bg-emerald-500";
}

/**
 * Sector risk matrix.
 *
 * The matrix compresses several risk dimensions into scannable rows while the
 * driver column explains why each sector deserves attention.
 */
export function RiskSignalMatrix() {
  return (
    <Card className="min-w-0 border-l-4 border-l-[#b91c1c]">
      <CardHeader>
        <h2 className="text-lg font-black text-[#0b2545]">Risk Signal Matrix</h2>
        <p className="mt-1 text-sm leading-6 text-[#526276]">Compare cost, schedule and progress signals across analysed sectors.</p>
      </CardHeader>
      <CardBody className="p-0">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[760px] border-collapse text-left">
            <thead>
              <tr className="bg-[#f7f2e8] text-xs font-black text-[#0b2545]">
                <th className="border-b border-[#d5e1ec] px-4 py-3">Sector</th>
                <th className="border-b border-[#d5e1ec] px-4 py-3">Projects</th>
                <th className="border-b border-[#d5e1ec] px-4 py-3">Cost</th>
                <th className="border-b border-[#d5e1ec] px-4 py-3">Schedule</th>
                <th className="border-b border-[#d5e1ec] px-4 py-3">Progress</th>
                <th className="border-b border-[#d5e1ec] px-4 py-3">Top Driver</th>
                <th className="border-b border-[#d5e1ec] px-4 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {riskMatrix.map((row) => (
                <tr className="text-sm text-[#263d59] transition hover:bg-[#fffdf8]" key={row.sector}>
                  <td className="border-b border-[#e7eff7] px-4 py-3 font-black text-[#10233d]">{row.sector}</td>
                  <td className="border-b border-[#e7eff7] px-4 py-3 font-bold">{row.projects}</td>
                  {[row.cost, row.schedule, row.progress].map((value, index) => (
                    <td className="border-b border-[#e7eff7] px-4 py-3" key={`${row.sector}-${index}`}>
                      <div className="grid grid-cols-[1fr_36px] items-center gap-2">
                        <span className="h-2 overflow-hidden rounded-full bg-[#dfeaf5]">
                          <span className={cx("block h-full rounded-full", signalColor(value))} style={{ width: `${value}%` }} />
                        </span>
                        <span className="text-right text-xs font-black text-[#526276]">{value}</span>
                      </div>
                    </td>
                  ))}
                  <td className="border-b border-[#e7eff7] px-4 py-3 font-semibold">{row.driver}</td>
                  <td className="border-b border-[#e7eff7] px-4 py-3">
                    <Pill tone={statusTone[row.status]}>{row.status}</Pill>
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

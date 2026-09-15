import React from "react";
import { Card, CardBody, CardHeader } from "../ui/Card.jsx";
import { schedulePerformance } from "./benchmarkingData.js";

const scheduleLegend = [
  { label: "Ahead of Schedule", className: "bg-emerald-500" },
  { label: "On Schedule", className: "bg-[#0b2545]" },
  { label: "Delayed", className: "bg-amber-400" },
  { label: "Significantly Delayed", className: "bg-red-500" },
];

/**
 * Stacked sector bars showing schedule performance.
 */
export function SchedulePerformance() {
  return (
    <Card>
      <CardHeader>
        <h2 className="nirvaah-section-title">Schedule Performance by Sector</h2>
        <p className="mt-1 text-sm text-[#526276]">Share of projects ahead, on schedule or delayed.</p>
      </CardHeader>
      <CardBody className="grid gap-4">
        <div className="rounded-[8px] border border-[#fed7d7] bg-[#fff7f7] p-3">
          <p className="text-xs font-black uppercase text-[#b91c1c]">Interpretation</p>
          <p className="mt-1 text-sm font-bold leading-6 text-[#7f1d1d]">
            Railways and water-resource cohorts show the highest significant-delay share, so schedule comparison should focus there first.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 text-xs font-bold text-[#526276]">
          {scheduleLegend.map((item) => (
            <span className="inline-flex items-center gap-2" key={item.label}>
              <i className={`size-2.5 rounded-full ${item.className}`} />
              {item.label}
            </span>
          ))}
        </div>
        <div className="grid gap-3">
          {schedulePerformance.map((sector) => (
            <div className="grid gap-1.5" key={sector.sector}>
              <div className="flex items-center justify-between gap-3 text-sm">
                <span className="font-bold text-[#263d59]">{sector.sector}</span>
                <span className="font-black text-[#0b2545]">{sector.significant}% high delay</span>
              </div>
              <div className="flex h-7 overflow-hidden rounded-md bg-[#dce8f3] text-[11px] font-black text-[#0b2545]">
                <span className="grid place-items-center bg-emerald-400" style={{ width: `${sector.ahead}%` }}>
                  {sector.ahead}%
                </span>
                <span className="grid place-items-center bg-[#9bb2c9]" style={{ width: `${sector.onTime}%` }}>
                  {sector.onTime}%
                </span>
                <span className="grid place-items-center bg-amber-300" style={{ width: `${sector.delayed}%` }}>
                  {sector.delayed}%
                </span>
                <span className="grid place-items-center bg-red-400 text-white" style={{ width: `${sector.significant}%` }}>
                  {sector.significant}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardBody>
    </Card>
  );
}

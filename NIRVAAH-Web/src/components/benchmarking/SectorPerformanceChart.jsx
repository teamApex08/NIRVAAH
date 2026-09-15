import React from "react";
import { Card, CardBody, CardHeader } from "../ui/Card.jsx";
import { cx } from "../../lib/formatters.js";
import { sectorComparison } from "./benchmarkingData.js";

const chartTabs = ["Cost Escalation", "Schedule Delay", "Physical Progress", "Risk Distribution"];

const legend = [
  { label: "Sector Median", className: "bg-[#0b2545]" },
  { label: "Interquartile Range", className: "bg-[#c9d6e2]" },
  { label: "Sector Average", className: "bg-orange-500" },
  { label: "Your Selection", className: "bg-red-500" },
];

/**
 * Sector performance comparison chart.
 *
 * The SVG uses the dummy data above to draw a compact box-plot style view.
 * This keeps the prototype readable without adding a charting dependency yet.
 */
export function SectorPerformanceChart() {
  const plot = { left: 46, top: 22, width: 820, height: 190 };
  const yFor = (value) => plot.top + plot.height - (value / 80) * plot.height;
  const xFor = (index) => plot.left + index * (plot.width / (sectorComparison.length - 1));

  return (
    <Card className="overflow-hidden" id="sector-performance">
      <CardHeader>
        <h2 className="nirvaah-section-title">Sector Performance Comparison</h2>
        <p className="mt-1 text-sm text-[#526276]">Compare selected sector values against peer distribution.</p>
      </CardHeader>
      <CardBody className="grid gap-4">
        <div className="rounded-[8px] border border-[#f1d5b2] bg-[#fff8ed] p-3">
          <p className="text-xs font-black uppercase text-[#b45309]">Interpretation</p>
          <p className="mt-1 text-sm font-bold leading-6 text-[#0b2545]">
            Eastern Freight Corridor sits above the rail peer median on cost escalation while remaining slightly below peer progress.
          </p>
        </div>
        <div className="flex min-w-0 gap-2 overflow-x-auto">
          {chartTabs.map((tab, index) => (
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
        <div className="flex flex-wrap gap-4 text-sm font-bold text-[#526276]">
          {legend.map((item) => (
            <span className="inline-flex items-center gap-2" key={item.label}>
              <i className={cx("size-3 rounded-full", item.className)} />
              {item.label}
            </span>
          ))}
        </div>
        <div className="max-w-full overflow-x-auto" style={{ contain: "layout paint" }}>
          <svg className="h-80 w-[940px] max-w-none" viewBox="0 0 940 280" role="img" aria-label="Sector cost escalation benchmark chart">
            {[0, 20, 40, 60, 80].map((tick) => {
              const y = yFor(tick);
              return (
                <g key={tick}>
                  <line stroke="#dce8f3" strokeWidth="1" x1={plot.left} x2={plot.left + plot.width} y1={y} y2={y} />
                  <text fill="#526276" fontSize="12" fontWeight="700" textAnchor="end" x={plot.left - 12} y={y + 4}>
                    {tick}
                  </text>
                </g>
              );
            })}
            <text fill="#0b2545" fontSize="12" fontWeight="800" transform="rotate(-90 14 124)" x="14" y="124">
              Cost Escalation (%)
            </text>
            {sectorComparison.map((sector, index) => {
              const x = xFor(index);
              const boxTop = yFor(sector.q3);
              const boxBottom = yFor(sector.q1);
              return (
                <g key={sector.sector}>
                  <line stroke="#7898b6" strokeWidth="2" x1={x} x2={x} y1={yFor(sector.high)} y2={yFor(sector.low)} />
                  <rect fill="#c9d6e2" height={boxBottom - boxTop} opacity="0.78" rx="5" width="42" x={x - 21} y={boxTop} />
                  <line stroke="#0b2545" strokeWidth="2" x1={x - 24} x2={x + 24} y1={yFor(sector.median)} y2={yFor(sector.median)} />
                  <circle cx={x} cy={yFor(sector.average)} fill="#f97316" r="5" />
                  <circle cx={x} cy={yFor(sector.selection)} fill="#ef4444" r="5" />
                  <text fill="#263d59" fontSize="11" fontWeight="700" textAnchor="middle" x={x} y="244">
                    {sector.sector}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
      </CardBody>
    </Card>
  );
}

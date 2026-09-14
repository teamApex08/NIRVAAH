import React from "react";
import { cx } from "../../lib/formatters.js";
import { Card, CardBody, CardHeader } from "../ui/Card.jsx";
import { cycleChanges, monthlyWarningTrend, severityDistribution, warningTypeBreakdown } from "./earlyWarningsData.js";

const changeTone = {
  red: "bg-red-50 text-red-700",
  orange: "bg-orange-50 text-orange-700",
  blue: "bg-blue-50 text-blue-700",
  green: "bg-emerald-50 text-emerald-700",
};

/**
 * Analytics cards under the queue.
 *
 * The charts are lightweight CSS/SVG visuals so the page remains fast while we
 * wait for a production charting library decision.
 */
export function WarningAnalytics() {
  return (
    <section className="grid min-w-0 gap-4 lg:grid-cols-2 2xl:grid-cols-4" aria-label="Warning analytics">
      <SeverityDistribution />
      <WarningTypeBreakdown />
      <MonthlyWarningTrend />
      <CycleChanges />
    </section>
  );
}

function SeverityDistribution() {
  return (
    <Card>
      <CardHeader>
        <h2 className="text-lg font-black text-[#052b63]">Warning Severity Distribution</h2>
        <p className="mt-1 text-sm text-[#526276]">Analysed projects only</p>
      </CardHeader>
      <CardBody className="grid gap-4 sm:grid-cols-[150px_1fr] sm:items-center lg:grid-cols-1 xl:grid-cols-[150px_1fr]">
        <div
          className="mx-auto grid size-36 place-items-center rounded-full"
          style={{ background: "conic-gradient(#dc2626 0 16%, #f97316 16% 48%, #facc15 48% 82%, #10b981 82% 100%)" }}
          aria-hidden="true"
        >
          <div className="grid size-24 place-items-center rounded-full bg-white text-center shadow-inner">
            <strong className="block text-2xl font-black leading-none text-[#052b63]">76</strong>
            <span className="text-xs font-bold text-[#526276]">Active Warnings</span>
          </div>
        </div>
        <div className="grid gap-2">
          {severityDistribution.map((item) => (
            <div className="flex items-center justify-between gap-3 text-sm" key={item.label}>
              <span className="inline-flex items-center gap-2 font-bold text-[#263d59]">
                <i className={cx("size-2.5 rounded-full", item.color)} />
                {item.label}
              </span>
              <span className="font-black text-[#052b63]">
                {item.count} ({item.percent})
              </span>
            </div>
          ))}
        </div>
      </CardBody>
    </Card>
  );
}

function WarningTypeBreakdown() {
  return (
    <Card>
      <CardHeader>
        <h2 className="text-lg font-black text-[#052b63]">Warning Type Breakdown</h2>
        <p className="mt-1 text-sm text-[#526276]">Top detected signal categories</p>
      </CardHeader>
      <CardBody className="grid gap-3">
        {warningTypeBreakdown.map((item) => (
          <div className="grid gap-1.5" key={item.label}>
            <div className="flex items-center justify-between gap-3 text-sm">
              <span className="font-bold text-[#263d59]">{item.label}</span>
              <span className="font-black text-[#052b63]">{item.count}</span>
            </div>
            <span className="h-2 overflow-hidden rounded-full bg-[#dce8f3]">
              <i className={cx("block h-full rounded-full", item.color)} style={{ width: `${item.width}%` }} />
            </span>
          </div>
        ))}
      </CardBody>
    </Card>
  );
}

function MonthlyWarningTrend() {
  const points = monthlyWarningTrend.map((item, index) => {
    const x = 18 + index * 32;
    const y = 92 - item.total;
    return `${x},${y}`;
  });

  return (
    <Card>
      <CardHeader>
        <h2 className="text-lg font-black text-[#052b63]">Monthly Warning Trend</h2>
        <p className="mt-1 text-sm text-[#526276]">Total, new and critical warnings</p>
      </CardHeader>
      <CardBody>
        <svg className="h-44 w-full" viewBox="0 0 200 120" role="img" aria-label="Monthly warning trend line chart">
          {[20, 50, 80, 110].map((y) => (
            <line stroke="#dce8f3" strokeWidth="1" x1="8" x2="192" y1={y} y2={y} key={y} />
          ))}
          <polyline fill="none" points={points.join(" ")} stroke="#dc2626" strokeLinecap="round" strokeWidth="3" />
          {monthlyWarningTrend.map((item, index) => (
            <g key={item.month}>
              <circle cx={18 + index * 32} cy={92 - item.total} fill="#dc2626" r="3" />
              <text fill="#526276" fontSize="8" fontWeight="700" textAnchor="middle" x={18 + index * 32} y="112">
                {item.month}
              </text>
            </g>
          ))}
        </svg>
        <div className="grid gap-2 text-sm">
          <span className="font-black text-red-600">76 total warnings</span>
          <span className="font-bold text-[#526276]">18 new warnings · 12 critical warnings</span>
        </div>
      </CardBody>
    </Card>
  );
}

function CycleChanges() {
  return (
    <Card>
      <CardHeader>
        <h2 className="text-lg font-black text-[#052b63]">What Changed This Cycle?</h2>
        <p className="mt-1 text-sm text-[#526276]">NIRVAAH generated insights</p>
      </CardHeader>
      <CardBody className="grid gap-3">
        {cycleChanges.map(({ icon: Icon, text, tone }) => (
          <div className="grid grid-cols-[40px_1fr] gap-3 rounded-lg bg-[#f6f9fc] p-3" key={text}>
            <span className={cx("grid size-10 place-items-center rounded-lg", changeTone[tone])}>
              <Icon className="size-5" aria-hidden="true" />
            </span>
            <p className="text-sm font-bold leading-6 text-[#263d59]">{text}</p>
          </div>
        ))}
      </CardBody>
    </Card>
  );
}

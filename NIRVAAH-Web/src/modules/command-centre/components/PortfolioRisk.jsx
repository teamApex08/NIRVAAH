import React from "react";
import { Card, CardBody, CardHeader } from "../../../components/ui/Card.jsx";
import { riskDistribution } from "../data/commandCentreData.js";

export function PortfolioRisk() {
  return (
    <Card>
      <CardHeader>
        <h2 className="text-lg font-black text-[#052b63]">Portfolio Risk</h2>
        <p className="mt-1 text-sm text-[#526276]">42 projects assessed</p>
      </CardHeader>
      <CardBody>
        <strong className="block text-5xl font-black leading-none text-[#052b63]">19</strong>
        <span className="mt-2 block text-sm font-semibold text-[#526276]">projects require elevated attention</span>
        <div className="mt-6 flex h-4 overflow-hidden rounded-full bg-[#edf3f9]">
          {riskDistribution.map((item) => (
            <i className={item.color} style={{ width: item.width }} key={item.label} />
          ))}
        </div>
        <ul className="mt-5 grid gap-3">
          {riskDistribution.map((item) => (
            <li className="grid grid-cols-[12px_1fr_auto] items-center gap-2 text-sm text-[#263d59]" key={item.label}>
              <i className={`size-2.5 rounded-full ${item.color}`} />
              <span>{item.label}</span>
              <strong className="font-black text-[#052b63]">
                {item.count} ({item.percent})
              </strong>
            </li>
          ))}
        </ul>
      </CardBody>
    </Card>
  );
}

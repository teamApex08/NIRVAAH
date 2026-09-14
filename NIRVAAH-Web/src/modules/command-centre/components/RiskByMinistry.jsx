import React from "react";
import { Card, CardBody, CardHeader } from "../../../components/ui/Card.jsx";
import { ministryRisk } from "../data/commandCentreData.js";

export function RiskByMinistry() {
  return (
    <Card>
      <CardHeader>
        <h2 className="text-lg font-black text-[#052b63]">Risk Concentration by Ministry</h2>
      </CardHeader>
      <CardBody className="grid gap-4">
        {ministryRisk.map((item) => (
          <div className="grid grid-cols-[1fr_auto] gap-2" key={item.ministry}>
            <span className="text-sm font-bold text-[#263d59]">{item.ministry}</span>
            <span className="text-sm font-black text-[#052b63]">{item.count}</span>
            <i className="col-span-2 h-3 overflow-hidden rounded-full bg-[#e9f1f8]">
              <b
                className="block h-full rounded-full bg-[linear-gradient(90deg,#dc2626,#f97316)]"
                style={{ width: `${item.width}%` }}
              />
            </i>
            <small className="col-span-2 text-xs font-semibold text-[#748397]">Exposure {item.exposure}</small>
          </div>
        ))}
      </CardBody>
    </Card>
  );
}

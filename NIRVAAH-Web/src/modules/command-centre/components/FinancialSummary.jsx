import React from "react";
import { Card, CardBody, CardHeader } from "../../../components/ui/Card.jsx";

const financials = [
  ["Original Cost", "₹33.70 Lakh Cr"],
  ["Revised Cost", "₹37.10 Lakh Cr"],
  ["Expenditure", "₹19.26 Lakh Cr"],
];

export function FinancialSummary() {
  return (
    <Card className="xl:col-span-2">
      <CardHeader>
        <h2 className="text-lg font-black text-[#052b63]">Portfolio Financial Summary</h2>
      </CardHeader>
      <CardBody>
        <div className="grid gap-3 sm:grid-cols-3">
          {financials.map(([label, value]) => (
            <span className="rounded-lg bg-[#f3f8fd] p-4 text-sm font-bold text-[#526276]" key={label}>
              {label}
              <strong className="mt-1 block text-lg font-black text-[#052b63]">{value}</strong>
            </span>
          ))}
        </div>
        <p className="mt-4 text-xs font-semibold text-[#748397]">PAIMANA Flash Report - July 2026 · Model v0.3</p>
      </CardBody>
    </Card>
  );
}

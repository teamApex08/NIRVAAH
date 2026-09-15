import { Card, CardBody, CardHeader } from "../ui/Card.jsx";

// Compact financial metrics shown together in one panel.
const financials = [
  ["Original Cost", "₹33.70 Lakh Cr"],
  ["Revised Cost", "₹37.10 Lakh Cr"],
  ["Expenditure", "₹19.26 Lakh Cr"],
];


export function FinancialSummary() {
  return (
    <Card>
      <CardHeader>
        <h2 className="nirvaah-section-title">Portfolio Financial Summary</h2>
      </CardHeader>
      <CardBody>
        <dl className="grid overflow-hidden rounded-[8px] border border-[#e2e8f0] sm:grid-cols-3">
          {financials.map(([label, value]) => (
            <div className="border-b border-[#e2e8f0] p-4 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0" key={label}>
              <dt className="text-xs font-black uppercase text-[#748397]">{label}</dt>
              <dd className="mt-1 text-lg font-black text-[#0b2545]">{value}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-4 text-xs font-semibold text-[#748397]">PAIMANA Flash Report - July 2026 · Model v0.3</p>
      </CardBody>
    </Card>
  );
}

import { cx } from "../../lib/formatters.js";
import { Card, CardBody, CardHeader } from "../ui/Card.jsx";
import { portfolioChanges } from "./commandCentreData.js";

// Color choices for positive, warning, and neutral movement cards.
const toneStyles = {
  red: "text-[#b91c1c]",
  green: "text-[#166534]",
  orange: "text-[#b45309]",
  blue: "text-[#0b2545]",
};


export function PortfolioChange() {
  return (
    <Card>
      <CardHeader>
        <h2 className="nirvaah-section-title">What changed since June</h2>
        <p className="mt-1 text-sm leading-6 text-[#526276]">Movement that should shape this month's review agenda.</p>
      </CardHeader>
      <CardBody>
        <dl className="grid gap-0 overflow-hidden rounded-[8px] border border-[#e2e8f0] sm:grid-cols-2 xl:grid-cols-4">
          {portfolioChanges.map((item) => (
            <div className="border-b border-[#e2e8f0] p-3 last:border-b-0 sm:odd:border-r xl:border-b-0 xl:border-r xl:last:border-r-0" key={item.label}>
              <dt className="text-xs font-black uppercase text-[#748397]">{item.label}</dt>
              <dd className={cx("mt-1 text-xl font-black", toneStyles[item.tone])}>{item.value}</dd>
              <dd className="mt-1 text-xs font-semibold leading-5 text-[#526276]">{item.text}</dd>
            </div>
          ))}
        </dl>
      </CardBody>
    </Card>
  );
}

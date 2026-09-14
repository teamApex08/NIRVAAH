import React from "react";
import { Card } from "../../../components/ui/Card.jsx";
import { cx } from "../../../lib/formatters.js";
import { portfolioChanges } from "../data/commandCentreData.js";

// Color choices for positive, warning, and neutral movement cards.
const toneStyles = {
  red: "bg-red-50 text-red-700",
  green: "bg-emerald-50 text-emerald-700",
  orange: "bg-orange-50 text-orange-700",
  blue: "bg-blue-50 text-blue-700",
};

/**
 * Month-on-month portfolio movement strip.
 *
 * It highlights what changed since the previous report before users dive into
 * project-level detail.
 */
export function PortfolioChange() {
  return (
    <Card className="grid gap-3 p-4 xl:col-span-3 xl:grid-cols-[220px_repeat(4,minmax(0,1fr))] xl:items-center">
      <h2 className="text-lg font-black text-[#052b63]">Portfolio Change · July 2026</h2>
      {portfolioChanges.map((item) => (
        <article className={cx("rounded-lg p-3", toneStyles[item.tone])} key={item.label}>
          <span className="block text-xs font-bold opacity-80">{item.label}</span>
          <strong className="mt-1 block text-xl font-black">{item.value}</strong>
          <small className="mt-1 block text-xs font-semibold opacity-80">{item.text}</small>
        </article>
      ))}
    </Card>
  );
}

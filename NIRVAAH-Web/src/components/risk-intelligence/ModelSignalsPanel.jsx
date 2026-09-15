import React from "react";
import { Card, CardBody, CardHeader } from "../ui/Card.jsx";
import { Pill } from "../ui/Pill.jsx";
import { cx } from "../../lib/formatters.js";
import { modelSignals, riskGlossary } from "./riskIntelligenceData.js";

const toneClasses = {
  blue: "border border-[#0b2545]/15 bg-[#f2f5f8] text-[#0b2545]",
  green: "border border-[#15803d]/20 bg-[#ecfdf3] text-[#166534]",
  orange: "border border-[#d97706]/20 bg-[#fff7ed] text-[#b45309]",
  purple: "border border-[#475569]/20 bg-[#f1f5f9] text-[#334155]",
};

/**
 * Model status and glossary panel.
 *
 * This keeps AI-generated risk signals transparent and easier for new team
 * members to understand.
 */
export function ModelSignalsPanel() {
  return (
    <Card className="min-w-0">
      <CardHeader>
        <h2 className="text-lg font-black text-[#0b2545]">Model Signals</h2>
        <p className="mt-1 text-sm leading-6 text-[#526276]">Source, explainability and governance context for generated risk signals.</p>
      </CardHeader>
      <CardBody className="grid gap-4">
        <div className="grid gap-3">
          {modelSignals.map((signal) => {
            const Icon = signal.icon;

            return (
              <article className="grid grid-cols-[40px_1fr] gap-3 rounded-md border border-[#e2e8f0] bg-[#f8fafc] p-3" key={signal.title}>
                <span className={cx("grid size-10 place-items-center rounded-md", toneClasses[signal.tone])}>
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-black uppercase tracking-wide text-[#748397]">{signal.title}</p>
                  <strong className="mt-1 block text-sm font-black text-[#0b2545]">{signal.value}</strong>
                  <p className="mt-1 text-sm font-semibold leading-6 text-[#526276]">{signal.description}</p>
                </div>
              </article>
            );
          })}
        </div>
        <section className="rounded-lg border border-[#d5e1ec] bg-white p-4" aria-labelledby="risk-glossary-title">
          <h3 className="text-sm font-black text-[#0b2545]" id="risk-glossary-title">
            Quick Glossary
          </h3>
          <div className="mt-3 grid gap-3">
            {riskGlossary.map((item) => (
              <div key={item.term}>
                <Pill tone="blue">{item.term}</Pill>
                <p className="mt-1 text-sm font-semibold leading-6 text-[#526276]">{item.meaning}</p>
              </div>
            ))}
          </div>
        </section>
      </CardBody>
    </Card>
  );
}

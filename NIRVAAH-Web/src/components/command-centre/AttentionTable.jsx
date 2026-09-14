import { ArrowRight, TrendingUp } from "lucide-react";
import { Button } from "../ui/Button.jsx";
import { Card, CardBody, CardHeader } from "../ui/Card.jsx";
import { Pill } from "../ui/Pill.jsx";
import { attentionRows } from "./commandCentreData.js";
import { RiskPill } from "./RiskPill.jsx";

export function AttentionTable() {
  return (
    <Card className="xl:col-span-2">
      <CardHeader className="flex flex-col gap-3 sm:flex-row sm:items-start">
        <div className="mr-auto">
          <h2 className="text-lg font-black text-[#052b63]">Projects Requiring Attention</h2>
          <p className="mt-1 text-sm leading-6 text-[#526276]">
            Prioritised using predicted cost risk, schedule risk and recent project changes.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Pill tone="red">7 Immediate</Pill>
          <Pill tone="blue">12 High Risk</Pill>
          <Button as="a" href="/projects" variant="secondary" className="min-h-8 px-3 py-1.5 text-xs">
            View All
            <ArrowRight className="size-3.5" aria-hidden="true" />
          </Button>
        </div>
      </CardHeader>
      <CardBody className="p-0">
        {/* Intentional mobile behavior: scroll the wide table, do not shrink columns. */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[920px] border-collapse text-left">
            <thead>
              <tr className="bg-[#edf6ff] text-xs font-black text-[#052b63]">
                {["Project", "Ministry", "Location", "Risk", "Trend", "Primary Driver", "Confidence", "Action"].map(
                  (head) => (
                    <th className="border-b border-[#d5e1ec] px-4 py-3" key={head}>
                      {head}
                    </th>
                  ),
                )}
              </tr>
            </thead>
            <tbody>
              {attentionRows.map((row) => (
                // Each row represents one project that needs officer attention.
                <tr className="text-sm text-[#263d59] transition hover:bg-[#f8fbfe]" key={row.project}>
                  <td className="border-b border-[#e7eff7] px-4 py-3 font-black text-[#10233d]">{row.project}</td>
                  <td className="border-b border-[#e7eff7] px-4 py-3">{row.ministry}</td>
                  <td className="border-b border-[#e7eff7] px-4 py-3">{row.location}</td>
                  <td className="border-b border-[#e7eff7] px-4 py-3">
                    <RiskPill risk={row.risk} />
                  </td>
                  <td className="border-b border-[#e7eff7] px-4 py-3">
                    <span className="inline-flex items-center gap-1 text-red-600">
                      <TrendingUp className="size-4" aria-hidden="true" />
                      {row.trend}
                    </span>
                  </td>
                  <td className="border-b border-[#e7eff7] px-4 py-3">{row.driver}</td>
                  <td className="border-b border-[#e7eff7] px-4 py-3">{row.confidence}</td>
                  <td className="border-b border-[#e7eff7] px-4 py-3">
                    <a className="inline-flex items-center gap-1 font-black text-[#075db7]" href="/projects">
                      {row.action}
                      <ArrowRight className="size-3.5" aria-hidden="true" />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardBody>
    </Card>
  );
}

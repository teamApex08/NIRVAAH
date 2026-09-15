import { ArrowRight, TrendingUp } from "lucide-react";
import { Button } from "../ui/Button.jsx";
import { Card, CardBody, CardHeader } from "../ui/Card.jsx";
import { Pill } from "../ui/Pill.jsx";
import { attentionRows } from "./commandCentreData.js";
import { RiskPill } from "./RiskPill.jsx";

export function AttentionTable() {
  return (
    <Card>
      <CardHeader className="flex flex-col gap-3 sm:flex-row sm:items-start">
        <div className="mr-auto">
          <h2 className="nirvaah-section-title">Immediate Attention Queue</h2>
          <p className="mt-1 text-sm leading-6 text-[#526276]">
            Ordered by severity, recent movement, evidence confidence and recommended next action.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Pill tone="red">7 Immediate</Pill>
          <Pill tone="blue">12 High Risk</Pill>
          <Button as="a" href="/nirvaah/projects" variant="secondary" className="min-h-8 px-3 py-1.5 text-xs">
            View All
            <ArrowRight className="size-3.5" aria-hidden="true" />
          </Button>
        </div>
      </CardHeader>
      <CardBody className="p-0">
        <div className="overflow-x-auto">
          <table className="nirvaah-table min-w-[860px]">
            <thead>
              <tr>
                {["Project", "Ministry / State", "Risk", "Recent change", "Evidence", "Next action"].map((head) => (
                  <th key={head}>{head}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {attentionRows.map((row) => (
                <tr key={row.project}>
                  <td className="font-black text-[#10233d]">{row.project}</td>
                  <td>
                    <span className="block font-bold text-[#263d59]">{row.ministry}</span>
                    <span className="mt-1 block text-xs font-semibold text-[#748397]">{row.location}</span>
                  </td>
                  <td>
                    <RiskPill risk={row.risk} />
                  </td>
                  <td>
                    <span className={`inline-flex items-center gap-1 font-black ${row.trend === "Rising" ? "text-[#b91c1c]" : "text-[#475569]"}`}>
                      <TrendingUp className="size-4" aria-hidden="true" />
                      {row.trend}
                    </span>
                  </td>
                  <td>
                    <span className="block font-semibold text-[#263d59]">{row.driver}</span>
                    <span className="mt-1 block text-xs font-black uppercase text-[#748397]">{row.confidence} confidence</span>
                  </td>
                  <td>
                    <Button as="a" href="/nirvaah/projects" variant="quiet" className="min-h-9 px-3 py-1.5 text-xs">
                      {row.action}
                      <ArrowRight className="size-3.5" aria-hidden="true" />
                    </Button>
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

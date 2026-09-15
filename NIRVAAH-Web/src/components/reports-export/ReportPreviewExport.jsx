import React from "react";
import { Download, Eye } from "lucide-react";
import { Button } from "../ui/Button.jsx";
import { Card, CardBody, CardHeader } from "../ui/Card.jsx";
import { cx } from "../../lib/formatters.js";
import { exportFormats, previewKpis, previewSummary } from "./reportsExportData.js";

const toneClasses = {
  blue: "border border-[#0b2545]/15 bg-[#f2f5f8] text-[#0b2545]",
  green: "border border-[#15803d]/20 bg-[#ecfdf3] text-[#166534]",
  orange: "border border-[#d97706]/20 bg-[#fff7ed] text-[#b45309]",
  red: "border border-[#b91c1c]/20 bg-[#fef2f2] text-[#b91c1c]",
};

/**
 * Step 3 of the builder: preview the report and choose an export format.
 */
export function ReportPreviewExport() {
  return (
    <Card className="min-w-0 border-l-4 border-l-[#15803d]">
      <CardHeader className="flex flex-col gap-3 sm:flex-row sm:items-start">
        <div className="mr-auto">
          <p className="text-sm font-bold text-[#166534]">3. Preview & Export</p>
          <h2 className="mt-1 text-lg font-black text-[#0b2545]">Review before downloading</h2>
          <p className="mt-1 text-sm leading-6 text-[#526276]">Confirm scope and format before generating the file.</p>
        </div>
        <Button type="button" variant="secondary" className="w-full sm:w-auto">
          <Eye className="size-4" aria-hidden="true" />
          Preview
        </Button>
      </CardHeader>
      <CardBody className="grid gap-4">
        <article className="overflow-hidden rounded-md border border-[#c9d6e2] bg-[#f8fafc]">
          <div className="grid gap-4 border-b border-[#dbe4ec] bg-white p-4 lg:grid-cols-[minmax(0,1fr)_150px]">
            <div className="min-w-0">
              <p className="text-xs font-black uppercase tracking-wide text-[#0b2545]">NIRVAAH</p>
              <h3 className="mt-1 text-xl font-black text-[#0b2545]">{previewSummary.title}</h3>
              <p className="mt-1 text-sm font-semibold text-[#526276]">{previewSummary.subtitle}</p>
            </div>
            <div className="grid gap-2">
              {previewKpis.map((kpi) => (
                <div className={cx("rounded-md px-3 py-2 text-xs font-bold", toneClasses[kpi.tone])} key={kpi.label}>
                  <strong className="block text-base leading-tight">{kpi.value}</strong>
                  <span>{kpi.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 p-4 lg:grid-cols-[minmax(0,1fr)_170px]">
            <section aria-label="Key report highlights">
              <h4 className="text-sm font-black text-[#0b2545]">Key Highlights</h4>
              <ul className="mt-3 grid gap-2">
                {previewSummary.highlights.map((highlight) => (
                  <li className="flex gap-2 text-sm leading-6 text-[#263d59]" key={highlight}>
                    <span className="mt-2 size-2 rounded-full bg-emerald-500" aria-hidden="true" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 grid gap-3">
                {previewSummary.distribution.map((row) => (
                  <div className="grid grid-cols-[80px_1fr_36px] items-center gap-2 text-xs font-bold text-[#526276]" key={row.label}>
                    <span>{row.label}</span>
                    <span className="h-2 overflow-hidden rounded-full bg-[#dfeaf5]">
                      <span className="block h-full rounded-full bg-[#0b2545]" style={{ width: `${row.value}%` }} />
                    </span>
                    <span className="text-right">{row.value}%</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-md border border-[#e2e8f0] bg-white p-3" aria-label="Risk distribution">
              <div className="mx-auto grid size-24 place-items-center rounded-full border-[14px] border-[#0b2545] text-center">
                <strong className="text-2xl font-black text-[#0b2545]">42</strong>
                <span className="-mt-1 text-[10px] font-bold text-[#526276]">Analysed</span>
              </div>
              <div className="mt-4 grid gap-2">
                {previewSummary.riskMix.map((risk) => (
                  <div className="flex items-center justify-between gap-2 text-xs font-bold text-[#526276]" key={risk.label}>
                    <span className="flex items-center gap-2">
                      <span className={cx("size-2.5 rounded-full", risk.color)} aria-hidden="true" />
                      {risk.label}
                    </span>
                    <span>{risk.value}%</span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </article>

        <div className="grid gap-3 sm:grid-cols-3">
          {exportFormats.map((format) => {
            const Icon = format.icon;

            return (
              <button
                className="grid min-h-20 grid-cols-[40px_1fr] items-center gap-3 rounded-md border border-[#c9d6e2] bg-white p-3 text-left transition hover:border-[#d97706] hover:bg-[#fffdf8]"
                key={format.label}
                type="button"
              >
                <span className={cx("grid size-10 place-items-center rounded-md", toneClasses[format.tone])}>
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <span>
                  <strong className="block text-sm font-black text-[#0b2545]">{format.label}</strong>
                  <span className="mt-1 block text-xs font-semibold text-[#526276]">{format.description}</span>
                </span>
              </button>
            );
          })}
        </div>

        <Button type="button" className="w-full">
          <Download className="size-4" aria-hidden="true" />
          Generate Report
        </Button>
      </CardBody>
    </Card>
  );
}

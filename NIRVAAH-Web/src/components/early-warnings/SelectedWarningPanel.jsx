import React from "react";
import { ArrowRight, ClipboardCheck, FileText, Pin, ShieldAlert } from "lucide-react";
import { Button } from "../ui/Button.jsx";
import { Card, CardBody, CardHeader } from "../ui/Card.jsx";
import { ConfidencePill, WarningSeverityPill, WarningStatusPill } from "./WarningPills.jsx";
import { selectedWarning } from "./earlyWarningsData.js";

/**
 * Detail panel for the selected warning.
 *
 * For now this reads the first warning from dummy data. Once row selection is
 * interactive, pass the selected warning into this component as a prop.
 */
export function SelectedWarningPanel() {
  return (
    <Card as="aside" className="h-fit" aria-label="Selected warning details">
      <CardHeader className="flex items-start justify-between gap-3">
        <div>
          <h2 className="text-lg font-black text-[#0b2545]">Selected Warning Details</h2>
          <p className="mt-1 text-sm text-[#526276]">{selectedWarning.id}</p>
        </div>
        <Pin className="size-4 text-[#0b2545]" aria-hidden="true" />
      </CardHeader>
      <CardBody className="grid gap-5">
        <div>
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="text-xl font-black leading-7 text-[#0b2545]">{selectedWarning.project}</h3>
              <p className="mt-1 text-sm font-bold text-[#748397]">Project ID: {selectedWarning.projectId}</p>
            </div>
            <WarningSeverityPill severity={selectedWarning.severity} />
          </div>
          <dl className="mt-4 grid gap-2 sm:grid-cols-3 xl:grid-cols-1">
            {[
              ["Ministry", selectedWarning.ministry],
              ["Sector", "Railways"],
              ["State", selectedWarning.state],
            ].map(([label, value]) => (
              <div className="rounded-md border border-[#e2e8f0] bg-[#f8fafc] p-3" key={label}>
                <dt className="text-xs font-black uppercase tracking-wide text-[#748397]">{label}</dt>
                <dd className="mt-1 text-sm font-black text-[#10233d]">{value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="grid gap-3">
          <div className="flex flex-wrap gap-2">
            <WarningStatusPill status={selectedWarning.status} />
            <ConfidencePill confidence={selectedWarning.confidence} />
          </div>
          <div className="rounded-lg border border-red-100 bg-red-50 p-3">
            <p className="text-xs font-black uppercase tracking-wide text-red-700">Key Reason</p>
            <p className="mt-1 text-sm font-bold leading-6 text-red-800">{selectedWarning.keyReason}</p>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-black text-[#0b2545]">Evidence from Data</h4>
          <ul className="mt-2 grid gap-2">
            {selectedWarning.evidenceFromData.map((item) => (
              <li className="grid grid-cols-[20px_1fr] gap-2 text-sm font-semibold leading-6 text-[#263d59]" key={item}>
                <ShieldAlert className="mt-1 size-4 text-[#0b2545]" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-lg bg-[#f8fafc] p-3">
          <p className="text-xs font-black uppercase tracking-wide text-[#0b2545]">Suggested Next Step</p>
          <p className="mt-1 text-sm font-bold leading-6 text-[#0b2545]">{selectedWarning.suggestedStep}</p>
        </div>

        <div className="grid gap-2 sm:grid-cols-2 xl:grid-cols-1">
          <Button type="button" className="w-full">
            <ClipboardCheck className="size-4" aria-hidden="true" />
            Acknowledge
          </Button>
          <Button type="button" variant="secondary" className="w-full">
            <FileText className="size-4" aria-hidden="true" />
            Create Review Note
          </Button>
          <Button type="button" variant="secondary" className="w-full sm:col-span-2 xl:col-span-1">
            View Project Details
            <ArrowRight className="size-4" aria-hidden="true" />
          </Button>
        </div>

        <div>
          <h4 className="text-sm font-black text-[#0b2545]">Warning History</h4>
          <ol className="mt-3 grid gap-3">
            {selectedWarning.history.map((event) => (
              <li className="grid grid-cols-[14px_1fr] gap-3" key={`${event.label}-${event.date}`}>
                <span className="mt-1.5 size-3 rounded-full bg-[#0b2545] ring-4 ring-[#f2f5f8]" />
                <span>
                  <strong className="block text-sm font-black text-[#10233d]">{event.label}</strong>
                  <span className="block text-xs font-bold text-[#748397]">{event.date}</span>
                  <span className="mt-1 block text-xs font-semibold leading-5 text-[#526276]">{event.note}</span>
                </span>
              </li>
            ))}
          </ol>
        </div>
      </CardBody>
    </Card>
  );
}

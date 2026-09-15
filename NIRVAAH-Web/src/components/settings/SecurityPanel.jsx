import React from "react";
import { Card, CardBody, CardHeader } from "../ui/Card.jsx";
import { Pill } from "../ui/Pill.jsx";
import { cx } from "../../lib/formatters.js";
import { recentSettingActivity, securityControls } from "./settingsData.js";

const toneClasses = {
  blue: "border border-[#0b2545]/15 bg-[#f2f5f8] text-[#0b2545]",
  green: "border border-[#15803d]/20 bg-[#ecfdf3] text-[#166534]",
  orange: "border border-[#d97706]/20 bg-[#fff7ed] text-[#b45309]",
};

/**
 * Security and data governance status panel.
 */
export function SecurityPanel() {
  return (
    <Card className="min-w-0 border-l-4 border-l-[#475569]">
      <CardHeader>
        <h2 className="text-lg font-black text-[#0b2545]">Data & Security</h2>
        <p className="mt-1 text-sm leading-6 text-[#526276]">Review source freshness, account controls and audit visibility.</p>
      </CardHeader>
      <CardBody className="grid gap-4">
        <div className="grid gap-3">
          {securityControls.map((control) => {
            const Icon = control.icon;

            return (
              <article className="grid grid-cols-[40px_1fr_auto] items-center gap-3 rounded-md border border-[#e2e8f0] bg-[#f8fafc] p-3" key={control.title}>
                <span className={cx("grid size-10 place-items-center rounded-md", toneClasses[control.tone])}>
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <strong className="block text-sm font-black text-[#0b2545]">{control.title}</strong>
                  <span className="mt-1 block text-xs font-semibold leading-5 text-[#526276]">{control.description}</span>
                </div>
                <Pill tone={control.tone}>{control.status}</Pill>
              </article>
            );
          })}
        </div>

        <section className="rounded-md border border-[#c9d6e2] bg-white p-4" aria-labelledby="activity-title">
          <h3 className="text-sm font-black text-[#0b2545]" id="activity-title">
            Recent Settings Activity
          </h3>
          <ul className="mt-3 grid gap-2">
            {recentSettingActivity.map((activity) => (
              <li className="flex gap-2 text-sm font-semibold leading-6 text-[#263d59]" key={activity}>
                <span className="mt-2 size-2 rounded-full bg-[#d97706]" aria-hidden="true" />
                <span>{activity}</span>
              </li>
            ))}
          </ul>
        </section>
      </CardBody>
    </Card>
  );
}

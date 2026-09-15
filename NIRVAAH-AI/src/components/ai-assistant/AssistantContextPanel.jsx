import React from "react";
import { ExternalLink, Info, ShieldCheck } from "lucide-react";
import { Button } from "../../ui/Button.jsx";
import { Card, CardBody, CardHeader } from "../../ui/Card.jsx";
import { Pill } from "../../ui/Pill.jsx";
import { cx } from "../../utils/cx.js";
import { assistantCapabilities, currentContext, dataSources, recentAssistantTopics } from "../../data/aiAssistantData.js";
import { aiAssistantIcons } from "./aiAssistantIcons.js";
import { formatAssistantContextTime } from "../../services/assistantContextService.js";

const toneClasses = {
  blue: "border border-[#0b2545]/15 bg-[#f2f5f8] text-[#0b2545]",
  green: "border border-[#15803d]/20 bg-[#ecfdf3] text-[#166534]",
  orange: "border border-[#d97706]/20 bg-[#fff7ed] text-[#b45309]",
  purple: "border border-[#475569]/20 bg-[#f1f5f9] text-[#334155]",
};

function getCurrentContextItems(handoffContext) {
  if (!handoffContext) {
    return currentContext;
  }

  return [
    {
      icon: "MessageSquare",
      label: "Opened From",
      value: handoffContext.pageLabel,
    },
    {
      icon: "Filter",
      label: "Selected Scope",
      value: handoffContext.scope,
    },
    {
      icon: "Target",
      label: handoffContext.projectName ? "Selected Project" : "Current Focus",
      value: handoffContext.projectName ?? handoffContext.focus,
    },
    {
      icon: "Clock3",
      label: "Context Captured",
      value: formatAssistantContextTime(handoffContext.capturedAt),
    },
  ];
}

/**
 * Right-side companion panel.
 *
 * It keeps context, provenance and capabilities visible so users understand
 * what the assistant is using while answering.
 */
export function AssistantContextPanel({ handoffContext }) {
  const contextItems = getCurrentContextItems(handoffContext);

  return (
    <aside className="grid h-fit min-w-0 gap-4">
      <Card className="min-w-0">
        <CardHeader className="flex items-start gap-3">
          <span className="grid size-10 shrink-0 place-items-center rounded-[6px] border border-[#0b2545]/15 bg-[#f2f5f8] text-[#0b2545]">
            <Info className="size-5" aria-hidden="true" />
          </span>
          <div className="min-w-0">
            <h2 className="text-base font-black text-[#0b2545]">Current Context</h2>
            <p className="mt-1 text-sm leading-6 text-[#526276]">Scope applied to the assistant answer.</p>
          </div>
        </CardHeader>
        <CardBody className="grid gap-3">
          {contextItems.map((item) => {
            const Icon = aiAssistantIcons[item.icon];

            return (
              <div className="grid grid-cols-[36px_1fr] gap-3 border-b border-[#e2e8f0] pb-3 last:border-b-0 last:pb-0" key={item.label}>
                <span className="grid size-9 place-items-center rounded-[6px] bg-[#f8fafc] text-[#0b2545]">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-black uppercase text-[#748397]">{item.label}</p>
                  <strong className="mt-1 block text-sm font-black leading-5 text-[#0b2545]">{item.value}</strong>
                </div>
              </div>
            );
          })}
          <Button type="button" variant="secondary" className="w-full">
            Update Context
          </Button>
        </CardBody>
      </Card>

      <Card className="min-w-0">
        <CardHeader>
          <h2 className="text-base font-black text-[#0b2545]">Data Sources & Provenance</h2>
          <p className="mt-1 text-sm leading-6 text-[#526276]">Transparent sources behind the answer.</p>
        </CardHeader>
        <CardBody className="grid gap-3">
          {dataSources.map((source) => {
            const Icon = aiAssistantIcons[source.icon];

            return (
              <article className="grid gap-3 rounded-[8px] border border-[#e2e8f0] bg-white p-3" key={source.name}>
                <div className="grid grid-cols-[40px_1fr] gap-3">
                  <span className={cx("grid size-10 place-items-center rounded-[6px]", toneClasses[source.tone])}>
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <strong className="text-sm font-black text-[#0b2545]">{source.name}</strong>
                      <Pill tone={source.tone === "purple" ? "blue" : source.tone}>{source.label}</Pill>
                    </div>
                    <p className="mt-1 text-sm font-semibold leading-6 text-[#526276]">{source.description}</p>
                  </div>
                </div>
                <span className="rounded-md bg-[#f2f5f8] px-3 py-2 text-xs font-black text-[#0b2545]">{source.badge}</span>
              </article>
            );
          })}
        </CardBody>
      </Card>

      <Card className="min-w-0">
        <CardHeader>
          <h2 className="text-base font-black text-[#0b2545]">Suggested Follow-ups</h2>
        </CardHeader>
        <CardBody className="grid gap-2">
          {assistantCapabilities.map((capability) => {
            const Icon = aiAssistantIcons[capability.icon];

            return (
              <button
                className="grid min-h-16 grid-cols-[40px_1fr] items-center gap-3 rounded-[8px] border border-transparent bg-[#f8fafc] p-3 text-left transition hover:border-[#d97706] hover:bg-[#fffdf8]"
                key={capability.title}
                type="button"
              >
                <span className={cx("grid size-10 place-items-center rounded-[6px]", toneClasses[capability.tone])}>
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <strong className="block text-sm font-black text-[#0b2545]">{capability.title}</strong>
                  <span className="mt-1 block text-xs font-semibold text-[#526276]">{capability.description}</span>
                </span>
              </button>
            );
          })}
        </CardBody>
      </Card>

      <Card className="min-w-0">
        <CardHeader className="flex items-start gap-3">
          <span className="grid size-10 shrink-0 place-items-center rounded-[6px] bg-[#ecfdf3] text-[#166534]">
            <ShieldCheck className="size-5" aria-hidden="true" />
          </span>
          <div className="min-w-0">
            <h2 className="text-base font-black text-[#0b2545]">Responsible Use</h2>
            <p className="mt-1 text-sm leading-6 text-[#526276]">Grounded in official data and NIRVAAH analytics.</p>
          </div>
        </CardHeader>
        <CardBody>
          <div className="flex flex-wrap gap-2">
            {recentAssistantTopics.map((topic) => (
              <Pill key={topic} tone="blue">
                {topic}
              </Pill>
            ))}
          </div>
          <Button type="button" variant="ghost" className="mt-4 w-full">
            Learn More
            <ExternalLink className="size-4" aria-hidden="true" />
          </Button>
        </CardBody>
      </Card>
    </aside>
  );
}

import React from "react";
import { Bot, ThumbsDown, ThumbsUp } from "lucide-react";
import { Button } from "../../ui/Button.jsx";
import { Card } from "../../ui/Card.jsx";
import { Pill } from "../../ui/Pill.jsx";
import { cx } from "../../utils/cx.js";
import { answerMetrics, answerSections, assistantConversation } from "../../data/aiAssistantData.js";
import { AssistantPromptComposer } from "./AssistantPromptComposer.jsx";
import { aiAssistantIcons } from "./aiAssistantIcons.js";
import { formatAssistantContextTime } from "../../services/assistantContextService.js";

const metricToneClasses = {
  blue: "border border-[#0b2545]/15 bg-[#f2f5f8] text-[#0b2545]",
  orange: "border border-[#d97706]/20 bg-[#fff7ed] text-[#b45309]",
  purple: "border border-[#475569]/20 bg-[#f1f5f9] text-[#334155]",
  red: "border border-[#b91c1c]/20 bg-[#fef2f2] text-[#b91c1c]",
};

function getConversationSnapshot(handoffContext, initialQuestion) {
  if (!handoffContext) {
    return {
      userQuestion: assistantConversation.userQuestion,
      answerTitle: assistantConversation.answerTitle,
      summary: assistantConversation.summary,
      metrics: answerMetrics,
      sections: answerSections,
      status: {
        riskPriority: assistantConversation.riskPriority,
        riskScore: assistantConversation.riskScore,
        changedFrom: assistantConversation.changedFrom,
      },
    };
  }

  const projectValue = handoffContext.projectName ?? "Current portfolio view";

  return {
    userQuestion: initialQuestion || `Continue with context from ${handoffContext.pageLabel}.`,
    answerTitle: `${handoffContext.pageLabel} context is ready`,
    summary: handoffContext.insight,
    metrics: [
      {
        icon: "MessageSquare",
        label: "Opened From",
        value: handoffContext.pageLabel,
        note: handoffContext.pagePath,
        source: "Route context",
        tone: "blue",
      },
      {
        icon: "Filter",
        label: "Active Scope",
        value: handoffContext.scope,
        note: "Applied to this session",
        source: "Workspace",
        tone: "purple",
      },
      {
        icon: "Target",
        label: "Current Focus",
        value: projectValue,
        note: handoffContext.projectId ?? handoffContext.focus,
        source: "Page state",
        tone: handoffContext.projectName ? "orange" : "blue",
      },
      {
        icon: "Clock3",
        label: "Captured",
        value: formatAssistantContextTime(handoffContext.capturedAt),
        note: "Preserved from widget",
        source: "Session",
        tone: "purple",
      },
    ],
    sections: [
      {
        icon: "FileText",
        title: "Context Applied",
        body: `Answers in this workspace can use the ${handoffContext.pageLabel} page, active scope, current focus and selected project details where available.`,
      },
      {
        icon: "BarChart3",
        title: "Useful Next Questions",
        bullets: handoffContext.promptSuggestions?.slice(0, 3) ?? [],
      },
      {
        icon: "CheckCircle2",
        title: "Suggested Next Step",
        body: handoffContext.projectName
          ? `Ask for a short risk explanation or review note for ${handoffContext.projectName}.`
          : "Ask for a summary, comparison or action-ready brief using the preserved page context.",
      },
    ],
    status: null,
  };
}

/**
 * Main assistant conversation area.
 *
 * It shows a realistic answer pattern: user question, concise conclusion,
 * evidence cards, reasoning sections, and feedback controls.
 */
export function AssistantChatPanel({ handoffContext, initialQuestion }) {
  const conversationSnapshot = getConversationSnapshot(handoffContext, initialQuestion);

  return (
    <Card className="min-w-0 overflow-hidden">
      <div className="border-b border-[#e4edf6] p-4">
        <div className="mx-auto grid max-w-4xl gap-2 sm:grid-cols-[40px_1fr]">
          <span className="hidden size-10 place-items-center rounded-full bg-[#0b2545] text-sm font-black text-white sm:grid">AS</span>
          <div className="rounded-[8px] bg-[#f7fafc] px-4 py-3 text-sm font-bold leading-6 text-[#10233d] ring-1 ring-[#e2e8f0]">
            {conversationSnapshot.userQuestion}
          </div>
        </div>
      </div>

      <div className="grid gap-4 px-4 py-5">
        <article className="mx-auto grid w-full max-w-4xl min-w-0 gap-5">
          <header className="grid gap-3 sm:grid-cols-[44px_1fr]">
            <span className="grid size-11 place-items-center rounded-[8px] border border-[#0b2545]/15 bg-[#f2f5f8] text-[#0b2545]">
              <Bot className="size-6" aria-hidden="true" />
            </span>
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <strong className="text-sm font-black text-[#0b2545]">NIRVAAH Assistant</strong>
                <span className="text-xs font-semibold text-[#748397]">10:24 AM</span>
              </div>
              <h2 className="mt-2 text-xl font-black leading-tight text-[#0b2545]">{conversationSnapshot.answerTitle}</h2>
              {conversationSnapshot.status ? (
                <div className="mt-3 flex flex-wrap gap-2 rounded-[8px] border border-[#fed7d7] bg-[#fff7f7] px-3 py-2 text-sm font-bold text-[#b91c1c]">
                  <span>Risk Priority: {conversationSnapshot.status.riskPriority}</span>
                  <span className="hidden text-red-300 sm:inline">|</span>
                  <span>Risk Score: {conversationSnapshot.status.riskScore}</span>
                  <span className="hidden text-red-300 sm:inline">|</span>
                  <span>Up from {conversationSnapshot.status.changedFrom}</span>
                </div>
              ) : (
                <div className="mt-3 flex flex-wrap gap-2 rounded-[8px] border border-[#cfe8d8] bg-[#f6fff8] px-3 py-2 text-sm font-bold text-[#166534]">
                  <span>Page-aware context active</span>
                  {handoffContext?.projectName && (
                    <>
                      <span className="hidden text-[#8ac7a4] sm:inline">|</span>
                      <span>{handoffContext.projectName}</span>
                    </>
                  )}
                </div>
              )}
              <p className="mt-3 text-sm font-semibold leading-6 text-[#263d59]">{conversationSnapshot.summary}</p>
            </div>
          </header>

          <section className="grid min-w-0 gap-3 md:grid-cols-2 xl:grid-cols-4" aria-label="Assistant evidence metrics">
            {conversationSnapshot.metrics.map((metric) => {
              const Icon = aiAssistantIcons[metric.icon];

              return (
                <div className="rounded-[8px] border border-[#d5e1ec] bg-white p-4" key={metric.label}>
                  <span className={cx("grid size-9 place-items-center rounded-[6px]", metricToneClasses[metric.tone])}>
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <p className="mt-3 text-xs font-black uppercase text-[#526276]">{metric.label}</p>
                  <strong className="mt-1 block break-words text-lg font-black text-[#0b2545] xl:text-xl">{metric.value}</strong>
                  <span className="mt-1 block text-xs font-semibold text-[#748397]">{metric.note}</span>
                  <Pill className="mt-3" tone={metric.tone === "red" ? "red" : "blue"}>
                    Source: {metric.source}
                  </Pill>
                </div>
              );
            })}
          </section>

          <section className="grid gap-3" aria-label="Assistant explanation">
            {conversationSnapshot.sections.map((section) => {
              const Icon = aiAssistantIcons[section.icon];

              return (
                <div className="grid gap-3 border-t border-[#e2e8f0] pt-4 sm:grid-cols-[36px_150px_1fr]" key={section.title}>
                  <span className="grid size-9 place-items-center rounded-[6px] bg-[#f8fafc] text-[#0b2545]">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <strong className="text-sm font-black text-[#0b2545]">{section.title}</strong>
                  {section.bullets ? (
                    <ul className="grid gap-1 text-sm font-semibold leading-6 text-[#263d59]">
                      {section.bullets.map((bullet) => (
                        <li className="flex gap-2" key={bullet}>
                          <span className="mt-2 size-1.5 rounded-full bg-[#15803d]" aria-hidden="true" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm font-semibold leading-6 text-[#263d59]">{section.body}</p>
                  )}
                </div>
              );
            })}
          </section>

          <footer className="flex flex-col gap-3 border-t border-[#e4edf6] pt-3 sm:flex-row sm:items-center">
            <p className="mr-auto text-sm font-semibold text-[#526276]">Was this answer helpful?</p>
            <div className="flex gap-2">
              <Button type="button" variant="secondary" className="min-h-10 px-3" aria-label="Mark answer helpful">
                <ThumbsUp className="size-4" aria-hidden="true" />
              </Button>
              <Button type="button" variant="secondary" className="min-h-10 px-3" aria-label="Mark answer not helpful">
                <ThumbsDown className="size-4" aria-hidden="true" />
              </Button>
            </div>
          </footer>
        </article>
      </div>

      <AssistantPromptComposer />
    </Card>
  );
}

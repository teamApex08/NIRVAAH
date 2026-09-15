import React from "react";
import { assistantNotice } from "../../data/aiAssistantData.js";
import { aiAssistantIcons } from "./aiAssistantIcons.js";

/**
 * Responsible-use banner for the assistant.
 *
 * This is intentionally short so it informs the user without interrupting the
 * main chat workflow.
 */
export function AssistantNotice() {
  const Icon = aiAssistantIcons[assistantNotice.icon];

  return (
    <section className="grid min-w-0 grid-cols-[36px_1fr] gap-3 rounded-[8px] border border-[#cfe8d8] bg-[#fbfffc] p-3" aria-label="Assistant grounding notice">
      <span className="grid size-9 place-items-center rounded-[6px] bg-[#ecfdf3] text-[#166534]">
        <Icon className="size-5" aria-hidden="true" />
      </span>
      <div className="min-w-0">
        <strong className="block text-sm font-black text-[#0b2545]">{assistantNotice.title}</strong>
        <p className="mt-1 text-sm leading-6 text-[#263d59]">{assistantNotice.text}</p>
      </div>
    </section>
  );
}

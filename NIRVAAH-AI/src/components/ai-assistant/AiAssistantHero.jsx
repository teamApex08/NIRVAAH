import React from "react";
import { ShieldCheck } from "lucide-react";
import { PageHero } from "../../ui/PageHero.jsx";

/**
 * Page introduction for the AI Assistant.
 *
 * The heading explains the purpose quickly, while the small status pill sets
 * the expectation that this is a grounded decision-support workspace.
 */
export function AiAssistantHero() {
  return (
    <PageHero
      eyebrow="AI Assistant"
      title="AI Assistant"
      titleId="ai-assistant-title"
      description="Ask page-aware questions, inspect evidence and turn project intelligence into review-ready action notes."
      tone="green"
    >
      <div className="inline-flex min-h-10 items-center gap-2 rounded-[6px] border border-[#c9d6e2] bg-white px-3 text-sm font-black text-[#0b2545]">
        Context-aware decision support
        <ShieldCheck className="size-4 text-[#15803d]" aria-hidden="true" />
      </div>
    </PageHero>
  );
}

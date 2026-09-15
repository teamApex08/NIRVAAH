import React from "react";
import { useLocation } from "react-router-dom";
import { AiAssistantHero } from "../components/ai-assistant/AiAssistantHero.jsx";
import { AssistantChatPanel } from "../components/ai-assistant/AssistantChatPanel.jsx";
import { AssistantContextPanel } from "../components/ai-assistant/AssistantContextPanel.jsx";
import { AssistantNotice } from "../components/ai-assistant/AssistantNotice.jsx";
import { readStoredAssistantContext } from "../services/assistantContextService.js";

function getHandoffContext(location) {
  return location.state?.assistantContext ?? readStoredAssistantContext();
}

/**
 * Route-level page for /nirvaah/ai-assistant.
 *
 * The pulled GitHub layout owns the sidebar and top bar. This page focuses on
 * the AI Assistant workflow and keeps each major area in a reusable component.
 */
function AiAssistantPage() {
  const location = useLocation();
  const handoffContext = getHandoffContext(location);

  return (
    <main className="mx-auto grid w-full max-w-[1680px] min-w-0 gap-4" aria-labelledby="ai-assistant-title">
      <AiAssistantHero />
      <AssistantNotice />
      <section className="grid min-w-0 gap-4 xl:grid-cols-[minmax(0,1fr)_380px]" aria-label="AI assistant workspace">
        <AssistantChatPanel handoffContext={handoffContext} initialQuestion={handoffContext?.draftQuestion} />
        <AssistantContextPanel handoffContext={handoffContext} />
      </section>
    </main>
  );
}

export default AiAssistantPage;

import React, { useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Bot, Maximize2, MessageSquareText, Send, Sparkles, X } from "lucide-react";
import { Button } from "../../ui/Button.jsx";
import { cx } from "../../utils/cx.js";
import {
  FULL_ASSISTANT_PATH,
  buildAssistantHandoffContext,
  getAssistantRouteContext,
  storeAssistantContext,
} from "../../services/assistantContextService.js";

function buildInlineAnswer(context, question) {
  const projectScope = context.projectName ? ` The selected project context is ${context.projectName} (${context.projectId}).` : "";

  return `${context.insight} I will keep this scoped to ${context.pageLabel}: ${context.scope}.${projectScope}`;
}

export function FloatingAiAssistantWidget() {
  const location = useLocation();
  const navigate = useNavigate();
  const context = useMemo(() => getAssistantRouteContext(location.pathname), [location.pathname]);
  const [isOpen, setIsOpen] = useState(false);
  const [draftQuestion, setDraftQuestion] = useState("");
  const [conversation, setConversation] = useState([]);
  const isDashboardRoute = location.pathname.startsWith("/nirvaah/");
  const canShowWidget = isDashboardRoute && location.pathname !== FULL_ASSISTANT_PATH;
  const lastQuestion = conversation.find((message) => message.role === "user")?.text ?? "";

  function submitQuestion(question) {
    const trimmedQuestion = question.trim();

    if (!trimmedQuestion) {
      return;
    }

    setConversation([
      { role: "user", text: trimmedQuestion },
      { role: "assistant", text: buildInlineAnswer(context, trimmedQuestion) },
    ]);
    setDraftQuestion("");
  }

  function openFullAssistant() {
    const handoffContext = buildAssistantHandoffContext(context, draftQuestion || lastQuestion);

    storeAssistantContext(handoffContext);
    setIsOpen(false);
    navigate(FULL_ASSISTANT_PATH, {
      state: {
        assistantContext: handoffContext,
      },
    });
  }

  if (!canShowWidget) {
    return null;
  }

  if (!isOpen) {
    return (
      <div className="fixed bottom-4 right-3 z-50 sm:bottom-5 sm:right-5 print:hidden">
        <button
          className="group flex min-h-14 items-center gap-3 rounded-md border border-[#0b2545] bg-[#0b2545] px-3 text-left text-white shadow-[0_18px_34px_rgba(11,37,69,0.24)] transition hover:-translate-y-0.5 hover:bg-[#071a33] sm:px-4"
          type="button"
          onClick={() => setIsOpen(true)}
          aria-label="Open AI Assistant widget"
        >
          <span className="grid size-10 place-items-center rounded-md bg-white text-[#0b2545]">
            <Bot className="size-5" aria-hidden="true" />
          </span>
          <span className="hidden min-w-0 leading-tight sm:grid">
            <strong className="text-sm font-black">Ask NIRVAAH</strong>
            <span className="text-xs font-semibold text-white/72">{context.pageLabel}</span>
          </span>
        </button>
      </div>
    );
  }

  return (
    <section
      className={cx(
        "fixed bottom-3 z-50 max-h-[min(78vh,34rem)] overflow-hidden rounded-md border border-[#0b2545]/20 bg-white text-[#10233d] shadow-[0_24px_58px_rgba(11,37,69,0.28)] print:hidden",
        isDashboardRoute
          ? "left-[4.75rem] right-3 sm:left-auto sm:right-5 sm:w-96"
          : "right-3 w-[calc(100vw-1.5rem)] max-w-[24rem] sm:right-5 sm:w-96",
      )}
      aria-label="AI Assistant quick chat"
    >
      <header className="flex items-start gap-3 border-b border-[#dbe4ec] bg-[#fbfcfd] p-3">
        <span className="grid size-10 shrink-0 place-items-center rounded-md border border-[#0b2545]/15 bg-[#f2f5f8] text-[#0b2545]">
          <Bot className="size-5" aria-hidden="true" />
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h2 className="text-sm font-black text-[#0b2545]">NIRVAAH Assistant</h2>
            <span className="inline-flex rounded-full border border-[#15803d]/20 bg-[#ecfdf3] px-2 py-0.5 text-[11px] font-black uppercase text-[#166534]">
              Context ready
            </span>
          </div>
          <p className="mt-1 truncate text-xs font-semibold text-[#526276]">{context.pageLabel}</p>
        </div>
        <div className="flex shrink-0 gap-1">
          <button
            className="grid size-9 place-items-center rounded-md text-[#0b2545] transition hover:bg-[#eef2f5]"
            type="button"
            onClick={openFullAssistant}
            aria-label="Open full AI Assistant page"
            title="Open full AI Assistant page"
          >
            <Maximize2 className="size-4" aria-hidden="true" />
          </button>
          <button
            className="grid size-9 place-items-center rounded-md text-[#0b2545] transition hover:bg-[#eef2f5]"
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="Close AI Assistant widget"
            title="Close AI Assistant widget"
          >
            <X className="size-4" aria-hidden="true" />
          </button>
        </div>
      </header>

      <div className="grid max-h-[calc(min(78vh,34rem)-4.25rem)] gap-3 overflow-y-auto p-3">
        <div className="grid gap-2 rounded-md border border-[#e2e8f0] bg-[#f8fafc] p-3">
          <div className="flex items-start gap-2">
            <Sparkles className="mt-0.5 size-4 text-[#d97706]" aria-hidden="true" />
            <div className="min-w-0">
              <p className="text-xs font-black uppercase text-[#748397]">Current Context</p>
              <strong className="mt-1 block text-sm leading-5 text-[#0b2545]">{context.focus}</strong>
              {context.projectName && (
                <span className="mt-1 block truncate text-xs font-bold text-[#526276]">
                  {context.projectName} | {context.projectId}
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="grid gap-2" aria-live="polite">
          {conversation.length === 0 ? (
            <article className="grid grid-cols-[32px_1fr] gap-2">
              <span className="grid size-8 place-items-center rounded-md bg-[#f2f5f8] text-[#0b2545]">
                <MessageSquareText className="size-4" aria-hidden="true" />
              </span>
              <p className="rounded-md bg-[#f8fafc] px-3 py-2 text-sm font-semibold leading-6 text-[#263d59]">
                {context.insight}
              </p>
            </article>
          ) : (
            conversation.map((message) => (
              <article
                className={cx(
                  "grid gap-2",
                  message.role === "user" ? "justify-items-end" : "grid-cols-[32px_1fr]",
                )}
                key={`${message.role}-${message.text}`}
              >
                {message.role === "assistant" && (
                  <span className="grid size-8 place-items-center rounded-md bg-[#f2f5f8] text-[#0b2545]">
                    <Bot className="size-4" aria-hidden="true" />
                  </span>
                )}
                <p
                  className={cx(
                    "max-w-[19rem] rounded-md px-3 py-2 text-sm font-semibold leading-6",
                    message.role === "user" ? "bg-[#0b2545] text-white" : "bg-[#f8fafc] text-[#263d59]",
                  )}
                >
                  {message.text}
                </p>
              </article>
            ))
          )}
        </div>

        <div className="flex gap-2 overflow-x-auto pb-1" aria-label="Suggested assistant questions">
          {context.promptSuggestions.slice(0, 3).map((prompt) => (
            <button
              className="min-h-9 shrink-0 rounded-full border border-[#c5d8eb] bg-white px-3 text-xs font-bold text-[#0b2545] transition hover:border-[#d97706] hover:bg-[#fff8ed]"
              key={prompt}
              type="button"
              onClick={() => submitQuestion(prompt)}
            >
              {prompt}
            </button>
          ))}
        </div>

        <form
          className="grid grid-cols-[1fr_auto] overflow-hidden rounded-md border border-[#cfdcea] bg-white"
          onSubmit={(event) => {
            event.preventDefault();
            submitQuestion(draftQuestion);
          }}
        >
          <input
            className="min-h-11 min-w-0 bg-transparent px-3 text-sm font-semibold text-[#10233d] outline-none placeholder:text-[#8a98aa]"
            placeholder="Ask about this page..."
            value={draftQuestion}
            onChange={(event) => setDraftQuestion(event.target.value)}
            type="text"
          />
          <Button className="min-h-11 rounded-none px-3" type="submit" aria-label="Send quick assistant question">
            <Send className="size-4" aria-hidden="true" />
          </Button>
        </form>
      </div>
    </section>
  );
}

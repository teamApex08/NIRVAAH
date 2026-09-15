import React from "react";
import { Bot, Send } from "lucide-react";
import { Button } from "../../ui/Button.jsx";
import { Card, CardBody, CardHeader } from "../../ui/Card.jsx";
import { projectAssistantPrompts } from "../../data/pageAssistantPrompts.js";

/**
 * Page-specific Ask NIRVAAH panel.
 *
 * The prompt list is project-focused so users can start with practical
 * portfolio questions instead of a blank chat box.
 */
export function ProjectsAssistantPanel() {
  return (
    <Card as="aside">
      <CardHeader className="flex items-start gap-3">
        <span className="grid size-10 shrink-0 place-items-center rounded-md border border-[#0b2545]/15 bg-[#f2f5f8] text-[#0b2545]">
          <Bot className="size-5" aria-hidden="true" />
        </span>
        <div>
          <h2 className="text-lg font-black text-[#0b2545]">Ask NIRVAAH</h2>
          <p className="mt-1 text-sm leading-6 text-[#526276]">Ask questions about project risk, delay drivers or ministry trends.</p>
        </div>
      </CardHeader>
      <CardBody>
        <div className="grid gap-2">
          {projectAssistantPrompts.map((prompt) => (
            <button
              className="rounded-md border border-transparent bg-[#f8fafc] px-3 py-3 text-left text-sm font-bold leading-5 text-[#0b2545] transition hover:border-[#d97706] hover:bg-[#fffdf8]"
              type="button"
              key={prompt}
            >
              {prompt}
            </button>
          ))}
        </div>
        {/* This form is ready for the future assistant endpoint. */}
        <label className="mt-4 grid grid-cols-[1fr_auto] overflow-hidden rounded-lg border border-[#cfdcea] bg-white">
          <input className="min-h-11 min-w-0 px-3 text-sm outline-none" placeholder="Ask about projects..." />
          <Button className="rounded-none px-3" type="button" aria-label="Send project question">
            <Send className="size-4" aria-hidden="true" />
          </Button>
        </label>
      </CardBody>
    </Card>
  );
}

import React from "react";
import { Bot, Send } from "lucide-react";
import { Button } from "../../ui/Button.jsx";
import { Card, CardBody, CardHeader } from "../../ui/Card.jsx";
import { warningAssistantPrompts } from "../../data/pageAssistantPrompts.js";

/**
 * Assistant panel focused on early-warning questions.
 */
export function EarlyWarningsAssistant() {
  return (
    <Card className="border-l-4 border-l-[#b91c1c]">
      <CardHeader className="flex items-start gap-3">
        <span className="grid size-10 shrink-0 place-items-center rounded-md bg-[#fef2f2] text-[#b91c1c]">
          <Bot className="size-5" aria-hidden="true" />
        </span>
        <div>
          <h2 className="text-lg font-black text-[#0b2545]">NIRVAAH Intelligence</h2>
          <p className="mt-1 text-sm leading-6 text-[#526276]">Ask questions about warning signals, escalation and evidence.</p>
        </div>
      </CardHeader>
      <CardBody>
        <div className="grid gap-2 sm:grid-cols-2 xl:grid-cols-4">
          {warningAssistantPrompts.map((prompt) => (
            <button
              className="rounded-md border border-transparent bg-[#f8fafc] px-3 py-3 text-left text-sm font-bold leading-5 text-[#0b2545] transition hover:border-[#d97706] hover:bg-[#fff8ed]"
              type="button"
              key={prompt}
            >
              {prompt}
            </button>
          ))}
        </div>
        {/* This is a presentational shell until the assistant API is connected. */}
        <label className="mt-4 grid grid-cols-[1fr_auto] overflow-hidden rounded-md border border-[#cfdcea] bg-white">
          <input className="min-h-11 min-w-0 px-3 text-sm outline-none" placeholder="Type your warning question..." />
          <Button className="rounded-none px-3" type="button" aria-label="Send warning question">
            <Send className="size-4" aria-hidden="true" />
          </Button>
        </label>
      </CardBody>
    </Card>
  );
}

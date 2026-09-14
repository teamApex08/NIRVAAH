import React from "react";
import { Bot, Send } from "lucide-react";
import { Button } from "../ui/Button.jsx";
import { Card, CardBody, CardHeader } from "../ui/Card.jsx";
import { warningAssistantPrompts } from "./earlyWarningsData.js";

/**
 * Assistant panel focused on early-warning questions.
 */
export function EarlyWarningsAssistant() {
  return (
    <Card>
      <CardHeader className="flex items-start gap-3">
        <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-[#e9f3fd] text-[#075db7]">
          <Bot className="size-5" aria-hidden="true" />
        </span>
        <div>
          <h2 className="text-lg font-black text-[#052b63]">NIRVAAH Intelligence</h2>
          <p className="mt-1 text-sm leading-6 text-[#526276]">Ask questions about warning signals, escalation and evidence.</p>
        </div>
      </CardHeader>
      <CardBody>
        <div className="grid gap-2 sm:grid-cols-2 xl:grid-cols-4">
          {warningAssistantPrompts.map((prompt) => (
            <button
              className="rounded-lg bg-[#eef6ff] px-3 py-3 text-left text-sm font-bold leading-5 text-[#052b63] transition hover:bg-[#dcebfb]"
              type="button"
              key={prompt}
            >
              {prompt}
            </button>
          ))}
        </div>
        {/* This is a presentational shell until the assistant API is connected. */}
        <label className="mt-4 grid grid-cols-[1fr_auto] overflow-hidden rounded-lg border border-[#cfdcea] bg-white">
          <input className="min-h-11 min-w-0 px-3 text-sm outline-none" placeholder="Type your warning question..." />
          <Button className="rounded-none px-3" type="button" aria-label="Send warning question">
            <Send className="size-4" aria-hidden="true" />
          </Button>
        </label>
      </CardBody>
    </Card>
  );
}

import React from "react";
import { Send } from "lucide-react";
import { Button } from "../../../components/ui/Button.jsx";
import { Card, CardBody, CardHeader } from "../../../components/ui/Card.jsx";
import { assistantPrompts } from "../data/commandCentreData.js";

export function AskNirvaah() {
  return (
    <Card>
      <CardHeader>
        <h2 className="text-lg font-black text-[#052b63]">Ask NIRVAAH</h2>
        <p className="mt-1 text-sm text-[#526276]">What would you like to understand about this portfolio?</p>
      </CardHeader>
      <CardBody>
        <div className="grid gap-2">
          {assistantPrompts.map((prompt) => (
            <button
              className="rounded-lg bg-[#eef6ff] px-3 py-3 text-left text-sm font-bold leading-5 text-[#052b63] transition hover:bg-[#dcebfb]"
              type="button"
              key={prompt}
            >
              {prompt}
            </button>
          ))}
        </div>
        <label className="mt-4 grid grid-cols-[1fr_auto] overflow-hidden rounded-lg border border-[#cfdcea] bg-white">
          <input className="min-h-11 min-w-0 px-3 text-sm outline-none" placeholder="Ask about this portfolio..." />
          <Button className="rounded-none px-3" type="button" aria-label="Send question">
            <Send className="size-4" aria-hidden="true" />
          </Button>
        </label>
      </CardBody>
    </Card>
  );
}

import { Send } from "lucide-react";
import { Button } from "../../ui/Button.jsx";
import { Card, CardBody, CardHeader } from "../../ui/Card.jsx";
import { commandCentreAssistantPrompts } from "../../data/pageAssistantPrompts.js";

export function AskNirvaah() {
  return (
    <Card className="border-l-4 border-l-[#15803d]">
      <CardHeader>
        <h2 className="text-lg font-black text-[#0b2545]">Ask NIRVAAH</h2>
        <p className="mt-1 text-sm text-[#526276]">What would you like to understand about this portfolio?</p>
      </CardHeader>
      <CardBody>
        {/* Starter prompts help users understand what they can ask first. */}
        <div className="grid gap-2">
          {commandCentreAssistantPrompts.map((prompt) => (
            <button
              className="rounded-md border border-transparent bg-[#f8fafc] px-3 py-3 text-left text-sm font-bold leading-5 text-[#0b2545] transition hover:border-[#d97706] hover:bg-[#fff8ed]"
              type="button"
              key={prompt}
            >
              {prompt}
            </button>
          ))}
        </div>
        {/* Form shell kept ready for future assistant API integration. */}
        <label className="mt-4 grid grid-cols-[1fr_auto] overflow-hidden rounded-md border border-[#cfdcea] bg-white">
          <input className="min-h-11 min-w-0 px-3 text-sm outline-none" placeholder="Ask about this portfolio..." />
          <Button className="rounded-none px-3" type="button" aria-label="Send question">
            <Send className="size-4" aria-hidden="true" />
          </Button>
        </label>
      </CardBody>
    </Card>
  );
}

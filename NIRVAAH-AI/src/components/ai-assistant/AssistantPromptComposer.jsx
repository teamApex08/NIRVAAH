import React from "react";
import { Paperclip, Send } from "lucide-react";
import { Button } from "../../ui/Button.jsx";
import { promptSuggestions } from "../../data/aiAssistantData.js";

/**
 * Suggested prompts and message composer.
 *
 * The buttons are presentational for now. They can later fill the input or
 * submit directly once the assistant service is connected.
 */
export function AssistantPromptComposer() {
  return (
    <section className="border-t border-[#dbe4ec] bg-[#fbfcfd] p-4" aria-label="Ask the assistant">
      <h2 className="text-sm font-black text-[#0b2545]">Suggested questions</h2>
      <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
        {promptSuggestions.map((prompt) => (
          <button
            className="min-h-10 shrink-0 rounded-full border border-[#c5d8eb] bg-white px-4 text-sm font-bold text-[#0b2545] transition hover:border-[#d97706] hover:bg-[#fff8ed]"
            key={prompt}
            type="button"
          >
            {prompt}
          </button>
        ))}
      </div>
      <form className="mt-3 grid grid-cols-[auto_1fr_auto] items-center overflow-hidden rounded-[8px] border border-[#cfdcea] bg-white">
        <button className="grid min-h-12 w-12 place-items-center text-[#0b2545] transition hover:bg-[#fff8ed]" type="button" aria-label="Attach supporting file">
          <Paperclip className="size-5" aria-hidden="true" />
        </button>
        <input
          className="min-h-12 min-w-0 bg-transparent px-1 text-sm font-semibold text-[#10233d] outline-none placeholder:text-[#8a98aa]"
          placeholder="Ask about projects, warnings, comparisons or draft actions..."
          type="text"
        />
        <Button className="min-h-12 rounded-none px-4" type="submit" aria-label="Send assistant question">
          <Send className="size-5" aria-hidden="true" />
        </Button>
      </form>
      <p className="mt-2 text-xs font-semibold text-[#748397]">Verify critical decisions with official reports before action.</p>
    </section>
  );
}

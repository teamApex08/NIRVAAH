import React from "react";

/**
 * Minimal emblem-style mark for the ministry lockup.
 *
 * It is drawn in CSS so the prototype does not depend on an external emblem
 * asset while layout is still being finalized.
 */
export function GovEmblem() {
  return (
    <span className="grid size-9 shrink-0 place-items-center rounded-lg border border-[#d5e1ec] bg-white" aria-hidden="true">
      <span className="h-6 w-4 border-2 border-y-[5px] border-[#1b2736]" />
    </span>
  );
}

/**
 * Small NIRVAAH product mark used beside the wordmark.
 */
export function PlatformMark() {
  return (
    <span className="grid size-9 shrink-0 place-items-center rounded-lg border border-[#0b8a7a]/25 bg-[#edf8f5]" aria-hidden="true">
      <span className="size-5 rounded-full border-[5px] border-[#0b8a7a] border-b-[#147b95] border-r-[#075db7]" />
    </span>
  );
}

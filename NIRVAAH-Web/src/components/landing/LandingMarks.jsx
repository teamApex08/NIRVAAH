import React from "react";
import { nirvaahEmblemSrc } from "../shared/brandAssets.js";

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
    <span className="grid size-10 shrink-0 place-items-center overflow-hidden rounded-md border border-[#c9d6e2] bg-white" aria-hidden="true">
      <img className="size-8 object-contain" src={nirvaahEmblemSrc} alt="" />
    </span>
  );
}

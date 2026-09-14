import React from "react";

/**
 * Reusable NIRVAAH brand lockup.
 *
 * compact removes the subtitle for tight spaces such as sidebars and mobile
 * headers. inverse switches the text color for dark backgrounds.
 */
export function BrandMark({ compact = false, inverse = false }) {
  return (
    <span className="flex min-w-0 items-center gap-3">
      <span
        className="grid size-10 shrink-0 place-items-center rounded-lg border border-[#0b8a7a]/25 bg-[#edf8f5]"
        aria-hidden="true"
      >
        <span className="size-6 rounded-full border-[5px] border-[#0b8a7a] border-b-[#147b95] border-r-[#075db7]" />
      </span>
      <span className="grid min-w-0 leading-tight">
        <strong className={inverse ? "text-lg font-black text-white" : "text-lg font-black text-[#052b63]"}>
          NIRVAAH
        </strong>
        {!compact && (
          <small className={inverse ? "text-xs font-semibold text-white/70" : "text-xs font-semibold text-[#526276]"}>
            Intelligence Command Centre
          </small>
        )}
      </span>
    </span>
  );
}

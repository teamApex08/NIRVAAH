import React from "react";
import { nirvaahEmblemSrc } from "./brandAssets.js";

/**
 * Reusable NIRVAAH brand lockup.
 *
 * compact removes the subtitle for tight spaces such as sidebars and mobile
 * headers. iconOnly keeps just the emblem for collapsed navigation.
 * inverse switches the text color for dark backgrounds.
 */
export function BrandMark({ compact = false, iconOnly = false, inverse = false }) {
  return (
    <span className={iconOnly ? "flex min-w-0 items-center justify-center" : "flex min-w-0 items-center gap-3"}>
      <span
        className="grid size-10 shrink-0 place-items-center overflow-hidden rounded-md border border-[#c9d6e2] bg-white"
        aria-hidden="true"
      >
        <img className="size-8 object-contain" src={nirvaahEmblemSrc} alt="" />
      </span>
      {!iconOnly && (
        <span className="grid min-w-0 leading-tight">
          <strong className={inverse ? "text-lg font-black text-white" : "text-lg font-black text-[#0b2545]"}>
            NIRVAAH
          </strong>
          {!compact && (
            <small className={inverse ? "text-xs font-semibold text-white/70" : "text-xs font-semibold text-[#64748b]"}>
              Intelligence Command Centre
            </small>
          )}
        </span>
      )}
    </span>
  );
}

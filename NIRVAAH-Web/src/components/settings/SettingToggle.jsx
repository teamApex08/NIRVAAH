import React from "react";
import { cx } from "../../lib/formatters.js";

/**
 * Reusable visual toggle for settings rows.
 *
 * It behaves like a button in this static prototype and can later call a real
 * update handler when preference APIs are connected.
 */
export function SettingToggle({ enabled, label }) {
  return (
    <button
      className={cx(
        "relative h-7 w-12 shrink-0 rounded-full transition focus:outline-none focus-visible:ring-4 focus-visible:ring-[#d97706]/20",
        enabled ? "bg-emerald-500" : "bg-slate-400",
      )}
      type="button"
      aria-label={`${enabled ? "Disable" : "Enable"} ${label}`}
    >
      <span className={cx("absolute top-1 size-5 rounded-full bg-white shadow transition", enabled ? "left-6" : "left-1")} />
    </button>
  );
}

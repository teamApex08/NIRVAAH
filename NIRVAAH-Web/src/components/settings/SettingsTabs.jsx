import React from "react";
import { settingsTabs } from "./settingsData.js";

/**
 * Settings navigation tabs.
 *
 * They are static in the prototype, but keeping them as data makes it simple
 * to route or filter settings sections later.
 */
export function SettingsTabs() {
  return (
    <nav className="flex min-w-0 gap-2 overflow-x-auto border-b border-[#d5e1ec]" aria-label="Settings sections">
      {settingsTabs.map((tab, index) => (
        <button
          className={[
            "min-h-11 shrink-0 border-b-2 px-4 text-sm font-black transition",
            index === 0
              ? "border-[#475569] bg-[#f1f5f9] text-[#0b2545]"
              : "border-transparent text-[#526276] hover:border-[#b8c9da] hover:text-[#0b2545]",
          ].join(" ")}
          key={tab}
          type="button"
        >
          {tab}
        </button>
      ))}
    </nav>
  );
}

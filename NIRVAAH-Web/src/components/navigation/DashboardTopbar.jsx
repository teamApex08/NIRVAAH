import React from "react";
import { Bell, CalendarDays, Search } from "lucide-react";
import { BrandMark } from "../shared/BrandMark.jsx";

/**
 * Sticky dashboard header.
 *
 * It provides brand context on small screens, search for larger screens, the
 * reporting period, notifications, and a compact user identity chip.
 */
export function DashboardTopbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-[#d5e1ec] bg-white/95 backdrop-blur-xl">
      <div className="flex min-h-16 items-center gap-3 px-4 sm:px-6 lg:px-8">
        <a href="/" className="lg:hidden">
          <BrandMark compact />
        </a>
        {/* Search is hidden on very small screens to avoid squeezing the header. */}
        <label className="ml-auto hidden min-w-0 max-w-xl flex-1 items-center gap-2 rounded-lg border border-[#d5e1ec] bg-[#f8fbfe] px-3 sm:flex">
          <Search className="size-4 text-[#748397]" aria-hidden="true" />
          <input
            className="min-h-10 min-w-0 flex-1 bg-transparent text-sm text-[#10233d] outline-none placeholder:text-[#748397]"
            placeholder="Search projects, ministries, sectors, states..."
          />
        </label>
        <button
          className="hidden min-h-10 items-center gap-2 rounded-lg border border-[#d5e1ec] bg-white px-3 text-sm font-bold text-[#052b63] md:inline-flex"
          type="button"
        >
          <CalendarDays className="size-4" aria-hidden="true" />
          July 2026
        </button>
        <button
          className="grid size-10 place-items-center rounded-lg border border-[#d5e1ec] bg-white text-[#052b63]"
          type="button"
          aria-label="Notifications"
        >
          <Bell className="size-4" aria-hidden="true" />
        </button>
        <div className="hidden items-center gap-2 rounded-lg bg-[#eef5fb] px-2 py-1.5 sm:flex">
          <span className="grid size-8 place-items-center rounded-full bg-[#052b63] text-xs font-black text-white">AS</span>
          <span className="text-xs font-bold text-[#526276]">Officer</span>
        </div>
      </div>
    </header>
  );
}

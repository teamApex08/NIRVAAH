import React from "react";
import { cx } from "../../lib/formatters.js";
import { dashboardNavItems } from "./dashboardNavItems.js";

/**
 * Bottom navigation for dashboard pages on mobile and tablet.
 *
 * Only the first five primary actions are shown here so the mobile control
 * stays compact and does not compete with page content.
 */
export function MobileDashboardNav({ activePath = "/command-centre" }) {
  return (
    <nav
      className="sticky bottom-0 z-40 flex gap-2 overflow-x-auto border-t border-[#d5e1ec] bg-white/95 px-3 py-2 backdrop-blur-xl lg:hidden"
      aria-label="Mobile dashboard navigation"
    >
      {/* Slice keeps secondary items like Settings out of the small screen nav. */}
      {dashboardNavItems.slice(0, 5).map((item) => {
        const Icon = item.icon;
        const isActive = item.href === activePath;

        return (
          <a
            className={cx(
              "grid min-w-20 place-items-center gap-1 rounded-lg px-3 py-2 text-center text-[11px] font-black text-[#526276]",
              isActive && "bg-[#e9f3fd] text-[#075db7]",
            )}
            href={item.href}
            key={item.label}
          >
            <Icon className="size-4" aria-hidden="true" />
            {item.label}
          </a>
        );
      })}
    </nav>
  );
}

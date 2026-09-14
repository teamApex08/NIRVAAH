import React from "react";
import { BrandMark } from "../shared/BrandMark.jsx";
import { cx } from "../../lib/formatters.js";
import { dashboardNavItems } from "./dashboardNavItems.js";

export function DashboardSidebar({ activePath = "/command-centre" }) {
  return (
    <aside className="sticky top-0 hidden h-screen w-64 shrink-0 flex-col bg-[#052b63] px-4 py-5 text-white lg:flex">
      <a href="/" className="rounded-lg bg-white/[0.08] p-3">
        <BrandMark compact inverse />
      </a>
      <nav className="mt-6 grid gap-1">
        {dashboardNavItems.map((item) => {
          const Icon = item.icon;
          const isActive = item.href === activePath;

          return (
            <a
              className={cx(
                "flex min-h-11 items-center gap-3 rounded-md px-3 text-sm font-bold text-white/[0.78] transition hover:bg-white/10 hover:text-white",
                isActive && "bg-[#075db7] text-white shadow-[0_12px_22px_rgba(0,0,0,0.18)]",
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
      <div className="mt-auto rounded-lg border border-white/10 bg-white/[0.08] p-4">
        <strong className="block text-sm font-black">Viksit Bharat 2047</strong>
        <span className="mt-1 block text-xs text-white/[0.65]">People · Data · Progress</span>
      </div>
    </aside>
  );
}

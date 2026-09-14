import React from "react";
import { GovEmblem } from "./LandingMarks.jsx";
import { navItems } from "./landingData.js";
import { pageShell } from "./landingStyles.js";

/**
 * Footer repeats key navigation and public-sector ownership context.
 */
export function LandingFooter() {
  return (
    <footer className="border-t border-[#d5e1ec] bg-white" id="contact">
      <div className={`${pageShell} grid gap-6 py-8 lg:grid-cols-[1fr_auto_1fr] lg:items-center`}>
        <div className="flex items-center gap-3">
          <GovEmblem />
          <div>
            <strong className="text-sm font-black text-[#052b63]">Ministry of Statistics & Programme Implementation</strong>
            <p className="mt-1 text-sm text-[#526276]">Government of India</p>
          </div>
        </div>
        <nav className="flex flex-wrap gap-x-4 gap-y-2 text-sm font-semibold text-[#526276]" aria-label="Footer navigation">
          {navItems.map((item) => (
            <a className="hover:text-[#052b63]" key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="lg:text-right">
          <strong className="text-sm font-black text-[#052b63]">NIRVAAH</strong>
          <p className="mt-1 text-sm text-[#526276]">SIH 2026 Prototype · PS 26103</p>
        </div>
      </div>
    </footer>
  );
}

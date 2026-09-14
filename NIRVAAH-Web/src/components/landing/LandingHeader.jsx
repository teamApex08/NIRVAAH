import React, { useState } from "react";
import { LandingIcon } from "./LandingIcon.jsx";
import { GovEmblem, PlatformMark } from "./LandingMarks.jsx";
import { navItems } from "./landingData.js";
import { primaryButton } from "./landingStyles.js";

/**
 * Sticky public header for the landing page.
 *
 * The mobile menu state stays local to this component because no other section
 * needs to know whether the navigation drawer is open.
 */
export function LandingHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const navLink =
    "rounded-md px-3 py-2 text-sm font-semibold text-[#263d59] transition hover:bg-[#eef5fb] hover:text-[#052b63]";

  return (
    <header className="sticky top-0 z-50 border-b border-[#d5e1ec]/90 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex min-h-[72px] w-full max-w-[1400px] items-center gap-3 px-4 sm:px-6 lg:px-10">
        <a className="flex min-w-0 items-center gap-3" href="#home" aria-label="NIRVAAH home">
          <GovEmblem />
          <span className="hidden min-w-0 leading-tight lg:grid">
            <strong className="text-sm font-extrabold text-[#052b63]">
              Ministry of Statistics &<br />
              Programme Implementation
            </strong>
            <small className="text-xs text-[#526276]">Government of India</small>
          </span>
          <span className="hidden h-9 w-px bg-[#b8c9da] lg:block" aria-hidden="true" />
          <PlatformMark />
          <span className="grid min-w-0 leading-tight">
            <strong className="text-sm font-extrabold text-[#052b63] sm:text-base">NIRVAAH</strong>
            <small className="hidden text-xs text-[#526276] sm:block">Intelligence Command Centre</small>
          </span>
          <span className="hidden rounded-full border border-[#075db7]/20 bg-[#e9f3fd] px-2.5 py-1.5 text-xs font-bold text-[#075db7] md:inline-flex">
            SIH Prototype
          </span>
        </a>

        <button
          className="ml-auto inline-grid size-11 place-items-center rounded-lg border border-[#d5e1ec] bg-white text-[#052b63] xl:hidden"
          type="button"
          aria-expanded={isOpen}
          aria-controls="site-navigation"
          aria-label="Toggle navigation"
          onClick={() => setIsOpen((value) => !value)}
        >
          <LandingIcon name={isOpen ? "close" : "menu"} />
        </button>

        <nav
          className={`absolute left-4 right-4 top-[78px] z-50 gap-1 rounded-lg border border-[#d5e1ec] bg-white p-2 shadow-xl xl:static xl:ml-auto xl:flex xl:items-center xl:justify-end xl:border-0 xl:bg-transparent xl:p-0 xl:shadow-none ${
            isOpen ? "grid" : "hidden"
          }`}
          id="site-navigation"
          aria-label="Primary"
        >
          {navItems.map((item, index) => (
            <a
              key={item.href}
              className={`${navLink} ${index === 0 ? "bg-[#eef5fb] text-[#052b63]" : ""}`}
              href={item.href}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Header CTA is desktop-only; mobile keeps the primary CTA inside the hero to avoid crowding. */}
        <a className={`${primaryButton} max-lg:!hidden lg:inline-flex`} href="/command-centre">
          Open Command Centre
          <LandingIcon name="arrow" className="size-4" />
        </a>
      </div>
    </header>
  );
}

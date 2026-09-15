import { useState } from "react";
import { Link } from "react-router-dom";

import { LandingIcon } from "./LandingIcon.jsx";
import { PlatformMark } from "./LandingMarks.jsx";
import { navItems } from "./landingData.js";
import { primaryButton } from "./landingStyles.js";

export function LandingHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const navLink =
    "rounded-md px-3 py-2 text-sm font-semibold text-[#263d59] transition hover:bg-[#f8fafc] hover:text-[#0b2545]";

  return (
    <header className="sticky top-0 z-50 border-b border-[#d5e1ec]/90 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto grid min-h-[72px] w-full max-w-[1400px] grid-cols-[1fr_auto_1fr] items-center px-4 sm:px-6 lg:px-10">

        {/* ==================== LEFT: LOGO ==================== */}
        <Link
          to="/"
          className="flex min-w-0 items-center gap-3 justify-self-start"
          aria-label="NIRVAAH home"
          onClick={() => setIsOpen(false)}
        >
          <PlatformMark />

          <span className="grid min-w-0 leading-tight">
            <strong className="text-sm font-extrabold text-[#0b2545] sm:text-base">
              NIRVAAH
            </strong>

            <small className="hidden text-xs text-[#526276] sm:block">
              Intelligence Command Centre
            </small>
          </span>
        </Link>

        {/* ==================== CENTER: DESKTOP NAVIGATION ==================== */}
        <nav
          id="site-navigation"
          aria-label="Primary"
          className="hidden items-center justify-center gap-1 xl:flex"
        >
          {navItems.map((item, index) => (
            <a
              key={item.href}
              href={`/${item.href}`}
              className={`${navLink} ${
                index === 0 ? "bg-[#f8fafc] text-[#0b2545]" : ""
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* ==================== RIGHT: COMMAND CENTRE ==================== */}
        <div className="hidden justify-self-end xl:flex">
          <Link
            to="/nirvaah/command-centre"
            className={`${primaryButton} inline-flex items-center gap-2`}
          >
            Open Command Centre

            <LandingIcon
              name="arrow"
              className="size-4"
            />
          </Link>
        </div>

        {/* ==================== MOBILE MENU BUTTON ==================== */}
        <button
          className="ml-auto inline-grid size-11 place-items-center rounded-lg border border-[#d5e1ec] bg-white text-[#0b2545] xl:hidden"
          type="button"
          aria-expanded={isOpen}
          aria-controls="site-navigation-mobile"
          aria-label="Toggle navigation"
          onClick={() => setIsOpen((value) => !value)}
        >
          <LandingIcon
            name={isOpen ? "close" : "menu"}
          />
        </button>

        {/* ==================== MOBILE NAVIGATION ==================== */}
        {isOpen && (
          <nav
            id="site-navigation-mobile"
            aria-label="Mobile Primary"
            className="absolute left-4 right-4 top-[78px] z-50 grid gap-1 rounded-lg border border-[#d5e1ec] bg-white p-2 shadow-xl xl:hidden"
          >
            {/* Landing Page Navigation */}
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={`/${item.href}`}
                className={`${navLink} ${
                  index === 0 ? "bg-[#f8fafc] text-[#0b2545]" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}

            {/* Command Centre */}
            <Link
              to="/nirvaah/command-centre"
              className={`${primaryButton} mt-1 inline-flex items-center justify-center gap-2`}
              onClick={() => setIsOpen(false)}
            >
              Open Command Centre

              <LandingIcon
                name="arrow"
                className="size-4"
              />
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}




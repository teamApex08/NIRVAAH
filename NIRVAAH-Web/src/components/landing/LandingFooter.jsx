import { GovEmblem } from "./LandingMarks.jsx";
import { navItems } from "./landingData.js";
import { pageShell, primaryButton } from "./landingStyles.js";

export function LandingFooter() {
  return (
    <footer
      className="border-t border-[#d5e1ec] bg-[#f8fbfe]"
      id="contact"
    >
      <div className={`${pageShell} py-10 lg:py-12`}>

        {/* ==================== MAIN FOOTER ==================== */}
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr_1.2fr] lg:items-start">

          {/* ==================== GOVERNMENT ==================== */}
          <div className="flex items-start gap-4">
            <div className="shrink-0 rounded-lg border border-[#d5e1ec] bg-white p-2.5">
              <GovEmblem />
            </div>

            <div className="min-w-0">
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#526276]">
                Government of India
              </p>

              <h3 className="mt-1 max-w-sm text-sm font-black leading-6 text-[#052b63] sm:text-base">
                Ministry of Statistics & Programme Implementation
              </h3>

              <p className="mt-2 max-w-sm text-sm leading-6 text-[#526276]">
                Public-sector intelligence infrastructure for evidence-based
                programme monitoring and decision-making.
              </p>
            </div>
          </div>

          {/* ==================== NAVIGATION ==================== */}
          <div className="lg:justify-self-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.12em] text-[#526276]">
              Quick Navigation
            </p>

            <nav
              className="grid grid-cols-2 gap-x-8 gap-y-2.5 sm:grid-cols-3 lg:grid-cols-2"
              aria-label="Footer navigation"
            >
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="w-fit text-sm font-semibold text-[#263d59] transition-colors hover:text-[#052b63]"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* ==================== NIRVAAH ==================== */}
          <div className="lg:justify-self-end lg:text-right">
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#526276]">
              Intelligence Platform
            </p>

            <h3 className="mt-1 text-xl font-black tracking-tight text-[#052b63]">
              NIRVAAH
            </h3>

            <p className="mt-2 max-w-sm text-sm leading-6 text-[#526276] lg:ml-auto">
              A unified command centre for programme intelligence, risk
              visibility, and data-driven governance.
            </p>

            <a
              href="#home"
              className={`${primaryButton} mt-4 inline-flex items-center gap-2`}
            >
              Back to Top
              <span aria-hidden="true">↑</span>
            </a>
          </div>
        </div>

        {/* ==================== DIVIDER ==================== */}
        <div className="my-8 border-t border-[#d5e1ec]" />

        {/* ==================== BOTTOM BAR ==================== */}
        <div className="flex flex-col gap-3 text-xs text-[#6b7b8f] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 NIRVAAH. Government of India prototype.
          </p>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <span>SIH 2026 Prototype</span>

            <span
              className="hidden h-1 w-1 rounded-full bg-[#9aabba] sm:block"
              aria-hidden="true"
            />

            <span>PS 26103</span>

            <span
              className="hidden h-1 w-1 rounded-full bg-[#9aabba] sm:block"
              aria-hidden="true"
            />

            <a
              href="#contact"
              className="font-semibold text-[#526276] transition-colors hover:text-[#052b63]"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}


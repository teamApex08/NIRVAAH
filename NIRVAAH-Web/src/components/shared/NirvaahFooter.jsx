import { ArrowUp, ExternalLink, Landmark, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { BrandMark } from "./BrandMark.jsx";
import { dashboardNavItems } from "../layout/dashboardNavItems.js";

// Landing links stay as hash links because they scroll within the same page.
const landingLinks = [
  { label: "Home", href: "#home" },
  { label: "Product", href: "#product" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Data & Methods", href: "#data-methods" },
  { label: "About", href: "#about" },
];

// These links are informational placeholders until real policy pages are added.
const policyLinks = ["Privacy", "Terms", "Accessibility", "Feedback"];

/**
 * Shared footer for the full NIRVAAH frontend.
 *
 * The variant prop lets the same component feel spacious on the landing page
 * and compact inside dashboard modules, while keeping content and styling in
 * one place for easier maintenance.
 */
export function NirvaahFooter({ id, variant = "dashboard" }) {
  const isLanding = variant === "landing";
  const quickLinks = isLanding ? landingLinks : dashboardNavItems;

  return (
    <footer
      className="border-t border-[#c9d6e2] bg-[#f8fafc] text-[#10233d]"
      id={id}
    >
      <div className="grid grid-cols-3" aria-hidden="true">
        <span className="h-1 bg-[#ff9933]" />
        <span className="h-1 bg-white" />
        <span className="h-1 bg-[#138808]" />
      </div>

      <div
        className={[
          "mx-auto w-full",
          isLanding ? "max-w-7xl px-4 py-10 sm:px-6 lg:px-12 lg:py-12" : "px-3 py-6 sm:px-5 lg:px-6 xl:px-8",
        ].join(" ")}
      >
        <div className={isLanding ? "grid gap-10 lg:grid-cols-[1.2fr_1fr_1.1fr]" : "grid gap-6 xl:grid-cols-[1.2fr_1.4fr_1fr]"}>
          {/* Ministry and product ownership should remain visible on every page. */}
          <section className="flex min-w-0 items-start gap-4">
            <span className="grid size-11 shrink-0 place-items-center rounded-md border border-[#d5e1ec] bg-white text-[#0b2545]">
              <Landmark className="size-5" aria-hidden="true" />
            </span>

            <div className="min-w-0">
              <p className="text-xs font-black uppercase text-[#64748b]">
                Government of India
              </p>
              <h2 className="mt-1 max-w-md text-sm font-black leading-6 text-[#0b2545] sm:text-base">
                Ministry of Statistics & Programme Implementation
              </h2>
              <p className="mt-2 max-w-md text-sm leading-6 text-[#526276]">
                Public-sector intelligence infrastructure for evidence-based programme monitoring and decision-making.
              </p>
            </div>
          </section>

          <section className={isLanding ? "lg:justify-self-center" : ""}>
            <p className="mb-3 text-xs font-black uppercase text-[#64748b]">
              Quick Navigation
            </p>

            <nav
              className={isLanding ? "grid grid-cols-2 gap-x-8 gap-y-2.5 sm:grid-cols-3 lg:grid-cols-2" : "grid grid-cols-2 gap-x-6 gap-y-2.5 md:grid-cols-4"}
              aria-label="Footer navigation"
            >
              {quickLinks.map((item) =>
                isLanding ? (
                  <a
                    className="w-fit text-sm font-bold text-[#263d59] transition hover:text-[#d97706]"
                    href={item.href}
                    key={item.label}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    className="w-fit text-sm font-bold text-[#263d59] transition hover:text-[#d97706]"
                    key={item.label}
                    to={item.href}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </nav>
          </section>

          <section className={isLanding ? "lg:justify-self-end lg:text-right" : "xl:justify-self-end"}>
            <div className={isLanding ? "flex justify-start lg:justify-end" : ""}>
              <BrandMark />
            </div>

            <p className={["mt-3 max-w-sm text-sm leading-6 text-[#526276]", isLanding ? "lg:ml-auto" : ""].join(" ")}>
              Data to decisions for a stronger infrastructure India.
            </p>

            {isLanding ? (
              <a
                className="mt-4 inline-flex min-h-10 items-center gap-2 rounded-md border border-[#c9d6e2] bg-white px-3 text-sm font-black text-[#0b2545] transition hover:border-[#d97706] hover:bg-[#fff8ed]"
                href="#home"
              >
                Back to Top
                <ArrowUp className="size-4" aria-hidden="true" />
              </a>
            ) : (
              <Link
                className="mt-4 inline-flex min-h-10 items-center gap-2 rounded-md border border-[#c9d6e2] bg-white px-3 text-sm font-black text-[#0b2545] transition hover:border-[#d97706] hover:bg-[#fff8ed]"
                to="/nirvaah"
              >
                Open Landing Page
                <ExternalLink className="size-4" aria-hidden="true" />
              </Link>
            )}
          </section>
        </div>

        <div className="my-6 border-t border-[#d5e1ec]" />

        <div className="flex flex-col gap-4 text-xs text-[#64748b] sm:flex-row sm:items-center sm:justify-between">
          <p className="font-semibold">
            © 2026 NIRVAAH. Government of India prototype.
          </p>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <span className="inline-flex items-center gap-1.5 font-bold text-[#0b2545]">
              <ShieldCheck className="size-3.5 text-[#15803d]" aria-hidden="true" />
              Viksit Bharat 2047
            </span>

            {policyLinks.map((label) => (
              <a
                className="font-semibold text-[#526276] transition hover:text-[#d97706]"
                href={`#${label.toLowerCase().replaceAll(" ", "-")}`}
                key={label}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

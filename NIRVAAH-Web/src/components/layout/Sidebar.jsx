import { NavLink } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { BrandMark } from "../shared/BrandMark.jsx";
import { dashboardNavSections } from "./dashboardNavItems.js";

function Sidebar({ isCollapsed = false, onToggleCollapsed }) {
  const isExpanded = !isCollapsed;

  return (
    <aside
      className={[
        "sticky top-0 z-40 flex h-screen shrink-0 flex-col border-r border-[#163151]",
        "bg-[#071a33] text-white transition-[width,padding] duration-300 ease-out",
        isCollapsed ? "w-16 px-2 py-4 sm:w-[4.5rem]" : "w-[17rem] px-3 py-4",
      ].join(" ")}
      aria-label="Primary navigation drawer"
    >
      <div className={isCollapsed ? "flex flex-col items-center gap-2" : "flex items-center gap-2"}>
        <NavLink
          to="/nirvaah"
          className={[
            "min-w-0 rounded-[8px] border border-white/10 bg-white/[0.06] transition hover:bg-white/[0.1]",
            isCollapsed ? "grid size-12 place-items-center p-1" : "flex-1 px-3 py-2.5",
          ].join(" ")}
          aria-label="Go to NIRVAAH landing page"
          title={isCollapsed ? "NIRVAAH" : undefined}
        >
          <BrandMark compact iconOnly={isCollapsed} inverse />
        </NavLink>

        <button
          className="grid size-10 shrink-0 place-items-center rounded-[6px] border border-white/10 bg-white/[0.06] text-white transition hover:border-[#d97706] hover:bg-white/[0.12]"
          type="button"
          onClick={onToggleCollapsed}
          aria-expanded={isExpanded}
          aria-label={isExpanded ? "Collapse navigation drawer" : "Expand navigation drawer"}
          title={isExpanded ? "Collapse navigation drawer" : "Expand navigation drawer"}
        >
          {isExpanded ? (
            <ChevronLeft className="size-5" aria-hidden="true" />
          ) : (
            <ChevronRight className="size-5" aria-hidden="true" />
          )}
        </button>
      </div>

      <nav
        className={isCollapsed ? "mt-5 flex flex-col items-center gap-4" : "mt-5 flex flex-col gap-5"}
        aria-label="Dashboard modules"
      >
        {dashboardNavSections.map((section) => (
          <section className={isCollapsed ? "grid justify-items-center gap-1" : "grid gap-1"} key={section.label}>
            {isExpanded && (
              <p className="px-3 text-[11px] font-black uppercase leading-5 text-white/42">
                {section.label}
              </p>
            )}
            {section.items.map((item) => {
              const Icon = item.icon;

              return (
                <NavLink
                  key={item.label}
                  to={item.href}
                  aria-label={item.label}
                  title={isCollapsed ? item.label : undefined}
                  className={({ isActive }) =>
                    [
                      "group relative flex min-h-11 items-center rounded-[6px] border-l-4 text-sm font-bold transition",
                      "hover:border-l-[#d97706] hover:bg-white/[0.08] hover:text-white",
                      isCollapsed ? "w-12 justify-center px-2" : "w-full gap-3 px-3",
                      isActive && "border-l-[#d97706] bg-white/[0.12] text-white",
                      !isActive && "border-l-transparent text-white/[0.72]",
                    ]
                      .filter(Boolean)
                      .join(" ")
                  }
                >
                  {({ isActive }) => (
                    <>
                      <Icon className="size-4 shrink-0" aria-hidden="true" />

                      <span className={isCollapsed ? "sr-only" : "min-w-0 flex-1 truncate"}>
                        {item.label}
                      </span>

                      {item.badge && isExpanded && (
                        <span className="grid min-w-5 place-items-center rounded-full bg-[#b91c1c] px-1.5 py-0.5 text-[10px] font-black leading-none text-white">
                          {item.badge}
                        </span>
                      )}

                      {item.badge && isCollapsed && (
                        <span className="absolute right-1 top-1 grid size-3 place-items-center rounded-full bg-[#b91c1c]">
                          <span className="sr-only">{item.badgeLabel}</span>
                        </span>
                      )}

                      {isActive && !item.badge && isExpanded && (
                        <span className="size-2 rounded-full bg-[#15803d]" aria-hidden="true" />
                      )}

                      {isCollapsed && (
                        <span
                          className="pointer-events-none absolute left-[calc(100%+0.5rem)] top-1/2 z-50 -translate-y-1/2 rounded-[6px] border border-[#163151] bg-[#071a33] px-2.5 py-1.5 text-xs font-black text-white opacity-0 shadow-lg transition group-hover:opacity-100"
                          aria-hidden="true"
                        >
                          {item.label}
                        </span>
                      )}
                    </>
                  )}
                </NavLink>
              );
            })}
          </section>
        ))}
      </nav>

      <div
        className={[
          "mt-auto overflow-hidden rounded-[8px] border border-white/10 bg-white/[0.07]",
          isCollapsed ? "mx-auto w-12" : "w-full",
        ].join(" ")}
        aria-label="Viksit Bharat 2047"
        title={isCollapsed ? "Viksit Bharat 2047" : undefined}
      >
        <div className="grid grid-cols-3">
          <span className="h-1 bg-[#ff9933]" aria-hidden="true" />
          <span className="h-1 bg-white" aria-hidden="true" />
          <span className="h-1 bg-[#138808]" aria-hidden="true" />
        </div>
        {isExpanded && (
          <div className="p-3">
            <strong className="block text-sm font-black leading-5">
              Viksit Bharat 2047
            </strong>

            <span className="mt-1 block text-xs font-semibold text-white/[0.62]">
              People · Data · Progress
            </span>
          </div>
        )}
      </div>
    </aside>
  );
}

export default Sidebar;

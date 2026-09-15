import { useMemo, useState } from "react";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Bell, CalendarDays, ChevronDown, Search, ShieldCheck } from "lucide-react";
import Sidebar from "../components/layout/Sidebar.jsx";
import { dashboardNavItems } from "../components/layout/dashboardNavItems.js";
import { NirvaahFooter } from "../components/shared/NirvaahFooter.jsx";

function getInitialSidebarCollapsed() {
  if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
    return false;
  }

  return window.matchMedia("(max-width: 1023px)").matches;
}

function Layout() {
  const location = useLocation();
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(getInitialSidebarCollapsed);
  const currentNavItem = useMemo(
    () => dashboardNavItems.find((item) => location.pathname.startsWith(item.href)),
    [location.pathname],
  );

  return (
    <div className="flex min-h-screen bg-[#f3f6f8] text-[#10233d]">
      <Sidebar
        isCollapsed={isSidebarCollapsed}
        onToggleCollapsed={() => setIsSidebarCollapsed((current) => !current)}
      />

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="sticky top-0 z-30 border-b border-[#c9d6e2] bg-[#fbfcfd]/96 shadow-[0_1px_2px_rgba(15,23,42,0.04)] backdrop-blur">
          <div className="flex min-h-16 items-center gap-3 px-4 sm:px-5 lg:px-6 xl:px-8">
            <div className="min-w-0">
              <p className="hidden text-[11px] font-black uppercase leading-4 text-[#748397] sm:block">
                Infrastructure Decision Intelligence
              </p>
              <h2 className="truncate text-base font-black leading-5 text-[#0b2545]">
                {currentNavItem?.label ?? "NIRVAAH"}
              </h2>
            </div>

            <label className="ml-auto hidden min-h-10 min-w-0 max-w-2xl flex-1 items-center gap-3 rounded-[6px] border border-[#c9d6e2] bg-white px-3 md:flex">
              <Search className="size-4 text-[#475569]" aria-hidden="true" />
              <input
                className="min-w-0 flex-1 bg-transparent text-sm font-semibold text-[#10233d] outline-none placeholder:text-[#64748b]"
                placeholder="Search projects, ministries, sectors, states..."
                type="search"
              />
            </label>

            <div className="flex items-center gap-2 sm:gap-3">
              <button
                className="hidden min-h-10 items-center gap-2 rounded-[6px] border border-[#c9d6e2] bg-white px-3 text-left text-sm font-bold text-[#0b2545] transition hover:border-[#d97706] hover:bg-[#fff8ed] sm:flex"
                type="button"
              >
                <CalendarDays className="size-4 text-[#0b2545]" aria-hidden="true" />
                <span className="grid leading-tight">
                  <span className="text-[11px] font-black uppercase text-[#64748b]">Month</span>
                  <span>July 2026</span>
                </span>
                <ChevronDown className="size-4 text-[#64748b]" aria-hidden="true" />
              </button>

              <button
                className="relative grid size-10 place-items-center rounded-[6px] border border-[#c9d6e2] bg-white text-[#0b2545] transition hover:border-[#d97706] hover:bg-[#fff8ed]"
                type="button"
                aria-label="Open notifications"
              >
                <Bell className="size-5" aria-hidden="true" />
                <span className="absolute right-0 top-0 grid size-4 place-items-center rounded-full bg-[#b91c1c] text-[9px] font-black leading-none text-white">
                  3
                </span>
              </button>

              <div className="hidden min-h-10 items-center gap-2 rounded-[6px] border border-[#c9d6e2] bg-white px-2.5 sm:flex">
                <span className="grid size-8 place-items-center rounded-full bg-[#0b2545] text-xs font-black text-white">
                  AS
                </span>
                <span className="grid leading-tight">
                  <span className="text-[11px] font-black uppercase text-[#64748b]">Role</span>
                  <strong className="text-sm text-[#0b2545]">Officer, MoSPI</strong>
                </span>
                <ShieldCheck className="size-4 text-[#15803d]" aria-hidden="true" />
              </div>
            </div>
          </div>
        </header>

        <div className="min-w-0 flex-1 px-3 py-4 sm:px-5 lg:px-6 xl:px-8">
          <Outlet />
        </div>

        <NirvaahFooter variant="dashboard" />
      </div>
    </div>
  );
}

export default Layout;

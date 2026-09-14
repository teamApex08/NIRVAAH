import React from "react";
import { DashboardSidebar } from "../navigation/DashboardSidebar.jsx";
import { DashboardTopbar } from "../navigation/DashboardTopbar.jsx";
import { MobileDashboardNav } from "../navigation/MobileDashboardNav.jsx";

/**
 * Shell for dashboard-style pages such as Command Centre and Projects.
 *
 * Desktop users get a left sidebar; mobile/tablet users get a compact top bar
 * plus sticky bottom navigation so the content area remains uncluttered.
 */
export function DashboardLayout({ activePath, children }) {
  return (
    <div className="min-h-screen bg-[#eef5fb] text-[#10233d]">
      <div className="flex min-h-screen">
        {/* Hidden on small screens so mobile keeps maximum width for content. */}
        <DashboardSidebar activePath={activePath} />
        <div className="min-w-0 flex-1">
          <DashboardTopbar />
          {children}
          {/* Mobile navigation is placed after content so it sticks to bottom. */}
          <MobileDashboardNav activePath={activePath} />
        </div>
      </div>
    </div>
  );
}

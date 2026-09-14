import React from "react";
import { DashboardSidebar } from "../navigation/DashboardSidebar.jsx";
import { DashboardTopbar } from "../navigation/DashboardTopbar.jsx";
import { MobileDashboardNav } from "../navigation/MobileDashboardNav.jsx";

export function DashboardLayout({ activePath, children }) {
  return (
    <div className="min-h-screen bg-[#eef5fb] text-[#10233d]">
      <div className="flex min-h-screen">
        <DashboardSidebar activePath={activePath} />
        <div className="min-w-0 flex-1">
          <DashboardTopbar />
          {children}
          <MobileDashboardNav activePath={activePath} />
        </div>
      </div>
    </div>
  );
}

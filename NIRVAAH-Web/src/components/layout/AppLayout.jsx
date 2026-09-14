import React from "react";

/**
 * Outer app canvas shared by every route.
 *
 * Page-specific components should focus on their content; this layout keeps
 * the background color and default text color consistent everywhere.
 */
export function AppLayout({ children }) {
  return <div className="min-h-screen bg-[#f6f9fc] text-[#10233d]">{children}</div>;
}

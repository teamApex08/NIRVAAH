import {
  BarChart3,
  BellRing,
  Bot,
  FileText,
  Gauge,
  LayoutDashboard,
  Settings,
  SlidersHorizontal,
} from "lucide-react";

export const primaryNavItems = [
  {
    label: "Command Centre",
    href: "/nirvaah/command-centre",
    icon: LayoutDashboard,
  },
  {
    label: "Projects",
    href: "/nirvaah/projects",
    icon: FileText,
  },
  {
    label: "Early Warnings",
    href: "/nirvaah/early-warnings",
    icon: BellRing,
    badge: "3",
    badgeLabel: "3 urgent warnings",
  },
  {
    label: "Benchmarking",
    href: "/nirvaah/benchmarking",
    icon: BarChart3,
  },
  {
    label: "Reports & Exports",
    href: "/nirvaah/reports",
    icon: SlidersHorizontal,
  },
  {
    label: "AI Assistant",
    href: "/nirvaah/ai-assistant",
    icon: Bot,
  },
];

export const secondaryNavItems = [
  {
    label: "Risk Intelligence",
    href: "/nirvaah/risk-intelligence",
    icon: Gauge,
  },
  {
    label: "Settings",
    href: "/nirvaah/settings",
    icon: Settings,
  },
];

export const dashboardNavSections = [
  {
    label: "Operate",
    items: primaryNavItems,
  },
  {
    label: "Admin",
    items: secondaryNavItems,
  },
];

export const dashboardNavItems = [...primaryNavItems, ...secondaryNavItems];

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

export const dashboardNavItems = [
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
    label: "Risk Intelligence",
    href: "/nirvaah/risk-intelligence",
    icon: Gauge,
  },
  {
    label: "Early Warnings",
    href: "/nirvaah/early-warnings",
    icon: BellRing,
  },
  {
    label: "Benchmarking",
    href: "/nirvaah/benchmarking",
    icon: BarChart3,
  },
  {
    label: "Reports & Export",
    href: "/nirvaah/reports",
    icon: SlidersHorizontal,
  },
  {
    label: "AI Assistant",
    href: "/nirvaah/ai-assistant",
    icon: Bot,
  },
  {
    label: "Settings",
    href: "/nirvaah/settings",
    icon: Settings,
  },
];

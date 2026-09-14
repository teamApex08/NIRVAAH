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

// Navigation data is kept separate from the sidebar/bottom-nav components so
// both desktop and mobile navigation render from the same source.
export const dashboardNavItems = [
  { label: "Command Centre", href: "/command-centre", icon: LayoutDashboard },
  { label: "Projects", href: "/projects", icon: FileText },
  { label: "Risk Intelligence", shortLabel: "Risk Intel.", href: "/command-centre", icon: Gauge },
  { label: "Early Warnings", href: "/early-warnings", icon: BellRing },
  { label: "Benchmarking", shortLabel: "Benchmark", href: "/benchmarking", icon: BarChart3 },
  { label: "Reports & Export", href: "/command-centre", icon: SlidersHorizontal },
  { label: "AI Assistant", href: "/command-centre", icon: Bot },
  { label: "Settings", href: "/command-centre", icon: Settings },
];

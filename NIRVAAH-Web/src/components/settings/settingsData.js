import {
  AlertCircle,
  Bell,
  Building2,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Database,
  Globe2,
  History,
  KeyRound,
  LockKeyhole,
  Mail,
  Monitor,
  ShieldCheck,
  SlidersHorizontal,
  Smartphone,
  UserRound,
  UsersRound,
} from "lucide-react";

// Static settings data for the prototype.
// When backend services are ready, these objects can be replaced by account,
// preference, role, audit-log and platform-configuration API responses.

// Quick summary cards shown below the Settings page header.
export const settingsKpis = [
  {
    icon: UserRound,
    value: "Officer",
    label: "Current Role",
    note: "MoSPI dashboard access",
    tone: "blue",
  },
  {
    icon: ShieldCheck,
    value: "Active",
    label: "Security Status",
    note: "MFA enabled",
    tone: "green",
  },
  {
    icon: Database,
    value: "21 Aug",
    label: "Data Through",
    note: "Latest PAIMANA sync",
    tone: "purple",
  },
  {
    icon: Bell,
    value: "6",
    label: "Alert Rules",
    note: "4 active · 2 muted",
    tone: "orange",
  },
];

// Settings sections are tabs in the UI. The first one is active for now.
export const settingsTabs = ["Profile & Access", "Notifications", "Reporting Defaults", "Data & Security"];

// Profile and organization details for the signed-in officer.
export const profileDetails = [
  { label: "Name", value: "Officer MoSPI" },
  { label: "Department", value: "Ministry of Statistics & Programme Implementation" },
  { label: "Primary Scope", value: "National portfolio monitoring" },
  { label: "Default Reporting Month", value: "July 2026" },
];

// Role permissions shown as compact capability chips.
export const rolePermissions = [
  "View portfolio dashboards",
  "Generate reports",
  "Create review notes",
  "Manage saved views",
  "Update personal preferences",
];

// Notification preferences use simple booleans for future API compatibility.
export const notificationSettings = [
  {
    icon: AlertCircle,
    title: "Critical risk escalation",
    description: "Notify when a project becomes Critical or worsens materially.",
    channel: "Email + in-app",
    enabled: true,
  },
  {
    icon: Bell,
    title: "Early warning digest",
    description: "Daily summary of new, acknowledged and resolved warning signals.",
    channel: "In-app",
    enabled: true,
  },
  {
    icon: CalendarDays,
    title: "Scheduled report delivery",
    description: "Reminders when monthly reports are generated or ready for review.",
    channel: "Email",
    enabled: true,
  },
  {
    icon: History,
    title: "Benchmark change alerts",
    description: "Notify when peer comparison outliers shift significantly.",
    channel: "Muted",
    enabled: false,
  },
];

// Default reporting preferences used by dashboards and exports.
export const reportingDefaults = [
  { label: "Landing dashboard", value: "Command Centre" },
  { label: "Default ministry", value: "All Ministries" },
  { label: "Default state", value: "All States" },
  { label: "Default risk view", value: "High & Critical first" },
  { label: "Export format", value: "PDF" },
  { label: "Currency display", value: "Indian Rupees · Crore/Lakh Cr" },
];

// Security and platform controls displayed in the right column.
export const securityControls = [
  {
    icon: LockKeyhole,
    title: "Multi-factor authentication",
    description: "Required for account access.",
    status: "Enabled",
    tone: "green",
  },
  {
    icon: KeyRound,
    title: "Session timeout",
    description: "Automatically signs out inactive sessions.",
    status: "30 min",
    tone: "blue",
  },
  {
    icon: Database,
    title: "PAIMANA data sync",
    description: "Last successful source refresh.",
    status: "10 Sep 2026",
    tone: "green",
  },
  {
    icon: Clock3,
    title: "Audit log retention",
    description: "Officer actions and report downloads.",
    status: "180 days",
    tone: "orange",
  },
];

// Device and channel preferences for a realistic settings workspace.
export const channelPreferences = [
  { icon: Mail, label: "Email summaries", enabled: true },
  { icon: Monitor, label: "In-app alerts", enabled: true },
  { icon: Smartphone, label: "Mobile push", enabled: false },
  { icon: Globe2, label: "Regional language UI", enabled: false },
];

// Team access rows shown in a compact table.
export const teamMembers = [
  {
    name: "Officer MoSPI",
    role: "Portfolio Officer",
    scope: "National",
    lastActive: "Today, 10:24",
    status: "Active",
  },
  {
    name: "Project Monitoring Cell",
    role: "Reviewer",
    scope: "High Risk Projects",
    lastActive: "13 Sep 2026",
    status: "Active",
  },
  {
    name: "Ministry User",
    role: "Viewer",
    scope: "Railways",
    lastActive: "12 Sep 2026",
    status: "Limited",
  },
];

// System preference cards grouped separately from account security.
export const systemPreferences = [
  {
    icon: SlidersHorizontal,
    title: "Compact dashboard density",
    description: "Show tighter tables and cards on large screens.",
    enabled: true,
  },
  {
    icon: Building2,
    title: "Show source labels",
    description: "Display PAIMANA and NIRVAAH provenance across dashboards.",
    enabled: true,
  },
  {
    icon: UsersRound,
    title: "Share saved views with team",
    description: "Allow selected ministry users to reuse your saved filters.",
    enabled: false,
  },
];

// Recent activity creates confidence that settings changes are traceable.
export const recentSettingActivity = [
  "Report export default changed to PDF",
  "High risk alert rule enabled",
  "Session timeout reviewed",
];

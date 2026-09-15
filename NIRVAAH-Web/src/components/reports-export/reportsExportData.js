import {
  BarChart3,
  BellRing,
  CalendarDays,
  ChartPie,
  FileArchive,
  FileBarChart,
  FileSpreadsheet,
  FileText,
  IndianRupee,
  Landmark,
  MapPin,
  Presentation,
  ShieldAlert,
} from "lucide-react";

// Static data for the Reports & Exports page.
// When the backend is ready, these arrays can be replaced with API responses
// without changing the presentation components.

// Portfolio metrics shown at the top of the reporting workspace.
export const reportKpis = [
  {
    icon: FileText,
    value: "9",
    label: "Report Templates",
    note: "Portfolio, risk, warning and cohort reports",
    tone: "blue",
    priority: "primary",
  },
  {
    icon: FileArchive,
    value: "4",
    label: "Recent Reports",
    note: "Generated this month",
    tone: "green",
  },
  {
    icon: CalendarDays,
    value: "3 active",
    label: "Scheduled",
    note: "Automated delivery enabled",
    tone: "orange",
  },
  {
    icon: FileSpreadsheet,
    value: "PDF · Excel · PPT",
    label: "Formats",
    note: "Available export targets",
    tone: "slate",
  },
];

// Builder tabs mirror the reference image, with the first tab active.
export const reportTabs = ["Report Builder", "Saved Reports", "Scheduled Reports", "Export History"];

// Report template cards shown in the first builder column.
export const reportTypes = [
  {
    title: "Portfolio Overview",
    description: "National, ministry and sector summary with key indicators.",
    icon: BarChart3,
    tone: "blue",
    selected: true,
  },
  {
    title: "High Risk Projects",
    description: "Critical and high-risk projects with root reasons.",
    icon: ShieldAlert,
    tone: "red",
  },
  {
    title: "Early Warning Report",
    description: "Recent warning changes and emerging project risks.",
    icon: BellRing,
    tone: "red",
  },
  {
    title: "Cost Risk Analysis",
    description: "Cost escalation trends, sectors and benchmarks.",
    icon: IndianRupee,
    tone: "orange",
  },
  {
    title: "Schedule Risk Analysis",
    description: "Schedule delays, date revisions and timeline variance.",
    icon: CalendarDays,
    tone: "red",
  },
  {
    title: "Ministry Report",
    description: "Performance and risk profile by ministry.",
    icon: Landmark,
    tone: "blue",
  },
  {
    title: "State Report",
    description: "Project status and risk profile by state.",
    icon: MapPin,
    tone: "red",
  },
  {
    title: "Sector Report",
    description: "Comparative analysis across sectors.",
    icon: ChartPie,
    tone: "green",
  },
  {
    title: "Custom Report",
    description: "Create a tailored report with selected metrics.",
    icon: FileArchive,
    tone: "purple",
  },
];

// Form fields are data-driven so the same component can render each select.
export const reportFilters = [
  { label: "Reporting Period", options: ["July 2026", "June 2026", "May 2026"] },
  { label: "Ministry", options: ["All Ministries", "Railways", "Jal Shakti", "Power", "Housing & Urban Affairs"] },
  { label: "Sector", options: ["All Sectors", "Transport", "Water Resources", "Energy", "Urban Development"] },
  { label: "State", options: ["All States", "Uttar Pradesh", "Maharashtra", "Bihar", "Tamil Nadu", "Karnataka"] },
  { label: "Project Status", options: ["All", "Ongoing", "Delayed", "Completed"] },
  { label: "Risk Level", options: ["All", "Critical", "High", "Moderate", "Low"] },
];

// Metrics selected by default in the configure step.
export const reportMetrics = [
  "Project count",
  "Original cost",
  "Revised cost",
  "Cumulative expenditure",
  "Physical progress",
  "Schedule variance",
  "Risk level",
  "Key risk reasons",
];

// Export formats shown below the report preview.
export const exportFormats = [
  {
    label: "PDF",
    description: "Best for sharing",
    icon: FileText,
    tone: "red",
  },
  {
    label: "Excel",
    description: "For further analysis",
    icon: FileSpreadsheet,
    tone: "green",
  },
  {
    label: "PPT",
    description: "For presentations",
    icon: Presentation,
    tone: "orange",
  },
];

// Compact preview metadata, highlights and chart rows.
export const previewSummary = {
  title: "Portfolio Overview Report",
  subtitle: "July 2026 · All Ministries · All Sectors",
  highlights: [
    "Progress concentration is strongest in Transport and Energy.",
    "High-risk projects need ministry review within the next reporting cycle.",
    "Cost escalation is concentrated across a small set of delayed projects.",
  ],
  distribution: [
    { label: "Roads", value: 78 },
    { label: "Railways", value: 64 },
    { label: "Urban", value: 52 },
    { label: "Power", value: 46 },
  ],
  riskMix: [
    { label: "Critical", value: 12, color: "bg-red-500" },
    { label: "High", value: 31, color: "bg-orange-400" },
    { label: "Moderate", value: 34, color: "bg-yellow-400" },
    { label: "Low", value: 23, color: "bg-emerald-500" },
  ],
};

// Recent report rows shown under the builder.
export const recentReports = [
  {
    name: "Railways - Risk Analysis",
    type: "Ministry Report",
    filters: "Railways",
    generatedOn: "12 Sep 2026, 10:30",
    generatedBy: "Officer (MoSPI)",
    status: "Ready",
    format: "PDF",
  },
  {
    name: "High Risk Projects - July 2026",
    type: "High Risk Report",
    filters: "All Ministries",
    generatedOn: "10 Sep 2026, 16:45",
    generatedBy: "Officer (MoSPI)",
    status: "Ready",
    format: "Excel",
  },
  {
    name: "Maharashtra - Sector Comparison",
    type: "State Report",
    filters: "Maharashtra",
    generatedOn: "08 Sep 2026, 11:20",
    generatedBy: "Officer (MoSPI)",
    status: "Ready",
    format: "PDF",
  },
  {
    name: "Infrastructure Portfolio Summary",
    type: "Portfolio Overview",
    filters: "All",
    generatedOn: "05 Sep 2026, 14:10",
    generatedBy: "Officer (MoSPI)",
    status: "Archived",
    format: "PPT",
  },
];

// Scheduled automation rows. These are presentational switches for now.
export const scheduledReports = [
  {
    name: "Monthly Risk Brief",
    frequency: "Monthly",
    recipients: "MoSPI Team",
    nextRun: "01 Oct 2026",
    enabled: true,
  },
  {
    name: "High Risk Projects",
    frequency: "Weekly",
    recipients: "Project Monitoring Cell",
    nextRun: "15 Sep 2026",
    enabled: true,
  },
  {
    name: "Ministry Performance",
    frequency: "Monthly",
    recipients: "Ministry Users",
    nextRun: "01 Oct 2026",
    enabled: true,
  },
  {
    name: "State Summary",
    frequency: "Monthly",
    recipients: "State Planning Dept.",
    nextRun: "01 Oct 2026",
    enabled: false,
  },
];

// Mini helper cards used in the preview side rail.
export const previewKpis = [
  { label: "Total Projects", value: "1,775", tone: "blue" },
  { label: "Original Cost", value: "₹33.70 L Cr", tone: "orange" },
  { label: "Revised Cost", value: "₹37.10 L Cr", tone: "red" },
  { label: "Expenditure", value: "₹19.26 L Cr", tone: "green" },
];

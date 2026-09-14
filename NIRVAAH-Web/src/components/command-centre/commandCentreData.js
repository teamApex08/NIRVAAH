import {
  AlertTriangle,
  BarChart3,
  BellRing,
  Clock3,
  IndianRupee,
  Landmark,
  Layers3,
  ShieldAlert,
} from "lucide-react";


export const healthKpis = [
  {
    label: "Projects Monitored",
    value: "1,775",
    note: "Across 17 Ministries / Departments",
    icon: Layers3,
    tone: "blue",
  },
  {
    label: "Critical / High Risk",
    value: "19 of 42",
    note: "7 Critical · 12 High",
    icon: ShieldAlert,
    tone: "red",
  },
  {
    label: "Cost Overrun Exposure",
    value: "₹3.40 L Cr",
    note: "Across 11 exposed projects",
    icon: IndianRupee,
    tone: "green",
  },
  {
    label: "Schedule Delay Exposure",
    value: "14 projects",
    note: "Aggregate slippage: 27 months",
    icon: Clock3,
    tone: "orange",
  },
  {
    label: "Active Early Warnings",
    value: "5 new",
    note: "18 unresolved warnings",
    icon: BellRing,
    tone: "purple",
  },
];

// Rows for the "Projects Requiring Attention" table. The keys match the table
// columns so the component stays easy to read.
export const attentionRows = [
  {
    project: "Eastern Freight Corridor",
    ministry: "Railways",
    location: "Uttar Pradesh",
    risk: "Critical",
    trend: "Rising",
    driver: "Physical progress stagnant",
    confidence: "High",
    action: "View Risk",
  },
  {
    project: "River Basin Project",
    ministry: "Jal Shakti",
    location: "Bihar",
    risk: "High",
    trend: "Rising",
    driver: "Cost escalation above sector median",
    confidence: "Medium",
    action: "View Risk",
  },
  {
    project: "Metro Rail Phase II",
    ministry: "Housing & Urban Affairs",
    location: "Maharashtra",
    risk: "High",
    trend: "Rising",
    driver: "Completion date +4 months",
    confidence: "High",
    action: "Investigate",
  },
  {
    project: "Coastal Protection Works",
    ministry: "Earth Sciences",
    location: "Tamil Nadu",
    risk: "High",
    trend: "Rising",
    driver: "Slow progress, high time risk",
    confidence: "Medium",
    action: "Investigate",
  },
  {
    project: "National Highway Project",
    ministry: "Road Transport & Highways",
    location: "Karnataka",
    risk: "Moderate",
    trend: "Stable",
    driver: "Land acquisition delay",
    confidence: "Medium",
    action: "Open Project",
  },
];

// Risk bands used by both the stacked progress bar and the legend.
export const riskDistribution = [
  { label: "Critical", count: 7, percent: "16.7%", width: "17%", tone: "red", color: "bg-red-600" },
  { label: "High", count: 12, percent: "28.6%", width: "29%", tone: "orange", color: "bg-orange-500" },
  { label: "Moderate", count: 15, percent: "35.7%", width: "36%", tone: "yellow", color: "bg-yellow-400" },
  { label: "Low", count: 6, percent: "14.3%", width: "14%", tone: "green", color: "bg-emerald-500" },
  { label: "Not Assessed", count: 2, percent: "4.8%", width: "4%", tone: "slate", color: "bg-slate-400" },
];

// Month-on-month movement summary for portfolio risk.
export const portfolioChanges = [
  { label: "Deteriorated", value: "↑ 6", text: "projects moved to higher risk", tone: "red" },
  { label: "Improved", value: "↓ 3", text: "projects moved to lower risk", tone: "green" },
  { label: "Additional Cost Exposure", value: "+₹18,400 Cr", text: "since previous report", tone: "orange" },
  { label: "Schedule Slippage", value: "+27 months", text: "aggregate projected delay", tone: "blue" },
];

// Simple bar-chart data showing where risk is concentrated by ministry.
export const ministryRisk = [
  { ministry: "Railways", width: 70, count: "7/10", exposure: "₹1.42L Cr" },
  { ministry: "Road Transport & Highways", width: 63, count: "5/8", exposure: "₹0.84L Cr" },
  { ministry: "Jal Shakti", width: 50, count: "3/6", exposure: "₹0.36L Cr" },
  { ministry: "Housing & Urban Affairs", width: 40, count: "2/5", exposure: "₹0.28L Cr" },
  { ministry: "Power", width: 25, count: "1/4", exposure: "₹0.19L Cr" },
];

// Short decision-support insights displayed as officer-ready next steps.
export const decisionInsights = [
  {
    title: "Railways account for 41% of high-risk projects.",
    text: "Concentrated review may provide the largest immediate risk reduction.",
    icon: Landmark,
  },
  {
    title: "6 projects moved to a higher risk band since June.",
    text: "Prioritise month-on-month deteriorations before severe overruns.",
    icon: AlertTriangle,
  },
  {
    title: "3 projects show no progress improvement for two periods.",
    text: "Verify milestone status and implementing-agency updates.",
    icon: BarChart3,
  },
];

// Filter labels used by the filter chip row.
export const filters = ["Ministry: All", "Sector: All", "State: All", "Status: All", "Risk: All"];

// Suggested questions for the assistant panel.
export const assistantPrompts = [
  "Why are railway projects high risk?",
  "What changed since June?",
  "Show projects with increasing cost risk",
];

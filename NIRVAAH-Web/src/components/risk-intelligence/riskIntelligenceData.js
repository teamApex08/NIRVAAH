import {
  Activity,
  AlertTriangle,
  BarChart3,
  BrainCircuit,
  CalendarClock,
  CheckCircle2,
  CircleDollarSign,
  Database,
  Gauge,
  IndianRupee,
  Layers3,
  LineChart,
  MapPin,
  ShieldAlert,
  ShieldCheck,
  Target,
  TrendingUp,
  Zap,
} from "lucide-react";

// Static data for the Risk Intelligence page.
// Backend integration can replace these arrays with model outputs, risk
// signals, explainability payloads, and project-level analytics later.

// Top-level portfolio indicators used by shared MetricCard components.
export const riskKpis = [
  {
    icon: ShieldAlert,
    value: "42",
    label: "Projects Analysed",
    note: "Prototype risk engine",
    tone: "purple",
  },
  {
    icon: AlertTriangle,
    value: "12",
    label: "Critical Risk",
    note: "Needs immediate review",
    tone: "red",
  },
  {
    icon: CircleDollarSign,
    value: "18%",
    label: "Cost Escalation Risk",
    note: "Above peer median",
    tone: "orange",
  },
  {
    icon: CalendarClock,
    value: "9 mo",
    label: "Median Schedule Slip",
    note: "Analysed projects only",
    tone: "blue",
  },
  {
    icon: CheckCircle2,
    value: "83%",
    label: "Explainability Coverage",
    note: "Signals with key reasons",
    tone: "green",
  },
];

// Tabs are presentational in this prototype. They define the page's analysis modes.
export const riskTabs = ["Overview", "Cost Risk", "Schedule Risk", "Driver Analysis", "Model Signals"];

// Filter controls shown under the tabs.
export const riskFilters = [
  { label: "Ministry", options: ["All Ministries", "Railways", "Jal Shakti", "Power", "Housing & Urban Affairs"] },
  { label: "Sector", options: ["All Sectors", "Transport", "Water Resources", "Energy", "Urban Development"] },
  { label: "State", options: ["All States", "Uttar Pradesh", "Bihar", "Maharashtra", "Karnataka"] },
  { label: "Risk Level", options: ["All", "Critical", "High", "Moderate", "Low"] },
  { label: "Signal Type", options: ["All Signals", "Cost", "Schedule", "Progress", "Implementation"] },
];

// Risk matrix rows compare sectors across the major signal categories.
export const riskMatrix = [
  {
    sector: "Railways",
    projects: 8,
    cost: 82,
    schedule: 88,
    progress: 76,
    driver: "Progress stagnation",
    status: "Critical",
  },
  {
    sector: "Road Transport",
    projects: 11,
    cost: 64,
    schedule: 58,
    progress: 48,
    driver: "Cost escalation",
    status: "High",
  },
  {
    sector: "Water Resources",
    projects: 7,
    cost: 56,
    schedule: 72,
    progress: 61,
    driver: "Land and approvals",
    status: "High",
  },
  {
    sector: "Urban Development",
    projects: 6,
    cost: 49,
    schedule: 54,
    progress: 45,
    driver: "Procurement delay",
    status: "Moderate",
  },
  {
    sector: "Energy",
    projects: 5,
    cost: 35,
    schedule: 42,
    progress: 33,
    driver: "Vendor dependency",
    status: "Moderate",
  },
];

// Priority queue rows help officers move from analytics to review actions.
export const riskQueue = [
  {
    id: "PRJ-2025-014",
    name: "Eastern Freight Corridor",
    ministry: "Railways",
    state: "Uttar Pradesh",
    score: 78,
    level: "Critical",
    primaryRisk: "Schedule + progress",
    nextStep: "Review recovery plan",
  },
  {
    id: "PRJ-2024-201",
    name: "Metro Rail Phase II",
    ministry: "Housing & Urban Affairs",
    state: "Maharashtra",
    score: 71,
    level: "High",
    primaryRisk: "Cost escalation",
    nextStep: "Check revised estimate",
  },
  {
    id: "PRJ-2023-077",
    name: "River Basin Project",
    ministry: "Jal Shakti",
    state: "Bihar",
    score: 69,
    level: "High",
    primaryRisk: "Land and approvals",
    nextStep: "Escalate blockers",
  },
  {
    id: "PRJ-2022-333",
    name: "Coastal Protection Works",
    ministry: "Earth Sciences",
    state: "Tamil Nadu",
    score: 66,
    level: "High",
    primaryRisk: "Slow expenditure",
    nextStep: "Request monthly note",
  },
];

// Driver analysis shows the biggest contributors behind current risk scores.
export const riskDrivers = [
  {
    icon: Activity,
    title: "Progress stagnation",
    value: "31%",
    description: "Projects with no meaningful movement for two reporting periods.",
    tone: "red",
  },
  {
    icon: IndianRupee,
    title: "Cost escalation",
    value: "24%",
    description: "Revised cost materially higher than original or peer median.",
    tone: "orange",
  },
  {
    icon: CalendarClock,
    title: "Completion slippage",
    value: "22%",
    description: "Revised completion dates moving beyond expected tolerance.",
    tone: "blue",
  },
  {
    icon: MapPin,
    title: "External blockers",
    value: "14%",
    description: "Land, approvals, procurement and contractor dependencies.",
    tone: "purple",
  },
];

// Trend points are rendered as simple bars to avoid adding a chart library yet.
export const riskTrend = [
  { month: "Feb", critical: 7, high: 18 },
  { month: "Mar", critical: 8, high: 20 },
  { month: "Apr", critical: 9, high: 23 },
  { month: "May", critical: 10, high: 26 },
  { month: "Jun", critical: 11, high: 28 },
  { month: "Jul", critical: 12, high: 31 },
];

// Model signal cards describe how the prototype risk engine is behaving.
export const modelSignals = [
  {
    icon: BrainCircuit,
    title: "Risk Engine",
    value: "NIRVAAH v1.0",
    description: "Scores combine cost, schedule, progress and warning signals.",
    tone: "purple",
  },
  {
    icon: Database,
    title: "Source Freshness",
    value: "21 Aug 2026",
    description: "Portfolio inputs from PAIMANA July reporting cycle.",
    tone: "blue",
  },
  {
    icon: ShieldCheck,
    title: "Governance",
    value: "Explainable",
    description: "Each risk score is supported by evidence and key reasons.",
    tone: "green",
  },
];

// Recommended actions keep the page connected to officer workflows.
export const riskActions = [
  {
    icon: Target,
    title: "Create review note",
    description: "Summarise top drivers for the selected critical project.",
    tone: "blue",
  },
  {
    icon: LineChart,
    title: "Compare peer risk",
    description: "Review selected project against sector benchmarks.",
    tone: "green",
  },
  {
    icon: Zap,
    title: "Open early warnings",
    description: "Investigate newly detected or worsening signals.",
    tone: "orange",
  },
  {
    icon: Layers3,
    title: "Export risk brief",
    description: "Download a ministry-ready summary for review.",
    tone: "purple",
  },
];

// Insights shown in the right rail.
export const riskInsights = [
  "Railways has the highest combined schedule and progress risk this cycle.",
  "Cost escalation risk is concentrated in 6 projects above the sector median.",
  "Projects with stagnant progress are 2.3x more likely to trigger early warnings.",
];

// Short glossary keeps the page beginner-friendly without adding clutter.
export const riskGlossary = [
  {
    term: "Risk score",
    meaning: "A 0-100 signal that ranks review urgency for analysed projects.",
  },
  {
    term: "Driver",
    meaning: "The strongest reason contributing to a project's current risk.",
  },
  {
    term: "Confidence",
    meaning: "How complete and consistent the underlying evidence is.",
  },
];

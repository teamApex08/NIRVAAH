import { BarChart3, Building2, CalendarDays, GitCompareArrows, IndianRupee, PlayCircle, Save, TrendingUp } from "lucide-react";

// Dummy data for the Benchmarking page.
// Replace this file first when the backend benchmarking endpoints are ready.

// View tabs shown above the filters.
export const benchmarkTabs = ["Sector Benchmark", "Ministry Benchmark", "State Benchmark", "Project Benchmark", "Peer Comparison"];

// Filter fields for building a benchmark cohort.
export const benchmarkFilters = [
  { label: "Sector", options: ["All Sectors", "Transport", "Energy", "Water Resources", "Urban Development"] },
  { label: "Ministry", options: ["All Ministries", "Railways", "Road Transport & Highways", "Power", "Jal Shakti"] },
  { label: "State", options: ["All States", "Uttar Pradesh", "Maharashtra", "Karnataka", "Gujarat"] },
  { label: "Project Status", options: ["Ongoing", "Delayed", "Completed", "All"] },
  { label: "Risk Level", options: ["All", "Critical", "High", "Moderate", "Low"] },
];

// KPI cards summarize the selected benchmark cohort.
export const benchmarkKpis = [
  {
    icon: Building2,
    value: "Eastern Freight Corridor",
    label: "Selected Project",
    note: "Railways · Uttar Pradesh",
    tone: "blue",
    priority: "primary",
  },
  {
    icon: GitCompareArrows,
    value: "84 peers",
    label: "Peer Group",
    note: "Comparable rail transport projects",
    tone: "slate",
  },
  {
    icon: IndianRupee,
    value: "+137%",
    label: "Cost Variance",
    note: "Above peer median original cost",
    tone: "orange",
  },
  {
    icon: CalendarDays,
    value: "78th",
    label: "Delay Percentile",
    note: "Worse than most comparable projects",
    tone: "red",
  },
  {
    icon: BarChart3,
    value: "-4 pp",
    label: "Progress Variance",
    note: "Below peer median physical progress",
    tone: "green",
  },
];

// Values used by the sector comparison chart.
export const sectorComparison = [
  { sector: "Road Transport", q1: 12, q3: 44, median: 29, average: 24, selection: 37, low: 6, high: 52 },
  { sector: "Railways", q1: 18, q3: 48, median: 40, average: 32, selection: 35, low: 8, high: 72 },
  { sector: "Power", q1: 16, q3: 43, median: 31, average: 22, selection: 28, low: 4, high: 50 },
  { sector: "Urban Development", q1: 14, q3: 52, median: 27, average: 34, selection: 30, low: 6, high: 72 },
  { sector: "Housing & Urban Affairs", q1: 13, q3: 74, median: 22, average: 42, selection: 17, low: 5, high: 80 },
  { sector: "Water Resources", q1: 17, q3: 44, median: 26, average: 24, selection: 31, low: 4, high: 51 },
  { sector: "Telecom", q1: 20, q3: 56, median: 29, average: 18, selection: 25, low: 7, high: 65 },
  { sector: "Others", q1: 11, q3: 46, median: 27, average: 22, selection: 31, low: 3, high: 73 },
];

// Stacked bar chart data for schedule performance.
export const schedulePerformance = [
  { sector: "Road Transport & Highways", ahead: 18, onTime: 52, delayed: 22, significant: 8 },
  { sector: "Railways", ahead: 12, onTime: 48, delayed: 28, significant: 12 },
  { sector: "Power", ahead: 20, onTime: 50, delayed: 23, significant: 7 },
  { sector: "Urban Development", ahead: 16, onTime: 46, delayed: 26, significant: 12 },
  { sector: "Housing & Urban Affairs", ahead: 15, onTime: 49, delayed: 25, significant: 11 },
  { sector: "Water Resources", ahead: 14, onTime: 45, delayed: 29, significant: 12 },
  { sector: "Telecom", ahead: 22, onTime: 51, delayed: 20, significant: 7 },
  { sector: "Others", ahead: 17, onTime: 48, delayed: 26, significant: 9 },
];

// Top and bottom performers table.
export const performerTabs = ["Highest Cost Escalation", "Lowest Cost Escalation", "Highest Schedule Delay", "Highest Progress"];

export const performingProjects = [
  {
    rank: 1,
    name: "Eastern Freight Corridor",
    ministry: "Railways",
    state: "Uttar Pradesh",
    escalation: "72%",
    revisedCost: "72,918",
    status: "Ongoing",
  },
  {
    rank: 2,
    name: "Metro Rail Phase II",
    ministry: "Housing & Urban Affairs",
    state: "Maharashtra",
    escalation: "68%",
    revisedCost: "56,230",
    status: "Ongoing",
  },
  {
    rank: 3,
    name: "River Basin Project",
    ministry: "Jal Shakti",
    state: "Bihar",
    escalation: "54%",
    revisedCost: "16,245",
    status: "Ongoing",
  },
  {
    rank: 4,
    name: "Coastal Protection Works",
    ministry: "Earth Sciences",
    state: "Tamil Nadu",
    escalation: "49%",
    revisedCost: "10,002",
    status: "Ongoing",
  },
  {
    rank: 5,
    name: "Urban Transport Project",
    ministry: "Housing & Urban Affairs",
    state: "Madhya Pradesh",
    escalation: "46%",
    revisedCost: "27,880",
    status: "Ongoing",
  },
];

// Peer comparison data for the selected project.
export const peerComparison = {
  selectedProject: {
    name: "Eastern Freight Corridor",
    id: "PRJ-2025-014",
    risk: "Critical",
  },
  metricTabs: ["Key Metrics", "Cost Trend", "Progress Trend", "Timeline"],
  metrics: [
    { metric: "Original Cost", selected: "67,432", peerMedian: "28,500", difference: "+137%" },
    { metric: "Revised Cost", selected: "72,918", peerMedian: "31,220", difference: "+134%" },
    { metric: "Physical Progress", selected: "58%", peerMedian: "62%", difference: "-4 pp" },
    { metric: "Revised Completion", selected: "Dec 2027", peerMedian: "Mar 2027", difference: "+9 months" },
  ],
};

export const benchmarkInsights = [
  "Schedule performance is worse than 78% of comparable railway infrastructure projects.",
  "Eastern Freight Corridor is above peer median cost while remaining slightly below median progress.",
  "The strongest comparison weakness is cost escalation; the strongest comparison strength is current physical progress versus older rail projects.",
];

export const benchmarkActions = [
  { icon: PlayCircle, title: "How Benchmarking Works", description: "Understand cohort logic", tone: "blue" },
  { icon: Save, title: "Save Benchmark View", description: "Keep this cohort for review", tone: "green" },
  { icon: GitCompareArrows, title: "Add Peer Project", description: "Compare another project", tone: "purple" },
];

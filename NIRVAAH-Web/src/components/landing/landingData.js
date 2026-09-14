// Public navigation links. Hash links scroll inside the landing page.
export const navItems = [
  { label: "Home", href: "#home" },
  { label: "Product", href: "#product" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Data & Methods", href: "#data-methods" },
  { label: "About", href: "#about" },
];

// Portfolio snapshot metrics shown in the hero section.
export const portfolioStats = [
  { value: "1,981", label: "Projects" },
  { value: "17", label: "Ministries / Departments" },
  { value: "₹42.78 Lakh Crore", label: "Revised Cost" },
  { value: "₹20.36 Lakh Crore", label: "Expenditure" },
];

// Five-step product story for the "From Data to Decisions" section.
export const flowSteps = [
  { icon: "portfolio", label: "Monitor", text: "Track cost, progress, timelines and status." },
  { icon: "search", label: "Understand", text: "Structure project-month trends and deviations." },
  { icon: "trend", label: "Predict", text: "Estimate emerging cost and schedule risk." },
  { icon: "priority", label: "Prioritise", text: "Rank projects requiring officer attention." },
  { icon: "check", label: "Act", text: "Review drivers and intervene earlier." },
];

// Four core capabilities NIRVAAH promises on the landing page.
export const capabilities = [
  {
    eyebrow: "Predict",
    icon: "trend",
    title: "Cost & Schedule Risk",
    text: "Forecast emerging budget and timeline risks using historical and current project behaviour.",
  },
  {
    eyebrow: "Prioritise",
    icon: "priority",
    title: "Unified Risk & Early Warnings",
    text: "Combine risk indicators so officers can focus first on projects requiring attention.",
  },
  {
    eyebrow: "Explain",
    icon: "search",
    title: "Risk Drivers & Benchmarking",
    text: "Identify why a project is flagged and compare it with similar projects, sectors and ministries.",
  },
  {
    eyebrow: "Decide",
    icon: "assistant",
    title: "Recommendations & Intelligence Assistant",
    text: "Explore intervention-ready insights and ask contextual questions in natural language.",
  },
];

// Mini rows used inside the static dashboard preview and hero background.
export const previewRows = [
  ["Eastern Freight Corridor", "Railways", "Critical", "Review"],
  ["River Basin Project", "Jal Shakti", "High", "Review"],
  ["Metro Rail Phase II", "Urban Affairs", "High", "Investigate"],
];

// KPI cards shown inside the dashboard preview mockup.
export const previewKpis = [
  { label: "High Risk Projects", value: "312", tone: "red" },
  { label: "Cost Exposure", value: "₹5.65L Cr", tone: "green" },
  { label: "Delay Exposure", value: "18.4 mo", tone: "orange" },
  { label: "Intervention Due", value: "74", tone: "blue" },
];

// Data processing pipeline shown in the "How It Works" section.
export const pipeline = [
  {
    step: "Data",
    icon: "database",
    title: "PAIMANA Data",
    text: "Project cost, expenditure, progress, timelines and status.",
  },
  {
    step: "Understand",
    icon: "portfolio",
    title: "Project-Month Intelligence",
    text: "Clean, structure and derive recurring project trends.",
  },
  {
    step: "Predict",
    icon: "trend",
    title: "Predictive Analysis",
    text: "Estimate cost and schedule risk using data-driven methods.",
  },
  {
    step: "Explain",
    icon: "search",
    title: "Explainable Risk",
    text: "Prioritise projects and identify major contributing drivers.",
  },
  {
    step: "Act",
    icon: "user",
    title: "Officer Action",
    text: "Review, investigate, compare context and intervene earlier.",
  },
];

// Outcome cards explaining why the product matters to officers.
export const outcomes = [
  {
    icon: "clock",
    title: "Earlier Intervention",
    text: "Identify emerging risks before they become severe overruns.",
  },
  {
    icon: "priority",
    title: "Smarter Prioritisation",
    text: "Focus review effort on projects requiring immediate attention.",
  },
  {
    icon: "lightbulb",
    title: "Explainable Decisions",
    text: "Understand why a project has been flagged.",
  },
  {
    icon: "gear",
    title: "Faster Analysis",
    text: "Reduce repetitive manual comparison and monitoring.",
  },
  {
    icon: "bars",
    title: "Portfolio Intelligence",
    text: "Identify patterns across ministries, sectors and similar projects.",
  },
];

// Color mapping for the dashboard preview KPI cards.
export const kpiToneStyles = {
  red: {
    box: "border-red-200 bg-red-50",
    icon: "bg-red-100 text-red-700",
    value: "text-red-700",
  },
  green: {
    box: "border-emerald-200 bg-emerald-50",
    icon: "bg-emerald-100 text-emerald-700",
    value: "text-emerald-700",
  },
  orange: {
    box: "border-orange-200 bg-orange-50",
    icon: "bg-orange-100 text-orange-700",
    value: "text-orange-700",
  },
  blue: {
    box: "border-blue-200 bg-blue-50",
    icon: "bg-blue-100 text-blue-700",
    value: "text-blue-700",
  },
};

import { promptSuggestions } from "../data/aiAssistantData.js";
import {
  commandCentreAssistantPrompts,
  projectAssistantPrompts,
  warningAssistantPrompts,
} from "../data/pageAssistantPrompts.js";

export const ASSISTANT_CONTEXT_STORAGE_KEY = "nirvaah.aiAssistantContext";
export const FULL_ASSISTANT_PATH = "/nirvaah/ai-assistant";

const fallbackPrompts = [
  "Summarise what needs attention here.",
  "What changed in this view?",
  "Draft the next review note.",
];

const routeContexts = [
  {
    path: "/nirvaah",
    pageLabel: "NIRVAAH Overview",
    scope: "National infrastructure intelligence",
    focus: "Portfolio monitoring and decision support",
    insight: "The landing overview connects programme outcomes, data credibility and command-centre workflows.",
    promptSuggestions: [
      "What can NIRVAAH help me review?",
      "Show the main decision workflows.",
      "Which dashboard should I open first?",
    ],
  },
  {
    path: "/nirvaah/command-centre",
    pageLabel: "Command Centre",
    scope: "1,775 projects | 42 analysed | July 2026",
    focus: "Critical and high-risk portfolio movement",
    projectName: "Eastern Freight Corridor",
    projectId: "PRJ-2025-014",
    insight: "The command view is focused on portfolio risk, attention projects, ministry concentration and decision insights.",
    promptSuggestions: commandCentreAssistantPrompts,
  },
  {
    path: "/nirvaah/projects",
    pageLabel: "Projects",
    scope: "Railways | Uttar Pradesh | Transport",
    focus: "Critical risk project detail",
    projectName: "Eastern Freight Corridor",
    projectId: "PRJ-2025-014",
    insight: "Eastern Freight Corridor is selected with 58% physical progress and Critical risk.",
    promptSuggestions: projectAssistantPrompts,
  },
  {
    path: "/nirvaah/risk-intelligence",
    pageLabel: "Risk Intelligence",
    scope: "Risk model overview | cost, schedule, progress and signal drivers",
    focus: "Priority queue and explainable model signals",
    projectName: "Eastern Freight Corridor",
    projectId: "PRJ-2025-014",
    insight: "The risk workspace is focused on model scores, driver analysis, sector risk and recommended actions.",
    promptSuggestions: [
      "Explain the top risk drivers.",
      "Which projects should be reviewed first?",
      "Create a risk brief for the priority queue.",
    ],
  },
  {
    path: "/nirvaah/early-warnings",
    pageLabel: "Early Warnings",
    scope: "Critical warning | Progress Stagnation",
    focus: "Physical progress stagnant for 2 months, with expenditure significantly lower than planned trajectory.",
    projectName: "Eastern Freight Corridor",
    projectId: "PRJ-2025-014",
    insight: "Eastern Freight Corridor has a Critical warning with High confidence.",
    promptSuggestions: warningAssistantPrompts,
  },
  {
    path: "/nirvaah/benchmarking",
    pageLabel: "Benchmarking",
    scope: "Sector, ministry, state and peer comparison",
    focus: "Peer performance and cost escalation comparison",
    projectName: "Eastern Freight Corridor",
    projectId: "PRJ-2025-014",
    insight: "Railways has the highest share of cost escalation in the selected cohort.",
    promptSuggestions: [
      "Compare this project with its peer median.",
      "Which sector is the strongest benchmark?",
      "Summarise the outlier projects.",
    ],
  },
  {
    path: "/nirvaah/reports",
    pageLabel: "Reports & Exports",
    scope: "July 2026 | All Ministries | All Sectors",
    focus: "Portfolio Overview Report",
    insight: "High-risk projects need ministry review within the next reporting cycle.",
    promptSuggestions: [
      "Draft a portfolio overview report summary.",
      "Create a high-risk project brief.",
      "Which export format should I use?",
    ],
  },
  {
    path: "/nirvaah/settings",
    pageLabel: "Settings",
    scope: "National portfolio monitoring",
    focus: "Current role: Officer",
    insight: "Settings are scoped to officer access, notification rules, report defaults and security controls.",
    promptSuggestions: [
      "Summarise my alert configuration.",
      "Which defaults affect reports?",
      "Review security and access settings.",
    ],
  },
  {
    path: FULL_ASSISTANT_PATH,
    pageLabel: "AI Assistant",
    scope: "Full conversational workspace",
    focus: "Portfolio insights, warning explanations, comparisons and review notes",
    insight: "The full assistant workspace has the broadest space for multi-step questions and grounded answers.",
    promptSuggestions,
  },
];

export function getAssistantRouteContext(pathname) {
  let routeContext = routeContexts.find((context) => context.path === pathname);

  if (!routeContext && pathname.startsWith("/nirvaah/projects/")) {
    const projectContext = routeContexts.find((context) => context.path === "/nirvaah/projects");

    routeContext = {
      ...projectContext,
      pageLabel: "Project Detail",
      scope: "Selected project intelligence view",
      focus: "Status, warning evidence and recommended intervention",
      insight: "The project detail view connects status, problem, cause, evidence and recommended action for the selected project.",
      promptSuggestions: [
        "Explain this project's critical risk.",
        "Draft an intervention note for this project.",
        "Compare this project with relevant peers.",
      ],
    };
  }

  if (!routeContext) {
    routeContext = routeContexts.find((context) => context.path === pathname) ?? routeContexts[0];
  }

  return {
    ...routeContext,
    pagePath: pathname,
    promptSuggestions: routeContext.promptSuggestions?.length ? routeContext.promptSuggestions : fallbackPrompts,
  };
}

export function buildAssistantHandoffContext(routeContext, draftQuestion = "") {
  return {
    ...routeContext,
    draftQuestion: draftQuestion.trim(),
    capturedAt: new Date().toISOString(),
  };
}

export function storeAssistantContext(context) {
  if (typeof window === "undefined") {
    return;
  }

  try {
    window.sessionStorage.setItem(ASSISTANT_CONTEXT_STORAGE_KEY, JSON.stringify(context));
  } catch {
    // Context handoff is progressive enhancement; navigation should still work.
  }
}

export function readStoredAssistantContext() {
  if (typeof window === "undefined") {
    return null;
  }

  let rawContext;

  try {
    rawContext = window.sessionStorage.getItem(ASSISTANT_CONTEXT_STORAGE_KEY);
  } catch {
    return null;
  }

  if (!rawContext) {
    return null;
  }

  try {
    return JSON.parse(rawContext);
  } catch {
    return null;
  }
}

export function formatAssistantContextTime(capturedAt) {
  if (!capturedAt) {
    return "Current session";
  }

  const capturedDate = new Date(capturedAt);

  if (Number.isNaN(capturedDate.getTime())) {
    return "Current session";
  }

  return new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  }).format(capturedDate);
}

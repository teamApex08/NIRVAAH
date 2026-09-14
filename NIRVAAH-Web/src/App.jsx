import React, { useState } from "react";

const pageShell = "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-12";
const sectionPad = "py-16 sm:py-20 lg:py-24";
const compactSectionPad = "py-14 sm:py-16 lg:py-20";
const primaryButton =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-[#052b63] bg-[#052b63] px-4 py-2.5 text-sm font-bold leading-none text-white shadow-[0_12px_26px_rgba(5,43,99,0.16)] transition hover:-translate-y-0.5 hover:bg-[#031d43] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#075db7]/25";
const secondaryButton =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-[#b8c9da] bg-white px-4 py-2.5 text-sm font-bold leading-none text-[#052b63] transition hover:-translate-y-0.5 hover:border-[#075db7] hover:bg-[#eef5fb] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#075db7]/25";
const inverseButton =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-white bg-white px-4 py-2.5 text-sm font-bold leading-none text-[#052b63] shadow-[0_12px_26px_rgba(0,0,0,0.18)] transition hover:-translate-y-0.5 hover:bg-[#e9f3fd] focus:outline-none focus-visible:ring-4 focus-visible:ring-white/30";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Product", href: "#product" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Data & Methods", href: "#data-methods" },
  { label: "About", href: "#about" },
];

const portfolioStats = [
  { value: "1,981", label: "Projects" },
  { value: "17", label: "Ministries / Departments" },
  { value: "₹42.78 Lakh Crore", label: "Revised Cost" },
  { value: "₹20.36 Lakh Crore", label: "Expenditure" },
];

const flowSteps = [
  { icon: "portfolio", label: "Monitor", text: "Track cost, progress, timelines and status." },
  { icon: "search", label: "Understand", text: "Structure project-month trends and deviations." },
  { icon: "trend", label: "Predict", text: "Estimate emerging cost and schedule risk." },
  { icon: "priority", label: "Prioritise", text: "Rank projects requiring officer attention." },
  { icon: "check", label: "Act", text: "Review drivers and intervene earlier." },
];

const capabilities = [
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

const previewRows = [
  ["Eastern Freight Corridor", "Railways", "Critical", "Review"],
  ["River Basin Project", "Jal Shakti", "High", "Review"],
  ["Metro Rail Phase II", "Urban Affairs", "High", "Investigate"],
];

const previewKpis = [
  { label: "High Risk Projects", value: "312", tone: "red" },
  { label: "Cost Exposure", value: "₹5.65L Cr", tone: "green" },
  { label: "Delay Exposure", value: "18.4 mo", tone: "orange" },
  { label: "Intervention Due", value: "74", tone: "blue" },
];

const pipeline = [
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

const outcomes = [
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

const kpiToneStyles = {
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

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f6f9fc] text-[#10233d]">
      <a
        className="fixed left-3 top-3 z-[100] -translate-y-24 rounded-md bg-[#052b63] px-3 py-2 text-sm font-bold text-white transition focus:translate-y-0"
        href="#main"
      >
        Skip to main content
      </a>
      <LandingHeader />
      <main id="main">
        <HeroSection />
        <DecisionFlow />
        <CapabilitySection />
        <CommandCentrePreview />
        <HowItWorksSection />
        <OutcomeSection />
        <DataCredibility />
        <FinalCTA />
      </main>
      <LandingFooter />
    </div>
  );
}

function LandingHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const navLink =
    "rounded-md px-3 py-2 text-sm font-semibold text-[#263d59] transition hover:bg-[#eef5fb] hover:text-[#052b63]";

  return (
    <header className="sticky top-0 z-50 border-b border-[#d5e1ec]/90 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex min-h-[72px] w-full max-w-[1400px] items-center gap-3 px-4 sm:px-6 lg:px-10">
        <a className="flex min-w-0 items-center gap-3" href="#home" aria-label="NIRVAAH home">
          <GovEmblem />
          <span className="hidden min-w-0 leading-tight lg:grid">
            <strong className="text-sm font-extrabold text-[#052b63]">
              Ministry of Statistics &<br />
              Programme Implementation
            </strong>
            <small className="text-xs text-[#526276]">Government of India</small>
          </span>
          <span className="hidden h-9 w-px bg-[#b8c9da] lg:block" aria-hidden="true" />
          <PlatformMark />
          <span className="grid min-w-0 leading-tight">
            <strong className="text-sm font-extrabold text-[#052b63] sm:text-base">NIRVAAH</strong>
            <small className="hidden text-xs text-[#526276] sm:block">Intelligence Command Centre</small>
          </span>
          <span className="hidden rounded-full border border-[#075db7]/20 bg-[#e9f3fd] px-2.5 py-1.5 text-xs font-bold text-[#075db7] md:inline-flex">
            SIH Prototype
          </span>
        </a>

        <button
          className="ml-auto inline-grid size-11 place-items-center rounded-lg border border-[#d5e1ec] bg-white text-[#052b63] xl:hidden"
          type="button"
          aria-expanded={isOpen}
          aria-controls="site-navigation"
          aria-label="Toggle navigation"
          onClick={() => setIsOpen((value) => !value)}
        >
          <Icon name={isOpen ? "close" : "menu"} />
        </button>

        <nav
          className={`absolute left-4 right-4 top-[78px] z-50 gap-1 rounded-lg border border-[#d5e1ec] bg-white p-2 shadow-xl xl:static xl:ml-auto xl:flex xl:items-center xl:justify-end xl:border-0 xl:bg-transparent xl:p-0 xl:shadow-none ${
            isOpen ? "grid" : "hidden"
          }`}
          id="site-navigation"
          aria-label="Primary"
        >
          {navItems.map((item, index) => (
            <a
              key={item.href}
              className={`${navLink} ${index === 0 ? "bg-[#eef5fb] text-[#052b63]" : ""}`}
              href={item.href}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a className={`${primaryButton} hidden lg:inline-flex`} href="#command-centre">
          Open Command Centre
          <Icon name="arrow" className="size-4" />
        </a>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-[#d5e1ec]" id="home" aria-labelledby="hero-title">
      <HeroBackdrop />
      <div className={`${pageShell} relative z-10 py-[72px] sm:py-24 lg:py-28`}>
        <div className="max-w-4xl">
          <p className="mb-5 inline-flex rounded-full border border-[#075db7]/20 bg-[#e9f3fd] px-3 py-1.5 text-xs font-bold uppercase text-[#075db7]">
            SIH 2026 Prototype · PS 26103
          </p>
          <h1 id="hero-title" className="text-5xl font-black leading-[0.96] text-[#052b63] sm:text-6xl lg:text-7xl">
            NIRVAAH
            <span className="mt-3 block max-w-3xl text-3xl font-extrabold leading-tight text-[#10233d] sm:text-4xl lg:text-5xl">
              Intelligence Command Centre
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-xl font-semibold text-[#075db7]">
            From project monitoring to predictive intervention.
          </p>
          <p className="mt-4 max-w-3xl text-base leading-8 text-[#526276] sm:text-lg">
            An intelligent decision-support layer that predicts emerging cost and schedule risks, explains their
            drivers and helps officers prioritise timely intervention.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a className={primaryButton} href="#command-preview" id="command-centre">
              Open Command Centre
              <Icon name="arrow" className="size-4" />
            </a>
            <a className={secondaryButton} href="#product">
              <Icon name="play" className="size-4" />
              Watch 2-min Overview
            </a>
          </div>
        </div>
        <PortfolioSnapshot />
      </div>
    </section>
  );
}

function HeroBackdrop() {
  const miniRows = ["Railways", "Jal Shakti", "Urban Affairs", "Road Transport"];

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#f6f9fc_0%,rgba(246,249,252,0.97)_35%,rgba(246,249,252,0.75)_72%,#f6f9fc_100%)]" />
      <div className="absolute right-[-160px] top-8 hidden w-[920px] opacity-45 lg:block">
        <div className="rounded-lg border border-[#d5e1ec] bg-white p-4 shadow-[0_24px_60px_rgba(5,43,99,0.16)]">
          <div className="mb-4 flex items-center justify-between border-b border-[#d5e1ec] pb-3">
            <div>
              <p className="text-xs font-bold text-[#075db7]">NIRVAAH</p>
              <p className="text-2xl font-black text-[#052b63]">Portfolio Risk Overview</p>
            </div>
            <span className="rounded-md bg-[#e9f3fd] px-3 py-2 text-xs font-bold text-[#075db7]">July 2026</span>
          </div>
          <div className="grid grid-cols-4 gap-3">
            {previewKpis.map((kpi) => (
              <div key={kpi.label} className="rounded-lg border border-[#d5e1ec] bg-[#f8fbfe] p-3">
                <p className="text-xl font-black text-[#052b63]">{kpi.value}</p>
                <p className="mt-1 text-xs text-[#526276]">{kpi.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 grid grid-cols-[0.9fr_1.2fr] gap-4">
            <div className="rounded-lg border border-[#d5e1ec] bg-[#f8fbfe] p-4">
              <p className="mb-4 text-sm font-bold text-[#10233d]">Risk Distribution</p>
              <div className="mx-auto grid size-36 place-items-center rounded-full bg-[conic-gradient(#dc2626_0_17%,#f97316_17%_46%,#facc15_46%_82%,#22c55e_82%_96%,#94a3b8_96%_100%)] p-5">
                <div className="grid size-full place-items-center rounded-full bg-white text-center text-sm font-black text-[#052b63]">
                  42
                </div>
              </div>
            </div>
            <div className="rounded-lg border border-[#d5e1ec] bg-[#f8fbfe] p-4">
              <p className="mb-3 text-sm font-bold text-[#10233d]">Projects Needing Attention</p>
              <div className="grid gap-2">
                {miniRows.map((row, index) => (
                  <div key={row} className="grid grid-cols-[1fr_auto] items-center rounded-md bg-white px-3 py-2">
                    <span className="text-sm font-semibold text-[#263d59]">{row}</span>
                    <span className={index === 0 ? "text-sm font-bold text-red-600" : "text-sm font-bold text-orange-600"}>
                      {index === 0 ? "Critical" : "High"}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PortfolioSnapshot() {
  return (
    <aside
      className="mt-12 rounded-lg border border-[#d5e1ec]/90 bg-white/90 p-5 shadow-[0_16px_38px_rgba(5,43,99,0.10)] backdrop-blur"
      aria-label="India's Infrastructure Portfolio snapshot"
    >
      <div className="flex flex-col gap-3 border-b border-[#d5e1ec] pb-4 md:flex-row md:items-start md:justify-between">
        <div>
          <h2 className="text-xl font-black text-[#052b63]">India's Infrastructure Portfolio</h2>
          <p className="mt-1 text-sm text-[#526276]">As per PAIMANA Flash Report - April 2026</p>
        </div>
        <a className="text-sm font-bold text-[#075db7] hover:text-[#052b63]" href="#data-methods">
          View Report
        </a>
      </div>
      <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {portfolioStats.map((metric) => (
          <MetricItem key={metric.label} value={metric.value} label={metric.label} />
        ))}
      </div>
      <p className="mt-5 max-w-4xl text-sm leading-6 text-[#526276]">
        Enabling timely intervention for a more efficient, accountable and resilient infrastructure ecosystem.
      </p>
      <p className="mt-2 text-xs text-[#748397]">
        Source: PAIMANA 466th Flash Report, April 2026 · Ministry of Statistics & Programme Implementation
      </p>
    </aside>
  );
}

function MetricItem({ value, label }) {
  return (
    <div className="border-l-4 border-[#0b8a7a] bg-[#f8fbfe] px-4 py-3">
      <strong className="block text-2xl font-black text-[#052b63]">{value}</strong>
      <span className="mt-1 block text-sm font-semibold text-[#526276]">{label}</span>
    </div>
  );
}

function DecisionFlow() {
  return (
    <section className={`bg-white ${compactSectionPad}`} id="product" aria-labelledby="flow-title">
      <div className={pageShell}>
        <SectionHeader
          id="flow-title"
          title="From Data to Decisions"
          subtitle="Turning infrastructure monitoring data into prioritised, explainable action."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-5" aria-label="Product journey">
          {flowSteps.map((step, index) => (
            <FlowStep key={step.label} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FlowStep({ step, index }) {
  return (
    <article className="relative rounded-lg border border-[#d5e1ec] bg-[#f8fbfe] p-5 transition hover:-translate-y-1 hover:shadow-[0_16px_38px_rgba(5,43,99,0.10)]">
      <span className="grid size-11 place-items-center rounded-lg bg-[#e9f3fd] text-[#075db7]">
        <Icon name={step.icon} />
      </span>
      <span className="mt-5 block text-sm font-black text-[#0b8a7a]">0{index + 1}</span>
      <h3 className="mt-2 text-lg font-black text-[#052b63]">{step.label}</h3>
      <p className="mt-2 text-sm leading-6 text-[#526276]">{step.text}</p>
    </article>
  );
}

function CapabilitySection() {
  return (
    <section className={`bg-[#f6f9fc] ${sectionPad}`} aria-labelledby="capabilities-title">
      <div className={pageShell}>
        <SectionHeader
          id="capabilities-title"
          title="Decision Intelligence for Infrastructure Monitoring"
          subtitle="Four connected capabilities: predict, prioritise, explain and decide."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {capabilities.map((card) => (
            <CapabilityCard key={card.title} card={card} />
          ))}
        </div>
        <p className="mt-6 rounded-lg border border-[#d5e1ec] bg-white px-4 py-3 text-center text-sm font-bold text-[#075db7] shadow-sm">
          Evidence-based · Explainable · Transparent · Action-oriented
        </p>
      </div>
    </section>
  );
}

function CapabilityCard({ card }) {
  return (
    <article className="rounded-lg border border-[#d5e1ec] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_16px_38px_rgba(5,43,99,0.10)]">
      <span className="grid size-12 place-items-center rounded-lg bg-[#edf8f5] text-[#0b8a7a]">
        <Icon name={card.icon} />
      </span>
      <p className="mt-5 text-sm font-black uppercase text-[#075db7]">{card.eyebrow}</p>
      <h3 className="mt-2 text-xl font-black text-[#052b63]">{card.title}</h3>
      <p className="mt-3 text-sm leading-6 text-[#526276]">{card.text}</p>
    </article>
  );
}

function CommandCentrePreview() {
  return (
    <section className={`bg-white ${sectionPad}`} id="command-preview" aria-labelledby="preview-title">
      <div className={pageShell}>
        <SectionHeader
          id="preview-title"
          title="One Command Centre. Portfolio-to-Project Intelligence."
          subtitle="Move from national portfolio visibility to project-level risk, drivers and intervention priorities."
        />
        <div className="mt-10 grid gap-6 xl:grid-cols-[1.35fr_0.65fr]">
          <PreviewDashboard />
          <div className="grid content-start gap-4">
            <PreviewCallout title="Portfolio Risk" text="See risk distribution across the monitored portfolio." />
            <PreviewCallout title="Priority Projects" text="Surface projects requiring immediate review." />
            <PreviewCallout title="Emerging Warnings" text="Identify changes before they become major deviations." />
          </div>
        </div>
        <ScreenshotEvidence />
        <div className="mt-8 flex justify-center">
          <a className={primaryButton} href="#command-centre">
            Explore Command Centre
            <Icon name="arrow" className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function PreviewDashboard() {
  return (
    <div className="overflow-hidden rounded-lg border border-[#d5e1ec] bg-white shadow-[0_18px_45px_rgba(5,43,99,0.12)]">
      <div className="grid lg:grid-cols-[220px_1fr]">
        <aside className="bg-[#052b63] p-5 text-white">
          <strong className="block text-xl font-black">NIRVAAH</strong>
          <span className="mt-1 block text-sm text-white/70">Command Centre</span>
          <div className="mt-8 grid gap-2 text-sm font-semibold text-white/78">
            {["Overview", "Projects", "Risk Intelligence", "Early Warnings"].map((item, index) => (
              <p key={item} className={`rounded-md px-3 py-2 ${index === 0 ? "bg-white/12 text-white" : ""}`}>
                {item}
              </p>
            ))}
          </div>
        </aside>

        <div className="bg-[#f8fbfe] p-5">
          <div className="flex flex-col gap-3 border-b border-[#d5e1ec] pb-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-2xl font-black text-[#052b63]">Portfolio Risk Overview</h3>
              <p className="mt-1 text-sm text-[#526276]">Reporting Month · April 2026</p>
            </div>
            <span className="w-fit rounded-full bg-[#e9f3fd] px-3 py-1.5 text-xs font-bold text-[#075db7]">
              42 analysed projects
            </span>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {previewKpis.map((kpi) => (
              <PreviewKpi key={kpi.label} {...kpi} />
            ))}
          </div>

          <div className="mt-5 grid gap-4 lg:grid-cols-[0.75fr_1.25fr]">
            <div className="rounded-lg border border-[#d5e1ec] bg-white p-5">
              <h4 className="text-base font-black text-[#10233d]">Risk Distribution</h4>
              <div className="mx-auto mt-5 grid size-36 place-items-center rounded-full bg-[conic-gradient(#dc2626_0_17%,#f97316_17%_46%,#facc15_46%_82%,#22c55e_82%_96%,#94a3b8_96%_100%)] p-5">
                <div className="grid size-full place-items-center rounded-full bg-white text-center">
                  <span className="text-3xl font-black text-[#052b63]">42</span>
                </div>
              </div>
              <p className="mt-4 text-center text-sm leading-6 text-[#526276]">
                Critical 16.7% · High 28.6% · Moderate 35.7%
              </p>
            </div>

            <div className="rounded-lg border border-[#d5e1ec] bg-white p-5">
              <h4 className="text-base font-black text-[#10233d]">Priority Projects</h4>
              <div className="mt-4 overflow-hidden rounded-md border border-[#d5e1ec]">
                {previewRows.map((row) => (
                  <div
                    className="grid gap-2 border-b border-[#d5e1ec] bg-white px-3 py-3 text-sm last:border-b-0 md:grid-cols-[1.4fr_0.9fr_0.7fr_0.7fr]"
                    key={row[0]}
                  >
                    <span className="font-bold text-[#10233d]">{row[0]}</span>
                    <span className="text-[#526276]">{row[1]}</span>
                    <strong className={row[2] === "Critical" ? "text-red-700" : "text-orange-700"}>{row[2]}</strong>
                    <em className="not-italic font-bold text-[#075db7]">{row[3]}</em>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PreviewKpi({ label, value, tone }) {
  const styles = kpiToneStyles[tone] ?? kpiToneStyles.blue;

  return (
    <div className={`rounded-lg border p-4 ${styles.box}`}>
      <span className={`mb-3 grid size-9 place-items-center rounded-md ${styles.icon}`}>
        <Icon name={tone === "red" ? "priority" : tone === "green" ? "bars" : tone === "orange" ? "clock" : "bell"} />
      </span>
      <strong className={`block text-2xl font-black ${styles.value}`}>{value}</strong>
      <span className="mt-1 block text-xs font-bold text-[#526276]">{label}</span>
    </div>
  );
}

function PreviewCallout({ title, text }) {
  return (
    <article className="flex gap-3 rounded-lg border border-[#d5e1ec] bg-[#f8fbfe] p-5">
      <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-[#edf8f5] text-[#0b8a7a]">
        <Icon name="check" />
      </span>
      <div>
        <h3 className="text-lg font-black text-[#052b63]">{title}</h3>
        <p className="mt-1 text-sm leading-6 text-[#526276]">{text}</p>
      </div>
    </article>
  );
}

function ScreenshotEvidence() {
  return (
    <div className="mt-6 grid gap-5 lg:grid-cols-2">
      <figure className="overflow-hidden rounded-lg border border-[#d5e1ec] bg-white shadow-sm">
        <img
          className="aspect-[16/10] w-full object-cover object-left-top"
          src="/assets/mockups/paimana-overview-dashboard.png"
          alt="PAIMANA overview dashboard used as source interface reference"
        />
        <figcaption className="border-t border-[#d5e1ec] px-4 py-3 text-sm font-semibold text-[#526276]">
          Portfolio overview reference for NIRVAAH intelligence workflows.
        </figcaption>
      </figure>
      <figure className="overflow-hidden rounded-lg border border-[#d5e1ec] bg-white shadow-sm">
        <img
          className="aspect-[16/10] w-full object-cover object-left-top"
          src="/assets/mockups/paimana-risk-detail-workspace.png"
          alt="Project risk detail workspace used as source interface reference"
        />
        <figcaption className="border-t border-[#d5e1ec] px-4 py-3 text-sm font-semibold text-[#526276]">
          Project-level risk detail reference with drivers, milestones, and assistant context.
        </figcaption>
      </figure>
    </div>
  );
}

function HowItWorksSection() {
  return (
    <section className={`bg-[#f6f9fc] ${sectionPad}`} id="how-it-works" aria-labelledby="workflow-title">
      <div className={pageShell}>
        <SectionHeader
          id="workflow-title"
          title="How Intelligence Is Generated"
          subtitle="From PAIMANA/OCMS project records to explainable decision support."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {pipeline.map((stage) => (
            <PipelineStage key={stage.title} stage={stage} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PipelineStage({ stage }) {
  return (
    <article className="rounded-lg border border-[#d5e1ec] bg-white p-5 shadow-sm">
      <span className="inline-flex rounded-full bg-[#edf8f5] px-3 py-1 text-xs font-black text-[#0b8a7a]">
        {stage.step}
      </span>
      <div className="mt-5 grid size-11 place-items-center rounded-lg bg-[#e9f3fd] text-[#075db7]">
        <Icon name={stage.icon} />
      </div>
      <h3 className="mt-4 text-lg font-black text-[#052b63]">{stage.title}</h3>
      <p className="mt-2 text-sm leading-6 text-[#526276]">{stage.text}</p>
    </article>
  );
}

function OutcomeSection() {
  return (
    <section className={`bg-white ${sectionPad}`} id="about" aria-labelledby="outcomes-title">
      <div className={pageShell}>
        <SectionHeader id="outcomes-title" title="Why It Matters" subtitle="Designed for better project decisions." />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {outcomes.map((outcome) => (
            <article key={outcome.title} className="rounded-lg border border-[#d5e1ec] bg-[#f8fbfe] p-5">
              <span className="grid size-11 place-items-center rounded-lg bg-white text-[#075db7] shadow-sm">
                <Icon name={outcome.icon} />
              </span>
              <h3 className="mt-4 text-lg font-black text-[#052b63]">{outcome.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#526276]">{outcome.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function DataCredibility() {
  return (
    <section className={`bg-[#f6f9fc] ${compactSectionPad}`} id="data-methods" aria-labelledby="data-title">
      <div className={`${pageShell}`}>
        <div className="grid gap-6 rounded-lg border border-[#d5e1ec] bg-white p-6 shadow-sm lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-[#075db7]/20 bg-[#e9f3fd] px-3 py-1.5 text-xs font-bold uppercase text-[#075db7]">
              Data & Methods
            </p>
            <h2 id="data-title" className="text-3xl font-black text-[#052b63]">
              Built using PAIMANA/OCMS project data
            </h2>
            <p className="mt-3 max-w-3xl text-base leading-7 text-[#526276]">
              Prototype uses publicly available recurring project records with a clear architecture for richer PAIMANA
              integration.
            </p>
          </div>
          <a className={secondaryButton} href="#how-it-works">
            Explore Data & Methods
            <Icon name="arrow" className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="bg-[#052b63] py-14 text-white sm:py-16">
      <div className={`${pageShell} grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center`}>
        <div>
          <h2 className="text-3xl font-black sm:text-4xl">Turn project data into early action.</h2>
          <p className="mt-3 max-w-3xl text-base leading-7 text-white/78">
            Identify emerging infrastructure risks, understand their drivers and prioritise intervention.
          </p>
        </div>
        <a className={inverseButton} href="#command-centre">
          Open Intelligence Command Centre
          <Icon name="arrow" className="size-4" />
        </a>
      </div>
    </section>
  );
}

function LandingFooter() {
  return (
    <footer className="border-t border-[#d5e1ec] bg-white" id="contact">
      <div className={`${pageShell} grid gap-6 py-8 lg:grid-cols-[1fr_auto_1fr] lg:items-center`}>
        <div className="flex items-center gap-3">
          <GovEmblem />
          <div>
            <strong className="text-sm font-black text-[#052b63]">Ministry of Statistics & Programme Implementation</strong>
            <p className="mt-1 text-sm text-[#526276]">Government of India</p>
          </div>
        </div>
        <nav className="flex flex-wrap gap-x-4 gap-y-2 text-sm font-semibold text-[#526276]" aria-label="Footer navigation">
          {navItems.map((item) => (
            <a className="hover:text-[#052b63]" key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="lg:text-right">
          <strong className="text-sm font-black text-[#052b63]">NIRVAAH</strong>
          <p className="mt-1 text-sm text-[#526276]">SIH 2026 Prototype · PS 26103</p>
        </div>
      </div>
    </footer>
  );
}

function SectionHeader({ id, title, subtitle }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <h2 id={id} className="text-3xl font-black leading-tight text-[#052b63] sm:text-4xl">
        {title}
      </h2>
      {subtitle && <p className="mt-3 text-base leading-7 text-[#526276] sm:text-lg">{subtitle}</p>}
    </div>
  );
}

function GovEmblem() {
  return (
    <span className="grid size-9 shrink-0 place-items-center rounded-lg border border-[#d5e1ec] bg-white" aria-hidden="true">
      <span className="h-6 w-4 border-2 border-y-[5px] border-[#1b2736]" />
    </span>
  );
}

function PlatformMark() {
  return (
    <span className="grid size-9 shrink-0 place-items-center rounded-lg border border-[#0b8a7a]/25 bg-[#edf8f5]" aria-hidden="true">
      <span className="size-5 rounded-full border-[5px] border-[#0b8a7a] border-b-[#147b95] border-r-[#075db7]" />
    </span>
  );
}

function Icon({ name, className = "size-5" }) {
  const shared = {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    className,
  };

  const icons = {
    arrow: (
      <svg {...shared}>
        <path d="M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="m13 6 6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    assistant: (
      <svg {...shared}>
        <path
          d="M7 8h10M7 12h6M8 18l-4 3v-4.2A3.8 3.8 0 0 1 2 13.4V7.8A3.8 3.8 0 0 1 5.8 4h12.4A3.8 3.8 0 0 1 22 7.8v5.6a3.8 3.8 0 0 1-3.8 3.8H10.4L8 18Z"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    bars: (
      <svg {...shared}>
        <path d="M5 19V9M12 19V5M19 19v-7" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" />
      </svg>
    ),
    bell: (
      <svg {...shared}>
        <path
          d="M7 10a5 5 0 0 1 10 0v3.4l1.6 2.6H5.4L7 13.4V10Z"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinejoin="round"
        />
        <path d="M10 19a2 2 0 0 0 4 0" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
      </svg>
    ),
    check: (
      <svg {...shared}>
        <path
          d="m5 12 4.2 4.2L19 6.8"
          stroke="currentColor"
          strokeWidth="2.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    clock: (
      <svg {...shared}>
        <circle cx="12" cy="12" r="8.6" stroke="currentColor" strokeWidth="1.9" />
        <path d="M12 7v5l3.4 2" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
      </svg>
    ),
    close: (
      <svg {...shared}>
        <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" />
      </svg>
    ),
    database: (
      <svg {...shared}>
        <ellipse cx="12" cy="6" rx="7" ry="3" stroke="currentColor" strokeWidth="1.9" />
        <path
          d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6"
          stroke="currentColor"
          strokeWidth="1.9"
        />
      </svg>
    ),
    gear: (
      <svg {...shared}>
        <path d="M12 8.2a3.8 3.8 0 1 1 0 7.6 3.8 3.8 0 0 1 0-7.6Z" stroke="currentColor" strokeWidth="1.9" />
        <path
          d="M12 3v2M12 19v2M4.2 7.5l1.7 1M18.1 15.5l1.7 1M4.2 16.5l1.7-1M18.1 8.5l1.7-1M3 12h2M19 12h2"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinecap="round"
        />
      </svg>
    ),
    lightbulb: (
      <svg {...shared}>
        <path
          d="M12 3a7 7 0 0 0-4 12.7V19h8v-3.3A7 7 0 0 0 12 3Z"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinejoin="round"
        />
        <path d="M9 21h6M10 11h4" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
      </svg>
    ),
    menu: (
      <svg {...shared}>
        <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" />
      </svg>
    ),
    play: (
      <svg {...shared}>
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.9" />
        <path d="m10 8 6 4-6 4V8Z" fill="currentColor" />
      </svg>
    ),
    portfolio: (
      <svg {...shared}>
        <path d="M5 20V8h4V4h6v4h4v12H5Z" stroke="currentColor" strokeWidth="1.9" strokeLinejoin="round" />
        <path d="M9 8h6M8 13h8M8 17h8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    ),
    priority: (
      <svg {...shared}>
        <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.9" />
        <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.9" />
        <path d="M12 12h.01M18 6l-6 6" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" />
      </svg>
    ),
    search: (
      <svg {...shared}>
        <circle cx="10.8" cy="10.8" r="6.8" stroke="currentColor" strokeWidth="1.9" />
        <path d="m16 16 4 4" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
      </svg>
    ),
    trend: (
      <svg {...shared}>
        <path d="M4 18h16" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
        <path
          d="m5 15 4.5-4 3 2.5L19 6"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M15 6h4v4" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
      </svg>
    ),
    user: (
      <svg {...shared}>
        <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.9" />
        <path d="M4.5 21a7.5 7.5 0 0 1 15 0" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
      </svg>
    ),
  };

  return icons[name] ?? icons.check;
}

export default App;

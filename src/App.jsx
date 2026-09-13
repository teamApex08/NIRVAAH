import React, { useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Product", href: "#product" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Data & Methods", href: "#data-methods" },
  { label: "About", href: "#about" },
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

function App() {
  return (
    <>
      <a className="skip-link" href="#main">
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
    </>
  );
}

function LandingHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-shell">
        <a className="brand-lockup" href="#home" aria-label="NRIVAAH home">
          <span className="gov-emblem" aria-hidden="true">
            <span />
          </span>
          <span className="ministry-name">
            <strong>
              Ministry of Statistics &<br />
              Programme Implementation
            </strong>
            <small>Government of India</small>
          </span>
          <span className="brand-divider" aria-hidden="true" />
          <span className="platform-mark" aria-hidden="true">
            <i />
          </span>
          <span className="platform-name">
            <strong>NRIVAAH</strong>
            <small>Intelligence Command Centre</small>
          </span>
          <span className="prototype-pill">SIH Prototype</span>
        </a>

        <button
          className="menu-button"
          type="button"
          aria-expanded={isOpen}
          aria-controls="site-navigation"
          aria-label="Toggle navigation"
          onClick={() => setIsOpen((value) => !value)}
        >
          <Icon name={isOpen ? "close" : "menu"} />
        </button>

        <nav className={isOpen ? "site-nav is-open" : "site-nav"} id="site-navigation" aria-label="Primary">
          {navItems.map((item, index) => (
            <a
              key={item.href}
              className={index === 0 ? "is-active" : ""}
              href={item.href}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a className="primary-button header-cta" href="#command-centre">
          Open Command Centre
          <Icon name="arrow" />
        </a>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero-shell page-shell">
        <div className="hero-copy">
          <p className="section-badge">SIH 2026 Prototype · PS 26103</p>
          <h1 id="hero-title">
            NRIVAAH
            <span>Intelligence Command Centre</span>
          </h1>
          <p className="hero-positioning">From project monitoring to predictive intervention.</p>
          <p className="hero-text">
            An intelligent decision-support layer that predicts emerging cost and schedule risks, explains
            their drivers and helps officers prioritise timely intervention.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#command-centre" id="command-centre">
              Open Command Centre
              <Icon name="arrow" />
            </a>
            <a className="secondary-button" href="#product">
              <Icon name="play" />
              Watch 2-min Overview
            </a>
          </div>
        </div>
        <PortfolioSnapshot />
      </div>
    </section>
  );
}

function PortfolioSnapshot() {
  return (
    <aside className="portfolio-card" aria-label="India's Infrastructure Portfolio snapshot">
      <div className="portfolio-head">
        <div>
          <h2>India’s Infrastructure Portfolio</h2>
          <p>As per PAIMANA Flash Report – April 2026</p>
        </div>
        <a href="#data-methods">View Report ↗</a>
      </div>

      <div className="portfolio-group">
        <p className="group-label">Portfolio Scale</p>
        <div className="metric-grid two-up">
          <MetricItem value="1,981" label="Projects" />
          <MetricItem value="17" label="Ministries / Departments" />
        </div>
      </div>

      <div className="portfolio-divider" />

      <div className="portfolio-group">
        <p className="group-label">Financial Scale</p>
        <div className="metric-grid three-up">
          <MetricItem value="₹37.13 Lakh Crore" label="Original Cost" />
          <MetricItem value="₹42.78 Lakh Crore" label="Revised Cost" />
          <MetricItem value="₹20.36 Lakh Crore" label="Expenditure" />
        </div>
      </div>

      <p className="portfolio-statement">
        Enabling timely intervention for a more efficient, accountable and resilient infrastructure ecosystem.
      </p>
      <p className="source-line">
        Source: PAIMANA 466th Flash Report, April 2026 · Ministry of Statistics & Programme Implementation
      </p>
    </aside>
  );
}

function MetricItem({ value, label }) {
  return (
    <div className="metric-card">
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  );
}

function DecisionFlow() {
  return (
    <section className="decision-flow section-pad compact" id="product" aria-labelledby="flow-title">
      <div className="page-shell">
        <SectionHeader
          id="flow-title"
          title="From Data to Decisions"
          subtitle="Turning infrastructure monitoring data into prioritised, explainable action."
        />
        <div className="flow-row" aria-label="Product journey">
          {flowSteps.map((step, index) => (
            <FlowStep key={step.label} step={step} isLast={index === flowSteps.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FlowStep({ step, isLast }) {
  return (
    <article className="flow-step">
      <span className="flow-icon">
        <Icon name={step.icon} />
      </span>
      <h3>{step.label}</h3>
      <p>{step.text}</p>
      {!isLast && (
        <span className="flow-arrow" aria-hidden="true">
          →
        </span>
      )}
    </article>
  );
}

function CapabilitySection() {
  return (
    <section className="capabilities section-pad" aria-labelledby="capabilities-title">
      <div className="page-shell">
        <SectionHeader
          id="capabilities-title"
          title="Decision Intelligence for Infrastructure Monitoring"
          subtitle="Four connected capabilities: predict, prioritise, explain and decide."
        />
        <div className="capability-grid">
          {capabilities.map((card) => (
            <CapabilityCard key={card.title} card={card} />
          ))}
        </div>
        <p className="principle-strip">Evidence-based · Explainable · Transparent · Action-oriented</p>
      </div>
    </section>
  );
}

function CapabilityCard({ card }) {
  return (
    <article className="capability-card">
      <span className="card-icon">
        <Icon name={card.icon} />
      </span>
      <p className="capability-eyebrow">{card.eyebrow}</p>
      <h3>{card.title}</h3>
      <p>{card.text}</p>
    </article>
  );
}

function CommandCentrePreview() {
  const rows = [
    ["Eastern Freight Corridor", "Railways", "Critical", "Review"],
    ["River Basin Project", "Jal Shakti", "High", "Review"],
    ["Metro Rail Phase II", "Urban Affairs", "High", "Investigate"],
  ];

  return (
    <section className="product-preview section-pad" id="command-preview" aria-labelledby="preview-title">
      <div className="page-shell">
        <SectionHeader
          id="preview-title"
          title="One Command Centre. Portfolio-to-Project Intelligence."
          subtitle="Move from national portfolio visibility to project-level risk, drivers and intervention priorities."
        />
        <div className="preview-shell">
          <div className="preview-dashboard" aria-label="NRIVAAH Command Centre preview">
            <div className="preview-sidebar">
              <strong>NRIVAAH</strong>
              <span>Command Centre</span>
              <p>Overview</p>
              <p>Projects</p>
              <p>Risk Intelligence</p>
              <p>Early Warnings</p>
            </div>
            <div className="preview-main">
              <div className="preview-topbar">
                <div>
                  <h3>Portfolio Risk Overview</h3>
                  <p>Reporting Month · April 2026</p>
                </div>
                <span>42 analysed projects</span>
              </div>
              <div className="preview-kpis">
                <PreviewKpi label="High Risk Projects" value="312" tone="red" />
                <PreviewKpi label="Cost Exposure" value="₹5.65L Cr" tone="green" />
                <PreviewKpi label="Delay Exposure" value="18.4 mo" tone="orange" />
                <PreviewKpi label="Intervention Due" value="74" tone="blue" />
              </div>
              <div className="preview-content">
                <div className="risk-map">
                  <h4>Risk Distribution</h4>
                  <div className="donut" aria-hidden="true" />
                  <p>Critical 16.7% · High 28.6% · Moderate 35.7%</p>
                </div>
                <div className="priority-table">
                  <h4>Priority Projects</h4>
                  {rows.map((row) => (
                    <div className="preview-row" key={row[0]}>
                      <span>{row[0]}</span>
                      <span>{row[1]}</span>
                      <strong>{row[2]}</strong>
                      <em>{row[3]}</em>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="preview-callouts">
            <PreviewCallout title="Portfolio Risk" text="See risk distribution across the monitored portfolio." />
            <PreviewCallout title="Priority Projects" text="Surface projects requiring immediate review." />
            <PreviewCallout title="Emerging Warnings" text="Identify changes before they become major deviations." />
          </div>
        </div>
        <div className="section-action">
          <a className="primary-button" href="#command-centre">
            Explore Command Centre
            <Icon name="arrow" />
          </a>
        </div>
      </div>
    </section>
  );
}

function PreviewKpi({ label, value, tone }) {
  return (
    <div className={`preview-kpi ${tone}`}>
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  );
}

function PreviewCallout({ title, text }) {
  return (
    <article className="preview-callout">
      <Icon name="check" />
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </article>
  );
}

function HowItWorksSection() {
  return (
    <section className="how-it-works section-pad" id="how-it-works" aria-labelledby="workflow-title">
      <div className="page-shell">
        <SectionHeader
          id="workflow-title"
          title="How Intelligence Is Generated"
          subtitle="From PAIMANA/OCMS project records to explainable decision support."
        />
        <div className="pipeline-row">
          {pipeline.map((step, index) => (
            <PipelineStage key={step.title} stage={step} isLast={index === pipeline.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PipelineStage({ stage, isLast }) {
  return (
    <article className="pipeline-stage">
      <span className="stage-label">{stage.step}</span>
      <Icon name={stage.icon} />
      <h3>{stage.title}</h3>
      <p>{stage.text}</p>
      {!isLast && (
        <span className="stage-arrow" aria-hidden="true">
          →
        </span>
      )}
    </article>
  );
}

function OutcomeSection() {
  return (
    <section className="outcomes section-pad" id="about" aria-labelledby="outcomes-title">
      <div className="page-shell">
        <SectionHeader id="outcomes-title" title="Why It Matters" subtitle="Designed for better project decisions." />
        <div className="outcome-grid">
          {outcomes.map((outcome) => (
            <article className="outcome-item" key={outcome.title}>
              <Icon name={outcome.icon} />
              <h3>{outcome.title}</h3>
              <p>{outcome.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function DataCredibility() {
  return (
    <section className="data-credibility section-pad compact" id="data-methods" aria-labelledby="data-title">
      <div className="page-shell data-strip">
        <div>
          <p className="section-badge">Data & Methods</p>
          <h2 id="data-title">Built using PAIMANA/OCMS project data</h2>
          <p>
            Prototype uses publicly available recurring project records with a clear architecture for richer
            PAIMANA integration.
          </p>
        </div>
        <a className="secondary-button" href="#how-it-works">
          Explore Data & Methods
          <Icon name="arrow" />
        </a>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="final-cta section-pad">
      <div className="page-shell final-cta-shell">
        <div>
          <h2>Turn project data into early action.</h2>
          <p>Identify emerging infrastructure risks, understand their drivers and prioritise intervention.</p>
        </div>
        <a className="inverse-button" href="#command-centre">
          Open Intelligence Command Centre
          <Icon name="arrow" />
        </a>
      </div>
    </section>
  );
}

function LandingFooter() {
  return (
    <footer className="site-footer" id="contact">
      <div className="page-shell footer-shell">
        <div className="footer-ministry">
          <span className="gov-emblem footer-emblem" aria-hidden="true">
            <span />
          </span>
          <div>
            <strong>Ministry of Statistics & Programme Implementation</strong>
            <p>Government of India</p>
          </div>
        </div>
        <nav aria-label="Footer navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="footer-context">
          <strong>NRIVAAH</strong>
          <p>SIH 2026 Prototype · PS 26103</p>
        </div>
      </div>
    </footer>
  );
}

function SectionHeader({ id, title, subtitle }) {
  return (
    <div className="section-header">
      <h2 id={id}>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}

function Icon({ name }) {
  const shared = {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
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
        <path d="M7 8h10M7 12h6M8 18l-4 3v-4.2A3.8 3.8 0 0 1 2 13.4V7.8A3.8 3.8 0 0 1 5.8 4h12.4A3.8 3.8 0 0 1 22 7.8v5.6a3.8 3.8 0 0 1-3.8 3.8H10.4L8 18Z" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    bars: (
      <svg {...shared}>
        <path d="M5 19V9M12 19V5M19 19v-7" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" />
      </svg>
    ),
    check: (
      <svg {...shared}>
        <path d="m5 12 4.2 4.2L19 6.8" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" />
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
        <path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" stroke="currentColor" strokeWidth="1.9" />
      </svg>
    ),
    gear: (
      <svg {...shared}>
        <path d="M12 8.2a3.8 3.8 0 1 1 0 7.6 3.8 3.8 0 0 1 0-7.6Z" stroke="currentColor" strokeWidth="1.9" />
        <path d="M12 3v2M12 19v2M4.2 7.5l1.7 1M18.1 15.5l1.7 1M4.2 16.5l1.7-1M18.1 8.5l1.7-1M3 12h2M19 12h2" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
      </svg>
    ),
    lightbulb: (
      <svg {...shared}>
        <path d="M12 3a7 7 0 0 0-4 12.7V19h8v-3.3A7 7 0 0 0 12 3Z" stroke="currentColor" strokeWidth="1.9" strokeLinejoin="round" />
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
        <path d="m5 15 4.5-4 3 2.5L19 6" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
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

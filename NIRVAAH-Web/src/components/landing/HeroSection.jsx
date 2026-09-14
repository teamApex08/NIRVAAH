import { LandingIcon } from "./LandingIcon.jsx";
import { portfolioStats, previewKpis } from "./landingData.js";
import { pageShell, primaryButton, secondaryButton } from "./landingStyles.js";


export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-[#d5e1ec]" id="home" aria-labelledby="hero-title">
      
      <div className={`${pageShell} relative z-10 py-[72px] sm:py-24 lg:py-28`}>
        <div className="max-w-4xl">
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
            <a className={primaryButton} href="/command-centre" id="command-centre">
              Open Command Centre
              <LandingIcon name="arrow" className="size-4" />
            </a>
            <a className={secondaryButton} href="#product">
              <LandingIcon name="play" className="size-4" />
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

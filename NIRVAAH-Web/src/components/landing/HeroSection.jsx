import { LandingIcon } from "./LandingIcon.jsx";
import { portfolioStats, previewKpis } from "./landingData.js";
import { pageShell, primaryButton, secondaryButton } from "./landingStyles.js";
import { nirvaahEmblemSrc, nirvaahHeroImageSrc } from "../shared/brandAssets.js";


export function HeroSection() {
  return (
    <section
      className="relative overflow-hidden border-b border-[#c9d6e2] bg-[#f3f6f8]"
      id="home"
      aria-labelledby="hero-title"
    >
      {/* The blurred infrastructure image adds national context without competing with the headline. */}
      <img
        className="pointer-events-none absolute inset-0 h-full w-full scale-[1.03] object-cover object-center opacity-70 saturate-[0.92]"
        src={nirvaahHeroImageSrc}
        alt=""
        aria-hidden="true"
      />
      <span
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.97)_0%,rgba(255,255,255,0.9)_45%,rgba(255,248,237,0.52)_100%)]"
        aria-hidden="true"
      />
      <span
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(243,246,248,0.16)_0%,rgba(243,246,248,0.66)_100%)]"
        aria-hidden="true"
      />
      <span className="absolute inset-x-0 top-0 grid grid-cols-3" aria-hidden="true">
        <span className="h-1 bg-[#ff9933]" />
        <span className="h-1 bg-white" />
        <span className="h-1 bg-[#138808]" />
      </span>
      <div className={`${pageShell} relative z-10 py-[72px] sm:py-24 lg:py-28`}>
        <div className="max-w-4xl">
          <img className="mb-5 size-16 object-contain" src={nirvaahEmblemSrc} alt="" aria-hidden="true" />
          <h1 id="hero-title" className="text-5xl font-black leading-[0.96] text-[#0b2545] sm:text-6xl lg:text-7xl">
            NIRVAAH
            <span className="mt-3 block max-w-3xl text-3xl font-extrabold leading-tight text-[#10233d] sm:text-4xl lg:text-5xl">
              Intelligence Command Centre
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-xl font-semibold text-[#0b2545]">
            From project monitoring to predictive intervention.
          </p>
          <p className="mt-4 max-w-3xl text-base leading-8 text-[#526276] sm:text-lg">
            An intelligent decision-support layer that predicts emerging cost and schedule risks, explains their
            drivers and helps officers prioritise timely intervention.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a className={primaryButton} href="/nirvaah/command-centre" id="command-centre">
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
      className="mt-12 overflow-hidden rounded-md border border-[#c9d6e2] bg-white/92 shadow-[0_16px_38px_rgba(5,43,99,0.10)] backdrop-blur"
      aria-label="India's Infrastructure Portfolio snapshot"
    >
      <span className="grid grid-cols-[1fr_1fr_1fr]" aria-hidden="true">
        <span className="h-1 bg-[#d97706]" />
        <span className="h-1 bg-[#0b2545]" />
        <span className="h-1 bg-[#15803d]" />
      </span>
      <div className="flex flex-col gap-3 border-b border-[#dbe4ec] p-5 pb-4 md:flex-row md:items-start md:justify-between">
        <div>
          <h2 className="text-xl font-black text-[#0b2545]">India's Infrastructure Portfolio</h2>
          <p className="mt-1 text-sm text-[#526276]">As per PAIMANA Flash Report - April 2026</p>
        </div>
        <a className="text-sm font-bold text-[#0b2545] hover:text-[#0b2545]" href="#data-methods">
          View Report
        </a>
      </div>
      <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {portfolioStats.map((metric, index) => (
          <MetricItem key={metric.label} value={metric.value} label={metric.label} index={index} />
        ))}
      </div>
      <p className="mt-5 max-w-4xl px-5 text-sm leading-6 text-[#526276]">
        Enabling timely intervention for a more efficient, accountable and resilient infrastructure ecosystem.
      </p>
      <p className="mt-2 px-5 pb-5 text-xs text-[#748397]">
        Source: PAIMANA 466th Flash Report, April 2026 · Ministry of Statistics & Programme Implementation
      </p>
    </aside>
  );
}


function MetricItem({ value, label, index }) {
  const accentClasses = ["border-[#0b2545] bg-[#f2f5f8]", "border-[#15803d] bg-[#ecfdf3]", "border-[#d97706] bg-[#fff7ed]", "border-[#475569] bg-[#f1f5f9]"];

  return (
    <div className={`border-l-4 px-4 py-3 ${accentClasses[index % accentClasses.length]}`}>
      <strong className="block text-2xl font-black text-[#0b2545]">{value}</strong>
      <span className="mt-1 block text-sm font-semibold text-[#526276]">{label}</span>
    </div>
  );
}

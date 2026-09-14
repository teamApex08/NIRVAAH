import React from "react";
import { LandingIcon } from "./LandingIcon.jsx";
import { portfolioStats, previewKpis } from "./landingData.js";
import { pageShell, primaryButton, secondaryButton } from "./landingStyles.js";

/**
 * First viewport section that introduces the product and primary action.
 */
export function HeroSection() {
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

/**
 * Decorative dashboard preview behind the hero on large screens.
 *
 * It is hidden on smaller screens so the hero remains readable and uncluttered.
 */
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
              {/* CSS conic-gradient creates the donut chart without extra charting libraries. */}
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

/**
 * Hero-side portfolio facts.
 *
 * This block gives the user immediate scale/context before the page explains
 * the product workflow.
 */
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

/**
 * Small metric tile used by PortfolioSnapshot.
 */
function MetricItem({ value, label }) {
  return (
    <div className="border-l-4 border-[#0b8a7a] bg-[#f8fbfe] px-4 py-3">
      <strong className="block text-2xl font-black text-[#052b63]">{value}</strong>
      <span className="mt-1 block text-sm font-semibold text-[#526276]">{label}</span>
    </div>
  );
}

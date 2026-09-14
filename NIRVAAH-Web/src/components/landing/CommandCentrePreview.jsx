import React from "react";
import { LandingIcon } from "./LandingIcon.jsx";
import { SectionHeader } from "./SectionHeader.jsx";
import { kpiToneStyles, previewKpis, previewRows } from "./landingData.js";
import { pageShell, primaryButton, sectionPad } from "./landingStyles.js";

/**
 * Landing-page preview of the Command Centre.
 *
 * The real Command Centre is a separate route; this section gives visitors a
 * visual taste of it before they click through.
 */
export function CommandCentrePreview() {
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
          <a className={primaryButton} href="/command-centre">
            Explore Command Centre
            <LandingIcon name="arrow" className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

/**
 * Static dashboard mockup built in HTML/Tailwind.
 *
 * It is intentionally not interactive on the landing page; the goal is to show
 * what the product experience feels like without adding dashboard logic here.
 */
function PreviewDashboard() {
  return (
    <div className="overflow-hidden rounded-lg border border-[#d5e1ec] bg-white shadow-[0_18px_45px_rgba(5,43,99,0.12)]">
      <div className="grid lg:grid-cols-[220px_1fr]">
        <aside className="bg-[#052b63] p-5 text-white">
          <strong className="block text-xl font-black">NIRVAAH</strong>
          <span className="mt-1 block text-sm text-white/70">Command Centre</span>
          <div className="mt-8 grid gap-2 text-sm font-semibold text-white/[0.78]">
            {["Overview", "Projects", "Risk Intelligence", "Early Warnings"].map((item, index) => (
              <p key={item} className={`rounded-md px-3 py-2 ${index === 0 ? "bg-white/[0.12] text-white" : ""}`}>
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
              {/* Same CSS-only donut idea as the hero backdrop, kept simple for the preview. */}
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

/**
 * KPI card inside the dashboard preview.
 */
function PreviewKpi({ label, value, tone }) {
  const styles = kpiToneStyles[tone] ?? kpiToneStyles.blue;

  return (
    <div className={`rounded-lg border p-4 ${styles.box}`}>
      <span className={`mb-3 grid size-9 place-items-center rounded-md ${styles.icon}`}>
        <LandingIcon name={tone === "red" ? "priority" : tone === "green" ? "bars" : tone === "orange" ? "clock" : "bell"} />
      </span>
      <strong className={`block text-2xl font-black ${styles.value}`}>{value}</strong>
      <span className="mt-1 block text-xs font-bold text-[#526276]">{label}</span>
    </div>
  );
}

/**
 * Side callout explaining one benefit of the Command Centre preview.
 */
function PreviewCallout({ title, text }) {
  return (
    <article className="flex gap-3 rounded-lg border border-[#d5e1ec] bg-[#f8fbfe] p-5">
      <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-[#edf8f5] text-[#0b8a7a]">
        <LandingIcon name="check" />
      </span>
      <div>
        <h3 className="text-lg font-black text-[#052b63]">{title}</h3>
        <p className="mt-1 text-sm leading-6 text-[#526276]">{text}</p>
      </div>
    </article>
  );
}

/**
 * Displays reference screenshots from the PAIMANA workflow.
 *
 * These images help evaluators connect the prototype UI to the source systems
 * it is meant to improve.
 */
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

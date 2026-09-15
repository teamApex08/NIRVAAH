import React from "react";
import { cx } from "../../lib/formatters.js";

// Page headers are intentionally compact for work surfaces.
const toneStyles = {
  navy: {
    border: "border-l-[#0b2545]",
    label: "border-[#0b2545]/15 bg-[#f2f5f8] text-[#0b2545]",
  },
  green: {
    border: "border-l-[#15803d]",
    label: "border-[#15803d]/20 bg-[#ecfdf3] text-[#166534]",
  },
  saffron: {
    border: "border-l-[#d97706]",
    label: "border-[#d97706]/22 bg-[#fff7ed] text-[#b45309]",
  },
  red: {
    border: "border-l-[#b91c1c]",
    label: "border-[#b91c1c]/18 bg-[#fef2f2] text-[#b91c1c]",
  },
  slate: {
    border: "border-l-[#475569]",
    label: "border-[#475569]/18 bg-[#f1f5f9] text-[#334155]",
  },
};

/**
 * Shared page introduction surface for dashboard modules.
 *
 * `children` is reserved for page-specific actions or source notes so each
 * route can feel distinct while keeping a consistent header structure.
 */
export function PageHero({ eyebrow, title, titleId, description, tone = "navy", children }) {
  const styles = toneStyles[tone] ?? toneStyles.navy;

  return (
    <section className={cx("min-w-0 border-l-4 bg-white px-4 py-4 shadow-[0_1px_2px_rgba(15,23,42,0.04)] ring-1 ring-[#c9d6e2] sm:px-5", styles.border)}>
      <div className="grid min-w-0 gap-4 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
        <div className="min-w-0">
          <p className={cx("inline-flex rounded-full border px-3 py-1 text-[11px] font-black uppercase leading-none", styles.label)}>
            {eyebrow}
          </p>
          <h1 className="mt-3 text-2xl font-black leading-tight text-[#0b2545] sm:text-3xl" id={titleId}>
            {title}
          </h1>
          <p className="mt-2 max-w-4xl text-sm font-semibold leading-6 text-[#526276] sm:text-[0.95rem]">{description}</p>
        </div>
        {children && <div className="grid min-w-0 gap-3 lg:justify-items-end">{children}</div>}
      </div>
    </section>
  );
}

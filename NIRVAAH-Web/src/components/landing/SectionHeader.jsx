import React from "react";

/**
 * Shared centered section heading used across landing sections.
 */
export function SectionHeader({ id, title, subtitle }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <h2 id={id} className="text-3xl font-black leading-tight text-[#052b63] sm:text-4xl">
        {title}
      </h2>
      {subtitle && <p className="mt-3 text-base leading-7 text-[#526276] sm:text-lg">{subtitle}</p>}
    </div>
  );
}

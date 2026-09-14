import React from "react";
import { cx } from "../../lib/formatters.js";

/**
 * Reusable width wrapper for public page sections.
 *
 * It centers content, applies consistent responsive side padding, and lets each
 * section add extra classes through className when needed.
 */
export function PageShell({ className, children }) {
  return <div className={cx("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-12", className)}>{children}</div>;
}

import React from "react";
import { cx } from "../../lib/formatters.js";

/**
 * Shared panel/card surface.
 *
 * The `as` prop lets the same visual style render as section, article, aside,
 * or any other semantic HTML element required by the page.
 */
export function Card({ as: Component = "section", className, children, ...props }) {
  return (
    <Component className={cx("min-w-0 rounded-lg border border-[#d5e1ec] bg-white shadow-sm", className)} {...props}>
      {children}
    </Component>
  );
}

// CardHeader and CardBody keep card spacing consistent across dashboard panels.
export function CardHeader({ className, children }) {
  return <header className={cx("border-b border-[#e4edf6] px-4 py-4", className)}>{children}</header>;
}

export function CardBody({ className, children }) {
  return <div className={cx("p-4", className)}>{children}</div>;
}

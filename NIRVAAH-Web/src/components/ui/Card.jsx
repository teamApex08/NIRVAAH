import React from "react";
import { cx } from "../../lib/formatters.js";

export function Card({ as: Component = "section", className, children, ...props }) {
  return (
    <Component className={cx("rounded-lg border border-[#d5e1ec] bg-white shadow-sm", className)} {...props}>
      {children}
    </Component>
  );
}

export function CardHeader({ className, children }) {
  return <header className={cx("border-b border-[#e4edf6] px-4 py-4", className)}>{children}</header>;
}

export function CardBody({ className, children }) {
  return <div className={cx("p-4", className)}>{children}</div>;
}

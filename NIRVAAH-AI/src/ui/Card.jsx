import React from "react";
import { cx } from "../utils/cx.js";

export function Card({ as: Component = "section", className, children, ...props }) {
  return (
    <Component
      className={cx("min-w-0 overflow-hidden rounded-[8px] border border-[#c9d6e2] bg-white shadow-[0_1px_2px_rgba(15,23,42,0.04)]", className)}
      {...props}
    >
      {children}
    </Component>
  );
}

export function CardHeader({ className, children }) {
  return <header className={cx("border-b border-[#dbe4ec] bg-[#fbfcfd] px-4 py-4", className)}>{children}</header>;
}

export function CardBody({ className, children }) {
  return <div className={cx("p-4", className)}>{children}</div>;
}

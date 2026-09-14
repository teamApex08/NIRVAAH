import React from "react";
import { cx } from "../../lib/formatters.js";

const variants = {
  primary:
    "border-[#052b63] bg-[#052b63] text-white shadow-[0_12px_26px_rgba(5,43,99,0.16)] hover:bg-[#031d43]",
  secondary: "border-[#b8c9da] bg-white text-[#052b63] hover:border-[#075db7] hover:bg-[#eef5fb]",
  ghost: "border-transparent bg-transparent text-[#052b63] hover:bg-[#eef5fb]",
  inverse: "border-white bg-white text-[#052b63] shadow-[0_12px_26px_rgba(0,0,0,0.18)] hover:bg-[#e9f3fd]",
};

export function Button({ as: Component = "button", className, variant = "primary", children, ...props }) {
  return (
    <Component
      className={cx(
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-md border px-4 py-2.5 text-sm font-bold leading-none transition hover:-translate-y-0.5 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#075db7]/25",
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

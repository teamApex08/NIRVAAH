import React from "react";
import { cx } from "../utils/cx.js";

const variants = {
  primary:
    "border-[#0b2545] bg-[#0b2545] text-white shadow-[0_1px_2px_rgba(15,23,42,0.12)] hover:bg-[#071a33]",
  secondary: "border-[#aab8c6] bg-white text-[#0b2545] hover:border-[#d97706] hover:bg-[#fff8ed]",
  ghost: "border-transparent bg-transparent text-[#0b2545] hover:border-[#c9d6e2] hover:bg-[#f8fafc]",
  quiet: "border-transparent bg-[#f7fafc] text-[#0b2545] hover:border-[#c9d6e2] hover:bg-white",
  inverse: "border-white bg-white text-[#0b2545] shadow-[0_1px_2px_rgba(0,0,0,0.12)] hover:bg-[#f3f6f8]",
  success: "border-[#15803d] bg-[#15803d] text-white hover:bg-[#11632f]",
  warning: "border-[#d97706] bg-[#d97706] text-white hover:bg-[#b45309]",
  danger: "border-[#b91c1c] bg-[#b91c1c] text-white hover:bg-[#991b1b]",
};

export function Button({ as: Component = "button", className, variant = "primary", children, ...props }) {
  return (
    <Component
      className={cx(
        "inline-flex min-h-10 items-center justify-center gap-2 rounded-[6px] border px-3.5 py-2 text-sm font-bold leading-none transition disabled:pointer-events-none disabled:opacity-50 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#d97706]/25",
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

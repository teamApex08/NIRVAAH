import React from "react";

/**
 * Local SVG icon helper for the landing page.
 *
 * Dashboard screens use lucide-react. This helper keeps the landing page's
 * original lightweight custom icons in one searchable place.
 */
export function LandingIcon({ name, className = "size-5" }) {
  const shared = {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    className,
  };

  const icons = {
    arrow: (
      <svg {...shared}>
        <path d="M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="m13 6 6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    assistant: (
      <svg {...shared}>
        <path
          d="M7 8h10M7 12h6M8 18l-4 3v-4.2A3.8 3.8 0 0 1 2 13.4V7.8A3.8 3.8 0 0 1 5.8 4h12.4A3.8 3.8 0 0 1 22 7.8v5.6a3.8 3.8 0 0 1-3.8 3.8H10.4L8 18Z"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    bars: (
      <svg {...shared}>
        <path d="M5 19V9M12 19V5M19 19v-7" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" />
      </svg>
    ),
    bell: (
      <svg {...shared}>
        <path
          d="M7 10a5 5 0 0 1 10 0v3.4l1.6 2.6H5.4L7 13.4V10Z"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinejoin="round"
        />
        <path d="M10 19a2 2 0 0 0 4 0" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
      </svg>
    ),
    check: (
      <svg {...shared}>
        <path
          d="m5 12 4.2 4.2L19 6.8"
          stroke="currentColor"
          strokeWidth="2.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    clock: (
      <svg {...shared}>
        <circle cx="12" cy="12" r="8.6" stroke="currentColor" strokeWidth="1.9" />
        <path d="M12 7v5l3.4 2" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
      </svg>
    ),
    close: (
      <svg {...shared}>
        <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" />
      </svg>
    ),
    database: (
      <svg {...shared}>
        <ellipse cx="12" cy="6" rx="7" ry="3" stroke="currentColor" strokeWidth="1.9" />
        <path
          d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6"
          stroke="currentColor"
          strokeWidth="1.9"
        />
      </svg>
    ),
    gear: (
      <svg {...shared}>
        <path d="M12 8.2a3.8 3.8 0 1 1 0 7.6 3.8 3.8 0 0 1 0-7.6Z" stroke="currentColor" strokeWidth="1.9" />
        <path
          d="M12 3v2M12 19v2M4.2 7.5l1.7 1M18.1 15.5l1.7 1M4.2 16.5l1.7-1M18.1 8.5l1.7-1M3 12h2M19 12h2"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinecap="round"
        />
      </svg>
    ),
    lightbulb: (
      <svg {...shared}>
        <path
          d="M12 3a7 7 0 0 0-4 12.7V19h8v-3.3A7 7 0 0 0 12 3Z"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinejoin="round"
        />
        <path d="M9 21h6M10 11h4" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
      </svg>
    ),
    menu: (
      <svg {...shared}>
        <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" />
      </svg>
    ),
    play: (
      <svg {...shared}>
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.9" />
        <path d="m10 8 6 4-6 4V8Z" fill="currentColor" />
      </svg>
    ),
    portfolio: (
      <svg {...shared}>
        <path d="M5 20V8h4V4h6v4h4v12H5Z" stroke="currentColor" strokeWidth="1.9" strokeLinejoin="round" />
        <path d="M9 8h6M8 13h8M8 17h8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    ),
    priority: (
      <svg {...shared}>
        <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.9" />
        <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.9" />
        <path d="M12 12h.01M18 6l-6 6" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" />
      </svg>
    ),
    search: (
      <svg {...shared}>
        <circle cx="10.8" cy="10.8" r="6.8" stroke="currentColor" strokeWidth="1.9" />
        <path d="m16 16 4 4" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
      </svg>
    ),
    trend: (
      <svg {...shared}>
        <path d="M4 18h16" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
        <path
          d="m5 15 4.5-4 3 2.5L19 6"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M15 6h4v4" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
      </svg>
    ),
    user: (
      <svg {...shared}>
        <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.9" />
        <path d="M4.5 21a7.5 7.5 0 0 1 15 0" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
      </svg>
    ),
  };

  return icons[name] ?? icons.check;
}

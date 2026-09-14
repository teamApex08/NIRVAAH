// Vite exposes frontend environment variables through import.meta.env.
const env = import.meta.env;

// One source of truth for values used across the frontend. Keeping these here
// avoids hardcoding app-wide settings in many components.
export const config = {
  apiUrl: env.VITE_API_URL || "http://localhost:8000",
  appName: "NIRVAAH",
  reportingMonth: "July 2026",
};

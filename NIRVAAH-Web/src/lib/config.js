const env = import.meta.env;

export const config = {
  apiUrl: env.VITE_API_URL || "http://localhost:8000",
  appName: "NIRVAAH",
  reportingMonth: "July 2026",
};

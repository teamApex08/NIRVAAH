import { config } from "../config.js";

/**
 * Shared fetch wrapper for backend calls.
 *
 * Pages should use this helper instead of calling fetch directly so the API
 * base URL, JSON headers, and error handling stay consistent in one place.
 */
export async function apiRequest(path, options = {}) {
  const response = await fetch(`${config.apiUrl}${path}`, {
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    ...options,
  });

  if (!response.ok) {
    throw new Error(`API request failed: ${response.status}`);
  }

  // The backend is expected to return JSON for application API responses.
  return response.json();
}

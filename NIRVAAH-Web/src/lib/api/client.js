import { config } from "../config.js";

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

  return response.json();
}

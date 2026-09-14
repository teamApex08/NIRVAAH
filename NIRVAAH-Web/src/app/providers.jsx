import React from "react";

/**
 * Central place for app-wide React providers.
 *
 * Today there are no global providers, so the component simply returns
 * children. Later, auth, query caching, notifications, or theme providers can
 * be added here without changing every page.
 */
export function AppProviders({ children }) {
  return children;
}

import React, { useEffect } from "react";
import { AppLayout } from "../components/layout/AppLayout.jsx";
import { useCurrentRoute } from "../hooks/useCurrentRoute.js";
import { AppProviders } from "./providers.jsx";
import { resolveRoute } from "./routes.jsx";

/**
 * Root application shell.
 *
 * It reads the current browser path, resolves the matching page component, and
 * wraps that page with global providers and the outer layout.
 */
function App() {
  const path = useCurrentRoute();
  const route = resolveRoute(path);

  // Keep the browser tab title aligned with the active route.
  useEffect(() => {
    document.title = route.title;
  }, [route.title]);

  return (
    <AppProviders>
      <AppLayout>{route.element}</AppLayout>
    </AppProviders>
  );
}

export default App;

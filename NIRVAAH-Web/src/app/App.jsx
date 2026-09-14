import React, { useEffect } from "react";
import { AppLayout } from "../components/layout/AppLayout.jsx";
import { useCurrentRoute } from "../hooks/useCurrentRoute.js";
import { AppProviders } from "./providers.jsx";
import { resolveRoute } from "./routes.jsx";

function App() {
  const path = useCurrentRoute();
  const route = resolveRoute(path);

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

import React from "react";
import BenchmarkingPage from "../pages/BenchmarkingPage.jsx";
import CommandCentrePage from "../pages/CommandCentrePage.jsx";
import EarlyWarningsPage from "../pages/EarlyWarningsPage.jsx";
import LandingPage from "../pages/LandingPage.jsx";
import ProjectsPage from "../pages/ProjectsPage.jsx";

// Small route registry for the Vite prototype. Each route owns its URL path,
// browser title, and page component in one easy-to-scan place.
export const routes = [
  {
    path: "/",
    title: "NIRVAAH Intelligence Command Centre",
    element: <LandingPage />,
  },
  {
    path: "/command-centre",
    title: "NIRVAAH Command Centre",
    element: <CommandCentrePage />,
  },
  {
    path: "/projects",
    title: "NIRVAAH Projects",
    element: <ProjectsPage />,
  },
  {
    path: "/early-warnings",
    title: "NIRVAAH Early Warnings",
    element: <EarlyWarningsPage />,
  },
  {
    path: "/benchmarking",
    title: "NIRVAAH Benchmarking",
    element: <BenchmarkingPage />,
  },
];

/**
 * Finds the route for a pathname.
 *
 * Unknown paths currently fall back to the landing page so demo links never
 * crash the app while more pages are still being built.
 */
export function resolveRoute(pathname) {
  return routes.find((route) => route.path === pathname) ?? routes[0];
}

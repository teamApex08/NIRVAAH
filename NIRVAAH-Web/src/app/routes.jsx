import React from "react";
import CommandCentrePage from "../modules/command-centre/pages/CommandCentrePage.jsx";
import LandingPage from "../modules/landing/pages/LandingPage.jsx";
import ProjectsPage from "../modules/projects/pages/ProjectsPage.jsx";

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
];

export function resolveRoute(pathname) {
  return routes.find((route) => route.path === pathname) ?? routes[0];
}

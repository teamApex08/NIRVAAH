# Frontend Architecture

NIRVAAH-Web follows a BrowzeSpace-inspired frontend structure while staying on
React 19, Vite, and Tailwind CSS.

```text
src/
  app/                  App shell, route registry, provider stack
  pages/                Route-level page files
    LandingPage.jsx
    CommandCentrePage.jsx
    ProjectsPage.jsx
  components/           Shared components and page-specific component folders
    landing/            Landing page components and landingData.js
    command-centre/     Command Centre components and commandCentreData.js
    projects/           Projects page components and projectsData.js
    ui/                 Reusable UI primitives
    layout/             Reusable page/dashboard layouts
    navigation/         Reusable navigation components and navigation data
    shared/             Cross-page brand/presentation components
  content/              Frontend-owned page copy and long-form content
  hooks/                Reusable React hooks
  lib/                  Runtime config, API client, utilities
```

## Rules

- Keep route page files directly in `src/pages`.
- Keep pages thin and compose them from page-specific or shared components.
- Keep page-specific components in `src/components/<page-name>/`.
- Keep dummy/static page data in that page component folder, for example
  `src/components/command-centre/commandCentreData.js`.
- Put reusable UI primitives in `src/components/ui`.
- Put reusable layout/navigation in `src/components/layout` and
  `src/components/navigation`.
- Keep backend integration behind `src/lib/api`.
- Keep every page responsive and non-cluttered.

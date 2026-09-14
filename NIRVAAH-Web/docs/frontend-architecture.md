# Frontend Architecture

NIRVAAH-Web follows a BrowzeSpace-inspired frontend structure while staying on
React 19, Vite, and Tailwind CSS.

```text
src/
  app/                  App shell, route registry, provider stack
  components/           Reusable UI, layout, navigation, and shared components
  content/              Frontend-owned page copy and long-form content
  hooks/                Reusable React hooks
  lib/                  Runtime config, API client, utilities
  modules/              Feature modules and pages
    landing/            Public product landing page
    command-centre/     Command Centre dashboard module
    projects/           Project workspace module
```

## Rules

- Keep pages thin and compose them from module or shared components.
- Keep static page data in module `data/` folders until it is API-backed.
- Put reusable UI primitives in `src/components/ui`.
- Put reusable layout/navigation in `src/components/layout` and
  `src/components/navigation`.
- Keep backend integration behind `src/lib/api`.
- Keep every page responsive and non-cluttered.

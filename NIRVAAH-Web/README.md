# NIRVAAH Web

Frontend workspace for the NIRVAAH product. It currently contains the React +
Vite landing page, frontend assets, and client-facing UI documentation.

Use `client-data/` for safe-to-ship frontend fixtures, static configuration, or
sample data used by the UI.

The landing page is built with Tailwind utility classes in the React components.
Tailwind CSS is configured through `@tailwindcss/vite`.

## Frontend Rules

All NIRVAAH pages should follow `docs/frontend-guidelines.md`.
Source code should include beginner-friendly comments that explain module
ownership, component purpose, props, data shape, routing, and non-obvious layout
decisions.

## Architecture

The frontend now uses a page-first structure: route files live directly in
`src/pages`, page-specific components and dummy data live in matching folders
inside `src/components`, and shared app utilities remain in `src/app`,
`src/hooks`, and `src/lib`.

See `docs/frontend-architecture.md`.

## Commands

```bash
npm install
npm run dev
npm run build
```

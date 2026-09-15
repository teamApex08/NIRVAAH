# Frontend Guidelines

Use these rules for every NIRVAAH page we design or implement.

1. Use React 19.
2. Build with reusable components.
3. Make every page responsive across mobile, tablet, and desktop.
4. Keep the UI/UX user friendly.
5. Keep the UI/UX clean and non-cluttered.
6. Add beginner-friendly comments wherever they explain ownership, intent,
   props, data shape, routing, or non-obvious layout logic. Avoid comments that
   only repeat what the code already says.

## NIRVAAH Global UI/UX Design System

Use the shared NIRVAAH shell, tokens, page container, panels, buttons, fields,
tabs, badges, tables and assistant entry point as the permanent frontend
foundation. Refine pages sequentially and improve shared components when a
pattern repeats.

- Treat dashboard pages as operational workspaces, not marketing pages.
- Put the user's primary decision flow first; move supporting analytics lower.
- Prefer structured tables/lists for scanning and comparison.
- Avoid excessive cards, decorative gradients, heavy shadows, random accent
  colors, repeated copy and giant dashboard headings.
- Keep status, risk, warning and workflow labels consistent across modules.
- Keep AI implementation details inside `NIRVAAH-AI`; integrate through public
  exports only.

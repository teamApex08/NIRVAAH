## NIRVAAH-AI

`NIRVAAH-AI` owns the complete AI Assistant surface for the NIRVAAH product:

- the full `/nirvaah/ai-assistant` conversational page
- the floating quick-assistant widget
- embedded assistant panels used by dashboard pages
- assistant prompts, static prototype responses, route context, and handoff storage
- AI-owned UI primitives required by those surfaces

The web app should integrate through the public package entry only:

```js
import {
  AiAssistantPage,
  FloatingAiAssistantWidget,
  AskNirvaah,
  ProjectsAssistantPanel,
  EarlyWarningsAssistant,
} from "@nirvaah/ai";
```

Do not import files from `NIRVAAH-AI/src/components`, `src/data`, `src/services`,
or `src/ui` directly from the main application. Those folders are internal
implementation details of the AI module.

### Host Integration

`vite.integration.js` exposes the Vite alias and filesystem allow-list needed by
the local web host while keeping the integration details in this module:

```js
import { getNirvaahAiViteIntegration } from "../NIRVAAH-AI/vite.integration.js";

const nirvaahAi = getNirvaahAiViteIntegration(import.meta.url);
```

Import `NIRVAAH-AI/styles.css` from the host stylesheet so Tailwind includes
assistant-owned component classes without the host referencing internal source
folders directly.

`NIRVAAH-AI` declares React and React Router as peer dependencies because the
host application supplies the active router and React runtime. `lucide-react` is
declared by this package because assistant-owned components render their own
icons.

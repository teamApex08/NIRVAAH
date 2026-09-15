import { fileURLToPath } from "node:url";

export const NIRVAAH_AI_PACKAGE_NAME = "@nirvaah/ai";

export function getNirvaahAiViteIntegration(hostConfigUrl = import.meta.url) {
  const hostDependency = (dependencyPath) => fileURLToPath(new URL(dependencyPath, hostConfigUrl));

  return {
    alias: [
      { find: NIRVAAH_AI_PACKAGE_NAME, replacement: fileURLToPath(new URL("./src/index.js", import.meta.url)) },
      { find: /^react$/, replacement: hostDependency("./node_modules/react/index.js") },
      { find: /^react\/jsx-runtime$/, replacement: hostDependency("./node_modules/react/jsx-runtime.js") },
      { find: /^react\/jsx-dev-runtime$/, replacement: hostDependency("./node_modules/react/jsx-dev-runtime.js") },
      { find: /^react-dom$/, replacement: hostDependency("./node_modules/react-dom/index.js") },
      { find: /^react-router$/, replacement: hostDependency("./node_modules/react-router/dist/development/index.mjs") },
      { find: /^react-router-dom$/, replacement: hostDependency("./node_modules/react-router-dom/dist/index.mjs") },
      { find: /^lucide-react$/, replacement: hostDependency("./node_modules/lucide-react/dist/esm/lucide-react.mjs") },
    ],
    fsAllow: fileURLToPath(new URL(".", import.meta.url)),
  };
}

import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import { getNirvaahAiViteIntegration } from "../NIRVAAH-AI/vite.integration.js";

const nirvaahAi = getNirvaahAiViteIntegration(import.meta.url);

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: nirvaahAi.alias,
  },
  server: {
    fs: {
      // NIRVAAH-AI is consumed through its public package-style interface.
      allow: [
        fileURLToPath(new URL(".", import.meta.url)),
        nirvaahAi.fsAllow,
      ],
    },
  },
});

import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./styles.css";

// React 19 mounts the whole frontend into the single #root element from
// index.html. StrictMode helps catch unsafe React patterns during development.
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

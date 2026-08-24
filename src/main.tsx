import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "../app/page";
// The CSS file is handled by the bundler and has no TypeScript declarations.
// @ts-expect-error -- side-effect CSS import
import "../app/globals.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Home />
  </StrictMode>,
);

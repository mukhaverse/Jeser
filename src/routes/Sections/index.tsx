import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Sections } from "./screens/Sections";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Sections />
  </StrictMode>,
);

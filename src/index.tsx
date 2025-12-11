import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AnimaProvider } from "@animaapp/playground-react-sdk";
import { App } from "./App";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <AnimaProvider>
      <App />
    </AnimaProvider>
  </StrictMode>,
);

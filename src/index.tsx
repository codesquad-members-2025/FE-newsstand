import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import App from "./App.tsx";
import AppProvider from "./AppProvider.tsx";

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </StrictMode>
);

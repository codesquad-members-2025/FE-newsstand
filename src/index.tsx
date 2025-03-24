import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import GlobalStyles from "./styles/GlobalStyles.tsx";
import ResetStyles from "./styles/ResetStyles.tsx";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <ResetStyles />
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </StrictMode>
);

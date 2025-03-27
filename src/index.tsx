import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import GlobalStyles from "./styles/GlobalStyles.tsx";
import ResetStyles from "./styles/ResetStyles.tsx";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme.ts";

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <ResetStyles />
      <GlobalStyles />
      {/* */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
      {/* */}
    </ThemeProvider>
  </StrictMode>
);

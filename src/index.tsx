import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import GlobalStyles from "./styles/GlobalStyles.tsx";
import ResetStyles from "./styles/ResetStyles.tsx";

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <ResetStyles />
    <GlobalStyles />
    {/* 라우팅 영역 시작 */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* 라우팅 영역 끝 */}
  </StrictMode>
);

import React from "react";
import { NewsProvider } from "./contexts/NewsContext.tsx";
import { ThemeProvider } from "./contexts/ThemeContext";
import { SubscribedProvider } from "./contexts/SubscribedContext.tsx";
import ResetStyles from "./styles/ResetStyles.tsx";
import GlobalStyles from "./styles/GlobalStyles.tsx";
import { BrowserRouter } from "react-router-dom";

interface AppProviderProps {
  children: React.ReactNode;
}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  return (
    <NewsProvider>
      <ThemeProvider>
        <SubscribedProvider>
          <ResetStyles />
          <GlobalStyles />
          <BrowserRouter>
            {children}
          </BrowserRouter>
        </SubscribedProvider>
      </ThemeProvider>
    </NewsProvider>
  );
};

export default AppProvider;

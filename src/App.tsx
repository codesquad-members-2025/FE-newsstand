import React, { useState } from "react";
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import styled from "@emotion/styled";
import Header from "./components/Header/Header";
import AutoRollingArea from "./components/AutoRollingArea/AutoRollingArea";
import MainRoutes from "./components/MainArea/MainRoutes";
import darkTheme from "./styles/theme/darkTheme";
import lightTheme from "./styles/theme/lightTheme";

function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <EmotionThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GridLayout>
        <Header toggleTheme={toggleTheme} />
        <AutoRollingArea />
        <MainRoutes />
      </GridLayout>
    </EmotionThemeProvider>
  );
}

const GridLayout = styled.div`
  display: grid;
  grid-template-rows: 3.063rem 3.063rem auto;
  grid-template-columns: 58.125rem;
  row-gap: 1.5rem;
  min-height: 100vh;
`;

export default App;

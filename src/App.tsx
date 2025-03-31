import React, { useState } from "react";
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import styled from "@emotion/styled";
import Header from "./components/Header/Header";
import AutoRollingArea from "./components/AutoRollingArea/AutoRollingArea";
import AppRoutes from "./AppRoutes";
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
        <AppRoutes />
      </GridLayout>
    </EmotionThemeProvider>
  );
}

const GridLayout = styled.div`
  display: grid;
  grid-template-rows: 49px 49px 436px;
  grid-template-columns: 930px;
  row-gap: 32px;
  min-height: 100vh;
`;

export default App;

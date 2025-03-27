import React, { useState } from "react";
import { ThemeProvider } from "@emotion/react";
import styled from "@emotion/styled";
import Header from "./components/Header/Header";
import AutoRollingArea from "./components/AutoRollingArea/AutoRollingArea";
import AppRoutes from "./AppRouter";
import darkTheme from "./styles/theme/darkTheme";
import lightTheme from "./styles/theme/lightTheme";

const GridLayout = styled.div`
  display: grid;
  grid-template-rows: auto auto 1fr;
  grid-template-columns: 1fr;
  min-height: 100vh;
`;

function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GridLayout>
        <Header toggleTheme={toggleTheme} />
        <AutoRollingArea />
        <AppRoutes />
      </GridLayout>
    </ThemeProvider>
  );
}

export default App;

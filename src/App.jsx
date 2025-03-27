import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./style";
import { useContext, useState } from "react";
import ThemeProvider from "./utils/ThemeProvider";
import GlobalStyle from "./style/GlobalStyle";
import NewsStandPage from "./containers/NewsStandPage";
import { ThemeContext } from "./utils/ThemeContext";

function ThemedApp() {
  const { theme } = useContext(ThemeContext); // 이제 정상 작동

  return (
    <StyledThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <NewsStandPage />
    </StyledThemeProvider>
  );
}

function App() {
  return (
    <ThemeProvider>
      <ThemedApp />
    </ThemeProvider>
  );
}

export default App;

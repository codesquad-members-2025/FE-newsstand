/** @jsxImportSource @emotion/react */
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { darkTheme, lightTheme } from './themes';
import { GlobalStyle } from '../../styles/GlobalStyle';

export default function ThemeProvider({ children, isDarkMode }) {
  return (
    <EmotionThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      {children}
    </EmotionThemeProvider>
  );
}

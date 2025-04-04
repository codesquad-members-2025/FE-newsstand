/** @jsxImportSource @emotion/react */
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';

import { GlobalStyle } from '@/styles/GlobalStyle';

import { darkTheme, lightTheme } from './themes';

export default function ThemeProvider({ children, isDarkMode }) {
  return (
    <EmotionThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      {children}
    </EmotionThemeProvider>
  );
}

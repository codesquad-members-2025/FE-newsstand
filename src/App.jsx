/** @jsxImportSource @emotion/react */
import { useState } from 'react';

import StackLayout from '@components/common/layout';
import Header from '@components/Header';
import Media from '@components/Media';
import NewsRolling from '@components/NewsRolling';
import DarkModeToggle from '@components/Theme/DarkModeToggle';
import ThemeProvider from '@components/Theme/ThemeProvider';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <ThemeProvider isDarkMode={isDarkMode}>
      <StackLayout spacing={['20px', '40px', '32px']}>
        <DarkModeToggle isDarkMode={isDarkMode} onToggle={toggleTheme} />
        <Header />
        <NewsRolling />
        <Media />
      </StackLayout>
    </ThemeProvider>
  );
}

export default App;
